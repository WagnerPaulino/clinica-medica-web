import { Consulta } from './consulta';
import { Usuario } from './usuario';
export class Medico extends Usuario {
    id: Number;
    idCrm: Number;
    especialidade: String;
    consultas: Consulta[] = [];
}
