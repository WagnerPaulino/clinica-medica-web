import { Observable } from 'rxjs';
import { Proprietario } from './../domain/proprietario';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {
  private urlbase = environment.urlBase + 'proprietarios';
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.urlbase}`);
  }

  findOne(id) {
    return this.http.get(`${this.urlbase}/${id}`);
  }

  inserir(proprietario: Proprietario) {
    return this.http.post(this.urlbase, proprietario);
  }

  alterar(proprietario: Proprietario) {
    return this.http.put(`${this.urlbase}/${proprietario.id}`, proprietario);
  }

  deletar(proprietario: Proprietario) {
    return this.http.delete(`${this.urlbase}/${proprietario.id}`);
  }

}
