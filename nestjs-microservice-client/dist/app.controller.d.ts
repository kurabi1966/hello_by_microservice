import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class AppController {
    private client;
    constructor(client: ClientProxy);
    hello(name?: string): Observable<string>;
    bey(name?: string): Observable<string>;
}
