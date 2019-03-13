import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';

import { SnippetService } from './services/snippet.service';
import { LabelService } from './services/label.service';

import { SnippetsState } from '../../+state/snippets/snippets.state';
import { LabelsState } from '../../+state/labels/labels.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      SnippetsState,
      LabelsState
    ], {
      developmentMode: true
    }),
    HttpClientModule
  ]
})
export class StoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
        SnippetService,
        LabelService
      ]
    };
  }
}
