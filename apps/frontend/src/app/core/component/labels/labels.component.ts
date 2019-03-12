import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Snippeter-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  @Input() labelText: string;
  @Input() labelColor: string;
  @Input() labelCount = 0;

  constructor() { }

  ngOnInit() {
  }

}
