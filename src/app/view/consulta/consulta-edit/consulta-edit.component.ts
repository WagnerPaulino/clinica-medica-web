import { MedicoService } from './../../../services/medico.service';
import { Medico } from './../../../domain/medico';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConsultaService } from '../../../services/consulta.service';
import { Consulta } from '../../../domain/consulta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta-edit',
  templateUrl: './consulta-edit.component.html',
  styleUrls: ['./consulta-edit.component.css']
})
export class ConsultaEditComponent implements OnInit {
  public consulta: Consulta = new Consulta();
  public medicos: Array<Medico> = [];
  private id;

  @Output()
  public salvouConsulta = new EventEmitter();

  constructor(private consultaService: ConsultaService,
      private medicoService: MedicoService,
      private route: ActivatedRoute,
      private router: Router) {
    this.medicoService.findAll().subscribe((r) => {
      this.medicos = r;
    });
    this.route.queryParams.subscribe((params) => {
        this.id = params['id'];
        if (this.id) {
          this.consultaService.findOne(this.id).subscribe((r: Consulta) => {
            this.consulta = r;
            this.medicoService.findMedicoByConsulta(this.consulta.id).subscribe((m: any) => {
              this.consulta.medico = m;
            });
          });
        } else {
          this.consulta = new Consulta;
        }
    });
   }
  ngOnInit() {}
  salvar() {
    if (this.consulta.id) {
      this.consultaService.alterar(this.consulta).subscribe((r) => {
        this.router.navigateByUrl('/consulta-list');
        this.id = '';
        this.consulta = new Consulta();
        this.salvouConsulta.emit();
      });
    } else {
      this.consultaService.inserir(this.consulta).subscribe((r) => {
        this.router.navigateByUrl('/consulta-list');
        this.id = '';
        this.consulta = new Consulta();
        this.salvouConsulta.emit();
      });
    }
  }
  excluir() {
    this.consultaService.deletar(this.consulta).subscribe((r) => {
      this.consulta = new Consulta();
      this.salvouConsulta.emit();
    });
  }

}
