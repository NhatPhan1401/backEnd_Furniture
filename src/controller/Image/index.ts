import { NextFunction, Request, Response } from 'express';
import { randomImageName, uploadFile } from '../../utils/s3';

const uploadImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const buffer = req.file?.buffer;
    const mimetype = req.file?.mimetype;

    if (!buffer || !mimetype)
      return res.status(404).json({ message: 'Invalid File' });

    const image = randomImageName();

    const data = await uploadFile({
      name: image,
      buffer,
      mimetype,
    });
    return res.status(200).json({ data, image });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default {
  uploadImage,
};
