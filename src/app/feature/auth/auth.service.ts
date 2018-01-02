/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 22/12/17 10:50 AM*******/
import {Injectable} from '@angular/core';
import {UserLoginProto} from './auth.constants';
import {Observable} from 'rxjs/Observable';
import {CommonCookieService} from '../../core/common.cookie.service';

@Injectable()
export class AuthService {

  constructor(private commonCookieService: CommonCookieService) {

  }

  authenticateUser(data: UserLoginProto): Observable<any> {
    return new Observable((observe) => {
      if (data.userName === 'admin' && data.password === 'admin') {
        this.commonCookieService.setCookie('user', data.userName);
        observe.next({isAdmin: true, isStaff: false});
      } else if (data.userName === 'staff' && data.password === 'Demo1234') {
        this.commonCookieService.setCookie('user', data.userName);
        observe.next({isAdmin: false, isStaff: true});
      } else {
        observe.next(false)
      }
    });
  }

  logoutUser(): Observable<any> {
    return new Observable((observe) => {
      observe.next(true);
    });
  }
}
