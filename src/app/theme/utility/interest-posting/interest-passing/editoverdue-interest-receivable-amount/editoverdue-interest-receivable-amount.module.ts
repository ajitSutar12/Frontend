import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {EditoverdueInterestReceivableAmountComponent} from './editoverdue-interest-receivable-amount.component'
import { EditOverDueInterestReceivableAmountRoutingModule } from './editoverdue-interest-receivable-amount-routing.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';
import {OwnbranchMasterService} from '../../../../../../app/shared/dropdownService/own-branch-master-dropdown.service';
import {SchemeCodeDropdownService} from '../../../../../shared/dropdownService/scheme-code-dropdown.service';
import {SchemeAccountNoService} from '../../../../../shared/dropdownService/schemeAccountNo.service';
import {EditOverdueInterestReceivableService} from './editoverdue-interest-receivable-amount.service'


@NgModule({
    imports: [
      CommonModule,
      EditoverdueInterestReceivableAmountComponent,
      EditOverDueInterestReceivableAmountRoutingModule,
      SharedModule,
      DataTablesModule,
      NgSelectModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [ ],
    providers:[OwnbranchMasterService,SchemeCodeDropdownService,SchemeAccountNoService,EditOverdueInterestReceivableService,{
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
  })
  export class EditOverDueInterestReceiableModule { }
  