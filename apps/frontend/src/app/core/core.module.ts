import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './container/layout-container/layout-container.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    LayoutContainerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutContainerComponent,
    HeaderComponent
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
