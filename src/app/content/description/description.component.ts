import { Component, OnInit } from '@angular/core';

export interface ModuleElement {
  name: string;
  cours: number;
  td: number;
  tp: number;
  eval: number;
  vhGlobal: number;
}

const ELEMENT_DATA: ModuleElement[] = [
  {name: "Informatique industrielle", cours: 30, td: 9, tp: 9, eval: 3, vhGlobal: 48},
];

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cours', 'td', 'tp', 'eval', 'vhGlobal'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

