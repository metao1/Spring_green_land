import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '@app/authentication/authentication.service';

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(
      private auth: AuthenticationService,
      private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {

      const userRoles: Object[] = this.auth.getRoles() as Object[];
      const routeRoles: string[] = route.data['roles'];
      const roles: string = routeRoles.join();

      for (const r in userRoles) {
        if (roles.includes(userRoles[r]['authority'])) {
          return true;
        }
      }

      this.router.navigate(['unauthorized']);
      return false;
    }
}
