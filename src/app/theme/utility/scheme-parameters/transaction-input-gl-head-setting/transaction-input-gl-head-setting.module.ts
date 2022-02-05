import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionInputGlHeadSettingComponent } from './transaction-input-gl-head-setting.component';
// import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../user-auth.interceptor';
import { TranscationInputSettingService } from './transaction-input-gl-head-setting.service'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};
@NgModule({
    declarations: [TransactionInputGlHeadSettingComponent],
    exports: [TransactionInputGlHeadSettingComponent],
    imports: [
        CommonModule,
        DataTablesModule,
        NgbModule,
        // SelectModule,
        FormsModule, ReactiveFormsModule,
        SharedModule, //modal
        NgSelectModule,
        PerfectScrollbarModule
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        TranscationInputSettingService,
        ACMasterDropdownService
    ]
})
export class TransactionInputGlHeadSettingModule { }
