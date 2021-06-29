"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeyController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("./app.service");
let BeyController = class BeyController {
    constructor(appService) {
        this.appService = appService;
    }
    bey(input) {
        console.log(`Recived a command bey with name ${input}`);
        return this.appService.bey(input);
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'bey' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BeyController.prototype, "bey", null);
BeyController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], BeyController);
exports.BeyController = BeyController;
//# sourceMappingURL=bey.controller.js.map