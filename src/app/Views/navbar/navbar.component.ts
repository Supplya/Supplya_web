import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route: Router){

  }

  signUp(){
    this.route.navigate(['sign-up']);
    window.scrollTo(0, 0);
  }
  contact(){
    this.route.navigate(['contact-us']);
    window.scrollTo(0, 0);
  }
  about(){
    this.route.navigate(['about-us']);
    window.scrollTo(0, 0);
  }
  shop(){
    this.route.navigate(['shop']);
    window.scrollTo(0, 0);
  }

  
}
