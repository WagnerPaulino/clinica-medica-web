import { ProprietarioRoutingModule } from './../proprietario/proprietario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepcionistaListComponent } from './recepcionista-list/recepcionista-list.component';
import { RecepcionistaEditComponent } from './recepcionista-edit/recepcionista-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { RecepcionistaRoutingModule } from './recepcionista-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecepcionistaRoutingModule,
    SharedModule
  ],
  declarations: [RecepcionistaListComponent, RecepcionistaEditComponent]
})
export class RecepcionistaModule { }
