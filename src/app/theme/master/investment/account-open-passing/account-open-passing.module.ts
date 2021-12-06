import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountOpenPassingComponent } from './account-open-passing.component';
import { AccountOpenPassingRoutingModule } from './account-open-passing-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';





@NgModule({
  imports: [
    CommonModule,
    AccountOpenPassingRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AccountOpenPassingComponent],
  providers : [Scheme1Service,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class AccountOpenPassingModule { }
