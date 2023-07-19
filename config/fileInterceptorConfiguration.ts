import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileInterceptorProps } from 'types/types';

export const fileInterceptor = ({
  filename,
  destination,
}: FileInterceptorProps) => {
  return FileInterceptor(filename, {
    storage: diskStorage({
      destination,
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = '.webp';
        const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
        const filenameWithNoSpacesToLower = filename
          .replace(/[^a-zA-Z0-9-_.]/g, '-')
          .toLowerCase();
        callback(null, filenameWithNoSpacesToLower);
      },
    }),
  });
};

export const videoInterceptor = ({
  filename,
  destination,
}: FileInterceptorProps) => {
  return FileInterceptor(filename, {
    storage: diskStorage({
      destination,
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = '.mp4';
        const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
        const filenameWithNoSpacesToLower = filename
          .replace(/[^a-zA-Z0-9-_.]/g, '-')
          .toLowerCase();
        callback(null, filenameWithNoSpacesToLower);
      },
    }),
  });
};
