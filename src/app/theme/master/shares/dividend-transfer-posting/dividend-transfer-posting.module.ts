import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividendTransferPostingRoutingModule } from './dividend-transfer-posting-routing.module';
import { DividendTransferPostingComponent } from './dividend-transfer-posting.component';
import { DataTablesModule } from 'angular-datatables';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
// import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';



@NgModule({
  imports: [
    CommonModule,
    DividendTransferPostingRoutingModule,
    DataTablesModule,
    NgbModule,
    NgSelectModule,
    // SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DividendTransferPostingComponent],
  providers: [SchemeCodeService,SchemeCodeDropdownService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DividendTransferPostingModule { }
