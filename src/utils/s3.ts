import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { config } from 'dotenv';
import { S3UploadFile } from '../models/image';

config();

const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKey = process.env.IAM_ACCESS_KEY;
const secretKey = process.env.IAM_SECRET_KEY;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId: accessKey as string,
    secretAccessKey: secretKey as string,
  },
});

//Random image name function with number and characters
export const randomImageName = () => {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 32; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

export const uploadFile = async (file: S3UploadFile) => {
  const params: PutObjectCommandInput = {
    Bucket: bucketName,
    Key: file.name,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(params);
  const data = await s3Client.send(command);

  return data;
};

export const deleteFile = async (fileName: string) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };

  const command = new DeleteObjectCommand(params);
  const data = await s3Client.send(command);

  return data;
};

export default s3Client;
