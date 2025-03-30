import * as sharp from 'sharp';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { FileService } from '../src/utils/file';

@Injectable()
export class SharpService {
  constructor(private readonly fileService: FileService) {}

  async sharpConfig(imagePath: string, isCover: boolean): Promise<void> {
    const isGifOrAnimatedWebp =
      path.extname(imagePath) === '.gif' || path.extname(imagePath) === '.webp';
    const suffix = '-compressed.webp';
    const webpPath = imagePath.replace(
      /(.png)|(.jpeg)|(.jpg)|(.gif)|(.webp)/,
      suffix,
    );

    await sharp(imagePath, { animated: isGifOrAnimatedWebp })
      .webp({ quality: 100 })
      .resize({
        width: isCover ? 600 : 750,
        height: isCover ? 450 : 400,
        fit: sharp.fit.fill,
      })
      .toFile(path.resolve(webpPath));

    await this.fileService.deleteFile(imagePath);
  }

  async sharpProcessBeforeMinio(
    file: Express.Multer.File,
    isCover: boolean,
  ): Promise<{ buffer: Buffer; newFilename: string }> {
    const isGifOrAnimatedWebp =
      file.mimetype === 'image/gif' || file.mimetype === 'image/webp';

    const newFilename =
      file.originalname.replace(/\.[^/.]+$/, '') + '-compressed.webp';

    const processedBuffer = await sharp(file.buffer, {
      animated: isGifOrAnimatedWebp,
    })
      .webp({ quality: 85 })
      .resize({
        width: isCover ? 600 : 750,
        height: isCover ? 450 : 400,
        fit: sharp.fit.cover,
      })
      .toBuffer();

    return { buffer: processedBuffer, newFilename };
  }
}
