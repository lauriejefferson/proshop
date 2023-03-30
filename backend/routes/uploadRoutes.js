import path from 'path';
import express from 'express';
import multer from 'multer';
import cloudinaryES6 from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

const router = express.Router();

const cloudinary = cloudinaryES6.v2;

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Folder name',
    allowed_formats: ['jpeg', 'png', 'jpg'],
  },
});

const upload = multer({
  storage,
});

router.post('/', upload.single('image'), (req, res) => {
  const uploadImageUrl = req.file.path;
  res.send(uploadImageUrl);
});

export default router;
