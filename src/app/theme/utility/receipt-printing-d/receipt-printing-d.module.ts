import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptPrintingDComponent } from './receipt-printing-d.component';

import { ReceiptPrintingDRoutingModule } from './receipt-printing-d-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    ReceiptPrintingDRoutingModule,
    SharedModule
  ],
  declarations: [ReceiptPrintingDComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ReceiptPrintingDModule { }
