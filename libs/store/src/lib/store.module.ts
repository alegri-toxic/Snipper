import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { SnippetService } from './services/snippet.service';
import { SnippetsState } from '../../+state/snippets/snippets.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      SnippetsState
    ], {
      developmentMode: true
    })
  ]
})
export class StoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
        SnippetService
      ]
    };
  }
}
