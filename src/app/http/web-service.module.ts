/**
 * @Author : Dinesh shah (dinesh.shah@kahunasystems.com).
 * @description : WebService Module for http request methods.
 *
 */
import {ModuleWithProviders, NgModule,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {WebService} from './webservice';
import {WebServiceConfig} from './webserviceconfig';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, JsonpModule],
  providers: [WebService]
})
export class WebServiceModule {

  static forRoot(config: WebServiceConfig): ModuleWithProviders {
    return {
      ngModule: WebServiceModule,
      providers: [
        {provide: WebServiceConfig, useValue: config}
      ]
    };
  }

  constructor() {
  };

}
