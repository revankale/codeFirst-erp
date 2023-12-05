import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  enrollArray: any[] = [];

  candidateArray: any[] = [];

  courseArray: any[] = [];

  enrollObj: any = {
    "enrollmentId": 0,
    "candidateId": 0,
    "enrollmentDate": new Date(),
    "isCompleted": false,
    "isStarted": false,
    "startDate": new Date(),
    "endDate": new Date(),
    "enrollmentNo": "",
    "courseId": 0,
    "courseFee": "",
    "discountGiven": "",
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getAllCandidate();
    this.getAllCourse();
    this.getAllEnroll();
  }

  // candidate drop down API
  getAllCandidate() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates").subscribe((result: any) => {
      this.candidateArray = result.data;
    })
  }

  // course drop down API
  getAllCourse() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList").subscribe((result: any) => {
      this.courseArray = result.data;
    })
  }


  getAllEnroll() {
    this.http.get("https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollments").subscribe((result: any) => {
      this.enrollArray = result.data;
    })
  }

  addEnroll() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCandidateErollment", this.enrollObj).subscribe((result: any) => {
      this.enrollArray = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllEnroll();
      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeEnroll();
    })
  }

  onEdite(obj:any) {
    this.openEnroll();
    this.enrollObj = obj;
  }

  updateEnroll() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/updateCandidateErollment", this.enrollObj).subscribe((result: any) => {
      this.enrollArray = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllEnroll();
      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeEnroll();
    })
  }

  deleteEnroll(item: any) {
    this.http.post("https://onlinetestapi.gerasim.in/api/OnlineTest/deleteCandidateErollment", item).subscribe((result: any) => {
      this.enrollArray = result;
      if (result.result) {
        alert(result.message)
        this.getAllEnroll();
      } else {
        alert(result.message)
      }
    })
  }

  openEnroll() {
    this.onReset();
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "block";
    }
  }


  closeEnroll() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "none";
    }
  }


  onReset() {
    this.enrollObj = {
      "enrollmentId": 0,
      "candidateId": 0,
      "enrollmentDate": new Date(),
      "isCompleted": false,
      "isStarted": false,
      "startDate": new Date(),
      "endDate": new Date(),
      "enrollmentNo": "",
      "courseId": 0,
      "courseFee": "",
      "discountGiven": 0,
    }
  }
}


