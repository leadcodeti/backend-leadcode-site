import { Controller, Get } from '@nestjs/common';

@Controller('/sites')
export class SiteController {
  @Get()
  async listSite() {
    return 'listando sites';
  }
}
