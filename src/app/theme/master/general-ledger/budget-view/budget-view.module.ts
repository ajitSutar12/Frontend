import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetViewRoutingModule } from './budget-view-routing.module';
import { BudgetViewComponent } from './budget-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { Iframe5Module } from 'src/app/theme/reports/pigmy-report/iframe5/iframe5.module';



@NgModule({
  imports: [
    CommonModule,
    BudgetViewRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // SelectModule
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,
    
  ],
  declarations: [BudgetViewComponent,],

  providers:[ 
    OwnbranchMasterService,
    ACMasterDropdownService,  
    SystemMasterParametersService,

    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
]
})
export class BudgetViewModule { }
