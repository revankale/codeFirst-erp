import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidateArray: any[] = [];

  candidateObj: any = {
    "candidateId": 0,
    "name": "",
    "contactNo": "",
    "email": "",
    "password": "",
    "createdDate": new Date(),
    "city": "",
    "collegeName": "",
    "education": "",
    "bankName": "",
    "accNo": "",
    "ifscCode": "",
    "reference": ""
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getAllCandidate();
  }


  getAllCandidate() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates").subscribe((result: any) => {
      this.candidateArray = result.data;
    })
  }


  addCandidate() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCandidate", this.candidateObj).subscribe((result: any) => {
      this.candidateArray = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllCandidate();
      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeCandidate();
    })
  }

  onEdite(obj: any) {
    this. openCandidate();
    this.candidateObj= obj;
  }

  updateCandidate() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCandiadte", this.candidateObj).subscribe((result: any) => {
      this.candidateArray = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllCandidate();
      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeCandidate();
    })
  }

  deleteCandidate(item:any) {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/DeleteCandidate",item).subscribe((result: any) => {
      this.candidateArray = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllCandidate();
      } else {
        alert(result.message)
      }
    })
  }

  openCandidate() {
    this.onReset();
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "block";
    }
  }


  closeCandidate() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "none";
    }
  }


  onReset() {
    this.candidateObj = {
      "candidateId": 0,
      "name": "",
      "contactNo": "",
      "email": "",
      "password": "",
      "createdDate": new Date(),
      "city": "",
      "collegeName": "",
      "education": "",
      "bankName": "",
      "accNo": "",
      "ifscCode": "",
      "reference": ""
    }
  }
}
