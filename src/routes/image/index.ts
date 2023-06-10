import { Router } from 'express';
import { imageController } from '../../controller';
import upload from '../../middleware/upload';

import { validateToken } from '../../middleware/validate';

const router = Router();

router.post(
  '/upload',
  validateToken,
  upload.single('image'),
  imageController.uploadImage
);

export default router;
