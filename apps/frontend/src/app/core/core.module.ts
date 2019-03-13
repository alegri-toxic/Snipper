import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { LayoutContainerComponent } from './container/layout-container/layout-container.component';
import { HeaderComponent } from './component/header/header.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { LabelsComponent } from './component/labels/labels.component';
import { SearchComponent } from './component/search/search.component';

@NgModule({
  declarations: [
    LayoutContainerComponent,
    HeaderComponent,
    SidenavComponent,
    LabelsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutContainerComponent,
    HeaderComponent,
    SidenavComponent
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}
