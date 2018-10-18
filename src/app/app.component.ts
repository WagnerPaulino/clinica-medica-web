import { LoginService } from './services/login.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-clinica-medica';

  constructor(public loginService: LoginService) {}

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 680) {
      return false;
    } else {
      return true;
    }
  }
}
