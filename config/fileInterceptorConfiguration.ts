import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { FileInterceptorProps } from 'types/types';

export const fileInterceptor = ({ filename }: FileInterceptorProps) => {
  return FileInterceptor(filename, {
    storage: memoryStorage(),
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
    fileFilter: (req, file, callback) => {
      if (!file.mimetype.match(/image\/(jpeg|png|gif|webp)/)) {
        return callback(
          new Error('Apenas imagens JPEG, PNG, GIF e WEBP são permitidas'),
          false,
        );
      }
      callback(null, true);
    },
  });
};

export const videoInterceptor = ({ filename }: FileInterceptorProps) => {
  return FileInterceptor(filename, {
    storage: memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 },
  });
};
