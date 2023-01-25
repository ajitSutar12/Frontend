import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme.directive';
import { SubmitDirective } from './submit.directive';
import { ButtonDirective } from './button.directive';
import { ShortcutKeyComponent } from './shortcut-key/shortcut-key.component';



@NgModule({
  declarations: [ThemeDirective,SubmitDirective,  ButtonDirective, ShortcutKeyComponent],
  exports: [ThemeDirective,SubmitDirective,ButtonDirective],

  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
