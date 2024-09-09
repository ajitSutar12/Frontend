import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDocRoutingModule } from './customer-doc-routing.module';
import { CustomerDocComponent } from './customer-doc.component';
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../shared/dropdownService/scheme-code-dropdown.service';
import { ThemeModule } from '../../theme.module';
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [CustomerDocComponent],
  imports: [
    CommonModule,
    CustomerDocRoutingModule,
    ThemeModule,
    CommonModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    // BsDatepickerModule.forRoot(),
    // DatepickerModule.forRoot(),
   
    ThemeModule
  ],
  exports:[CustomerDocComponent],
  providers:[OwnbranchMasterService,SchemeCodeDropdownService]
})
export class CustomerDocModule { }
