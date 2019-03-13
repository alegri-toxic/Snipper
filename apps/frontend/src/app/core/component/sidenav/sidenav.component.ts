import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Snippeter-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() labelState: any;

  constructor() {  }

  ngOnInit() {
  }

}
