import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterService} from './toaster.service';
import {CommonCookieService} from './common.cookie.service';
import {CookieService} from 'angular2-cookie/core';

export function cookieServiceFactory() {
  return new CookieService();
}

@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  declarations: [],
  providers: [ToasterService, {
    provide: CookieService,
    useFactory: cookieServiceFactory
  }, CommonCookieService]
})
export class CoreModule {
}
