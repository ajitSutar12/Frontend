import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { YearWiseUnpaidDividendEntryRoutingModule } from './year-wise-unpaid-dividend-entry-routing.module';
import { YearWiseUnpaidDividendEntryComponent } from './year-wise-unpaid-dividend-entry.component';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {YearwiseunpaidService} from './year-wise-unpaid-dividend-entry.service';
import{ SchemeCodeDropdownService} from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import{ SalaryDMasterdropdownService} from '../../../../shared/dropdownService/salary-division-master-dropdown.service';
 import{ ShareMasterDropdownService} from '../../../../shared/dropdownService/share-master-dropdown.service';

 import { ShareSchemeDropdownService } from '../../../../shared/dropdownService/share-scheme-dropdown.Service';

 import {ShareMasterService} from '../../customer/shares-master/shares-master.service';
 
import { CustomerIdService } from '../../customer/customer-id/customer-id.service';


@NgModule({
  imports: [
    CommonModule,
    YearWiseUnpaidDividendEntryRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [YearWiseUnpaidDividendEntryComponent],
  providers: [YearwiseunpaidService,
     SchemeCodeDropdownService,
     SalaryDMasterdropdownService,
     ShareMasterDropdownService,
     ShareMasterService,
     ShareSchemeDropdownService,
     CustomerIdService
    ]

})
export class YearWiseUnpaidDividendEntryModule { }
