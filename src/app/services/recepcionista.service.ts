import { Observable } from 'rxjs';
import { Recepcionista } from './../domain/recepcionista';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecepcionistaService {
  private urlbase = environment.urlBase + 'recepcionistas';
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.urlbase}`);
  }

  findOne(id) {
    return this.http.get(`${this.urlbase}/${id}`);
  }

  inserir(recepcionista: Recepcionista) {
    return this.http.post(this.urlbase, recepcionista);
  }

  alterar(recepcionista: Recepcionista) {
    return this.http.put(`${this.urlbase}/${recepcionista.id}`, recepcionista);
  }

  deletar(recepcionista: Recepcionista) {
    return this.http.delete(`${this.urlbase}/${recepcionista.id}`);
  }

}
