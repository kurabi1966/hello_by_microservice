import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello(input?: string): string {
    return `Hello, ${input || 'there'}!`;
  }

  bey(input?: string): string {
    return `Bey, ${input || 'there'}!`;
  }
}
