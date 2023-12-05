import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  userArray: any[] = [];

  candidateArray: any[] = [];

  userObj: any = {
    "userId": 0,
    "userName": "",
    "userRole": "",
    "userPassword": "",
    "createdOn": new Date(),
    "isDeleted": false,
    "isApproved": false,
    "candidateId": 0
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getAllUser();
    this.getAllCandidate();
  }


  getAllUser() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllUsers").subscribe((result: any) => {
      this.userArray = result.data;
    })
  }

  // drop down cadidate name API

  getAllCandidate() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates").subscribe((result: any) => {
      this.candidateArray = result.data;
    })
  }


  addUsers() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddUser", this.userObj).subscribe((result: any) => {
      this.userArray = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllUser();
      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeUser();
    })
  }

  onEdite(obj: any) {
    this.openUser();
    this.userObj = obj;
  }

  updateUsers() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateUser", this.userObj).subscribe((result: any) => {
      this.userObj = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllUser();
      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeUser();
    })
  }

  deleteUsers(item:any) {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/DeleteUser",item).subscribe((result: any) => {
      if (result.result) {
        alert(result.message)
        this.getAllUser();
      } else {
        alert(result.message)
      }
    })
  }

  openUser() {
    this.onReset();
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "block";
    }
  }


  closeUser() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "none";
    }
  }


  onReset() {
    this.userObj = {
      "userId": 0,
      "userName": "",
      "userRole": "",
      "userPassword": "",
      "createdOn": new Date(),
      "isDeleted": false,
      "isApproved": false,
      "candidateId": 0
    }
  }
}
