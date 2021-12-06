import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountwiseDocumentAcceptanceComponent } from './accountwise-document-acceptance.component';
import { AccountwiseDocumentAcceptanceRoutingModule } from './accountwise-document-acceptance-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { S7Service } from '../../../../shared/elements/s7.service';
import { Ac7Service } from '../../../../shared/elements/ac7.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    AccountwiseDocumentAcceptanceRoutingModule,
    DataTablesModule,
    SelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [S7Service, Ac7Service,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [AccountwiseDocumentAcceptanceComponent]
})
export class AccountwiseDocumentAcceptanceModule { }
