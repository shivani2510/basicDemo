import {NgModule} from '@angular/core';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../../shared/shared.module';
import {AuthService} from './auth.service';
import {LogoutService} from './logout/logout.service';
import {AuthGuardService} from './auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService, LogoutService, AuthGuardService]
})
export class AuthModule {
}
