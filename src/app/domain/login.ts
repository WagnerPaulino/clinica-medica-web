import { Paciente } from './paciente';
import { Medico } from './medico';
import { Proprietario } from './proprietario';
import { Recepcionista } from './recepcionista';
export class Login {
    id: number;
    usuario: string;
    senha: string;
    medico: Medico;
    paciente: Paciente;
    proprietario: Proprietario;
    recepcionista: Recepcionista;
}
