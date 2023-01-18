import { NgModule } from "@angular/core";
import { SharedModule } from "../../../../shared/shared.module";

import { CommonModule } from "@angular/common";

import { DataTablesModule } from "angular-datatables";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
import { SavingPigmyClosingComponent } from './saving-pigmy-closing.component';
import { SavingsPigmyAccountClosingModule } from "../../../transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing.module";

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    PerfectScrollbarModule,
    NgbModule,
    SharedModule,
    SavingsPigmyAccountClosingModule
  ],
  exports: [SavingPigmyClosingComponent],
  declarations: [SavingPigmyClosingComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class SavingPigmyClosingModule {}
