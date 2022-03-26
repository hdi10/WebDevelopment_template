import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  position: number;
  ist: number;
  soll: number;
  mhd: String;
}

const ELEMENT_DATA: Product[] = [
  { position: 1, name: 'Mehl', ist: 2, soll: 5, mhd: '02_06_2022' },
  { position: 2, name: 'Tomaten', ist: 0, soll: 3, mhd: '04_11_2022' },
  { position: 3, name: 'Eier', ist: 6, soll: 12, mhd: '04_09_2022' },
  { position: 4, name: 'Milch', ist: 0, soll: 10, mhd: '05_09_2022' },
  { position: 5, name: 'Schokolade', ist: 2, soll: 0, mhd: 'noch fünf tage' },
  { position: 6, name: 'Öl', ist: 2, soll: 5, mhd: 'noch zwei tage' },
  { position: 7, name: 'Brot', ist: 0, soll: 2, mhd: '02_08_2022' },
  { position: 8, name: 'Joguurt', ist: 2, soll: 0, mhd: '02_04_2022' },
  { position: 9, name: 'Zitrone', ist: 0, soll: 2, mhd: '02_12_2022' },
  { position: 10, name: 'Minerwalwasser', ist: 0, soll: 6, mhd: '12_07_2022' },
];

@Component({
  selector: 'app-bestand',
  templateUrl: './bestand.component.html',
  styleUrls: ['./bestand.component.css']
})
export class BestandComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'soll', 'ist', 'mhd'];
  dataSource = ELEMENT_DATA;




  constructor() { }

  ngOnInit(): void {
  }

}
