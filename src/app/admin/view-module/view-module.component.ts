import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface ModuleNode {
  name: string;
  children?: ModuleNode[];
}

const TREE_DATA: ModuleNode[] = [
  {
    name: 'Génie Informatique',
    children: [
      {
        name: '5ème Année', 
        children: [{name:'BI'}, {name: 'Technologies Oracle'}, {name: 'MDA'}, {name: 'ERP'}],
      },
      {
        name: '4ème Année', 
        children: [{name:'JEE'}, {name: 'Cryptologie'}, {name: 'Projet Tutoré'}, {name: 'Angular'}],
      },
      {
        name: '3ème Année', 
        children: [{name:'Java'}, {name: 'Réseaux'}, {name: 'PHP'}, {name: 'UML'}],
      },   
    ],
  },
  {
    name: 'Génie Civil',
    children: [
      {
        name: '5ème Année',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: '4ème Année',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
      {
        name: '3ème Année',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
  {
    name: 'Génie Systèmes Embarqués',
    children: [
      {
        name: '5ème Année',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: '4ème Année',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
      {
        name: '3ème Année',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
  {
    name: 'Génie Energies Renouvelables',
    children: [
      {
        name: '5ème Année',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: '4ème Année',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
      {
        name: '3ème Année',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

/**
 * @title Tree with nested nodes
 */

 @Component({
  selector: 'app-view-module',
  templateUrl: './view-module.component.html',
  styleUrls: ['./view-module.component.css']
})
export class ViewModuleComponent {

  treeControl = new NestedTreeControl<ModuleNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ModuleNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ModuleNode) => !!node.children && node.children.length > 0;
}
