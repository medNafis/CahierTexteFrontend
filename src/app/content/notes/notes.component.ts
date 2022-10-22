import { Component, OnInit } from '@angular/core';

export interface ModuleElement {
  date: string;
  name: string;
  cours: number;
  td: number;
  tp: number;
  eval: number;
  vhGlobal: number;
}

const ELEMENT_DATA: ModuleElement[] = [
  {date: "10/10/1992" ,name: "Informatique industrielle", cours: 30, td: 9, tp: 9, eval: 3, vhGlobal: 48},
];

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  displayedColumns: string[] = ['date','name', 'cours', 'td', 'tp', 'eval', 'vhGlobal'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
