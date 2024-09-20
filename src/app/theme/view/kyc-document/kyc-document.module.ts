import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KYCDocumentRoutingModule } from './kyc-document-routing.module';
import { KYCDocumentComponent } from './kyc-document.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [KYCDocumentComponent],
  imports: [
    CommonModule,
    KYCDocumentRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
   
  ]
})
export class KYCDocumentModule { }
