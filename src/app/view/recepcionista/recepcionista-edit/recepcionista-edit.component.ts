import { LoginService } from './../../../services/login.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecepcionistaService } from '../../../services/recepcionista.service';
import { Recepcionista } from '../../../domain/recepcionista';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietarioService } from '../../../services/proprietario.service';

@Component({
  selector: 'app-recepcionista-edit',
  templateUrl: './recepcionista-edit.component.html',
  styleUrls: ['./recepcionista-edit.component.css']
})
export class RecepcionistaEditComponent implements OnInit {
  public recepcionista: any = new Recepcionista();
  private id;

  @Output()
  public salvouRecepcionista = new EventEmitter();

  constructor(private recepcionistaService: RecepcionistaService,
      private route: ActivatedRoute,
      private router: Router,
      private loginService: LoginService,
      private proprietarioService: ProprietarioService) {
    this.route.queryParams.subscribe((params) => {
        this.id = params['id'];
        if (this.id) {
          this.recepcionistaService.findOne(this.id).subscribe((r: Recepcionista) => {
            this.recepcionista = r;
          });
        } else {
          this.recepcionista = new Recepcionista;
        }
    });
    if (this.loginService.isProprietario()) {
      this.proprietarioService.findOne(this.loginService.getUserLogged().proprietario.id).subscribe((r) => {
        this.recepcionista.proprietario = r;
      });
    }
   }
  ngOnInit() {}
  salvar(f) {
    if (this.recepcionista.id) {
      this.recepcionistaService.alterar(this.recepcionista).subscribe((r) => {
        this.router.navigateByUrl('/recepcionista-list');
        this.recepcionista = new Recepcionista();
        this.id = '';
        this.salvouRecepcionista.emit();
      });
    } else {
      this.recepcionistaService.inserir(this.recepcionista).subscribe((r) => {
        this.router.navigateByUrl('/recepcionista-list');
        this.recepcionista = new Recepcionista();
        this.id = '';
        this.salvouRecepcionista.emit();
      });
    }
  }
  excluir() {
    this.recepcionistaService.deletar(this.recepcionista).subscribe((r) => {
      this.recepcionista = new Recepcionista();
      this.salvouRecepcionista.emit();
      this.router.navigateByUrl('/recepcionista-list');
    });
  }

}
