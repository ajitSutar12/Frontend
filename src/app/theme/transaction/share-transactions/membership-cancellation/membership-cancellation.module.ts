import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {MembershipCancellationComponent} from '../membership-cancellation/membership-cancellation.component'
import {UserAuthInterceptor} from '../../../../user-auth.interceptor'

@NgModule({
    imports: [
      CommonModule,
     
     
      NgbModule,
      // SelectModule,
      FormsModule, ReactiveFormsModule,
      
     
      NgSelectModule,
      BsDatepickerModule.forRoot(),
      DatepickerModule.forRoot()
  
    ],
    providers: [
    
      SchemeCodeDropdownService,
     
     
      {
        provide: HTTP_INTERCEPTORS,
        useClass: UserAuthInterceptor,
        multi: true
      },
    ],
    declarations: [MembershipCancellationComponent],
    exports:[MembershipCancellationComponent],
    bootstrap: [MembershipCancellationComponent]
  })
  export class MembershipCancellationModule { }