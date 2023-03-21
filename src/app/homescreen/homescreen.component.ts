import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit(): void {}

  onRegisterClick(){
    this.router.navigate(['/register']);
  }

  onLoginClick(){
    this.router.navigate(['/hsc']);
  }

}
