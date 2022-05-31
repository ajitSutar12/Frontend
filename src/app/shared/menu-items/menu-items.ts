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

        children: [
          {
            state: 'default',
            short_label: 'D',
            name: 'Default',
            type: 'sub',
            children: [
              {
                state: 'demo',
                name: 'Demo'
              },
              {
                state: 'demo1',
                name: 'Demo1',
                target: false
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
        name: 'Master',
        type: 'sub',
        icon: 'icon-home',
        id: 1,
        children: [
          {
            state: 'generalLedger',
            name: 'General Ledger',
            short_label: 'D',
            type: 'sub',
            id: 2,
            children: [
              {
                state: 'gl-statement-code',
                name: 'GL Statement Code',
                id: 3
              },
              {
                state: 'gl-accounts-master',
                name: 'GL Accounts Master',
                id: 4
              },
              {
                state: 'gl-report-master',
                name: 'GL Report Master',
                id: 5
              },
              {
                state: 'gl-report-linking',
                name: 'GL Report Linking',
                id: 6
              },
              {
                state: 'budget-master',
                name: 'Budget Allocation Master',
                id: 7
              },
            ]

          },
          {
            state: 'customer',
            name: 'Customer',
            short_label: 'D',
            type: 'sub',
            id: 8,
            children: [
              {
                state: 'customerId',
                name: 'Customer Id',
                id: 9
              },
              {
                state: 'sharesMaster',
                name: 'Shares Master',
                id: 10
              },
              {
                state: 'anamatGSM',
                name: 'Anamat / General Sub Master',
                id: 11
              },
              {
                state: 'savingMaster',
                name: 'Saving Master',
                id: 12
              },
              {
                state: 'currentAccountMaster',
                name: 'Current Account Master',
                id: 13
              },
              {
                state: 'termDepositsMaster',
                name: 'Term Deposits Master',
                id: 14
              },
              {
                state: 'cashCreditMaster',
                name: 'Cash Credit Master',
                id: 15
              },
              {
                state: 'termLoanMaster',
                name: 'Term Loan Master',
                id: 16
              },
              {
                state: 'disputeLoanMaster',
                name: 'Dispute Loan Master',
                id: 17
              },
              {
                state: 'pigmyAgentMaster',
                name: 'Pigmy Agent Master',
                id: 18
              },
              {
                state: 'pigmyAccountMaster',
                name: 'Pigmy Account Master',
                id: 19
              },
              {
                state: 'deadStockMaster',
                name: 'Dead Stock Master',
                id: 20
              },
              {
                state: 'accountOpening',
                name: 'Investment Master',
                id: 52
              },
            ]
          },
          {
            state: 'balanceEntry',
            short_label: 'D',
            name: 'Balance Entry',
            type: 'sub',
            id: 21,
            children: [
              {
                state: 'balanceUpdation',
                name: 'Balance Updation',
                id: 22
              },
              {
                state: 'reconciliationOTE',
                name: 'Reconciliation Opening Transaction Entry',
                id: 23
              },
              {
                state: 'reconciliationTE',
                name: 'Reconciliation Transaction Entry',
                id: 24
              },
              {
                state: 'loanieacdu',
                name: 'Loan Installment Edit and Close Date Updation',
                id: 25
              },
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
            name: 'Policy Settings',
            short_label: 'D',
            type: 'sub',
            id: 26,
            children: [
              {
                state: 'information',
                name: 'Information',
                id: 27
              },
              {
                state: 'definations',
                name: 'Definations',
                id: 28
              },
              {
                state: 'sizewiseBalanceModification',
                name: 'Sizewise Balance Modification',
                id: 29
              },
              {
                state: 'tDReceiptTypeMaster',
                name: 'TD Receipt Type Master',
                id: 30
              },
              {
                state: 'nPAClassificationSlabMaster',
                name: 'NPA Classification Slab Master ',
                id: 31
              },
            ]
          },
          {
            state: 'Maintainance',
            name: 'Maintainance',
            short_label: 'D',
            type: 'sub',
            id: 32,
            children: [
              {
                state: 'securityDetails',
                name: 'Security Details',
                id: 33
              },
              {
                state: 'loanAndCCInterestRateChanges',
                name: 'Loan And CC Interest Rate Changes',
                id: 34
              },
              {
                state: 'depositLoanInterestRateEditChange',
                name: 'Deposit / Loan Interest Rate Edit / Change',
                id: 35
              },
              {
                state: 'npaOpeningDetailsEntry',
                name: 'NPA Opening Details Entry',
                id: 36
              },
              {
                state: 'interestPostingFlagUpdation',
                name: 'Interest Posting Flag Updation',
                id: 37
              },
              {
                state: 'accountwiseDocumentAcceptance',
                name: 'Accountwise Document Acceptance',
                id: 38
              },
              {
                state: 'notingCharges',
                name: 'Noting Charges',
                id: 39
              },
              {
                state: 'tdsformsubmission',
                name: 'TDS Form Submission',
                id: 185
              },
              {
                state: 'moratoriumperiodmaster',
                name: 'Moratorium Period Master',
                id: 187
              }
            ]

          },
          {
            state: 'Instruction',
            name: 'Instruction',
            short_label: 'D',
            type: 'sub',
            id: 40,
            children: [
              {
                state: 'overDraft',
                name: 'Over Draft',
                id: 41
              },
              {
                state: 'standingInstruction',
                name: 'Standing Instruction',
                id: 42
              },
              {
                state: 'interestInstruction',
                name: 'Interest Instruction',
                id: 43
              },
              {
                state: 'special',
                name: 'Special',
                id: 44
              },
              {
                state: 'freezeAccount',
                name: 'Freeze Account',
                id: 45
              },
              {
                state: 'reminderInstruction',
                name: 'Reminder Instruction',
                id: 46
              },
              {
                state: 'revokeStandingInstructions',
                name: 'Revoke Standing Instructions',
                id: 47
              }, {
                state: 'revokeInterestInstruction',
                name: 'Revoke Interest Instruction',
                id: 48
              },
              {
                state: 'revokeSpecialInstruction',
                name: 'Revoke Special Instruction',
                id: 49
              },
              {
                state: 'lienMarkClear',
                name: 'Lien Mark Clear',
                id: 50
              },
            ]

          },
          // {
          //   state: 'Investment',
          //   short_label: 'D',
          //   name: 'Investment',
          //   type: 'sub',
          //   id:51,
          //   children: [
          //     {
          //       state: 'accountOpening',
          //       name: 'Account Opening',
          //       id:52
          //     },
          //     {
          //       state: 'transactionEntry',
          //       name: 'Transaction Entry',
          //       id:53
          //     },
          //     {
          //       state: 'accountClosing',
          //       name: 'Account Closing',
          //       id:54
          //     },
          //     {
          //       state: 'accountOpenPassing',
          //       name: 'Account Open Passing',
          //       id:55
          //     },
          //     {
          //       state: 'transactionPassing',
          //       name: 'Transaction Passing',
          //       id:56
          //     },
          //     {
          //       state: 'accountClosePassing',
          //       name: 'Account Close Passing',
          //       id:57
          //     },
          //   ]
          // },
          {
            state: 'Shares',
            name: 'Shares/Dividend',
            short_label: 'D',
            type: 'sub',
            id: 58,
            children: [
              {
                state: 'unpaidDividendEntry',
                name: 'Unpaid Dividend Entry',
                id: 58
              },
              {
                state: 'yearWiseUnpaidDividendEntry',
                name: 'Year Wise Unpaid Dividend Entry',
                id: 59
              },
              {
                state: 'dividendTransferEntry',
                name: 'Dividend Transfer Instruction',
                id: 60
              },
              {
                state: 'dividendTransferPosting',
                name: 'Dividend Transfer Posting',
                id: 61
              },
              {
                state: 'dividendCalculation',
                name: 'Dividend Calculation',
                id: 62
              },
              {
                state: 'dividendPosting',
                name: 'Dividend Posting',
                id: 63
              },
            ]

          },
          // {
          //   state: 'SignatureScanning',
          //   name: 'SignatureScanning',
          //   id:64
          // },
          {
            state: 'DDBankCityMaster',
            name: 'DDBankCityMaster',
            id: 65
          },

        ]
      },
      {
        state: 'transaction',
        short_label: 'D',
        name: 'Transaction',
        type: 'sub',
        icon: 'icon-home',
        id: 66,
        children: [
          {
            state: 'voucherEntry',
            name: 'Voucher Entry',
            id: 67
          },
          {
            state: 'multiVoucher',
            name: 'Multi Voucher',
            id: 68
          },
          {
            state: 'batchVoucher',
            name: 'Batch Transfer Voucher',
            id: 69
          },
          {
            state: 'memberDAPDT',
            name: 'Member Dividend And Payable Dividend Transaction ',
            id: 70
          },
          {
            state: 'memberTransfer',
            name: 'Member Transfer',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 71,
            children: [
              {
                state: 'MemberTransferTransaction',
                name: 'Member Transfer Transaction',
                id: 72
              },

              {
                state: 'BranchAndSalaryDC',
                name: 'Branch And Salary Division Changes',
                id: 73
              },

              {
                state: 'TrasferredMemberOB',
                name: 'Trasferred Member Opening Balances',
                id: 74
              },
            ]
          },
          {
            state: 'recovery',
            name: 'Recovery',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 75,
            children: [
              {
                state: 'recoveryProcessing',
                name: 'Recovery Processing',
                id: 76
              },
              {
                state: 'recoveryModification',
                name: 'Recovery Modification',
                id: 77
              },
              {
                state: 'recoveryPosting',
                name: 'Recovery Posting',
                id: 78
              },
              {
                state: 'recoveryDataImportExport',
                name: 'Recovery Data Import Export',
                id: 79
              },
            ]
          },
          {
            state: 'memberLoan',
            name: 'Member Loan',
            short_label: 'D',
            type: 'sub',
            id: 80,
            children: [
              {
                state: 'loanApplication',
                name: 'Loan Application',
                id: 81
              },
              {
                state: 'loanSanction',
                name: 'Loan Sanction',
                id: 82
              }
            ]
          },
          {
            state: 'dDTransaction',
            name: 'DD Transaction',
            id: 83
          },
          {
            state: 'pigmyChartEntry',
            name: 'Pigmy Chart Entry',
            id: 84
          },
          {
            state: 'dividendPay',
            name: 'Dividend Pay',
            short_label: 'D',
            type: 'sub',
            id: 85,
            children: [
              {
                state: 'dividendPaidMarkSD',
                name: 'Dividend Paid Mark(Salary Division)',
                id: 86
              },
              {
                state: 'dividendPaidSD',
                name: 'Dividend Pay(Salary Division)',
                id: 87
              },
            ]
          },
          {
            state: 'cashCreditAcRenewal',
            name: 'Cash Credit A/c Renewal',
            id: 88
          },
          {
            state: 'shareTransactions',
            name: 'Share Transaction',
            id: 89
          },
          {
            state: 'termDepositAccountClosing',
            name: 'Term Deposit Account Closing',
            id: 90
          },
          {
            state: 'TermDepositeAcRenewal',
            name: 'Term Deposite A/c Renewal',
            id: 91
          },

          {
            state: 'cashDenomination',
            name: 'Cash Denomination',
            short_label: 'D',
            type: 'sub',
            id: 92,
            children: [
              {
                state: 'acceptD',
                name: 'Accept Denomination',
                id: 93
              },
              {
                state: 'paymentDenomination',
                name: 'Payment Denomination',
                id: 94
              },
              {
                state: 'cashInDenomination',
                name: 'Cash In Denomination',
                id: 95
              },
              {
                state: 'cashOutDenomination',
                name: 'Cash Out Denomination',
                id: 96
              },
              {
                state: 'cashInitialisationEntry',
                name: 'cash Initialisation Entry',
                id: 97
              },
              {
                state: 'safeValultToCashier',
                name: 'Safe Valult To Cashier',
                id: 98
              },
              {
                state: 'cashierToSafeVault',
                name: 'Cashier To Safe Vault',
                id: 100
              },
            ]
          },

          {
            state: 'locker',
            name: 'Locker Transaction',
            short_label: 'L',
            type: 'sub',
            id: 190,
            children: [
              {
                state: 'lockerOpenTransaction',
                name: 'Locker Open Transaction',
                id: 191
              },
              {
                state: 'lockerDepositAccountMaster',
                name: 'Locker Deposit Account Master',
                id: 192
              },
              {
                state: 'lockerRentTransaction',
                name: 'Locker Rent Transaction',
                id: 193
              },
              // {
              //   state: 'cashOutDenomination',
              //   name: 'Cash Out Denomination',
              //   id: 96
              // },
              // {
              //   state: 'cashInitialisationEntry',
              //   name: 'cash Initialisation Entry',
              //   id: 97
              // },
              // {
              //   state: 'safeValultToCashier',
              //   name: 'Safe Valult To Cashier',
              //   id: 98
              // },
              // {
              //   state: 'cashierToSafeVault',
              //   name: 'Cashier To Safe Vault',
              //   id: 100
              // },
            ]
          },
          {
            state: 'cashier',
            name: 'Cashier',
            id: 194
          },
          {
            state: 'passbookPrinting',
            name: 'Passbook Printing',
            short_label: 'D',
            type: 'sub',
            id: 101,
            children: [
              {
                state: 'passbookIssue',
                name: 'Passbook Issue',
                id: 102
              },
              {
                state: 'passbookEntryPrint',
                name: 'Passbook Entry Print',
                id: 103
              }
            ]
          },
          {
            state: 'termDepositReceiptPrinting',
            name: 'Term Deposit Receipt Printing',
            short_label: 'D',
            type: 'sub',
            id: 104,
            children: [
              {
                state: 'depositReceiptPrint',
                name: 'Deposit Receipt Print',
                id: 105
              },
            ]
          },
          {
            state: 'deadStockPurchase',
            name: 'Dead Stock Purchase',
            id: 106
          },
          {
            state: 'deadStockTransaction',
            name: 'Dead Stock Transaction',
            id: 107
          },
          {
            state: 'reconciliationEntry',
            name: 'Reconciliation Entry',
            id: 108
          },
          {
            state: 'savingspigmyaccountclosing',
            name: 'Savings-Pigmy Account Closing',
            id: 189
          },
          {
            state: 'goldsilverreturnentry',
            name: 'Gold/Silver Return Entry',
            id: 190
          },
        ]
      },
      {
        state: 'passing',
        short_label: 'D',
        name: 'Passing',
        type: 'sub',
        icon: 'icon-home',
        id: 109,
        children: [
          {
            state: 'centralisedPassing',
            name: 'Centralised Passing',
            id: 110
          },

          {
            state: 'sharesTransactionPassing',
            name: 'Shares Transaction Passing',
            id: 111
          },
          {
            state: 'unapproval',
            name: 'Unapproval',
            short_label: 'D',
            type: 'sub',
            id: 112,
            children: [
              {
                state: 'unapprovalMultivoucher',
                name: 'Unapproval Multivoucher',
                id: 113
              },
              {
                state: 'unapprovalVoucher',
                name: 'Unapproval Voucher',
                id: 114
              },
              {
                state: 'unapprovalDepositClosing',
                name: 'Unapproval Deposit Closing',
                id: 115
              },
              {
                state: 'unapprovalDepositPosting',
                name: 'Unapproval Deposit Posting',
                id: 116
              },
            ]
          },
          //
          {
            state: 'masterUnlock',
            name: 'Master Unlock',
            id: 117
          },
        ]
      },
      {
        state: 'view',
        short_label: 'D',
        name: 'View',
        type: 'sub',
        icon: 'icon-home',
        id: 118,
        children: [
          {
            state: 'accountEnquiry',
            name: 'Account Enquiry',
            id: 119
          },
          {
            state: 'ledgerView',
            name: 'Ledger View',
            id: 120
          },
          {
            state: 'sharesLedgerView',
            name: 'Shares Ledger View',
            id: 121
          },
          {
            state: 'voucherView',
            name: 'Voucher View',
            id: 122
          },
          {
            state: 'customerView',
            name: 'Customer View',
            id: 123
          },
          {
            state: 'guarantorView',
            name: 'Guarantor View',
            id: 124
          },
          {
            state: 'memberView',
            name: 'Member View',
            id: 125
          },
          {
            state: 'masterCard',
            name: 'Master Card',
            id: 126
          },
          {
            state: 'memberLiablityView',
            name: 'Member Liablity View',
            id: 127
          },
          {
            state: 'otherView',
            name: 'Other View',
            id: 128
          },
          {
            state: 'managerView',
            name: 'Manager View',
            id: 188
           
          },
        ],

      },
      {
        state: 'reports',
        short_label: 'D',
        name: 'Reports',
        type: 'sub',
        icon: 'icon-home',
        id: 129,
        children: [
          {
            state: 'allReportsWithSearching',
            name: 'All Reports With Searching',
            id: 129
          },
          ////////////////////////////
          {
            state: 'dailyReports',
            name: 'Daily Reports',
            id: 130
          },
          //
          {
            state: 'statement',
            name: 'Statement',
            id: 131
          },
          //
          {
            state: 'balanceBook',
            name: 'Balance Book',
            id: 132
          },
          //
          {
            state: 'registers',
            name: 'Registers',
            id: 133
          },
          //
          {
            state: 'denominationReports',
            name: 'Denomination Reports',
            id: 134
          },
          //
          {
            state: 'termDepositReports',
            name: 'Term Deposit Reports',
            id: 135
          },
          //
          {
            state: 'loanReports',
            name: 'Loan Reports',
            id: 136
          },
          //
          {
            state: 'npaReports',
            name: 'NPA Reports',
            id: 137
          },
          //
          {
            state: 'sharesARR',
            name: 'Shares ARR',
            id: 138
          },
          //
          {
            state: 'sharesADR',
            name: 'Shares ADR',
            id: 139
          },
          //
          {
            state: 'nottice',
            name: 'Nottice',
            id: 140
          },
          //
          {
            state: 'otherReports',
            name: 'Other Reports',
            id: 141
          },
          //
          {
            state: 'misReports',
            name: 'MIS Reports',
            id: 142
          },
          //
          {
            state: 'finalReports',
            name: 'Final Reports',
            id: 143
          },
        ]
      },
      {
        state: 'utility',
        short_label: 'D',
        name: 'Utility',
        type: 'sub',
        icon: 'icon-home',
        id: 144,
        children: [
          {
            state: 'dayBegin',
            name: 'Day Begin',
            id: 145
          },
          {
            state: 'dayEnd',
            name: 'Day End',
            short_label: 'D',
            type: 'sub',
            id: 146,
            children: [
              {
                state: 'counterWorkDayEnd',
                name: 'counter Work Day End',
                id: 147
              },

              {
                state: 'pigmyDayEnd',
                name: 'pigmy Day End',
                id: 148
              },
            ]
          },
          {
            state: 'backDatedDO',
            name: 'Back Dated Day Open',
            id: 149
          },
          {
            state: 'receiptPrintingD',
            name: 'Receipt Printing Designing',
            id: 150
          },
          {
            state: 'holiday',
            name: 'Holiday',
            id: 151
          },
          {
            state: 'interestPosting',
            name: 'Interest Posting',
            short_label: 'D',
            type: 'sub',
            id: 152,
            children: [
              {
                state: 'interestCalculation',
                name: 'Interest Calculation',
                id: 153
              },
              {
                state: 'interestList',
                name: 'Interest List',
                id: 154
              },
              {
                state: 'interestPassing',
                name: 'Interest Passing',
                id: 155
              },
            ]
          },
          {
            state: 'processACM',
            name: 'Process And Calculation Menu',
            id: 156
          },
          {
            state: 'pigmyMachineProcess',
            name: 'Pigmy Machine Process',
            id: 183
          },
          {
            state: 'deadStockP',
            name: 'Dead Stock Process',
            id: 157
          },
          {
            state: 'dividend',
            name: 'Dividend',
            short_label: 'D',
            type: 'sub',
            id: 158,
            children: [
              {
                state: 'dividendList',
                name: 'Dividend List',
                id: 159
              },
              {
                state: 'dividendPost',
                name: 'Dividend Post',
                id: 160
              }
            ]
          },
          {
            state: 'statementHeadInsert',
            name: 'Statement Head Insert',
            id: 161
          },

          {
            state: 'changePassword',
            name: 'Change Password',
            id: 162
          },
          {
            state: 'roleDefination',
            name: 'Role Defination',
            id: 163
          },
          {
            state: 'roleMaster',
            name: 'Role Master',
            id: 184
          },
          {
            state: 'userDefination',
            name: 'User Defination',
            id: 164
          },
          {
            state: 'cashierUM',
            name: 'Cashier User Maintainance',
            id: 165
          },
          {
            state: 'sharesCCTS',
            name: 'Shares Contribution Credit To Shares',
            id: 166
          },
          {
            state: 'silverJACTS',
            name: 'Silver Jubilee Amount Credit To Shares',
            id: 167
          },
          {
            state: 'masikBDW',
            name: 'Masik Bachat Deposit Withdrawl',
            id: 168
          },
          {
            state: 'schemeATE',
            name: 'Scheme Amount Transfer Entry',
            id: 169
          },
          {
            state: 'schemeParameters',
            name: 'Scheme Parameters',
            id: 170
          },
          {
            state: 'calculator',
            name: 'Calculator',
            id: 171
          },
          {
            state: 'remindMe',
            name: 'Remind Me',
            id: 172
          },
          {
            state: 'dataBackup',
            name: 'Data Backup',
            id: 173
          },
          {
            state: 'pataSevaSupportR',
            name: 'PataSeva Support Register',
            id: 174
          },
          {
            state: 'sharesDataEI',
            name: 'Sheres Data Export / Import',
            id: 175
          },
          {
            state: 'dayBookIE',
            name: 'Daybook Import / Export',
            id: 176
          },
          {
            state: 'demandDraftDEI',
            name: 'Demand Draft Data Export/ Import',
            id: 177
          },
        ]
      },
      {
        state: 'windows',
        short_label: 'D',
        name: 'Windows',
        type: 'sub',
        icon: 'icon-home',
        id: 178,
        children: [
          {
            state: 'casecade',
            name: 'CaseCade',
            id: 179
          },
          {
            state: 'tileHorizontaily',
            name: 'Tile Horizontaily',
            id: 180
          },
          {
            state: 'tileVertically',
            name: 'Tile Vertically',
            id: 181
          },

        ]
      },
      {
        state: 'hotKeys',
        short_label: 'D',
        name: 'Hot Key',
        type: 'link',
        icon: 'icon-home',
        id: 182
      },
      {
        state: 'exit',
        short_label: 'D',
        name: 'Exit',
        type: 'link',
        icon: 'icon-home',
        id: 182
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
}
