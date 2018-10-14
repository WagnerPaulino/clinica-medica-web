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
import { LoaderComponent } from './view/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './services/interceptors/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ConsultaModule,
    MedicoModule,
    PacienteModule,
    ProprietarioModule,
    RecepcionistaModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
