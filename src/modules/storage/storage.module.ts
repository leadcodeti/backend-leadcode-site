import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from 'src/modules/storage/heroImage/storage.controller';

@Module({
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}
