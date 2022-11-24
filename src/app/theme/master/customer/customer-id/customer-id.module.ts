import { NgModule } from '@angular/core';
import { CustomerIdRoutingModule } from './customer-id-routing.module';
import { CustomerIdComponent } from './customer-id.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerIdService } from './customer-id.service';
import { PrefixMasterDropdownService } from '../../../../shared/dropdownService/prefix-master-dropdown.service';
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { OccupationMasterService } from '../../../../shared/dropdownService/occupation-master-dropdown.service';
import { SalaryDMasterdropdownService } from '../../../../shared/dropdownService/salary-division-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { RiskCategoryDropdownService } from '../../../../shared/dropdownService/risk-category-dropdown.service';
import { DocumentMasterDropdownService } from '../../../../shared/dropdownService/document-master-dropdown.service';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    CommonModule,
    CustomerIdRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    SharedModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  exports: [CustomerIdComponent],
  declarations: [CustomerIdComponent],
  providers: [PrefixMasterDropdownService,
    CustomerIdService,
    CastMasterService,
    OccupationMasterService,
    SalaryDMasterdropdownService,
    cityMasterService,
    RiskCategoryDropdownService,
    DocumentMasterDropdownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class CustomerIdModule { }