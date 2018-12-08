import { Consulta } from './../../domain/consulta';
import { Component, OnInit } from '@angular/core';
import { Grafico } from 'src/app/models/grafico';
import { ConsultaService } from 'src/app/services/consulta.service';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  public width = window.innerWidth;
  public view: any[] = [this.width - 100, 200];
  public countConsultaProximosDias: Grafico[] = [new Grafico('', 0)];
  public panelOpenState: Boolean = false;
  public consultas: any[] = [new Consulta];
  public formulario: FormGroup;
  public dtConsultaIni: any = '';
  public dtConsultaFim: any = '';
  public dtRetornoIni: any = '';
  public dtRetornoFim: any = '';

  //Tabela Periodo Consultas
  displayedColumns: string[] = ['Data Consulta', 'Data Retorno', 'Tratamento', 'Exame', 'Sintomas'];

  //Grafico contador de consultas
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
      console.log(this.countConsultaProximosDias);
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
    console.log(this.formulario.value);
    this.consultaService.findConsultaByPeriodo(
      this.formulario.value.dtConsultaIni,
      this.formulario.value.dtConsultaFim,
      this.formulario.value.dtConsultaIni,
      this.formulario.value.dtConsultaFim
      ).subscribe((r: any) => {
      this.consultas = r;
      console.log(this.consultas);
    });
  }

}
