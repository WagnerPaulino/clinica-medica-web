import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { LoginGuard } from './services/guards/login.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [
    LoginGuard
  ], data: {animation: 'FilterPage'}},
  {path: 'login', component: LoginComponent, data: {animation: 'HomePage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
