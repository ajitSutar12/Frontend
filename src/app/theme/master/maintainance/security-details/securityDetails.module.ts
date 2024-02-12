import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DataTablesModule } from "angular-datatables";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ColorPickerModule } from "ngx-color-picker";

import { SecurityDetailsComponent } from "./security-details.component";
import { SecurityDetailsRoutingModule } from "./securityDetails-routing.module";

import { OwnDepositsModule } from "./own-deposits/own-deposits.module";
import { OtherSecurityModule } from "./other-security/other-security.module";
import { FirePolicyModule } from "./fire-policy/fire-policy.module";
// import { FirePolicyComponent } from "./fire-policy/fire-policy.component";
import { MarketSharesModule } from "./market-shares/market-shares.module";
import { StockStatementModule } from "./stock-statement/stock-statement.module";
import { GovtSecurityAndLicModule } from "./govt-security-and-lic/govt-security-and-lic.module";
import { PlantAndMachineryModule } from "./plant-and-machinery/plant-and-machinery.module";
import { FurnitureAndFixtureModule } from "./furniture-and-fixture/furniture-and-fixture.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { LandAndBuildingsModule } from "./land-and-buildings/land-and-buildings.module";
import { GoldAndSilverModule } from "./gold-and-silver/gold-and-silver.module";

import { CustomerInsuranceModule } from "./customer-insurance/customer-insurance.module";
import { BookDebtsModule } from "./book-debts/book-debts.module";
import { PleadgeStockModule } from "./pleadge-stock/pleadge-stock.module";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
//import { SelectModule } from "ng-select";
import { NgSelectModule } from '@ng-select/ng-select';
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

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SecurityMasterdropdownService } from 'src/app/shared/dropdownService/security-master-dropdown.service';
import { SecurityCodeService } from '../../policy-settings/definations/security-code/security-code.service';
import { VoucherEntryService } from '../../../transaction/voucher-entry/voucher-entry.service'
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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
    NgSelectModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    FirePolicyModule,
    BookDebtsModule,
    CustomerInsuranceModule,
    FurnitureAndFixtureModule,
    GoldAndSilverModule,
    GovtSecurityAndLicModule,
    LandAndBuildingsModule,
    MarketSharesModule,
    OtherSecurityModule,
    OwnDepositsModule,
    PleadgeStockModule,
    StockStatementModule,
    VehicleModule,
    PlantAndMachineryModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  exports: [SecurityDetailsComponent,
    OtherSecurityModule,
    // FirePolicyComponent,
    MarketSharesModule,
    StockStatementModule,
    GovtSecurityAndLicModule,
    PlantAndMachineryModule,
    FurnitureAndFixtureModule,
    VehicleModule,
    LandAndBuildingsModule,
    GoldAndSilverModule,
    CustomerInsuranceModule,
    BookDebtsModule,
    PleadgeStockModule,
    OwnDepositsModule,

    FirePolicyModule],
  providers: [
    GoldsilverService,
    GoldsilverService,
    InsuranceMasterDropdownService,
    Ac1Service,
    S1Service,
    Ac2Service,
    S2Service,
    SecurityCodeService,
    VoucherEntryService,
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
    SecurityMasterdropdownService,
    SystemMasterParametersService,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class SecurityDetailsModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}