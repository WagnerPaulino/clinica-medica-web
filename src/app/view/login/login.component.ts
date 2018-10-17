import { Login } from './../../domain/login';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login = new Login();
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  sign(f) {
    this.loginService.sign(this.login.usuario, this.login.senha);
  }

}
