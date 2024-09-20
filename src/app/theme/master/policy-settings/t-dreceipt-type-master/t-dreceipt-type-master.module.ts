import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDReceiptTypeMasterComponent } from './t-dreceipt-type-master.component';
import { TDReceiptTypeMasterRoutingModule } from './t-dreceipt-type-master-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { TDReceiptService } from './t-dreceipt-type-master.component.service'
import { TdReceiptService } from '../../../../shared/dropdownService/tdReceipt-type.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from 'src/app/theme/theme.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  imports: [
    CommonModule,
    TDReceiptTypeMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    ThemeModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  declarations: [TDReceiptTypeMasterComponent],
  providers: [TDReceiptService, TdReceiptService,SystemMasterParametersService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,

    multi: true
  },]
})
export class TDReceiptTypeMasterModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
