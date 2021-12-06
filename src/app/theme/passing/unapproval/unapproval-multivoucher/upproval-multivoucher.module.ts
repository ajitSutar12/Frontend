import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { UnapprovalMultivoucherComponent } from './unapproval-multivoucher.component';
import { UnapprovalMultivoucherrRoutingModule} from './unapproval-multivoucher-routing.module'
import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    UnapprovalMultivoucherrRoutingModule,
    DataTablesModule,
    NgbModule
  ],
  declarations: [UnapprovalMultivoucherComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class UnapprovalMultivoucherrModule { }
