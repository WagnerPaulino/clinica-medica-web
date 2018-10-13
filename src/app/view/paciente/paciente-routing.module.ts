import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'paciente-list', component: PacienteListComponent, children: [
    { path: 'edit', component: PacienteEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
