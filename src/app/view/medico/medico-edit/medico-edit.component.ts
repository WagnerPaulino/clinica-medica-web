import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MedicoService } from '../../../services/medico.service';
import { Medico } from '../../../domain/medico';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medico-edit',
  templateUrl: './medico-edit.component.html',
  styleUrls: ['./medico-edit.component.css']
})
export class MedicoEditComponent implements OnInit {
  public medico: Medico = new Medico();
  private id;

  @Output()
  public salvouMedico = new EventEmitter();

  constructor(private medicoService: MedicoService,
      private route: ActivatedRoute,
      private router: Router) {
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
