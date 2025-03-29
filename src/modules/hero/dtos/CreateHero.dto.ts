export class CreateHeroDTO {
  homeId: string;
  key: string;
  name: string;
  url: string;
  size: number;
  file: Express.Multer.File;
}
