export class CreateProjectCardImageDTO {
  projectCardId: string;
  key: string;
  name: string;
  url: string;
  size: number;
  isCover: boolean;
  file: Express.Multer.File;
}
