import { NextFunction, Request, Response } from 'express';
import { invalidateCache } from '../../utils/cloudfront';
import { deleteFile, randomImageName, uploadFile } from '../../utils/s3';

const uploadImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const buffer = req.file?.buffer;
    const mimetype = req.file?.mimetype;
    const name: string | undefined = req.body.name;

    if (!buffer || !mimetype)
      return res.status(404).json({ message: 'Invalid File' });

    const image = name || randomImageName();

    const data = await uploadFile({
      name: image,
      buffer,
      mimetype,
    });
    if (name) await invalidateCache(name);
    return res.status(200).json({ data, image });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const deleteImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const name: string | undefined = req.body.name;

    if (!name) return res.status(404).json({ message: 'Invalid File' });
    await deleteFile(name);
    await invalidateCache(name);
    return res.status(200).json({ message: 'Image removed' });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default {
  uploadImage,
  deleteImage,
};
