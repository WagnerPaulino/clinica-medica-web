import { Consulta } from './consulta';
import { Usuario } from './usuario';
import { Login } from './login';
export class Medico extends Usuario {
    id: Number;
    idCrm: Number;
    especialidade: String;
    consultas: Consulta[] = [];
    login: Login = new Login();
}
