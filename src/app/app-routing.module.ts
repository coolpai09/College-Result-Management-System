import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginComponent } from './login/login.component';
import { MarksComponent } from './marks/marks.component';

const routes: Routes = [
  // {path:"register", component: RegisterComponent},
  { path: '', component:HomescreenComponent },
  {path:"login", component: LoginComponent},
  {path:"marks", component: MarksComponent},
  {path:"homescreen", component: HomescreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
