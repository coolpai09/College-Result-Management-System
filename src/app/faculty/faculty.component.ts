import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onMarkClick(){
    this.router.navigate(['/marks']);
  }

}
