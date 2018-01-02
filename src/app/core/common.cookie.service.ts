/**
 * @author: shivani gajjar 13/4/17
 *
 */
import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {CookieOptionsArgs} from 'angular2-cookie/services/cookie-options-args.model';


@Injectable()
export class CommonCookieService {

  public expireDate: Date;
  public host: string;
  public cookieOptions: CookieOptionsArgs;

  constructor(public cookie: CookieService) {
  }

  getCookie(key: string) {
    return this.cookie.get(key);
  }

  getCookieObject(key: string): any {
    return this.cookie.getObject(key);
  }

  getAllCookie() {
    return this.cookie.getAll();
  }

  setCookie(key: string, value: string, options?: CookieOptionsArgs) {
    if (!options) {
      options = this.getCookieOptions();
    }
    this.cookie.put(key, value, options);
  }

  setObjectToCookie(key: string, value: Object, options?: CookieOptionsArgs) {
    if (!options) {
      options = this.getCookieOptions();
    }
    this.cookie.putObject(key, value, options);
  }

  removeCookie(key: string) {
    this.cookie.remove(key, this.getCookieOptions());
  }

  removeAllCookie() {
    this.cookie.removeAll();
  }

  getCookieOptions() {
    this.expireDate = new Date();
    this.expireDate.setDate(this.expireDate.getDate() + 1);
    this.host = window.location.hostname;
    this.cookieOptions = {
      'path': '/',
      'domain': this.host,
      'expires': this.expireDate,
      'secure': false

    };
    return this.cookieOptions;
  }
}
