import { Consulta } from './consulta';
import { Usuario } from './usuario';
export class Recepcionista extends Usuario {
    id: Number;
    login: String;
    senha: String;
    adm: Boolean;
    cpfExistente: String;
    consultas: Consulta[] = [];
}
