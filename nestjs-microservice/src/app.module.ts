import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeyController } from './bey.controller';

@Module({
  imports: [],
  controllers: [AppController, BeyController],
  providers: [AppService],
})
export class AppModule {}
