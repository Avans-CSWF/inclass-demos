import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPersonService } from './random-person.service';
import { RandomPerson } from './random-person';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [RandomPersonService]
})
export class ModelsModule { }
