import { SharedModule } from './../../shared/shared.module';
import { PacienteRoutingModule } from './paciente-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule
  ],
  declarations: [PacienteListComponent, PacienteEditComponent]
})
export class PacienteModule { }
