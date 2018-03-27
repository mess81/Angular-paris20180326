import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageErrorComponent } from './page-error/page-error.component';
import { PageErrorRoutingModule } from './page-error-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageErrorRoutingModule
  ],
  declarations: [
    PageErrorComponent
  ],
  exports: [
    PageErrorComponent
  ]
})
export class PageErrorModule { }
