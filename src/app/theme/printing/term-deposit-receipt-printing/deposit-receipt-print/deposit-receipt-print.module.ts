import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { StartingacnoService } from '../../../../shared/elements/startingacno.service';
import { EndingacnoService } from '../../../../shared/elements/endingacno.service';
import { SelectModule } from 'ng-select';
import { DepositReceiptPrintComponent } from './deposit-receipt-print.component';
import { DepositReceiptPrintRoutingModule } from './deposit-receipt-print-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DragDropModule } from '@angular/cdk/drag-drop'
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    DepositReceiptPrintRoutingModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    SelectModule,
    // DragDropModule,
    //Translation
 TranslateModule.forRoot({
  loader:{
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  declarations: [DepositReceiptPrintComponent],
  providers: [SchemeCodeService, StartingacnoService, EndingacnoService]
})
export class DepositReceiptPrintModule { }
//Translation
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}