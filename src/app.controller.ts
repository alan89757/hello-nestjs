import { BullModule } from '@nestjs/bull';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    BullModule.registerQueue({
      name: 'audo',
      redis: {
        port: 6380,
      },
    });
    return this.appService.getHello();
  }
}
