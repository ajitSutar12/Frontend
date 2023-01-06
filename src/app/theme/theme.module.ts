import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme.directive';
import { SubmitDirective } from './submit.directive';
import { ButtonDirective } from './button.directive';



@NgModule({
  declarations: [ThemeDirective,SubmitDirective,  ButtonDirective],
  exports: [ThemeDirective,SubmitDirective,ButtonDirective],

  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
