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
  private login?: Login = new Login();
  constructor(private http: HttpClient, private router: Router) { }

  sign(usuario, senha) {
    return this.http.post(`${this.urlbase}`, {usuario, senha}).subscribe((login: any) => {
      this.login = login;
      console.log(this.login);
      if (this.isLogged()) {
        this.router.navigate(['']);
      }
    });
  }

  getUserLogged() {
    return this.login;
  }

  isLogged() {
    return this.login.id ? true : false;
  }

  isMedico() {
    return this.login.medico ? true : false;
  }

  isPaciente() {
    return this.login.paciente ? true : false;
  }

  isProprietario() {
    return this.login.proprietario ? true : false;
  }

  isRecepcionista() {
    return this.login.recepcionista ? true : false;
  }
}
