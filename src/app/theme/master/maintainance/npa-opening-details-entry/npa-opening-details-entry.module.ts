import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpaOpeningDetailsEntryComponent } from './npa-opening-details-entry.component';
import { NpaOpeningDetailsEntryRoutingModule } from './npa-opening-details-entry-routing.module'
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { S5Service } from '../../../../shared/elements/s5.service';
import { Ac5Service } from '../../../../shared/elements/ac5.service';
import { S16Service } from '../../../../shared/elements/s16.service';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NpaOpeningDetailsEntryService } from './npa-opening-details-entry.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NpaOpeningDetailsEntryRoutingModule,
    DataTablesModule,
    // SelectModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StatementTypeService, S5Service, Ac5Service, S16Service, NpaOpeningDetailsEntryService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [NpaOpeningDetailsEntryComponent],
  bootstrap: [NpaOpeningDetailsEntryComponent]
})
export class NpaOpeningDetailsEntryModule { }

