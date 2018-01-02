import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicComponent} from './basic-layout/basic-layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {
    path: '', component: BasicComponent,
    children: [
      {path: 'admin', loadChildren: 'app/feature/dashboard/dashboard.module#DashboardModule'},
      {path: 'staff', loadChildren: 'app/feature/dashboard/dashboard.module#DashboardModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
