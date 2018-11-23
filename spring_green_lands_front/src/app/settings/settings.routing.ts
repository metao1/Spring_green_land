import {SettingsComponent} from '@app/settings/settings.component';
import {SettingsScheduleComponent} from '@app/settings/settings-schedule/settings-schedule.component';
import {SettingsUserComponent} from '@app/settings/settings-user/settings-user.component';

export const SETTINGS_ROUTES = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            {
                path: 'schedule',
                component: SettingsComponent,
                children: [
                    {
                        path: '',
                        component: SettingsScheduleComponent,
                        outlet: 'settings'
                    }
                ]
            },
            {
                path: 'component',
                component: SettingsComponent
            },
            {
                path: 'user',
                component: SettingsComponent,
                children: [
                    {
                        path: '',
                        component: SettingsUserComponent,
                        outlet: 'settings'
                    }
                ]
            },
            {
                path: 'rpi',
                loadChildren: '@app/settings/settings-rpi/settings-rpi.module#SettingsRPiModule'
            },
        ]
    }
];
