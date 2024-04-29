import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearEndRoutingModule } from './year-end-routing.module';
import { YearEndComponent } from './year-end.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DayEndService } from '../day-end.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [YearEndComponent],
  imports: [
    CommonModule,
    YearEndRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule, 
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  providers:[  SchemeCodeDropdownService,
    OwnbranchMasterService,DayEndService ,

    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
]
})
export class YearEndModule { }
