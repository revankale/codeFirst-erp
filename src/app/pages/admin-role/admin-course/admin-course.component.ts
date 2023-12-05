import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {
  master: any[] = [];

  courseArray: any[] = [];

  courseObj: any = {
    "courseId": 0,
    "courseName": "",
    "courseDuration": "",
    "courseBasicFees": "",
  }

  constructor(private http: HttpClient) {


  }

  ngOnInit() {
    this.getAllCourse();
  }





  getAllCourse() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList").subscribe((result: any) => {
      this.courseArray = result.data;
    })
  }

  AddCourse() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCourse", this.courseObj).subscribe((result: any) => {
      this.courseObj = result.data;
      if (result.result) {
        this.getAllCourse();
        alert(result.message)
      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeCourse();

    })
  }

  onEdit(obj: any) {
    this.openCourse();
    this.courseObj = obj;

  }

  UpdateCourse() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCourse", this.courseObj).subscribe((result: any) => {
      this.courseObj = result.data;
      if (result.result) {
        alert(result.message)
        this.getAllCourse();

      } else {
        alert(result.message)
      }
      this.onReset();
      this.closeCourse();
    })
  }

  deleteCourse(item:any) {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/DeleteCourse",item).subscribe((result: any) => {
      if (result.result) {
        alert(result.message)
        this.getAllCourse();
      } else {
        alert(result.message)
      }
    })
  }

  openCourse() {
    this.onReset();
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "block";
    }
  }


  closeCourse() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "none";
    }
  }

  onReset() {
    this.courseObj = {
      "courseId": 0,
      "courseName": "",
      "courseDuration": "",
      "courseBasicFees": ""
    }
  }

}
