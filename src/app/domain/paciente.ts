import { Medico } from './medico';
import { Recepcionista } from './recepcionista';
import { Consulta } from './consulta';
import { Usuario } from './usuario';
import { Login } from './login';

export class Paciente extends Usuario {
    idPaciente: Number;
    consultas: Consulta[] = [];
    recepcionistas: Recepcionista[] = [];
    medico: Medico = new Medico();
    login: Login = new Login();
}
