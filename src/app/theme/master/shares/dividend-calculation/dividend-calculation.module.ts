import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DividendCalculationRoutingModule } from './dividend-calculation-routing.module';
import { DividendCalculationComponent } from './dividend-calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';




@NgModule({
  imports: [
    CommonModule,
    DividendCalculationRoutingModule,
    DataTablesModule,
    NgbModule,
    // SelectModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [DividendCalculationComponent],
  providers: [SchemeCodeService,SchemeAccountNoService, SchemeCodeDropdownService,MembernoService, BranchService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },

]

})
export class DividendCalculationModule { }
