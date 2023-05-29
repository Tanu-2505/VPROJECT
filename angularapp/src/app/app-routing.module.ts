import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteComponent } from './viewacademy/institute/institute.component';
import { EnrolledCourseComponent } from './viewacademy/enrolledcourse/enrolled-course.component';
import { CourselistComponent } from './viewacademy/courselist/courselist.component';
import { ViewacademyComponent } from './viewacademy/viewacademy.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminacademyComponent } from './adminacademy/adminacademy.component';
import { AdmininstitueComponent } from './adminacademy/admininstitue/admininstitue.component';
import { AdmincourseComponent } from './adminacademy/admincourse/admincourse.component';
import { AdminstudentComponent } from './adminacademy/adminstudent/adminstudent.component';
import { StudentDetailsComponent } from './viewacademy/student-details/student-details.component';
import { AddinstituteComponent } from './adminacademy/addinstitute/addinstitute.component';
import { EditinstituteComponent } from './adminacademy/editinstitute/editinstitute.component';
import { EditcourseComponent } from './adminacademy/editcourse/editcourse.component';
import { AddcourseComponent } from './adminacademy/addcourse/addcourse.component';
import { AddstudentComponent } from './adminacademy/addstudent/addstudent.component';
import { UpdatestudentComponent } from './adminacademy/updatestudent/updatestudent.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"user",component:ViewacademyComponent,children:
    [
      {path:"",component:InstituteComponent},
      {path:"institute",component:InstituteComponent},
      {path:"enrolledcourse",component:EnrolledCourseComponent},
      {path:"courselist",component:CourselistComponent},
      {path:"form",component:StudentDetailsComponent}
    ]
  },
  {path:"auth",component:AuthComponent,children:
   [
      {path:"",component:LoginComponent},
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent},
   ]
  },

  {path:"admin",component:AdminacademyComponent,children:
   [
      {path:"",component:AdmininstitueComponent},
      {path:"institute",component:AdmininstitueComponent},
      {path:"course",component:AdmincourseComponent},
      {path:"addcourse",component:AddcourseComponent},
      {path:"editcourse",component:EditcourseComponent},
      {path:"students",component:AdminstudentComponent},
      {path:"addstudent",component:AddstudentComponent},
      {path:"updatestudent",component:UpdatestudentComponent},
      {path:"addinstitute",component:AddinstituteComponent},
      {path:"editinstitute",component:EditinstituteComponent}

   ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
