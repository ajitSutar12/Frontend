import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}


const MENUITEMS1 = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'sub',
        icon: 'icon-home',
        id: 1,
        children: [
          {
            state: 'default',
            short_label: 'D',
            name: 'Default',
            type: 'sub',
            id: 2,
            children: [
              {
                state: 'demo',
                name: 'Demo',
                id: 3,
              },
              {
                state: 'demo1',
                name: 'Demo1',
                target: false,
                id: 4,
              }
            ]
          },

          // {
          //   state: 'ecommerce',
          //   name: 'Ecommerce'
          // },
          // {
          //   state: 'crm-dashboard',
          //   name: 'CRM'
          // },
          // {
          //   state: 'analytics',
          //   name: 'Analytics',
          //   badge: [
          //     {
          //       type: 'info',
          //       value: 'NEW'
          //     }
          //   ]
          // },
          // {
          //   state: 'project',
          //   name: 'Project'
          // }
        ]
      },
      {
        state: 'master',
        short_label: 'D',
        name: 'TEST.MASTER',
        type: 'sub',
        icon: 'fa fa-university',
        id: 5,
        children: [
          {
            state: 'generalLedger',
            name: 'main.generalLedger.generalLedger',
            short_label: 'D',
            type: 'sub',
            id: 6,
            children: [
              {
                state: 'gl-statement-code',
                name: 'main.generalLedger.gl-statement-code',
                id: 7
              },
              {
                state: 'gl-accounts-master',
                name: 'main.generalLedger.gl-accounts-master',
                id: 8
              },
              {
                state: 'gl-report-master',
                name: 'main.generalLedger.gl-report-master',
                id: 9
              },
              {
                state: 'gl-report-linking',
                name: 'main.generalLedger.gl-report-linking',
                id: 10
              },
              {
                state: 'budget-master',
                name: 'main.generalLedger.budget-master',
                id: 11
              },
              {
                state: 'budget-view',
                name: 'main.generalLedger.budget-view',
                id: 359
              },
            ]

          },
          {
            state: 'customer',
            name: 'main.customer.customer',
            short_label: 'D',
            type: 'sub',
            id: 12,
            children: [
              {
                state: 'customerId',
                name: 'main.customer.custId',
                id: 13
              },
              {
                state: 'sharesMaster',
                name: 'main.customer.sharesMaster',
                id: 14
              },
              {
                state: 'anamatGSM',
                name: 'main.customer.anamatGSM',
                id: 15
              },
              {
                state: 'savingMaster',
                name: 'main.customer.savingMaster',
                id: 16
              },
              {
                state: 'currentAccountMaster',
                name: 'main.customer.currentAccountMaster',
                id: 17
              },
              {
                state: 'termDepositsMaster',
                name: 'main.customer.termDepositsMaster',
                id: 18
              },
              {
                state: 'cashCreditMaster',
                name: 'main.customer.cashCreditMaster',
                id: 19
              },
              {
                state: 'termLoanMaster',
                name: 'main.customer.termLoanMaster',
                id: 20
              },
              {
                state: 'disputeLoanMaster',
                name: 'main.customer.disputeLoanMaster',
                id: 21
              },
              {
                state: 'pigmyAgentMaster',
                name: 'main.customer.pigmyAgentMaster',
                id: 22
              },
              {
                state: 'pigmyAccountMaster',
                name: 'main.customer.pigmyAccountMaster',
                id: 23
              },
              {
                state: 'deadStockMaster',
                name: 'main.customer.deadStockMaster',
                id: 24
              },
              {
                state: 'accountOpening',
                name: 'main.customer.accountOpening',
                id: 25
              },
              {
                state: 'lockerMaster',
                name: 'main.customer.lockerMaster',
                id: 26
              },
            ]
          },
          {
            state: 'balanceEntry',
            short_label: 'D',
            name: 'main.balanceEntry.balanceEntry',
            type: 'sub',
            id: 27,
            children: [
              {
                state: 'balanceUpdation',
                name: 'main.balanceEntry.balanceUpdation',
                id: 28
              },
              // {
              //   state: 'reconciliationOTE',
              //   name: 'Reconciliation Opening Transaction Entry',
              //   id: 29
              // },
              // {
              //   state: 'reconciliationTE',
              //   name: 'Reconciliation Transaction Entry',
              //   id: 30
              // },
              // {
              //   state: 'loanieacdu',
              //   name: 'Loan Installment Edit and Close Date Updation',
              //   id: 31
              // },
              // {
              //   state: 'balanceOSCDA',
              //   name: 'Balance Of Saving, Current, Deposit, Agent'
              // },
              // {
              //   state: 'balanceofpigmy',
              //   name: 'Balance Of Pigmy'
              // },
              // {
              //   state: 'balanceOLCD',
              //   name: 'Balance Of Loan, Cash Credit, Dispuite Loan'
              // },
              // {
              //   state: 'memberWBA',
              //   name: 'Member wise balance addition'
              // },
              // {
              //   state: 'member',
              //   name: 'Member'
              // },


            ]
          },
          {
            state: 'PolicySettings',
            name: 'main.PolicySettings.PolicySettings',
            short_label: 'D',
            type: 'sub',
            id: 32,
            children: [
              {
                state: 'information',
                name: 'main.PolicySettings.information',
                id: 33
              },
              {
                state: 'definations',
                name: 'main.PolicySettings.definations',
                id: 34
              },
              {
                state: 'sizewiseBalanceModification',
                name: 'main.PolicySettings.sizewiseBalanceModification',
                id: 35
              },
              {
                state: 'tDReceiptTypeMaster',
                name: 'main.PolicySettings.tDReceiptTypeMaster',
                id: 36
              },
              {
                state: 'nPAClassificationSlabMaster',
                name: 'main.PolicySettings.nPAClassificationSlabMaster',
                id: 37
              },
            ]
          },
          {
            state: 'Maintainance',
            name: 'main.Maintainance.Maintainance',
            short_label: 'D',
            type: 'sub',
            id: 38,
            children: [
              {
                state: 'securityDetails',
                name: 'main.Maintainance.securityDetails',
                id: 39
              },
              // {
              //   state: 'loanAndCCInterestRateChanges',
              //   name: 'Loan And CC Interest Rate Changes',
              //   id: 40
              // },
              {
                state: 'depositLoanInterestRateEditChange',
                name: 'main.Maintainance.depositLoanInterestRateEditChange',
                id: 41
              },
              {
                state: 'npaOpeningDetailsEntry',
                name: 'main.Maintainance.npaOpeningDetailsEntry',
                id: 42
              },
              {
                state: 'interestPostingFlagUpdation',
                name: 'main.Maintainance.interestPostingFlagUpdation',
                id: 43
              },
              // {
              //   state: 'accountwiseDocumentAcceptance',
              //   name: 'Accountwise Document Acceptance',
              //   id: 44
              // },
              {
                state: 'recoveryFlag',
                name: 'main.Maintainance.recoveryFlag',
                id: 358
              },
              {
                state: 'notingCharges',
                name: 'main.Maintainance.notingCharges',
                id: 45
              },
              {
                state: 'tdsformsubmission',
                name: 'main.Maintainance.tdsformsubmission',
                id: 46
              },
              {
                state: 'moratoriumperiodmaster',
                name: 'main.Maintainance.moratoriumperiodmaster',
                id: 47
              },
              {
                state: 'disputedetail',
                name: 'main.Maintainance.disputedetail',
                id: 363
              },
              {
                state: 'disputedetail',
                name: 'main.Maintainance.disputedetail',
                id: 363
              }
            ]

          },
          {
            state: 'Instruction',
            name: 'main.Instruction.Instruction',
            short_label: 'D',
            type: 'sub',
            id: 48,
            children: [
              {
                state: 'overDraft',
                name: 'main.Instruction.overDraft',
                id: 49
              },
              {
                state: 'standingInstruction',
                name: 'main.Instruction.standingInstruction',
                id: 50
              },
              {
                state: 'interestInstruction',
                name: 'main.Instruction.interestInstruction',
                id: 51
              },
              {
                state: 'special',
                name: 'main.Instruction.special',
                id: 52
              },
              {
                state: 'freezeAccount',
                name: 'main.Instruction.freezeAccount',
                id: 53
              },
              // {
              //   state: 'reminderInstruction',
              //   name: 'Reminder Instruction',
              //   id: 54
              // },
              // {
              //   state: 'revokeStandingInstructions',
              //   name: 'Revoke Standing Instructions',
              //   id: 55
              // }, {
              //   state: 'revokeInterestInstruction',
              //   name: 'Revoke Interest Instruction',
              //   id: 56
              // },
              // {
              //   state: 'revokeSpecialInstruction',
              //   name: 'Revoke Special Instruction',
              //   id: 57
              // },
              {
                state: 'lienMarkClear',
                name: 'main.Instruction.lienMarkClear',
                id: 58
              },
            ]

          },
          // {
          //   state: 'Investment',
          //   short_label: 'D',
          //   name: 'Investment',
          //   type: 'sub',
          //   id:59,
          //   children: [
          //     {
          //       state: 'accountOpening',
          //       name: 'Account Opening',
          //       id:60
          //     },
          //     {
          //       state: 'transactionEntry',
          //       name: 'Transaction Entry',
          //       id:61
          //     },
          //     {
          //       state: 'accountClosing',
          //       name: 'Account Closing',
          //       id:62
          //     },
          //     {
          //       state: 'accountOpenPassing',
          //       name: 'Account Open Passing',
          //       id:63
          //     },
          //     {
          //       state: 'transactionPassing',
          //       name: 'Transaction Passing',
          //       id:64
          //     },
          //     {
          //       state: 'accountClosePassing',
          //       name: 'Account Close Passing',
          //       id:65
          //     },
          //   ]
          // },
          {
            state: 'Shares',
            name: 'main.Shares.Shares',
            short_label: 'D',
            type: 'sub',
            id: 66,
            children: [
              // {
              //   state: 'unpaidDividendEntry',
              //   name: 'Unpaid Dividend Entry',
              //   id: 67
              // },
              {
                state: 'yearWiseUnpaidDividendEntry',
                name: 'main.Shares.yearWiseUnpaidDividendEntry',
                id: 68
              },
              {
                state: 'dividendTransferEntry',
                name: 'main.Shares.dividendTransferEntry',
                id: 69
              },
              {
                state: 'dividendCalculation',
                name: 'main.Shares.dividendCalculation',
                id: 70
              },
              {
                state: 'dividendPosting',
                name: 'main.Shares.dividendPosting',
                id: 71
              },
              {
                state: 'dividendTransferPosting',
                name: 'main.Shares.dividendTransferPosting',
                id: 72
              },

              {
                state: 'generalmeetpresentmem',
                name: 'main.Shares.generalmeetpresentmem',
                id: 367
              },
            ]

          },
          // {
          //   state: 'SignatureScanning',
          //   name: 'SignatureScanning',
          //   id:73
          // },
          // {
          //   state: 'DDBankCityMaster',
          //   name: 'DDBankCityMaster',
          //   id: 74
          // },

        ]
      },
      {
        state: 'transaction',
        short_label: 'D',
        name: 'TEST.transaction',
        type: 'sub',
        icon: 'fa fa-money',
        id: 75,
        children: [
          {
            state: 'voucherEntry',
            name: 'main.transaction.voucherEntry',
            id: 76
          },
          {
            state: 'multiVoucher',
            name: 'main.transaction.multiVoucher',
            id: 77
          },
          {
            state: 'batchVoucher',
            name: 'main.transaction.batchVoucher',
            id: 78
          },
          {
            state: 'pigmyChartEntry',
            name: 'main.transaction.pigmyChartEntry',
            id: 79
          },
          {
            state: 'deadStockPurchase',
            name: 'main.transaction.deadStockPurchase',
            id: 80
          },
          {
            state: 'deadStockTransaction',
            name: 'main.transaction.deadStockTransaction',
            id: 81
          },

          {
            state: 'reconciliationEntry',
            name: 'main.transaction.reconciliationEntry',
            id: 82
          },
          {
            state: 'savingspigmyaccountclosing',
            name: 'main.transaction.savingspigmyaccountclosing',
            id: 83
          },
          {
            state: 'termDepositAccountClosing',
            name: 'main.transaction.termDepositAccountClosing',
            id: 84
          },
          {
            state: 'TermDepositeAcRenewal',
            name: 'main.transaction.TermDepositeAcRenewal',
            id: 85
          },
          {
            state: 'investmentAccountRenewal',
            name: 'main.transaction.investmentAccountRenewal',

            id: 375
          },
          {
            state: 'cashCreditAcRenewal',
            name: 'main.transaction.cashCreditAcRenewal',
            id: 86
          },
          {
            state: 'shareTransactions',
            name: 'main.transaction.shareTransactions',
            id: 87
          },

          {
            state: 'locker',
            name: 'main.transaction.locker.locker',
            short_label: 'L',
            type: 'sub',
            id: 88,
            children: [
              {
                state: 'lockerOpenTransaction',
                name: 'main.transaction.locker.lockerOpenTransaction',
                id: 89
              },
              {
                state: 'lockerCloseTransaction',
                name: 'main.transaction.locker.lockerCloseTransaction',

                id: 90
              },
              {
                state: 'lockerRentTransaction',
                name: 'main.transaction.locker.lockerRentTransaction',
                id: 91
              },
              // {
              //   state: 'cashOutDenomination',
              //   name: 'main.transaction.cashDenomination.cashOutDenomination',
              //   id: 92
              // },
              // {
              //   state: 'cashInitialisationEntry',
              //    name: 'main.transaction.cashDenomination.cashInitialisationEntry',
              //   id: 93
              // },
              // {
              //   state: 'safeValultToCashier',
              // name: 'main.transaction.cashDenomination.safeValultToCashier',
              //   id: 94
              // },
              // {
              //   state: 'cashierToSafeVault',
              //   name: 'Cashier To Safe Vault',
              //   id: 95
              // },
            ]
          },
          {
            state: 'cashDenomination',
            name: 'main.transaction.cashDenomination.cashDenomination',
            short_label: 'D',
            type: 'sub',
            id: 96,
            children: [
              {
                state: 'acceptD',
                name: 'main.transaction.cashDenomination.acceptD',
                id: 97
              },
              {
                state: 'paymentDenomination',
                name: 'main.transaction.cashDenomination.paymentDenomination',
                id: 98
              },
              {
                state: 'cashInDenomination',
                name: 'main.transaction.cashDenomination.cashInDenomination',
                id: 99
              },
              {
                state: 'cashOutDenomination',
                name: 'main.transaction.cashDenomination.cashOutDenomination',
                id: 100
              },
              {
                state: 'cashInitialisationEntry',
                name: 'main.transaction.cashDenomination.cashInitialisationEntry',
                id: 101
              },
              {
                state: 'safeValultToCashier',
                name: 'main.transaction.cashDenomination.safeValultToCashier',
                id: 102
              },
              {
                state: 'cashierToSafeVault',
                name: 'main.transaction.cashDenomination.cashierToSafeVault',
                id: 103
              },
            ]
          },
          // {
          //   state: 'cashier',
          //   name: 'Cashier',
          //   id: 104
          // },


          {
            state: 'goldsilverreturnentry',
            name: 'main.transaction.goldsilverreturnentry',
            id: 111
          },
          {
            state: 'memberDAPDT',
            name: 'main.transaction.memberDAPDT',
            id: 112
          },
          {
            state: 'memberTransfer',
            name: 'main.transaction.memberTransfer.memberTransfer',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 113,
            children: [
              {
                state: 'MemberTransferTransaction',
                name: 'main.transaction.memberTransfer.MemberTransferTransaction',
                id: 114
              },

              {
                state: 'BranchAndSalaryDC',
                name: 'main.transaction.memberTransfer.BranchAndSalaryDC',
                id: 115
              },

              // {
              //   state: 'TrasferredMemberOB',
              //   name: 'Trasferred Member Opening Balances',
              //   id: 116
              // },
            ]
          },

          {
            state: 'recovery',
            name: 'main.transaction.recovery.recovery',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 117,
            children: [
              {
                state: 'recoveryProcessing',
                name: 'main.transaction.recovery.recoveryProcessing',
                id: 118
              },
              {
                state: 'recoveryModification',
                name: 'main.transaction.recovery.recoveryModification',
                id: 119
              },
              {
                state: 'recoveryPosting',
                name: 'main.transaction.recovery.recoveryPosting',
                id: 120
              },
              {
                state: 'recoveryDataImportExport',
                name: 'main.transaction.recovery.recoveryDataImportExport',
                id: 121
              },
            ]
          },

          {
            state: 'memberLoan',
            name: 'main.transaction.memberLoan.memberLoan',
            short_label: 'D',
            type: 'sub',
            id: 122,
            children: [
              {
                state: 'loanApplication',
                name: 'main.transaction.memberLoan.loanApplication',
                id: 123
              },
              {
                state: 'loanSanction',
                name: 'main.transaction.memberLoan.loanSanction',
                id: 124
              }
            ]
          },
          {
            state: 'ddtransaction',
            name: 'main.transaction.memberLoan.ddtransaction',
            id: 125
          },
          {
            state: 'dividendPay',
            name: 'main.transaction.dividendPay.dividendPay',
            short_label: 'D',
            type: 'sub',
            id: 126,
            children: [
              {
                state: 'dividendPaidMarkSD',
                name: 'main.transaction.dividendPay.dividendPaidMarkSD',
                id: 127
              },
              {
                state: 'dividendPaidSD',
                name: 'main.transaction.dividendPay.dividendPaidSD',
                id: 128
              },
            ]
          },
          {
            state: 'cashRecoveryTransaction',
            name: 'main.transaction.cashRecoveryTransaction',
            id: 129
          },
          {
            state: 'consolidationTransaction',
            name: 'main.transaction.consolidationTransaction',
            id: 130
          },
          {
            state: 'inwardRegister',
            name: 'main.transaction.inwardRegister',
            id: 131
          },

        ]
      },
      
      {
        state: 'passing',
        short_label: 'D',
        name: 'main.passing.passing',
        type: 'sub',
        icon: 'fa fa-check-square-o',
        id: 132,
        children: [
          {
            state: 'centralisedPassing',
            name: 'main.passing.centralisedPassing',
            id: 133
          },

          // {
          //   state: 'sharesTransactionPassing',
          //   name: 'Shares Transaction Passing',
          //   id: 134
          // },

          {
            state: 'unapprove',
            name: 'main.passing.unapprove',
            id: 135
          },
          {
            state: 'neftPassing',
            name: 'main.passing.neftPassing',
            id: 354
          },
        ]
      },
      {
        state: 'neftRtgs',
        short_label: 'D',
        name: 'main.neftRtgs.Services ',
        type: 'sub',
        icon: 'fa fa-money',
        id: 349,
        children: [
          {
            state: 'neftTransfer',
            name: 'main.neftRtgs.neftTransfer ',
            id: 350
          },
          {
            state: 'rtgsTransfer',
            name: 'main.neftRtgs.rtgsTransfer ',
            id: 351
          },
          {
            state: 'billPayment',
            name: 'main.neftRtgs.billPayment ',

            id: 352
          },
          {
            state: 'fundTransfer',
            name: 'main.neftRtgs.fundTransfer ',

            id: 353
          },
          {
            state: 'cibilScore',
            name: 'main.neftRtgs.cibilScore ',
            id: 380
          },
        ]
      },
      {
        state: 'view',
        short_label: 'D',
        name: 'main.view.view',

        type: 'sub',
        icon: 'fa fa-tag',
        id: 136,
        children: [
          {
            state: 'accountEnquiry',
            name: 'main.view.accountEnquiry',
            id: 137
          },
          {
            state: 'ledgerView',
            name: 'main.view.ledgerView',
            id: 138
          },
          {
            state: 'sharesLedgerView',
            name: 'main.view.sharesLedgerView',
            id: 139
          },
          {
            state: 'voucherView',
            name: 'main.view.voucherView',
            id: 140
          },
          {
            state: 'customerView',
            name: 'main.view.customerView',
            id: 141
          },
          {
            state: 'guarantorView',
            name: 'main.view.guarantorView',
            id: 142
          },
          {
            state: 'memberView',
            name: 'main.view.memberView',
            id: 143
          },
          {
            state: 'masterCard',
            name: 'main.view.masterCard',
            id: 144
          },
          {
            state: 'memberLiablityView',
            name: 'main.view.memberLiablityView',
            id: 145
          },
          {
            state: 'otherView',
            name: 'main.view.otherView',
            id: 146
          },
          {
            state: 'managerView',
            name: 'main.view.managerView',
            id: 147

          },
          {
            state: 'lockerView',
            name: 'main.view.lockerView',
            id: 348

          },
          {
            state: 'memberguaranter',
            name: 'main.view.memberguaranter',

            id: 368

          },
          {
            state: 'KYCDocument',
            name: 'KYC Document',
            id: 382

          },
        ],

      },
      {
        state: 'printing',
        short_label: 'D',
        name: 'main.printing.printing',

        type: 'sub',
        icon: 'fa fa-print',
        id: 347,
        children: [
          {
            state: 'voucherPrint',
            name: 'main.printing.voucherPrint',
            id: 110,

          },
          {
            state: 'termDepositReceiptPrinting',
            name: 'main.printing.termDepositReceiptPrinting',
            // short_label: 'D',
            // type: 'sub',
            id: 108,
            // children: [
            //   {
            //     state: 'depositReceiptPrint',
            //     name: 'Deposit Receipt Print',
            //     id: 109
            //   },
            // ]
          },
          {
            state: 'tDReceiptPrinting',
            name: 'main.printing.tDReceiptPrinting',
            id: 377,
          },
          {
            state: 'goldSilverReceipt',
            name: 'main.printing.goldSilverReceipt',
            id: 344
          },
          {
            state: 'passbookPrinting',
            name: 'main.printing.passbookPrinting',
            short_label: 'D',
            type: 'sub',
            id: 105,
            children: [
              {
                state: 'passbookIssue',
                name: 'main.printing.passbookIssue',
                id: 106
              },
              {
                state: 'passbookEntryPrint',
                name: 'main.printing.passbookEntryPrint',
                id: 107
              }
            ]
          },
          // {
          //   state: 'tDReceiptPrinting',
          //   name: 'TD Receipt Printing',
          //   id: 368,
          // },

        ]
      },
      {
        state: 'reports',
        short_label: 'D',
        name: 'main.reports.reports',
        type: 'sub',
        icon: 'fa fa-file-text-o',
        id: 148,
        children: [
          // {
          //   state: 'allReportsWithSearching',
          //   name: 'All Reports With Searching',
          //   id: 149
          // },
          ////////////////////////////
          {
            state: 'dailyReports',
            name: 'main.reports.dailyReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 150,
            children: [
              // {
              //   state: 'BnkDayBookSummary',
              //   name: 'Day Book Detail/Summary',
              //    id: 151
              // },
              {
                state: 'TFormDayBookComponent',
                name: 'main.reports.TFormDayBookComponent',
                id: 152
              },
              {
                state: 'BnkSubsidaryDetail',
                name: 'main.reports.BnkSubsidaryDetail',

                id: 153
              },
              {
                state: 'BnkScrollDetailBoth',
                name: 'main.reports.BnkScrollDetailBoth',
                id: 154
              },
              {
                state: 'IntInstructionExecutionFailure',
                name: 'main.reports.IntInstructionExecutionFailure',
                id: 155
              },
              {
                state: 'StandingInstExecutionFailure',
                name: 'main.reports.StandingInstExecutionFailure',
                id: 156
              },
              {
                state: 'StandingInstExecutionCredit',
                name: 'main.reports.StandingInstExecutionCredit',
                id: 157
              },
              {
                state: 'StandingInstExecutionDebit',
                name: 'main.reports.StandingInstExecutionDebit',
                id: 158
              },
              {
                state: 'IntInstructExecutionCredit',
                name: 'main.reports.IntInstructExecutionCredit',
                id: 159
              },
              {
                state: 'IntInstructExecutionDebit',
                name: 'main.reports.IntInstructExecutionDebit',
                id: 160
              },

              {
                state: 'otherSubsidiary',
                name: 'main.reports.otherSubsidiary',
                id: 341
              },
              {
                state: 'SubsidiarySummery',
                name: 'main.reports.SubsidiarySummery',
                id: 342
              },

            ]
          },
          //
          {
            state: 'statement',
            name: 'main.statement.statement',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 163,
            children: [
              {
                state: 'BnkGlAcStatement',
                name: 'main.statement.BnkGlAcStatement',
                id: 164
              },
              {
                state: 'BnkAcStatement',
                name: 'main.statement.BnkAcStatement',
                id: 165
              },
              {
                state: 'BnkLNamtStatement',
                name: 'main.statement.BnkLNamtStatement',
                id: 166
              },
              {
                state: 'BnkTDStatement',
                name: 'main.statement.BnkTDStatement',
                id: 167
              },
              // {
              //   state: 'BnkGlIntStatement',
              //   name: 'General Ledger interest list',
              //   id: 168
              // },
              // {
              //   state: 'BnkMemStatement',
              //   name: 'Member Statement',
              //   id: 169
              // },
            ]
          },
          //
          {
            state: 'balanceBook',
            name: 'main.balanceBook.balanceBook',

            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 170,
            children: [
              {
                state: 'BnkDedskBalList',
                name: 'main.balanceBook.BnkDedskBalList',
                id: 171
              },
              // {
              //   state: 'BnkLedgerABTypeList',
              //   name: 'Leadger Balance List A,B type Member Loan and Deposit',
              //   id: 172
              // },
              {
                state: 'BnkACBalBook',
                name: 'main.balanceBook.BnkACBalBook',
                id: 173
              },
              {
                state: 'BnkACBalList',
                name: 'main.balanceBook.BnkACBalList',
                id: 174
              },
              {
                state: 'BnkCustIDBalList',
                name: 'main.balanceBook.BnkCustIDBalList',
                id: 175
              },
              {
                state: 'BnkGLConsistRepo',
                name: 'main.balanceBook.BnkGLConsistRepo',
                id: 176
              },
              {
                state: 'BnkReceiveIntList',
                name: 'main.balanceBook.BnkReceiveIntList',
                id: 177
              },
              {
                state: 'BnkPayIntList',
                name: 'main.balanceBook.BnkPayIntList',
                id: 178
              },
              {
                state: 'BnkDedskBalListDepre',
                name: 'main.balanceBook.BnkDedskBalListDepre',
                id: 179
              },
              {
                state: 'BnkDptAMList',
                name: 'main.balanceBook.BnkDptAMList',
                id: 180
              },
              {
                state: 'CatbalList',
                name: 'main.balanceBook.CatbalList',
                id: 181
              },
              {
                state: 'DebbalReport',
                name: 'main.balanceBook.DebbalReport',
                id: 182
              },

              // {
              //   state:'Bnkbalcon',
              //   name:'balance confirmation certificate',
              //   id:183
              // },
              // {
              //    state:'Srtballist',
              //    name:'Short Balance List',
              //    id:184
              // },

              {
                state: 'AmountBalList',
                name: 'main.balanceBook.AmountBalList',
                id: 185
              },
              {
                state: 'DeadStockDepCatList',
                name: 'main.balanceBook.DeadStockDepCatList',
                id: 186
              },
              {
                state: 'BalConCertificate',
                name: 'main.balanceBook.BalConCertificate',
                id: 187
              },
              {
                state: 'shortballist',
                name: 'main.balanceBook.shortballist',
                id: 188
              },

            ]
          },
          //
          {
            state: 'registers',
            name: 'main.registers.registers',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 189,
            children: [
              {
                state: 'BnkRegAccount',
                name: 'main.registers.BnkRegAccount',
                id: 190
              },
              {
                state: 'BnkRegStandingInstruction',
                name: 'main.registers.BnkRegStandingInstruction',
                id: 191
              },
              {
                state: 'BnkRegInterestInstruction',
                name: 'main.registers.BnkRegInterestInstruction',
                id: 192
              },
              {
                state: 'BnkRegSpecialInstruction',
                name: 'main.registers.BnkRegSpecialInstruction',
                id: 193
              },
              {
                state: 'BnkRegInsurence',
                name: 'main.registers.BnkRegInsurence',
                id: 194
              },
              {
                state: 'BnkODRegister',
                name: 'main.registers.BnkODRegister',
                id: 195
              },
              {
                state: 'BnkRegDeadStock',
                name: 'main.registers.BnkRegDeadStock',
                id: 196
              },
              {
                state: 'BnkIVOpenAndCloseReg',
                name: 'main.registers.BnkIVOpenAndCloseReg',
                id: 197
              },
              {
                state: 'BnkRegGoldSilverSubReturn',
                name: 'main.registers.BnkRegGoldSilverSubReturn',
                id: 198
              },
              {
                state: 'DepositReceiptRegister',
                name: 'main.registers.DepositReceiptRegister',
                id: 199
              },
              {
                state: 'lockerRentRegister',
                name: 'main.registers.lockerRentRegister',
                id: 200
              },
              {
                state: 'lockerRegister',
                name: 'main.registers.lockerRegister',
                id: 201
              },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                id: 202
              },
              {
                state: 'KYCDocReceivedNotRec',
                name: 'main.registers.kycdocumentreceivednotreceived',
                id: 378
              },
            ]
          },
          //
          {
            state: 'Termdeposit',
            name: 'main.Termdeposit.Termdeposit',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 203,
            children: [
              {
                state: 'maturedbutnotpaid',
                name: 'main.Termdeposit.maturedbutnotpaid',
                id: 204
              },
              {
                state: 'maturedbutnotclosed',
                name: 'main.Termdeposit.maturedbutnotclosed',
                id: 205
              },
              {
                state: 'depositpaidlist',
                name: 'main.Termdeposit.depositpaidlist',
                id: 206
              },
              {
                state: 'intratewisebalancelist',
                name: 'main.Termdeposit.intratewisebalancelist',
                id: 207
              },
              {
                state: 'custidwiseintpaidlist',
                name: 'main.Termdeposit.custidwiseintpaidlist',
                id: 208
              },
              {
                state: 'custidwiseloaninterestCertificate',
                name: 'main.Termdeposit.custidwiseloaninterestCertificate',
                id: 209
              },
              {
                state: 'IntRatewiseMaturityList',
                name: 'main.Termdeposit.IntRatewiseMaturityList',
                id: 210
              },
              {
                state: 'custidwisedepositlist',
                name: 'main.Termdeposit.custidwisedepositlist',
                id: 211
              },
              {
                state: 'tddetailrecurroverdue',
                name: 'main.Termdeposit.tddetailrecurroverdue',
                id: 212
              },
              {
                state: 'prematuredAcCloselist',
                name: 'main.Termdeposit.prematuredAcCloselist',
                id: 213
              },
              {
                state: 'renewalDepositList',
                name: 'main.Termdeposit.renewalDepositList',
                id: 214
              },
              {
                state: 'directorwiseDepositlist',
                name: 'main.Termdeposit.directorwiseDepositlist',
                id: 215
              },
              {
                state: 'custidwiseInterestList',
                name: 'main.Termdeposit.custidwiseInterestList',
                id: 216
              },
              {
                state: 'custidwiseMaturedList',
                name: 'main.Termdeposit.custidwiseMaturedList',
                id: 217
              },
              {
                state: 'abtypeDepositList',
                name: 'main.Termdeposit.abtypeDepositList',
                id: 218
              },



            ]

          },

          {
            state: 'SharesReports',
            name: 'main.SharesReports.SharesReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 219,
            children: [
              {
                state: 'cityMemberList',
                name: 'main.SharesReports.cityMemberList',
                id: 220
              },

              {
                state: 'dividendPaidList',
                name: 'main.SharesReports.dividendPaidList',
                id: 221
              },
              {
                state: 'sharesIssueRegister',
                name: 'main.SharesReports.sharesIssueRegister',
                id: 222
              },
              {
                state: 'sharesReturnRegister',
                name: 'main.SharesReports.sharesReturnRegister',
                id: 223
              },
              {
                state: 'sharesTransferRegister',
                name: 'main.SharesReports.sharesTransferRegister',
                id: 224
              },
              {
                state: 'unpaidDividendList',
                name: 'main.SharesReports.unpaidDividendList',
                id: 225
              },
              {
                state: 'monthlyRecoveryPrint',
                name: 'main.SharesReports.monthlyRecoveryPrint',
                id: 226
              },
              {
                state: 'monthlyRecoverySubsidiary',
                name: 'main.SharesReports.monthlyRecoverySubsidiary',
                id: 227
              }
            ]
          },


          //
          // {
          //   state: 'denominationReports',
          //   name: 'Denomination Reports',
          //   id: 228
          // },

          //
          // {
          //   state: 'loanReports',
          //   name: 'Loan Reports',
          //   id: 229
          // },
          {
            state: 'LoanReport',
            name: 'main.LoanReport.LoanReport',
            short_label: 'D',
            type: 'sub',
            id: 230,
            children: [
              // {
              //   state: 'loanoverduelist',
              //   name: 'Loan Overdue List',
              //   type: 'sub',
              //   id: 231,

              // },
              {
                state: 'loansecurityreport',
                name: 'main.LoanReport.loansecurityreport',
                type: 'sub',
                id: 232,

              },
              {
                state: 'citiwiseLoanBalancereport',
                name: 'main.LoanReport.citiwiseLoanBalancereport',
                type: 'sub',
                id: 233,
              },
              {
                state: 'lcdLessdraftReport',
                name: 'main.LoanReport.lcdLessdraftReport',
                type: 'sub',
                id: 234,
              },
              {
                state: 'lcdOverdraftReport',
                name: 'main.LoanReport.lcdOverdraftReport',
                type: 'sub',
                id: 235,
              },
              {
                state: 'lcd-renewal-list',
                name: 'main.LoanReport.lcd-renewal-list',
                type: 'sub',
                id: 236,
              },
              {
                state: 'lcd-turnover-list',
                name: 'main.LoanReport.lcd-turnover-list',
                type: 'sub',
                id: 237,
              },
              {
                state: 'penalinterestlist',
                name: 'main.LoanReport.penalinterestlist',
                type: 'sub',
                id: 238,
              },
              {
                state: 'pendingStockStatementlist',
                name: 'main.LoanReport.pendingStockStatementlist',
                type: 'sub',
                id: 239,
              },
              {
                state: 'receivedStockstatementList',
                name: 'main.LoanReport.receivedStockstatementList',
                type: 'sub',
                id: 240,
              },
              {
                state: 'recoverycwBalanceList',
                name: 'main.LoanReport.recoverycwBalanceList',
                type: 'sub',
                id: 241,
              },
              {
                state: 'receivableInstallInterest',
                name: 'main.LoanReport.receivableInstallInterest',
                type: 'sub',
                id: 242,
              },
              {
                state: 'loanExpiredList',
                name: 'main.LoanReport.loanExpiredList',
                type: 'sub',
                id: 343,
              },
              {
                state: 'loanduecertificate',
                name: 'main.LoanReport.loanduecertificate',
                type: 'sub',
                id: 355,
              },
              {
                state: 'CourtwiseDisputeLoandetail',
                name: 'main.LoanReport.CourtwiseDisputeLoandetail',

                type: 'sub',
                id: 369,
              },
              {
                state: 'CourtwiseDisputeLoanList',
                name: 'main.LoanReport.CourtwiseDisputeList',
                type: 'sub',
                id: 370,
              },
              {
                state: 'DisputeLoanList',
                name: 'main.LoanReport.DisputeLoanList',
                type: 'sub',
                id: 371,
              },
              {
                state: 'loanCCACSanctionDatewise',
                name: 'main.LoanReport.loanCCACSanctionDatewise',
                type: 'sub',
                id: 372,
              },
              {
                state: 'healthCodewise',
                name: 'main.LoanReport.healthCodewise',

                type: 'sub',
                id: 373,
              },
            ],

          },


          {
            state: 'npaReports',
            name: 'main.npaReports.npaReports',
            short_label: 'D',
            type: 'sub',
            id: 243,
            children: [
              {
                state: 'loanoverduelist',
                name: 'main.npaReports.loanoverduelist',
                type: 'sub',
                id: 252,

              },
              {
                state: 'npaRegister',
                name: 'main.npaReports.npaRegister',
                id: 244
              },
              {
                state: 'npaRegPercentage',
                name: 'main.npaReports.npaRegPercentage',
                id: 245
              },
              {
                state: 'nonNpaRecovery',
                name: 'main.npaReports.nonNpaRecovery',
                id: 246
              },
              {
                state: 'directorwise',
                name: 'main.npaReports.directorwise',
                id: 247
              },
              {
                state: 'citiwisenpa',
                 name: 'main.npaReports.citiwisenpa',
                type: 'sub',
                id: 248,

              },
              {
                state: 'analysisnpa',
                name: 'main.npaReports.analysisnpa',
                type: 'sub',
                id: 249,

              },
              {
                state: 'classificationsecnpa',
                  name: 'main.npaReports.classificationsecnpa',
                type: 'sub',
                id: 250,
              },
              {
                state: 'classificationstandardnpa',
              name: 'main.npaReports.classificationstandardnpa',
                type: 'sub',
                id: 251,
              },


            ],
          },
          //
          //
          // {
          //   state: 'nottice',
          //   name: 'Nottice',
          //   id: 252
          // },
          {
            state: 'nottice',
            name: 'main.nottice.nottice',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 362,
            children: [
              {
                state: 'noticereport',
                name: 'Notice Report',
                id: 364
              },
              {
                state: 'noticeformat',
                name: 'Notice Format',
                id: 365
              },
              {
                state: 'blankNotice',
                name: 'main.nottice.blankNotice',

                id: 366
              },
              {
                state: 'showNotice',
                name: 'main.nottice.showNotice',
                id: 367
              },
            ]
          },
          // //
          // {
          //   state: 'Report_Frame',
          //   name: 'Report Frame',
          //   id: 253
          // },
          //
          {
            state: 'nottice',
            name: 'main.nottice.nottice',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 362,
            children: [
              {
                state: 'noticereport',
                name: 'main.nottice.noticereport',
                id: 363
              },
              {
                state: 'noticeformat',
                name: 'main.nottice.noticeformat',
                id: 364
              },
              {
                state: 'blankNotice',
                name: 'main.nottice.blankNotice',
                id: 365
              },
              {
                state: 'showNotice',
                name: 'main.nottice.showNotice',
                id: 366
              },
            ]
          },
          {
            state: 'PigmyReport',
             name: 'main.PigmyReport.PigmyReport',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 254,
            children: [
              {
                state: 'BnkPigmyCollectionChart',
               name: 'main.PigmyReport.BnkPigmyCollectionChart',
                id: 255
              },
              {
                state: 'BnkPigmyBalanceList',
              name: 'main.PigmyReport.BnkPigmyBalanceList',
                id: 256
              },
              {
                state: 'BnkPigmyBalanceBook',
                 name: 'main.PigmyReport.BnkPigmyBalanceBook',
                id: 257
              },
              {
                state: 'BnkPigmyBlankChart',
              name: 'main.PigmyReport.BnkPigmyBlankChart',
                id: 258
              },
              {
                state: 'BnkPigmyCommissionRepo',
               name: 'main.PigmyReport.BnkPigmyCommissionRepo',
                id: 259
              },
              {
                state: 'pigmyhandbook',
                name: 'main.PigmyReport.pigmyhandbook',
                id: 260
              },
              {
                state: 'pigmymaturedAclist',
                name: 'main.PigmyReport.pigmymaturedAclist',
                id: 261
              },
            ]
          },
          //
          {
            state: 'otherReports',
            short_label: 'D',
            name: 'main.otherReports.otherReports',
            type: 'sub',
            icon: 'icon-home',
            id: 262,
            children: [
              {
                state: 'BnkMinorsList',
             name: 'main.otherReports.BnkMinorsList',
                id: 263
              },
              {
                state: 'BnkNomineeList',
                name: 'main.otherReports.BnkNomineeList',
                id: 264
              },
              {
                state: 'BnkGuaranterList',
                 name: 'main.otherReports.BnkGuaranterList',
                id: 265
              },
              {
                state: 'BnkLienMarkedAcList',
                 name: 'main.otherReports.BnkLienMarkedAcList',
                id: 266
              },
              // {
              //   state: 'BnkDormantAcList',
              //   name: 'Dormant Account List',
              //   id: 267
              // },
              {
                state: 'BnkAmountMovement',
                name: 'main.otherReports.BnkAmountMovement',
                id: 268
              },
              {
                state: 'BnkDepAmountMovementDetail',
                name: 'main.otherReports.BnkDepAmountMovementDetail',
                id: 269
              },
              {
                state: 'BnkLNAmountMovementDetail',
                name: 'main.otherReports.BnkLNAmountMovementDetail',
                id: 270
              },
              {
                state: 'BnkGurDetailsList',
                name: 'main.otherReports.BnkGurDetailsList',
                id: 271
              },
              {
                state: 'BnkNonGuaranteerView',
                name: 'main.otherReports.BnkNonGuaranteerView',
                id: 272
              },
              {
                state: 'custidIntroducerList',
                name: 'main.otherReports.custidIntroducerList',
                id: 273
              },
              {
                state: 'serviceChargeList',
                name: 'main.otherReports.serviceChargeList',
                id: 274
              },
              {
                state: 'minorToMajorlist',
                name: 'main.otherReports.minorToMajorlist',
                id: 275
              },
              {
                state: 'tranLessAclist',
                name: 'main.otherReports.tranLessAclist',
                id: 276
              },
              {
                state: 'dormantAccountList',
                name: 'main.otherReports.dormantAccountList',
                id: 277
              },

            ]
          },
          //
          {
            state: 'misReports',
            name: 'main.misReports.misReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 278,
            children: [
              {
                state: 'loanBalanceBetTwoDates',
                name: 'main.misReports.loanBalanceBetTwoDates',
                id: 356
              },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                id: 280
              },
              {
                state: 'swnidhi',
                name: 'main.misReports.swnidhi',
                id: 376
              },
              {
                state: 'MISInfo',
                name: 'main.misReports.MISInfo',
                id: 377
              },
              {
                state: 'expensive',
                name: 'main.misReports.expensive',

                id: 381
              }
            ]
          },
          //
          {
            state: 'managerViewReports',
             name: 'main.managerViewReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 281
          },
          //
          {
            state: 'finalReports',
           name: 'main.finalReports.finalReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 282,
            children: [
              {
                state: 'BnkTrialBal',
               name: 'main.finalReports.BnkTrialBal',
                id: 283
              },
              {
                state: 'BnkTrialBaldetail',
                name: 'main.finalReports.BnkTrialBaldetail',
                id: 284
              },
              {
                state: 'BalanceSheet',
               name: 'main.finalReports.BalanceSheet',
                id: 285
              },
              {
                state: 'NBalanceSheet',
                 name: 'main.finalReports.NBalanceSheet',
                id: 286
              },
              {
                state: 'ProfitLossAccount',
                  name: 'main.finalReports.ProfitLossAccount',
                id: 287
              },
              {
                state: 'NProfitLoss',
              name: 'main.finalReports.NProfitLoss',
                id: 288
              },
              {
                state: 'RecePayRep',
                name: 'main.finalReports.RecePayRep',
                id: 289
              },
              {
                state: 'RecePayRepDetails',
                 name: 'main.finalReports.RecePayRepDetails',
                id: 290
              },

            ]
          },
          {
            state: 'RecoveryReport',
            name: 'main.RecoveryReport.RecoveryReport',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 291,
            children: [
              {
                state: 'memberAckReport',
                   name: 'main.RecoveryReport.memberAckReport',
                id: 292
              },


            ]
          },
        ]
      },
      {
        state: 'utility',
        short_label: 'D',
       name: 'main.utility.utility',
        type: 'sub',
        icon: 'fa fa-university',
        id: 293,
        children: [

          // {
          //   state: 'backDatedDO',
          //   name: 'Back Dated Day Open',
          //   id: 299
          // },
          // {
          //   state: 'receiptPrintingD',
          //   name: 'Receipt Printing Designing',
          //   id: 300
          // },

          {
            state: 'interestPosting',
              name: 'main.utility.interestPosting.interestPosting',
            short_label: 'D',
            type: 'sub',
            id: 302,
            children: [
              {
                state: 'interestCalculation',
                  name: 'main.utility.interestPosting.interestCalculation',
                id: 303
              },

              {
                state: 'interestPassing',
               name: 'main.utility.interestPosting.interestPassing',
                id: 304
              },
              {
                state: 'interestList',
                 name: 'main.utility.interestPosting.interestList',
                id: 305
              },
            ]
          },

          {
            state: 'pigmyMachineProcess',
            name: 'main.utility.pigmyMachineProcess',
            id: 307
          },

          {
            state: 'monthRecProc',
            name: 'main.utility.monthRecProc',
            id: 357
          },

          {
            state: 'whatsappmessages',
            name: 'main.utility.whatsappmessages',
            id: 345
          },
          {
            state: 'deadStockP',
            name: 'main.utility.deadStockP',
            id: 309
          },
          {
            state: 'dividend',
            name: 'main.utility.dividend.dividend',
            short_label: 'D',
            type: 'sub',
            id: 310,
            children: [
              {
                state: 'dividendList',
              name: 'main.utility.dividend.dividendList',
                id: 311
              },
              {
                state: 'dividendPost',
                 name: 'main.utility.dividend.dividendPost',
                id: 312
              }
            ]
          },
          {
            state: 'statementHeadInsert',
           name: 'main.utility.statementHeadInsert',
            id: 313
          },


          {
            state: 'roleDefination',
            name: 'main.utility.roleDefination',
            id: 315
          },
          {
            state: 'roleMaster',
           name: 'main.utility.roleMaster',
            id: 316
          },
          {
            state: 'userDefination',
            name: 'main.utility.userDefination',
            id: 317
          },
          {
            state: 'cashierMaintance',
            name: 'main.utility.cashierMaintance',
            id: 318
          },
          {
            state: 'cashierUM',
             name: 'main.utility.cashierUM',
            id: 319
          },
          {
            state: 'sharesCCTS',
              name: 'main.utility.sharesCCTS',
            id: 320
          },
          // {
          //   state: 'silverJACTS',
          //   name: 'Silver Jubilee Amount Credit To Shares',
          //   id: 321
          // },
          // {
          //   state: 'masikBDW',
          //   name: 'Masik Bachat Deposit Withdrawl',
          //   id: 322
          // },
          {
            state: 'schemeATE',
              name: 'main.utility.schemeATE',
            id: 323
          },
          {
            state: 'schemeParameters',
            name: 'main.utility.schemeParameters',
            id: 324
          },
          {
            state: 'calculator',
            name: 'main.utility.calculator',
            id: 325
          },
          // {
          //   state: 'remindMe',
          //   name: 'Remind Me',
          //   id: 326
          // },

          {
            state: 'pataSevaSupportR',
            name: 'main.utility.pataSevaSupportR',
            id: 328
          },
          {
            state: 'sharesDataEI',
             name: 'main.utility.sharesDataEI',
            id: 329
          },
          // {
          //   state: 'dayBookIE',
          //   name: 'Daybook Import / Export',
          //   id: 330
          // },
          {
            state: 'demandDraftDEI',
            name: 'main.utility.demandDraftDEI',
            id: 331
          },
          {
            state: 'gmaMemberUpdation',
          name: 'main.utility.gmaMemberUpdation',
            id: 332
          },
          {
            state: 'amtTransferTransaction',
           name: 'main.utility.amtTransferTransaction',
            id: 333
          },
          {
            state: 'recAmtTrToGL',
            name: 'main.utility.recAmtTrToGL',
            id: 334
          },
          {
            state: 'conversion',
           name: 'main.utility.conversion',
            id: 374
          },
          {
            state: 'remainder',
            name: 'main.utility.remainder',
            id: 379
          },
        ]
      },
      {
        state: 'process',
        short_label: 'D',
        name: 'TEST.process',
        type: 'sub',
        icon: 'fa fa-cogs',
        id: 346,
        children: [
          {
            state: 'dayBegin',
           name: 'main.process.dayBegin',
            id: 294
          },
          {
            state: 'dayEnd',
            name: 'main.process.dayEnd.dayEnd',
            short_label: 'D',
            type: 'sub',
            id: 295,
            children: [
              {
                state: 'counterWorkDayEnd',
               name: 'main.process.dayEnd.counterWorkDayEnd',
                id: 296
              },
              {
                state: 'FinalDayEnd',
                name: 'main.process.dayEnd.FinalDayEnd',
                id: 297
              },
              {
                state: 'pigmyDayEnd',
               name: 'main.process.dayEnd.pigmyDayEnd',
                id: 298
              },
              {
                state: 'yearEnd',
               name: 'main.process.dayEnd.yearEnd',
                id: 299
              },
            ]
          },

          {
            state: 'pigmyAppProcess',
            name: 'main.process.pigmyAppProcess',

            id: 308
          },

          {
            state: 'holiday',
             name: 'main.process.holiday',
            id: 301
          },


          {
            state: 'processACM',
          name: 'main.process.processACM',
            id: 306
          },

          {
            state: 'deadStockP',
             name: 'main.process.deadStockP',
            id: 309
          },
          {
            state: 'dataBackup',
             name: 'main.process.dataBackup',
            id: 327
          },
          {
            state: 'monthlyrecoveryprocess',
            name: 'main.process.monthlyrecoveryprocess',
            id: 360
          },
          {
            state: 'yearEndBranchwise',
            name: 'main.process.yearEndBranchwise',

            id: 361
          },
         

        ]
      },
      {
        state: 'windows',
        short_label: 'D',
       name: 'TEST.windows',
        type: 'sub',
        icon: 'icon-home',
        id: 335,
        children: [
          {
            state: 'casecade',
            name: 'main.process.windows.casecade',
            id: 336
          },
          {
            state: 'tileHorizontaily',
             name: 'main.process.windows.tileHorizontaily',
            id: 337
          },
          {
            state: 'tileVertically',
           name: 'main.process.windows.tileVertically',
            id: 338
          },

        ]
      },
      {
        state: 'hotKeys',
        short_label: 'D',
        name: 'main.process.hotKeys',
        type: 'link',
        icon: 'fa fa-key',
        id: 339
      },
      {
        state: 'exit',
        short_label: 'D',
       name: 'main.process.exit',
        type: 'link',
        icon: 'fa fa-sign-out',
        id: 340
      },
      // {
      //   state: 'navigation',
      //   short_label: 'N',
      //   name: 'Navigation',
      //   type: 'link',
      //   icon: 'icon-layout-cta-right'
      // },
      // {
      //   state: 'widget',
      //   short_label: 'W',
      //   name: 'Widget',
      //   type: 'sub',
      //   icon: 'icon-view-grid',
      //   badge: [
      //     {
      //       type: 'danger',
      //       value: '100+'
      //     }
      //   ],
      //   children: [
      //     {
      //       state: 'statistic',
      //       name: 'Statistic'
      //     },
      //     {
      //       state: 'data',
      //       name: 'Data'
      //     },
      //     {
      //       state: 'chart',
      //       name: 'Chart'
      //     },
      //     {
      //       state: 'advanced',
      //       name: 'Advance'
      //     }
      //   ]
      // }
    ],
  },
  //   {
  //     label: 'UI Element',
  //     main: [
  //       {
  //         state: 'basic',
  //         short_label: 'B',
  //         name: 'Basic',
  //         type: 'sub',
  //         icon: 'icon-layout-grid2-alt',
  //         children: [
  //           {
  //             state: 'alert',
  //             name: 'Alert'
  //           },
  //           {
  //             state: 'breadcrumb',
  //             name: 'Breadcrumbs'
  //           },
  //           {
  //             state: 'button',
  //             name: 'Button'
  //           },
  //           {
  //             state: 'box-shadow',
  //             name: 'Box-Shadow'
  //           },
  //           {
  //             state: 'accordion',
  //             name: 'Accordion'
  //           },
  //           {
  //             state: 'generic-class',
  //             name: 'Generic Class'
  //           },
  //           {
  //             state: 'tabs',
  //             name: 'Tabs'
  //           },
  //           {
  //             state: 'color',
  //             name: 'Color'
  //           },
  //           {
  //             state: 'label-badge',
  //             name: 'Label Badge'
  //           },
  //           {
  //             state: 'progressbar',
  //             name: 'Progressbar'
  //           },
  //           {
  //             state: 'pre-loader',
  //             name: 'Pre-Loader'
  //           },
  //           {
  //             state: 'list',
  //             name: 'List'
  //           },
  //           {
  //             state: 'tooltip',
  //             name: 'Tooltip & Popover'
  //           },
  //           {
  //             state: 'typography',
  //             name: 'Typography'
  //           },
  //           {
  //             state: 'other',
  //             name: 'Other'
  //           },
  //         ]
  //       },
  //       {
  //         state: 'advance',
  //         short_label: 'A',
  //         name: 'Advance',
  //         type: 'sub',
  //         icon: 'icon-crown',
  //         children: [
  //           {
  //             state: 'task-board',
  //             name: 'Task Board'
  //           },
  //           {
  //             state: 'grid-stack',
  //             name: 'Grid Stack'
  //           },
  //           /*{
  //             state: 'light-box',
  //             name: 'Light Box'
  //           },*/
  //           {
  //             state: 'modal',
  //             name: 'Modal'
  //           },
  //           {
  //             state: 'notifications',
  //             name: 'Notifications'
  //           },
  //           /*{
  //             state: 'notify',
  //             name: 'PNOTIFY',
  //             badge: [
  //               {
  //                 type: 'info',
  //                 value: 'New'
  //               }
  //             ]
  //           },*/
  //           {
  //             state: 'rating',
  //             name: 'Rating'
  //           },
  //           {
  //             state: 'range-slider',
  //             name: 'Range Slider'
  //           },
  //           /*{
  //             state: 'slider',
  //             name: 'Slider'
  //           },*/
  //           /*{
  //             state: 'tour',
  //             name: 'Tour'
  //           },*/
  //           /*{
  //             state: 'tree',
  //             name: 'Tree View'
  //           }*/
  //         ]
  //       },
  //       /*{
  //         state: 'animations',
  //         short_label: 'A',
  //         name: 'Animations',
  //         type: 'link',
  //         icon: 'icon-reload rotate-refresh'
  //       }*/
  //     ]
  //   },
  //   {
  //     label: 'Forms',
  //     main: [
  //       {
  //         state: 'forms',
  //         short_label: 'F',
  //         name: 'Form',
  //         type: 'sub',
  //         icon: 'icon-layers',
  //         children: [
  //           {
  //             state: 'basic',
  //             name: 'Components'
  //           }, {
  //             state: 'add-on',
  //             name: 'Add-On'
  //           }, {
  //             state: 'advance',
  //             name: 'Advance'
  //           }, {
  //             state: 'frm-validation',
  //             name: 'Validation'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'picker',
  //         short_label: 'P',
  //         main_state: 'forms',
  //         name: 'Form Picker',
  //         type: 'link',
  //         icon: 'icon-pencil-alt'
  //       },
  //       {
  //         state: 'mask',
  //         short_label: 'M',
  //         main_state: 'forms',
  //         name: 'Form Mask',
  //         type: 'link',
  //         icon: 'feather icon-package',
  //         badge: [
  //           {
  //             type: 'warning',
  //             value: 'New'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'select',
  //         short_label: 'S',
  //         main_state: 'forms',
  //         name: 'Form Select',
  //         type: 'link',
  //         icon: 'icon-shortcode'
  //       },
  //       {
  //         state: 'form-wizards',
  //         short_label: 'FW',
  //         main_state: 'forms',
  //         name: 'Form Wizard',
  //         type: 'link',
  //         icon: 'feather icon-user'
  //       },
  //       {
  //         state: 'ngx',
  //         short_label: 'NFW',
  //         main_state: 'forms',
  //         name: 'NGX Form Wizard',
  //         type: 'link',
  //         icon: 'feather icon-list'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Tables',
  //     main: [
  //       {
  //         state: 'bootstrap-table',
  //         short_label: 'B',
  //         name: 'Bootstrap Table',
  //         type: 'sub',
  //         icon: 'icon-receipt',
  //         children: [
  //           {
  //             state: 'basic',
  //             name: 'Basic Table'
  //           }, {
  //             state: 'sizing',
  //             name: 'Sizing Table'
  //           }, {
  //             state: 'border',
  //             name: 'Border Table'
  //           }, {
  //             state: 'styling',
  //             name: 'Styling Table'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'data-table',
  //         short_label: 'D',
  //         name: 'Data Table',
  //         type: 'link',
  //         icon: 'icon-widgetized'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Chart And Map',
  //     main: [
  //       {
  //         state: 'charts',
  //         short_label: 'C',
  //         name: 'Charts',
  //         type: 'sub',
  //         icon: 'icon-bar-chart-alt',
  //         children: [
  //           {
  //             state: 'google',
  //             name: 'Google'
  //           }, {
  //             state: 'chart-js',
  //             name: 'ChartJS'
  //           }, {
  //             state: 'radial',
  //             name: 'Radial'
  //           }, {
  //             state: 'c3-js',
  //             name: 'C3 JS'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'map',
  //         short_label: 'M',
  //         name: 'Maps',
  //         type: 'sub',
  //         icon: 'icon-map-alt',
  //         children: [
  //           {
  //             state: 'google',
  //             name: 'Google'
  //           }
  //         ]
  //       },
  //       /*{
  //         state: 'landing',
  //         short_label: 'L',
  //         external: 'http://html.phoenixcoded.net/mega-able-5/default/landingpage',
  //         name: 'Landing Page',
  //         type: 'external',
  //         icon: 'icon-mobile',
  //         target: true
  //       }*/
  //     ]
  //   },
  //   {
  //     label: 'Pages',
  //     main: [
  //       {
  //         state: 'auth',
  //         short_label: 'A',
  //         name: 'Authentication',
  //         type: 'sub',
  //         icon: 'icon-id-badge',
  //         children: [
  //           {
  //             state: 'login',
  //             type: 'sub',
  //             name: 'Login Pages',
  //             children: [
  //               {
  //                 state: 'simple',
  //                 name: 'Simple',
  //                 target: true
  //               }, {
  //                 state: 'header-footer',
  //                 name: 'Header & Footer',
  //                 target: true
  //               }, {
  //                 state: 'social',
  //                 name: 'Social Icon',
  //                 target: true
  //               }, {
  //                 state: 'social-header-footer',
  //                 name: 'Social Header & Footer',
  //                 target: true
  //               }
  //             ]
  //           }, {
  //             state: 'registration',
  //             type: 'sub',
  //             name: 'Registration Pages',
  //             children: [
  //               {
  //                 state: 'simple',
  //                 name: 'Simple',
  //                 target: true
  //               }, {
  //                 state: 'header-footer',
  //                 name: 'Header & Footer',
  //                 target: true
  //               }, {
  //                 state: 'social',
  //                 name: 'Social',
  //                 target: true
  //               }, {
  //                 state: 'social-header-footer',
  //                 name: 'Social Header & Footer',
  //                 target: true
  //               }
  //             ]
  //           },
  //           {
  //             state: 'forgot',
  //             name: 'Forgot Password',
  //             target: true
  //           },
  //           {
  //             state: 'lock-screen',
  //             name: 'Lock Screen',
  //             target: true
  //           },
  //         ]
  //       },
  //       {
  //         state: 'maintenance',
  //         short_label: 'A',
  //         name: 'Maintenance',
  //         type: 'sub',
  //         icon: 'icon-settings',
  //         children: [
  //           {
  //             state: 'error',
  //             short_label: 'A',
  //             name: 'Error Pages',
  //             type: 'sub',
  //             icon: 'feather icon-alert-triangle',
  //             children: [
  //               {
  //                 state: '400',
  //                 name: 'Error 400',
  //                 target: true
  //               },
  //               {
  //                 state: '403',
  //                 name: 'Error 403',
  //                 target: true
  //               },
  //               {
  //                 state: '404',
  //                 name: 'Error 404',
  //                 target: true
  //               },
  //               {
  //                 state: '500',
  //                 name: 'Error 500',
  //                 target: true
  //               },
  //               {
  //                 state: '503',
  //                 name: 'Error 503',
  //                 target: true
  //               }
  //             ]
  //           },
  //           {
  //             state: 'coming-soon',
  //             short_label: 'CS',
  //             name: 'Coming Soon',
  //             type: 'link',
  //             icon: 'feather icon-upload-cloud',
  //             target: true
  //           },
  //           {
  //             state: 'offline-ui',
  //             name: 'Offline UI',
  //             target: true
  //           }
  //         ]
  //       },
  //       {
  //         state: 'user',
  //         short_label: 'U',
  //         name: 'User Profile',
  //         type: 'sub',
  //         icon: 'icon-user',
  //         children: [
  //           {
  //             state: 'profile',
  //             name: 'User Profile'
  //           }, {
  //             state: 'card',
  //             name: 'User Card'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'email',
  //         short_label: 'E',
  //         name: 'Email',
  //         type: 'sub',
  //         icon: 'feather icon-email',
  //         children: [
  //           {
  //             state: 'email-compose',
  //             name: 'Compose Email'
  //           }, {
  //             state: 'email-inbox',
  //             name: 'Inbox'
  //           }, {
  //             state: 'email-read',
  //             name: 'Read Mail'
  //           }, {
  //             state: 'email-template',
  //             name: 'Email Template',
  //             type: 'sub',
  //             children: [
  //               {
  //                 state: 'email-welcome',
  //                 name: 'Welcome Email',
  //                 target: true
  //               },
  //               {
  //                 state: 'email-reset-password',
  //                 name: 'Reset Password',
  //                 target: true
  //               },
  //               {
  //                 state: 'email-newsletter',
  //                 name: 'Newsletter Email',
  //                 target: true
  //               },
  //               {
  //                 state: 'app-launch',
  //                 name: 'App Launch',
  //                 target: true
  //               },
  //               {
  //                 state: 'activation-code',
  //                 name: 'Activation Code',
  //                 target: true
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     label: 'App',
  //     main: [
  //       {
  //         state: 'crm-contact',
  //         name: 'CRM Contact',
  //         type: 'link',
  //         icon: 'feather icon-user'
  //       },
  //       {
  //         state: 'task',
  //         short_label: 'T',
  //         name: 'Task',
  //         type: 'sub',
  //         icon: 'icon-check-box',
  //         children: [
  //           {
  //             state: 'list',
  //             name: 'Task List'
  //           }, {
  //             state: 'board',
  //             name: 'Task Board'
  //           }, {
  //             state: 'details',
  //             name: 'Task Details'
  //           }, {
  //             state: 'issue',
  //             name: 'Issue List'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Extension',
  //     main: [
  //       {
  //         state: 'editor',
  //         name: 'Editor',
  //         type: 'sub',
  //         icon: 'feather icon-pencil',
  //         children: [
  //           {
  //             state: 'tinymce',
  //             name: 'Tinymce Editor'
  //           },
  //           {
  //             state: 'wysiwyg',
  //             name: 'Pell Wysiwyg Editor'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'invoice',
  //         short_label: 'I',
  //         name: 'Invoice',
  //         type: 'sub',
  //         icon: 'icon-layout-media-right',
  //         children: [
  //           {
  //             state: 'basic',
  //             name: 'Invoice'
  //           }, {
  //             state: 'summary',
  //             name: 'Invoice Summary'
  //           }, {
  //             state: 'list',
  //             name: 'Invoice List'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'file-upload-ui',
  //         short_label: 'F',
  //         name: 'File Upload',
  //         type: 'link',
  //         icon: 'icon-cloud-up'
  //       },
  //       {
  //         state: 'full-event-calendar',
  //         short_label: 'EC',
  //         name: 'Event Calendar',
  //         type: 'link',
  //         icon: 'feather icon-calendar'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Other',
  //     main: [
  //       {
  //         state: '',
  //         short_label: 'M',
  //         name: 'Menu Levels',
  //         type: 'sub',
  //         icon: 'icon-direction-alt',
  //         children: [
  //           {
  //             state: '',
  //             name: 'Menu Level 2.1',
  //             target: true
  //           }, {
  //             state: '',
  //             name: 'Menu Level 2.2',
  //             type: 'sub',
  //             children: [
  //               {
  //                 state: '',
  //                 name: 'Menu Level 2.2.1',
  //                 target: true
  //               },
  //               {
  //                 state: '',
  //                 name: 'Menu Level 2.2.2',
  //                 target: true
  //               }
  //             ]
  //           }, {
  //             state: '',
  //             name: 'Menu Level 2.3',
  //             target: true
  //           }, {
  //             state: '',
  //             name: 'Menu Level 2.4',
  //             type: 'sub',
  //             children: [
  //               {
  //                 state: '',
  //                 name: 'Menu Level 2.4.1',
  //                 target: true
  //               },
  //               {
  //                 state: '',
  //                 name: 'Menu Level 2.4.2',
  //                 target: true
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         state: 'simple-page',
  //         short_label: 'S',
  //         name: 'Sample Page',
  //         type: 'link',
  //         icon: 'icon-layout-sidebar-left'
  //       }
  //     ]
  //  }
];

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'sub',
        icon: 'icon-home',
        id: 1,
        children: [
          {
            state: 'default',
            short_label: 'D',
            name: 'Default',
            type: 'sub',
            id: 2,
            children: [
              {
                state: 'demo',
                name: 'Demo',
                id: 3,
              },
              {
                state: 'demo1',
                name: 'Demo1',
                target: false,
                id: 4,
              }
            ]
          },

          // {
          //   state: 'ecommerce',
          //   name: 'Ecommerce'
          // },
          // {
          //   state: 'crm-dashboard',
          //   name: 'CRM'
          // },
          // {
          //   state: 'analytics',
          //   name: 'Analytics',
          //   badge: [
          //     {
          //       type: 'info',
          //       value: 'NEW'
          //     }
          //   ]
          // },
          // {
          //   state: 'project',
          //   name: 'Project'
          // }
        ]
      },
      {
        state: 'master',
        short_label: 'D',
        name: 'TEST.MASTER',
        type: 'sub',
        icon: 'fa fa-university',
        id: 5,
        children: [
          {
            state: 'generalLedger',
            name: 'main.generalLedger.generalLedger',
            short_label: 'D',
            type: 'sub',
            id: 6,
            children: [
              {
                state: 'gl-statement-code',
                name: 'main.generalLedger.gl-statement-code',
                id: 7
              },
              {
                state: 'gl-accounts-master',
                name: 'main.generalLedger.gl-accounts-master',
                id: 8
              },
              {
                state: 'gl-report-master',
                name: 'main.generalLedger.gl-report-master',
                id: 9
              },
              {
                state: 'gl-report-linking',
                name: 'main.generalLedger.gl-report-linking',
                id: 10
              },
              {
                state: 'budget-master',
                name: 'main.generalLedger.budget-master',
                id: 11
              },
              {
                state: 'budget-view',
                name: 'main.generalLedger.budget-view',
                id: 359
              },
            ]

          },
          {
            state: 'customer',
            name: 'main.customer.customer',
            short_label: 'D',
            type: 'sub',
            id: 12,
            children: [
              {
                state: 'customerId',
                name: 'main.customer.custId',
                id: 13
              },
              {
                state: 'sharesMaster',
                name: 'main.customer.sharesMaster',
                id: 14
              },
              {
                state: 'anamatGSM',
                name: 'main.customer.anamatGSM',
                id: 15
              },
              {
                state: 'savingMaster',
                name: 'main.customer.savingMaster',
                id: 16
              },
              {
                state: 'currentAccountMaster',
                name: 'main.customer.currentAccountMaster',
                id: 17
              },
              {
                state: 'termDepositsMaster',
                name: 'main.customer.termDepositsMaster',
                id: 18
              },
              {
                state: 'cashCreditMaster',
                name: 'main.customer.cashCreditMaster',
                id: 19
              },
              {
                state: 'termLoanMaster',
                name: 'main.customer.termLoanMaster',                id: 20
              },
              {
                state: 'disputeLoanMaster',
                name: 'main.customer.disputeLoanMaster',
                id: 21
              },
              {
                state: 'pigmyAgentMaster',
                name: 'main.customer.pigmyAgentMaster',
                id: 22
              },
              {
                state: 'pigmyAccountMaster',
                name: 'main.customer.pigmyAccountMaster',
                id: 23
              },
              {
                state: 'deadStockMaster',
                name: 'main.customer.deadStockMaster',
                id: 24
              },
              {
                state: 'accountOpening',
                name: 'main.customer.accountOpening',
                id: 25
              },
              {
                state: 'lockerMaster',
                name: 'main.customer.lockerMaster',
                id: 26
              },
            ]
          },
          {
            state: 'balanceEntry',
            short_label: 'D',
            name: 'main.balanceEntry.balanceEntry',
            type: 'sub',
            id: 27,
            children: [
              {
                state: 'balanceUpdation',
                name: 'main.balanceEntry.balanceUpdation',
                id: 28
              },
              // {
              //   state: 'reconciliationOTE',
              //   name: 'Reconciliation Opening Transaction Entry',
              //   id: 29
              // },
              // {
              //   state: 'reconciliationTE',
              //   name: 'Reconciliation Transaction Entry',
              //   id: 30
              // },
              // {
              //   state: 'loanieacdu',
              //   name: 'Loan Installment Edit and Close Date Updation',
              //   id: 31
              // },
              // {
              //   state: 'balanceOSCDA',
              //   name: 'Balance Of Saving, Current, Deposit, Agent'
              // },
              // {
              //   state: 'balanceofpigmy',
              //   name: 'Balance Of Pigmy'
              // },
              // {
              //   state: 'balanceOLCD',
              //   name: 'Balance Of Loan, Cash Credit, Dispuite Loan'
              // },
              // {
              //   state: 'memberWBA',
              //   name: 'Member wise balance addition'
              // },
              // {
              //   state: 'member',
              //   name: 'Member'
              // },


            ]
          },
          {
            state: 'PolicySettings',
            name: 'main.PolicySettings.PolicySettings',
            short_label: 'D',
            type: 'sub',
            id: 32,
            children: [
              {
                state: 'information',
                name: 'main.PolicySettings.information',
                id: 33
              },
              {
                state: 'definations',
                name: 'main.PolicySettings.definations',
                id: 34
              },
              {
                state: 'sizewiseBalanceModification',
                name: 'main.PolicySettings.sizewiseBalanceModification',
                id: 35
              },
              {
                state: 'tDReceiptTypeMaster',
                name: 'main.PolicySettings.tDReceiptTypeMaster',
                id: 36
              },
              {
                state: 'nPAClassificationSlabMaster',
                name: 'main.PolicySettings.nPAClassificationSlabMaster',
                id: 37
              },
            ]
          },
          {
            state: 'Maintainance',
            name: 'main.Maintainance.Maintainance',
            short_label: 'D',
            type: 'sub',
            id: 38,
            children: [
              {
                state: 'securityDetails',
                name: 'main.Maintainance.securityDetails',
                id: 39
              },
              // {
              //   state: 'loanAndCCInterestRateChanges',
              //   name: 'Loan And CC Interest Rate Changes',
              //   id: 40
              // },
              {
                state: 'depositLoanInterestRateEditChange',
                name: 'main.Maintainance.depositLoanInterestRateEditChange',
                id: 41
              },
              {
                state: 'npaOpeningDetailsEntry',
                name: 'main.Maintainance.npaOpeningDetailsEntry',
                id: 42
              },
              {
                state: 'interestPostingFlagUpdation',
                name: 'main.Maintainance.interestPostingFlagUpdation',
                id: 43
              },
              // {
              //   state: 'accountwiseDocumentAcceptance',
              //   name: 'Accountwise Document Acceptance',
              //   id: 44
              // },
              {
                state: 'recoveryFlag',
                name: 'main.Maintainance.recoveryFlag',
                id: 358
              },
              {
                state: 'notingCharges',
                name: 'main.Maintainance.notingCharges',
                id: 45
              },
              {
                state: 'tdsformsubmission',
                name: 'main.Maintainance.tdsformsubmission',
                id: 46
              },
              {
                state: 'moratoriumperiodmaster',
                name: 'main.Maintainance.moratoriumperiodmaster',
                id: 47
              }, {
                state: 'disputedetail',
                name: 'main.Maintainance.disputedetail',
                id: 363
              }
            ]

          },
          {
            state: 'Instruction',
            name: 'main.Instruction.Instruction',
            short_label: 'D',
            type: 'sub',
            id: 48,
            children: [
              {
                state: 'overDraft',
                name: 'main.Instruction.overDraft',
                id: 49
              },
              {
                state: 'standingInstruction',
                name: 'main.Instruction.standingInstruction',
                id: 50
              },
              {
                state: 'interestInstruction',
                name: 'main.Instruction.interestInstruction',
                id: 51
              },
              {
                state: 'special',
                name: 'main.Instruction.special',
                id: 52
              },
              {
                state: 'freezeAccount',
                name: 'main.Instruction.freezeAccount',
                id: 53
              },
              // {
              //   state: 'reminderInstruction',
              //   name: 'Reminder Instruction',
              //   id: 54
              // },
              // {
              //   state: 'revokeStandingInstructions',
              //   name: 'Revoke Standing Instructions',
              //   id: 55
              // }, {
              //   state: 'revokeInterestInstruction',
              //   name: 'Revoke Interest Instruction',
              //   id: 56
              // },
              // {
              //   state: 'revokeSpecialInstruction',
              //   name: 'Revoke Special Instruction',
              //   id: 57
              // },
              {
                state: 'lienMarkClear',
                name: 'main.Instruction.lienMarkClear',
                id: 58
              },
            ]

          },
          // {
          //   state: 'Investment',
          //   short_label: 'D',
          //   name: 'Investment',
          //   type: 'sub',
          //   id:59,
          //   children: [
          //     {
          //       state: 'accountOpening',
          //       name: 'Account Opening',
          //       id:60
          //     },
          //     {
          //       state: 'transactionEntry',
          //       name: 'Transaction Entry',
          //       id:61
          //     },
          //     {
          //       state: 'accountClosing',
          //       name: 'Account Closing',
          //       id:62
          //     },
          //     {
          //       state: 'accountOpenPassing',
          //       name: 'Account Open Passing',
          //       id:63
          //     },
          //     {
          //       state: 'transactionPassing',
          //       name: 'Transaction Passing',
          //       id:64
          //     },
          //     {
          //       state: 'accountClosePassing',
          //       name: 'Account Close Passing',
          //       id:65
          //     },
          //   ]
          // },
          {
            state: 'Shares',
            name: 'main.Shares.Shares',
            short_label: 'D',
            type: 'sub',
            id: 66,
            children: [
              // {
              //   state: 'unpaidDividendEntry',
              //   name: 'Unpaid Dividend Entry',
              //   id: 67
              // },
              {
                state: 'yearWiseUnpaidDividendEntry',
                name: 'main.Shares.yearWiseUnpaidDividendEntry',
                id: 68
              },
              {
                state: 'dividendTransferEntry',
                name: 'main.Shares.dividendTransferEntry',
                id: 69
              },
              {
                state: 'dividendCalculation',
                name: 'main.Shares.dividendCalculation',
                id: 70
              },
              {
                state: 'dividendPosting',
                name: 'main.Shares.dividendPosting',
                id: 71
              },
              {
                state: 'dividendTransferPosting',
                name: 'main.Shares.dividendTransferPosting',
                id: 72
              },
              {
                state: 'generalmeetpresentmem',
                name: 'main.Shares.generalmeetpresentmem',
                id: 367
              },
            ]

          },
          // {
          //   state: 'SignatureScanning',
          //   name: 'SignatureScanning',
          //   id:73
          // },
          // {
          //   state: 'DDBankCityMaster',
          //   name: 'DDBankCityMaster',
          //   id: 74
          // },

        ]
      },
      {
        state: 'transaction',
        short_label: 'D',
        name: 'TEST.transaction',
        type: 'sub',
        icon: 'fa fa-money',
        id: 75,
        children: [
          {
            state: 'voucherEntry',
            name: 'main.transaction.voucherEntry',
            id: 76
          },
          {
            state: 'multiVoucher',
            name: 'main.transaction.multiVoucher',
            id: 77
          },
          {
            state: 'batchVoucher',
            name: 'main.transaction.batchVoucher',
            id: 78
          },
          {
            state: 'pigmyChartEntry',
            name: 'main.transaction.pigmyChartEntry',
            id: 79
          },
          {
            state: 'deadStockPurchase',
            name: 'main.transaction.deadStockPurchase',
            id: 80
          },
          {
            state: 'deadStockTransaction',
            name: 'main.transaction.deadStockTransaction',
            id: 81
          },

          {
            state: 'reconciliationEntry',
            name: 'main.transaction.reconciliationEntry',
            id: 82
          },
          {
            state: 'savingspigmyaccountclosing',
            name: 'main.transaction.savingspigmyaccountclosing',
            id: 83
          },
          {
            state: 'termDepositAccountClosing',
            name: 'main.transaction.termDepositAccountClosing',
            id: 84
          },
          {
            state: 'TermDepositeAcRenewal',
            name: 'main.transaction.TermDepositeAcRenewal',
            id: 85
          },
          {
            state: 'investmentAccountRenewal',
            name: 'main.transaction.investmentAccountRenewal',
            id: 375
          },
          {
            state: 'cashCreditAcRenewal',
            name: 'main.transaction.cashCreditAcRenewal',
            id: 86
          },
          {
            state: 'shareTransactions',
            name: 'main.transaction.shareTransactions',
            id: 87
          },

          {
            state: 'locker',
            name: 'main.transaction.locker.locker',
            short_label: 'L',
            type: 'sub',
            id: 88,
            children: [
              {
                state: 'lockerOpenTransaction',
                name: 'main.transaction.locker.lockerOpenTransaction',
                id: 89
              },
              {
                state: 'lockerCloseTransaction',
                name: 'main.transaction.locker.lockerCloseTransaction',
                id: 90
              },
              {
                state: 'lockerRentTransaction',
                name: 'main.transaction.locker.lockerRentTransaction',
                id: 91
              },
              // {
              //   state: 'cashOutDenomination',
              //   name: 'main.transaction.cashDenomination.cashOutDenomination',
              //   id: 92
              // },
              // {
              //   state: 'cashInitialisationEntry',
              //  name: 'main.transaction.cashDenomination.cashInitialisationEntry',
              //   id: 93
              // },
              // {
              //   state: 'safeValultToCashier',
              //   name: 'Safe Valult To Cashier',
              //   id: 94
              // },
              // {
              //   state: 'cashierToSafeVault',
              // name: 'main.transaction.cashDenomination.cashierToSafeVault',
              //   id: 95
              // },
            ]
          },
          {
            state: 'cashDenomination',
            name: 'main.transaction.cashDenomination.cashDenomination',
            short_label: 'D',
            type: 'sub',
            id: 96,
            children: [
              {
                state: 'acceptD',
                name: 'main.transaction.cashDenomination.acceptD',
                id: 97
              },
              {
                state: 'paymentDenomination',
                name: 'main.transaction.cashDenomination.paymentDenomination',
                id: 98
              },
              {
                state: 'cashInDenomination',
                name: 'main.transaction.cashDenomination.cashInDenomination',
                id: 99
              },
              {
                state: 'cashOutDenomination',
                name: 'main.transaction.cashDenomination.cashOutDenomination',
                id: 100
              },
              {
                state: 'cashInitialisationEntry',
                name: 'main.transaction.cashDenomination.cashInitialisationEntry',
                id: 101
              },
              {
                state: 'safeValultToCashier',
                name: 'main.transaction.cashDenomination.safeValultToCashier',
                id: 102
              },
              {
                state: 'cashierToSafeVault',
                name: 'main.transaction.cashDenomination.cashierToSafeVault',
                id: 103
              },
            ]
          },
          // {
          //   state: 'cashier',
          //   name: 'Cashier',
          //   id: 104
          // },


          {
            state: 'goldsilverreturnentry',
            name: 'main.transaction.goldsilverreturnentry',
            id: 111
          },
          {
            state: 'memberDAPDT',
            name: 'main.transaction.memberDAPDT',
            id: 112
          },
          {
            state: 'memberTransfer',
            name: 'main.transaction.memberTransfer.memberTransfer',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 113,
            children: [
              {
                state: 'MemberTransferTransaction',
                name: 'main.transaction.memberTransfer.MemberTransferTransaction',
                id: 114
              },

              {
                state: 'BranchAndSalaryDC',
                name: 'main.transaction.memberTransfer.BranchAndSalaryDC',
                id: 115
              },

              // {
              //   state: 'TrasferredMemberOB',
              //   name: 'Trasferred Member Opening Balances',
              //   id: 116
              // },
            ]
          },

          {
            state: 'recovery',
            name: 'main.transaction.recovery.recovery',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 117,
            children: [
              {
                state: 'recoveryProcessing',
                name: 'main.transaction.recovery.recoveryProcessing',
                id: 118
              },
              {
                state: 'recoveryModification',
                name: 'main.transaction.recovery.recoveryModification',
                id: 119
              },
              {
                state: 'recoveryPosting',
                name: 'main.transaction.recovery.recoveryPosting',
                id: 120
              },
              {
                state: 'recoveryDataImportExport',
                name: 'main.transaction.recovery.recoveryDataImportExport',
                id: 121
              },
            ]
          },

          {
            state: 'memberLoan',
            name: 'main.transaction.memberLoan.memberLoan',
            short_label: 'D',
            type: 'sub',
            id: 122,
            children: [
              {
                state: 'loanApplication',
                name: 'main.transaction.memberLoan.loanApplication',
                id: 123
              },
              {
                state: 'loanSanction',
                name: 'main.transaction.memberLoan.loanSanction',
                id: 124
              }
            ]
          },
          {
            state: 'ddtransaction',
            name: 'main.transaction.memberLoan.ddtransaction',

            id: 125
          },
          {
            state: 'dividendPay',
            name: 'main.transaction.dividendPay.dividendPay',
            short_label: 'D',
            type: 'sub',
            id: 126,
            children: [
              {
                state: 'dividendPaidMarkSD',
                name: 'main.transaction.dividendPay.dividendPaidMarkSD',
                id: 127
              },
              {
                state: 'dividendPaidSD',
                name: 'main.transaction.dividendPay.dividendPaidSD',
                id: 128
              },
            ]
          },
          {
            state: 'cashRecoveryTransaction',
            name: 'main.transaction.cashRecoveryTransaction',
            id: 129
          },
          {
            state: 'consolidationTransaction',
            name: 'main.transaction.consolidationTransaction',
            id: 130
          },
          {
            state: 'inwardRegister',
            name: 'main.transaction.inwardRegister',
            id: 131
          },
        ]
      },
     
      {
        state: 'passing',
        short_label: 'D',
        name: 'main.passing.passing',
        type: 'sub',
        icon: 'fa fa-check-square-o',
        id: 132,
        children: [
          {
            state: 'centralisedPassing',
            name: 'main.passing.centralisedPassing',
            id: 133
          },

          // {
          //   state: 'sharesTransactionPassing',
          //   name: 'Shares Transaction Passing',
          //   id: 134
          // },

          {
            state: 'unapprove',
            name: 'main.passing.unapprove',
            id: 135
          },
          {
            state: 'neftPassing',
            name: 'main.passing.neftPassing',
            id: 354
          },
        ]
      },
      {
        state: 'neftRtgs',
        short_label: 'D',

        name: 'main.neftRtgs.Services ',
        type: 'sub',
        icon: 'fa fa-money',
        id: 349,
        children: [
          {
            state: 'neftTransfer',
            name: 'main.neftRtgs.neftTransfer ',
            id: 350
          },
          {
            state: 'rtgsTransfer',
            name: 'main.neftRtgs.rtgsTransfer ',

            id: 351
          },
          {
            state: 'billPayment',
            name: 'main.neftRtgs.billPayment ',
            id: 352
          },
          {
            state: 'fundTransfer',
            name: 'main.neftRtgs.fundTransfer ',
            id: 353
          },
          {
            state: 'cibilScore',
            name: 'main.neftRtgs.cibilScore ',
            id: 380
          },
        ]
      },
      {
        state: 'view',
        short_label: 'D',
        name: 'main.view.view',
        type: 'sub',
        icon: 'fa fa-book',
        id: 136,
        children: [
          {
            state: 'accountEnquiry',
            name: 'main.view.accountEnquiry',
            id: 137
          },
          {
            state: 'ledgerView',
            name: 'main.view.ledgerView',
            id: 138
          },
          {
            state: 'sharesLedgerView',
            name: 'main.view.sharesLedgerView',
            id: 139
          },
          {
            state: 'voucherView',
            name: 'main.view.voucherView',
            id: 140
          },
          {
            state: 'customerView',
            name: 'main.view.customerView',
            id: 141
          },
          {
            state: 'guarantorView',
            name: 'main.view.guarantorView',
            id: 142
          },
          {
            state: 'memberView',
            name: 'main.view.memberView',
            id: 143
          },
          {
            state: 'masterCard',
            name: 'main.view.masterCard',
            id: 144
          },
          {
            state: 'memberLiablityView',
            name: 'main.view.memberLiablityView',
            id: 145
          },
          {
            state: 'otherView',
            name: 'main.view.otherView',
            id: 146
          },
          {
            state: 'managerView',
            name: 'main.view.managerView',
            id: 147

          },
          {
            state: 'lockerView',
            name: 'main.view.lockerView',
            id: 348

          },
          {
            state: 'memberguaranter',
            name: 'main.view.memberguaranter',
            id: 368

          },
          {
            state: 'KYCDocument',
            name: 'KYC Document',
            id: 382

          },
        ],

      },
      {
        state: 'printing',
        short_label: 'D',
        name: 'main.printing.printing',
        type: 'sub',
        icon: 'fa fa-print',
        id: 347,
        children: [
          {
            state: 'voucherPrint',
            name: 'main.printing.voucherPrint',
            id: 110,

          },
          {
            state: 'termDepositReceiptPrinting',
            name: 'main.printing.termDepositReceiptPrinting',
            // short_label: 'D',
            // type: 'sub',
            id: 108,
            // children: [
            //   {
            //     state: 'depositReceiptPrint',
            //     name: 'Deposit Receipt Print',
            //     id: 109
            //   },
            // ]
          },
          {
            state: 'tDReceiptPrinting',
            name: 'main.printing.tDReceiptPrinting',
            id: 377,
          },
          {
            state: 'goldSilverReceipt',
            name: 'main.printing.goldSilverReceipt',
            id: 344
          },
          {
            state: 'passbookPrinting',
            name: 'main.printing.passbookPrinting',
            short_label: 'D',
            type: 'sub',
            id: 105,
            children: [
              {
                state: 'passbookIssue',
                name: 'main.printing.passbookIssue',
                id: 106
              },
              {
                state: 'passbookEntryPrint',
                name: 'main.printing.passbookEntryPrint',
                id: 107
              },

            ]
          },
          // {
          //   state: 'tDReceiptPrinting',
          //   name: 'TD Receipt Printing',
          //   id: 368,
          // },

        ]
      },
      {
        state: 'reports',
        short_label: 'D',
        name: 'main.reports.reports',
        type: 'sub',
        icon: 'fa fa-file-text-o',
        id: 148,
        children: [
          // {
          //   state: 'allReportsWithSearching',
          //   name: 'All Reports With Searching',
          //   id: 149
          // },
          ////////////////////////////
          {
            state: 'dailyReports',
            name: 'main.reports.dailyReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 150,
            children: [
              // {
              //   state: 'BnkDayBookSummary',
              //   name: 'Day Book Detail/Summary',
              //    id: 151
              // },
              {
                state: 'TFormDayBookComponent',
                name: 'main.reports.TFormDayBookComponent',
                id: 152
              },
              {
                state: 'BnkSubsidaryDetail',
                name: 'main.reports.BnkSubsidaryDetail',

                id: 153
              },
              {
                state: 'BnkScrollDetailBoth',
                name: 'main.reports.BnkScrollDetailBoth',
                id: 154
              },
              {
                state: 'IntInstructionExecutionFailure',
                name: 'main.reports.IntInstructionExecutionFailure',
                id: 155
              },
              {
                state: 'StandingInstExecutionFailure',
                name: 'main.reports.StandingInstExecutionFailure',
                id: 156
              },
              {
                state: 'StandingInstExecutionCredit',
                name: 'main.reports.StandingInstExecutionCredit',
                id: 157
              },
              {
                state: 'StandingInstExecutionDebit',
                name: 'main.reports.StandingInstExecutionDebit',
                id: 158
              },
              {
                state: 'IntInstructExecutionCredit',
                name: 'main.reports.IntInstructExecutionCredit',
                id: 159
              },
              {
                state: 'IntInstructExecutionDebit',
                name: 'main.reports.IntInstructExecutionDebit',
                id: 160
              },

              {
                state: 'otherSubsidiary',
                name: 'main.reports.otherSubsidiary',
                id: 341
              },
              {
                state: 'SubsidiarySummery',
                name: 'main.reports.SubsidiarySummery',
                id: 342
              },

            ]
          },
          //
          {
            state: 'statement',
            name: 'main.statement.statement',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 163,
            children: [
              {
                state: 'BnkGlAcStatement',
                name: 'main.statement.BnkGlAcStatement',
                id: 164
              },
              {
                state: 'BnkAcStatement',
                name: 'main.statement.BnkAcStatement',
                id: 165
              },
              {
                state: 'BnkLNamtStatement',
                name: 'main.statement.BnkLNamtStatement',
                id: 166
              },
              {
                state: 'BnkTDStatement',
                name: 'main.statement.BnkTDStatement',
                id: 167
              },
              // {
              //   state: 'BnkGlIntStatement',
              //   name: 'General Ledger interest list',
              //   id: 168
              // },
              // {
              //   state: 'BnkMemStatement',
              //   name: 'Member Statement',
              //   id: 169
              // },
            ]
          },
          //
          {
            state: 'balanceBook',
            name: 'main.balanceBook.balanceBook',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 170,
            children: [
              {
                state: 'BnkDedskBalList',
                name: 'main.balanceBook.BnkDedskBalList',
                id: 171
              },
              // {
              //   state: 'BnkLedgerABTypeList',
              //   name: 'Leadger Balance List A,B type Member Loan and Deposit',
              //   id: 172
              // },
              {
                state: 'BnkACBalBook',
                name: 'main.balanceBook.BnkACBalBook',
                id: 173
              },
              {
                state: 'BnkACBalList',
                name: 'main.balanceBook.BnkACBalList',
                id: 174
              },
              {
                state: 'BnkCustIDBalList',
                name: 'main.balanceBook.BnkCustIDBalList',
                id: 175
              },
              {
                state: 'BnkGLConsistRepo',
                name: 'main.balanceBook.BnkGLConsistRepo',
                id: 176
              },
              {
                state: 'BnkReceiveIntList',
                name: 'main.balanceBook.BnkReceiveIntList',
                id: 177
              },
              {
                state: 'BnkPayIntList',
                name: 'main.balanceBook.BnkPayIntList',
                id: 178
              },
              {
                state: 'BnkDedskBalListDepre',
                name: 'main.balanceBook.BnkDedskBalListDepre',
                id: 179
              },
              {
                state: 'BnkDptAMList',
                name: 'main.balanceBook.BnkDptAMList',
                id: 180
              },
              {
                state: 'CatbalList',
                name: 'main.balanceBook.CatbalList',
                id: 181
              },
              {
                state: 'DebbalReport',
                name: 'main.balanceBook.DebbalReport',
                id: 182
              },

              // {
              //   state:'Bnkbalcon',
              //   name:'balance confirmation certificate',
              //   id:183
              // },
              // {
              //    state:'Srtballist',
              //    name:'Short Balance List',
              //    id:184
              // },

              {
                state: 'AmountBalList',
                name: 'main.balanceBook.AmountBalList',
                id: 185
              },
              {
                state: 'DeadStockDepCatList',
                name: 'main.balanceBook.DeadStockDepCatList',
                id: 186
              },
              {
                state: 'BalConCertificate',
                name: 'main.balanceBook.BalConCertificate',
                id: 187
              },
              {
                state: 'shortballist',
                name: 'main.balanceBook.shortballist',
                id: 188
              },

            ]
          },
          //
          {
            state: 'registers',
            name: 'main.registers.registers',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 189,
            children: [
              {
                state: 'BnkRegAccount',
                name: 'main.registers.BnkRegAccount',
                id: 190
              },
              {
                state: 'BnkRegStandingInstruction',
                name: 'main.registers.BnkRegStandingInstruction',
                id: 191
              },
              {
                state: 'BnkRegInterestInstruction',
                name: 'main.registers.BnkRegInterestInstruction',
                id: 192
              },
              {
                state: 'BnkRegSpecialInstruction',
                name: 'main.registers.BnkRegSpecialInstruction',
                id: 193
              },
              {
                state: 'BnkRegInsurence',
                name: 'main.registers.BnkRegInsurence',
                id: 194
              },
              {
                state: 'BnkODRegister',
                name: 'main.registers.BnkODRegister',
                id: 195
              },
              {
                state: 'BnkRegDeadStock',
                name: 'main.registers.BnkRegDeadStock',
                id: 196
              },
              {
                state: 'BnkIVOpenAndCloseReg',
                name: 'main.registers.BnkIVOpenAndCloseReg',
                id: 197
              },
              {
                state: 'BnkRegGoldSilverSubReturn',
                name: 'main.registers.BnkRegGoldSilverSubReturn',
                id: 198
              },
              {
                state: 'DepositReceiptRegister',
                name: 'main.registers.DepositReceiptRegister',
                id: 199
              },
              {
                state: 'lockerRentRegister',
                name: 'main.registers.lockerRentRegister',
                id: 200
              },
              {
                state: 'lockerRegister',
                name: 'main.registers.lockerRegister',
                id: 201
              },
              {
                state: 'excessCashBalance',
                name: 'main.registers.excessCashBalance',
                id: 202
              },
              {
                state: 'KYCDocReceivedNotRec',
                name: 'main.registers.kycdocumentreceivednotreceived',
                id: 378
              },

            ]
          },
          //
          {
            state: 'Termdeposit',
            name: 'main.Termdeposit.Termdeposit',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 203,
            children: [
              {
                state: 'maturedbutnotpaid',
                name: 'main.Termdeposit.maturedbutnotpaid',
                id: 204
              },
              {
                state: 'maturedbutnotclosed',
                name: 'main.Termdeposit.maturedbutnotclosed',
                id: 205
              },
              {
                state: 'depositpaidlist',
                name: 'main.Termdeposit.depositpaidlist',
                id: 206
              },
              {
                state: 'intratewisebalancelist',
                name: 'main.Termdeposit.intratewisebalancelist',
                id: 207
              },
              {
                state: 'custidwiseintpaidlist',
                name: 'main.Termdeposit.custidwiseintpaidlist',
                id: 208
              },
              {
                state: 'custidwiseloaninterestCertificate',
                name: 'main.Termdeposit.custidwiseloaninterestCertificate',
                id: 209
              },
              {
                state: 'IntRatewiseMaturityList',
                name: 'main.Termdeposit.IntRatewiseMaturityList',
                id: 210
              },
              {
                state: 'custidwisedepositlist',
                name: 'main.Termdeposit.custidwisedepositlist',
                id: 211
              },
              {
                state: 'tddetailrecurroverdue',
                name: 'main.Termdeposit.tddetailrecurroverdue',
                id: 212
              },
              {
                state: 'prematuredAcCloselist',
                name: 'main.Termdeposit.prematuredAcCloselist',
                id: 213
              },
              {
                state: 'renewalDepositList',
                name: 'main.Termdeposit.renewalDepositList',
                id: 214
              },
              {
                state: 'directorwiseDepositlist',
                name: 'main.Termdeposit.directorwiseDepositlist',
                id: 215
              },
              {
                state: 'custidwiseInterestList',
                name: 'main.Termdeposit.custidwiseInterestList',
                id: 216
              },
              {
                state: 'custidwiseMaturedList',
                name: 'main.Termdeposit.custidwiseMaturedList',
                id: 217
              },
              {
                state: 'abtypeDepositList',
                name: 'main.Termdeposit.abtypeDepositList',
                id: 218
              },



            ]

          },

          {
            state: 'SharesReports',
            name: 'main.SharesReports.SharesReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 219,
            children: [
              {
                state: 'cityMemberList',
                name: 'main.SharesReports.cityMemberList',
                id: 220
              },

              {
                state: 'dividendPaidList',
                name: 'main.SharesReports.dividendPaidList',
                id: 221
              },
              {
                state: 'sharesIssueRegister',
                name: 'main.SharesReports.sharesIssueRegister',
                id: 222
              },
              {
                state: 'sharesReturnRegister',
                name: 'main.SharesReports.sharesReturnRegister',
                id: 223
              },
              {
                state: 'sharesTransferRegister',
                name: 'main.SharesReports.sharesTransferRegister',
                id: 224
              },
              {
                state: 'unpaidDividendList',
                name: 'main.SharesReports.unpaidDividendList',
                id: 225
              },
              {
                state: 'monthlyRecoveryPrint',
                name: 'main.SharesReports.monthlyRecoveryPrint',
                id: 226
              },
              {
                state: 'monthlyRecoverySubsidiary',
                name: 'main.SharesReports.monthlyRecoverySubsidiary',
                id: 227
              }
            ]
          },


          //
          // {
          //   state: 'denominationReports',
          //   name: 'Denomination Reports',
          //   id: 228
          // },

          //
          // {
          //   state: 'loanReports',
          //   name: 'Loan Reports',
          //   id: 229
          // },
          {
            state: 'LoanReport',
            name: 'main.LoanReport.LoanReport',
            short_label: 'D',
            type: 'sub',
            id: 230,
            children: [
              // {
              //   state: 'loanoverduelist',
              //   name: 'Loan Overdue List',
              //   type: 'sub',
              //   id: 231,

              // },
              {
                state: 'loansecurityreport',
                name: 'main.LoanReport.loansecurityreport',
                type: 'sub',
                id: 232,

              },
              {
                state: 'citiwiseLoanBalancereport',
                name: 'main.LoanReport.citiwiseLoanBalancereport',
                type: 'sub',
                id: 233,
              },
              {
                state: 'lcdLessdraftReport',
                name: 'main.LoanReport.lcdLessdraftReport',
                type: 'sub',
                id: 234,
              },
              {
                state: 'lcdOverdraftReport',
                name: 'main.LoanReport.lcdOverdraftReport',
                type: 'sub',
                id: 235,
              },
              {
                state: 'lcd-renewal-list',
                name: 'main.LoanReport.lcd-renewal-list',
                type: 'sub',
                id: 236,
              },
              {
                state: 'lcd-turnover-list',
                name: 'main.LoanReport.lcd-turnover-list',
                type: 'sub',
                id: 237,
              },
              {
                state: 'penalinterestlist',
                name: 'main.LoanReport.penalinterestlist',
                type: 'sub',
                id: 238,
              },
              {
                state: 'pendingStockStatementlist',
                name: 'main.LoanReport.pendingStockStatementlist',
                type: 'sub',
                id: 239,
              },
              {
                state: 'receivedStockstatementList',
                name: 'main.LoanReport.receivedStockstatementList',
                type: 'sub',
                id: 240,
              },
              {
                state: 'recoverycwBalanceList',
                name: 'main.LoanReport.recoverycwBalanceList',
                type: 'sub',
                id: 241,
              },
              {
                state: 'receivableInstallInterest',
                name: 'main.LoanReport.receivableInstallInterest',
                type: 'sub',
                id: 242,
              },
              {
                state: 'loanExpiredList',
                name: 'main.LoanReport.loanExpiredList',
                type: 'sub',
                id: 343,
              },
              {
                state: 'loanduecertificate',
                name: 'main.LoanReport.loanduecertificate',
                type: 'sub',
                id: 355,
              },
              {
                state: 'CourtwiseDisputeLoandetail',
                name: 'main.LoanReport.CourtwiseDisputeLoandetail',
                type: 'sub',
                id: 369,
              },
              {
                state: 'CourtwiseDisputeList',
                name: 'main.LoanReport.CourtwiseDisputeList',
                type: 'sub',
                id: 370,
              },
              {
                state: 'DisputeLoanList',
                name: 'main.LoanReport.DisputeLoanList',
                type: 'sub',
                id: 371,
              },
              {
                state: 'loanCCACSanctionDatewise',
                name: 'main.LoanReport.loanCCACSanctionDatewise',
                type: 'sub',
                id: 372,
              },
              {
                state: 'healthCodewise',
                name: 'main.LoanReport.healthCodewise',
                type: 'sub',
                id: 373,
              },
            ],

          },


          {
            state: 'npaReports',
            name: 'main.npaReports.npaReports',
            short_label: 'D',
            type: 'sub',
            id: 243,
            children: [
              {
                state: 'loanoverduelist',
                name: 'main.npaReports.loanoverduelist',
                type: 'sub',
                id: 252,

              },
              {
                state: 'npaRegister',
                name: 'main.npaReports.npaRegister',
                id: 244
              },
              {
                state: 'npaRegPercentage',
                name: 'main.npaReports.npaRegPercentage',
                id: 245
              },
              {
                state: 'nonNpaRecovery',
                name: 'main.npaReports.nonNpaRecovery',
                id: 246
              },
              {
                state: 'directorwise',
                name: 'main.npaReports.directorwise',
                id: 247
              },
              {
                state: 'citiwisenpa',
                 name: 'main.npaReports.citiwisenpa',
                type: 'sub',
                id: 248,

              },
              {
                state: 'analysisnpa',
                name: 'main.npaReports.analysisnpa',
                type: 'sub',
                id: 249,

              },
              {
                state: 'classificationsecnpa',
                  name: 'main.npaReports.classificationsecnpa',
                type: 'sub',
                id: 250,
              },
              {
                state: 'classificationstandardnpa',
              name: 'main.npaReports.classificationstandardnpa',
                type: 'sub',
                id: 251,
              },



            ],
          },
          //
          //
          // {
          //   state: 'nottice',
          //   name: 'Nottice',
          //   id: 252
          // },
          {
            state: 'nottice',
            name: 'main.nottice.nottice',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 362,
            children: [
              {
                state: 'noticereport',
                name: 'main.nottice.noticereport',
                id: 364
              },
              {
                state: 'noticeformat',
                name: 'main.nottice.noticeformat',

                id: 365
              },
              {
                state: 'blankNotice',
                name: 'Blank Notice Format',
                id: 366
              },
              {
                state: 'showNotice',
                name: 'Get Notice Format',
                id: 367
              },
            ]
          },
          // //
          // {
          //   state: 'Report_Frame',
          //   name: 'Report Frame',
          //   id: 253
          // },
          //
          {
            state: 'nottice',
            name: 'main.nottice.nottice',

            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 362,
            children: [
              {
                state: 'noticereport',
                name: 'main.nottice.noticereport',

                id: 363
              },
              {
                state: 'noticeformat',
                name: 'main.nottice.noticeformat',

                id: 364
              },
              {
                state: 'blankNotice',
                name: 'main.nottice.blankNotice',

                id: 365
              },
              {
                state: 'showNotice',
                name: 'Get Notice Format',
                id: 366
              },
            ]
          },
          {
            state: 'PigmyReport',
             name: 'main.PigmyReport.PigmyReport',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 254,
            children: [
              {
                state: 'BnkPigmyCollectionChart',
               name: 'main.PigmyReport.BnkPigmyCollectionChart',
                id: 255
              },
              {
                state: 'BnkPigmyBalanceList',
              name: 'main.PigmyReport.BnkPigmyBalanceList',
                id: 256
              },
              {
                state: 'BnkPigmyBalanceBook',
                 name: 'main.PigmyReport.BnkPigmyBalanceBook',
                id: 257
              },
              {
                state: 'BnkPigmyBlankChart',
              name: 'main.PigmyReport.BnkPigmyBlankChart',
                id: 258
              },
              {
                state: 'BnkPigmyCommissionRepo',
               name: 'main.PigmyReport.BnkPigmyCommissionRepo',
                id: 259
              },
              {
                state: 'pigmyhandbook',
                name: 'main.PigmyReport.pigmyhandbook',
                id: 260
              },
              {
                state: 'pigmymaturedAclist',
                name: 'main.PigmyReport.pigmymaturedAclist',
                id: 261
              },
            ]
          },
          //
          {
            state: 'otherReports',
            short_label: 'D',
            name: 'main.otherReports.otherReports',
            type: 'sub',
            icon: 'icon-home',
            id: 262,
            children: [
              {
                state: 'BnkMinorsList',
             name: 'main.otherReports.BnkMinorsList',
                id: 263
              },
              {
                state: 'BnkNomineeList',
                name: 'main.otherReports.BnkNomineeList',
                id: 264
              },
              {
                state: 'BnkGuaranterList',
                 name: 'main.otherReports.BnkGuaranterList',
                id: 265
              },
              {
                state: 'BnkLienMarkedAcList',
                 name: 'main.otherReports.BnkLienMarkedAcList',
                id: 266
              },
              // {
              //   state: 'BnkDormantAcList',
              //   name: 'main.otherReports.dormantAccountList',
              //   id: 267
              // },
              {
                state: 'BnkAmountMovement',
                name: 'main.otherReports.BnkAmountMovement',
                id: 268
              },
              {
                state: 'BnkDepAmountMovementDetail',
                name: 'main.otherReports.BnkDepAmountMovementDetail',
                id: 269
              },
              {
                state: 'BnkLNAmountMovementDetail',
                name: 'main.otherReports.BnkLNAmountMovementDetail',
                id: 270
              },
              {
                state: 'BnkGurDetailsList',
                name: 'main.otherReports.BnkGurDetailsList',
                id: 271
              },
              {
                state: 'BnkNonGuaranteerView',
                name: 'main.otherReports.BnkNonGuaranteerView',
                id: 272
              },
              {
                state: 'custidIntroducerList',
                name: 'main.otherReports.custidIntroducerList',
                id: 273
              },
              {
                state: 'serviceChargeList',
                name: 'main.otherReports.serviceChargeList',
                id: 274
              },
              {
                state: 'minorToMajorlist',
                name: 'main.otherReports.minorToMajorlist',
                id: 275
              },
              {
                state: 'tranLessAclist',
                name: 'main.otherReports.tranLessAclist',
                id: 276
              },
              {
                state: 'dormantAccountList',
                name: 'main.otherReports.dormantAccountList',
                id: 277
              },

            ]
          },
          //
          {
            state: 'misReports',
            name: 'main.misReports.misReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 278,
            children: [
              {
                state: 'loanBalanceBetTwoDates',
                name: 'main.misReports.loanBalanceBetTwoDates',
                id: 356
              },
              {
                state: 'excessCashBalance',
                name: 'main.registers.excessCashBalance',
                id: 280
              },
              {
                state: 'swnidhi',
                name: 'main.misReports.swnidhi',
                id: 376
              },
              {
                state: 'MISInfo',
                name: 'main.misReports.MISInfo',
                id: 377
              },
              {
                state: 'expensive',
                name: 'main.misReports.expensive',
                id: 381
              }
            ]
          },
          //
          {
            state: 'managerViewReports',
             name: 'main.managerViewReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 281
          },
          //
          {
            state: 'finalReports',
           name: 'main.finalReports.finalReports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 282,
            children: [
              {
                state: 'BnkTrialBal',
               name: 'main.finalReports.BnkTrialBal',
                id: 283
              },
              {
                state: 'BnkTrialBaldetail',
                name: 'main.finalReports.BnkTrialBaldetail',
                id: 284
              },
              {
                state: 'BalanceSheet',
               name: 'main.finalReports.BalanceSheet',
                id: 285
              },
              {
                state: 'NBalanceSheet',
                 name: 'main.finalReports.NBalanceSheet',
                id: 286
              },
              {
                state: 'ProfitLossAccount',
                  name: 'main.finalReports.ProfitLossAccount',
                id: 287
              },
              {
                state: 'NProfitLoss',
              name: 'main.finalReports.NProfitLoss',
                id: 288
              },
              {
                state: 'RecePayRep',
                name: 'main.finalReports.RecePayRep',
                id: 289
              },
              {
                state: 'RecePayRepDetails',
                 name: 'main.finalReports.RecePayRepDetails',
                id: 290
              },

            ]
          },
          {
            state: 'RecoveryReport',
            name: 'main.RecoveryReport.RecoveryReport',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 291,
            children: [
              {
                state: 'memberAckReport',
                   name: 'main.RecoveryReport.memberAckReport',
                id: 292
              },


            ]
          },
        ]
      },
      {
        state: 'utility',
        short_label: 'D',
       name: 'main.utility.utility',
        type: 'sub',
        icon: 'fa fa-university',
        id: 293,
        children: [

          // {
          //   state: 'backDatedDO',
          //   name: 'Back Dated Day Open',
          //   id: 299
          // },
          // {
          //   state: 'receiptPrintingD',
          //   name: 'Receipt Printing Designing',
          //   id: 300
          // },

          {
            state: 'interestPosting',
              name: 'main.utility.interestPosting.interestPosting',
            short_label: 'D',
            type: 'sub',
            id: 302,
            children: [
              {
                state: 'interestCalculation',
                  name: 'main.utility.interestPosting.interestCalculation',
                id: 303
              },

              {
                state: 'interestPassing',
               name: 'main.utility.interestPosting.interestPassing',
                id: 304
              },
              {
                state: 'interestList',
                 name: 'main.utility.interestPosting.interestList',
                id: 305
              },
            ]
          },

          {
            state: 'pigmyMachineProcess',
            name: 'Pigmy Machine Process',
            id: 307
          },

          {
            state: 'monthRecProc',
            name: 'Monthly Recovery Process',
            id: 357
          },
          {
            state: 'whatsappmessages',
            name: 'Whatsapp Messages',
            id: 345
          },
          {
            state: 'deadStockP',
            name: 'main.utility.deadStockP',
            id: 309
          },
          {
            state: 'dividend',
            name: 'main.utility.dividend.dividend',
            short_label: 'D',
            type: 'sub',
            id: 310,
            children: [
              {
                state: 'dividendList',
              name: 'main.utility.dividend.dividendList',
                id: 311
              },
              {
                state: 'dividendPost',
                 name: 'main.utility.dividend.dividendPost',
                id: 312
              }
            ]
          },
          {
            state: 'statementHeadInsert',
           name: 'main.utility.statementHeadInsert',
            id: 313
          },


          {
            state: 'roleDefination',
            name: 'main.utility.roleDefination',
            id: 315
          },
          {
            state: 'roleMaster',
           name: 'main.utility.roleMaster',
            id: 316
          },
          {
            state: 'userDefination',
            name: 'main.utility.userDefination',
            id: 317
          },
          {
            state: 'cashierMaintance',
            name: 'main.utility.cashierMaintance',
            id: 318
          },
          {
            state: 'cashierUM',
             name: 'main.utility.cashierUM',
            id: 319
          },
          {
            state: 'sharesCCTS',
              name: 'main.utility.sharesCCTS',
            id: 320
          },
          // {
          //   state: 'silverJACTS',
          //   name: 'Silver Jubilee Amount Credit To Shares',
          //   id: 321
          // },
          // {
          //   state: 'masikBDW',
          //   name: 'Masik Bachat Deposit Withdrawl',
          //   id: 322
          // },
          {
            state: 'schemeATE',
              name: 'main.utility.schemeATE',
            id: 323
          },
          {
            state: 'schemeParameters',
            name: 'main.utility.schemeParameters',
            id: 324
          },
          {
            state: 'calculator',
            name: 'main.utility.calculator',
            id: 325
          },
          // {
          //   state: 'remindMe',
          //   name: 'Remind Me',
          //   id: 326
          // },

          {
            state: 'pataSevaSupportR',
            name: 'main.utility.pataSevaSupportR',
            id: 328
          },
          {
            state: 'sharesDataEI',
             name: 'main.utility.sharesDataEI',
            id: 329
          },
          // {
          //   state: 'dayBookIE',
          //   name: 'Daybook Import / Export',
          //   id: 330
          // },
          {
            state: 'demandDraftDEI',
            name: 'main.utility.demandDraftDEI',
            id: 331
          },
          {
            state: 'gmaMemberUpdation',
          name: 'main.utility.gmaMemberUpdation',
            id: 332
          },
          {
            state: 'amtTransferTransaction',
           name: 'main.utility.amtTransferTransaction',
            id: 333
          },
          {
            state: 'recAmtTrToGL',
            name: 'main.utility.recAmtTrToGL',
            id: 334
          },
          {
            state: 'conversion',
           name: 'main.utility.conversion',
            id: 374
          },
          {
            state: 'remainder',
            name: 'main.utility.remainder',
            id: 379
          },
        ]
      },
      {
        state: 'process',
        short_label: 'D',
        name: 'TEST.process',
        type: 'sub',
        icon: 'fa fa-tasks',
        id: 346,
        children: [
          {
            state: 'dayBegin',
           name: 'main.process.dayBegin',
            id: 294
          },
          {
            state: 'dayEnd',
            name: 'main.process.dayEnd.dayEnd',
            short_label: 'D',
            type: 'sub',
            id: 295,
            children: [
              {
                state: 'counterWorkDayEnd',
               name: 'main.process.dayEnd.counterWorkDayEnd',
                id: 296
              },
              {
                state: 'FinalDayEnd',
                name: 'main.process.dayEnd.FinalDayEnd',
                id: 297
              },
              {
                state: 'pigmyDayEnd',
               name: 'main.process.dayEnd.pigmyDayEnd',
                id: 298
              },
              {
                state: 'yearEnd',
               name: 'main.process.dayEnd.yearEnd',
                id: 299
              },
            ]
          },
          {
            state: 'pigmyAppProcess',
            name: 'main.process.pigmyAppProcess',
            id: 308
          },
          {
            state: 'holiday',
             name: 'main.process.holiday',
            id: 301
          },


          {
            state: 'processACM',
          name: 'main.process.processACM',
            id: 306
          },

          {
            state: 'deadStockP',
             name: 'main.process.deadStockP',
            id: 309
          },
          {
            state: 'dataBackup',
             name: 'main.process.dataBackup',
            id: 327
          },
          {
            state: 'monthlyrecoveryprocess',
            name: 'main.process.monthlyrecoveryprocess',

            id: 360
          },
          {
            state: 'yearEndBranchwise',
            name: 'main.process.yearEndBranchwise',
            id: 361
          },
          
        ]
      },
      {
        state: 'windows',
        short_label: 'D',
       name: 'TEST.windows',
        type: 'sub',
        icon: 'icon-home',
        id: 335,
        children: [
          {
            state: 'casecade',
            name: 'main.process.windows.casecade',
            id: 336
          },
          {
            state: 'tileHorizontaily',
             name: 'main.process.windows.tileHorizontaily',
            id: 337
          },
          {
            state: 'tileVertically',
           name: 'main.process.windows.tileVertically',
            id: 338
          },

        ]
      },
      {
        state: 'hotKeys',
        short_label: 'D',
        name: 'main.process.hotKeys',
        type: 'link',
        icon: 'fa fa-key',
        id: 339
      },
      {
        state: 'exit',
        short_label: 'D',
       name: 'main.process.exit',
        type: 'link',
        icon: 'fa fa-sign-out',
        id: 340
      },
      // {
      //   state: 'navigation',
      //   short_label: 'N',
      //   name: 'Navigation',
      //   type: 'link',
      //   icon: 'icon-layout-cta-right'
      // },
      // {
      //   state: 'widget',
      //   short_label: 'W',
      //   name: 'Widget',
      //   type: 'sub',
      //   icon: 'icon-view-grid',
      //   badge: [
      //     {
      //       type: 'danger',
      //       value: '100+'
      //     }
      //   ],
      //   children: [
      //     {
      //       state: 'statistic',
      //       name: 'Statistic'
      //     },
      //     {
      //       state: 'data',
      //       name: 'Data'
      //     },
      //     {
      //       state: 'chart',
      //       name: 'Chart'
      //     },
      //     {
      //       state: 'advanced',
      //       name: 'Advance'
      //     }
      //   ]
      // }
    ],
  },
  //   {
  //     label: 'UI Element',
  //     main: [
  //       {
  //         state: 'basic',
  //         short_label: 'B',
  //         name: 'Basic',
  //         type: 'sub',
  //         icon: 'icon-layout-grid2-alt',
  //         children: [
  //           {
  //             state: 'alert',
  //             name: 'Alert'
  //           },
  //           {
  //             state: 'breadcrumb',
  //             name: 'Breadcrumbs'
  //           },
  //           {
  //             state: 'button',
  //             name: 'Button'
  //           },
  //           {
  //             state: 'box-shadow',
  //             name: 'Box-Shadow'
  //           },
  //           {
  //             state: 'accordion',
  //             name: 'Accordion'
  //           },
  //           {
  //             state: 'generic-class',
  //             name: 'Generic Class'
  //           },
  //           {
  //             state: 'tabs',
  //             name: 'Tabs'
  //           },
  //           {
  //             state: 'color',
  //             name: 'Color'
  //           },
  //           {
  //             state: 'label-badge',
  //             name: 'Label Badge'
  //           },
  //           {
  //             state: 'progressbar',
  //             name: 'Progressbar'
  //           },
  //           {
  //             state: 'pre-loader',
  //             name: 'Pre-Loader'
  //           },
  //           {
  //             state: 'list',
  //             name: 'List'
  //           },
  //           {
  //             state: 'tooltip',
  //             name: 'Tooltip & Popover'
  //           },
  //           {
  //             state: 'typography',
  //             name: 'Typography'
  //           },
  //           {
  //             state: 'other',
  //             name: 'Other'
  //           },
  //         ]
  //       },
  //       {
  //         state: 'advance',
  //         short_label: 'A',
  //         name: 'Advance',
  //         type: 'sub',
  //         icon: 'icon-crown',
  //         children: [
  //           {
  //             state: 'task-board',
  //             name: 'Task Board'
  //           },
  //           {
  //             state: 'grid-stack',
  //             name: 'Grid Stack'
  //           },
  //           /*{
  //             state: 'light-box',
  //             name: 'Light Box'
  //           },*/
  //           {
  //             state: 'modal',
  //             name: 'Modal'
  //           },
  //           {
  //             state: 'notifications',
  //             name: 'Notifications'
  //           },
  //           /*{
  //             state: 'notify',
  //             name: 'PNOTIFY',
  //             badge: [
  //               {
  //                 type: 'info',
  //                 value: 'New'
  //               }
  //             ]
  //           },*/
  //           {
  //             state: 'rating',
  //             name: 'Rating'
  //           },
  //           {
  //             state: 'range-slider',
  //             name: 'Range Slider'
  //           },
  //           /*{
  //             state: 'slider',
  //             name: 'Slider'
  //           },*/
  //           /*{
  //             state: 'tour',
  //             name: 'Tour'
  //           },*/
  //           /*{
  //             state: 'tree',
  //             name: 'Tree View'
  //           }*/
  //         ]
  //       },
  //       /*{
  //         state: 'animations',
  //         short_label: 'A',
  //         name: 'Animations',
  //         type: 'link',
  //         icon: 'icon-reload rotate-refresh'
  //       }*/
  //     ]
  //   },
  //   {
  //     label: 'Forms',
  //     main: [
  //       {
  //         state: 'forms',
  //         short_label: 'F',
  //         name: 'Form',
  //         type: 'sub',
  //         icon: 'icon-layers',
  //         children: [
  //           {
  //             state: 'basic',
  //             name: 'Components'
  //           }, {
  //             state: 'add-on',
  //             name: 'Add-On'
  //           }, {
  //             state: 'advance',
  //             name: 'Advance'
  //           }, {
  //             state: 'frm-validation',
  //             name: 'Validation'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'picker',
  //         short_label: 'P',
  //         main_state: 'forms',
  //         name: 'Form Picker',
  //         type: 'link',
  //         icon: 'icon-pencil-alt'
  //       },
  //       {
  //         state: 'mask',
  //         short_label: 'M',
  //         main_state: 'forms',
  //         name: 'Form Mask',
  //         type: 'link',
  //         icon: 'feather icon-package',
  //         badge: [
  //           {
  //             type: 'warning',
  //             value: 'New'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'select',
  //         short_label: 'S',
  //         main_state: 'forms',
  //         name: 'Form Select',
  //         type: 'link',
  //         icon: 'icon-shortcode'
  //       },
  //       {
  //         state: 'form-wizards',
  //         short_label: 'FW',
  //         main_state: 'forms',
  //         name: 'Form Wizard',
  //         type: 'link',
  //         icon: 'feather icon-user'
  //       },
  //       {
  //         state: 'ngx',
  //         short_label: 'NFW',
  //         main_state: 'forms',
  //         name: 'NGX Form Wizard',
  //         type: 'link',
  //         icon: 'feather icon-list'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Tables',
  //     main: [
  //       {
  //         state: 'bootstrap-table',
  //         short_label: 'B',
  //         name: 'Bootstrap Table',
  //         type: 'sub',
  //         icon: 'icon-receipt',
  //         children: [
  //           {
  //             state: 'basic',
  //             name: 'Basic Table'
  //           }, {
  //             state: 'sizing',
  //             name: 'Sizing Table'
  //           }, {
  //             state: 'border',
  //             name: 'Border Table'
  //           }, {
  //             state: 'styling',
  //             name: 'Styling Table'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'data-table',
  //         short_label: 'D',
  //         name: 'Data Table',
  //         type: 'link',
  //         icon: 'icon-widgetized'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Chart And Map',
  //     main: [
  //       {
  //         state: 'charts',
  //         short_label: 'C',
  //         name: 'Charts',
  //         type: 'sub',
  //         icon: 'icon-bar-chart-alt',
  //         children: [
  //           {
  //             state: 'google',
  //             name: 'Google'
  //           }, {
  //             state: 'chart-js',
  //             name: 'ChartJS'
  //           }, {
  //             state: 'radial',
  //             name: 'Radial'
  //           }, {
  //             state: 'c3-js',
  //             name: 'C3 JS'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'map',
  //         short_label: 'M',
  //         name: 'Maps',
  //         type: 'sub',
  //         icon: 'icon-map-alt',
  //         children: [
  //           {
  //             state: 'google',
  //             name: 'Google'
  //           }
  //         ]
  //       },
  //       /*{
  //         state: 'landing',
  //         short_label: 'L',
  //         external: 'http://html.phoenixcoded.net/mega-able-5/default/landingpage',
  //         name: 'Landing Page',
  //         type: 'external',
  //         icon: 'icon-mobile',
  //         target: true
  //       }*/
  //     ]
  //   },
  //   {
  //     label: 'Pages',
  //     main: [
  //       {
  //         state: 'auth',
  //         short_label: 'A',
  //         name: 'Authentication',
  //         type: 'sub',
  //         icon: 'icon-id-badge',
  //         children: [
  //           {
  //             state: 'login',
  //             type: 'sub',
  //             name: 'Login Pages',
  //             children: [
  //               {
  //                 state: 'simple',
  //                 name: 'Simple',
  //                 target: true
  //               }, {
  //                 state: 'header-footer',
  //                 name: 'Header & Footer',
  //                 target: true
  //               }, {
  //                 state: 'social',
  //                 name: 'Social Icon',
  //                 target: true
  //               }, {
  //                 state: 'social-header-footer',
  //                 name: 'Social Header & Footer',
  //                 target: true
  //               }
  //             ]
  //           }, {
  //             state: 'registration',
  //             type: 'sub',
  //             name: 'Registration Pages',
  //             children: [
  //               {
  //                 state: 'simple',
  //                 name: 'Simple',
  //                 target: true
  //               }, {
  //                 state: 'header-footer',
  //                 name: 'Header & Footer',
  //                 target: true
  //               }, {
  //                 state: 'social',
  //                 name: 'Social',
  //                 target: true
  //               }, {
  //                 state: 'social-header-footer',
  //                 name: 'Social Header & Footer',
  //                 target: true
  //               }
  //             ]
  //           },
  //           {
  //             state: 'forgot',
  //             name: 'Forgot Password',
  //             target: true
  //           },
  //           {
  //             state: 'lock-screen',
  //             name: 'Lock Screen',
  //             target: true
  //           },
  //         ]
  //       },
  //       {
  //         state: 'maintenance',
  //         short_label: 'A',
  //         name: 'Maintenance',
  //         type: 'sub',
  //         icon: 'icon-settings',
  //         children: [
  //           {
  //             state: 'error',
  //             short_label: 'A',
  //             name: 'Error Pages',
  //             type: 'sub',
  //             icon: 'feather icon-alert-triangle',
  //             children: [
  //               {
  //                 state: '400',
  //                 name: 'Error 400',
  //                 target: true
  //               },
  //               {
  //                 state: '403',
  //                 name: 'Error 403',
  //                 target: true
  //               },
  //               {
  //                 state: '404',
  //                 name: 'Error 404',
  //                 target: true
  //               },
  //               {
  //                 state: '500',
  //                 name: 'Error 500',
  //                 target: true
  //               },
  //               {
  //                 state: '503',
  //                 name: 'Error 503',
  //                 target: true
  //               }
  //             ]
  //           },
  //           {
  //             state: 'coming-soon',
  //             short_label: 'CS',
  //             name: 'Coming Soon',
  //             type: 'link',
  //             icon: 'feather icon-upload-cloud',
  //             target: true
  //           },
  //           {
  //             state: 'offline-ui',
  //             name: 'Offline UI',
  //             target: true
  //           }
  //         ]
  //       },
  //       {
  //         state: 'user',
  //         short_label: 'U',
  //         name: 'User Profile',
  //         type: 'sub',
  //         icon: 'icon-user',
  //         children: [
  //           {
  //             state: 'profile',
  //             name: 'User Profile'
  //           }, {
  //             state: 'card',
  //             name: 'User Card'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'email',
  //         short_label: 'E',
  //         name: 'Email',
  //         type: 'sub',
  //         icon: 'feather icon-email',
  //         children: [
  //           {
  //             state: 'email-compose',
  //             name: 'Compose Email'
  //           }, {
  //             state: 'email-inbox',
  //             name: 'Inbox'
  //           }, {
  //             state: 'email-read',
  //             name: 'Read Mail'
  //           }, {
  //             state: 'email-template',
  //             name: 'Email Template',
  //             type: 'sub',
  //             children: [
  //               {
  //                 state: 'email-welcome',
  //                 name: 'Welcome Email',
  //                 target: true
  //               },
  //               {
  //                 state: 'email-reset-password',
  //                 name: 'Reset Password',
  //                 target: true
  //               },
  //               {
  //                 state: 'email-newsletter',
  //                 name: 'Newsletter Email',
  //                 target: true
  //               },
  //               {
  //                 state: 'app-launch',
  //                 name: 'App Launch',
  //                 target: true
  //               },
  //               {
  //                 state: 'activation-code',
  //                 name: 'Activation Code',
  //                 target: true
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     label: 'App',
  //     main: [
  //       {
  //         state: 'crm-contact',
  //         name: 'CRM Contact',
  //         type: 'link',
  //         icon: 'feather icon-user'
  //       },
  //       {
  //         state: 'task',
  //         short_label: 'T',
  //         name: 'Task',
  //         type: 'sub',
  //         icon: 'icon-check-box',
  //         children: [
  //           {
  //             state: 'list',
  //             name: 'Task List'
  //           }, {
  //             state: 'board',
  //             name: 'Task Board'
  //           }, {
  //             state: 'details',
  //             name: 'Task Details'
  //           }, {
  //             state: 'issue',
  //             name: 'Issue List'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Extension',
  //     main: [
  //       {
  //         state: 'editor',
  //         name: 'Editor',
  //         type: 'sub',
  //         icon: 'feather icon-pencil',
  //         children: [
  //           {
  //             state: 'tinymce',
  //             name: 'Tinymce Editor'
  //           },
  //           {
  //             state: 'wysiwyg',
  //             name: 'Pell Wysiwyg Editor'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'invoice',
  //         short_label: 'I',
  //         name: 'Invoice',
  //         type: 'sub',
  //         icon: 'icon-layout-media-right',
  //         children: [
  //           {
  //             state: 'basic',
  //             name: 'Invoice'
  //           }, {
  //             state: 'summary',
  //             name: 'Invoice Summary'
  //           }, {
  //             state: 'list',
  //             name: 'Invoice List'
  //           }
  //         ]
  //       },
  //       {
  //         state: 'file-upload-ui',
  //         short_label: 'F',
  //         name: 'File Upload',
  //         type: 'link',
  //         icon: 'icon-cloud-up'
  //       },
  //       {
  //         state: 'full-event-calendar',
  //         short_label: 'EC',
  //         name: 'Event Calendar',
  //         type: 'link',
  //         icon: 'feather icon-calendar'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Other',
  //     main: [
  //       {
  //         state: '',
  //         short_label: 'M',
  //         name: 'Menu Levels',
  //         type: 'sub',
  //         icon: 'icon-direction-alt',
  //         children: [
  //           {
  //             state: '',
  //             name: 'Menu Level 2.1',
  //             target: true
  //           }, {
  //             state: '',
  //             name: 'Menu Level 2.2',
  //             type: 'sub',
  //             children: [
  //               {
  //                 state: '',
  //                 name: 'Menu Level 2.2.1',
  //                 target: true
  //               },
  //               {
  //                 state: '',
  //                 name: 'Menu Level 2.2.2',
  //                 target: true
  //               }
  //             ]
  //           }, {
  //             state: '',
  //             name: 'Menu Level 2.3',
  //             target: true
  //           }, {
  //             state: '',
  //             name: 'Menu Level 2.4',
  //             type: 'sub',
  //             children: [
  //               {
  //                 state: '',
  //                 name: 'Menu Level 2.4.1',
  //                 target: true
  //               },
  //               {
  //                 state: '',
  //                 name: 'Menu Level 2.4.2',
  //                 target: true
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         state: 'simple-page',
  //         short_label: 'S',
  //         name: 'Sample Page',
  //         type: 'link',
  //         icon: 'icon-layout-sidebar-left'
  //       }
  //     ]
  //  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  getMenu() {
    return MENUITEMS1[0].main
  }
}
