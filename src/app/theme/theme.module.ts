import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme.directive';
import { SubmitDirective } from './submit.directive';



@NgModule({
  declarations: [ThemeDirective, SubmitDirective],
  exports: [ThemeDirective,SubmitDirective],

  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
