export type S3UploadFile = {
  name: string;
  buffer: Buffer | string | Blob;
  mimetype: string;
};
