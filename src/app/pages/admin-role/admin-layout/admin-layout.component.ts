import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  userName: string = "";

  constructor(private router: Router) {
    const name = localStorage.getItem('logUserData');
    if(name !=null){
      this.userName = name;
    }
  }

  logOut() {
    localStorage.removeItem('logUserName');
    this.router.navigateByUrl("login");

  }
}
