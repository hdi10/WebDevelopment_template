import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { configure, getLogger } from "log4js";
import { ButtonComponent } from '../button/button.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    

  }

  ngOnCreate(): void {



  }


  


}
