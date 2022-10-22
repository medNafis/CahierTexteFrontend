import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cours',
  templateUrl: './form-cours.component.html',
  styleUrls: ['./form-cours.component.css']
})
export class FormCoursComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value/1000) + '%';
    }

    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
