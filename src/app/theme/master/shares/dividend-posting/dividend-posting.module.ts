import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividendPostingRoutingModule } from './dividend-posting-routing.module';
import { DividendPostingComponent } from './dividend-posting.component';
import { DataTablesModule } from 'angular-datatables';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { DividendPostingService } from './dividend-posting.service'
@NgModule({
  imports: [
    CommonModule,
    DividendPostingRoutingModule,
    DataTablesModule,
    NgbModule,
    // SelectModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [DividendPostingComponent],
  providers: [SchemeCodeService, SchemeCodeDropdownService, DividendPostingService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]

})
export class DividendPostingModule { }
