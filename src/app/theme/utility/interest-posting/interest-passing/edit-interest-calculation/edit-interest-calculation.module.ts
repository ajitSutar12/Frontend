import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditInterestCalculationComponent } from './edit-interest-calculation.component';
import { EditInterestCalculationRoutingModule } from './edit-interest-calculation-routing.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';
import {OwnbranchMasterService} from '../../../../../../app/shared/dropdownService/own-branch-master-dropdown.service';
import {SchemeCodeDropdownService} from '../../../../../shared/dropdownService/scheme-code-dropdown.service';
import {SchemeAccountNoService} from '../../../../../shared/dropdownService/schemeAccountNo.service';


@NgModule({
  imports: [
    CommonModule,
    EditInterestCalculationRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    
    i
  ],
  declarations: [ EditInterestCalculationComponent],
  providers:[OwnbranchMasterService,SchemeCodeDropdownService,SchemeAccountNoService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class EditInterestCalculationModule { }
