import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReportsWithSearchingComponent } from './all-reports-with-searching.component';
import {allReportsWithSearchingRoutingModule} from './allReportsWithSearching-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';
import { FileUploadModule } from 'ng2-file-upload';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@NgModule({
  imports: [
    CommonModule,
    allReportsWithSearchingRoutingModule,
    SharedModule,
    // ChartModule
    DataTablesModule,
    FileUploadModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [AllReportsWithSearchingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  SchemeAccountNoService
]
})
export class AllReportsWithSearchingModule  { }
