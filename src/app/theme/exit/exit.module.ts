import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExitRoutingModule } from './exit-routing.module';
import { ExitComponent } from './exit.component';
import { AuthService } from '../../theme/auth/auth.service';
@NgModule({
  declarations: [ExitComponent],
  imports: [
    CommonModule,
    ExitRoutingModule
  ],
  providers: [AuthService]
})
export class ExitModule { }
