import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SharedModule,
    FormsModule,
    
  ],
  declarations: [CalculatorComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CalculatorModule { }
