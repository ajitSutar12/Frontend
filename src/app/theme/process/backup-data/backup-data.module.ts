import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackupDataRoutingModule } from './backup-data-routing.module';
import { BackupDataComponent } from './backup-data.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@NgModule({
  declarations: [BackupDataComponent],
  providers:[SystemMasterParametersService,],
  imports: [
    CommonModule,
    BackupDataRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ]
})
export class BackupDataModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
