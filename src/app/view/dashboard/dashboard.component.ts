import { ConsultaService } from './../../services/consulta.service';
import { Medico } from './../../domain/medico';
import { MedicoService } from './../../services/medico.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Grafico } from './../../models/grafico';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public medicos: Medico[] = [];
  public panelOpenState: Boolean = false;

  constructor(public loginService: LoginService,
    public medicoService: MedicoService) {
    this.medicoService.findAll().subscribe((r) => {
      this.medicos = r;
    });
  }

  ngOnInit() {
  }
}
