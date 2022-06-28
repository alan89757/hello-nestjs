import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

// redis://default:redispw@localhost:55000

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      redis: {
        host: 'localhost',
        port: 55000,
      },
    }),
  ],
})
export class AppModule {}
