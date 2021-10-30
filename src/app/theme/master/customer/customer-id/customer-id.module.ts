import { NgModule } from '@angular/core';
import { CustomerIdRoutingModule } from './customer-id-routing.module';
import { CustomerIdComponent } from './customer-id.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerIdService } from './customer-id.service';
import { PrefixMasterDropdownService } from '../../../../shared/dropdownService/prefix-master-dropdown.service';
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { OccupationMasterService } from '../../../../shared/dropdownService/occupation-master-dropdown.service';
import { SalaryDMasterdropdownService } from '../../../../shared/dropdownService/salary-division-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { RiskCategoryDropdownService } from '../../../../shared/dropdownService/risk-category-dropdown.service';
import {DocumentMasterDropdownService } from '../../../../shared/dropdownService/document-master-dropdown.service';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    CustomerIdRoutingModule,
    DataTablesModule,
    SelectModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    FileUploadModule
  ],
  declarations: [CustomerIdComponent],
  providers: [PrefixMasterDropdownService,
    CustomerIdService,
    CastMasterService,
    OccupationMasterService,
    SalaryDMasterdropdownService,
    cityMasterService,
    RiskCategoryDropdownService,
    DocumentMasterDropdownService
  ]
})
export class CustomerIdModule { }