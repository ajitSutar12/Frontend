import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MoratoriumperiodmasterComponent } from './moratoriumperiodmaster.component';
import { MonotoriumPeriodMasterRoutingModule } from './monotoriumperiodmaster-routing.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
    imports: [
      CommonModule,
      NgbModule,
      FormsModule,ReactiveFormsModule,
      MonotoriumPeriodMasterRoutingModule,
      BsDatepickerModule.forRoot(),
      DatepickerModule.forRoot()
      
    ],
    declarations: [MoratoriumperiodmasterComponent],
    bootstrap: [MoratoriumperiodmasterComponent],
    providers: [{
        provide: HTTP_INTERCEPTORS,
              useClass: UserAuthInterceptor,
              multi: true
      },]
  })


export class MonotoriumPeriodMasterModule { }