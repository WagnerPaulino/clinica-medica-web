import { Paciente } from './paciente';
import { Consulta } from './consulta';
import { Usuario } from './usuario';
import { Login } from './login';
export class Recepcionista extends Usuario {
    id: Number;
    adm: Boolean;
    cpfExistente: String;
    consultas: Consulta[] = [];
    login: Login = new Login();
    pacientes: Paciente[] = [];
}
