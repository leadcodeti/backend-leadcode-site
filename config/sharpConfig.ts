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
      .resize({
        width: isCover ? 600 : 750,
        height: isCover ? 450 : 400,
        fit: sharp.fit.outside,
      })
      .webp({ quality: 100 })
      .toFile(path.resolve(webpPath));

    await this.fileService.deleteFile(imagePath);
  }
}
