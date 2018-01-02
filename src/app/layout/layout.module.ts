import {NgModule} from '@angular/core';

import {LayoutRoutingModule} from './layout-routing.module';
import {BasicComponent} from './basic-layout/basic-layout.component';
import {SharedModule} from '../shared/shared.module';
import {BasicHeaderComponent} from './header/basic-header/basic-header.component';
import { BasicFooterComponent } from './footer/basic-footer/basic-footer.component';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [BasicComponent, BasicHeaderComponent, BasicFooterComponent]
})
export class LayoutModule {
}
