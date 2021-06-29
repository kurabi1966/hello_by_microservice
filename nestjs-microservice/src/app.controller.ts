import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'hello' })
  helllo(input?: string): string {
    console.log(`Recived a command hello with name ${input}`);
    
    return this.appService.hello(input);
  }
}
