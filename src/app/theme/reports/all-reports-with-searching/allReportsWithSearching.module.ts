import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReportsWithSearchingComponent } from './all-reports-with-searching.component';
import {allReportsWithSearchingRoutingModule} from './allReportsWithSearching-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';
import { FileUploadModule } from 'ng2-file-upload';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    allReportsWithSearchingRoutingModule,
    SharedModule,
    // ChartModule
    DataTablesModule,
    FileUploadModule
  ],
  declarations: [AllReportsWithSearchingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class AllReportsWithSearchingModule  { }
