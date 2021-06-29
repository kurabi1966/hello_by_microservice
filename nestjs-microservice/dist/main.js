"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
(async () => {
    const port = process.env.PORT ? process.env.PORT : 8080;
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port
        }
    });
    app.listen(() => console.log('Microservice listening on port:', port));
})();
//# sourceMappingURL=main.js.map