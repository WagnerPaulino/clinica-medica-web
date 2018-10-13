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
      private router: Router) {
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
   }
  ngOnInit() {}
  salvar() {
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
