import { Consulta } from './../../domain/consulta';
import { Component, OnInit } from '@angular/core';
import { Grafico } from 'src/app/models/grafico';
import { ConsultaService } from 'src/app/services/consulta.service';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RelatorioComponent implements OnInit {

  public width = window.innerWidth;
  public view: any[] = [this.width - 100, 200];
  public countConsultaProximosDias: Grafico[] = [new Grafico('', 0)];
  public panelOpenState: Boolean = false;
  public consultas: any[] = [] ;
  public formulario: FormGroup;
  public dtConsultaIni: any = '';
  public dtConsultaFim: any = '';
  public dtRetornoIni: any = '';
  public dtRetornoFim: any = '';

  // Tabela Periodo Consultas
  public displayedColumns: string[] = [/*'Nome Medico', 'Nome Paciente',*/ 'Data Consulta', 'Data Retorno',
  'Tratamento', 'Exame', 'Sintomas', 'Realizada'];
  public consulta: Consulta = new Consulta();

  // Grafico contador de consultas
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

  constructor(public consultaService: ConsultaService,
    public loginService: LoginService,
    private formBuilder: FormBuilder) {
    this.consultaService.countConsultasProximosDias().subscribe((r: any[]) => {
      this.countConsultaProximosDias = [];
      r.map((e) => {
        this.countConsultaProximosDias.push(new Grafico(e.dtConsulta, e.count));
      });
    });
    window.addEventListener('resize', (r: any) => this.width = r.currentTarget.innerWidth);
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      dtConsultaIni: [this.dtConsultaIni],
      dtConsultaFim: [this.dtConsultaFim]
      });
  }

  onSubmit() {
    this.consultaService.findConsultaByPeriodo(
      this.formulario.value.dtConsultaIni.format('YYYY/MM/DD'),
      this.formulario.value.dtConsultaFim.format('YYYY/MM/DD'),
      this.formulario.value.dtConsultaIni.format('YYYY/MM/DD'),
      this.formulario.value.dtConsultaFim.format('YYYY/MM/DD')
      ).subscribe((r: any) => {
      this.consultas = r;
    });
  }

  atualizarTabela() {
    this.onSubmit();
  }

  gerarRelatorio() {
    console.log(this.formulario.value.dtConsultaFim.format('YYYY/MM/DD'));
    window.open(this.consultaService.relatorioConsultaByPeriodo(this.formulario.value.dtConsultaIni.format('YYYY/MM/DD'),
    this.formulario.value.dtConsultaFim.format('YYYY/MM/DD'),
    this.formulario.value.dtConsultaIni.format('YYYY/MM/DD'),
    this.formulario.value.dtConsultaFim.format('YYYY/MM/DD')), '_blank');
  }

}
