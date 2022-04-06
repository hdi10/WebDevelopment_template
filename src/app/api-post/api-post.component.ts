import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { SampleData } from "../models/sample-data";

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.css']
})
export class ApiPostComponent implements OnInit {
  employees: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

}
