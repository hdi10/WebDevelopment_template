import { Component, OnInit } from '@angular/core';
import { SampleData } from '../models/sample-data';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-api-get',
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css']
})
export class ApiGetComponent implements OnInit {
  employees: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getList().subscribe((SampleData: SampleData) => {
      this.employees = SampleData;
      console.log(SampleData)
    })
  }

}
