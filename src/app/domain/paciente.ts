import { Consulta } from './consulta';
import { Usuario } from './usuario';

export class Paciente extends Usuario {
    idPaciente: Number;
    consultas: Consulta[] = [];
}
