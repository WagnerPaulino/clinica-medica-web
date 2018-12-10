import { SharedService } from './../../../services/shared.service';
import { Recepcionista } from './../../../domain/recepcionista';
import { RecepcionistaService } from './../../../services/recepcionista.service';
import { MedicoService } from './../../../services/medico.service';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../domain/paciente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {
  public paciente: Paciente = new Paciente();
  private id;

  @Output()
  public salvouPaciente = new EventEmitter();

  constructor(private pacienteService: PacienteService,
      private route: ActivatedRoute,
      private router: Router,
      private loginService: LoginService,
      private medicoService: MedicoService,
      private recepcionistaService: RecepcionistaService,
      private sharedService: SharedService) {
    this.route.queryParams.subscribe((params) => {
        this.id = params['id'];
        if (this.id) {
          this.pacienteService.findOne(this.id).subscribe((r: Paciente) => {
            this.paciente = r;
          });
        } else {
          this.paciente = new Paciente;
        }
    });
    if (this.loginService.isMedico()) {
      this.medicoService.findOne(this.loginService.getUserLogged().medico.id).subscribe((r: any) => {
        this.paciente.medico = r;
      });
    }
    if (this.loginService.isRecepcionista()) {
      this.recepcionistaService.findOne(this.loginService.getUserLogged().recepcionista.id).subscribe((r: Recepcionista) => {
        this.paciente.recepcionistas.push(r);
      });
    }
   }
  ngOnInit() {}

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');
      this.sharedService.consultaCEP(cep)
        .subscribe((r) => {
          this.popularDados(r, form);
      });
  }
  popularDados(dados, form) {
    form.form.patchValue({
      rua: dados.logradouro,
      cep: dados.cep,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }

  salvar(f) {
    if (this.paciente.idPaciente) {
      this.pacienteService.alterar(this.paciente).subscribe((r) => {
        this.router.navigateByUrl('/paciente-list');
        this.paciente = new Paciente();
        this.id = '';
        this.salvouPaciente.emit();
      });
    } else {
      this.pacienteService.inserir(this.paciente).subscribe((r) => {
        this.router.navigateByUrl('/paciente-list');
        this.paciente = new Paciente();
        this.id = '';
        this.salvouPaciente.emit();
      });
    }
  }
  excluir() {
    this.pacienteService.deletar(this.paciente).subscribe((r) => {
      this.paciente = new Paciente();
      this.salvouPaciente.emit();
      this.router.navigateByUrl('/paciente-list');
    });
  }

}
