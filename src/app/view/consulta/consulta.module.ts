import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ConsultaEditComponent } from './consulta-edit/consulta-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    SharedModule
  ],
  declarations: [
    ConsultaListComponent,
    ConsultaEditComponent
  ]
})
export class ConsultaModule { }
