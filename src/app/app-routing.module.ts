import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login-page/login/login.component';
import { AdminLayoutComponent } from './pages/admin-role/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './pages/admin-role/admin-dashboard/admin-dashboard.component';
import { AdminMasterComponent } from './pages/admin-role/admin-master/admin-master.component';
import { AdminUserComponent } from './pages/admin-role/admin-user/admin-user.component';
import { CandidatesComponent } from './pages/admin-role/candidates/candidates.component';
import { AdminCourseComponent } from './pages/admin-role/admin-course/admin-course.component';
import { EnrollmentComponent } from './pages/admin-role/enrollment/enrollment.component';
import { PaymentsComponent } from './pages/admin-role/payments/payments.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "adminDashboard",
        component: AdminDashboardComponent,
      },
      {
        path: "masterPage",
        component: AdminMasterComponent,
      },
      {
        path: "coursePage",
        component: AdminCourseComponent,
      },
      {
        path: "userPage",
        component: AdminUserComponent,
      },
      {
        path: "candidatePage",
        component: CandidatesComponent,
      },
      {
        path: "enrollPage",
        component: EnrollmentComponent,
      },
      {
        path: "payPage",
        component: PaymentsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
