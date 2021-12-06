import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotingChargesComponent } from './noting-charges.component';
import { NotingChargesRoutingModule } from './notingCharges-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { SimService } from '../../../../shared/elements/sim.service'
import { S8Service } from '../../../../shared/elements/s8.service';
import { Ac8Service } from '../../../../shared/elements/ac8.service';
import { S18Service } from '../../../../shared/elements/s18.service'
import { S19Service } from '../../../../shared/elements/s19.service'
import { SelectModule } from 'ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    NotingChargesRoutingModule,
    DataTablesModule,
    SelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NotingChargesComponent],
  providers: [SimService, S8Service, Ac8Service, S18Service, S19Service,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class NotingChargesModule { }
