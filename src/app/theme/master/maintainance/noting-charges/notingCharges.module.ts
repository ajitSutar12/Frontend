import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotingChargesComponent } from './noting-charges.component';
import { NotingChargesRoutingModule } from './notingCharges-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { ACMasterDropdownService } from "../../../../shared/dropdownService/ac-master-dropdown.service";
import { NotingChargesService } from './noting-charges.service'
@NgModule({
  imports: [
    CommonModule,
    NotingChargesRoutingModule,
    DataTablesModule,
    // SelectModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [NotingChargesComponent],
  providers: [SystemMasterParametersService, OwnbranchMasterService, SchemeAccountNoService, ACMasterDropdownService, NotingChargesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class NotingChargesModule { }
