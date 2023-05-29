import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNavbarComponent } from './viewacademy/user-navbar/user-navbar.component';
import { InstituteComponent } from './viewacademy/institute/institute.component';
import { EnrolledCourseComponent } from './viewacademy/enrolledcourse/enrolled-course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourselistComponent } from './viewacademy/courselist/courselist.component';
import { ViewacademyComponent } from './viewacademy/viewacademy.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import { AdminacademyComponent } from './adminacademy/adminacademy.component';
import { AdminNavbarComponent } from './adminacademy/admin-navbar/admin-navbar.component';
import { AdmincourseComponent } from './adminacademy/admincourse/admincourse.component';
import { AdmininstitueComponent } from './adminacademy/admininstitue/admininstitue.component';
import { AdminstudentComponent } from './adminacademy/adminstudent/adminstudent.component';
import { StudentDetailsComponent } from './viewacademy/student-details/student-details.component';
import { AddinstituteComponent } from './adminacademy/addinstitute/addinstitute.component';
import { EditinstituteComponent } from './adminacademy/editinstitute/editinstitute.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    InstituteComponent,
    EnrolledCourseComponent,
    CourselistComponent,
    ViewacademyComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    AdminacademyComponent,
    AdminNavbarComponent,
    AdmincourseComponent,
    AdmininstitueComponent,
    AdminstudentComponent,
    StudentDetailsComponent,
    AddinstituteComponent,
    EditinstituteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
