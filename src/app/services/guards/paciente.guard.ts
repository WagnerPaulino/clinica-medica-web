import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.loginService.isMedico()
            || this.loginService.isRecepcionista()
            || this.loginService.isProprietario()) {
        return true;
      }
      this.router.navigate(['']);
      return false;
  }
}
