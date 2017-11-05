import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "../shared/auth.service";
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/do'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private as: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.as.user
        .take(1)
        .map(user => !!user)
        .do(auth => {
          if(!auth) {
            this.router.navigate(['/login'])
          }
        })
  }
}
