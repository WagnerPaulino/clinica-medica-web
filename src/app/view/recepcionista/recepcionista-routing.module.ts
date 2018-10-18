import { RecepcionistaEditComponent } from './recepcionista-edit/recepcionista-edit.component';
import { RecepcionistaListComponent } from './recepcionista-list/recepcionista-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepcionistaGuard } from '../../services/guards/recepcionista.guard';

const routes: Routes = [
  {path: 'recepcionista-list', component: RecepcionistaListComponent, canActivate: [
    RecepcionistaGuard
  ], children: [
    { path: 'edit', component: RecepcionistaEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepcionistaRoutingModule { }
