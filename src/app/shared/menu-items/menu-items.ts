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
        name: 'Master',
        type: 'sub',
        icon: 'icon-home',
        id: 5,
        children: [
          {
            state: 'generalLedger',
            name: 'General Ledger',
            short_label: 'D',
            type: 'sub',
            id: 6,
            children: [
              {
                state: 'gl-statement-code',
                name: 'GL Statement Code',
                id: 7
              },
              {
                state: 'gl-accounts-master',
                name: 'GL Accounts Master',
                id: 8
              },
              {
                state: 'gl-report-master',
                name: 'GL Report Master',
                id: 9
              },
              {
                state: 'gl-report-linking',
                name: 'GL Report Linking',
                id: 10
              },
              {
                state: 'budget-master',
                name: 'Budget Allocation Master',
                id: 11
              },
            ]

          },
          {
            state: 'customer',
            name: 'Customer',
            short_label: 'D',
            type: 'sub',
            id: 12,
            children: [
              {
                state: 'customerId',
                name: 'Customer Id',
                id: 13
              },
              {
                state: 'sharesMaster',
                name: 'Shares Account Master',
                id: 14
              },
              {
                state: 'anamatGSM',
                name: 'Anamat / General Sub Account Master',
                id: 15
              },
              {
                state: 'savingMaster',
                name: 'Saving Account Master',
                id: 16
              },
              {
                state: 'currentAccountMaster',
                name: 'Current Account Master',
                id: 17
              },
              {
                state: 'termDepositsMaster',
                name: 'Term Deposit Account Master',
                id: 18
              },
              {
                state: 'cashCreditMaster',
                name: 'Cash Credit Account Master',
                id: 19
              },
              {
                state: 'termLoanMaster',
                name: 'Term Loan Account Master',
                id: 20
              },
              {
                state: 'disputeLoanMaster',
                name: 'Dispute Loan Account Master',
                id: 21
              },
              {
                state: 'pigmyAgentMaster',
                name: 'Pigmy Agent Account Master',
                id: 22
              },
              {
                state: 'pigmyAccountMaster',
                name: 'Pigmy Account Master',
                id: 23
              },
              {
                state: 'deadStockMaster',
                name: 'Dead Stock Account Master',
                id: 24
              },
              {
                state: 'accountOpening',
                name: 'Investment Master',
                id: 25
              },
              {
                state: 'lockerMaster',
                name: 'Locker Master',
                id: 26
              },
            ]
          },
          {
            state: 'balanceEntry',
            short_label: 'D',
            name: 'Balance Entry',
            type: 'sub',
            id: 27,
            children: [
              {
                state: 'balanceUpdation',
                name: 'Balance Updation',
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
            name: 'Policy Settings',
            short_label: 'D',
            type: 'sub',
            id: 32,
            children: [
              {
                state: 'information',
                name: 'Information',
                id: 33
              },
              {
                state: 'definations',
                name: 'Definations',
                id: 34
              },
              {
                state: 'sizewiseBalanceModification',
                name: 'Sizewise Balance Modification',
                id: 35
              },
              {
                state: 'tDReceiptTypeMaster',
                name: 'TD Receipt Type Master',
                id: 36
              },
              {
                state: 'nPAClassificationSlabMaster',
                name: 'NPA Classification Slab Master ',
                id: 37
              },
            ]
          },
          {
            state: 'Maintainance',
            name: 'Maintainance',
            short_label: 'D',
            type: 'sub',
            id: 38,
            children: [
              {
                state: 'securityDetails',
                name: 'Security Details',
                id: 39
              },
              // {
              //   state: 'loanAndCCInterestRateChanges',
              //   name: 'Loan And CC Interest Rate Changes',
              //   id: 40
              // },
              {
                state: 'depositLoanInterestRateEditChange',
                name: 'Deposit / Loan Interest Rate Edit / Change',
                id: 41
              },
              {
                state: 'npaOpeningDetailsEntry',
                name: 'NPA Opening Details Entry',
                id: 42
              },
              {
                state: 'interestPostingFlagUpdation',
                name: 'Interest Posting Flag Updation',
                id: 43
              },
              // {
              //   state: 'accountwiseDocumentAcceptance',
              //   name: 'Accountwise Document Acceptance',
              //   id: 44
              // },
              {
                state: 'notingCharges',
                name: 'Noting Charges',
                id: 45
              },
              {
                state: 'tdsformsubmission',
                name: 'TDS Form Submission',
                id: 46
              },
              {
                state: 'moratoriumperiodmaster',
                name: 'Moratorium Period Master',
                id: 47
              }
            ]

          },
          {
            state: 'Instruction',
            name: 'Instruction',
            short_label: 'D',
            type: 'sub',
            id: 48,
            children: [
              {
                state: 'overDraft',
                name: 'Over Draft',
                id: 49
              },
              {
                state: 'standingInstruction',
                name: 'Standing Instruction',
                id: 50
              },
              {
                state: 'interestInstruction',
                name: 'Interest Instruction',
                id: 51
              },
              {
                state: 'special',
                name: 'Special',
                id: 52
              },
              {
                state: 'freezeAccount',
                name: 'Freeze Account',
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
                name: 'Lien Mark Clear',
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
            name: 'Shares/Dividend',
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
                name: 'Year Wise Unpaid Dividend Entry',
                id: 68
              },
              {
                state: 'dividendTransferEntry',
                name: 'Dividend Transfer Instruction',
                id: 69
              },
              {
                state: 'dividendCalculation',
                name: 'Dividend Calculation',
                id: 70
              },
              {
                state: 'dividendPosting',
                name: 'Dividend Posting',
                id: 71
              },
              {
                state: 'dividendTransferPosting',
                name: 'Dividend Transfer Posting',
                id: 72
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
        name: 'Transaction',
        type: 'sub',
        icon: 'icon-home',
        id: 75,
        children: [
          {
            state: 'voucherEntry',
            name: 'Voucher Entry',
            id: 76
          },
          {
            state: 'multiVoucher',
            name: 'Multi Voucher',
            id: 77
          },
          {
            state: 'batchVoucher',
            name: 'Batch Transfer Voucher',
            id: 78
          },
          {
            state: 'pigmyChartEntry',
            name: 'Pigmy Chart Entry',
            id: 79
          },
          {
            state: 'deadStockPurchase',
            name: 'Dead Stock Purchase',
            id: 80
          },
          {
            state: 'deadStockTransaction',
            name: 'Dead Stock Transaction',
            id: 81
          },
         
          {
            state: 'reconciliationEntry',
            name: 'Reconciliation Entry',
            id: 82
          },
          {
            state: 'savingspigmyaccountclosing',
            name: 'Savings-Pigmy Account Closing',
            id: 83
          },
          {
            state: 'termDepositAccountClosing',
            name: 'Term Deposit Account Closing',
            id: 84
          },
          {
            state: 'TermDepositeAcRenewal',
            name: 'Term Deposit A/c Renewal',
            id: 85
          },
          {
            state: 'cashCreditAcRenewal',
            name: 'Cash Credit A/c Renewal',
            id: 86
          },
          {
            state: 'shareTransactions',
            name: 'Share Transaction',
            id: 87
          },
          {
            state: 'locker',
            name: 'Locker Transaction',
            short_label: 'L',
            type: 'sub',
            id: 88,
            children: [
              {
                state: 'lockerOpenTransaction',
                name: 'Locker Open Transaction',
                id: 89
              },
              {
                state: 'lockerCloseTransaction',
                name: 'Locker Close Transaction',
                id: 90
              },
              {
                state: 'lockerRentTransaction',
                name: 'Locker Rent Transaction',
                id: 91
              },
              // {
              //   state: 'cashOutDenomination',
              //   name: 'Cash Out Denomination',
              //   id: 92
              // },
              // {
              //   state: 'cashInitialisationEntry',
              //   name: 'cash Initialisation Entry',
              //   id: 93
              // },
              // {
              //   state: 'safeValultToCashier',
              //   name: 'Safe Valult To Cashier',
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
            name: 'Cash Denomination',
            short_label: 'D',
            type: 'sub',
            id: 96,
            children: [
              {
                state: 'acceptD',
                name: 'Accept Denomination',
                id: 97
              },
              {
                state: 'paymentDenomination',
                name: 'Payment Denomination',
                id: 98
              },
              {
                state: 'cashInDenomination',
                name: 'Cash In Denomination',
                id: 99
              },
              {
                state: 'cashOutDenomination',
                name: 'Cash Out Denomination',
                id: 100
              },
              {
                state: 'cashInitialisationEntry',
                name: 'cash Initialisation Entry',
                id: 101
              },
              {
                state: 'safeValultToCashier',
                name: 'Safe Valult To Cashier',
                id: 102
              },
              {
                state: 'cashierToSafeVault',
                name: 'Cashier To Safe Vault',
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
            state: 'passbookPrinting',
            name: 'Passbook Printing',
            short_label: 'D',
            type: 'sub',
            id: 105,
            children: [
              {
                state: 'passbookIssue',
                name: 'Passbook Issue',
                id: 106
              },
              {
                state: 'passbookEntryPrint',
                name: 'Passbook Entry Print',
                id: 107
              }
            ]
          },
          {
            state: 'termDepositReceiptPrinting',
            name: 'Term Deposit Receipt Printing',
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
            state: 'voucherPrint',
            name: 'Voucher Printing',
            id: 110,

          },
          {
            state: 'goldsilverreturnentry',
            name: 'Gold/Silver Return Entry',
            id: 111
          },
          {
            state: 'memberDAPDT',
            name: 'Member Dividend And Payable Dividend Transaction ',
            id: 112
          },
          {
            state: 'memberTransfer',
            name: 'Member Transfer',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 113,
            children: [
              {
                state: 'MemberTransferTransaction',
                name: 'Member Transfer Transaction',
                id: 114
              },

              {
                state: 'BranchAndSalaryDC',
                name: 'Branch And Salary Division Changes',
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
            name: 'Recovery',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 117,
            children: [
              {
                state: 'recoveryProcessing',
                name: 'Recovery Processing',
                id: 118
              },
              {
                state: 'recoveryModification',
                name: 'Recovery Modification',
                id: 119
              },
              {
                state: 'recoveryPosting',
                name: 'Recovery Posting',
                id: 120
              },
              {
                state: 'recoveryDataImportExport',
                name: 'Recovery Data Import Export',
                id: 121
              },
            ]
          },

          {
            state: 'memberLoan',
            name: 'Member Loan',
            short_label: 'D',
            type: 'sub',
            id: 122,
            children: [
              {
                state: 'loanApplication',
                name: 'Loan Application',
                id: 123
              },
              {
                state: 'loanSanction',
                name: 'Loan Sanction',
                id: 124
              }
            ]
          },
          // {
          //   state: 'dDTransaction',
          //   name: 'DD Transaction',
          //   id: 125
          // },
          {
            state: 'dividendPay',
            name: 'Dividend Pay',
            short_label: 'D',
            type: 'sub',
            id: 126,
            children: [
              {
                state: 'dividendPaidMarkSD',
                name: 'Dividend Paid Mark(Salary Division)',
                id: 127
              },
              {
                state: 'dividendPaidSD',
                name: 'Dividend Pay(Salary Division)',
                id: 128
              },
            ]
          },
          {
            state: 'cashRecoveryTransaction',
            name: 'Cash Recovery Transaction',
            id: 129
          },
          {
            state: 'consolidationTransaction',
            name: 'Consolidation Transaction',
            id: 130
          },
          {
            state: 'inwardRegister',
            name: 'Inward Register',
            id: 131
          },
        ]
      },
      {
        state: 'passing',
        short_label: 'D',
        name: 'Passing',
        type: 'sub',
        icon: 'icon-home',
        id: 132,
        children: [
          {
            state: 'centralisedPassing',
            name: 'Centralised Passing',
            id: 133
          },

          // {
          //   state: 'sharesTransactionPassing',
          //   name: 'Shares Transaction Passing',
          //   id: 134
          // },
              
          {
            state: 'unapprove',
            name: 'Unapprove',
            id: 135
          },
        ]
      },
      {
        state: 'view',
        short_label: 'D',
        name: 'View',
        type: 'sub',
        icon: 'icon-home',
        id: 136,
        children: [
          {
            state: 'accountEnquiry',
            name: 'Account Enquiry',
            id: 137
          },
          {
            state: 'ledgerView',
            name: 'Ledger View',
            id: 138
          },
          {
            state: 'sharesLedgerView',
            name: 'Shares Ledger View',
            id: 139
          },
          {
            state: 'voucherView',
            name: 'Voucher View',
            id: 140
          },
          {
            state: 'customerView',
            name: 'Customer View',
            id: 141
          },
          {
            state: 'guarantorView',
            name: 'Guarantor View',
            id: 142
          },
          {
            state: 'memberView',
            name: 'Member View',
            id: 143
          },
          {
            state: 'masterCard',
            name: 'Master Card',
            id: 144
          },
          {
            state: 'memberLiablityView',
            name: 'Member Liablity View',
            id: 145
          },
          {
            state: 'otherView',
            name: 'Other View',
            id: 146
          },
          {
            state: 'managerView',
            name: 'Manager View',
            id: 147

          },
        ],

      },
      {
        state: 'reports',
        short_label: 'D',
        name: 'Reports',
        type: 'sub',
        icon: 'icon-home',
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
            name: 'Daily Reports',
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
                name: 'T Form Day Book Details/Summary',
                id: 152
              },
              {
                state: 'BnkSubsidaryDetail',
                name: 'Subsidiary  Debit/Credit',
                id: 153
              },
              {
                state: 'BnkScrollDetailBoth',
                name: 'Scroll Book Debit/Credit/Both',
                id: 154
              },
              {
                state: 'IntInstructionExecutionFailure',
                name: 'Interest Instructions Execution List (Failure/Success)',
                id: 155
              },
              {
                state: 'StandingInstExecutionFailure',
                name: 'Standing Instructions Execution List (Failure/Success)',
                id: 156
              },
              {
                state: 'StandingInstExecutionCredit',
                name: 'Standing Instructions Execution List (Expected Credit Scheme)',
                id: 157
              },
              {
                state: 'StandingInstExecutionDebit',
                name: 'Standing Instructions Execution List (Expected Debit Scheme )',
                id: 158
              },
              {
                state: 'IntInstructExecutionCredit',
                name: 'Interest Instructions Execution List (Expected Credit Scheme)',
                id: 159
              },
              {
                state: 'IntInstructExecutionDebit',
                name: 'Interest Instructions Execution List (Expected Debit Scheme)',
                id: 160
              },
              {
                state: 'SubsidiarySummaryComponent',
                name: 'Subsidiary Summary',
                id: 161
              },
              {
                state: 'VouchersPrintingComponent',
                name: 'Voucher Printing',
                id: 162
              },

            ]
          },
          //
          {
            state: 'statement',
            name: 'Statement',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 163,
            children: [
              {
                state: 'BnkGlAcStatement',
                name: 'GL account Statement',
                id: 164
              },
              {
                state: 'BnkAcStatement',
                name: 'Account Statement',
                id: 165
              },
              {
                state: 'BnkLNamtStatement',
                name: 'Term Loan stament with other amount',
                id: 166
              },
              {
                state: 'BnkTDStatement',
                name: 'Term Deposit Statement ',
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
            name: 'Balance Book',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 170,
            children: [
              {
                state: 'BnkDedskBalList',
                name: 'Deadstock Balance List',
                id: 171
              },
              // {
              //   state: 'BnkLedgerABTypeList',
              //   name: 'Leadger Balance List A,B type Member Loan and Deposit',
              //   id: 172
              // },
              {
                state: 'BnkACBalBook',
                name: 'Account Balance Book',
                id: 173
              },
              {
                state: 'BnkACBalList',
                name: 'Account Balance List',
                id: 174
              },
              {
                state: 'BnkCustIDBalList',
                name: 'Customer ID wise Balance List',
                id: 175
              },
              {
                state: 'BnkGLConsistRepo',
                name: 'Scheme - General Ledger consistancy Report',
                id: 176
              },
              {
                state: 'BnkReceiveIntList',
                name: 'Receivable Interest List',
                id: 177
              },
              {
                state: 'BnkPayIntList',
                name: 'Payable Interest List',
                id: 178
              },
              {
                state: 'BnkDedskBalListDepre',
                name: 'Deadstock Balance List with depreciation',
                id: 179
              },
              {
                state: 'BnkDptAMList',
                name: 'Deposite Amount Wise Balance List',
                id: 180
              },
              {
                state: 'CatbalList',
                name: 'Categorywise Balance List',
                id: 181
              },
              {
                state: 'DebbalReport',
                name: 'Debit Balance Report',
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
                name: 'AmountWise Balance List',
                id: 185
              },
              {
                state: 'DeadStockDepCatList',
                name: 'Deadstock Depriciation Categorywise List',
                id: 186
              },
              {
                state: 'BalConCertificate',
                name: 'Balance Confirmation Ceritificate',
                id: 187
              },
              {
                state: 'shortballist',
                name: 'Short Balance List',
                id: 188
              },

            ]
          },
          //
          {
            state: 'registers',
            name: 'Registers',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 189,
            children: [
              {
                state: 'BnkRegAccount',
                name: 'Account Opening & Closing Register',
                id: 190
              },
              {
                state: 'BnkRegStandingInstruction',
                name: 'Standing Instruction Register (Active/Revoke)',
                id: 191
              },
              {
                state: 'BnkRegInterestInstruction',
                name: 'Interest Instruction Register  (Active/Revoke)',
                id: 192
              },
              {
                state: 'BnkRegSpecialInstruction',
                name: 'Special Instruction Register  (Active/Revoke)',
                id: 193
              },
              {
                state: 'BnkRegInsurence',
                name: 'Insurance Register',
                id: 194
              },
              {
                state: 'BnkODRegister',
                name: 'O.D. Register (Temprary / Periodical)',
                id: 195
              },
              {
                state: 'BnkRegDeadStock',
                name: 'Deadstock Register',
                id: 196
              },
              {
                state: 'BnkIVOpenAndCloseReg',
                name: 'Investment Register (Open/Closed)',
                id: 197
              },
              {
                state: 'BnkRegGoldSilverSubReturn',
                name: 'Gold Silver Submission/Return Register',
                id: 198
              },
              {
                state: 'DepositReceiptRegister',
                name: 'Deposit Receipt Register',
                id: 199
              },
              {
                state: 'lockerRentRegister',
                name: 'Locker Rent Register',
                id: 200
              },
              {
                state: 'lockerRegister',
                name: 'Locker Register Report',
                id: 201
              },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                id: 202
              },

            ]
          },
          //
          {
            state: 'Termdeposit',
            name: 'Term Deposit Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 203,
            children: [
              {
                state: 'maturedbutnotpaid',
                name: 'matured but not paid between two days',
                id: 204
              },
              {
                state: 'maturedbutnotclosed',
                name: 'matured but not closed',
                id: 205
              },
              {
                state: 'depositpaidlist',
                name: 'Deposit Paid List',
                id: 206
              },
              {
                state: 'intratewisebalancelist',
                name: 'Interest Rate Wise List',
                id: 207
              },
              {
                state: 'custidwiseintpaidlist',
                name: 'Customer Id Wise Interest Paid List',
                id: 208
              },
              {
                state: 'custidwiseloaninterestCertificate',
                name: 'Customer Id Wise Deposit Interest Certificate',
                id: 209
              },
              {
                state: 'IntRatewiseMaturityList',
                name: 'Interest Rate wise Maturity List',
                id: 210
              },
              {
                state: 'custidwisedepositlist',
                name: 'Customer Id wise Deposit List',
                id: 211
              },
              {
                state: 'tddetailrecurroverdue',
                name: 'Term Deposite Detail List and Recurring Overdue',
                id: 212
              },
              {
                state: 'prematuredAcCloselist',
                name: 'Prematured A/c Close List',
                id: 213
              },
              {
                state: 'renewalDepositList',
                name: 'Renewal Deposit List',
                id: 214
              },
              {
                state: 'directorwiseDepositlist',
                name: 'Directorwise Deposit List',
                id: 215
              },
              {
                state: 'custidwiseInterestList',
                name: 'Customer Id Wise Interest List',
                id: 216
              },
              {
                state: 'custidwiseMaturedList',
                name: 'Customer Id Wise Matured Deposit List',
                id: 217
              },
              {
                state: 'abtypeDepositList',
                name: 'A/B Type Deposit List',
                id: 218
              },



            ]

          },

          {
            state: 'SharesReports',
            name: 'Shares Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 219,
            children: [
              {
                state: 'cityMemberList',
                name: 'CityWise Member List',
                id: 220
              },

              {
                state: 'dividendPaidList',
                name: 'Dividend Paid List Report',
                id: 221
              },
              {
                state: 'sharesIssueRegister',
                name: 'Shares Issue Register',
                id: 222
              },
              {
                state: 'sharesReturnRegister',
                name: 'Membership Cancellation',
                id: 223
              },
              {
                state: 'sharesTransferRegister',
                name: 'Shares Transfer Register',
                id: 224
              },
              {
                state: 'unpaidDividendList',
                name: 'Unpaid Dividend List',
                id: 225
              },
              {
                state: 'monthlyRecoveryPrint',
                name: 'Monthly Recovery Print',
                id: 226
              },
              {
                state: 'monthlyRecoverySubsidiary',
                name: 'Monthly Recovery Subsidiary',
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
            name: 'Term Loan/Cash Credit Reports',
            short_label: 'D',
            type: 'sub',
            id: 230,
            children: [
              {
                state: 'loanoverduelist',
                name: 'Loan Overdue List',
                type: 'sub',
                id: 231,

              },
              {
                state: 'loansecurityreport',
                name: 'Loan Security Reports',
                type: 'sub',
                id: 232,

              },
              {
                state: 'citiwiseLoanBalancereport',
                name: 'Citiwise Loan Balance Report',
                type: 'sub',
                id: 233,
              },
              {
                state: 'lcdLessdraftReport',
                name: 'Loan Cash Credit Less Draft Report',
                type: 'sub',
                id: 234,
              },
              {
                state: 'lcdOverdraftReport',
                name: 'Loan Cash Credit Over Draft Report',
                type: 'sub',
                id: 235,
              },
              {
                state: 'lcd-renewal-list',
                name: 'Loan Cash Credit Renewal List',
                type: 'sub',
                id: 236,
              },
              {
                state: 'lcd-turnover-list',
                name: 'Loan Cash Credit Turnover List',
                type: 'sub',
                id: 237,
              },
              {
                state: 'penalinterestlist',
                name: 'Received Penal Interest List',
                type: 'sub',
                id: 238,
              },
              {
                state: 'pendingStockStatementlist',
                name: 'Pending Stock Statement List',
                type: 'sub',
                id: 239,
              },
              {
                state: 'receivedStockstatementList',
                name: 'Received Stock Statement List',
                type: 'sub',
                id: 240,
              },
              {
                state: 'recoverycwBalanceList',
                name: 'Recovery Balance List',
                type: 'sub',
                id: 241,
              },
              {
                state: 'receivableInstallInterest',
                name: 'Receivable Installment and Intrest List',
                type: 'sub',
                id: 242,
              },

            ],

          },


          {
            state: 'npaReports',
            name: 'NPA Reports',
            short_label: 'D',
            type: 'sub',
            id: 243,
            children: [
              {
                state: 'npaRegister',
                name: 'NPA Register',
                id: 244
              },
              {
                state: 'npaRegPercentage',
                name: 'NPA Register Percentage',
                id: 245
              },
              {
                state: 'nonNpaRecovery',
                name: 'To be Recovery Non NPA Report',
                id: 246
              },
              {
                state: 'directorwise',
                name: 'Directorwise Recommanded by',
                id: 247
              },
              {
                state: 'citiwisenpa',
                name: 'Citywise NPA Register',
                type: 'sub',
                id: 248,

              },
              {
                state: 'analysisnpa',
                name: 'NPA Analysis Report',
                type: 'sub',
                id: 249,

              },
              {
                state: 'classificationsecnpa',
                name: 'NPA Classification -Secured Or Unsecured.PNG',
                type: 'sub',
                id: 250,
              },
              {
                state: 'classificationstandardnpa',
                name: 'NPA Classification -Standard Or Non Standard.PNG',
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
          // //
          // {
          //   state: 'Report_Frame',
          //   name: 'Report Frame',
          //   id: 253
          // },
          //
          {
            state: 'PigmyReport',
            name: 'Pigmy Report',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 254,
            children: [
              {
                state: 'BnkPigmyCollectionChart',
                name: 'Pigmy Agentwise Collection Chart',
                id: 255
              },
              {
                state: 'BnkPigmyBalanceList',
                name: 'Pigmy Agent Wise Balance List',
                id: 256
              },
              {
                state: 'BnkPigmyBalanceBook',
                name: 'Pigmy Agent Wise Balance Book',
                id: 257
              },
              {
                state: 'BnkPigmyBlankChart',
                name: 'Pigmy Agent Collection Blank Chart',
                id: 258
              },
              {
                state: 'BnkPigmyCommissionRepo',
                name: 'Pigmy Agent Commission Report',
                id: 259
              },
              {
                state: 'pigmyhandbook',
                name: 'Pigmy  HandBook',
                id: 260
              },
              {
                state: 'pigmymaturedAclist',
                name: 'Pigmy  Matured A/C List',
                id: 261
              },
            ]
          },
          //
          {
            state: 'otherReports',
            short_label: 'D',
            name: 'Other Reports',
            type: 'sub',
            icon: 'icon-home',
            id: 262,
            children: [
              {
                state: 'BnkMinorsList',
                name: 'Minor List',
                id: 263
              },
              {
                state: 'BnkNomineeList',
                name: 'Nominee List',
                id: 264
              },
              {
                state: 'BnkGuaranterList',
                name: 'Guaranter List',
                id: 265
              },
              {
                state: 'BnkLienMarkedAcList',
                name: 'Lein mark Account List ',
                id: 266
              },
              // {
              //   state: 'BnkDormantAcList',
              //   name: 'Dormant Account List',
              //   id: 267
              // },
              {
                state: 'BnkAmountMovement',
                name: 'Transaction Amount Movement',
                id: 268
              },
              {
                state: 'BnkDepAmountMovementDetail',
                name: 'Deposit Amount Movement',
                id: 269
              },
              {
                state: 'BnkLNAmountMovementDetail',
                name: 'Loan Amount Movement',
                id: 270
              },
              {
                state: 'BnkGurDetailsList',
                name: 'Guaranter Details',
                id: 271
              },
              {
                state: 'BnkNonGuaranteerView',
                name: 'Non Guarantor (A-Type Members Only) List',
                id: 272
              },
              {
                state: 'custidIntroducerList',
                name: 'CustomerIdwise Introducer List',
                id: 273
              },
              {
                state: 'serviceChargeList',
                name: 'Service Charges List',
                id: 274
              },
              {
                state: 'minorToMajorlist',
                name: 'Minor To Major List',
                id: 275
              },
              {
                state: 'tranLessAclist',
                name: 'Transactionless Account List',
                id: 276
              },
              {
                state: 'dormantAccountList',
                name: 'Dormant Account List',
                id: 277
              },

            ]
          },
          //
          {
            state: 'misReports',
            name: 'MIS Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 278,
            children: [
              // {
              //   state: 'schemeWisedepoaccount',
              //   name: 'SchemeWise Deposit Account Details',
              //   id: 279
              // },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                id: 280
              },
            ]
          },
          //
          {
            state: 'managerViewReports',
            name: 'Manager View Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 281
          },
          //
          {
            state: 'finalReports',
            name: 'Final Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 282,
            children: [
              {
                state: 'BnkTrialBal',
                name: 'Trial Balance ',
                id: 283
              },
              {
                state: 'BnkTrialBaldetail',
                name: 'Trial Balance Detail',
                id: 284
              },
              {
                state: 'BalanceSheet',
                name: 'Balance Sheet',
                id: 285
              },
              {
                state: 'NBalanceSheet',
                name: 'N Form Balance Sheet',
                id: 286
              },
              {
                state: 'ProfitLossAccount',
                name: 'Profit & Loss Account',
                id: 287
              },
              {
                state: 'NProfitLoss',
                name: 'N Form Profit & Loss Account',
                id: 288
              },
              {
                state: 'RecePayRep',
                name: 'Receipt & Payment Report',
                id: 289
              },
              {
                state: 'RecePayRepDetails',
                name: 'Receipt & Payment Report Detail',
                id: 290
              },

            ]
          },
          {
            state: 'RecoveryReport',
            name: 'Recovery Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 291,
            children: [
              {
                state: 'memberAckReport',
                name: 'Member Acknowledgement Report',
                id: 292
              },

             
            ]
          },
        ]
      },
      {
        state: 'utility',
        short_label: 'D',
        name: 'Utility',
        type: 'sub',
        icon: 'icon-home',
        id: 293,
        children: [
          {
            state: 'dayBegin',
            name: 'Day Begin',
            id: 294
          },
          {
            state: 'dayEnd',
            name: 'Day End',
            short_label: 'D',
            type: 'sub',
            id: 295,
            children: [
              {
                state: 'counterWorkDayEnd',
                name: 'Day End Handover',
                id: 296
              },
              {
                state: 'FinalDayEnd',
                name: 'Day End',
                id: 297
              },
              {
                state: 'pigmyDayEnd',
                name: 'pigmy Day End',
                id: 298
              },
            ]
          },
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
            state: 'holiday',
            name: 'Holiday',
            id: 301
          },
          {
            state: 'interestPosting',
            name: 'Interest Posting',
            short_label: 'D',
            type: 'sub',
            id: 302,
            children: [
              {
                state: 'interestCalculation',
                name: 'Interest Calculation',
                id: 303
              },

              {
                state: 'interestPassing',
                name: 'Interest Passing',
                id: 304
              },
              {
                state: 'interestList',
                name: 'Interest List',
                id: 305
              },
            ]
          },
          {
            state: 'processACM',
            name: 'Process And Calculation Menu',
            id: 306
          },
          {
            state: 'pigmyMachineProcess',
            name: 'Pigmy Machine Process',
            id: 307
          },
          {
            state: 'pigmyAppProcess',
            name: 'Pigmy App Process',
            id: 308
          },
          {
            state: 'deadStockP',
            name: 'Dead Stock Process',
            id: 309
          },
          {
            state: 'dividend',
            name: 'Dividend',
            short_label: 'D',
            type: 'sub',
            id: 310,
            children: [
              {
                state: 'dividendList',
                name: 'Dividend List',
                id: 311
              },
              {
                state: 'dividendPost',
                name: 'Dividend Post',
                id: 312
              }
            ]
          },
          {
            state: 'statementHeadInsert',
            name: 'Statement Head Insert',
            id: 313
          },

          // {
          //   state: 'changePassword',
          //   name: 'Change Password',
          //   id: 314
          // },
          {
            state: 'roleDefination',
            name: 'Role Defination',
            id: 315
          },
          {
            state: 'roleMaster',
            name: 'Role Master',
            id: 316
          },
          {
            state: 'userDefination',
            name: 'User Defination',
            id: 317
          },
          {
            state: 'cashierMaintance',
            name: 'Cashier Maintenace',
            id: 318
          },
          {
            state: 'cashierUM',
            name: 'Cashier User Maintainance',
            id: 319
          },
          {
            state: 'sharesCCTS',
            name: 'Shares Contribution Credit To Shares',
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
            name: 'Scheme Amount Transfer Entry',
            id: 323
          },
          {
            state: 'schemeParameters',
            name: 'Scheme Parameters',
            id: 324
          },
          {
            state: 'calculator',
            name: 'Calculator',
            id: 325
          },
          // {
          //   state: 'remindMe',
          //   name: 'Remind Me',
          //   id: 326
          // },
          {
            state: 'dataBackup',
            name: 'Data Backup',
            id: 327
          },
          {
            state: 'pataSevaSupportR',
            name: 'PataSeva Support Register',
            id: 328
          },
          {
            state: 'sharesDataEI',
            name: 'Sheres Data Export / Import',
            id: 329
          },
          // {
          //   state: 'dayBookIE',
          //   name: 'Daybook Import / Export',
          //   id: 330
          // },
          {
            state: 'demandDraftDEI',
            name: 'Demand Draft Data Export/ Import',
            id: 331
          },
          {
            state: 'gmaMemberUpdation',
            name: 'General Meeting Appear Meeting Updation',
            id: 332
          },
          {
            state: 'amtTransferTransaction',
            name: 'Amount Transfer Transaction', 
            id: 333
          },
          {
            state: 'recAmtTrToGL',
            name: 'Recurring Amount Transfer to GL',
            id: 334
          },

        ]
      },
      {
        state: 'windows',
        short_label: 'D',
        name: 'Windows',
        type: 'sub',
        icon: 'icon-home',
        id: 335,
        children: [
          {
            state: 'casecade',
            name: 'CaseCade',
            id: 336
          },
          {
            state: 'tileHorizontaily',
            name: 'Tile Horizontaily',
            id: 337
          },
          {
            state: 'tileVertically',
            name: 'Tile Vertically',
            id: 338
          },

        ]
      },
      {
        state: 'hotKeys',
        short_label: 'D',
        name: 'Hot Key',
        type: 'link',
        icon: 'icon-home',
        id: 339
      },
      {
        state: 'exit',
        short_label: 'D',
        name: 'Sign Out',
        type: 'link',
        icon: 'icon-home',
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
        name: 'Master',
        type: 'sub',
        icon: 'icon-home',
        id: 5,
        children: [
          {
            state: 'generalLedger',
            name: 'General Ledger',
            short_label: 'D',
            type: 'sub',
            id: 6,
            children: [
              {
                state: 'gl-statement-code',
                name: 'GL Statement Code',
                id: 7
              },
              {
                state: 'gl-accounts-master',
                name: 'GL Accounts Master',
                id: 8
              },
              {
                state: 'gl-report-master',
                name: 'GL Report Master',
                id: 9
              },
              {
                state: 'gl-report-linking',
                name: 'GL Report Linking',
                id: 10
              },
              {
                state: 'budget-master',
                name: 'Budget Allocation Master',
                id: 11
              },
            ]

          },
          {
            state: 'customer',
            name: 'Customer',
            short_label: 'D',
            type: 'sub',
            id: 12,
            children: [
              {
                state: 'customerId',
                name: 'Customer Id',
                id: 13
              },
              {
                state: 'sharesMaster',
                name: 'Shares Account Master',
                id: 14
              },
              {
                state: 'anamatGSM',
                name: 'Anamat / General Sub Account Master',
                id: 15
              },
              {
                state: 'savingMaster',
                name: 'Saving Account Master',
                id: 16
              },
              {
                state: 'currentAccountMaster',
                name: 'Current Account Master',
                id: 17
              },
              {
                state: 'termDepositsMaster',
                name: 'Term Deposit Account Master',
                id: 18
              },
              {
                state: 'cashCreditMaster',
                name: 'Cash Credit Account Master',
                id: 19
              },
              {
                state: 'termLoanMaster',
                name: 'Term Loan Account Master',
                id: 20
              },
              {
                state: 'disputeLoanMaster',
                name: 'Dispute Loan Account Master',
                id: 21
              },
              {
                state: 'pigmyAgentMaster',
                name: 'Pigmy Agent Account Master',
                id: 22
              },
              {
                state: 'pigmyAccountMaster',
                name: 'Pigmy Account Master',
                id: 23
              },
              {
                state: 'deadStockMaster',
                name: 'Dead Stock Account Master',
                id: 24
              },
              {
                state: 'accountOpening',
                name: 'Investment Master',
                id: 25
              },
              {
                state: 'lockerMaster',
                name: 'Locker Master',
                id: 26
              },
            ]
          },
          {
            state: 'balanceEntry',
            short_label: 'D',
            name: 'Balance Entry',
            type: 'sub',
            id: 27,
            children: [
              {
                state: 'balanceUpdation',
                name: 'Balance Updation',
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
            name: 'Policy Settings',
            short_label: 'D',
            type: 'sub',
            id: 32,
            children: [
              {
                state: 'information',
                name: 'Information',
                id: 33
              },
              {
                state: 'definations',
                name: 'Definations',
                id: 34
              },
              {
                state: 'sizewiseBalanceModification',
                name: 'Sizewise Balance Modification',
                id: 35
              },
              {
                state: 'tDReceiptTypeMaster',
                name: 'TD Receipt Type Master',
                id: 36
              },
              {
                state: 'nPAClassificationSlabMaster',
                name: 'NPA Classification Slab Master ',
                id: 37
              },
            ]
          },
          {
            state: 'Maintainance',
            name: 'Maintainance',
            short_label: 'D',
            type: 'sub',
            id: 38,
            children: [
              {
                state: 'securityDetails',
                name: 'Security Details',
                id: 39
              },
              // {
              //   state: 'loanAndCCInterestRateChanges',
              //   name: 'Loan And CC Interest Rate Changes',
              //   id: 40
              // },
              {
                state: 'depositLoanInterestRateEditChange',
                name: 'Deposit / Loan Interest Rate Edit / Change',
                id: 41
              },
              {
                state: 'npaOpeningDetailsEntry',
                name: 'NPA Opening Details Entry',
                id: 42
              },
              {
                state: 'interestPostingFlagUpdation',
                name: 'Interest Posting Flag Updation',
                id: 43
              },
              // {
              //   state: 'accountwiseDocumentAcceptance',
              //   name: 'Accountwise Document Acceptance',
              //   id: 44
              // },
              {
                state: 'notingCharges',
                name: 'Noting Charges',
                id: 45
              },
              {
                state: 'tdsformsubmission',
                name: 'TDS Form Submission',
                id: 46
              },
              {
                state: 'moratoriumperiodmaster',
                name: 'Moratorium Period Master',
                id: 47
              }
            ]

          },
          {
            state: 'Instruction',
            name: 'Instruction',
            short_label: 'D',
            type: 'sub',
            id: 48,
            children: [
              {
                state: 'overDraft',
                name: 'Over Draft',
                id: 49
              },
              {
                state: 'standingInstruction',
                name: 'Standing Instruction',
                id: 50
              },
              {
                state: 'interestInstruction',
                name: 'Interest Instruction',
                id: 51
              },
              {
                state: 'special',
                name: 'Special',
                id: 52
              },
              {
                state: 'freezeAccount',
                name: 'Freeze Account',
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
                name: 'Lien Mark Clear',
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
            name: 'Shares/Dividend',
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
                name: 'Year Wise Unpaid Dividend Entry',
                id: 68
              },
              {
                state: 'dividendTransferEntry',
                name: 'Dividend Transfer Instruction',
                id: 69
              },
              {
                state: 'dividendCalculation',
                name: 'Dividend Calculation',
                id: 70
              },
              {
                state: 'dividendPosting',
                name: 'Dividend Posting',
                id: 71
              },
              {
                state: 'dividendTransferPosting',
                name: 'Dividend Transfer Posting',
                id: 72
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
        name: 'Transaction',
        type: 'sub',
        icon: 'icon-home',
        id: 75,
        children: [
          {
            state: 'voucherEntry',
            name: 'Voucher Entry',
            id: 76
          },
          {
            state: 'multiVoucher',
            name: 'Multi Voucher',
            id: 77
          },
          {
            state: 'batchVoucher',
            name: 'Batch Transfer Voucher',
            id: 78
          },
          {
            state: 'pigmyChartEntry',
            name: 'Pigmy Chart Entry',
            id: 79
          },
          {
            state: 'deadStockPurchase',
            name: 'Dead Stock Purchase',
            id: 80
          },
          {
            state: 'deadStockTransaction',
            name: 'Dead Stock Transaction',
            id: 81
          },
         
          {
            state: 'reconciliationEntry',
            name: 'Reconciliation Entry',
            id: 82
          },
          {
            state: 'savingspigmyaccountclosing',
            name: 'Savings-Pigmy Account Closing',
            id: 83
          },
          {
            state: 'termDepositAccountClosing',
            name: 'Term Deposit Account Closing',
            id: 84
          },
          {
            state: 'TermDepositeAcRenewal',
            name: 'Term Deposit A/c Renewal',
            id: 85
          },
          {
            state: 'cashCreditAcRenewal',
            name: 'Cash Credit A/c Renewal',
            id: 86
          },
          {
            state: 'shareTransactions',
            name: 'Share Transaction',
            id: 87
          },
          {
            state: 'locker',
            name: 'Locker Transaction',
            short_label: 'L',
            type: 'sub',
            id: 88,
            children: [
              {
                state: 'lockerOpenTransaction',
                name: 'Locker Open Transaction',
                id: 89
              },
              {
                state: 'lockerCloseTransaction',
                name: 'Locker Close Transaction',
                id: 90
              },
              {
                state: 'lockerRentTransaction',
                name: 'Locker Rent Transaction',
                id: 91
              },
              // {
              //   state: 'cashOutDenomination',
              //   name: 'Cash Out Denomination',
              //   id: 92
              // },
              // {
              //   state: 'cashInitialisationEntry',
              //   name: 'cash Initialisation Entry',
              //   id: 93
              // },
              // {
              //   state: 'safeValultToCashier',
              //   name: 'Safe Valult To Cashier',
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
            name: 'Cash Denomination',
            short_label: 'D',
            type: 'sub',
            id: 96,
            children: [
              {
                state: 'acceptD',
                name: 'Accept Denomination',
                id: 97
              },
              {
                state: 'paymentDenomination',
                name: 'Payment Denomination',
                id: 98
              },
              {
                state: 'cashInDenomination',
                name: 'Cash In Denomination',
                id: 99
              },
              {
                state: 'cashOutDenomination',
                name: 'Cash Out Denomination',
                id: 100
              },
              {
                state: 'cashInitialisationEntry',
                name: 'cash Initialisation Entry',
                id: 101
              },
              {
                state: 'safeValultToCashier',
                name: 'Safe Valult To Cashier',
                id: 102
              },
              {
                state: 'cashierToSafeVault',
                name: 'Cashier To Safe Vault',
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
            state: 'passbookPrinting',
            name: 'Passbook Printing',
            short_label: 'D',
            type: 'sub',
            id: 105,
            children: [
              {
                state: 'passbookIssue',
                name: 'Passbook Issue',
                id: 106
              },
              {
                state: 'passbookEntryPrint',
                name: 'Passbook Entry Print',
                id: 107
              }
            ]
          },
          {
            state: 'termDepositReceiptPrinting',
            name: 'Term Deposit Receipt Printing',
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
            state: 'voucherPrint',
            name: 'Voucher Printing',
            id: 110,

          },
          {
            state: 'goldsilverreturnentry',
            name: 'Gold/Silver Return Entry',
            id: 111
          },
          {
            state: 'memberDAPDT',
            name: 'Member Dividend And Payable Dividend Transaction ',
            id: 112
          },
          {
            state: 'memberTransfer',
            name: 'Member Transfer',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 113,
            children: [
              {
                state: 'MemberTransferTransaction',
                name: 'Member Transfer Transaction',
                id: 114
              },

              {
                state: 'BranchAndSalaryDC',
                name: 'Branch And Salary Division Changes',
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
            name: 'Recovery',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 117,
            children: [
              {
                state: 'recoveryProcessing',
                name: 'Recovery Processing',
                id: 118
              },
              {
                state: 'recoveryModification',
                name: 'Recovery Modification',
                id: 119
              },
              {
                state: 'recoveryPosting',
                name: 'Recovery Posting',
                id: 120
              },
              {
                state: 'recoveryDataImportExport',
                name: 'Recovery Data Import Export',
                id: 121
              },
            ]
          },

          {
            state: 'memberLoan',
            name: 'Member Loan',
            short_label: 'D',
            type: 'sub',
            id: 122,
            children: [
              {
                state: 'loanApplication',
                name: 'Loan Application',
                id: 123
              },
              {
                state: 'loanSanction',
                name: 'Loan Sanction',
                id: 124
              }
            ]
          },
          // {
          //   state: 'dDTransaction',
          //   name: 'DD Transaction',
          //   id: 125
          // },
          {
            state: 'dividendPay',
            name: 'Dividend Pay',
            short_label: 'D',
            type: 'sub',
            id: 126,
            children: [
              {
                state: 'dividendPaidMarkSD',
                name: 'Dividend Paid Mark(Salary Division)',
                id: 127
              },
              {
                state: 'dividendPaidSD',
                name: 'Dividend Pay(Salary Division)',
                id: 128
              },
            ]
          },
          {
            state: 'cashRecoveryTransaction',
            name: 'Cash Recovery Transaction',
            id: 129
          },
          {
            state: 'consolidationTransaction',
            name: 'Consolidation Transaction',
            id: 130
          },
          {
            state: 'inwardRegister',
            name: 'Inward Register',
            id: 131
          },
        ]
      },
      {
        state: 'passing',
        short_label: 'D',
        name: 'Passing',
        type: 'sub',
        icon: 'icon-home',
        id: 132,
        children: [
          {
            state: 'centralisedPassing',
            name: 'Centralised Passing',
            id: 133
          },

          // {
          //   state: 'sharesTransactionPassing',
          //   name: 'Shares Transaction Passing',
          //   id: 134
          // },
              
          {
            state: 'unapprove',
            name: 'Unapprove',
            id: 135
          },
        ]
      },
      {
        state: 'view',
        short_label: 'D',
        name: 'View',
        type: 'sub',
        icon: 'icon-home',
        id: 136,
        children: [
          {
            state: 'accountEnquiry',
            name: 'Account Enquiry',
            id: 137
          },
          {
            state: 'ledgerView',
            name: 'Ledger View',
            id: 138
          },
          {
            state: 'sharesLedgerView',
            name: 'Shares Ledger View',
            id: 139
          },
          {
            state: 'voucherView',
            name: 'Voucher View',
            id: 140
          },
          {
            state: 'customerView',
            name: 'Customer View',
            id: 141
          },
          {
            state: 'guarantorView',
            name: 'Guarantor View',
            id: 142
          },
          {
            state: 'memberView',
            name: 'Member View',
            id: 143
          },
          {
            state: 'masterCard',
            name: 'Master Card',
            id: 144
          },
          {
            state: 'memberLiablityView',
            name: 'Member Liablity View',
            id: 145
          },
          {
            state: 'otherView',
            name: 'Other View',
            id: 146
          },
          {
            state: 'managerView',
            name: 'Manager View',
            id: 147

          },
        ],

      },
      {
        state: 'reports',
        short_label: 'D',
        name: 'Reports',
        type: 'sub',
        icon: 'icon-home',
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
            name: 'Daily Reports',
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
                name: 'T Form Day Book Details/Summary',
                id: 152
              },
              {
                state: 'BnkSubsidaryDetail',
                name: 'Subsidiary  Debit/Credit',
                id: 153
              },
              {
                state: 'BnkScrollDetailBoth',
                name: 'Scroll Book Debit/Credit/Both',
                id: 154
              },
              {
                state: 'IntInstructionExecutionFailure',
                name: 'Interest Instructions Execution List (Failure/Success)',
                id: 155
              },
              {
                state: 'StandingInstExecutionFailure',
                name: 'Standing Instructions Execution List (Failure/Success)',
                id: 156
              },
              {
                state: 'StandingInstExecutionCredit',
                name: 'Standing Instructions Execution List (Expected Credit Scheme)',
                id: 157
              },
              {
                state: 'StandingInstExecutionDebit',
                name: 'Standing Instructions Execution List (Expected Debit Scheme )',
                id: 158
              },
              {
                state: 'IntInstructExecutionCredit',
                name: 'Interest Instructions Execution List (Expected Credit Scheme)',
                id: 159
              },
              {
                state: 'IntInstructExecutionDebit',
                name: 'Interest Instructions Execution List (Expected Debit Scheme)',
                id: 160
              },
              {
                state: 'SubsidiarySummaryComponent',
                name: 'Subsidiary Summary',
                id: 161
              },
              {
                state: 'VouchersPrintingComponent',
                name: 'Voucher Printing',
                id: 162
              },

            ]
          },
          //
          {
            state: 'statement',
            name: 'Statement',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 163,
            children: [
              {
                state: 'BnkGlAcStatement',
                name: 'GL account Statement',
                id: 164
              },
              {
                state: 'BnkAcStatement',
                name: 'Account Statement',
                id: 165
              },
              {
                state: 'BnkLNamtStatement',
                name: 'Term Loan stament with other amount',
                id: 166
              },
              {
                state: 'BnkTDStatement',
                name: 'Term Deposit Statement ',
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
            name: 'Balance Book',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 170,
            children: [
              {
                state: 'BnkDedskBalList',
                name: 'Deadstock Balance List',
                id: 171
              },
              // {
              //   state: 'BnkLedgerABTypeList',
              //   name: 'Leadger Balance List A,B type Member Loan and Deposit',
              //   id: 172
              // },
              {
                state: 'BnkACBalBook',
                name: 'Account Balance Book',
                id: 173
              },
              {
                state: 'BnkACBalList',
                name: 'Account Balance List',
                id: 174
              },
              {
                state: 'BnkCustIDBalList',
                name: 'Customer ID wise Balance List',
                id: 175
              },
              {
                state: 'BnkGLConsistRepo',
                name: 'Scheme - General Ledger consistancy Report',
                id: 176
              },
              {
                state: 'BnkReceiveIntList',
                name: 'Receivable Interest List',
                id: 177
              },
              {
                state: 'BnkPayIntList',
                name: 'Payable Interest List',
                id: 178
              },
              {
                state: 'BnkDedskBalListDepre',
                name: 'Deadstock Balance List with depreciation',
                id: 179
              },
              {
                state: 'BnkDptAMList',
                name: 'Deposite Amount Wise Balance List',
                id: 180
              },
              {
                state: 'CatbalList',
                name: 'Categorywise Balance List',
                id: 181
              },
              {
                state: 'DebbalReport',
                name: 'Debit Balance Report',
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
                name: 'AmountWise Balance List',
                id: 185
              },
              {
                state: 'DeadStockDepCatList',
                name: 'Deadstock Depriciation Categorywise List',
                id: 186
              },
              {
                state: 'BalConCertificate',
                name: 'Balance Confirmation Ceritificate',
                id: 187
              },
              {
                state: 'shortballist',
                name: 'Short Balance List',
                id: 188
              },

            ]
          },
          //
          {
            state: 'registers',
            name: 'Registers',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 189,
            children: [
              {
                state: 'BnkRegAccount',
                name: 'Account Opening & Closing Register',
                id: 190
              },
              {
                state: 'BnkRegStandingInstruction',
                name: 'Standing Instruction Register (Active/Revoke)',
                id: 191
              },
              {
                state: 'BnkRegInterestInstruction',
                name: 'Interest Instruction Register  (Active/Revoke)',
                id: 192
              },
              {
                state: 'BnkRegSpecialInstruction',
                name: 'Special Instruction Register  (Active/Revoke)',
                id: 193
              },
              {
                state: 'BnkRegInsurence',
                name: 'Insurance Register',
                id: 194
              },
              {
                state: 'BnkODRegister',
                name: 'O.D. Register (Temprary / Periodical)',
                id: 195
              },
              {
                state: 'BnkRegDeadStock',
                name: 'Deadstock Register',
                id: 196
              },
              {
                state: 'BnkIVOpenAndCloseReg',
                name: 'Investment Register (Open/Closed)',
                id: 197
              },
              {
                state: 'BnkRegGoldSilverSubReturn',
                name: 'Gold Silver Submission/Return Register',
                id: 198
              },
              {
                state: 'DepositReceiptRegister',
                name: 'Deposit Receipt Register',
                id: 199
              },
              {
                state: 'lockerRentRegister',
                name: 'Locker Rent Register',
                id: 200
              },
              {
                state: 'lockerRegister',
                name: 'Locker Register Report',
                id: 201
              },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                id: 202
              },

            ]
          },
          //
          {
            state: 'Termdeposit',
            name: 'Term Deposit Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 203,
            children: [
              {
                state: 'maturedbutnotpaid',
                name: 'matured but not paid between two days',
                id: 204
              },
              {
                state: 'maturedbutnotclosed',
                name: 'matured but not closed',
                id: 205
              },
              {
                state: 'depositpaidlist',
                name: 'Deposit Paid List',
                id: 206
              },
              {
                state: 'intratewisebalancelist',
                name: 'Interest Rate Wise List',
                id: 207
              },
              {
                state: 'custidwiseintpaidlist',
                name: 'Customer Id Wise Interest Paid List',
                id: 208
              },
              {
                state: 'custidwiseloaninterestCertificate',
                name: 'Customer Id Wise Deposit Interest Certificate',
                id: 209
              },
              {
                state: 'IntRatewiseMaturityList',
                name: 'Interest Rate wise Maturity List',
                id: 210
              },
              {
                state: 'custidwisedepositlist',
                name: 'Customer Id wise Deposit List',
                id: 211
              },
              {
                state: 'tddetailrecurroverdue',
                name: 'Term Deposite Detail List and Recurring Overdue',
                id: 212
              },
              {
                state: 'prematuredAcCloselist',
                name: 'Prematured A/c Close List',
                id: 213
              },
              {
                state: 'renewalDepositList',
                name: 'Renewal Deposit List',
                id: 214
              },
              {
                state: 'directorwiseDepositlist',
                name: 'Directorwise Deposit List',
                id: 215
              },
              {
                state: 'custidwiseInterestList',
                name: 'Customer Id Wise Interest List',
                id: 216
              },
              {
                state: 'custidwiseMaturedList',
                name: 'Customer Id Wise Matured Deposit List',
                id: 217
              },
              {
                state: 'abtypeDepositList',
                name: 'A/B Type Deposit List',
                id: 218
              },



            ]

          },

          {
            state: 'SharesReports',
            name: 'Shares Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 219,
            children: [
              {
                state: 'cityMemberList',
                name: 'CityWise Member List',
                id: 220
              },

              {
                state: 'dividendPaidList',
                name: 'Dividend Paid List Report',
                id: 221
              },
              {
                state: 'sharesIssueRegister',
                name: 'Shares Issue Register',
                id: 222
              },
              {
                state: 'sharesReturnRegister',
                name: 'Membership Cancellation',
                id: 223
              },
              {
                state: 'sharesTransferRegister',
                name: 'Shares Transfer Register',
                id: 224
              },
              {
                state: 'unpaidDividendList',
                name: 'Unpaid Dividend List',
                id: 225
              },
              {
                state: 'monthlyRecoveryPrint',
                name: 'Monthly Recovery Print',
                id: 226
              },
              {
                state: 'monthlyRecoverySubsidiary',
                name: 'Monthly Recovery Subsidiary',
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
            name: 'Term Loan/Cash Credit Reports',
            short_label: 'D',
            type: 'sub',
            id: 230,
            children: [
              {
                state: 'loanoverduelist',
                name: 'Loan Overdue List',
                type: 'sub',
                id: 231,

              },
              {
                state: 'loansecurityreport',
                name: 'Loan Security Reports',
                type: 'sub',
                id: 232,

              },
              {
                state: 'citiwiseLoanBalancereport',
                name: 'Citiwise Loan Balance Report',
                type: 'sub',
                id: 233,
              },
              {
                state: 'lcdLessdraftReport',
                name: 'Loan Cash Credit Less Draft Report',
                type: 'sub',
                id: 234,
              },
              {
                state: 'lcdOverdraftReport',
                name: 'Loan Cash Credit Over Draft Report',
                type: 'sub',
                id: 235,
              },
              {
                state: 'lcd-renewal-list',
                name: 'Loan Cash Credit Renewal List',
                type: 'sub',
                id: 236,
              },
              {
                state: 'lcd-turnover-list',
                name: 'Loan Cash Credit Turnover List',
                type: 'sub',
                id: 237,
              },
              {
                state: 'penalinterestlist',
                name: 'Received Penal Interest List',
                type: 'sub',
                id: 238,
              },
              {
                state: 'pendingStockStatementlist',
                name: 'Pending Stock Statement List',
                type: 'sub',
                id: 239,
              },
              {
                state: 'receivedStockstatementList',
                name: 'Received Stock Statement List',
                type: 'sub',
                id: 240,
              },
              {
                state: 'recoverycwBalanceList',
                name: 'Recovery Balance List',
                type: 'sub',
                id: 241,
              },
              {
                state: 'receivableInstallInterest',
                name: 'Receivable Installment and Intrest List',
                type: 'sub',
                id: 242,
              },

            ],

          },


          {
            state: 'npaReports',
            name: 'NPA Reports',
            short_label: 'D',
            type: 'sub',
            id: 243,
            children: [
              {
                state: 'npaRegister',
                name: 'NPA Register',
                id: 244
              },
              {
                state: 'npaRegPercentage',
                name: 'NPA Register Percentage',
                id: 245
              },
              {
                state: 'nonNpaRecovery',
                name: 'To be Recovery Non NPA Report',
                id: 246
              },
              {
                state: 'directorwise',
                name: 'Directorwise Recommanded by',
                id: 247
              },
              {
                state: 'citiwisenpa',
                name: 'Citywise NPA Register',
                type: 'sub',
                id: 248,

              },
              {
                state: 'analysisnpa',
                name: 'NPA Analysis Report',
                type: 'sub',
                id: 249,

              },
              {
                state: 'classificationsecnpa',
                name: 'NPA Classification -Secured Or Unsecured.PNG',
                type: 'sub',
                id: 250,
              },
              {
                state: 'classificationstandardnpa',
                name: 'NPA Classification -Standard Or Non Standard.PNG',
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
          // //
          // {
          //   state: 'Report_Frame',
          //   name: 'Report Frame',
          //   id: 253
          // },
          //
          {
            state: 'PigmyReport',
            name: 'Pigmy Report',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 254,
            children: [
              {
                state: 'BnkPigmyCollectionChart',
                name: 'Pigmy Agentwise Collection Chart',
                id: 255
              },
              {
                state: 'BnkPigmyBalanceList',
                name: 'Pigmy Agent Wise Balance List',
                id: 256
              },
              {
                state: 'BnkPigmyBalanceBook',
                name: 'Pigmy Agent Wise Balance Book',
                id: 257
              },
              {
                state: 'BnkPigmyBlankChart',
                name: 'Pigmy Agent Collection Blank Chart',
                id: 258
              },
              {
                state: 'BnkPigmyCommissionRepo',
                name: 'Pigmy Agent Commission Report',
                id: 259
              },
              {
                state: 'pigmyhandbook',
                name: 'Pigmy  HandBook',
                id: 260
              },
              {
                state: 'pigmymaturedAclist',
                name: 'Pigmy  Matured A/C List',
                id: 261
              },
            ]
          },
          //
          {
            state: 'otherReports',
            short_label: 'D',
            name: 'Other Reports',
            type: 'sub',
            icon: 'icon-home',
            id: 262,
            children: [
              {
                state: 'BnkMinorsList',
                name: 'Minor List',
                id: 263
              },
              {
                state: 'BnkNomineeList',
                name: 'Nominee List',
                id: 264
              },
              {
                state: 'BnkGuaranterList',
                name: 'Guaranter List',
                id: 265
              },
              {
                state: 'BnkLienMarkedAcList',
                name: 'Lein mark Account List ',
                id: 266
              },
              // {
              //   state: 'BnkDormantAcList',
              //   name: 'Dormant Account List',
              //   id: 267
              // },
              {
                state: 'BnkAmountMovement',
                name: 'Transaction Amount Movement',
                id: 268
              },
              {
                state: 'BnkDepAmountMovementDetail',
                name: 'Deposit Amount Movement',
                id: 269
              },
              {
                state: 'BnkLNAmountMovementDetail',
                name: 'Loan Amount Movement',
                id: 270
              },
              {
                state: 'BnkGurDetailsList',
                name: 'Guaranter Details',
                id: 271
              },
              {
                state: 'BnkNonGuaranteerView',
                name: 'Non Guarantor (A-Type Members Only) List',
                id: 272
              },
              {
                state: 'custidIntroducerList',
                name: 'CustomerIdwise Introducer List',
                id: 273
              },
              {
                state: 'serviceChargeList',
                name: 'Service Charges List',
                id: 274
              },
              {
                state: 'minorToMajorlist',
                name: 'Minor To Major List',
                id: 275
              },
              {
                state: 'tranLessAclist',
                name: 'Transactionless Account List',
                id: 276
              },
              {
                state: 'dormantAccountList',
                name: 'Dormant Account List',
                id: 277
              },

            ]
          },
          //
          {
            state: 'misReports',
            name: 'MIS Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 278,
            children: [
              // {
              //   state: 'schemeWisedepoaccount',
              //   name: 'SchemeWise Deposit Account Details',
              //   id: 279
              // },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                id: 280
              },
            ]
          },
          //
          {
            state: 'managerViewReports',
            name: 'Manager View Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 281
          },
          //
          {
            state: 'finalReports',
            name: 'Final Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 282,
            children: [
              {
                state: 'BnkTrialBal',
                name: 'Trial Balance ',
                id: 283
              },
              {
                state: 'BnkTrialBaldetail',
                name: 'Trial Balance Detail',
                id: 284
              },
              {
                state: 'BalanceSheet',
                name: 'Balance Sheet',
                id: 285
              },
              {
                state: 'NBalanceSheet',
                name: 'N Form Balance Sheet',
                id: 286
              },
              {
                state: 'ProfitLossAccount',
                name: 'Profit & Loss Account',
                id: 287
              },
              {
                state: 'NProfitLoss',
                name: 'N Form Profit & Loss Account',
                id: 288
              },
              {
                state: 'RecePayRep',
                name: 'Receipt & Payment Report',
                id: 289
              },
              {
                state: 'RecePayRepDetails',
                name: 'Receipt & Payment Report Detail',
                id: 290
              },

            ]
          },
          {
            state: 'RecoveryReport',
            name: 'Recovery Reports',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 291,
            children: [
              {
                state: 'memberAckReport',
                name: 'Member Acknowledgement Report',
                id: 292
              },

             
            ]
          },
        ]
      },
      {
        state: 'utility',
        short_label: 'D',
        name: 'Utility',
        type: 'sub',
        icon: 'icon-home',
        id: 293,
        children: [
          {
            state: 'dayBegin',
            name: 'Day Begin',
            id: 294
          },
          {
            state: 'dayEnd',
            name: 'Day End',
            short_label: 'D',
            type: 'sub',
            id: 295,
            children: [
              {
                state: 'counterWorkDayEnd',
                name: 'Day End Handover',
                id: 296
              },
              {
                state: 'FinalDayEnd',
                name: 'Day End',
                id: 297
              },
              {
                state: 'pigmyDayEnd',
                name: 'pigmy Day End',
                id: 298
              },
            ]
          },
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
            state: 'holiday',
            name: 'Holiday',
            id: 301
          },
          {
            state: 'interestPosting',
            name: 'Interest Posting',
            short_label: 'D',
            type: 'sub',
            id: 302,
            children: [
              {
                state: 'interestCalculation',
                name: 'Interest Calculation',
                id: 303
              },

              {
                state: 'interestPassing',
                name: 'Interest Passing',
                id: 304
              },
              {
                state: 'interestList',
                name: 'Interest List',
                id: 305
              },
            ]
          },
          {
            state: 'processACM',
            name: 'Process And Calculation Menu',
            id: 306
          },
          {
            state: 'pigmyMachineProcess',
            name: 'Pigmy Machine Process',
            id: 307
          },
          {
            state: 'pigmyAppProcess',
            name: 'Pigmy App Process',
            id: 308
          },
          {
            state: 'deadStockP',
            name: 'Dead Stock Process',
            id: 309
          },
          {
            state: 'dividend',
            name: 'Dividend',
            short_label: 'D',
            type: 'sub',
            id: 310,
            children: [
              {
                state: 'dividendList',
                name: 'Dividend List',
                id: 311
              },
              {
                state: 'dividendPost',
                name: 'Dividend Post',
                id: 312
              }
            ]
          },
          {
            state: 'statementHeadInsert',
            name: 'Statement Head Insert',
            id: 313
          },

          // {
          //   state: 'changePassword',
          //   name: 'Change Password',
          //   id: 314
          // },
          {
            state: 'roleDefination',
            name: 'Role Defination',
            id: 315
          },
          {
            state: 'roleMaster',
            name: 'Role Master',
            id: 316
          },
          {
            state: 'userDefination',
            name: 'User Defination',
            id: 317
          },
          {
            state: 'cashierMaintance',
            name: 'Cashier Maintenace',
            id: 318
          },
          {
            state: 'cashierUM',
            name: 'Cashier User Maintainance',
            id: 319
          },
          {
            state: 'sharesCCTS',
            name: 'Shares Contribution Credit To Shares',
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
            name: 'Scheme Amount Transfer Entry',
            id: 323
          },
          {
            state: 'schemeParameters',
            name: 'Scheme Parameters',
            id: 324
          },
          {
            state: 'calculator',
            name: 'Calculator',
            id: 325
          },
          // {
          //   state: 'remindMe',
          //   name: 'Remind Me',
          //   id: 326
          // },
          {
            state: 'dataBackup',
            name: 'Data Backup',
            id: 327
          },
          {
            state: 'pataSevaSupportR',
            name: 'PataSeva Support Register',
            id: 328
          },
          {
            state: 'sharesDataEI',
            name: 'Sheres Data Export / Import',
            id: 329
          },
          // {
          //   state: 'dayBookIE',
          //   name: 'Daybook Import / Export',
          //   id: 330
          // },
          {
            state: 'demandDraftDEI',
            name: 'Demand Draft Data Export/ Import',
            id: 331
          },
          {
            state: 'gmaMemberUpdation',
            name: 'General Meeting Appear Meeting Updation',
            id: 332
          },
          {
            state: 'amtTransferTransaction',
            name: 'Amount Transfer Transaction', 
            id: 333
          },
          {
            state: 'recAmtTrToGL',
            name: 'Recurring Amount Transfer to GL',
            id: 334
          },

        ]
      },
      {
        state: 'windows',
        short_label: 'D',
        name: 'Windows',
        type: 'sub',
        icon: 'icon-home',
        id: 335,
        children: [
          {
            state: 'casecade',
            name: 'CaseCade',
            id: 336
          },
          {
            state: 'tileHorizontaily',
            name: 'Tile Horizontaily',
            id: 337
          },
          {
            state: 'tileVertically',
            name: 'Tile Vertically',
            id: 338
          },

        ]
      },
      {
        state: 'hotKeys',
        short_label: 'D',
        name: 'Hot Key',
        type: 'link',
        icon: 'icon-home',
        id: 339
      },
      {
        state: 'exit',
        short_label: 'D',
        name: 'Sign Out',
        type: 'link',
        icon: 'icon-home',
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
