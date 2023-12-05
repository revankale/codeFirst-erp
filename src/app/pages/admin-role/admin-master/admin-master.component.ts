import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-master',
  templateUrl: './admin-master.component.html',
  styleUrls: ['./admin-master.component.css']
})
export class AdminMasterComponent {

  master: any[] = [];

  masterArray: any[] = [];

  masterObj: any = {
    "masterId": 0,
    "masterName": "",
    "masterFor": ""
  }

  constructor(private http: HttpClient) {
    this.getAllMaster();
    this.getAddedMasterFor(this.masterObj);
  }


  // drop dowwn  get API

  getAddedMasterFor(obj: any) {

    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAddedMastersFor", obj).subscribe((result: any) => {

      this.masterArray = result.data;
    })
  }


  getAllMaster() {
    this.http.get("https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllMaster").subscribe((result: any) => {
      this.masterArray = result.data;
    })
  }

  AddMaster(obj: any) {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddMaster", this.masterObj).subscribe((result: any) => {
      this.masterObj = result.data;
      if (result.result) {
        this.getAllMaster()
        alert(result.message)
      } else {
        alert(result.message)
      }

    })
  }

  onEdit(obj: any) {
    this.openMaster();
    this.masterObj = obj;

  }

  UpdateMaster() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateMaster", this.masterObj).subscribe((result: any) => {
      this.masterObj = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllMaster();

      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeMaster();
    })
  }

  openMaster() {
    this.onReset();
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "block";
    }
  }


  closeMaster() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "none";
    }
  }

  onReset() {
    this.masterObj = {
      "masterId": 0,
      "masterName": "",
      "masterFor": ""
    }
  }

}
