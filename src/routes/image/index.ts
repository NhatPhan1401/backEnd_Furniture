import { Router } from 'express';
import { imageController } from '../../controller';
import upload from '../../middleware/upload';

import { validateAdmin, validateToken } from '../../middleware/validate';

const router = Router();

router.post(
  '/upload',
  validateToken,
  upload.single('image'),
  imageController.uploadImage
);

router.delete(
  '/delete',
  validateToken,
  validateAdmin,
  imageController.deleteImage
);

export default router;
