import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityRoutingModule } from './utility-routing.module';
import { SharesDataEIComponent } from './shares-data-ei/shares-data-ei.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BackupDataComponent } from './backup-data/backup-data.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UtilityRoutingModule,
  
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class UtilityModule { }
