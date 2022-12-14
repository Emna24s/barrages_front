import {Component, OnInit} from '@angular/core';
import {single} from './data';
import {TodoService} from "./todo.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testngx';
  single: any[] = [];
  view: [number, number] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'X';
  showYAxisLabel = true;
  yAxisLabel = 'Y';

  colorScheme = {
    domain: ['red', 'blue']
  };
  showLabels = true;
  isDoughnut = false;
  explodeSlices = true;

  constructor(private todoService: TodoService) {
    //Object.assign(this, {single})
  }

  ngOnInit(): void {
        this.todoService.getstats().subscribe({
          next: value => {
            this.single = value;
          }
        })
  }

  onSelect(event: any[]) {
    console.log(event);
  }


}

