import { Medico } from './../../domain/medico';
import { MedicoService } from './../../services/medico.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { Recepcionista } from 'src/app/domain/recepcionista';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public medicos: Medico[] = [];
  public recepcionistas: Recepcionista[] = [];
  constructor(public loginService: LoginService,
    public medicoService: MedicoService,
    public recepcionistaService: RecepcionistaService) {
    this.medicoService.findAll().subscribe((r) => {
      this.medicos = r;
    });
    this.recepcionistaService.findAll().subscribe((r) => {
      this.recepcionistas = r;
    });
   }

  ngOnInit() {
  }

}
