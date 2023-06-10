import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Logging from './library/Logging';

import cors from 'cors';
import { config } from 'dotenv';
import { createClient } from 'redis';
import {
  analysisRouter,
  authRouter,
  imageRouter,
  orderedRouter,
  paymentRouter,
  productRouter,
  subscriptionRouter,
  templateRouter,
  userRouter,
} from './routes';

const app = express();
config();
const client = createClient({
  url: process.env.REDIS,
});
/** Connect to Mongo */
mongoose
  .connect(process.env.MONGO_DB || '', { retryWrites: true, w: 'majority' })
  .then(() => {
    client
      .connect()
      .then(() => Logging.info('Redis connected successfully.'))
      .catch((error) => Logging.error(error));
    Logging.info('Mongo connected successfully.');
    StartServer();
  })
  .catch((error) => Logging.error(error));

import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2022-11-15',
  typescript: true,
});

/** Only Start Server if Mongoose Connects */
const StartServer = () => {
  /** Log the request */
  app.use((req, res, next) => {
    /** Log the req */
    Logging.info(
      `Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on('finish', () => {
      /** Log the res */
      Logging.info(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });

  /** Config cors and express body parser */
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    cors({
      origin: [process.env.FRONT_END_URL || '', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      credentials: true,
      allowedHeaders: [
        'Content-Type',
        'X-Requested-With',
        'X-HTTP-Method-Override',
        'Accept',
        'Authorization',
      ],
    })
  );
  app.set('trust proxy', 1);

  /** Rules of our API */
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method == 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, PATCH, DELETE, GET'
      );
      return res.status(200).json({});
    }

    next();
  });

  /** Redis Cache */
  app.use(async (req, res, next) => {
    const key = req.originalUrl;
    try {
      const data = await client.get(key);
      if (data !== null) {
        res.send(data);
      } else {
        next();
      }
    } catch (err) {
      throw err;
    }
  });
  /** Cookie */
  app.set('trust proxy', 1);

  /** Routes */
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/product', productRouter);
  app.use('/payment', paymentRouter);
  app.use('/image', imageRouter);
  app.use('/ordered', orderedRouter);
  app.use('/analysis', analysisRouter);
  app.use('/template', templateRouter);
  app.use('/subscription', subscriptionRouter);

  /** Healthcheck */
  app.get('/ping', (req, res, next) =>
    res.status(200).json({ message: 'pung' })
  );

  /** Error handling */
  app.use((req, res, next) => {
    const error = new Error('Not found');

    Logging.error(error);

    res.status(404).json({
      message: error.message,
    });
  });

  http
    .createServer(app)
    .listen(process.env.BE_PORT, () =>
      Logging.info(`Server is running on port ${process.env.BE_PORT}`)
    );
};
