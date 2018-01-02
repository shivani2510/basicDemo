import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {LayoutModule} from './layout/layout.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './feature/auth/auth.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {WebServiceModule} from './http/web-service.module';
import {Url} from './http/url-constants';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    WebServiceModule.forRoot({serverUrl: Url.serverUrl}),
    LayoutModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
