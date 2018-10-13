import { Medico } from './medico';
export class Consulta {
    id: Number;
    descricao: String;
    especialidade: String;
    diagnostico: String;
    exame?: String;
    tratamento: String;
    sintomas: String;
    peso: Number;
    altura: Number;
    pressao: Number;
    dtConsulta: String;
    dtRetorno: String;
    valorConsulta: Number;
    medico: Medico = new Medico();
}
