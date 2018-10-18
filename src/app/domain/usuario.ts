import { Login } from './login';

export class Usuario {
    nome?: String;
    cpf: String;
    rg: Number;
    celular: String;
    residencial: String;
    dtNascimento: String;
    sexo: String;
    numCasa: Number;
    cidade: String;
    bairro: String;
    cep: String;
    login: Login = new Login();
}
