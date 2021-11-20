import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamatGSMRoutingModule } from './anamat-gsm-routing.module';
import { AnamatGSMComponent } from './anamat-gsm.component';
import { DataTablesModule } from 'angular-datatables';
import { TitleService } from '../../../../shared/elements/title.service';
import { MsService } from '../../../../shared/elements/ms.service';
// import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {anamatGSMService} from './anamat-gsm.service'
// import { City3Service } from '../../../../shared/elements/city3.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service'
import { CustomerIdModule } from '../customer-id/customer-id.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../../../shared/shared.module';

import {SchemeCodeDropdownService} from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    AnamatGSMRoutingModule,
    DataTablesModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    CustomerIdModule,
    SharedModule
  ],
 
  declarations: [AnamatGSMComponent],
  providers: [
    TitleService, 
   
    SchemeCodeDropdownService,
    CustomeridService,
    cityMasterService,
    CustomerIDMasterDropdownService,
    anamatGSMService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
  ]
})
export class AnamatGSMModule { }