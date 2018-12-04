import {animate, Component, state, style, transition, trigger} from '@angular/core';
import {AuthenticationService} from '@app/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    animations: [
        trigger('signal', [
            state('void', style({
                'transform': 'translateY(-100%)',
                'opacity': '0'
            })),
            transition('* => *', animate(300))
        ])
    ]
})
export class NavigationComponent {

    show: boolean;

    constructor(
        public auth: AuthenticationService,
        public router: Router
    ) {
    }

    logout() {
        this.auth.doLogout();
        this.router.navigate(['login']).catch(err => console.log('error log out:' + err.toString()));
    }

    isShown() {
        if (this.auth.isLoggedIn()) {
            this.show = true;
            return true;
        }
    }

    goSetting() {
        this.router.navigate(['settings/component']).catch(err => console.log('error log out:' + err.toString()));
    }

    goScheduling() {
        this.router.navigate(['scheduling']).catch(err => console.log('error log out:' + err.toString()));
    }

    goDashboard() {
        this.router.navigate(['dashboard']).catch(err => console.log('error log out:' + err.toString()));
    }
}
