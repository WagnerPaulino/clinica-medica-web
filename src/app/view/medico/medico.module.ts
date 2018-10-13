import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoListComponent } from './medico-list/medico-list.component';
import { MedicoEditComponent } from './medico-edit/medico-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { MedicoRoutingModule } from './medico-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MedicoRoutingModule
  ],
  declarations: [
    MedicoListComponent,
    MedicoEditComponent
  ]
})
export class MedicoModule { }
