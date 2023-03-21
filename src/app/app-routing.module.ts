import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HscComponent } from './hsc/hsc.component';
import { LoginComponent } from './login/login.component';
import { MarksComponent } from './marks/marks.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"register", component: RegisterComponent},
  { path: '', component:HomescreenComponent },
  {path:"login", component: LoginComponent},
  {path:"marks", component: MarksComponent},
  {path:"hsc", component: HscComponent},
  {path:"faculty", component:FacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
