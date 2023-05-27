import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileService } from 'src/utils/file';
import { TopFooterLogoController } from './topFooterLogo.controller';
import { TopFooterLogoService } from './topFooterLogo.service';
import { PrismaTopFooterLogoRepository } from './repositories/prisma/topFooterLogo.repository';

@Module({
  controllers: [TopFooterLogoController],
  providers: [
    TopFooterLogoService,
    PrismaService,
    FileService,
    {
      provide: 'TopFooterLogoRepository',
      useClass: PrismaTopFooterLogoRepository,
    },
  ],
})
export class TopFooterLogoModule {}
