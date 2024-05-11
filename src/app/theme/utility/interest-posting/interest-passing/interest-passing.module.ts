import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterestPassingComponent } from './interest-passing.component';
import { InterestPassingRoutingModule } from './interest-passing-routing.module';
// import { EditInterestCalculationComponent } from './edit-interest-calculation/edit-interest-calculation.component';

import { CalculateInterestPassingComponent } from './calculate-interest-passing/calculate-interest-passing.component';
import { CalculateInterestUnpassingComponent } from './calculate-interest-unpassing/calculate-interest-unpassing.component';
import { CalculateInterestDeletionComponent } from './calculate-interest-deletion/calculate-interest-deletion.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { EditoverdueInterestReceivableAmountComponent } from './editoverdue-interest-receivable-amount/editoverdue-interest-receivable-amount.component';
import { EditInterestCalculationComponent } from './edit-interest-calculation/edit-interest-calculation.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../../scheme-parameters/system-master-parameters/system-master-parameters.service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    InterestPassingRoutingModule,
    DataTablesModule,
    PerfectScrollbarModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
}) 
    
  ],
  providers: [SchemeAccountNoService,SchemeCodeDropdownService,OwnbranchMasterService,SystemMasterParametersService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  declarations: [InterestPassingComponent, EditInterestCalculationComponent, CalculateInterestPassingComponent, CalculateInterestUnpassingComponent, CalculateInterestDeletionComponent, EditoverdueInterestReceivableAmountComponent]
})
export class InterestPassingModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
