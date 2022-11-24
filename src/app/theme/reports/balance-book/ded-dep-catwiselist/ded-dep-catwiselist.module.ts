import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DedDepCatwiselistRoutingModule } from './ded-dep-catwiselist-routing.module';
import { DedDepCatwiselistComponent } from './ded-dep-catwiselist.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DepriciationCatDropdownMasterService } from '../../../../shared/dropdownService/depriciation-category-master-dropdown.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DeadstockmasterService } from "../../../master/customer/dead-stock-master/dead-stock-master.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import{IframeModule} from '../iframe/iframe.module'

@NgModule({
  declarations: [DedDepCatwiselistComponent],
  imports: [
    CommonModule,
    DedDepCatwiselistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    IframeModule
  ],
  exports: [
    DedDepCatwiselistComponent
  ],
  providers: [ OwnbranchMasterService,
    DepriciationCatDropdownMasterService,
    SystemMasterParametersService,
    DeadstockmasterService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG,

    },
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class DedDepCatwiselistModule { }
