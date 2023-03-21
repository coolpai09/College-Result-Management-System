import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hsc',
  templateUrl: './hsc.component.html',
  styleUrls: ['./hsc.component.css']
})
export class HscComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onStdClick(){
    this.router.navigate(['/login']);
  }

  onFacClick(){
    this.router.navigate(['/faculty']);
  }

}
