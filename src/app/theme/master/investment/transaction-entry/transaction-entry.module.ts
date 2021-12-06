import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionEntryComponent } from './transaction-entry.component';
import { TransactionEntryRoutingModule } from './transaction-entry-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';





@NgModule({
  imports: [
    CommonModule,
    TransactionEntryRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TransactionEntryComponent],
  providers : [Scheme1Service,AcountnoService,A1Service,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class TransactionEntryModule { }
