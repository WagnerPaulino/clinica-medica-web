import { Consulta } from './consulta';
import { Usuario } from './usuario';
export class Recepcionista extends Usuario {
    id: Number;
    adm: Boolean;
    cpfExistente: String;
    consultas: Consulta[] = [];
}
