import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class BeyController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'bey' })
  bey(input?: string): string {
    console.log(`Recived a command bey with name ${input}`);
    return this.appService.bey(input);
  }
}
