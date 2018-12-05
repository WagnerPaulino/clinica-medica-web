import { ConsultaService } from './../../services/consulta.service';
import { Medico } from './../../domain/medico';
import { MedicoService } from './../../services/medico.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Grafico } from './../../models/grafico';
import { of } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public medicos: Medico[] = [];
  public width = window.innerWidth;
  public view: any[] = [this.width - 100, 200];
  public countConsultaProximosDias: Grafico[] = [new Grafico('', 0)];
  public panelOpenState: Boolean = false;

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dias';
  showYAxisLabel = true;
  yAxisLabel = 'Numero';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public loginService: LoginService,
    public medicoService: MedicoService,
    public consultaService: ConsultaService) {
    this.medicoService.findAll().subscribe((r) => {
      this.medicos = r;
    });
    window.addEventListener('resize', (r: any) => this.width = r.currentTarget.innerWidth);
  }

  ngOnInit() {
    this.consultaService.countConsultasProximosDias().subscribe((r: any[]) => {
      this.countConsultaProximosDias = [];
      r.map((e) => {
        this.countConsultaProximosDias.push(new Grafico(e.dtConsulta, e.count));
      });
      console.log(this.countConsultaProximosDias);
    });
  }
}
