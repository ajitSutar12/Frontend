import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanAndCCInterestRateChangesComponent } from './loan-and-ccinterest-rate-changes.component';
import { LoanAndCCInterestRateChangesRoutingModule } from './loan-And-CC-Interest-Rate-Changes-routing.module'
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { S3Service } from '../../../../shared/elements/s3.service';
import { Ac3Service } from '../../../../shared/elements/ac3.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanAndCCInterestRateChangesService } from './loan-and-ccinterest-rate-changes.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import {OwnbranchMasterService} from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import {SchemeCodeDropdownService} from '../../../../shared/dropdownService/scheme-code-dropdown.service'
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    LoanAndCCInterestRateChangesRoutingModule,
    DataTablesModule,
    // SelectModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StatementTypeService, S3Service, Ac3Service, LoanAndCCInterestRateChangesService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },OwnbranchMasterService,SchemeCodeDropdownService],
  declarations: [LoanAndCCInterestRateChangesComponent],
  bootstrap: [LoanAndCCInterestRateChangesComponent]
})
export class LoanAndCCInterestRateChangesModule { }
