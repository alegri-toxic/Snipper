import { SnippetService } from './../../../../libs/store/src/lib/services/snippet.service';
import { Component } from '@angular/core';

@Component({
  selector: 'Snippeter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private readonly snippetService: SnippetService) {
    this.snippetService.getSnippets();
  }
}
