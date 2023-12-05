import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  enrollArray: any[] = [];

  paymentArray: any[] = [];

  paymentObj: any = {
    "paymentId": 0,
    "enrollmentId": 0,
    "paymentMode": "",
    "paymentDate": new Date(),
    "amount": "",
    "naration": ""
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getAllEnroll();
    this.getAllPayment();
  }

  // enroll drop down API
  getAllEnroll() {
    this.http.get("https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollments").subscribe((result: any) => {
      this.enrollArray = result.data;
    })
  }


  getAllPayment() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllPayments").subscribe((result: any) => {
      this.paymentArray = result.data;
    })
  }

  AddPaymment() {
    this.http.post(" https://onlinetestapi.gerasim.in/api/OnlineTest/AddPayment", this.paymentObj).subscribe((result: any) => {
      this.paymentArray = result.data;
      if (result.result) {
        this.getAllPayment();
        alert(result.message)
      } else {
        alert(result.message)
      }
      this.onReset();
      this.closePayment();

    })
  }

  onEdit(obj: any) {
    this.openPayment();
    this.paymentObj = obj;

  }

  UpdatePayment() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdatePayment", this.paymentObj).subscribe((result: any) => {
      this.paymentArray = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllPayment();

      } else {
        alert(result.message)
      }
      this.onReset();
      this.closePayment();
    })
  }

  deletePayment(item: any) {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/DeletePayment", item).subscribe((result: any) => {
      if (result.result) {
        alert(result.message)
        this.getAllPayment();
      } else {
        alert(result.message)
      }
    })
  }

  openPayment() {
    this.onReset();
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "block";
    }
  }


  closePayment() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "none";
    }
  }

  onReset() {
    this.paymentObj = {
      "paymentId": 0,
      "enrollmentId": 0,
      "paymentMode": "",
      "paymentDate": new Date(),
      "amount": "",
      "naration": ""
    }
  }
}
