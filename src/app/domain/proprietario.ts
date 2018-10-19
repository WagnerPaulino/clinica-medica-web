import { Recepcionista } from './recepcionista';
import { Usuario } from './usuario';
import { Login } from './login';
export class Proprietario extends Usuario {
    id: Number;
    recepcionista: Recepcionista[] = [];
    login: Login = new Login();
}
