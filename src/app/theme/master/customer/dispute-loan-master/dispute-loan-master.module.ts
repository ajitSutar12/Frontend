import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisputeLoanMasterRoutingModule } from './dispute-loan-master-routing.module';
import { DisputeLoanMasterComponent } from './dispute-loan-master.component';
import { TitleService } from '../../../../shared/elements/title.service';
import { RepayModeService } from '../../../../shared/elements/repay-mode.service';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { DisputeLoanMasterService} from './dispute-loan-master.service'

import { CustomerIdModule } from '../customer-id/customer-id.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../../../shared/shared.module';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    DisputeLoanMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,ReactiveFormsModule,
    PerfectScrollbarModule,
    CustomerIdModule,
    SharedModule
  ],
  declarations: [DisputeLoanMasterComponent],
  providers: [
     TitleService,
     RepayModeService,
     StatementTypeService,
     SchemeCodeService,
     DisputeLoanMasterService,
     {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    ]
})
export class DisputeLoanMasterModule { }