import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendMessageRoutingModule } from './send-message-routing.module';
import { SendMessageComponent } from './send-message.component'
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
// import { ButtonModule } from '../../../theme/button/button.module';
import { ThemeModule } from '../../../theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [SendMessageComponent],
  imports: [
    CommonModule,
    SendMessageRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    // ButtonModule,
    ThemeModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule,
    NgbModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]

})
export class SendMessageModule { }
