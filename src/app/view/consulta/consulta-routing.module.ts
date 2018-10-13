import { ConsultaEditComponent } from './consulta-edit/consulta-edit.component';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'consulta-list', component: ConsultaListComponent, children: [
    { path: 'edit', component: ConsultaEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
