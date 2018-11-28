import { LoginService } from './services/login.service';
import { Component, HostListener } from '@angular/core';
import { slideInAnimation } from './shared/animations';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'projeto-clinica-medica';

  constructor(public loginService: LoginService, private router: Router) {}

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 680) {
      return false;
    } else {
      return true;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
