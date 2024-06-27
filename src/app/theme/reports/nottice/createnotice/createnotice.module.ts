import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatenoticeRoutingModule } from './createnotice-routing.module';
import { CreatenoticeComponent } from './createnotice.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  declarations: [CreatenoticeComponent],
  imports: [
    CommonModule,
    CreatenoticeRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    QuillModule.forRoot() 
  ],
  providers:[SystemMasterParametersService],
})
export class CreatenoticeModule { }
