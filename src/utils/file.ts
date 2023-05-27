import { Injectable } from '@nestjs/common';
import { promises as fsPromises } from 'fs';

@Injectable()
export class FileService {
  async deleteFile(filename: string): Promise<void> {
    try {
      await fsPromises.unlink(filename);
    } catch (error) {
      console.log(error);
    }
  }
}
