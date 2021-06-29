import { AppService } from './app.service';
export declare class BeyController {
    private readonly appService;
    constructor(appService: AppService);
    bey(input?: string): string;
}
