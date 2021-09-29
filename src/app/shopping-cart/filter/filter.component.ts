import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  rangeValues: number[] = [];
  selectedValues: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.rangeValues[0]=20;
    this.rangeValues[1]=80;
  }

}
