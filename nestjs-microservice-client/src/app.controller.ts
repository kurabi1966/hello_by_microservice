import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private client: ClientProxy) {}

  @Get('hello/:name')
  hello(@Param('name') name = 'there'): Observable<string> {
    return this.client.send({ cmd: 'hello' }, name);
  }
  @Get('bey/:name')
  bey(@Param('name') name = 'there'): Observable<string> {
    return this.client.send({ cmd: 'bey' }, name);
  }

}
