import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fp',
  templateUrl: './fp.component.html',
  styleUrls: ['./fp.component.css']
})
export class FpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onEntryClick(){
    this.router.navigate(['/marks']);
  }

  onUpdateClick(){
    this.router.navigate(['/update']);
  }

  logout(){
    this.router.navigate(['/faculty'])
  }
}
