import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { LoginGuard } from './services/guards/login.guard';
import { RelatorioComponent } from './view/relatorio/relatorio.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [
    LoginGuard
  ], data: {animation: 'FilterPage'}},
  {path: 'login', component: LoginComponent, data: {animation: 'HomePage'}},
  {path: 'relatorio', component: RelatorioComponent, canActivate: [
    LoginGuard
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
