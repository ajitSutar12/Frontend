(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["centralised-passing-centralisedPassing-module"],{

/***/ "./src/app/theme/passing/centralised-passing/centralised-passing.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/centralised-passing.component.ts ***!
  \************************************************************************************/
/*! exports provided: CentralisedPassingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralisedPassingComponent", function() { return CentralisedPassingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _centralised_passing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./centralised-passing.service */ "./src/app/theme/passing/centralised-passing/centralised-passing.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_shares_master_shares_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master-shares/master-shares.component */ "./src/app/theme/passing/centralised-passing/master-shares/master-shares.component.ts");
/* harmony import */ var _master_anamat_master_anamat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./master-anamat/master-anamat.component */ "./src/app/theme/passing/centralised-passing/master-anamat/master-anamat.component.ts");
/* harmony import */ var _master_saving_master_saving_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./master-saving/master-saving.component */ "./src/app/theme/passing/centralised-passing/master-saving/master-saving.component.ts");
/* harmony import */ var _master_current_master_current_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./master-current/master-current.component */ "./src/app/theme/passing/centralised-passing/master-current/master-current.component.ts");
/* harmony import */ var _master_deposits_master_deposits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./master-deposits/master-deposits.component */ "./src/app/theme/passing/centralised-passing/master-deposits/master-deposits.component.ts");
/* harmony import */ var _master_investments_master_investments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./master-investments/master-investments.component */ "./src/app/theme/passing/centralised-passing/master-investments/master-investments.component.ts");
/* harmony import */ var _master_pigmy_agent_master_pigmy_agent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./master-pigmy-agent/master-pigmy-agent.component */ "./src/app/theme/passing/centralised-passing/master-pigmy-agent/master-pigmy-agent.component.ts");
/* harmony import */ var _master_pigmy_master_pigmy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./master-pigmy/master-pigmy.component */ "./src/app/theme/passing/centralised-passing/master-pigmy/master-pigmy.component.ts");
/* harmony import */ var _master_cash_credit_master_cash_credit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./master-cash-credit/master-cash-credit.component */ "./src/app/theme/passing/centralised-passing/master-cash-credit/master-cash-credit.component.ts");
/* harmony import */ var _master_loan_master_loan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./master-loan/master-loan.component */ "./src/app/theme/passing/centralised-passing/master-loan/master-loan.component.ts");
/* harmony import */ var _master_dead_stock_master_dead_stock_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./master-dead-stock/master-dead-stock.component */ "./src/app/theme/passing/centralised-passing/master-dead-stock/master-dead-stock.component.ts");


















function CentralisedPassingComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-shares");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-anamat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-saving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-current");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-deposits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-investments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-pigmy-agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-pigmy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-cash-credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-loan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentralisedPassingComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-master-dead-stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CentralisedPassingComponent {
    constructor(_router, _service) {
        this._router = _router;
        this._service = _service;
        this.voucherTrue = false;
        this.batchvoucherTrue = false;
        this.depositclosingvouchersTrue = false;
        this.savingpigmyclosingTrue = false;
        this.remittanceadviceTrue = false;
        this.cashremitanceTrue = false;
        this.deadstockpurchaseTrue = false;
        this.deadstocktransactionTrue = false;
        this.lockeraccloserentTrue = false;
        this.mastersharesTrue = false;
        this.masteranamatTrue = false;
        this.mastersavingTrue = true;
        this.mastercurrentTrue = false;
        this.masterdepositsTrue = false;
        this.masterinvestmentsTrue = false;
        this.masterpigmyagentTrue = false;
        this.masterpigmyTrue = false;
        this.mastercashcreditTrue = false;
        this.masterloanTrue = false;
        this.masterdisputeloanTrue = false;
        this.masterlockerdepositTrue = false;
        this.masterdeadstockTrue = false;
        //count variable
        this.voucher = 0;
        this.batch_voucher = 0;
        this.deposit_closing = 0;
        this.saving_pigmy_closing = 0;
        this.remittance_advice = 0;
        this.cash_remitance = 0;
        this.dead_stock_purchase = 0;
        this.dead_stock_transaction = 0;
        this.locaker_ac_close = 0;
        this.share_master = 0;
        this.anamat_master = 0;
        this.saving_master = 0;
        this.current_master = 0;
        this.deposit_master = 0;
        this.investment_master = 0;
        this.pigmy_agent_master = 0;
        this.pigmy_master = 0;
        this.cash_credit_master = 0;
        this.loan_master = 0;
        this.dispute_loan_master = 0;
        this.locker_master = 0;
        this.dead_stock_master = 0;
    }
    ngOnInit() {
        this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe((x => {
            this._service.getCountOfPassing().subscribe(data => {
                console.log(data);
                this.saving_master = data.savingcount;
                this.current_master = data.currentcount;
                this.pigmy_agent_master = data.pigmyAgentCount;
                this.share_master = data.shareCount;
                this.anamat_master = data.anamatCount;
                this.deposit_master = data.termdepositCount;
                this.investment_master = data.investmentCount;
                this.pigmy_master = data.pigmyCount;
                this.cash_credit_master = data.cashCount;
                this.loan_master = data.loanCount;
            });
        }));
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    OpenLink(val) {
        // 
        // if (val == 1) {
        //   this.voucherTrue = true;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 2) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = true;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 3) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = true;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 4) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = true;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 5) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = true;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 6) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = true;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 7) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = true;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 8) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = true;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 9) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = true;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = false;
        // }
        if (val == 10) {
            // this.voucherTrue = false;
            // this.batchvoucherTrue = false;
            // this.depositclosingvouchersTrue = false;
            // this.savingpigmyclosingTrue = false;
            // this.remittanceadviceTrue = false;
            // this.cashremitanceTrue = false;
            // this.deadstockpurchaseTrue = false;
            // this.deadstocktransactionTrue = false;
            // this.lockeraccloserentTrue = false;
            this.mastersharesTrue = true;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 11) {
            // this.voucherTrue = false;
            // this.batchvoucherTrue = false;
            // this.depositclosingvouchersTrue = false;
            // this.savingpigmyclosingTrue = false;
            // this.remittanceadviceTrue = false;
            // this.cashremitanceTrue = false;
            // this.deadstockpurchaseTrue = false;
            // this.deadstocktransactionTrue = false;
            // this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = true;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 12) {
            this.mastersavingTrue = true;
            // this.voucherTrue = false;
            // this.batchvoucherTrue = false;
            // this.depositclosingvouchersTrue = false;
            // this.savingpigmyclosingTrue = false;
            // this.remittanceadviceTrue = false;
            // this.cashremitanceTrue = false;
            // this.deadstockpurchaseTrue = false;
            // this.deadstocktransactionTrue = false;
            // this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 13) {
            // this.voucherTrue = false;
            // this.batchvoucherTrue = false;
            // this.depositclosingvouchersTrue = false;
            // this.savingpigmyclosingTrue = false;
            // this.remittanceadviceTrue = false;
            // this.cashremitanceTrue = false;
            // this.deadstockpurchaseTrue = false;
            // this.deadstocktransactionTrue = false;
            // this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = true;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 14) {
            // this.voucherTrue = false;
            // this.batchvoucherTrue = false;
            // this.depositclosingvouchersTrue = false;
            // this.savingpigmyclosingTrue = false;
            // this.remittanceadviceTrue = false;
            // this.cashremitanceTrue = false;
            // this.deadstockpurchaseTrue = false;
            // this.deadstocktransactionTrue = false;
            // this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = true;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 15) {
            // this.voucherTrue = false;
            // this.batchvoucherTrue = false;
            // this.depositclosingvouchersTrue = false;
            // this.savingpigmyclosingTrue = false;
            // this.remittanceadviceTrue = false;
            // this.cashremitanceTrue = false;
            // this.deadstockpurchaseTrue = false;
            // this.deadstocktransactionTrue = false;
            // this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = true;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 16) {
            this.voucherTrue = false;
            this.batchvoucherTrue = false;
            this.depositclosingvouchersTrue = false;
            this.savingpigmyclosingTrue = false;
            this.remittanceadviceTrue = false;
            this.cashremitanceTrue = false;
            this.deadstockpurchaseTrue = false;
            this.deadstocktransactionTrue = false;
            this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = true;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 17) {
            this.voucherTrue = false;
            this.batchvoucherTrue = false;
            this.depositclosingvouchersTrue = false;
            this.savingpigmyclosingTrue = false;
            this.remittanceadviceTrue = false;
            this.cashremitanceTrue = false;
            this.deadstockpurchaseTrue = false;
            this.deadstocktransactionTrue = false;
            this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = true;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 18) {
            this.voucherTrue = false;
            this.batchvoucherTrue = false;
            this.depositclosingvouchersTrue = false;
            this.savingpigmyclosingTrue = false;
            this.remittanceadviceTrue = false;
            this.cashremitanceTrue = false;
            this.deadstockpurchaseTrue = false;
            this.deadstocktransactionTrue = false;
            this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = true;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 19) {
            this.voucherTrue = false;
            this.batchvoucherTrue = false;
            this.depositclosingvouchersTrue = false;
            this.savingpigmyclosingTrue = false;
            this.remittanceadviceTrue = false;
            this.cashremitanceTrue = false;
            this.deadstockpurchaseTrue = false;
            this.deadstocktransactionTrue = false;
            this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = true;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = false;
        }
        if (val == 20) {
            this.voucherTrue = false;
            this.batchvoucherTrue = false;
            this.depositclosingvouchersTrue = false;
            this.savingpigmyclosingTrue = false;
            this.remittanceadviceTrue = false;
            this.cashremitanceTrue = false;
            this.deadstockpurchaseTrue = false;
            this.deadstocktransactionTrue = false;
            this.lockeraccloserentTrue = false;
            this.mastersharesTrue = false;
            this.masteranamatTrue = false;
            this.mastersavingTrue = false;
            this.mastercurrentTrue = false;
            this.masterdepositsTrue = false;
            this.masterinvestmentsTrue = false;
            this.masterpigmyagentTrue = false;
            this.masterpigmyTrue = false;
            this.mastercashcreditTrue = false;
            this.masterloanTrue = false;
            this.masterdisputeloanTrue = false;
            // this.masterlockerdepositTrue = false;
            this.masterdeadstockTrue = true;
        }
        // if (val == 21) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = true;
        //   this.masterdeadstockTrue = false;
        // }
        // if (val == 22) {
        //   this.voucherTrue = false;
        //   this.batchvoucherTrue = false;
        //   this.depositclosingvouchersTrue = false;
        //   this.savingpigmyclosingTrue = false;
        //   this.remittanceadviceTrue = false;
        //   this.cashremitanceTrue = false;
        //   this.deadstockpurchaseTrue = false;
        //   this.deadstocktransactionTrue = false;
        //   this.lockeraccloserentTrue = false;
        //   this.mastersharesTrue = false;
        //   this.masteranamatTrue = false;
        //   this.mastersavingTrue = false;
        //   this.mastercurrentTrue = false;
        //   this.masterdepositsTrue = false;
        //   this.masterinvestmentsTrue = false;
        //   this.masterpigmyagentTrue = false;
        //   this.masterpigmyTrue = false;
        //   this.mastercashcreditTrue = false;
        //   this.masterloanTrue = false;
        //   this.masterdisputeloanTrue = false;
        //   this.masterlockerdepositTrue = false;
        //   this.masterdeadstockTrue = true;
        // }
    }
}
CentralisedPassingComponent.ɵfac = function CentralisedPassingComponent_Factory(t) { return new (t || CentralisedPassingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_centralised_passing_service__WEBPACK_IMPORTED_MODULE_3__["CentralisedPassingService"])); };
CentralisedPassingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CentralisedPassingComponent, selectors: [["app-centralised-passing"]], decls: 89, vars: 22, consts: [[1, "row"], [1, "col-sm-3"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "col-md-12"], [2, "max-width", "600px", "max-height", "450px"], [1, "basic-list"], ["routerLinkActive", "active", "id", "pointer", 1, "text-right", "f-w-600", 3, "click"], [1, "badge", "badge-secondary", "badgeAlign"], [1, "col-sm-9"], [4, "ngIf"]], template: function CentralisedPassingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Passing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "perfect-scrollbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_12_listener() { return ctx.OpenLink(10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "10. Master Shares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_18_listener() { return ctx.OpenLink(11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "11. Master Anamat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_24_listener() { return ctx.OpenLink(12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "12. Master Saving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_30_listener() { return ctx.OpenLink(13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "13. Master Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_36_listener() { return ctx.OpenLink(14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "14. Master Deposit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_42_listener() { return ctx.OpenLink(15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "15. Master Investments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_48_listener() { return ctx.OpenLink(16); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "16. Master Pigmy Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_54_listener() { return ctx.OpenLink(17); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "17. Master Pigmy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_60_listener() { return ctx.OpenLink(18); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "18. Master Cash Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_66_listener() { return ctx.OpenLink(19); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "19. Master Loan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralisedPassingComponent_Template_a_click_72_listener() { return ctx.OpenLink(20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "22. Master Dead Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, CentralisedPassingComponent_div_78_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, CentralisedPassingComponent_div_79_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, CentralisedPassingComponent_div_80_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, CentralisedPassingComponent_div_81_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, CentralisedPassingComponent_div_82_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, CentralisedPassingComponent_div_83_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CentralisedPassingComponent_div_84_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CentralisedPassingComponent_div_85_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, CentralisedPassingComponent_div_86_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, CentralisedPassingComponent_div_87_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, CentralisedPassingComponent_div_88_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.share_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.anamat_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.saving_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.current_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.deposit_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.investment_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pigmy_agent_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pigmy_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cash_credit_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loan_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dead_stock_master);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mastersharesTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masteranamatTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mastersavingTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mastercurrentTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masterdepositsTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masterinvestmentsTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masterpigmyagentTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masterpigmyTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mastercashcreditTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masterloanTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masterdeadstockTrue);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _master_shares_master_shares_component__WEBPACK_IMPORTED_MODULE_6__["MasterSharesComponent"], _master_anamat_master_anamat_component__WEBPACK_IMPORTED_MODULE_7__["MasterAnamatComponent"], _master_saving_master_saving_component__WEBPACK_IMPORTED_MODULE_8__["MasterSavingComponent"], _master_current_master_current_component__WEBPACK_IMPORTED_MODULE_9__["MasterCurrentComponent"], _master_deposits_master_deposits_component__WEBPACK_IMPORTED_MODULE_10__["MasterDepositsComponent"], _master_investments_master_investments_component__WEBPACK_IMPORTED_MODULE_11__["MasterInvestmentsComponent"], _master_pigmy_agent_master_pigmy_agent_component__WEBPACK_IMPORTED_MODULE_12__["MasterPigmyAgentComponent"], _master_pigmy_master_pigmy_component__WEBPACK_IMPORTED_MODULE_13__["MasterPigmyComponent"], _master_cash_credit_master_cash_credit_component__WEBPACK_IMPORTED_MODULE_14__["MasterCashCreditComponent"], _master_loan_master_loan_component__WEBPACK_IMPORTED_MODULE_15__["MasterLoanComponent"], _master_dead_stock_master_dead_stock_component__WEBPACK_IMPORTED_MODULE_16__["MasterDeadStockComponent"]], styles: ["#pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badgeAlign[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvcGFzc2luZy9jZW50cmFsaXNlZC1wYXNzaW5nL2NlbnRyYWxpc2VkLXBhc3NpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9wYXNzaW5nL2NlbnRyYWxpc2VkLXBhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJhZGdlQWxpZ257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CentralisedPassingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-centralised-passing',
                templateUrl: './centralised-passing.component.html',
                styleUrls: ['./centralised-passing.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _centralised_passing_service__WEBPACK_IMPORTED_MODULE_3__["CentralisedPassingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/centralised-passing.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/centralised-passing.service.ts ***!
  \**********************************************************************************/
/*! exports provided: CentralisedPassingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralisedPassingService", function() { return CentralisedPassingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class CentralisedPassingService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
    }
    // For append data
    getCountOfPassing() {
        return this.http.get(this.url + '/passing').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
CentralisedPassingService.ɵfac = function CentralisedPassingService_Factory(t) { return new (t || CentralisedPassingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CentralisedPassingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CentralisedPassingService, factory: CentralisedPassingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CentralisedPassingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/centralisedPassing-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/centralisedPassing-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CentralisedPassingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralisedPassingRoutingModule", function() { return CentralisedPassingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _centralised_passing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./centralised-passing.component */ "./src/app/theme/passing/centralised-passing/centralised-passing.component.ts");





const routes = [
    {
        path: '',
        component: _centralised_passing_component__WEBPACK_IMPORTED_MODULE_2__["CentralisedPassingComponent"],
        data: {
            title: 'Centralised Passing',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class CentralisedPassingRoutingModule {
}
CentralisedPassingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CentralisedPassingRoutingModule });
CentralisedPassingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CentralisedPassingRoutingModule_Factory(t) { return new (t || CentralisedPassingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CentralisedPassingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CentralisedPassingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/centralisedPassing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/centralisedPassing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CentralisedPassingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralisedPassingModule", function() { return CentralisedPassingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _centralised_passing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./centralised-passing.component */ "./src/app/theme/passing/centralised-passing/centralised-passing.component.ts");
/* harmony import */ var _centralisedPassing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./centralisedPassing-routing.module */ "./src/app/theme/passing/centralised-passing/centralisedPassing-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _master_saving_master_saving_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./master-saving/master-saving.module */ "./src/app/theme/passing/centralised-passing/master-saving/master-saving.module.ts");
/* harmony import */ var _master_shares_master_shares_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./master-shares/master-shares.module */ "./src/app/theme/passing/centralised-passing/master-shares/master-shares.module.ts");
/* harmony import */ var _master_dead_stock_master_dead_stock_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./master-dead-stock/master-dead-stock.module */ "./src/app/theme/passing/centralised-passing/master-dead-stock/master-dead-stock.module.ts");
/* harmony import */ var _master_current_master_current_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./master-current/master-current.module */ "./src/app/theme/passing/centralised-passing/master-current/master-current.module.ts");
/* harmony import */ var _master_anamat_master_anamat_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./master-anamat/master-anamat.module */ "./src/app/theme/passing/centralised-passing/master-anamat/master-anamat.module.ts");
/* harmony import */ var _master_deposits_master_depositst_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./master-deposits/master-depositst.module */ "./src/app/theme/passing/centralised-passing/master-deposits/master-depositst.module.ts");
/* harmony import */ var _master_investments_master_investments_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./master-investments/master-investments.module */ "./src/app/theme/passing/centralised-passing/master-investments/master-investments.module.ts");
/* harmony import */ var _master_pigmy_agent_master_pigmy_agent_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./master-pigmy-agent/master-pigmy-agent.module */ "./src/app/theme/passing/centralised-passing/master-pigmy-agent/master-pigmy-agent.module.ts");
/* harmony import */ var _master_pigmy_master_pigmy_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./master-pigmy/master-pigmy.module */ "./src/app/theme/passing/centralised-passing/master-pigmy/master-pigmy.module.ts");
/* harmony import */ var _master_cash_credit_master_cash_credit_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./master-cash-credit/master-cash-credit.module */ "./src/app/theme/passing/centralised-passing/master-cash-credit/master-cash-credit.module.ts");
/* harmony import */ var _master_loan_master_loan_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./master-loan/master-loan.module */ "./src/app/theme/passing/centralised-passing/master-loan/master-loan.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");






















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
// import {ChartModule} from 'angular2-chartjs';
class CentralisedPassingModule {
}
CentralisedPassingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CentralisedPassingModule });
CentralisedPassingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CentralisedPassingModule_Factory(t) { return new (t || CentralisedPassingModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
            multi: true
        },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _centralisedPassing_routing_module__WEBPACK_IMPORTED_MODULE_3__["CentralisedPassingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _master_saving_master_saving_module__WEBPACK_IMPORTED_MODULE_8__["MasterSavingModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
            _master_dead_stock_master_dead_stock_module__WEBPACK_IMPORTED_MODULE_10__["MasterDeadStockModule"],
            _master_current_master_current_module__WEBPACK_IMPORTED_MODULE_11__["MasterCurrentModule"],
            _master_shares_master_shares_module__WEBPACK_IMPORTED_MODULE_9__["MasterShareModule"],
            _master_anamat_master_anamat_module__WEBPACK_IMPORTED_MODULE_12__["MasterAnamatModule"],
            _master_deposits_master_depositst_module__WEBPACK_IMPORTED_MODULE_13__["MasterDepositsModule"],
            _master_investments_master_investments_module__WEBPACK_IMPORTED_MODULE_14__["MasterInvestmentsModule"],
            _master_pigmy_agent_master_pigmy_agent_module__WEBPACK_IMPORTED_MODULE_15__["MasterPigmyAgentModule"],
            _master_pigmy_master_pigmy_module__WEBPACK_IMPORTED_MODULE_16__["MasterPigmyModule"],
            _master_cash_credit_master_cash_credit_module__WEBPACK_IMPORTED_MODULE_17__["MasterCashCreditModule"],
            _master_loan_master_loan_module__WEBPACK_IMPORTED_MODULE_18__["MasterLoanModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CentralisedPassingModule, { declarations: [_centralised_passing_component__WEBPACK_IMPORTED_MODULE_2__["CentralisedPassingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _centralisedPassing_routing_module__WEBPACK_IMPORTED_MODULE_3__["CentralisedPassingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _master_saving_master_saving_module__WEBPACK_IMPORTED_MODULE_8__["MasterSavingModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
        _master_dead_stock_master_dead_stock_module__WEBPACK_IMPORTED_MODULE_10__["MasterDeadStockModule"],
        _master_current_master_current_module__WEBPACK_IMPORTED_MODULE_11__["MasterCurrentModule"],
        _master_shares_master_shares_module__WEBPACK_IMPORTED_MODULE_9__["MasterShareModule"],
        _master_anamat_master_anamat_module__WEBPACK_IMPORTED_MODULE_12__["MasterAnamatModule"],
        _master_deposits_master_depositst_module__WEBPACK_IMPORTED_MODULE_13__["MasterDepositsModule"],
        _master_investments_master_investments_module__WEBPACK_IMPORTED_MODULE_14__["MasterInvestmentsModule"],
        _master_pigmy_agent_master_pigmy_agent_module__WEBPACK_IMPORTED_MODULE_15__["MasterPigmyAgentModule"],
        _master_pigmy_master_pigmy_module__WEBPACK_IMPORTED_MODULE_16__["MasterPigmyModule"],
        _master_cash_credit_master_cash_credit_module__WEBPACK_IMPORTED_MODULE_17__["MasterCashCreditModule"],
        _master_loan_master_loan_module__WEBPACK_IMPORTED_MODULE_18__["MasterLoanModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CentralisedPassingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _centralisedPassing_routing_module__WEBPACK_IMPORTED_MODULE_3__["CentralisedPassingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _master_saving_master_saving_module__WEBPACK_IMPORTED_MODULE_8__["MasterSavingModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
                    _master_dead_stock_master_dead_stock_module__WEBPACK_IMPORTED_MODULE_10__["MasterDeadStockModule"],
                    _master_current_master_current_module__WEBPACK_IMPORTED_MODULE_11__["MasterCurrentModule"],
                    _master_shares_master_shares_module__WEBPACK_IMPORTED_MODULE_9__["MasterShareModule"],
                    _master_anamat_master_anamat_module__WEBPACK_IMPORTED_MODULE_12__["MasterAnamatModule"],
                    _master_deposits_master_depositst_module__WEBPACK_IMPORTED_MODULE_13__["MasterDepositsModule"],
                    _master_investments_master_investments_module__WEBPACK_IMPORTED_MODULE_14__["MasterInvestmentsModule"],
                    _master_pigmy_agent_master_pigmy_agent_module__WEBPACK_IMPORTED_MODULE_15__["MasterPigmyAgentModule"],
                    _master_pigmy_master_pigmy_module__WEBPACK_IMPORTED_MODULE_16__["MasterPigmyModule"],
                    _master_cash_credit_master_cash_credit_module__WEBPACK_IMPORTED_MODULE_17__["MasterCashCreditModule"],
                    _master_loan_master_loan_module__WEBPACK_IMPORTED_MODULE_18__["MasterLoanModule"]
                ],
                declarations: [_centralised_passing_component__WEBPACK_IMPORTED_MODULE_2__["CentralisedPassingComponent"]],
                // declarations: [CentralisedPassingComponent, VoucherComponent, BatchVoucherComponent, DepositClosingVoucherComponent, SavingPigmyClosingComponent, RemittanceAdviceComponent, CashRemitanceComponent, DeadStockPurchaseComponent, DeadStockTransactionComponent, LockerAcCloseRentComponent, MasterSharesComponent, MasterAnamatComponent, MasterCurrentComponent, MasterDepositsComponent, MasterInvestmentsComponent, MasterPigmyAgentComponent, MasterPigmyComponent, MasterCashCreditComponent, MasterLoanComponent, MasterDisputeLoanComponent, MasterLockerDepositComponent, MasterDeadStockComponent],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
                        multi: true
                    },
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-anamat/master-anamat.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-anamat/master-anamat.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MasterAnamatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterAnamatComponent", function() { return MasterAnamatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_anamat_gsm_anamat_gsm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/anamat-gsm/anamat-gsm.component */ "./src/app/theme/master/customer/anamat-gsm/anamat-gsm.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterAnamatComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterAnamatComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterAnamatComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getAnamatData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "-" : data_r5.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.BANKACNO === "" ? "-" : data_r5.BANKACNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CUSTID === "" ? "-" : data_r5.AC_CUSTID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.idmaster.custAddress[0].AC_ADDR === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.idmaster.custAddress[0].AC_ADDR === "" ? "-" : data_r5.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.idmaster.custAddress[0].city.CITY_NAME === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.idmaster.custAddress[0].city.CITY_NAME === "" ? "-" : data_r5.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_PARTICULAR === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_PARTICULAR === "" ? "-" : data_r5.AC_PARTICULAR, "");
} }
function MasterAnamatComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterAnamatComponent_tbody_15_tr_1_Template, 19, 16, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.anamat);
} }
function MasterAnamatComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterAnamatComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/datatable-data.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //     title: 'Name',
        //     data: 'name'
        //   }, {
        //     title: 'Position',
        //     data: 'position'
        //   }, {
        //     title: 'Office',
        //     data: 'office'
        //   }, {
        //     title: 'Age',
        //     data: 'age'
        //   }, {
        //     title: 'Start Date',
        //     data: 'date'
        //   }, {
        //     title: 'Salary',
        //     data: 'salary'
        //   }],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ]
        // };
        // Fetching Server side data
        this.dtExportButtonOptions = {
            pagingType: "full_numbers",
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach((element) => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters["filterData"] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + "/anamat-gsm/passing", dataTableParameters)
                        .subscribe((resp) => {
                        this.anamat = resp.data;
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: [],
                        });
                    });
                }));
            },
            columnDefs: [
                {
                    targets: "_all",
                    defaultContent: '',
                },
            ],
            columns: [
                {
                    title: "Action",
                    render: function (data, type, full) {
                        return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
                    },
                },
                {
                    data: "AC_TYPE",
                    title: "Scheme",
                },
                {
                    data: "BANKACNO",
                    title: "Account Number",
                },
                {
                    data: "AC_CUSTID",
                    title: "Customer ID",
                },
                {
                    data: "AC_NAME",
                    title: "Member Name",
                },
                // {
                //   data: "AC_MEMBTYPE",
                //   title: "Member Scheme",
                // },
                // {
                //   data: "AC_MEMBNO",
                //   title: "Member No",
                // },
                {
                    data: "AC_AREA",
                    title: "Detail Address",
                },
                {
                    data: "AC_CTCODE",
                    title: "City",
                },
                {
                    data: "AC_OPDATE",
                    title: "Opening date",
                },
                {
                    data: "AC_PARTICULAR",
                    title: "Reason",
                },
            ],
            dom: "Blrtip",
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getAnamatData(data) {
        console.log(data.id);
        this.anamatData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterAnamatComponent.ɵfac = function MasterAnamatComponent_Factory(t) { return new (t || MasterAnamatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterAnamatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterAnamatComponent, selectors: [["app-master-anamat"]], viewQuery: function MasterAnamatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_anamat_gsm_anamat_gsm_component__WEBPACK_IMPORTED_MODULE_2__["AnamatGSMComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], [1, "td_right", 3, "ngClass"], ["colspan", "9", 1, "no-data-available", 2, "text-align", "center"]], template: function MasterAnamatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Anamat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterAnamatComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterAnamatComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Anamat Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterAnamatComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-anamat-gsm", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterAnamatComponent_Template_app_anamat_gsm_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterAnamatComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.anamat == null ? null : ctx.anamat.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.anamat == null ? null : ctx.anamat.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.anamatData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_anamat_gsm_anamat_gsm_component__WEBPACK_IMPORTED_MODULE_2__["AnamatGSMComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItYW5hbWF0L21hc3Rlci1hbmFtYXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterAnamatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-anamat',
                templateUrl: './master-anamat.component.html',
                styleUrls: ['./master-anamat.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_anamat_gsm_anamat_gsm_component__WEBPACK_IMPORTED_MODULE_2__["AnamatGSMComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-anamat/master-anamat.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-anamat/master-anamat.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MasterAnamatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterAnamatModule", function() { return MasterAnamatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_anamat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-anamat.component */ "./src/app/theme/passing/centralised-passing/master-anamat/master-anamat.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_anamat_gsm_anamat_gsm_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/anamat-gsm/anamat-gsm.module */ "./src/app/theme/master/customer/anamat-gsm/anamat-gsm.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterAnamatModule {
}
MasterAnamatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterAnamatModule });
MasterAnamatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterAnamatModule_Factory(t) { return new (t || MasterAnamatModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_anamat_gsm_anamat_gsm_module__WEBPACK_IMPORTED_MODULE_5__["AnamatGSMModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterAnamatModule, { declarations: [_master_anamat_component__WEBPACK_IMPORTED_MODULE_3__["MasterAnamatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_anamat_gsm_anamat_gsm_module__WEBPACK_IMPORTED_MODULE_5__["AnamatGSMModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_anamat_component__WEBPACK_IMPORTED_MODULE_3__["MasterAnamatComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterAnamatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_anamat_component__WEBPACK_IMPORTED_MODULE_3__["MasterAnamatComponent"]],
                exports: [_master_anamat_component__WEBPACK_IMPORTED_MODULE_3__["MasterAnamatComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_anamat_gsm_anamat_gsm_module__WEBPACK_IMPORTED_MODULE_5__["AnamatGSMModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-cash-credit/master-cash-credit.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-cash-credit/master-cash-credit.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MasterCashCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCashCreditComponent", function() { return MasterCashCreditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_cash_credit_master_cash_credit_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/cash-credit-master/cash-credit-master.component */ "./src/app/theme/master/customer/cash-credit-master/cash-credit-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterCashCreditComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterCashCreditComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterCashCreditComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getCashCreditData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" ? "-" : data_r5.AC_TYPE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NO === "" ? "-" : data_r5.AC_NO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CUSTID === "" ? "-" : data_r5.AC_CUSTID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPEN_OLD_DATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPEN_OLD_DATE === "" ? "-" : data_r5.AC_OPEN_OLD_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.REF_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.REF_ACNO === "" ? "-" : data_r5.REF_ACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_SANCTION_DATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_SANCTION_DATE === "" ? "-" : data_r5.AC_SANCTION_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MONTHS === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MONTHS === "" ? "-" : data_r5.AC_MONTHS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_EXPIRE_DATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_EXPIRE_DATE === "" ? "-" : data_r5.AC_EXPIRE_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_SANCTION_AMOUNT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_SANCTION_AMOUNT === "" ? "-" : data_r5.AC_SANCTION_AMOUNT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_DRAWPOWER_AMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_DRAWPOWER_AMT === "" ? "-" : data_r5.AC_DRAWPOWER_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_INTRATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_INTRATE === "" ? "-" : data_r5.AC_INTRATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_INSTALLMENT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_INSTALLMENT === "" ? "-" : data_r5.AC_INSTALLMENT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_AUTHORITY === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_AUTHORITY === "" ? "-" : data_r5.AC_AUTHORITY, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_PURPOSE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_PURPOSE === "" ? "-" : data_r5.AC_PURPOSE, "");
} }
function MasterCashCreditComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterCashCreditComponent_tbody_15_tr_1_Template, 39, 36, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cashCreditMaster);
} }
function MasterCashCreditComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterCashCreditComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // Fetching Server side data
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + '/cash-credit-master/passing', dataTableParameters).subscribe(resp => {
                        this.cashCreditMaster = resp.data;
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action',
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account No',
                    data: 'AC_NO'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'Renewal Date',
                    data: 'AC_OPEN_OLD_DATE'
                },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Detail',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                {
                    title: 'Sanction Date',
                    data: 'AC_SANCTION_DATE'
                },
                {
                    title: 'Period',
                    data: 'AC_MONTHS'
                },
                {
                    title: 'Expiry Date',
                    data: 'AC_EXPIRE_DATE'
                },
                {
                    title: 'Sanction Limit',
                    data: 'AC_SANCTION_AMOUNT'
                },
                {
                    title: 'Drawing Power',
                    data: 'AC_DRAWPOWER_AMT'
                },
                {
                    title: 'Interest Rate',
                    data: 'AC_INTRATE'
                },
                {
                    title: 'Installment',
                    data: 'AC_INSTALLMENT'
                },
                {
                    title: 'Sanction Authority',
                    data: 'AC_AUTHORITY'
                },
                {
                    title: 'Purpose',
                    data: 'AC_PURPOSE'
                },
            ],
            dom: 'Blrtip',
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getCashCreditData(data) {
        console.log(data.id);
        this.cashCreditData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterCashCreditComponent.ɵfac = function MasterCashCreditComponent_Factory(t) { return new (t || MasterCashCreditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterCashCreditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterCashCreditComponent, selectors: [["app-master-cash-credit"]], viewQuery: function MasterCashCreditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_cash_credit_master_cash_credit_master_component__WEBPACK_IMPORTED_MODULE_2__["CashCreditMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "10", 1, "no-data-available"]], template: function MasterCashCreditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Cash Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterCashCreditComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterCashCreditComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Current Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterCashCreditComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-cash-credit-master", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterCashCreditComponent_Template_app_cash_credit_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterCashCreditComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cashCreditMaster == null ? null : ctx.cashCreditMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cashCreditMaster == null ? null : ctx.cashCreditMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.cashCreditData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_cash_credit_master_cash_credit_master_component__WEBPACK_IMPORTED_MODULE_2__["CashCreditMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItY2FzaC1jcmVkaXQvbWFzdGVyLWNhc2gtY3JlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterCashCreditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-cash-credit',
                templateUrl: './master-cash-credit.component.html',
                styleUrls: ['./master-cash-credit.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_cash_credit_master_cash_credit_master_component__WEBPACK_IMPORTED_MODULE_2__["CashCreditMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-cash-credit/master-cash-credit.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-cash-credit/master-cash-credit.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: MasterCashCreditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCashCreditModule", function() { return MasterCashCreditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_cash_credit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-cash-credit.component */ "./src/app/theme/passing/centralised-passing/master-cash-credit/master-cash-credit.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_cash_credit_master_cash_credit_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/cash-credit-master/cash-credit-master.module */ "./src/app/theme/master/customer/cash-credit-master/cash-credit-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterCashCreditModule {
}
MasterCashCreditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterCashCreditModule });
MasterCashCreditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterCashCreditModule_Factory(t) { return new (t || MasterCashCreditModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_cash_credit_master_cash_credit_master_module__WEBPACK_IMPORTED_MODULE_5__["CashCreditMasterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterCashCreditModule, { declarations: [_master_cash_credit_component__WEBPACK_IMPORTED_MODULE_3__["MasterCashCreditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_cash_credit_master_cash_credit_master_module__WEBPACK_IMPORTED_MODULE_5__["CashCreditMasterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_cash_credit_component__WEBPACK_IMPORTED_MODULE_3__["MasterCashCreditComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterCashCreditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_cash_credit_component__WEBPACK_IMPORTED_MODULE_3__["MasterCashCreditComponent"]],
                exports: [_master_cash_credit_component__WEBPACK_IMPORTED_MODULE_3__["MasterCashCreditComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_cash_credit_master_cash_credit_master_module__WEBPACK_IMPORTED_MODULE_5__["CashCreditMasterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-current/master-current.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-current/master-current.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MasterCurrentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCurrentComponent", function() { return MasterCurrentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_current_account_master_current_account_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/current-account-master/current-account-master.component */ "./src/app/theme/master/customer/current-account-master/current-account-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterCurrentComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterCurrentComponent_tbody_15_tr_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterCurrentComponent_tbody_15_tr_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getCurrentData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "-" : data_r5.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.BANKACNO === "" ? "-" : data_r5.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CUSTID === "" ? "-" : data_r5.AC_CUSTID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.AC_PROPRITOR_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.REF_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.REF_ACNO === "" ? "-" : data_r5.REF_ACNO, " ");
} }
function MasterCurrentComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterCurrentComponent_tbody_15_tr_1_Template, 18, 15, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentAccountMaster);
} }
function MasterCurrentComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterCurrentComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/datatable-data.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //     title: 'Name',
        //     data: 'name'
        //   }, {
        //     title: 'Position',
        //     data: 'position'
        //   }, {
        //     title: 'Office',
        //     data: 'office'
        //   }, {
        //     title: 'Age',
        //     data: 'age'
        //   }, {
        //     title: 'Start Date',
        //     data: 'date'
        //   }, {
        //     title: 'Salary',
        //     data: 'salary'
        //   }],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ]
        // };
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + '/current-account-master/passing', dataTableParameters).subscribe(resp => {
                        this.currentAccountMaster = resp.data;
                        console.log(this.currentAccountMaster);
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action'
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account Number',
                    data: ' BANKACNO'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Detail Address',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                {
                    title: 'Proprietor Name',
                    data: 'AC_PROPRITOR_NAME'
                },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
            ],
            dom: 'Blrtip',
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getCurrentData(data) {
        console.log(data.id);
        this.currentData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterCurrentComponent.ɵfac = function MasterCurrentComponent_Factory(t) { return new (t || MasterCurrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterCurrentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterCurrentComponent, selectors: [["app-master-current"]], viewQuery: function MasterCurrentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_current_account_master_current_account_master_component__WEBPACK_IMPORTED_MODULE_2__["CurrentAccountMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "9", 1, "no-data-available", 2, "text-align", "center"]], template: function MasterCurrentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterCurrentComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterCurrentComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Current Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterCurrentComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-current-account-master", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterCurrentComponent_Template_app_current_account_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterCurrentComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentAccountMaster == null ? null : ctx.currentAccountMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentAccountMaster == null ? null : ctx.currentAccountMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.currentData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_current_account_master_current_account_master_component__WEBPACK_IMPORTED_MODULE_2__["CurrentAccountMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItY3VycmVudC9tYXN0ZXItY3VycmVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterCurrentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-current',
                templateUrl: './master-current.component.html',
                styleUrls: ['./master-current.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_current_account_master_current_account_master_component__WEBPACK_IMPORTED_MODULE_2__["CurrentAccountMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-current/master-current.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-current/master-current.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MasterCurrentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCurrentModule", function() { return MasterCurrentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_current_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-current.component */ "./src/app/theme/passing/centralised-passing/master-current/master-current.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_current_account_master_current_account_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/current-account-master/current-account-master.module */ "./src/app/theme/master/customer/current-account-master/current-account-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterCurrentModule {
}
MasterCurrentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterCurrentModule });
MasterCurrentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterCurrentModule_Factory(t) { return new (t || MasterCurrentModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_current_account_master_current_account_master_module__WEBPACK_IMPORTED_MODULE_5__["CurrentAccountMasterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterCurrentModule, { declarations: [_master_current_component__WEBPACK_IMPORTED_MODULE_3__["MasterCurrentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_current_account_master_current_account_master_module__WEBPACK_IMPORTED_MODULE_5__["CurrentAccountMasterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_current_component__WEBPACK_IMPORTED_MODULE_3__["MasterCurrentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterCurrentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_current_account_master_current_account_master_module__WEBPACK_IMPORTED_MODULE_5__["CurrentAccountMasterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                exports: [_master_current_component__WEBPACK_IMPORTED_MODULE_3__["MasterCurrentComponent"]],
                declarations: [_master_current_component__WEBPACK_IMPORTED_MODULE_3__["MasterCurrentComponent"]],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-dead-stock/master-dead-stock.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-dead-stock/master-dead-stock.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MasterDeadStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDeadStockComponent", function() { return MasterDeadStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_dead_stock_master_dead_stock_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/dead-stock-master/dead-stock-master.component */ "./src/app/theme/master/customer/dead-stock-master/dead-stock-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterDeadStockComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterDeadStockComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterDeadStockComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getCurrentData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.ITEM_CODE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.ITEM_CODE === "" ? "-" : data_r5.ITEM_CODE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.ITEM_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.ITEM_NAME === "" ? "-" : data_r5.ITEM_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.SUPPLIER_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.SUPPLIER_NAME === "" ? "-" : data_r5.SUPPLIER_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.PURCHASE_DATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.PURCHASE_DATE === "" ? "-" : data_r5.PURCHASE_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.DEPR_CATEGORY === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.DEPR_CATEGORY === "" ? "-" : data_r5.DEPR_CATEGORY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.PURCHASE_QUANTITY === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.PURCHASE_QUANTITY === "" ? "-" : data_r5.PURCHASE_QUANTITY, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.PURCHASE_RATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.PURCHASE_RATE === "" ? "-" : data_r5.PURCHASE_RATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.PURCHASE_VALUE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.PURCHASE_VALUE === "" ? "-" : data_r5.PURCHASE_VALUE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.LAST_DEPR_DATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.LAST_DEPR_DATE === "" ? "-" : data_r5.LAST_DEPR_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.GL_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.GL_ACNO === "" ? "-" : data_r5.GL_ACNO, "");
} }
function MasterDeadStockComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterDeadStockComponent_tbody_15_tr_1_Template, 23, 20, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.customerMaster);
} }
function MasterDeadStockComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// Handling datatable data
class DataTableResponse {
}
class MasterDeadStockComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/datatable-data.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //     title: 'Name',
        //     data: 'name'
        //   }, {
        //     title: 'Position',
        //     data: 'position'
        //   }, {
        //     title: 'Office',
        //     data: 'office'
        //   }, {
        //     title: 'Age',
        //     data: 'age'
        //   }, {
        //     title: 'Start Date',
        //     data: 'date'
        //   }, {
        //     title: 'Salary',
        //     data: 'salary'
        //   }],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ]
        // };
        this.dtExportButtonOptions = {
            pagingType: "full_numbers",
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach((element) => {
                    if (element.search.value != "") {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + "/dead-stock-master", dataTableParameters)
                        .subscribe((resp) => {
                        this.customerMaster = resp.data;
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: [],
                        });
                    });
                }));
            },
            columns: [
                {
                    title: "Action",
                },
                {
                    title: "Item Type",
                    data: "ITEM_TYPE",
                },
                {
                    title: "Item Code",
                    data: "ITEM_CODE",
                },
                {
                    title: "Item Name",
                    data: "ITEM_NAME",
                },
                {
                    title: "Purchase Date",
                    data: "PURCHASE_DATE",
                },
                {
                    title: "Depr Category",
                    data: "DEPR_CATEGORY",
                },
                {
                    title: "Op.Balance Date",
                    data: "OP_BAL_DATE",
                },
                {
                    title: "SupplierName",
                    data: "SUPPLIER_NAME",
                },
                {
                    title: "Opening Amount",
                    data: "OP_BALANCE",
                },
                {
                    title: "Quantity",
                    data: "OP_QUANTITY",
                },
                {
                    title: "PURCHASE QUANTITY",
                    data: "PURCHASE_OP_QUANTITY",
                },
                {
                    title: "Purchase Rate",
                    data: "PURCHASE_RATE",
                },
                {
                    title: "Purchase Qty",
                    data: "PURCHASE_QUANTITY",
                },
                {
                    title: "Purchase Value",
                    data: "PURCHASE_VALUE",
                },
                {
                    title: "Last Depreciation Date",
                    data: "LAST_DEPR_DATE",
                },
                {
                    title: "GL A/C No",
                    data: "GL_ACNO",
                },
            ],
            dom: "Blrtip",
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getCurrentData(data) {
        console.log(data.id);
        this.deadstockData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterDeadStockComponent.ɵfac = function MasterDeadStockComponent_Factory(t) { return new (t || MasterDeadStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterDeadStockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterDeadStockComponent, selectors: [["app-master-dead-stock"]], viewQuery: function MasterDeadStockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_dead_stock_master_dead_stock_master_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "col-sm"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [1, "td_right", 3, "ngClass"], [3, "ngClass"], ["colspan", "6", 1, "no-data-available"]], template: function MasterDeadStockComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Dead Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterDeadStockComponent_tbody_15_Template, 2, 1, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterDeadStockComponent_tbody_16_Template, 4, 0, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dead Stock Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterDeadStockComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-dead-stock-master", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterDeadStockComponent_Template_app_dead_stock_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterDeadStockComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.customerMaster == null ? null : ctx.customerMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.customerMaster == null ? null : ctx.customerMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.deadstockData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_dead_stock_master_dead_stock_master_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItZGVhZC1zdG9jay9tYXN0ZXItZGVhZC1zdG9jay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDeadStockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-dead-stock',
                templateUrl: './master-dead-stock.component.html',
                styleUrls: ['./master-dead-stock.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_dead_stock_master_dead_stock_master_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-dead-stock/master-dead-stock.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-dead-stock/master-dead-stock.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: MasterDeadStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDeadStockModule", function() { return MasterDeadStockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_dead_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-dead-stock.component */ "./src/app/theme/passing/centralised-passing/master-dead-stock/master-dead-stock.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_dead_stock_master_dead_stock_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/dead-stock-master/dead-stock-master.module */ "./src/app/theme/master/customer/dead-stock-master/dead-stock-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
// Handling datatable data
class MasterDeadStockModule {
}
MasterDeadStockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterDeadStockModule });
MasterDeadStockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterDeadStockModule_Factory(t) { return new (t || MasterDeadStockModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _master_customer_dead_stock_master_dead_stock_master_module__WEBPACK_IMPORTED_MODULE_5__["DeadStockMasterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterDeadStockModule, { declarations: [_master_dead_stock_component__WEBPACK_IMPORTED_MODULE_3__["MasterDeadStockComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _master_customer_dead_stock_master_dead_stock_master_module__WEBPACK_IMPORTED_MODULE_5__["DeadStockMasterModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_dead_stock_component__WEBPACK_IMPORTED_MODULE_3__["MasterDeadStockComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDeadStockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_dead_stock_component__WEBPACK_IMPORTED_MODULE_3__["MasterDeadStockComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _master_customer_dead_stock_master_dead_stock_master_module__WEBPACK_IMPORTED_MODULE_5__["DeadStockMasterModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                ],
                exports: [_master_dead_stock_component__WEBPACK_IMPORTED_MODULE_3__["MasterDeadStockComponent"]],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-deposits/master-deposits.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-deposits/master-deposits.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MasterDepositsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDepositsComponent", function() { return MasterDepositsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_term_deposits_master_term_deposits_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/term-deposits-master/term-deposits-master.component */ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterDepositsComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterDepositsComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterDepositsComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getTermDepositData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "-" : data_r5.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.BANKACNO === "" ? "-" : data_r5.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CUSTID === "" ? "-" : data_r5.AC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.REF_ACNO === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.REF_ACNO === "" ? "-" : data_r5.REF_ACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MBDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MBDATE === "" ? "-" : data_r5.AC_MBDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_ASON_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_ASON_DATE === "" ? "-" : data_r5.AC_ASON_DATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_EXPDT === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_EXPDT === "" ? "-" : data_r5.AC_EXPDT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_REF_RECEIPTNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_REF_RECEIPTNO === "" ? "-" : data_r5.AC_REF_RECEIPTNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_SCHMAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_SCHMAMT === "" ? "-" : data_r5.AC_SCHMAMT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MATUAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MATUAMT === "" ? "-" : data_r5.AC_MATUAMT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MINOR === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MINOR === "" ? "-" : data_r5.AC_MINOR === true ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.SIGNATURE_AUTHORITY === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.SIGNATURE_AUTHORITY === "" ? "-" : data_r5.SIGNATURE_AUTHORITY, " ");
} }
function MasterDepositsComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterDepositsComponent_tbody_15_tr_1_Template, 35, 32, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.termDepositMaster);
} }
function MasterDepositsComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterDepositsComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/datatable-data.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //     title: 'Name',
        //     data: 'name'
        //   }, {
        //     title: 'Position',
        //     data: 'position'
        //   }, {
        //     title: 'Office',
        //     data: 'office'
        //   }, {
        //     title: 'Age',
        //     data: 'age'
        //   }, {
        //     title: 'Start Date',
        //     data: 'date'
        //   }, {
        //     title: 'Salary',
        //     data: 'salary'
        //   }],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ]
        // };
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                this.page = dataTableParameters.start / dataTableParameters.length;
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + '/term-deposits-master/passing', dataTableParameters).subscribe(resp => {
                        this.termDepositMaster = resp.data;
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action',
                },
                // {
                //   title: 'Scheme Type',
                //   data: 'AC_ACNOTYPE'
                // },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account No',
                    data: 'BANKACNO'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Member Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Detail Address',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Birth Date',
                    data: 'AC_MBDATE'
                },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'As On Date',
                    data: 'AC_ASON_DATE'
                },
                {
                    title: 'Maturity Date',
                    data: 'AC_EXPDT'
                },
                {
                    title: 'Receipt No.',
                    data: 'AC_REF_RECEIPTNO'
                },
                {
                    title: 'Deposit Amount',
                    data: 'AC_SCHMAMT'
                },
                {
                    title: 'Maturity Amount',
                    data: 'AC_MATUAMT'
                },
                {
                    title: 'Minor Details',
                    data: 'AC_MINOR'
                },
                {
                    title: 'Signature Authority',
                    data: 'SIGNATURE_AUTHORITY'
                },
            ],
            dom: 'Blrtip',
        };
    }
    //get saving customer data
    getTermDepositData(data) {
        console.log(data.id);
        this.termDepositData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterDepositsComponent.ɵfac = function MasterDepositsComponent_Factory(t) { return new (t || MasterDepositsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterDepositsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterDepositsComponent, selectors: [["app-master-deposits"]], viewQuery: function MasterDepositsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_term_deposits_master_term_deposits_master_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositsMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "termmastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "16", 1, "no-data-available"]], template: function MasterDepositsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Deposits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterDepositsComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterDepositsComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Saving Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterDepositsComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-term-deposits-master", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterDepositsComponent_Template_app_term_deposits_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterDepositsComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.termDepositMaster == null ? null : ctx.termDepositMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.termDepositMaster == null ? null : ctx.termDepositMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.termDepositData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_term_deposits_master_term_deposits_master_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositsMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItZGVwb3NpdHMvbWFzdGVyLWRlcG9zaXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDepositsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-deposits',
                templateUrl: './master-deposits.component.html',
                styleUrls: ['./master-deposits.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_term_deposits_master_term_deposits_master_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositsMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-deposits/master-depositst.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-deposits/master-depositst.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: MasterDepositsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDepositsModule", function() { return MasterDepositsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_deposits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-deposits.component */ "./src/app/theme/passing/centralised-passing/master-deposits/master-deposits.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_term_deposits_master_term_deposits_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/term-deposits-master/term-deposits-master.module */ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterDepositsModule {
}
MasterDepositsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterDepositsModule });
MasterDepositsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterDepositsModule_Factory(t) { return new (t || MasterDepositsModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_term_deposits_master_term_deposits_master_module__WEBPACK_IMPORTED_MODULE_5__["TermDepositsMasterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterDepositsModule, { declarations: [_master_deposits_component__WEBPACK_IMPORTED_MODULE_3__["MasterDepositsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_term_deposits_master_term_deposits_master_module__WEBPACK_IMPORTED_MODULE_5__["TermDepositsMasterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_deposits_component__WEBPACK_IMPORTED_MODULE_3__["MasterDepositsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDepositsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_term_deposits_master_term_deposits_master_module__WEBPACK_IMPORTED_MODULE_5__["TermDepositsMasterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                exports: [_master_deposits_component__WEBPACK_IMPORTED_MODULE_3__["MasterDepositsComponent"]],
                declarations: [_master_deposits_component__WEBPACK_IMPORTED_MODULE_3__["MasterDepositsComponent"]],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-investments/master-investments.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-investments/master-investments.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MasterInvestmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterInvestmentsComponent", function() { return MasterInvestmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_account_opening_account_opening_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/account-opening/account-opening.component */ "./src/app/theme/master/customer/account-opening/account-opening.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterInvestmentsComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterInvestmentsComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterInvestmentsComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getInvestmentData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "-" : data_r5.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NO === "" ? "-" : data_r5.AC_NO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.INVEST_BANK === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.INVEST_BANK === "" ? "-" : data_r5.INVEST_BANK, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.INVEST_BRANCH === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.INVEST_BRANCH === "" ? "-" : data_r5.INVEST_BRANCH, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_ASON_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_ASON_DATE === "" ? "-" : data_r5.AC_ASON_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_EXPDT === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_EXPDT === "" ? "-" : data_r5.AC_EXPDT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_REF_RECEIPTNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_REF_RECEIPTNO === "" ? "-" : data_r5.AC_REF_RECEIPTNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_INTRATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_INTRATE === "" ? "-" : data_r5.AC_INTRATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_SCHMAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_SCHMAMT === "" ? "-" : data_r5.AC_SCHMAMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MATUAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MATUAMT === "" ? "-" : data_r5.AC_MATUAMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CLOSEDT === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CLOSEDT === "" ? "-" : data_r5.AC_CLOSEDT, "");
} }
function MasterInvestmentsComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterInvestmentsComponent_tbody_15_tr_1_Template, 29, 26, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.investmentMaster);
} }
function MasterInvestmentsComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterInvestmentsComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/datatable-data.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //     title: 'Name',
        //     data: 'name'
        //   }, {
        //     title: 'Position',
        //     data: 'position'
        //   }, {
        //     title: 'Office',
        //     data: 'office'
        //   }, {
        //     title: 'Age',
        //     data: 'age'
        //   }, {
        //     title: 'Start Date',
        //     data: 'date'
        //   }, {
        //     title: 'Salary',
        //     data: 'salary'
        //   }],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ]
        // };
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + '/investment/passing', dataTableParameters).subscribe(resp => {
                        this.investmentMaster = resp.data;
                        console.log(this.investmentMaster);
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action',
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account Number',
                    data: 'AC_NO'
                },
                {
                    title: 'Member Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Bank Code',
                    data: 'INVEST_BANK'
                },
                {
                    title: 'Branch Code',
                    data: 'INVEST_BRANCH'
                },
                {
                    title: 'A/c Open Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'As On Date',
                    data: 'AC_ASON_DATE'
                },
                {
                    title: 'Maturity Date',
                    data: 'AC_EXPDT'
                },
                {
                    title: 'Receipt No.',
                    data: 'AC_REF_RECEIPTNO'
                },
                {
                    title: 'Interest Rate',
                    data: 'AC_INTRATE'
                },
                {
                    title: 'Deposit Amount',
                    data: 'AC_SCHMAMT'
                },
                {
                    title: 'Maturity Amount',
                    data: 'AC_MATUAMT'
                },
                {
                    title: 'Account Closed Date',
                    data: 'AC_CLOSEDT'
                },
            ],
            dom: 'Blrtip',
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getInvestmentData(data) {
        console.log(data.id);
        this.investmentData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterInvestmentsComponent.ɵfac = function MasterInvestmentsComponent_Factory(t) { return new (t || MasterInvestmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterInvestmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterInvestmentsComponent, selectors: [["app-master-investments"]], viewQuery: function MasterInvestmentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_account_opening_account_opening_component__WEBPACK_IMPORTED_MODULE_2__["AccountOpeningComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "6", 1, "no-data-available"]], template: function MasterInvestmentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Investments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterInvestmentsComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterInvestmentsComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Saving Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterInvestmentsComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-account-opening", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterInvestmentsComponent_Template_app_account_opening_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterInvestmentsComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.investmentMaster == null ? null : ctx.investmentMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.investmentMaster == null ? null : ctx.investmentMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.investmentData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_account_opening_account_opening_component__WEBPACK_IMPORTED_MODULE_2__["AccountOpeningComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItaW52ZXN0bWVudHMvbWFzdGVyLWludmVzdG1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterInvestmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-investments',
                templateUrl: './master-investments.component.html',
                styleUrls: ['./master-investments.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_account_opening_account_opening_component__WEBPACK_IMPORTED_MODULE_2__["AccountOpeningComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-investments/master-investments.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-investments/master-investments.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: MasterInvestmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterInvestmentsModule", function() { return MasterInvestmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_investments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-investments.component */ "./src/app/theme/passing/centralised-passing/master-investments/master-investments.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_account_opening_account_opening_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/account-opening/account-opening.module */ "./src/app/theme/master/customer/account-opening/account-opening.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterInvestmentsModule {
}
MasterInvestmentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterInvestmentsModule });
MasterInvestmentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterInvestmentsModule_Factory(t) { return new (t || MasterInvestmentsModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_account_opening_account_opening_module__WEBPACK_IMPORTED_MODULE_5__["AccountOpeningModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterInvestmentsModule, { declarations: [_master_investments_component__WEBPACK_IMPORTED_MODULE_3__["MasterInvestmentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_account_opening_account_opening_module__WEBPACK_IMPORTED_MODULE_5__["AccountOpeningModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_investments_component__WEBPACK_IMPORTED_MODULE_3__["MasterInvestmentsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterInvestmentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_investments_component__WEBPACK_IMPORTED_MODULE_3__["MasterInvestmentsComponent"]],
                exports: [_master_investments_component__WEBPACK_IMPORTED_MODULE_3__["MasterInvestmentsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_account_opening_account_opening_module__WEBPACK_IMPORTED_MODULE_5__["AccountOpeningModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-loan/master-loan.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-loan/master-loan.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MasterLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterLoanComponent", function() { return MasterLoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_term_loan_master_term_loan_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/term-loan-master/term-loan-master.component */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterLoanComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterLoanComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterLoanComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getLoanData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "-" : data_r5.LNCCMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.BANKACNO === "" ? "-" : data_r5.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CUSTID === "" ? "-" : data_r5.AC_CUSTID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPEN_OLD_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPEN_OLD_DATE === "" ? "-" : data_r5.AC_OPEN_OLD_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.REF_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.REF_ACNO === "" ? "-" : data_r5.REF_ACNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_SANCTION_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_SANCTION_DATE === "" ? "-" : data_r5.AC_SANCTION_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MONTHS === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MONTHS === "" ? "-" : data_r5.AC_MONTHS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_EXPIRE_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_EXPIRE_DATE === "" ? "-" : data_r5.AC_EXPIRE_DATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_SANCTION_AMOUNT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_SANCTION_AMOUNT === "" ? "-" : data_r5.AC_SANCTION_AMOUNT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_DRAWPOWER_AMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_DRAWPOWER_AMT === "" ? "-" : data_r5.AC_DRAWPOWER_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_INTRATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_INTRATE === "" ? "-" : data_r5.AC_INTRATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_INSTALLMENT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_INSTALLMENT === "" ? "-" : data_r5.AC_INSTALLMENT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_AUTHORITY === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_AUTHORITY === "" ? "-" : data_r5.AC_AUTHORITY, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_PURPOSE === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_PURPOSE === "" ? "-" : data_r5.AC_PURPOSE, "");
} }
function MasterLoanComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterLoanComponent_tbody_15_tr_1_Template, 39, 36, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.termLoanMaster);
} }
function MasterLoanComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterLoanComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // Fetching Server side data
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + '/term-loan-master/passing', dataTableParameters).subscribe(resp => {
                        this.termLoanMaster = resp.data;
                        console.log(this.termLoanMaster, "data");
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action',
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account Number',
                    data: 'BANKACNO'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'Renewal Date',
                    data: 'AC_OPEN_OLD_DATE'
                },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Detail',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                {
                    title: 'Sanction Date',
                    data: 'AC_SANCTION_DATE'
                },
                {
                    title: 'Period',
                    data: 'AC_MONTHS'
                },
                {
                    title: 'Expiry Date',
                    data: 'AC_EXPIRE_DATE'
                },
                {
                    title: 'Sanction Limit',
                    data: 'AC_SANCTION_AMOUNT'
                },
                {
                    title: 'Drawing Power',
                    data: 'AC_DRAWPOWER_AMT'
                },
                {
                    title: 'Interest Rate',
                    data: 'AC_INTRATE'
                },
                {
                    title: 'Installment',
                    data: 'AC_INSTALLMENT'
                },
                {
                    title: 'Sanction Authority',
                    data: 'AC_AUTHORITY'
                },
                {
                    title: 'Purpose',
                    data: 'AC_PURPOSE'
                }
            ],
            dom: 'Blrtip',
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getLoanData(data) {
        console.log(data.id);
        this.loanData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterLoanComponent.ɵfac = function MasterLoanComponent_Factory(t) { return new (t || MasterLoanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterLoanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterLoanComponent, selectors: [["app-master-loan"]], viewQuery: function MasterLoanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_term_loan_master_term_loan_master_component__WEBPACK_IMPORTED_MODULE_2__["TermLoanMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "10", 1, "no-data-available"]], template: function MasterLoanComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Loan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterLoanComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterLoanComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Saving Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterLoanComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-term-loan-master", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterLoanComponent_Template_app_term_loan_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterLoanComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.termLoanMaster == null ? null : ctx.termLoanMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.termLoanMaster == null ? null : ctx.termLoanMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.loanData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_term_loan_master_term_loan_master_component__WEBPACK_IMPORTED_MODULE_2__["TermLoanMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItbG9hbi9tYXN0ZXItbG9hbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterLoanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-loan',
                templateUrl: './master-loan.component.html',
                styleUrls: ['./master-loan.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_term_loan_master_term_loan_master_component__WEBPACK_IMPORTED_MODULE_2__["TermLoanMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-loan/master-loan.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-loan/master-loan.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MasterLoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterLoanModule", function() { return MasterLoanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_loan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-loan.component */ "./src/app/theme/passing/centralised-passing/master-loan/master-loan.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_term_loan_master_term_loan_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/term-loan-master/term-loan-master.module */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterLoanModule {
}
MasterLoanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterLoanModule });
MasterLoanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterLoanModule_Factory(t) { return new (t || MasterLoanModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_term_loan_master_term_loan_master_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterLoanModule, { declarations: [_master_loan_component__WEBPACK_IMPORTED_MODULE_3__["MasterLoanComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_term_loan_master_term_loan_master_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_loan_component__WEBPACK_IMPORTED_MODULE_3__["MasterLoanComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterLoanModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_term_loan_master_term_loan_master_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                exports: [_master_loan_component__WEBPACK_IMPORTED_MODULE_3__["MasterLoanComponent"]],
                declarations: [_master_loan_component__WEBPACK_IMPORTED_MODULE_3__["MasterLoanComponent"]],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-pigmy-agent/master-pigmy-agent.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-pigmy-agent/master-pigmy-agent.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MasterPigmyAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPigmyAgentComponent", function() { return MasterPigmyAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_pigmy_agent_master_pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/pigmy-agent-master/pigmy-agent-master.component */ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterPigmyAgentComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPigmyAgentComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterPigmyAgentComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getPigmyAgentData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "-" : data_r5.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NO === "" ? "-" : data_r5.AC_NO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CUSTID === "" ? "-" : data_r5.AC_CUSTID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.PIGMY_ACTYPE === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.PIGMY_ACTYPE === "" ? "-" : data_r5.PIGMY_ACTYPE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, "");
} }
function MasterPigmyAgentComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPigmyAgentComponent_tbody_15_tr_1_Template, 15, 12, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pigmyAgentMaster);
} }
function MasterPigmyAgentComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterPigmyAgentComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
        this.pigmyAgentData = {};
    }
    ngOnInit() {
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + '/pigmy-agent-master/passing', dataTableParameters).subscribe(resp => {
                        this.pigmyAgentMaster = resp.data;
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action',
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Agent Number',
                    data: 'AC_NO'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Member Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Pimgy Scheme',
                    data: 'PIGMY_ACTYPE'
                },
                {
                    title: 'Appontied On',
                    data: 'AC_OPDATE'
                },
            ],
            dom: 'Blrtip',
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getPigmyAgentData(data) {
        console.log(data.id);
        this.pigmyAgentData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterPigmyAgentComponent.ɵfac = function MasterPigmyAgentComponent_Factory(t) { return new (t || MasterPigmyAgentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterPigmyAgentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterPigmyAgentComponent, selectors: [["app-master-pigmy-agent"]], viewQuery: function MasterPigmyAgentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_pigmy_agent_master_pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_2__["PigmyAgentMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], [1, "td_right", 3, "ngClass"], ["colspan", "7", 1, "no-data-available"]], template: function MasterPigmyAgentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pigmy Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterPigmyAgentComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterPigmyAgentComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pigmy Agent Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPigmyAgentComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-pigmy-agent-master", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterPigmyAgentComponent_Template_app_pigmy_agent_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPigmyAgentComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pigmyAgentMaster == null ? null : ctx.pigmyAgentMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pigmyAgentMaster == null ? null : ctx.pigmyAgentMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.pigmyAgentData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_pigmy_agent_master_pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_2__["PigmyAgentMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItcGlnbXktYWdlbnQvbWFzdGVyLXBpZ215LWFnZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterPigmyAgentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-pigmy-agent',
                templateUrl: './master-pigmy-agent.component.html',
                styleUrls: ['./master-pigmy-agent.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_pigmy_agent_master_pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_2__["PigmyAgentMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-pigmy-agent/master-pigmy-agent.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-pigmy-agent/master-pigmy-agent.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: MasterPigmyAgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPigmyAgentModule", function() { return MasterPigmyAgentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_pigmy_agent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-pigmy-agent.component */ "./src/app/theme/passing/centralised-passing/master-pigmy-agent/master-pigmy-agent.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_pigmy_agent_master_pigmy_agent_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/pigmy-agent-master/pigmy-agent-master.module */ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterPigmyAgentModule {
}
MasterPigmyAgentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterPigmyAgentModule });
MasterPigmyAgentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterPigmyAgentModule_Factory(t) { return new (t || MasterPigmyAgentModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_pigmy_agent_master_pigmy_agent_master_module__WEBPACK_IMPORTED_MODULE_5__["PigmyAgentMasterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterPigmyAgentModule, { declarations: [_master_pigmy_agent_component__WEBPACK_IMPORTED_MODULE_3__["MasterPigmyAgentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_pigmy_agent_master_pigmy_agent_master_module__WEBPACK_IMPORTED_MODULE_5__["PigmyAgentMasterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_pigmy_agent_component__WEBPACK_IMPORTED_MODULE_3__["MasterPigmyAgentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterPigmyAgentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_pigmy_agent_component__WEBPACK_IMPORTED_MODULE_3__["MasterPigmyAgentComponent"]],
                exports: [_master_pigmy_agent_component__WEBPACK_IMPORTED_MODULE_3__["MasterPigmyAgentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_pigmy_agent_master_pigmy_agent_master_module__WEBPACK_IMPORTED_MODULE_5__["PigmyAgentMasterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-pigmy/master-pigmy.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-pigmy/master-pigmy.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MasterPigmyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPigmyComponent", function() { return MasterPigmyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_pigmy_account_master_pigmy_account_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/pigmy-account-master/pigmy-account-master.component */ "./src/app/theme/master/customer/pigmy-account-master/pigmy-account-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterPigmyComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPigmyComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterPigmyComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getPigmyAccountData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.AC_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NO === "" ? "-" : data_r5.AC_NO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CUSTID === "" ? "-" : data_r5.AC_CUSTID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.REF_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.REF_ACNO === "" ? "-" : data_r5.REF_ACNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_EXPDT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_EXPDT === "" ? "-" : data_r5.AC_EXPDT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MONTHS === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MONTHS === "" ? "-" : data_r5.AC_MONTHS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_SCHMAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_SCHMAMT === "" ? "-" : data_r5.AC_SCHMAMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AGENT_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AGENT_ACNO === "" ? "-" : data_r5.AGENT_ACNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MINOR === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MINOR === "" ? "-" : data_r5.AC_MINOR, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.PG_COMM_TYPE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.PG_COMM_TYPE === "" ? "-" : data_r5.PG_COMM_TYPE, "");
} }
function MasterPigmyComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPigmyComponent_tbody_15_tr_1_Template, 31, 27, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pigmyAccountMaster);
} }
function MasterPigmyComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterPigmyComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/datatable-data.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //       title: 'Name',
        //       data: 'name'
        //     }, {
        //       title: 'Position',
        //       data: 'position'
        //     }, {
        //       title: 'Office',
        //       data: 'office'
        //     }, {
        //       title: 'Age',
        //       data: 'age'
        //     }, {
        //       title: 'Start Date',
        //       data: 'date'
        //     }, {
        //       title: 'Salary',
        //       data: 'salary'
        //     }],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ]
        // };
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                dataTableParameters['filterData'] = this.filterData;
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                this.page = dataTableParameters.start / dataTableParameters.length;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + '/pigmy-account-master/passing', dataTableParameters).subscribe(resp => {
                        this.pigmyAccountMaster = resp.data;
                        console.log('fetch', resp.data);
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action',
                },
                // {
                //   title: 'PG Scheme Type',
                //   data: 'AC_ACNOTYPE'
                // },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Agent Number',
                    data: 'AC_NO'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Member Name',
                    data: 'AC_NAME'
                },
                // {
                //   title: 'A/c Short Name',
                //   data: 'AC_SHORT_NAME'
                // },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Detail Address',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                // {
                //   title: 'Member Scheme',
                //   data: 'AC_MEMBTYPE'
                // },
                // {
                //   title: 'Member No',
                //   data: 'AC_MEMBNO'
                // },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                // {
                //   title: 'Renewal Date',
                //   data: 'AC_RENEW_DATE'
                // },
                {
                    title: 'Expiry Date',
                    data: 'AC_EXPDT'
                },
                // {
                //   title: 'Category',
                //   data: 'AC_CATG'
                // },
                // {
                //   title: 'Operation',
                //   data: 'AC_OPR_CODE'
                // },
                // {
                //   title: 'Interest Category',
                //   data: 'AC_INTCATA'
                // },
                {
                    title: 'Period',
                    data: 'AC_MONTHS'
                },
                {
                    title: 'Default Deposite Amount',
                    data: 'AC_SCHMAMT'
                },
                // {
                //   title: 'Agent Scheme',
                //   data: 'AGENT_ACTYPE'
                // },
                {
                    title: 'Agent Code',
                    data: 'AGENT_ACNO'
                }, {
                    title: 'Minor Details',
                    data: 'AC_MINOR'
                },
                // {
                //   title: 'Birth Date',
                //   data: 'AC_MBDATE'
                // },
                // {
                //   title: 'Guardian Name',
                //   data: 'AC_GRDNAME'
                // },
                // {
                //   title: 'Relation',
                //   data: 'AC_GRDRELE'
                // },
                // {
                //   title: 'Branch',
                //   data: 'AC_INTROBRANCH'
                // },
                // {
                //   title: 'Account Type',
                //   data: 'AC_INTROID'
                // },
                // {
                //   title: 'Account Code',
                //   data: 'AC_INTRACNO'
                // },
                // {
                //   title: 'Name',
                //   data: 'AC_INTRNAME'
                // },
                // {
                //   title: 'Signature Authority',
                //   data: 'SIGNATURE_AUTHORITY'
                // },
                {
                    title: 'Is Calculate Separate Pigmy Commission for Loan Against Collection',
                    data: 'PG_COMM_TYPE'
                },
            ],
            dom: 'Blrtip',
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getPigmyAccountData(data) {
        console.log(data.id);
        this.PigmyData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterPigmyComponent.ɵfac = function MasterPigmyComponent_Factory(t) { return new (t || MasterPigmyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterPigmyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterPigmyComponent, selectors: [["app-master-pigmy"]], viewQuery: function MasterPigmyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_pigmy_account_master_pigmy_account_master_component__WEBPACK_IMPORTED_MODULE_2__["PigmyAccountMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [1, "td_right", 3, "ngClass"], [3, "ngClass"], ["colspan", "8", 1, "no-data-available"]], template: function MasterPigmyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Pigmy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterPigmyComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterPigmyComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Saving Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPigmyComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-pigmy-account-master", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterPigmyComponent_Template_app_pigmy_account_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPigmyComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pigmyAccountMaster == null ? null : ctx.pigmyAccountMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pigmyAccountMaster == null ? null : ctx.pigmyAccountMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.PigmyData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_pigmy_account_master_pigmy_account_master_component__WEBPACK_IMPORTED_MODULE_2__["PigmyAccountMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItcGlnbXkvbWFzdGVyLXBpZ215LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterPigmyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-pigmy',
                templateUrl: './master-pigmy.component.html',
                styleUrls: ['./master-pigmy.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_pigmy_account_master_pigmy_account_master_component__WEBPACK_IMPORTED_MODULE_2__["PigmyAccountMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-pigmy/master-pigmy.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-pigmy/master-pigmy.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MasterPigmyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPigmyModule", function() { return MasterPigmyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_pigmy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-pigmy.component */ "./src/app/theme/passing/centralised-passing/master-pigmy/master-pigmy.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_pigmy_account_master_pigmy_account_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/pigmy-account-master/pigmy-account-master.module */ "./src/app/theme/master/customer/pigmy-account-master/pigmy-account-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterPigmyModule {
}
MasterPigmyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterPigmyModule });
MasterPigmyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterPigmyModule_Factory(t) { return new (t || MasterPigmyModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_pigmy_account_master_pigmy_account_master_module__WEBPACK_IMPORTED_MODULE_5__["PigmyAccountMasterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterPigmyModule, { declarations: [_master_pigmy_component__WEBPACK_IMPORTED_MODULE_3__["MasterPigmyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_pigmy_account_master_pigmy_account_master_module__WEBPACK_IMPORTED_MODULE_5__["PigmyAccountMasterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_pigmy_component__WEBPACK_IMPORTED_MODULE_3__["MasterPigmyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterPigmyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_pigmy_component__WEBPACK_IMPORTED_MODULE_3__["MasterPigmyComponent"]],
                exports: [_master_pigmy_component__WEBPACK_IMPORTED_MODULE_3__["MasterPigmyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_pigmy_account_master_pigmy_account_master_module__WEBPACK_IMPORTED_MODULE_5__["PigmyAccountMasterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-saving/master-saving.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-saving/master-saving.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MasterSavingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterSavingComponent", function() { return MasterSavingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/saving-master/saving-master.component */ "./src/app/theme/master/customer/saving-master/saving-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterSavingComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterSavingComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterSavingComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getSavingData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "-" : data_r5.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.BANKACNO === "" ? "-" : data_r5.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.REF_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.REF_ACNO === "" ? "-" : data_r5.REF_ACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MINOR === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MINOR === "" ? "-" : data_r5.AC_MINOR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_MBDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_MBDATE === "" ? "-" : data_r5.AC_MBDATE, " ");
} }
function MasterSavingComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterSavingComponent_tbody_15_tr_1_Template, 21, 18, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.savingMaster);
} }
function MasterSavingComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterSavingComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/datatable-data.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //     title: 'Name',
        //     data: 'name'
        //   }, {
        //     title: 'Position',
        //     data: 'position'
        //   }, {
        //     title: 'Office',
        //     data: 'office'
        //   }, {
        //     title: 'Age',
        //     data: 'age'
        //   }, {
        //     title: 'Start Date',
        //     data: 'date'
        //   }, {
        //     title: 'Salary',
        //     data: 'salary'
        //   }],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ]
        // };
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http
                        .post(this.url + '/saving-master/passing', dataTableParameters).subscribe(resp => {
                        let data = localStorage.getItem('user');
                        let result = JSON.parse(data);
                        let branchCode = result.branch.id;
                        let master = new Array();
                        resp.data.forEach(element => {
                            if ((element === null || element === void 0 ? void 0 : element.BRANCH_CODE) == branchCode) {
                                master.push(element);
                                this.savingMaster = master;
                            }
                        });
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action'
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account No',
                    data: 'BANKACNO'
                },
                {
                    title: 'Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Detail Address',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Minor Details',
                    data: 'AC_MINOR'
                },
                {
                    title: 'Birth Date',
                    data: 'AC_MBDATE'
                },
            ],
            // dom:'<"bottom"flp><"clear">'
            // dom: 'ip',
            dom: 'Blrtip',
        };
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getSavingData(data) {
        console.log(data.id);
        this.savingData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterSavingComponent.ɵfac = function MasterSavingComponent_Factory(t) { return new (t || MasterSavingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterSavingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterSavingComponent, selectors: [["app-master-saving"]], viewQuery: function MasterSavingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_saving_master_saving_master_component__WEBPACK_IMPORTED_MODULE_2__["SavingMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "savingmastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 2, "max-width", "100%", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "10", 1, "no-data-available"]], template: function MasterSavingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Saving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterSavingComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterSavingComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Saving Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterSavingComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-saving-master", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterSavingComponent_Template_app_saving_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterSavingComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.savingMaster == null ? null : ctx.savingMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.savingMaster == null ? null : ctx.savingMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.savingData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_saving_master_saving_master_component__WEBPACK_IMPORTED_MODULE_2__["SavingMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItc2F2aW5nL21hc3Rlci1zYXZpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterSavingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-saving',
                templateUrl: './master-saving.component.html',
                styleUrls: ['./master-saving.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_saving_master_saving_master_component__WEBPACK_IMPORTED_MODULE_2__["SavingMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-saving/master-saving.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-saving/master-saving.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MasterSavingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterSavingModule", function() { return MasterSavingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_saving_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-saving.component */ "./src/app/theme/passing/centralised-passing/master-saving/master-saving.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_saving_master_saving_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/saving-master/saving-master.module */ "./src/app/theme/master/customer/saving-master/saving-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterSavingModule {
}
MasterSavingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterSavingModule });
MasterSavingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterSavingModule_Factory(t) { return new (t || MasterSavingModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_saving_master_saving_master_module__WEBPACK_IMPORTED_MODULE_5__["SavingMasterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterSavingModule, { declarations: [_master_saving_component__WEBPACK_IMPORTED_MODULE_3__["MasterSavingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_saving_master_saving_master_module__WEBPACK_IMPORTED_MODULE_5__["SavingMasterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_saving_component__WEBPACK_IMPORTED_MODULE_3__["MasterSavingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterSavingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_saving_component__WEBPACK_IMPORTED_MODULE_3__["MasterSavingComponent"]],
                exports: [_master_saving_component__WEBPACK_IMPORTED_MODULE_3__["MasterSavingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_saving_master_saving_master_module__WEBPACK_IMPORTED_MODULE_5__["SavingMasterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-shares/master-shares.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-shares/master-shares.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MasterSharesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterSharesComponent", function() { return MasterSharesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _master_customer_shares_master_shares_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/customer/shares-master/shares-master.component */ "./src/app/theme/master/customer/shares-master/shares-master.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












const _c0 = ["triggerhide"];
function MasterSharesComponent_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterSharesComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.editClickHandler(data_r5.id); })("click", function MasterSharesComponent_tbody_15_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); _r2.show(); return ctx_r8.getShareData(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_TYPE === "" || data_r5.AC_TYPE == null ? "-" : data_r5.shareMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.BANKACNO === "" ? "-" : data_r5.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NO === "" ? "-" : data_r5.AC_NO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_CUSTID === "" ? "-" : data_r5.AC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_NAME === "" ? "-" : data_r5.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.EMP_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.EMP_NO === "" ? "-" : data_r5.EMP_NO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.REF_ACNO === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.REF_ACNO === "" ? "-" : data_r5.REF_ACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_SREPRESENT === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_SREPRESENT === "" ? "-" : data_r5.AC_SREPRESENT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r5.idmaster.custAddress[0] == null ? null : data_r5.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r5.idmaster.custAddress[0].city == null ? null : data_r5.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_OPDATE === "" ? "-" : data_r5.AC_OPDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r5.AC_BRANCH === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.AC_BRANCH === "" ? "-" : data_r5.AC_BRANCH, " ");
} }
function MasterSharesComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterSharesComponent_tbody_15_tr_1_Template, 27, 24, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.shareMaster);
} }
function MasterSharesComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class MasterSharesComponent {
    constructor(http) {
        this.http = http;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/datatable-data.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //     title: 'Name',
        //     data: 'name'
        //   }, {
        //     title: 'Position',
        //     data: 'position'
        //   }, {
        //     title: 'Office',
        //     data: 'office'
        //   }, {
        //     title: 'Age',
        //     data: 'age'
        //   }, {
        //     title: 'Start Date',
        //     data: 'date'
        //   }, {
        //     title: 'Salary',
        //     data: 'salary'
        //   }],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ]
        // };
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe((x => {
                    this.http.post(this.url + '/share-master/passing', dataTableParameters).subscribe(resp => {
                        this.shareMaster = resp.data;
                        console.log('share table', this.shareMaster);
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsTotal,
                            data: []
                        });
                    });
                }));
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action',
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account Number',
                    data: 'BANKACNO'
                },
                {
                    title: 'Member Number',
                    data: 'AC_NO'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Member Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Employee Number',
                    data: 'EMP_NO'
                },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Represented by',
                    data: 'AC_SREPRESENT'
                },
                {
                    title: 'Detail Address',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                {
                    title: 'Open Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'Branch Code',
                    data: 'AC_BRANCH'
                },
            ],
            dom: 'Blrtip',
        };
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
    //get saving customer data
    getShareData(data) {
        console.log(data.id);
        this.shareData = data.id;
        this.child.editClickHandler(data.id);
        this.child.DatatableHideShow = false;
        this.child.rejectShow = true;
        this.child.approveShow = true;
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
}
MasterSharesComponent.ɵfac = function MasterSharesComponent_Factory(t) { return new (t || MasterSharesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MasterSharesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterSharesComponent, selectors: [["app-master-shares"]], viewQuery: function MasterSharesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_master_customer_shares_master_shares_master_component__WEBPACK_IMPORTED_MODULE_2__["SharesMasterComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 32, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card", "shadow"], [1, "col-sm"], [1, "table-responsive"], ["id", "sharemastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "childMessage", "getUserData"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "6", 1, "no-data-available"]], template: function MasterSharesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Master Shares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MasterSharesComponent_tbody_15_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterSharesComponent_tbody_16_Template, 4, 0, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-modal-basic", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Share Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterSharesComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "perfect-scrollbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-shares-master", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getUserData", function MasterSharesComponent_Template_app_shares_master_getUserData_27_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterSharesComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.shareMaster == null ? null : ctx.shareMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.shareMaster == null ? null : ctx.shareMaster.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx.shareData);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _master_customer_shares_master_shares_master_component__WEBPACK_IMPORTED_MODULE_2__["SharesMasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvY2VudHJhbGlzZWQtcGFzc2luZy9tYXN0ZXItc2hhcmVzL21hc3Rlci1zaGFyZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterSharesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-shares',
                templateUrl: './master-shares.component.html',
                styleUrls: ['./master-shares.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_master_customer_shares_master_shares_master_component__WEBPACK_IMPORTED_MODULE_2__["SharesMasterComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/passing/centralised-passing/master-shares/master-shares.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/passing/centralised-passing/master-shares/master-shares.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MasterShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterShareModule", function() { return MasterShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_shares_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-shares.component */ "./src/app/theme/passing/centralised-passing/master-shares/master-shares.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _master_customer_shares_master_shares_master_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/customer/shares-master/shares-master.module */ "./src/app/theme/master/customer/shares-master/shares-master.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class MasterShareModule {
}
MasterShareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterShareModule });
MasterShareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterShareModule_Factory(t) { return new (t || MasterShareModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _master_customer_shares_master_shares_master_module__WEBPACK_IMPORTED_MODULE_5__["SharesMasterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterShareModule, { declarations: [_master_shares_component__WEBPACK_IMPORTED_MODULE_3__["MasterSharesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _master_customer_shares_master_shares_master_module__WEBPACK_IMPORTED_MODULE_5__["SharesMasterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_master_shares_component__WEBPACK_IMPORTED_MODULE_3__["MasterSharesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterShareModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_shares_component__WEBPACK_IMPORTED_MODULE_3__["MasterSharesComponent"]],
                exports: [_master_shares_component__WEBPACK_IMPORTED_MODULE_3__["MasterSharesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _master_customer_shares_master_shares_master_module__WEBPACK_IMPORTED_MODULE_5__["SharesMasterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=centralised-passing-centralisedPassing-module.js.map