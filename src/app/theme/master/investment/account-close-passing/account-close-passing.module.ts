import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountClosePassingComponent } from './account-close-passing.component';
import { AccountClosePassingRoutingModule } from './account-close-passing-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AccountClosePassingRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AccountClosePassingComponent],
  providers : [Scheme1Service,AcountnoService,A1Service]

})
export class AccountClosePassingModule { }
