import { LoginService } from './../../../services/login.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MedicoService } from '../../../services/medico.service';
import { Medico } from '../../../domain/medico';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietarioService } from '../../../services/proprietario.service';

@Component({
  selector: 'app-medico-edit',
  templateUrl: './medico-edit.component.html',
  styleUrls: ['./medico-edit.component.css']
})
export class MedicoEditComponent implements OnInit {
  public medico: any = new Medico();
  private id;

  @Output()
  public salvouMedico = new EventEmitter();

  constructor(private medicoService: MedicoService,
      private route: ActivatedRoute,
      private router: Router,
      private loginService: LoginService,
      private proprietarioService: ProprietarioService) {
    this.route.queryParams.subscribe((params) => {
        this.id = params['id'];
        if (this.id) {
          this.medicoService.findOne(this.id).subscribe((r: Medico) => {
            this.medico = r;
          });
        } else {
          this.medico = new Medico;
        }
    });
    if (this.loginService.isProprietario()) {
      this.proprietarioService.findOne(this.loginService.getUserLogged().proprietario.id).subscribe((r) => {
        this.medico.proprietario = r;
      });
    }
   }
  ngOnInit() {}
  salvar(f) {
    if (this.medico.id) {
      this.medicoService.alterar(this.medico).subscribe((r) => {
        this.router.navigateByUrl('/medico-list');
        this.medico = new Medico();
        this.id = '';
        this.salvouMedico.emit();
      });
    } else {
      this.medicoService.inserir(this.medico).subscribe((r) => {
        this.router.navigateByUrl('/medico-list');
        this.medico = new Medico();
        this.id = '';
        this.salvouMedico.emit();
      });
    }
  }
  excluir() {
    this.medicoService.deletar(this.medico).subscribe((r) => {
      this.medico = new Medico();
      this.salvouMedico.emit();
    });
  }

}
