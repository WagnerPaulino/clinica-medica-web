import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProprietarioListComponent } from './proprietario-list/proprietario-list.component';
import { ProprietarioEditComponent } from './proprietario-edit/proprietario-edit.component';
import { ProprietarioRoutingModule } from './proprietario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProprietarioRoutingModule,
    SharedModule
  ],
  declarations: [ProprietarioListComponent, ProprietarioEditComponent]
})
export class ProprietarioModule { }
