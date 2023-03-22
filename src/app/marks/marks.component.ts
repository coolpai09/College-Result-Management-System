import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onUClick(){
    this.router.navigate(['/fp']);
  }
}
