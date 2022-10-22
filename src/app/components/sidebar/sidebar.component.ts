import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened = false;
  selected = 'option1';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  goToDescription(){
    this.router.navigateByUrl("/description")
  }
}
