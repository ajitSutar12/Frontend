import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ManagerViewComponent} from './manager-view.component';
import { ManagerViewRoutingModule } from './manager-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { ManagerViewService } from 'src/app/theme/view/manager-view/manager-view.service';
@NgModule({
  imports: [
    CommonModule,
    ManagerViewRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [ManagerViewComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  ManagerViewService,
  OwnbranchMasterService,
]
})
export class ManagerViewModule { }
