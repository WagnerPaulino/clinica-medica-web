import { Observable } from 'rxjs';
import { Consulta } from './../domain/consulta';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private urlbase = environment.urlBase + 'consultas';
  constructor(private http: HttpClient) { }

  gerarProntuario(id) {
    return `${this.urlbase}/prontuario/${id}`;
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.urlbase}`);
  }

  findOne(id) {
    return this.http.get(`${this.urlbase}/${id}`);
  }

  inserir(consulta: Consulta) {
    return this.http.post(this.urlbase, consulta);
  }

  alterar(consulta: Consulta) {
    return this.http.put(`${this.urlbase}/${consulta.id}`, consulta);
  }

  deletar(consulta: Consulta) {
    return this.http.delete(`${this.urlbase}/${consulta.id}`);
  }

}
