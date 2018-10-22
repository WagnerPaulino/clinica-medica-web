import { Observable } from 'rxjs';
import { Paciente } from './../domain/paciente';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private urlbase = environment.urlBase + 'pacientes';
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.urlbase}`);
  }

  findOne(id) {
    return this.http.get(`${this.urlbase}/${id}`);
  }

  findPacienteByConsulta(idConsulta) {
    return this.http.get(`${this.urlbase}/consulta/${idConsulta}`);
  }

  inserir(paciente: Paciente) {
    return this.http.post(this.urlbase, paciente);
  }

  alterar(paciente: Paciente) {
    return this.http.put(`${this.urlbase}/${paciente.idPaciente}`, paciente);
  }

  deletar(paciente: Paciente) {
    return this.http.delete(`${this.urlbase}/${paciente.idPaciente}`);
  }

}
