import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TDSFormSubmissionComponent } from './tds-form-submission.component';
import { TDSFormSubmissionRoutingModule } from './tdsformsubmission-routing.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
    imports: [
      CommonModule,
      NgbModule,
      NgSelectModule,
      FormsModule,
      ReactiveFormsModule,
      TDSFormSubmissionRoutingModule,
      BsDatepickerModule.forRoot(),
      DatepickerModule.forRoot()
      
    ],
    declarations: [TDSFormSubmissionComponent],
    bootstrap: [TDSFormSubmissionComponent],
    providers: [{
        provide: HTTP_INTERCEPTORS,
              useClass: UserAuthInterceptor,
              multi: true
      },]
  })

//   @NgModule({
//     imports: [
//       CommonModule,
//       NotingChargesRoutingModule,
//       DataTablesModule,
//       // SelectModule,
//       NgSelectModule,
//       NgbModule,
//       FormsModule,
//       ReactiveFormsModule,
//       BsDatepickerModule.forRoot(),
//       DatepickerModule.forRoot()
//     ],
//     declarations: [NotingChargesComponent],
//     providers: [SimService, S8Service, Ac8Service, S18Service, S19Service,{
//       provide: HTTP_INTERCEPTORS,
//       useClass: UserAuthInterceptor,
//       multi: true
//     },]
//   })
export class TDSFormSubmissionModule { }