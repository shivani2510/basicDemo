/**
 * Created by shivani on 13/4/17.
 */
import {Injectable} from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from './auth.service';
import {CommonCookieService} from '../../core/common.cookie.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private commonCookieService: CommonCookieService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.commonCookieService.getCookie('user')) {
      return true;

    }
    // Store the attempted URL for redirecting

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
