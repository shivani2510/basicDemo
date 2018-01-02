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
/**
 * @Author : Dinesh shah (dinesh.shah@kahunasystems.com).
 * @description : WebService Module for http request methods.
 *
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var webservice_1 = require("./webservice");
var webserviceconfig_1 = require("./webserviceconfig");
var WebServiceModule = WebServiceModule_1 = (function () {
    function WebServiceModule() {
    }
    WebServiceModule.forRoot = function (config) {
        return {
            ngModule: WebServiceModule_1,
            providers: [
                { provide: webserviceconfig_1.WebServiceConfig, useValue: config }
            ]
        };
    };
    ;
    return WebServiceModule;
}());
WebServiceModule = WebServiceModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, http_1.JsonpModule],
        providers: [webservice_1.WebService]
    }),
    __metadata("design:paramtypes", [])
], WebServiceModule);
exports.WebServiceModule = WebServiceModule;
var WebServiceModule_1;
//# sourceMappingURL=web-service.module.js.map