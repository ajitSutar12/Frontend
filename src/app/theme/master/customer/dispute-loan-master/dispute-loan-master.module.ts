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
@NgModule({
  imports: [
    CommonModule,
    DisputeLoanMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [DisputeLoanMasterComponent],
  providers: [TitleService, RepayModeService,StatementTypeService,SchemeCodeService]
})
export class DisputeLoanMasterModule { }