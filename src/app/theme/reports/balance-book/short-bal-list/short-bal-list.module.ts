import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortBalListRoutingModule } from './short-bal-list-routing.module';
import { ShortBalListComponent } from './short-bal-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import{IframeModule} from '../iframe/iframe.module'


@NgModule({
  declarations: [ShortBalListComponent],
  imports: [
    CommonModule,
    ShortBalListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    IframeModule

  ],
  providers:[OwnbranchMasterService,
    SchemeCodeDropdownService,
    SystemMasterParametersService]
})
export class ShortBalListModule { }
