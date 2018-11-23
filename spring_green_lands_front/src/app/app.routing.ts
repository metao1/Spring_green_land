import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from './authentication/guard/authentication.guard';
import {RoleGuard} from './authentication/guard/role.guard';
import {UnauthorizedComponent} from './shared/component/unauthorized/unauthorized.component';

const appRoutes: Routes = [

  {
    path: 'login',
    loadChildren: '@app/login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    loadChildren: '@app/dashboard/dashboard.module#DashboardModule'

  },
  {
    path: 'scheduling',
    canActivate: [AuthenticationGuard],
    loadChildren: '@app/dashboard/dashboard.module#DashboardModule'

  },
  {
    path: 'settings',
    canActivate: [AuthenticationGuard, RoleGuard],
    data: { roles : ['ROLE_ADMIN'] },
    loadChildren: '@app/settings/settings.module#SettingsModule'
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
