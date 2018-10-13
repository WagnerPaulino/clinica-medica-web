import { RecepcionistaModule } from './view/recepcionista/recepcionista.module';
import { ProprietarioModule } from './view/proprietario/proprietario.module';
import { PacienteModule } from './view/paciente/paciente.module';
import { MedicoModule } from './view/medico/medico.module';
import { ConsultaModule } from './view/consulta/consulta.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ConsultaModule,
    MedicoModule,
    PacienteModule,
    ProprietarioModule,
    RecepcionistaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
