import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrutsListComponent } from './pruts-list.component';



@NgModule({
  declarations: [
    PrutsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrutsListComponent
  ]
})
export class PrutsModule { }
