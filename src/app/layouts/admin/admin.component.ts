import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  constructor(private router: Router) {

  }
  home() {
    this.router.navigate(['admin','home']);
  }
  profile() {
    this.router.navigate(['admin','home']);
  }
  logout() {
    this.router.navigate(['auth','login']);
  }
}
