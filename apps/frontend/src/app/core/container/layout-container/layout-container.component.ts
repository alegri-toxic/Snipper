import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { SnippetService, LabelService } from '@Snippeter/store';

@Component({
  selector: 'Snippeter-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {

  private teamId: number = 1;
  public labelState: Observable<any>;

  constructor(
    private readonly snippetService: SnippetService,
    private readonly labelService: LabelService
  ) { }

  ngOnInit() {
    this.load();
    this.setLabelState();
    this.createTestData();
  }

  private load(): void {
    this.snippetService.loadSnippets(this.teamId);
    this.labelService.loadLabels(this.teamId);
  }

  private setLabelState(): void {
    this.labelState = this.labelService.getLabelsState();
  }

  private createTestData(): void {
    this.labelService.createLabel({
      id: 1,
      title: 'Javascript',
      color: 'label-orange',
      count: 0
    });

    this.labelService.createLabel({
      id: 2,
      title: 'C#',
      color: 'label-purple',
      count: 0
    });
  }

}
