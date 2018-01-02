import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import {CommonCookieService} from '../../../core/common.cookie.service';
import {Router} from '@angular/router';

@Injectable()
export class LogoutService {
  constructor(private authService: AuthService, private commonCookieService: CommonCookieService,
              private router: Router) {

  }

  logoutUser() {
    this.authService.logoutUser().subscribe((response) => {
      if (response) {
        this.commonCookieService.removeCookie('user');
        this.router.navigate(['homepage']);
      }
    }, (reject) => {

    });
  }
}
