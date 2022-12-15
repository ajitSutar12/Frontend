import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DividendTransferEntryRoutingModule } from './dividend-transfer-entry-routing.module';
import { DividendTransferEntryComponent } from './dividend-transfer-entry.component';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { ShareMasterService } from 'src/app/theme/master/customer/shares-master/shares-master.service';
import { ThemeModule } from 'src/app/theme/theme.module';



@NgModule({
  imports: [
    CommonModule,
    DividendTransferEntryRoutingModule,
    DataTablesModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule
  ],
  declarations: [DividendTransferEntryComponent],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, OwnbranchMasterService,ShareMasterService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DividendTransferEntryModule { }
