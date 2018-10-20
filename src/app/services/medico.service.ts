import { Medico } from './../domain/medico';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private urlbase = environment.urlBase + 'medicos';
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.urlbase}`);
  }

  findOne(id) {
    return this.http.get(`${this.urlbase}/${id}`);
  }

  findMedicoByConsulta() {
    return this.http.get(`${this.urlbase}/consulta`);
  }

  inserir(medico: Medico) {
    return this.http.post(this.urlbase, medico);
  }

  alterar(medico: Medico) {
    return this.http.put(`${this.urlbase}/${medico.id}`, medico);
  }

  deletar(medico: Medico) {
    return this.http.delete(`${this.urlbase}/${medico.id}`);
  }

}
