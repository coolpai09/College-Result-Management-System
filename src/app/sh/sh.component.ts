import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sh',
  templateUrl: './sh.component.html',
  styleUrls: ['./sh.component.css']
})
export class ShComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  sem1(){

  }

  sem2(){

  }

  sem3(){

  }

  sem4(){

  }

  sem5(){

  }

  sem6(){

  }

  sem7(){

  }

  sem8(){
    this.router.navigate(['/sp']);

  }
}
