import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayComponent } from './holiday.component';
import { HolidayRoutingModule } from './holiday-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HolidayService } from './holiday.service'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  imports: [
    CommonModule,
    HolidayRoutingModule,
    SharedModule,
    DataTablesModule,
    CommonModule,
    SharedModule,
    FullCalendarModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  declarations: [HolidayComponent],
  providers: [SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, HolidayService]
})
export class HolidayModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
