import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme.directive';
import { SubmitDirective } from './submit.directive';
import { ButtonDirective } from './button.directive';
import { ShortcutKeyComponent } from './shortcut-key/shortcut-key.component';
import { EditDirective } from './edit.directive';




@NgModule({
  declarations: [ThemeDirective,SubmitDirective,  ButtonDirective, ShortcutKeyComponent, EditDirective],
  exports: [ThemeDirective,SubmitDirective,ButtonDirective],

  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
