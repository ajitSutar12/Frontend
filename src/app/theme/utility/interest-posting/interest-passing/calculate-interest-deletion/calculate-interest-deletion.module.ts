import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateInterestDeletionComponent } from './calculate-interest-deletion.component';
import { CalculateInterestDeletionRoutingModule } from './calculate-interest-deletion-routing.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';
import { EditInterestCalculationService } from '../edit-interest-calculation/edit-interest-calculation.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    CalculateInterestDeletionRoutingModule,
    SharedModule,
    DataTablesModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  declarations: [CalculateInterestDeletionComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, EditInterestCalculationService]
})
export class CalculateInterestDeletionModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

