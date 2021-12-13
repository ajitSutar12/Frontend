import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExucuteOnService } from '../../../../shared/dropdownService/exucute-on.service';
import { SpecialRoutingModule } from './special-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { specialservice } from './special.service'
import { DatePipe } from '@angular/common';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { SpecialComponent } from './special.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SpecialRoutingModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [SpecialComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, DatePipe,
    specialservice,
    ExucuteOnService, SchemeAccountNoService, SchemeCodeDropdownService]
})
export class SpecialModule { }
