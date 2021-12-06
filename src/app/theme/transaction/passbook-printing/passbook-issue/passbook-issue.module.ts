import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Scheme10Service} from '../../../../shared/elements/scheme10.service';
import {Scheme11Service} from '../../../../shared/elements/scheme11.service';

import { PassbookIssueComponent } from './passbook-issue.component';
import { PassbookIssueRoutingModule } from './passbook-issue-routing.module'
import { SelectModule } from 'ng-select';

import {DataTablesModule} from 'angular-datatables';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    PassbookIssueRoutingModule,
    DataTablesModule,
    SelectModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [PassbookIssueComponent],
  providers:[Scheme10Service,Scheme11Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class PassbookIssueModule { }
