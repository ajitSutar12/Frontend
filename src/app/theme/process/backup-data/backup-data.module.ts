import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackupDataRoutingModule } from './backup-data-routing.module';
import { BackupDataComponent } from './backup-data.component';
import { SharedModule } from 'src/app/shared/shared.module';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  declarations: [BackupDataComponent],
  imports: [
    CommonModule,
    BackupDataRoutingModule,
    SharedModule,
    //Translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers:[SystemMasterParametersService]
})
export class BackupDataModule { }
//Translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}