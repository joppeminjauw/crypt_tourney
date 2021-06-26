import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CryptUser } from '../classes/cryptuser';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var user: CryptUser = JSON.parse(localStorage.getItem('currentUser'))
        if (user && user.authenticated) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/app-login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}