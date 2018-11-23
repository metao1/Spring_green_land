import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DashboardComponentsModule} from '@app/dashboard-components/dashboard-components.module';
import {SharedModule} from '@app/shared/shared.module';

import {DASHBOARD_BUILDER_ROUTES} from '@app/dashboard-builder/dashboard-builder.routing';
import {DashboardBuilderComponent} from './dashboard-builder.component';
import {DashboardBuilderToolbarComponent} from './dashboard-builder-toolbar/dashboard-builder-toolbar.component';
import {PanelComponent} from './components/panel/panel.component';
import {PanelMenuDirective} from './directive/panel-menu.directive';

import {DashboardBuilderService} from './service/dashboard-builder.service';

@NgModule({
  imports: [
    DashboardComponentsModule,
    SharedModule,
    RouterModule.forChild(DASHBOARD_BUILDER_ROUTES)
  ],
  declarations: [
    DashboardBuilderComponent,
    DashboardBuilderToolbarComponent,
    PanelComponent,
    PanelMenuDirective
  ],
  exports: [
    DashboardBuilderComponent,
    PanelMenuDirective
  ],
  providers: [
    DashboardBuilderService
  ]
})
export class DashboardBuilderModule {}
