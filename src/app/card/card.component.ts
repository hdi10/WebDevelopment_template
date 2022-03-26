import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  longText = `Milch die wir für verscheiden Dinge nutzen`;

  constructor() { }

  ngOnInit(): void {
  }

}
