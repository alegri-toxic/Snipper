import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Snippeter-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public labels: { text: string; colorClass: string; count: number }[] = [];

  constructor() {
    this.labels.push({
      text: 'Javascript',
      colorClass: 'label-orange',
      count: 0
    });
    this.labels.push({
      text: 'C#',
      colorClass: 'label-purple',
      count: 0
    });
  }

  ngOnInit() {
  }

}
