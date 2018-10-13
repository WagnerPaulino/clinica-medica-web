import { Recepcionista } from './recepcionista';
import { Usuario } from './usuario';
export class Proprietario extends Usuario {
    id: Number;
    recepcionista: Recepcionista[] = [];
}
