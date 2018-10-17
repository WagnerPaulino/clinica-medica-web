import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../domain/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlbase = environment.urlBase + 'login';
  private login: Login;
  constructor(private http: HttpClient, private router: Router) { }

  sign(usuario, senha) {
    return this.http.post(`${this.urlbase}`, {usuario, senha}).subscribe((login: any) => {
      this.login = login;
      if(this.isLogged()){
        this.router.navigate(['']);
      }
    });
  }

  getUserLogged() {
    return this.login;
  }

  isLogged(){
    return this.login ? true : false;
  }
}
