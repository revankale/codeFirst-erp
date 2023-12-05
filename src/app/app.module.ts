import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './pages/login-page/login/login.component';
import { AdminLayoutComponent } from './pages/admin-role/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './pages/admin-role/admin-dashboard/admin-dashboard.component';
import { AdminMasterComponent } from './pages/admin-role/admin-master/admin-master.component';
import { AdminCourseComponent } from './pages/admin-role/admin-course/admin-course.component';
import { AdminUserComponent } from './pages/admin-role/admin-user/admin-user.component';
import { CandidatesComponent } from './pages/admin-role/candidates/candidates.component';
import { EnrollmentComponent } from './pages/admin-role/enrollment/enrollment.component';
import { PaymentsComponent } from './pages/admin-role/payments/payments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    AdminMasterComponent,
    AdminCourseComponent,
    AdminUserComponent,
    CandidatesComponent,
    EnrollmentComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
