import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDefinationComponent } from './user-defination.component';
import { UserDefinationRoutingModule } from './user-defination-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { UserdefinationServiceD } from '../../../shared/dropdownService/user-defination-dropdown.service';
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service';
import { UserDefinationService } from './user-defination.service'
import { DataTablesModule } from 'angular-datatables';
import {SelectModule} from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    UserDefinationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SelectModule,
  

  ],
  declarations: [UserDefinationComponent],
  providers:[UserdefinationServiceD,UserDefinationService,OwnbranchMasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class UserDefinationModule { }
