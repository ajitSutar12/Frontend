import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReconciliationEntryComponent } from './reconciliation-entry.component';
import { ReconciliationEntryRoutingModule } from './reconciliation-entry-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { ReconciliationEntryService } from './reconciliation-entry.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ReconciliationEntryRoutingModule,
    SharedModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [ReconciliationEntryComponent],
  providers:[ACMasterDropdownService,ReconciliationEntryService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ReconciliationEntryModule { }