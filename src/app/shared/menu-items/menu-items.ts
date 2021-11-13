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
        children: [
          {
            state: 'generalLedger',
            name: 'General Ledger',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'gl-statement-code',
                name: 'GL Statement Code'
              },
              {
                state: 'gl-accounts-master',
                name: 'GL Accounts Master'
              },
              {
                state: 'gl-report-master',
                name: 'GL Report Master'
              },
              {
                state: 'gl-report-linking',
                name: 'GL Report Linking'
              },
              {
                state: 'budget-master',
                name: 'Budget Master'
              },
            ]

          },
          {
            state: 'customer',
            name: 'Customer',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'customerId',
                name: 'Customer Id'
              },
              {
                state: 'sharesMaster',
                name: 'Shares Master'
              },
              {
                state: 'anamatGSM',
                name: 'Anamat / General Sub Master'
              },
              {
                state: 'savingMaster',
                name: 'Saving Master'
              },
              {
                state: 'currentAccountMaster',
                name: 'Current Account Master'
              },
              {
                state: 'termDepositsMaster',
                name: 'Term Deposits Master'
              },
              {
                state: 'cashCreditMaster',
                name: 'Cash Credit Master'
              },
              {
                state: 'termLoanMaster',
                name: 'Term Loan Master'
              },
              {
                state: 'disputeLoanMaster',
                name: 'Dispute Loan Master'
              },
              {
                state: 'pigmyAgentMaster',
                name: 'Pigmy Agent Master'
              },
              {
                state: 'pigmyAccountMaster',
                name: 'Pigmy Account Master'
              },
              {
                state: 'deadStockMaster',
                name: 'Dead Stock Master'
              },
            ]
          },
          {
            state: 'balanceEntry',
            short_label: 'D',
            name: 'Balance Entry',
            type: 'sub',
            children: [
              {
                state: 'balanceUpdation',
                name: 'Balance Updation'
              },
              {
                state: 'reconciliationOTE',
                name: 'Reconciliation Opening Transaction Entry'
              },
              {
                state: 'reconciliationTE',
                name: 'Reconciliation Transaction Entry'
              },
              {
                state: 'loanieacdu',
                name: 'Loan Installment Edit and Close Date Updation'
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
            children: [
              {
                state: 'information',
                name: 'Information'
              },
              {
                state: 'definations',
                name: 'Definations'
              },
              {
                state: 'sizewiseBalanceModification',
                name: 'Sizewise Balance Modification'
              },
              {
                state: 'tDReceiptTypeMaster',
                name: 'TD Receipt Type Master'
              },
              {
                state: 'nPAClassificationSlabMaster',
                name: 'NPA Classification Slab Master '
              },
            ]
          },
          {
            state: 'Maintainance',
            name: 'Maintainance',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'securityDetails',
                name: 'Security Details'
              },
              {
                state: 'loanAndCCInterestRateChanges',
                name: 'Loan And CC Interest Rate Changes'
              },
              {
                state: 'depositLoanInterestRateEditChange',
                name: 'Deposit / Loan Interest Rate Edit / Change'
              },
              {
                state: 'npaOpeningDetailsEntry',
                name: 'NPA Opening Details Entry'
              },
              {
                state: 'interestPostingFlagUpdation',
                name: 'Interest Posting Flag Updation'
              },
              {
                state: 'accountwiseDocumentAcceptance',
                name: 'Accountwise Document Acceptance'
              },
              {
                state: 'notingCharges',
                name: 'Noting Charges'
              }
            ]

          },
          {
            state: 'Instruction',
            name: 'Instruction',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'overDraft',
                name: 'Over Draft'
              },
              {
                state: 'standingInstruction',
                name: 'Standing Instruction'
              },
              {
                state: 'interestInstruction',
                name: 'Interest Instruction'
              },
              {
                state: 'special',
                name: 'Special'
              },
              {
                state: 'freezeAccount',
                name: 'Freeze Account'
              },
              {
                state: 'reminderInstruction',
                name: 'Reminder Instruction'
              },
               {
                state: 'revokeStandingInstructions',
                name: 'Revoke Standing Instructions'
              }, {
                state: 'revokeInterestInstruction',
                name: 'Revoke Interest Instruction'
              }, 
              {
                state: 'revokeSpecialInstruction',
                name: 'Revoke Special Instruction'
              },
              {
                state: 'lienMarkClear',
                name: 'Lien Mark Clear'
              },
            ]

          },
          {
            state: 'Investment',
            short_label: 'D',
            name: 'Investment',
            type: 'sub',
            children: [
              {
                state: 'accountOpening',
                name: 'Account Opening'
              },
              {
                state: 'transactionEntry',
                name: 'Transaction Entry'
              },
              {
                state: 'accountClosing',
                name: 'Account Closing'
              },
              {
                state: 'accountOpenPassing',
                name: 'Account Open Passing'
              },
              {
                state: 'transactionPassing',
                name: 'Transaction Passing'
              },
              {
                state: 'accountClosePassing',
                name: 'Account Close Passing'
              },
            ]
          },
          {
            state: 'Shares',
            name: 'Shares/Dividend',
            short_label: 'D',
            type :'sub',
            children:[
              {
                state : 'unpaidDividendEntry',
                name:'Unpaid Dividend Entry'
              },
              {
                state : 'yearWiseUnpaidDividendEntry',
                name:'Year Wise Unpaid Dividend Entry'
              },
              {
                state : 'dividendTransferEntry',
                name:'Dividend Transfer Entry'
              },
              {
                state : 'dividendTransferPosting',
                name:'Dividend Transfer Posting'
              },
              {
                state : 'dividendCalculation',
                name:'Dividend Calculation'
              },
              {
                state : 'dividendPosting',
                name:'Dividend Posting'
              },              
            ]

          },
          {
            state: 'SignatureScanning',
            name: 'SignatureScanning'
          },
          {
            state: 'DDBankCityMaster',
            name: 'DDBankCityMaster'
          },

        ]
      },
      {
        state: 'transaction',
        short_label: 'D',
        name: 'Transaction',
        type: 'sub',
        icon: 'icon-home',
        children: [
          {
            state: 'voucherEntry',
            name: 'Voucher Entry'
          },
          {
            state: 'multiVoucher',
            name: 'Multi Voucher'
          },
          {
            state: 'batchVoucher',
            name: 'Batch Transfer Voucher'
          },
          {
            state: 'memberDAPDT',
            name: 'Member Dividend And Payable Dividend Transaction '
          },
          {
            state: 'memberTransfer',
            name: 'Member Transfer',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            children: [
              {
                state: 'MemberTransferTransaction',
                name: 'Member Transfer Transaction'
              },

              {
                state: 'BranchAndSalaryDC',
                name: 'Branch And Salary Division Changes'   
              },

              {
                state: 'TrasferredMemberOB',
                name: 'Trasferred Member Opening Balances'  
              },
            ]
          },
          {
            state: 'recovery',
            name: 'Recovery',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            children: [
              {
                state: 'recoveryProcessing',
                name: 'Recovery Processing'
              },
              {
                state: 'recoveryModification',
                name: 'Recovery Modification'
              },
              {
                state: 'recoveryPosting',
                name: 'Recovery Posting'
              },
              {
                state: 'recoveryDataImportExport',
                name: 'Recovery Data Import Export'
              },
            ]
          },
          {
            state: 'memberLoan',
            name: 'Member Loan',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'loanApplication',
                name: 'Loan Application'
              },
              {
                state: 'loanSanction',
                name: 'Loan Sanction'
              }
            ]
          },
          {
            state: 'dDTransaction',
            name: 'DD Transaction'
          },
          {
            state: 'pigmyChartEntry',
            name: 'Pigmy Chart Entry'
          },
          {
            state: 'dividendPay',
            name: 'Dividend Pay',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'dividendPaidMarkSD',
                name: 'Dividend Paid Mark(Salary Division)'
              },
              {
                state: 'dividendPaidSD',
                name: 'Dividend Pay(Salary Division)'
              },
            ]
          },
          {
            state: 'cashCreditAcRenewal',
            name: 'Cash Credit A/c Renewal'
          },
          {
            state: 'shareTransactions',
            name: 'Share Transaction'
          },
          {
            state: 'termDepositAccountClosing',
            name: 'Term Deposit Account Closing'
          },
          {
            state: 'TermDepositeAcRenewal',
            name: 'Term Deposite A/c Renewal'
          },
          
          {
            state: 'cashDenomination',
            name: 'Cash Denomination',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'acceptD',
                name: 'Accept Denomination'
              },
              {
                state: 'paymentDenomination',
                name: 'Payment Denomination'
              },
              {
                state: 'cashInDenomination',
                name: 'Cash In Denomination'
              },
              {
                state: 'cashOutDenomination',
                name: 'Cash Out Denomination'
              },
              {
                state: 'cashInitialisationEntry',
                name: 'cash Initialisation Entry'
              },
              {
                state: 'safeValultToCashier',
                name: 'Safe Valult To Cashier'
              },
              {
                state: 'cashierToSafeVault',
                name: 'Cashier To Safe Vault'
              },
            ]
          },
          {
            state: 'passbookPrinting',
            name: 'Passbook Printing',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'passbookIssue',
                name: 'Passbook Issue'
              },
              {
                state: 'passbookEntryPrint',
                name: 'Passbook Entry Print'
              }
            ]
          },
          {
            state: 'termDepositReceiptPrinting',
            name: 'Term Deposit Receipt Printing',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'depositReceiptPrint',
                name: 'Deposit Receipt Print'
              },
            ]
          },
          {
            state: 'deadStockPurchase',
            name: 'Dead Stock Purchase'
          },
          {
            state: 'deadStockTransaction',
            name: 'Dead Stock Transaction'
          },
          {
            state: 'reconciliationEntry',
            name: 'Reconciliation Entry'
          },
        ]
      },
      {
        state: 'passing',
        short_label: 'D',
        name: 'Passing',
        type: 'sub',
        icon: 'icon-home',
        children: [
          {
            state: 'centralisedPassing',
            name: 'Centralised Passing',
          },

          {
            state: 'sharesTransactionPassing',
            name: 'Shares Transaction Passing',
          },
          {
            state: 'unapproval',
            name: 'Unapproval',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'unapprovalMultivoucher',
                name: 'Unapproval Multivoucher'
              },
              {
                state: 'unapprovalVoucher',
                name: 'Unapproval Voucher'
              },
              {
                state: 'unapprovalDepositClosing',
                name: 'Unapproval Deposit Closing'
              },
              {
                state: 'unapprovalDepositPosting',
                name: 'Unapproval Deposit Posting'
              },
            ]
          },
          //
          {
            state: 'masterUnlock',
            name: 'Master Unlock',
          },
        ]
      },
      {
        state: 'view',
        short_label: 'D',
        name: 'View',
        type: 'sub',
        icon: 'icon-home',
        children: [
          {
            state: 'accountEnquiry',
            name: 'Account Enquiry'
          },
          {
            state: 'ledgerView',
            name: 'Ledger View'
          },
          {
            state: 'sharesLedgerView',
            name: 'Shares Ledger View'
          },
          {
            state: 'voucherView',
            name: 'Voucher View'
          },
          {
            state: 'customerView',
            name: 'Customer View'
          },
          {
            state: 'guarantorView',
            name: 'Guarantor View'
          },
          {
            state: 'memberView',
            name: 'Member View'
          },
          {
            state: 'masterCard',
            name: 'Master Card'
          },
          {
            state: 'memberLiablityView',
            name: 'Member Liablity View'
          },
          {
            state: 'otherView',
            name: 'Other View'
          },
        ],

      },
      {
        state: 'reports',
        short_label: 'D',
        name: 'Reports',
        type: 'sub',
        icon: 'icon-home',
        children: [
          {
            state: 'allReportsWithSearching',
            name: 'All Reports With Searching',
          },
          ////////////////////////////
          {
            state: 'dailyReports',
            name: 'Daily Reports',
          },
          //
          {
            state: 'statement',
            name: 'Statement',
          },
          //
          {
            state: 'balanceBook',
            name: 'Balance Book',
          },
          //
          {
            state: 'registers',
            name: 'Registers',
          },
          //
          {
            state: 'denominationReports',
            name: 'Denomination Reports',
          },
          //
          {
            state: 'termDepositReports',
            name: 'Term Deposit Reports',
          },
          //
          {
            state: 'loanReports',
            name: 'Loan Reports',
          },
          //
          {
            state: 'npaReports',
            name: 'NPA Reports',
          },
          //
          {
            state: 'sharesARR',
            name: 'Shares ARR',
          },
          //
          {
            state: 'sharesADR',
            name: 'Shares ADR',
          },
          //
          {
            state: 'nottice',
            name: 'Notice',
          },
          //
          {
            state: 'otherReports',
            name: 'Other Reports',
          },
          //
          {
            state: 'misReports',
            name: 'MIS Reports',
          },
          //
          {
            state: 'finalReports',
            name: 'Final Reports',
          },
        ]
      },
      {
        state: 'utility',
        short_label: 'D',
        name: 'Utility',
        type: 'sub',
        icon: 'icon-home',
        children: [
          {
            state: 'dayBegin',
            name: 'Day Begin',
          },
          {
            state: 'dayEnd',
            name: 'Day End',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'counterWorkDayEnd',
                name: 'counter Work Day End'
              },

              {
                state: 'pigmyDayEnd',
                name: 'pigmy Day End'
              },
            ]
          },
          {
            state: 'backDatedDO',
            name: 'Back Dated Day Open',
          },
          {
            state: 'receiptPrintingD',
            name: 'Receipt Printing Designing',
          },
          {
            state: 'holiday',
            name: 'Holiday',
          },
          {
            state: 'interestPosting',
            name: 'Interest Posting',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'interestCalculation',
                name: 'Interest Calculation'
              },
              {
                state: 'interestList',
                name: 'Interest List'
              },
              {
                state: 'interestPassing',
                name: 'Interest Passing'
              },
            ]
          },
          {
            state: 'processACM',
            name: 'Process And Calculation Menu',
          },
          {
            state: 'deadStockP',
            name: 'Dead Stock Process',
          },
          {
            state: 'dividend',
            name: 'Dividend',
            short_label: 'D',
            type: 'sub',
            children: [
              {
                state: 'dividendList',
                name: 'Dividend List'
              },
              {
                state: 'dividendPost',
                name: 'Dividend Post'
              }
            ]
          },
          {
            state: 'statementHeadInsert',
            name: 'Statement Head Insert',
          },
          
          {
            state: 'changePassword',
            name: 'Change Password',
          },
          {
            state: 'roleDefination',
            name: 'Role Defination',
          },
          {
            state: 'userDefination',
            name: 'User Defination',
          },
          {
            state: 'cashierUM',
            name: 'Cashier User Maintainance',
          },
          {
            state: 'sharesCCTS',
            name: 'Shares Contribution Credit To Shares',
          },
          {
            state: 'silverJACTS',
            name: 'Silver Jubilee Amount Credit To Shares',
          },
          {
            state: 'masikBDW',
            name: 'Masik Bachat Deposit Withdrawl',
          },
          {
            state: 'schemeATE',
            name: 'Scheme Amount Transfer Entry',
          },
          {
            state: 'schemeParameters',
            name: 'Scheme Parameters',
          },
          {
            state: 'calculator',
            name: 'Calculator',
          },
          {
            state: 'remindMe',
            name: 'Remind Me',
          },
          {
            state: 'dataBackup',
            name: 'Data Backup',
          },
          {
            state: 'pataSevaSupportR',
            name: 'PataSeva Support Register',
          },
          {
            state: 'sharesDataEI',
            name: 'Sheres Data Export / Import',
          },
          {
            state: 'dayBookIE',
            name: 'Daybook Import / Export',
          },
          {
            state: 'demandDraftDEI',
            name: 'Demand Draft Data Export/ Import',
          },
        ]
      },
      {
        state: 'windows',
        short_label: 'D',
        name: 'Windows',
        type: 'sub',
        icon: 'icon-home',
        children: [
          {
            state: 'casecade',
            name: 'CaseCade',
          },
          {
            state: 'tileHorizontaily',
            name: 'Tile Horizontaily',
          },
          {
            state: 'tileVertically',
            name: 'Tile Vertically',
          },

        ]
      },
      {
        state: 'hotKeys',
        short_label: 'D',
        name: 'Hot Key',
        type: 'link',
        icon: 'icon-home'
      },
      {
        state: 'exit',
        short_label: 'D',
        name: 'Exit',
        type: 'link',
        icon: 'icon-home'
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
