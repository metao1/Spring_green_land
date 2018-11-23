import {Routes} from '@angular/router';

import {DashboardComponent} from '@app/dashboard/dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'builder',
    loadChildren: '@app/dashboard-builder/dashboard-builder.module#DashboardBuilderModule'
  }
];
