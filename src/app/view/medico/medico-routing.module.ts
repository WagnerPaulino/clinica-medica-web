import { MedicoEditComponent } from './medico-edit/medico-edit.component';
import { MedicoListComponent } from './medico-list/medico-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicoGuard } from '../../services/guards/medico.guard';

const routes: Routes = [
  {path: 'medico-list', component: MedicoListComponent, canActivate: [
    MedicoGuard
  ], children: [
    { path: 'edit', component: MedicoEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
