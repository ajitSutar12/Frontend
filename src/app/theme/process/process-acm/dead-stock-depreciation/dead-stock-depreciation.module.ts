import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { DeadStockDepreciationComponent } from './dead-stock-depreciation.component'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
// import {SelectModule} from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAuthInterceptor } from '../../../../../app/user-auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    // SelectModule
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    //Translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  declarations: [DeadStockDepreciationComponent],
  exports: [DeadStockDepreciationComponent],
  providers: [OwnbranchMasterService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, SystemMasterParametersService]
})
export class DeadStockDepreciationModule { }
//Translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}