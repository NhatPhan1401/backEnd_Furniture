import { config } from 'dotenv';

import {
  CloudFrontClient,
  CreateInvalidationCommand,
  CreateInvalidationCommandInput,
} from '@aws-sdk/client-cloudfront';
import moment from 'moment';

config();

const accessKey = process.env.IAM_ACCESS_KEY;
const secretKey = process.env.IAM_SECRET_KEY;
const cloudFrontDistId = process.env.CLOUDFRONT_DISTRIBUTION_ID;
const region = process.env.BUCKET_REGION;

const cloudFront = new CloudFrontClient({
  region,
  credentials: {
    accessKeyId: accessKey as string,
    secretAccessKey: secretKey as string,
  },
});

export const invalidateCache = async (image: string) => {
  const params: CreateInvalidationCommandInput = {
    DistributionId: cloudFrontDistId,
    InvalidationBatch: {
      CallerReference: moment().toString(),
      Paths: {
        Quantity: 1,
        Items: [`/${image}`],
      },
    },
  };
  const invalidationCommand = new CreateInvalidationCommand(params);
  const res = await cloudFront.send(invalidationCommand);
  console.log('test', res);
  return res;
};
