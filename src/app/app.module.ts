import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MarksComponent } from './marks/marks.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HscComponent } from './hsc/hsc.component';
import { FacultyComponent } from './faculty/faculty.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MarksComponent,
    HomescreenComponent,
    HscComponent,
    FacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
