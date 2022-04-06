import { Component, OnInit } from '@angular/core';
import { Product } from '../bestand/bestand.component';
import { SampleData } from '../models/sample-data';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-api-get',
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css']
})
export class ApiGetComponent implements OnInit {
  employees: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {


  }

}
