import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isApiCallProgress: boolean = false;

  loginObj: any = {
    "userName": "",
    "userPassword": ""
  }

  constructor(private http: HttpClient, private router: Router) {

  }

  onLogin() {
    if (this.isApiCallProgress == false) {
      this.isApiCallProgress = true;
      this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/login", this.loginObj).subscribe((result: any) => {
        if (result.result) {
          localStorage.setItem('logUserName', JSON.stringify(result.data))
          localStorage.setItem('logUserData', result.data.userName)
          debugger;
          if (result.data.userRole == 'Admin') {
            this.router.navigateByUrl("adminDashboard");
          }
        } else {
          alert(result.message);
          this.onReset();
        }
        this.isApiCallProgress = false;
      })
    }

  }

  onReset() {
    this.loginObj = {
      "userName": "",
      "userPassword": ""
    }
  }
}







