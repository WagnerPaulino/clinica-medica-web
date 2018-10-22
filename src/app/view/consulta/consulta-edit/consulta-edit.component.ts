import { LoginService } from './../../../services/login.service';
import { PacienteService } from './../../../services/paciente.service';
import { MedicoService } from './../../../services/medico.service';
import { Medico } from './../../../domain/medico';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConsultaService } from '../../../services/consulta.service';
import { Consulta } from '../../../domain/consulta';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../../domain/paciente';

@Component({
  selector: 'app-consulta-edit',
  templateUrl: './consulta-edit.component.html',
  styleUrls: ['./consulta-edit.component.css']
})
export class ConsultaEditComponent implements OnInit {
  public consulta: any = new Consulta();
  public medicos: Array<Medico> = [];
  public pacientes: Array<Paciente> = [];
  private idConsulta;

  @Output()
  public salvouConsulta = new EventEmitter();

  constructor(private consultaService: ConsultaService,
      private medicoService: MedicoService,
      private pacienteService: PacienteService,
      private route: ActivatedRoute,
      private router: Router,
      private loginService: LoginService) {
    this.medicoService.findAll().subscribe((r) => {
      this.medicos = r;
    });
    this.pacienteService.findAll().subscribe((r) => {
      this.pacientes = r;
    });
    this.route.queryParams.subscribe((params) => {
        this.idConsulta = params['id'];
        if (this.idConsulta) {
          this.consultaService.findOne(this.idConsulta).subscribe((r: Consulta) => {
            this.consulta = r;
            this.medicoService.findMedicoByConsulta(this.idConsulta).subscribe((m: any) => {
              this.consulta.medico = m;
            });
            this.pacienteService.findPacienteByConsulta(this.idConsulta).subscribe((p: any) => {
              this.consulta.paciente = p;
            });
          });
        } else {
          this.consulta = new Consulta;
        }
    });
    if (this.loginService.isPaciente()) {
      this.pacienteService.findOne(this.loginService.getUserLogged().paciente.idPaciente).subscribe((r) => {
        this.consulta.paciente = r;
      });
    }
   }
  ngOnInit() {}
  salvar(f) {
    if (this.consulta.id) {
      this.consultaService.alterar(this.consulta).subscribe((r) => {
        this.router.navigateByUrl('/consulta-list');
        this.idConsulta = '';
        f.form.reset();
        this.consulta = new Consulta();
        this.salvouConsulta.emit();
      });
    } else {
      this.consultaService.inserir(this.consulta).subscribe((r) => {
        this.router.navigateByUrl('/consulta-list');
        this.idConsulta = '';
        f.form.reset();
        this.consulta = new Consulta();
        this.salvouConsulta.emit();
      });
    }
  }
  excluir() {
    this.consultaService.deletar(this.consulta).subscribe((r) => {
      this.consulta = new Consulta();
      this.salvouConsulta.emit();
      this.router.navigateByUrl('/consulta-list');
    });
  }

}
