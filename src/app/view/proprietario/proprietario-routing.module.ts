import { ProprietarioEditComponent } from './proprietario-edit/proprietario-edit.component';
import { ProprietarioListComponent } from './proprietario-list/proprietario-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietarioGuard } from '../../services/guards/proprietario.guard';

const routes: Routes = [
  {path: 'proprietario-list', component: ProprietarioListComponent, canActivate: [
    ProprietarioGuard
  ], children: [
    { path: 'edit', component: ProprietarioEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietarioRoutingModule { }
