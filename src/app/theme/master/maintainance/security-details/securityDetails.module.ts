import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DataTablesModule } from "angular-datatables";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ColorPickerModule } from "ngx-color-picker";

import { SecurityDetailsComponent } from "./security-details.component";
import { SecurityDetailsRoutingModule } from "./securityDetails-routing.module";

import { OwnDepositsComponent } from "./own-deposits/own-deposits.component";
import { OtherSecurityComponent } from "./other-security/other-security.component";
import { FirePolicyComponent } from "./fire-policy/fire-policy.component";
import { MarketSharesComponent } from "./market-shares/market-shares.component";
import { StockStatementComponent } from "./stock-statement/stock-statement.component";
import { GovtSecurityAndLicComponent } from "./govt-security-and-lic/govt-security-and-lic.component";
import { PlantAndMachineryComponent } from "./plant-and-machinery/plant-and-machinery.component";
import { FurnitureAndFixtureComponent } from "./furniture-and-fixture/furniture-and-fixture.component";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { LandAndBuildingsComponent } from "./land-and-buildings/land-and-buildings.component";
import { GoldAndSilverComponent } from "./gold-and-silver/gold-and-silver.component";

import { CustomerInsuranceComponent } from "./customer-insurance/customer-insurance.component";
import { BookDebtsComponent } from "./book-debts/book-debts.component";
import { PleadgeStockComponent } from "./pleadge-stock/pleadge-stock.component";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { SelectModule } from "ng-select";
import { OtherSecurity2Component } from "./other-security2/other-security2.component";
import { glMasterService } from "../../../../shared/elements/gl-master.service";
// import { GoldsilverService } from "../../../../shared/elements/goldsilver.service";
// import { InsuranceMasterDropdownService } from "../../../../shared/dropdownService/insurance-master-dropdown.service";
import { Ac1Service } from "../../../../shared/elements/ac1.service";
import { S1Service } from "../../../../shared/elements/s1.service";
import { Ac2Service } from "../../../../shared/elements/ac2.service";
import { S2Service } from "../../../../shared/elements/s2.service";
import { OwnDepositsComponentService } from "./own-deposits/own-deposit.service";
import { othersecuritycomponentservice } from "./other-security/other-security.component.service";
import { firepolicycomponentservice } from "./fire-policy/fire-policy.component.service";
import { OwnbranchMasterService } from "../../../../shared/dropdownService/own-branch-master-dropdown.service";
import { schemedropdownService } from "../../../../shared/dropdownService/scheme-dropdown.service";
import { marketsharesomponentservice } from "../security-details/market-shares/market-shares.component.service";
import { stockcomponentservice } from "../security-details/stock-statement/stock-statement.component.service";
import { governmentsecuritycomponentservice } from "../security-details/govt-security-and-lic/govt-security-and-lic.component.service";
import { customerinsuranceService } from '../security-details/customer-insurance/customer-insurance.service'
import { goldandsilverService } from '../security-details/gold-and-silver/gold-and-silver.service'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GoldsilverService } from "../../../../shared/dropdownService/goldsilver.service";
import { InsuranceMasterDropdownService } from '../../../../shared/dropdownService/insurance-master-dropdown.service';

import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SecurityDetailsRoutingModule,
    NgbModule,
    ColorPickerModule,
    SelectModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SecurityDetailsComponent,
    OtherSecurityComponent,
    FirePolicyComponent,
    MarketSharesComponent,
    StockStatementComponent,
    GovtSecurityAndLicComponent,
    PlantAndMachineryComponent,
    FurnitureAndFixtureComponent,
    VehicleComponent,
    LandAndBuildingsComponent,
    GoldAndSilverComponent,
    CustomerInsuranceComponent,
    BookDebtsComponent,
    PleadgeStockComponent,
    OwnDepositsComponent],
  providers: [
    GoldsilverService,
    GoldsilverService,
    InsuranceMasterDropdownService,
    Ac1Service,
    S1Service,
    Ac2Service,
    S2Service,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    glMasterService,
    OwnDepositsComponentService,
    othersecuritycomponentservice,
    firepolicycomponentservice,
    OwnbranchMasterService,
    schemedropdownService,
    marketsharesomponentservice,
    stockcomponentservice,
    governmentsecuritycomponentservice,
    customerinsuranceService,
    goldandsilverService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },

  ],
  declarations: [
    SecurityDetailsComponent,
    OtherSecurityComponent,
    FirePolicyComponent,
    MarketSharesComponent,
    StockStatementComponent,
    GovtSecurityAndLicComponent,
    PlantAndMachineryComponent,
    FurnitureAndFixtureComponent,
    VehicleComponent,
    LandAndBuildingsComponent,
    GoldAndSilverComponent,
    CustomerInsuranceComponent,
    BookDebtsComponent,
    PleadgeStockComponent,
    OwnDepositsComponent,
    OtherSecurity2Component,

  ],
})
export class SecurityDetailsModule { }
