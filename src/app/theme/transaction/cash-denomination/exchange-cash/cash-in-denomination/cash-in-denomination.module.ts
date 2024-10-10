// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import {CashInDenominationComponent } from './cash-in-denomination.component';
// import { CashInDenominationRoutingModule } from './cash-in-denomination-routing.module';

// import {DataTablesModule} from 'angular-datatables';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

// @NgModule({
//   imports: [
//     CommonModule,
//     CashInDenominationRoutingModule,
//     DataTablesModule,
//     NgSelectModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     BsDatepickerModule.forRoot(),
//     DatepickerModule.forRoot()

  
//   ],
//   declarations: [CashInDenominationComponent],
//   providers:[{
//     provide: HTTP_INTERCEPTORS,
//     useClass: UserAuthInterceptor,
//     multi: true
//   },
//   ]
// })
// export class CashInDenominationModule { }