import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayComponent } from './holiday.component';
import { HolidayRoutingModule } from './holiday-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HolidayService } from './holiday.service'
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../theme.module';
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
    NgSelectModule,
    ThemeModule,
    ReactiveFormsModule
  ],
  declarations: [HolidayComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, HolidayService]
})
export class HolidayModule { }
