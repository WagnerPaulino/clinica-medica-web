import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlbase = environment.urlBase + 'login';
  constructor(private http: HttpClient) { }

  sign(usuario, senha) {
    return this.http.post(`${this.urlbase}`, {usuario, senha});
  }
}
