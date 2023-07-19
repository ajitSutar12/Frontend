import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { RecoveryDataImportExportComponent } from './recovery-data-import-export.component';

import { RecoveryDataImportExportRoutingModule } from './recovery-data-import-export-routing.module';

import {DataTablesModule} from 'angular-datatables';

import {FileUploadModule} from 'ng2-file-upload';

// import {SelectModule} from 'ng-select';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
@NgModule({
  imports: [
    CommonModule,
    RecoveryDataImportExportRoutingModule,

    NgbModule,
    // SelectModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    FileUploadModule,
    
    
  ],
  declarations: [RecoveryDataImportExportComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SalaryDMasterdropdownService,
  SchemeAccountNoService
]
})
export class RecoveryDataImportExportModule { }
