import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleDefinationComponent } from './role-defination.component';
import { RoleDefinatioRoutingModule } from './role-defination-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { UserDefinationService } from '../user-defination/user-defination.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from "angular-datatables";
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { TreeviewModule } from 'ngx-treeview';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    RoleDefinatioRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TreeviewModule.forRoot(),
    FormsModule,
    NgSelectModule,
    DataTablesModule,
    //Translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [RoleDefinationComponent],
  providers: [UserDefinationService, SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class RoleDefinationModule { }
//Translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}