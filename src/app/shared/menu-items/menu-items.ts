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
  tooltip?: string;
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
  tooltip?: string;
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
        tooltip: 'डॅशबोर्ड',
        type: 'sub',
        icon: 'icon-home',
        id: 1,
        children: [
          {
            state: 'default',
            short_label: 'D',
            name: 'Default',
            tooltip: 'डीफॉल्ट',
            type: 'sub',
            id: 2,
            children: [
              {
                state: 'demo',
                name: 'Demo',
                tooltip: 'डेमो',
                id: 3,
              },
              {
                state: 'demo1',
                name: 'Demo1',
                tooltip: 'डेमो1',
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
        tooltip: 'मास्टर',
        type: 'sub',
        icon: 'fa fa-university',
        id: 5,
        children: [
          {
            state: 'generalLedger',
            name: 'General Ledger',
            tooltip: 'जनरल लेजर',
            short_label: 'D',
            type: 'sub',
            id: 6,
            children: [
              {
                state: 'gl-statement-code',
                name: 'GL Statement Code',
                tooltip: 'जी एल स्टेटमेंट कोड',
                id: 7
              },
              {
                state: 'gl-accounts-master',
                name: 'GL Accounts Master',
                tooltip: 'जी एल अकाउंट्स मास्टर',
                id: 8
              },
              {
                state: 'gl-report-master',
                name: 'GL Report Master',
                tooltip: 'जी एल अहवाल मास्टर',
                id: 9
              },
              {
                state: 'gl-report-linking',
                name: 'GL Report Linking',
                tooltip: 'जी एल अहवाल लिंकिंग',
                id: 10
              },
              {
                state: 'budget-master',
                name: 'Budget Allocation Master',
                tooltip: 'बजेट ऍलोकेशन मास्टर',
                id: 11
              },
              {
                state: 'budget-view',
                name: 'Budget View',
                tooltip: 'बजेट व्यूव ',
                id: 359
              },
            ]

          },
          {
            state: 'customer',
            name: 'Customer',
            tooltip:'ग्राहक',
            short_label: 'D',
            type: 'sub',
            id: 12,
            children: [
              {
                state: 'customerId',
                name: 'Customer Id',
                tooltip:'ग्राहक आयडी',
                id: 13
              },
              {
                state: 'sharesMaster',
                name: 'Shares Account Master',
                tooltip:'शेअर्स अकाउंट मास्टर',
                id: 14
              },
              {
                state: 'anamatGSM',
                name: 'Anamat / General Sub Account Master',
                tooltip:'अनामत / सामान्य उप खाते मास्टर',
                id: 15
              },
              {
                state: 'savingMaster',
                name: 'Saving Account Master',
                tooltip:'बचत खाते मास्टर',
                id: 16
              },
              {
                state: 'currentAccountMaster',
                name: 'Current Account Master',
                tooltip:'चालू खाते मास्टर',
                id: 17
              },
              {
                state: 'termDepositsMaster',
                name: 'Term Deposit Account Master',
                tooltip:'मुदत ठेव खाते मास्टर',
                id: 18
              },
              {
                state: 'cashCreditMaster',
                name: 'Cash Credit Account Master',
                tooltip:'कॅश क्रेडिट खाते मास्टर',
                id: 19
              },
              {
                state: 'termLoanMaster',
                name: 'Term Loan Account Master',
                tooltip:'मुदत कर्ज खाते मास्टर',
                id: 20
              },
              {
                state: 'disputeLoanMaster',
                name: 'Dispute Loan Account Master',
                tooltip:'विवाद कर्ज खाते मास्टर',
                id: 21
              },
              {
                state: 'pigmyAgentMaster',
                name: 'Pigmy Agent Account Master',
                tooltip:'पिग्मी एजंट खाते मास्टर',
                id: 22
              },
              {
                state: 'pigmyAccountMaster',
                name: 'Pigmy Account Master',
                tooltip:'पिग्मी खाते मास्टर',
                id: 23
              },
              {
                state: 'deadStockMaster',
                name: 'Dead Stock Account Master',
                tooltip:'डेड स्टॉक अकाउंट मास्टर',
                id: 24
              },
              {
                state: 'accountOpening',
                name: 'Investment Master',
                tooltip:'गुंतवणूक मास्टर',
                id: 25
              },
              {
                state: 'lockerMaster',
                name: 'Locker Master',
                tooltip:'लॉकर मास्टर',
                id: 26
              },
              {
                state: 'LoanApplication',
                name: 'Loan Application',
                tooltip:'लोन अॅप्लिकेशन',
                id: 368
              },
            ]
          },
          {
            state: 'balanceEntry',
            short_label: 'D',
            name: 'Balance Entry',
            tootltip:'शिल्लक नोंद',
            type: 'sub',
            id: 27,
            children: [
              {
                state: 'balanceUpdation',
                name: 'Balance Updation',
                tootltip:'शिल्लक अपडेशन',
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
            tooltip:'धोरण सेटिंग्ज',
            short_label: 'D',
            type: 'sub',
            id: 32,
            children: [
              {
                state: 'information',
                name: 'Information',
                tooltip:'माहिती',
                id: 33
              },
              {
                state: 'definations',
                name: 'Definations',
                tooltip:'व्याख्या',
                id: 34
              },
              {
                state: 'sizewiseBalanceModification',
                name: 'Sizewise Balance Modification',
                tooltip:'आकारानुसार शिल्लक बदल',
                id: 35
              },
              {
                state: 'tDReceiptTypeMaster',
                name: 'TD Receipt Type Master',
                tooltip:'टीडी पावती प्रकार मास्टर',
                id: 36
              },
              {
                state: 'nPAClassificationSlabMaster',
                name: 'NPA Classification Slab Master ',
                tooltip:'एनपीए वर्गीकरण स्लॅब मास्टर',
                id: 37
              },
            ]
          },
          {
            state: 'Maintainance',
            name: 'Maintainance',
            tooltip:'देखभाल',
            short_label: 'D',
            type: 'sub',
            id: 38,
            children: [
              {
                state: 'securityDetails',
                name: 'Security Details',
                tooltip:'सुरक्षा तपशील',
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
                tooltip:'ठेव / कर्ज व्याज दर संपादित / बदल',
                id: 41
              },
              {
                state: 'npaOpeningDetailsEntry',
                name: 'NPA Opening Details Entry',
                tooltip:'एनपीए उघडण्याच्या तपशीलांची नोंद',
                id: 42
              },
              {
                state: 'interestPostingFlagUpdation',
                name: 'Interest Posting Flag Updation',
                tooltip:'स्वारस्य पोस्टिंग Flag अपडेशन',
                id: 43
              },
              // {
              //   state: 'accountwiseDocumentAcceptance',
              //   name: 'Accountwise Document Acceptance',
              //   id: 44
              // },
              {
                state: 'recoveryFlag',
                name: 'Recovery Flag Updation',
                tooltip:'पुनर्प्राप्ती Flag अपडेशन',
                id: 358
              },
              {
                state: 'notingCharges',
                name: 'Noting Charges',
                tooltip:'नोटिंग शुल्क',
                id: 45
              },
              {
                state: 'tdsformsubmission',
                name: 'TDS Form Submission',
                tooltip:'TDS फॉर्म सबमिशन',
                id: 46
              },
              {
                state: 'moratoriumperiodmaster',
                name: 'Moratorium Period Master',
                tooltip:'मोरेटोरियम पीरियड मास्टर',
                id: 47
              }
            ]

          },
          {
            state: 'Instruction',
            name: 'Instruction',
            tooltip:'सूचना',
            short_label: 'D',
            type: 'sub',
            id: 48,
            children: [
              {
                state: 'overDraft',
                name: 'Over Draft',
                tooltip:'ओव्हर ड्राफ्ट',
                id: 49
              },
              {
                state: 'standingInstruction',
                name: 'Standing Instruction',
                tooltip:'स्थायी सूचना',
                id: 50
              },
              {
                state: 'interestInstruction',
                name: 'Interest Instruction',
                tooltip:'स्वारस्य सूचना',
                id: 51
              },
              {
                state: 'special',
                name: 'Special',
                tooltip:'विशेष',
                id: 52
              },
              {
                state: 'freezeAccount',
                name: 'Freeze Account',
                tooltip:'Freeze खाते',
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
                tooltip:'Lien मार्क क्लियर',
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
            tooltip:'शेअर्स लाभांश',
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
                tooltip:'Year Wise Unpaid Dividend Entry',
                id: 68
              },
              {
                state: 'dividendTransferEntry',
                name: 'Dividend Transfer Instruction',
                tooltip:'लाभांश हस्तांतरण सूचना',
                id: 69
              },
              {
                state: 'dividendCalculation',
                name: 'Dividend Calculation',
                tooltip:'लाभांश गणना',
                id: 70
              },
              {
                state: 'dividendPosting',
                name: 'Dividend Posting',
                tooltip:'लाभांश पोस्टिंग',
                id: 71
              },
              {
                state: 'dividendTransferPosting',
                name: 'Dividend Transfer Posting',
                tooltip:'लाभांश हस्तांतरण पोस्टिंग',
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
        tooltip: 'व्यवहार',
        type: 'sub',
        icon: 'fa fa-money',
        id: 75,
        children: [
          {
            state: 'voucherEntry',
            name: 'Voucher Entry',
            tooltip: 'व्हाउचर एंट्री',
            id: 76
          },
          {
            state: 'multiVoucher',
            name: 'Multi Voucher',
            tooltip: 'मल्टी व्हाउचर',
            id: 77
          },
          {
            state: 'batchVoucher',
            name: 'Batch Transfer Voucher',
            tooltip: 'बॅच ट्रान्सफर व्हाउचर',
            id: 78
          },
          {
            state: 'pigmyChartEntry',
            name: 'Pigmy Chart Entry',
            tooltip: 'पिग्मी चार्ट एंट्री',
            id: 79
          },
          {
            state: 'deadStockPurchase',
            name: 'Dead Stock Purchase',
            tooltip: 'डेड स्टॉक खरेदी',
            id: 80
          },
          {
            state: 'deadStockTransaction',
            name: 'Dead Stock Transaction',
            tooltip: 'डेड स्टॉक व्यवहार',
            id: 81
          },

          {
            state: 'reconciliationEntry',
            name: 'Reconciliation Entry',
            tooltip: 'रेकन्सीलेशन एंट्री ',
            id: 82
          },
          {
            state: 'savingspigmyaccountclosing',
            name: 'Savings-Pigmy Account Closing',
            tooltip: 'बचत-पिग्मी खाते बंद करणे',
            id: 83
          },
          {
            state: 'termDepositAccountClosing',
            name: 'Term Deposit Account Closing',
            tooltip: 'मुदत ठेव खाते बंद करणे',
            id: 84
          },
          {
            state: 'TermDepositeAcRenewal',
            name: 'Term Deposit A/c Renewal',
            tooltip: 'मुदत ठेव खाते नूतनीकरण',
            id: 85
          },
          {
            state: 'cashCreditAcRenewal',
            name: 'Cash Credit A/c Renewal',
            tooltip: 'कॅश क्रेडिट खात्याचे नूतनीकरण',
            id: 86
          },
          {
            state: 'shareTransactions',
            name: 'Share Transaction',
            tooltip: 'शेअर व्यवहार',
            id: 87
          },

          {
            state: 'locker',
            name: 'Locker Transaction',
            tooltip: 'लॉकर व्यवहार',
            short_label: 'L',
            type: 'sub',
            id: 88,
            children: [
              {
                state: 'lockerOpenTransaction',
                name: 'Locker Open Transaction',
                tooltip: 'लॉकर open व्यवहार',
                id: 89
              },
              {
                state: 'lockerCloseTransaction',
                name: 'Locker Close Transaction',
                tooltip: 'लॉकर close व्यवहार',
                id: 90
              },
              {
                state: 'lockerRentTransaction',
                name: 'Locker Rent Transaction',
                tooltip: 'लॉकर भाडे व्यवहार',
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
            tooltip: 'रोख मूल्य',
            id: 96,
            children: [
              {
                state: 'acceptD',
                name: 'Accept Denomination',
                tooltip: 'अॅक्सेप्ट डेनॉमिन ',
                id: 97
              },
              {
                state: 'paymentDenomination',
                name: 'Payment Denomination',
                tooltip: 'पेमेंट  डेनॉमिन ',
                id: 98
              },
              {
                state: 'cashInDenomination',
                name: 'Cash In Denomination',
                tooltip: 'कॅश इन डेनॉमिन ',
                id: 99
              },
              {
                state: 'cashOutDenomination',
                name: 'Cash Out Denomination',
                tooltip: 'कॅश आउट  डेनॉमिन ',
                id: 100
              },
              {
                state: 'cashInitialisationEntry',
                name: 'cash Initialisation Entry',
                tooltip: 'कॅश इनिशियलायझेशन एंट्री ',
                id: 101
              },
              {
                state: 'safeValultToCashier',
                name: 'Safe Valult To Cashier',
                tooltip: 'सेफ Valult टु कॅशीर ',
                id: 102
              },
              {
                state: 'cashierToSafeVault',
                name: 'Cashier To Safe Vault',
                tooltip: 'कॅशीर टु Valult सेफ ',
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
            name: 'Gold/Silver Return Entry',
            tooltip: 'सोने/चांदीची रिटर्न एंट्री',
            id: 111
          },
          {
            state: 'memberDAPDT',
            name: 'Member Dividend And Payable Dividend Transaction ',
            tooltip :'सदस्य लाभांश आणि देय लाभांश व्यवहार',
            id: 112
          },
          {
            state: 'memberTransfer',
            name: 'Member Transfer',
            tooltip:'मेंबर ट्रान्सफर ',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 113,
            children: [
              {
                state: 'MemberTransferTransaction',
                name: 'Member Transfer Transaction',
                tooltip:'मेंबर ट्रान्सफर व्यवहार',
                id: 114
              },

              {
                state: 'BranchAndSalaryDC',
                name: 'Branch And Salary Division Changes',
                tooltip:'शाखा आणि वेतन विभागातील बदल',
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
            tooltip:'रिकव्हरी',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 117,
            children: [
              {
                state: 'recoveryProcessing',
                name: 'Recovery Processing',
                tooltip:'रिकव्हरी प्रोसेसिंग',
                id: 118
              },
              {
                state: 'recoveryModification',
                name: 'Recovery Modification',
                tooltip:'रिकव्हरी बदल',
                id: 119
              },
              {
                state: 'recoveryPosting',
                name: 'Recovery Posting',
                tooltip:'रिकव्हरी पोस्टिंग',
                id: 120
              },
              {
                state: 'recoveryDataImportExport',
                name: 'Recovery Data Import Export',
                tooltip:'रिकव्हरी डेटा आयात निर्यात',
                id: 121
              },
            ]
          },

          {
            state: 'memberLoan',
            name: 'Member Loan',
            tooltip:'सदस्य कर्ज',
            short_label: 'D',
            type: 'sub',
            id: 122,
            children: [
              {
                state: 'loanApplication',
                name: 'Loan Application',
                tooltip:'लोन अॅप्लिकेशन',
                id: 123
              },
              {
                state: 'loanSanction',
                name: 'Loan Sanction',
                tooltip:'कर्ज मंजुरी',
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
            tooltip:'लाभांश पे',
            id: 126,
            children: [
              {
                state: 'dividendPaidMarkSD',
                name: 'Dividend Paid Mark(Salary Division)',
                tooltip:'लाभांश पेड मार्क (पगार विभाग)',
                id: 127
              },
              {
                state: 'dividendPaidSD',
                name: 'Dividend Pay(Salary Division)',
                tooltip:'लाभांश पेड (पगार विभाग)',
                id: 128
              },
            ]
          },
          {
            state: 'cashRecoveryTransaction',
            name: 'Cash Recovery Transaction',
            tooltip:'रोख Recovery व्यवहार',
            id: 129
          },
          {
            state: 'consolidationTransaction',
            name: 'Consolidation Transaction',
            tooltip:'एकत्रीकरण व्यवहार',
            id: 130
          },
          {
            state: 'inwardRegister',
            name: 'Inward Register',
            tooltip:'आवक नोंदणी',
            id: 131
          },
        ]
      },
      {
        state: 'neftRtgs',
        short_label: 'D',
        name: 'NEFT / RTGS ',
        type: 'sub',
        icon: 'fa fa-money',
        tooltip:'NEFT / RTGS',
        id: 349,
        children: [
          {
            state: 'neftTransfer',
            name: 'NEFT Transfer',
            tooltip:'NEFT हस्तांतरण',
            id: 350
          },
          {
            state: 'rtgsTransfer',
            name: 'RTGS Transfer',
            tooltip:'RTGS हस्तांतरण',
            id: 351
          },
          {
            state: 'billPayment',
            name: 'Bill Payment',
            tooltip:'बिल पेमेन्ट ',
            id: 352
          },
          {
            state: 'fundTransfer',
            name: 'Fund Transfer',
            tooltip:'फंड ट्रान्सफर',
            id: 353
          },
        ]
      },
      {
        state: 'passing',
        short_label: 'D',
        name: 'Passing',
        type: 'sub',
        icon: 'fa fa-check-square-o',
        tooltip: 'पासिंग',
        id: 132,
        children: [
          {
            state: 'centralisedPassing',
            name: 'Centralised Passing',
            tooltip: 'Centralised पासिंग',
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
            tooltip: 'नामंजूर',
            id: 135
          },
          {
            state: 'neftPassing',
            name: 'NEFT/RTGS Transaction Passing',
            tooltip: 'एनईएफटी/आरटीजीएस ट्रान्झॅक्शन पासिंग',
            id: 354
          },
        ]
      },
      {
        state: 'view',
        short_label: 'D',
        name: 'View',
        tooltip:'व्यूव',
        type: 'sub',
        icon: 'fa fa-tag',
        id: 136,
        children: [
          {
            state: 'accountEnquiry',
            name: 'Account Enquiry',
            tooltip:'खाते चौकशी',
            id: 137
          },
          {
            state: 'ledgerView',
            name: 'Ledger View',
            tooltip:'लेजर व्यूव',
            id: 138
          },
          {
            state: 'sharesLedgerView',
            name: 'Shares Ledger View',
            tooltip:'शेअर्स लेजर व्यूव',
            id: 139
          },
          {
            state: 'voucherView',
            name: 'Voucher View',
            tooltip:'व्हाउचर व्यूव',
            id: 140
          },
          {
            state: 'customerView',
            name: 'Customer View',
            tooltip:'ग्राहक व्यूव',
            id: 141
          },
          {
            state: 'guarantorView',
            name: 'Guarantor View',
            tooltip:'हमीदार व्यूव',
            id: 142
          },
          {
            state: 'memberView',
            name: 'Member View',
            tooltip:'मेंबर व्यूव',
            id: 143
          },
          {
            state: 'masterCard',
            name: 'Master Card',
            tooltip:'मास्टर कार्ड',
            id: 144
          },
          {
            state: 'memberLiablityView',
            name: 'Member Liablity View',
            tooltip: 'मेंबर Liablity व्यूव',
            id: 145
          },
          {
            state: 'otherView',
            name: 'Other View',
            tooltip: 'इतर व्यूव',
            id: 146
          },
          {
            state: 'managerView',
            name: 'Manager View',
            tooltip: 'व्यवस्थापक व्यूव',
            id: 147

          },
          {
            state: 'lockerView',
            name: 'Locker View',
            tooltip: 'लॉकर व्यूव',
            id: 348

          },
        ],

      },
      {
        state: 'printing',
        short_label: 'D',
        name: 'Printing',
        tooltip: 'प्रिंटिंग',
        type: 'sub',
        icon: 'fa fa-print',
        id: 347,
        children: [
          {
            state: 'voucherPrint',
            name: 'Voucher Printing',
            tooltip: 'वॉउचर प्रिंटिंग',
            id: 110,

          },
          {
            state: 'termDepositReceiptPrinting',
            name: 'Term Deposit Receipt Printing',
            tooltip: 'मुदत ठेव पावती छपाई',
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
            state: 'goldSilverReceipt',
            name: 'Gold/Silver Receipt Print',
            tooltip: 'सोने/चांदीची पावती प्रिंट',
            id: 344
          },
          {
            state: 'passbookPrinting',
            name: 'Passbook Printing',
            tooltip: 'पासबूक प्रिंटिंग',
            short_label: 'D',
            type: 'sub',
            id: 105,
            children: [
              {
                state: 'passbookIssue',
                name: 'Passbook Issue',
                tooltip: 'पासबुक इश्यू',
                id: 106
              },
              {
                state: 'passbookEntryPrint',
                name: 'Passbook Entry Print',
                tooltip: 'पासबुक एंट्री इश्यू',
                id: 107
              }
            ]
          }
        ]
      },
      {
        state: 'reports',
        short_label: 'D',
        name: 'Reports',
        tooltip: 'रेपोर्टस',
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
            name: 'Daily Reports',
            tooltip: 'दैनिक रेपोर्टस',
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
                tooltip: 'टी फॉर्म डे पुस्तक तपशील/सारांश',
                id: 152
              },
              {
                state: 'BnkSubsidaryDetail',
                name: 'Subsidiary  Debit/Credit',
                tooltip: 'सबसिडीअरी डेबिट/क्रेडिट',
                id: 153
              },
              {
                state: 'BnkScrollDetailBoth',
                name: 'Scroll Book Debit/Credit/Both',
                tooltip: 'स्क्रोल बुक डेबिट/क्रेडिट/दोन्ही',
                id: 154
              },
              {
                state: 'IntInstructionExecutionFailure',
                name: 'Interest Instructions Execution List (Failure/Success)',
                tooltip: 'स्वारस्य निर्देशांची अंमलबजावणी यादी (अपयश/यश)',
                id: 155
              },
              {
                state: 'StandingInstExecutionFailure',
                name: 'Standing Instructions Execution List (Failure/Success)',
                tooltip: 'स्थायी निर्देशांची अंमलबजावणी यादी (अपयश/यश)',
                id: 156
              },
              {
                state: 'StandingInstExecutionCredit',
                name: 'Standing Instructions Execution List (Expected Credit Scheme)',
                tooltip: 'स्थायी सूचना अंमलबजावणी यादी (अपेक्षित क्रेडिट योजना)',
                id: 157
              },
              {
                state: 'StandingInstExecutionDebit',
                name: 'Standing Instructions Execution List (Expected Debit Scheme )',
                tooltip: 'स्थायी निर्देशांची अंमलबजावणी यादी (अपेक्षित डेबिट योजना)',
                id: 158
              },
              {
                state: 'IntInstructExecutionCredit',
                name: 'Interest Instructions Execution List (Expected Credit Scheme)',
                tooltip: 'व्याज सूचना अंमलबजावणी यादी (अपेक्षित क्रेडिट योजना)',
                id: 159
              },
              {
                state: 'IntInstructExecutionDebit',
                name: 'Interest Instructions Execution List (Expected Debit Scheme)',
                tooltip:'व्याज निर्देशांची अंमलबजावणी यादी (अपेक्षित डेबिट योजना)',
                id: 160
              },

              {
                state: 'otherSubsidiary',
                name: 'Other Subsidiary',
                tooltip:'इतर Subsidiary',
                id: 341
              },
              {
                state: 'SubsidiarySummery',
                name: ' Subsidary Summery ',
                tooltip:'Subsidiary समरी',
                id: 342
              },
              {
                state: 'headOfficeSubsidary',
                name: 'Head Office Subsidary',
                tooltip:'मुख्य कार्यालय Subsidary',
                id: 386
              },
              {
                state: 'frequencywiseintrestinstructionlit',
                name: 'Frequency wise intrest instruction Excution List',
                tooltip:'Frequency wise intrest instruction Excution List',
                id: 392
              },
              {
                state: 'covering-voucher',
                name: 'Covering Voucher',
                tooltip:'कव्हरिंग व्हाउचर',
                id: 398
              },

            ]
          },
          //
          {
            state: 'statement',
            name: 'Statement',
            tooltip:'स्टेटमेंट',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 163,
            children: [
              {
                state: 'BnkGlAcStatement',
                name: 'GL account Statement',
                tooltip:'जीएल खाते स्टेटमेंट',
                id: 164
              },
              {
                state: 'BnkAcStatement',
                name: 'Account Statement',
                tooltip:'खाते स्टेटमेंट',
                id: 165
              },
              {
                state: 'BnkLNamtStatement',
                name: 'Term Loan stament with other amount',
                tooltip:'इतर रकमेसह मुदत कर्ज विवरण',
                id: 166
              },
              {
                state: 'BnkTDStatement',
                name: 'Term Deposit Statement ',
                tooltip:'मुदत ठेव विवरण',
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
            tooltip:'बॅलेन्स बूक',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 170,
            children: [
              {
                state: 'BnkDedskBalList',
                name: 'Deadstock Balance List',
                tooltip:'डेडस्टॉक शिल्लक यादी',
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
                tooltip:'खाते शिल्लक पुस्तक',
                id: 173
              },
              {
                state: 'BnkACBalList',
                name: 'Account Balance List',
                tooltip:'खाते शिल्लक यादी',
                id: 174
              },
              {
                state: 'BnkCustIDBalList',
                name: 'Customer ID wise Balance List',
                tooltip:'ग्राहक आयडीनुसार शिल्लक यादी',
                id: 175
              },
              {
                state: 'BnkGLConsistRepo',
                name: 'Scheme - General Ledger consistancy Report',
                tooltip:'योजना - सामान्य लेजर सुसंगतता अहवाल',
                id: 176
              },
              {
                state: 'BnkReceiveIntList',
                name: 'Receivable Interest List',
                tooltip:'Receivable व्याज यादी',
                id: 177
              },
              {
                state: 'BnkPayIntList',
                name: 'Payable Interest List',
                tooltip:'देय व्याज यादी',
                id: 178
              },
              {
                state: 'BnkDedskBalListDepre',
                name: 'Deadstock Balance List with depreciation',
                tooltip:'डेड स्टॉक बॅलेन्स लिस्ट with depreciation',
                id: 179
              },
              {
                state: 'BnkDptAMList',
                name: 'Deposite Amount Wise Balance List',
                tooltip:'ठेव रकमेनुसार शिल्लक यादी',
                id: 180
              },
              {
                state: 'CatbalList',
                name: 'Categorywise Balance List',
                tooltip:'श्रेणीनिहाय शिल्लक यादी',
                id: 181
              },
              {
                state: 'DebbalReport',
                name: 'Debit Balance Report',
                tooltip:'डेबिट शिल्लक अहवाल',
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
                tooltip:'रक्कमनिहाय शिल्लक यादी',
                id: 185
              },
              {
                state: 'DeadStockDepCatList',
                name: 'Deadstock Depriciation Categorywise List',
                tooltip:'डेड स्टॉक घसारा श्रेणीनुसार यादी',
                id: 186
              },
              {
                state: 'BalConCertificate',
                name: 'Balance Confirmation Ceritificate',
                tooltip:'शिल्लक पुष्टीकरण प्रमाणपत्र',
                id: 187
              },
              {
                state: 'shortballist',
                name: 'Short Balance List',
                tooltip:'लहान शिल्लक यादी',
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
                tooltip:'खाते उघडणे आणि बंद करणे रजिस्टर',
                id: 190
              },
              {
                state: 'BnkRegStandingInstruction',
                name: 'Standing Instruction Register (Active/Revoke)',
                tooltip:'स्थायी सूचना रजिस्टर (सक्रिय/रद्द करा)',
                id: 191
              },
              {
                state: 'BnkRegInterestInstruction',
                name: 'Interest Instruction Register  (Active/Revoke)',
                tooltip:'व्याज सूचना नोंदवही (सक्रिय/रद्द करा)',
                id: 192
              },
              {
                state: 'BnkRegSpecialInstruction',
                name: 'Special Instruction Register  (Active/Revoke)',
                tooltip:'विशेष सूचना रजिस्टर (सक्रिय/रद्द करा)',
                id: 193
              },
              {
                state: 'BnkRegInsurence',
                name: 'Insurance Register',
                tooltip:'विमा नोंदणी',
                id: 194
              },
              {
                state: 'BnkODRegister',
                name: 'O.D. Register (Temprary / Periodical)',
                tooltip:'ओ.डी. नोंदणी (तात्पुरती / नियतकालिक)',
                id: 195
              },
              {
                state: 'BnkRegDeadStock',
                name: 'Deadstock Register',
                tooltip:'डेडस्टॉक रजिस्टर',
                id: 196
              },
              {
                state: 'BnkIVOpenAndCloseReg',
                name: 'Investment Register (Open/Closed)',
                tooltip:'गुंतवणूक रजिस्टर (खुले/बंद)',
                id: 197
              },
              {
                state: 'BnkRegGoldSilverSubReturn',
                name: 'Gold Silver Submission/Return Register',
                tooltip:'गोल्ड सिल्व्हर सबमिशन/रिटर्न रजिस्टर',
                id: 198
              },
              {
                state: 'DepositReceiptRegister',
                name: 'Deposit Receipt Register',
                tooltip:'ठेव पावती नोंदवही',
                id: 199
              },
              {
                state: 'lockerRentRegister',
                name: 'Locker Rent Register',
                tooltip:'लॉकर भाडे नोंदणी',
                id: 200
              },
              {
                state: 'lockerRegister',
                name: 'Locker Register Report',
                tooltip:'लॉकर नोंदणी अहवाल',
                id: 201
              },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                tooltip:'जादा रोख शिल्लक अहवाल',
                id: 202
              },
              {
                state: 'lockerkeyregister',
                name: 'Locker key Register Report',
                tooltip:'लॉकर की नोंदणी अहवाल',
                id: 389
              },
              {
                state: 'totalchallandetails',
                name: 'total challan Details',
                tooltip:'एकूण चलन तपशील',
                id: 393
              },
              {
                state: 'closedaccountlist',
                name: 'Closed Account List',
                tooltip:'बंद खाते यादी',
                id: 394
              },
              {
                state: 'accountopenbetweendates',
                name: 'Account Open between Dates',
                tooltip:'तारखांच्या दरम्यान खाते उघडा',
                id: 396
              },

            ]
          },
          //
          {
            state: 'Termdeposit',
            name: 'Term Deposit Reports',
            tooptip:'मुदत ठेव अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 203,
            children: [
              {
                state: 'maturedbutnotpaid',
                name: 'matured but not paid between two days',
                tooptip:'matured पण दोन दिवसात पैसे दिले नाहीत',
                id: 204
              },
              {
                state: 'maturedbutnotclosed',
                name: 'matured but not closed',
                tooltip:'matured पण बंद नाही',
                id: 205
              },
              {
                state: 'depositpaidlist',
                name: 'Deposit Paid List',
                tooltip:'देय ठेव यादी',
                id: 206
              },
              {
                state: 'intratewisebalancelist',
                name: 'Interest Rate Wise List',
                tooltip:'व्याजदरानुसार यादी',
                id: 207
              },
              {
                state: 'custidwiseintpaidlist',
                name: 'Customer Id Wise Interest Paid List',
                tooltip:'ग्राहक आयडीनुसार व्याज भरलेली यादी',
                id: 208
              },
              {
                state: 'custidwiseloaninterestCertificate',
                name: 'Customer Id Wise Deposit Interest Certificate',
                tooltip:'ग्राहक आयडी निहाय ठेव व्याज प्रमाणपत्र',
                id: 209
              },
              {
                state: 'IntRatewiseMaturityList',
                name: 'Interest Rate wise Maturity List',
                tooltip:'व्याजदरानुसार परिपक्वता यादी',
                id: 210
              },
              {
                state: 'custidwisedepositlist',
                name: 'Customer Id wise Deposit List',
                tooltip:'ग्राहक आयडीनुसार ठेव यादी',
                id: 211
              },
              {
                state: 'tddetailrecurroverdue',
                name: 'Term Deposite Detail List and Recurring Overdue',
                tooltip:'मुदत ठेव तपशील यादी आणि आवर्ती थकीत',
                id: 212
              },
              {
                state: 'prematuredAcCloselist',
                name: 'Prematured A/c Close List',
                tooltip:'Prematured खाते बंद यादी',
                id: 213
              },
              {
                state: 'renewalDepositList',
                name: 'Renewal Deposit List',
                tooltip:'नूतनीकरण ठेव यादी',
                id: 214
              },
              {
                state: 'directorwiseDepositlist',
                name: 'Directorwise Deposit List',
                tooltip:'Directorwise ठेव यादी',
                id: 215
              },
              {
                state: 'custidwiseInterestList',
                name: 'Customer Id Wise Interest List',
                tooltip:'ग्राहक आयडीनुसार स्वारस्य यादी',
                id: 216
              },
              {
                state: 'custidwiseMaturedList',
                name: 'Customer Id Wise Matured Deposit List',
                tooltip:'ग्राहक आयडीनुसार ठेव यादी',
                id: 217
              },
              {
                state: 'abtypeDepositList',
                name: 'A/B Type Deposit List',
                tooltip:'A/B प्रकार ठेव यादी',
                id: 218
              },
              {
                state: 'tdsinterestList',
                name: 'tds Interest List',
                tooltip:'tds व्याज यादी',
                id: 367
              },
              {
                state: 'AmountwiseDepositIntrestCerti',
                name: 'Amountwise Deposit Intrest Certificate',
                tooltip:'रक्कम निहाय ठेव व्याज प्रमाणपत्र',
                id: 390
              },
              {
                state: 'customerIdWiseTDSreport',
                name: 'customer Id Wise TDS report',
                tooltip:'ग्राहक आयडीनुसार टीडीएस अहवाल',
                type: 'sub',
                id: 388,
              },

            ]

          },

          {
            state: 'SharesReports',
            name: 'Shares Reports',
            tooltip:'शेअर अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 219,
            children: [
              {
                state: 'cityMemberList',
                name: 'CityWise Member List',
                tooltip:'सिटीवाइज सदस्य यादी',
                id: 220
              },

              {
                state: 'dividendPaidList',
                name: 'Dividend Paid List Report',
                tooltip:'लाभांश देय यादी अहवाल',
                id: 221
              },
              {
                state: 'sharesIssueRegister',
                name: 'Shares Issue Register',
                tooltip:'शेअर्स इश्यू रजिस्टर',
                id: 222
              },
              {
                state: 'sharesReturnRegister',
                name: 'Shares Return Register',
                tooltip:'शेअर्स रिटर्न रजिस्टर',
                id: 223
              },
              {
                state: 'sharesTransferRegister',
                name: 'Shares Transfer Register',
                tooltip:'शेअर्स ट्रान्सफर रजिस्टर',
                id: 224
              },
              {
                state: 'unpaidDividendList',
                name: 'Unpaid Dividend List',
                tooltip:'न भरलेल्या लाभांशाची यादी',
                id: 225
              },
              {
                state: 'monthlyRecoveryPrint',
                name: 'Monthly Recovery Print',
                tooltip:'मासिक पुनर्प्राप्ती प्रिंट',
                id: 226
              },
              {
                state: 'monthlyRecoverySubsidiary',
                name: 'Monthly Recovery Subsidiary',
                tooltip:'मासिक पुनर्प्राप्ती उपकंपनी',
                id: 227
              },
              {
                state: 'DividentTransferRegister',
                name: 'Divident Transfer Register',
                tooltip:'लाभांश हस्तांतरण रजिस्टर',
                id: 366
              },
              {
                state: 'mrutunjay-register',
                name: 'mrutunjay Register',
                tooltip:'मृतंजय रजिस्टर',
                id: 375
              },
              {
                state: 'shares-nominee-list',
                name: 'shares nominee list',
                tooltip:'शेअर्स नामनिर्देशित यादी',
                id: 376
              },
              {
                state: 'shares-account-label-print',
                name: 'Shares Account Label Print',
                tooltip:'शेअर खाते लेबल प्रिंट',
                id: 378
              },
              {
                state: 'currentunpaiddividend',
                name: 'current Unpaid Dividend',
                tooltip:'वर्तमान न भरलेला लाभांश',
                id: 379
              },
              {
                state: 'birthday-wish',
                name: 'Birthday Wish',
                tooltip:'वाढदिवसाच्या शुभेच्छा',
                id: 381
              },
              {
                state: 'dividentpaid',
                name: 'Divident Paid',
                tooltip:'लाभांश दिला',
                id: 397
              },
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
            tooltip:'मुदत कर्ज/कॅश क्रेडिट अहवाल',
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
                name: 'Loan Security Reports',
                tooltip:'कर्ज सुरक्षा अहवाल',
                type: 'sub',
                id: 232,

              },
              {
                state: 'citiwiseLoanBalancereport',
                name: 'Citiwise Loan Balance Report',
                tooltip:'सिटीनिहाय कर्ज शिल्लक अहवाल',
                type: 'sub',
                id: 233,
              },
              {
                state: 'lcdLessdraftReport',
                name: 'Loan Cash Credit Less Draft Report',
                tooltip:'कर्ज रोख क्रेडिट कमी मसुदा अहवाल',
                type: 'sub',
                id: 234,
              },
              {
                state: 'lcdOverdraftReport',
                name: 'Loan Cash Credit Over Draft Report',
                tooltip:'मसुदा अहवालावर कर्ज रोख क्रेडिट',
                type: 'sub',
                id: 235,
              },
              {
                state: 'lcd-renewal-list',
                name: 'Loan Cash Credit Renewal List',
                tooltip:'कर्ज रोख क्रेडिट नूतनीकरण यादी',
                type: 'sub',
                id: 236,
              },
              {
                state: 'lcd-turnover-list',
                name: 'Loan Cash Credit Turnover List',
                tooltip:'कर्ज रोख क्रेडिट टर्नओव्हर यादी',
                type: 'sub',
                id: 237,
              },
              {
                state: 'penalinterestlist',
                name: 'Received and Penal Interest List',
                tooltip:'प्राप्त आणि दंड व्याज यादी',
                type: 'sub',
                id: 238,
              },
              {
                state: 'pendingStockStatementlist',
                name: 'Pending Stock Statement List',
                tooltip:'प्रलंबित स्टॉक स्टेटमेंट यादी',
                type: 'sub',
                id: 239,
              },
              {
                state: 'receivedStockstatementList',
                name: 'Received Stock Statement List',
                tooltip:'स्टॉक स्टेटमेंट यादी प्राप्त झाली',
                type: 'sub',
                id: 240,
              },
              {
                state: 'recoverycwBalanceList',
                name: 'Recovery Balance List',
                tooltip:'पुनर्प्राप्ती शिल्लक यादी',
                type: 'sub',
                id: 241,
              },
              {
                state: 'receivableInstallInterest',
                name: 'Receivable Installment and Intrest List',
                tooltip:'प्राप्त हप्ता आणि व्याज यादी',
                type: 'sub',
                id: 242,
              },
              {
                state: 'loanExpiredList',
                name: 'Loan / CC Expired List',
                tooltip:'कर्ज / सीसी कालबाह्य यादी',
                type: 'sub',
                id: 343,
              },
              {
                state: 'loanduecertificate',
                name: 'Loan Due Certificate',
                tooltip:'कर्ज थकीत प्रमाणपत्र',
                type: 'sub',
                id: 355,
              },
              {
                state: 'count-wise-lawad-loan',
                name: 'count Wise Lawad Loan',
                tooltip:'count Wise Lawad Loan',
                type: 'sub',
                id: 377,
              },
              {
                state: 'security-reports',
                name: 'Security Reports',
                tooltip:'सुरक्षा अहवाल',
                type: 'sub',
                id: 382,
              },
              {
                state: 'interest-ratewise-classification-of-loan',
                name: 'Interest ratewise-classification-of loan',
                tooltip:'कर्जाचे व्याज दरनिहाय-वर्गीकरण',
                type: 'sub',
                id: 385,
              },
             
              {
                state: 'drawingPowerRegister',
                name: 'Drawing Power Register',
                tooltip:'पॉवर रजिस्टर ड्रॉइंग',
                type: 'sub',
                id: 391,
              },

            ],

          },


          {
            state: 'npaReports',
            name: 'NPA & Overdue Reports',
            short_label: 'D',
            type: 'sub',
            tooltip:'एनपीए आणि थकीत अहवाल',
            id: 243,
            children: [
              {
                state: 'loanoverduelist',
                name: 'Loan Overdue Reports',
                tooltip:'कर्ज थकीत अहवाल',
                type: 'sub',
                id: 252,

              },
              {
                state: 'npaRegister',
                name: 'NPA Register',
                tooltip:'एनपीए नोंदणी',
                id: 244
              },
              {
                state: 'npaRegPercentage',
                name: 'NPA Register Percentage',
                tooltip:'एनपीए नोंदणी टक्केवारी',
                id: 245
              },
              {
                state: 'nonNpaRecovery',
                name: 'To be Recovery Non NPA Report',
                tooltip:'रिकव्हरी नॉन एनपीए अहवाल असणे',
                id: 246
              },
              {
                state: 'directorwise',
                name: 'Directorwise Recommanded by',
                tooltip:'डायरेक्टर वाईज यांनी शिफारस केली आहे',
                id: 247
              },
              {
                state: 'citiwisenpa',
                name: 'Citywise NPA Register',
                tooltip:'शहरनिहाय एनपीए रजिस्टर',
                type: 'sub',
                id: 248,

              },
              {
                state: 'analysisnpa',
                name: 'NPA Analysis Report',
                tooltip:'एनपीए विश्लेषण अहवाल',
                type: 'sub',
                id: 249,

              },
              {
                state: 'classificationsecnpa',
                name: 'NPA Classification -Secured Or Unsecured',
                tooltip:'एनपीए वर्गीकरण - सुरक्षित किंवा असुरक्षित',
                type: 'sub',
                id: 250,
              },
              {
                state: 'classificationstandardnpa',
                name: 'NPA Classification -Standard Or Non Standard',
                type: 'sub',
                id: 251,
              },
              {
                state: 'classificationstandardnpa',
                name: 'NPA Classification -Standard Or Non Standard',
                tooltip:'एनपीए वर्गीकरण - सुरक्षित किंवा असुरक्षित',
                type: 'sub',
                id: 252,
              },
              {
                state: 'LawadLoanOverdue',
                name: 'Lawad Loan Overdue',
                tooltip:'Lawad Loan Overdue',
                type: 'sub',
                id: 362,
              },
              {
                state: 'coparativeDeSummary',
                name: 'coparative Detail Summary',
                tooltip:'तुलनात्मक तपशीलवार सारांश',
                type: 'sub',
                id: 383,
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
            tooltip:'पिग्मी अहवाल',
            id: 254,
            children: [
              {
                state: 'BnkPigmyCollectionChart',
                name: 'Pigmy Agentwise Collection Chart',
                tooltip:'पिग्मी एजंटनिहाय संकलन चार्ट',
                id: 255
              },
              {
                state: 'BnkPigmyBalanceList',
                name: 'Pigmy Agent Wise Balance List',
                tooltip:'पिग्मी एजंट शहाणे शिल्लक यादी',
                id: 256
              },
              {
                state: 'BnkPigmyBalanceBook',
                name: 'Pigmy Agent Wise Balance Book',
                tooltip:'पिग्मी एजंट वाईज बॅलन्स बुक',
                id: 257
              },
              {
                state: 'BnkPigmyBlankChart',
                name: 'Pigmy Agent Collection Blank Chart',
                tooltip:'पिग्मी एजंट कलेक्शन ब्लँक चार्ट',
                id: 258
              },
              {
                state: 'BnkPigmyCommissionRepo',
                name: 'Pigmy Agent Commission Report',
                tooltip:'पिग्मी एजंट कमिशन अहवाल',
                id: 259
              },
              {
                state: 'pigmyhandbook',
                name: 'Pigmy  HandBook',
                tooltip:'पिग्मी हँडबुक',
                id: 260
              },
              {
                state: 'pigmymaturedAclist',
                name: 'Pigmy  Matured A/C List',
                tooltip:'पिग्मी मॅच्युअर A/C यादी',
                id: 261
              },
              {
                state: 'loanRegularCollectionwise',
                name: 'loan & regular collectionwise pigmy agent comission',
                tooltip:'कर्ज आणि नियमित संकलननिहाय पिग्मी एजंट कमिशन',
                id: 372
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
            tooltip:'इतर अहवाल',
            id: 262,
            children: [
              {
                state: 'BnkMinorsList',
                name: 'Minor List',
                tooltip:'किरकोळ यादी',
                id: 263
              },
              {
                state: 'BnkNomineeList',
                name: 'Nominee List',
                tooltip:'नामनिर्देशित यादी',
                id: 264
              },
              {
                state: 'BnkGuaranterList',
                name: 'Guaranter List',
                tooltip:'हमीदार यादी',
                id: 265
              },
              {
                state: 'BnkLienMarkedAcList',
                name: 'Lein mark Account List ',
                tooltip:'Lein mark Account List',
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
                tooltip:'व्यवहाराच्या रकमेची हालचाल',
                id: 268
              },
              {
                state: 'BnkDepAmountMovementDetail',
                name: 'Deposit Amount Movement',
                tooltip:'ठेव रकमेची हालचाल',
                id: 269
              },
              {
                state: 'BnkLNAmountMovementDetail',
                name: 'Loan Amount Movement',
                tooltip:'कर्जाच्या रकमेची हालचाल',
                id: 270
              },
              {
                state: 'BnkGurDetailsList',
                name: 'Guaranter Details',
                tooltip:'हमीदार तपशील',
                id: 271
              },
              {
                state: 'BnkNonGuaranteerView',
                name: 'Non Guarantor (A-Type Members Only) List',
                tooltip:'नॉन गॅरेंटर (केवळ ए-टाइप सदस्य) यादी',
                id: 272
              },
              {
                state: 'custidIntroducerList',
                name: 'CustomerIdwise Introducer List',
                tooltip:'ग्राहक आयडीनुसार परिचयकर्ता यादी',
                id: 273
              },
              {
                state: 'serviceChargeList',
                name: 'Service Charges List',
                tooltip:'सेवा शुल्क यादी',
                id: 274
              },
              {
                state: 'minorToMajorlist',
                name: 'Minor To Major List',
                tooltip:'किरकोळ ते प्रमुख यादी',
                id: 275
              },
              {
                state: 'tranLessAclist',
                name: 'Transactionless Account List',
                tooltip:'व्यवहारविरहित खाते सूची',
                id: 276
              },
              {
                state: 'dormantAccountList',
                name: 'Dormant Account List',
                tooltip:'Dormant खात्यांची यादी',
                id: 277
              },
              {
                state: 'forzenaccount',
                name: 'Forzen Account',
                tooltip:'Forzen खाते',
                id: 380
              },
              {
                state: 'nonmemberlist',
                name: 'Non Member List',
                tooltip:'सदस्य नसलेली यादी',
                id: 395
              },

            ]
          },
          //
          {
            state: 'misReports',
            name: 'MIS Reports',
            tooltip:'MIS अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 278,
            children: [
              {
                state: 'loanBalanceBetTwoDates',
                name: 'Loan Balance Bet Two Dates Report',
                tooltip:'दोन तारखांच्या अहवालादरम्यान कर्जाची शिल्लक',
                id: 356
              },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                tooltip:'जादा रोख शिल्लक अहवाल',
                id: 280
              },
              {
                state: 'statistical',
                name: 'statistical',
                tooltip:'सांख्यिकीय',
                id: 363
              },
              {
                state: 'comparativeStatment',
                name: 'comparative Statment',
                tooltip:'तुलनात्मक विधान',
                id: 364
              },
              {
                state: 'expensiveList',
                name: 'Expensive List',
                tooltip:'महाग यादी',
                id: 365
              },
              {
                state: 'TransactionwiseMonthlyStatus',
                name: 'Transactionwise Monthly Status',
                tooltip:'व्यवहारानुसार मासिक स्थिती',
                id: 371
              },
              {
                state: 'WeeklyLedgerBalance',
                name: 'Weekly Ledger Balance',
                tooltip:'साप्ताहिक लेजर शिल्लक',
                id: 373
              },
            ]
          },
          //
          {
            state: 'managerViewReports',
            name: 'Manager View Reports',
            tooltip:'व्यवस्थापक पहा अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 281
          },
          //
          {
            state: 'finalReports',
            name: 'Final Reports',
            tooltip:'अंतिम अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 282,
            children: [
              {
                state: 'BnkTrialBal',
                name: 'Trial Balance ',
                tooltip:'चाचणी शिल्लक',
                id: 283
              },
              {
                state: 'BnkTrialBaldetail',
                name: 'Trial Balance Detail',
                tooltip:'चाचणी शिल्लक तपशील',
                id: 284
              },
              {
                state: 'BalanceSheet',
                name: 'Balance Sheet',
                tooltip:'ताळेबंद',
                id: 285
              },
              {
                state: 'NBalanceSheet',
                name: 'N Form Balance Sheet',
                tooltip:'एन फॉर्म ताळेबंद',
                id: 286
              },
              {
                state: 'ProfitLossAccount',
                name: 'Profit & Loss Account',
                tooltip:'नफा आणि तोटा खाते',
                id: 287
              },
              {
                state: 'NProfitLoss',
                name: 'N Form Profit & Loss Account',
                tooltip:'एन फॉर्म नफा आणि तोटा खाते',
                id: 288
              },
              {
                state: 'RecePayRep',
                name: 'Receipt & Payment Report',
                tooltip:'पावती आणि देयक अहवाल',
                id: 289
              },
              {
                state: 'RecePayRepDetails',
                name: 'Receipt & Payment Report Detail',
                tooltip:'पावती आणि देयक अहवाल तपशील',
                id: 290
              },

            ]
          },
          {
            state: 'RecoveryReport',
            name: 'Recovery Reports',
            tooltip:'पुनर्प्राप्ती अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 291,
            children: [
              {
                state: 'memberAckReport',
                name: 'Member Acknowledgement Report',
                tooltip:'सदस्य पोचपावती अहवाल',
                id: 292
              },


            ]
          },
          {
            state: 'EmployeeSocity',
            name: 'Employee Socity Reports',
            tooltip:'कर्मचारी सोसायटी अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 369,
            children: [
              {
                state: 'termdeposit',
                name: 'Term Deposit Report',
                tooltip:'मुदत ठेव अहवाल',
                id: 370
              },
              {
                state: 'SharesandRecovery',
                name: 'Shares and Recovery',
                tooltip:'शेअर्स आणि रिकव्हरी',
                id: 387
              },

            ]
          },

        ]
      },
      {
        state: 'utility',
        short_label: 'D',
        name: 'Utility',
        tooltip:'उपयुक्तता',
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
            name: 'Interest Posting',
            tooltip:'स्वारस्य पोस्टिंग',
            short_label: 'D',
            type: 'sub',
            id: 302,
            children: [
              {
                state: 'interestCalculation',
                name: 'Interest Calculation',
                tooltip:'व्याज गणना',
                id: 303
              },

              {
                state: 'interestPassing',
                name: 'Interest Passing',
                tooltip:'व्याज उत्तीर्ण',
                id: 304
              },
              {
                state: 'interestList',
                name: 'Interest List',
                tooltip:'व्याज यादी',
                id: 305
              },
            ]
          },

          {
            state: 'pigmyMachineProcess',
            name: 'Pigmy Machine Process',
            tooltip:'पिग्मी मशीन प्रोसेस',
            id: 307
          },
          {
            state: 'pigmyAppProcess',
            name: 'Pigmy App Process',
            tooltip:'पिग्मी ॲप प्रक्रिया',
            id: 308
          },
          {
            state: 'monthRecProc',
            name: 'Monthly Recovery Process',
            tooltip:'मासिक पुनर्प्राप्ती प्रक्रिया',
            id: 357
          },

          {
            state: 'whatsappmessages',
            name: 'Whatsapp Messages',
            tooltip:'Whatsapp संदेश',
            id: 345
          },
          {
            state: 'deadStockP',
            name: 'Dead Stock Process',
            tooltip:'डेड स्टॉक प्रक्रिया',
            id: 309
          },
          {
            state: 'dividend',
            name: 'Dividend',
            tooltip:'लाभांश',
            short_label: 'D',
            type: 'sub',
            id: 310,
            children: [
              {
                state: 'dividendList',
                name: 'Dividend List',
                tooltip:'लाभांश यादी',
                id: 311
              },
              {
                state: 'dividendPost',
                name: 'Dividend Post',
                tooltip:'लाभांश पोस्ट',
                id: 312
              }
            ]
          },
          {
            state: 'statementHeadInsert',
            name: 'Statement Head Insert',
            tooltip:'स्टेटमेंट हेड इन्सर्ट',
            id: 313
          },


          {
            state: 'roleDefination',
            name: 'Role Defination',
            tooltip:'भूमिका व्याख्या',
            id: 315
          },
          {
            state: 'roleMaster',
            name: 'Role Master',
            tooltip:'रोल मास्टर',
            id: 316
          },
          {
            state: 'userDefination',
            name: 'User Defination',
            tooltip:'वापरकर्ता व्याख्या',
            id: 317
          },
          {
            state: 'cashierMaintance',
            name: 'Cashier Maintenace',
            tooltip:'रोखपाल देखभाल',
            id: 318
          },
          {
            state: 'cashierUM',
            name: 'Cashier User Maintainance',
            tooltip:'रोखपाल वापरकर्ता देखभाल',
            id: 319
          },
          {
            state: 'sharesCCTS',
            name: 'Shares Contribution Credit To Shares',
            tooltip:'शेअर्सचे योगदान क्रेडिट',
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
            tooltip:'योजना रक्कम हस्तांतरण नोंद',
            id: 323
          },
          {
            state: 'schemeParameters',
            name: 'Scheme Parameters',
            tooltip:'योजना पॅरामीटर्स',
            id: 324
          },
          {
            state: 'calculator',
            name: 'Calculator',
            tooltip:'कॅल्क्युलेटर',
            id: 325
          },
          // {
          //   state: 'remindMe',
          //   name: 'Remind Me',
          //   id: 326
          // },

          {
            state: 'pataSevaSupportR',
            name: 'PataSeva Support Register',
            tooltip:'पतसेवा सपोर्ट रजिस्टर',
            id: 328
          },
          {
            state: 'sharesDataEI',
            name: 'Sheres Data Export / Import',
            tooltip:'शेअर्सचे डेटा निर्यात / आयात',
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
            tooltip:'डिमांड ड्राफ्ट डेटा निर्यात/आयात',
            id: 331
          },
          {
            state: 'gmaMemberUpdation',
            name: 'General Meeting Appear Meeting Updation',
            tooltip:'सर्वसाधारण सभेत सभेचे अद्ययावतीकरण दिसून येते',
            id: 332
          },
          {
            state: 'amtTransferTransaction',
            name: 'Amount Transfer Transaction',
            tooltip:'रक्कम हस्तांतरण व्यवहार',
            id: 333
          },
          {
            state: 'recAmtTrToGL',
            name: 'Recurring Amount Transfer to GL',
            tooltip:'आवर्ती रक्कम जी एल  मध्ये हस्तांतरण',
            id: 334
          },

        ]
      },
      {
        state: 'process',
        short_label: 'D',
        name: 'Process',
        tooltip:'प्रक्रिया',
        type: 'sub',
        icon: 'fa fa-cogs',
        id: 346,
        children: [
          {
            state: 'dayBegin',
            name: 'Day Begin',
            tooltip:'दिवसाची सुरुवात',
            id: 294
          },
          {
            state: 'dayEnd',
            name: 'Day End',
            tooltip:'दिवसाचा शेवट',
            short_label: 'D',
            type: 'sub',
            id: 295,
            children: [
              {
                state: 'counterWorkDayEnd',
                name: 'Day End Handover',
                tooltip:'डे एंड हँडओव्हर',
                id: 296
              },
              {
                state: 'FinalDayEnd',
                name: 'Day End',
                tooltip:'दिवसाचा शेवट',
                id: 297
              },
              {
                state: 'pigmyDayEnd',
                name: 'pigmy Day End',
                tooltip:'पिग्मी दिवसाचा शेवट',
                id: 298
              },
              {
                state: 'yearEnd',
                name: 'Year End',
                tooltip:'वर्षाचा शेवट',
                id: 299
              },
            ]
          },

          {
            state: 'holiday',
            name: 'Holiday',
            tooltip:'सुट्टी',
            id: 301
          },


          {
            state: 'processACM',
            name: 'Process And Calculation Menu',
            tooltip:'प्रक्रिया आणि गणना मेनू',
            id: 306
          },

          {
            state: 'deadStockP',
            name: 'Dead Stock Process',
            tooltip:'डेड स्टॉक प्रक्रिया',
            id: 309
          },
          {
            state: 'dataBackup',
            name: 'Data Backup',
            tooltip:'डेटा बॅकअप',
            id: 327
          },
          {
            state: 'monthly recovery process',
            name: 'Monthly recovery process',
            tooltip:'मासिक पुनर्प्राप्ती प्रक्रिया',
            id: 360
          },
          {
            state: 'yearEndBranchwise',
            name: 'Year End BranchWise',
            tooltip:'वर्षअखेरीस शाखानिहाय',
            id: 361
          },

        ]
      },
      {
        state: 'windows',
        short_label: 'D',
        name: 'Windows',
        tooltip:'Windows',
        type: 'sub',
        icon: 'icon-home',
        id: 335,
        children: [
          {
            state: 'casecade',
            name: 'CaseCade',
            tooltip:'कॅसकेड',
            id: 336
          },
          {
            state: 'tileHorizontaily',
            name: 'Tile Horizontaily',
            tooltip:'Tile Horizontaily',
            id: 337
          },
          {
            state: 'tileVertically',
            name: 'Tile Vertically',
            tooltip:'Tile Vertically',
            id: 338
          },

        ]
      },
      {
        state: 'hotKeys',
        short_label: 'D',
        name: 'Hot Key',
        tooltip:'हॉट की',
        type: 'link',
        icon: 'fa fa-key',
        id: 339
      },
      {
        state: 'exit',
        short_label: 'D',
        name: 'Sign Out',
        tooltip:'साइन आउट करा',
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
        tooltip: 'डॅशबोर्ड',
        type: 'sub',
        icon: 'icon-home',
        id: 1,
        children: [
          {
            state: 'default',
            short_label: 'D',
            name: 'Default',
            tooltip: 'डीफॉल्ट',
            type: 'sub',
            id: 2,
            children: [
              {
                state: 'demo',
                name: 'Demo',
                tooltip: 'डेमो',
                id: 3,
              },
              {
                state: 'demo1',
                name: 'Demo1',
                tooltip: 'डेमो1',
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
        tooltip: 'मास्टर',
        type: 'sub',
        icon: 'fa fa-university',
        id: 5,
        children: [
          {
            state: 'generalLedger',
            name: 'General Ledger',
            tooltip: 'जनरल लेजर',
            short_label: 'D',
            type: 'sub',
            id: 6,
            children: [
              {
                state: 'gl-statement-code',
                name: 'GL Statement Code',
                tooltip: 'जी एल स्टेटमेंट कोड',
                id: 7
              },
              {
                state: 'gl-accounts-master',
                name: 'GL Accounts Master',
                tooltip: 'जी एल अकाउंट्स मास्टर',
                id: 8
              },
              {
                state: 'gl-report-master',
                name: 'GL Report Master',
                tooltip: 'जी एल अहवाल मास्टर',
                id: 9
              },
              {
                state: 'gl-report-linking',
                name: 'GL Report Linking',
                tooltip: 'जी एल अहवाल लिंकिंग',
                id: 10
              },
              {
                state: 'budget-master',
                name: 'Budget Allocation Master',
                tooltip: 'बजेट ऍलोकेशन मास्टर',
                id: 11
              },
              {
                state: 'budget-view',
                name: 'Budget View',
                tooltip: 'बजेट व्यूव ',
                id: 359
              },
            ]

          },
          {
            state: 'customer',
            name: 'Customer',
            tooltip:'ग्राहक',
            short_label: 'D',
            type: 'sub',
            id: 12,
            children: [
              {
                state: 'customerId',
                name: 'Customer Id',
                tooltip:'ग्राहक आयडी',
                id: 13
              },
              {
                state: 'sharesMaster',
                name: 'Shares Account Master',
                tooltip:'शेअर्स अकाउंट मास्टर',
                id: 14
              },
              {
                state: 'anamatGSM',
                name: 'Anamat / General Sub Account Master',
                tooltip:'अनामत / सामान्य उप खाते मास्टर',
                id: 15
              },
              {
                state: 'savingMaster',
                name: 'Saving Account Master',
                tooltip:'बचत खाते मास्टर',
                id: 16
              },
              {
                state: 'currentAccountMaster',
                name: 'Current Account Master',
                tooltip:'चालू खाते मास्टर',
                id: 17
              },
              {
                state: 'termDepositsMaster',
                name: 'Term Deposit Account Master',
                tooltip:'मुदत ठेव खाते मास्टर',
                id: 18
              },
              {
                state: 'cashCreditMaster',
                name: 'Cash Credit Account Master',
                tooltip:'कॅश क्रेडिट खाते मास्टर',
                id: 19
              },
              {
                state: 'termLoanMaster',
                name: 'Term Loan Account Master',
                tooltip:'मुदत कर्ज खाते मास्टर',
                id: 20
              },
              {
                state: 'disputeLoanMaster',
                name: 'Dispute Loan Account Master',
                tooltip:'विवाद कर्ज खाते मास्टर',
                id: 21
              },
              {
                state: 'pigmyAgentMaster',
                name: 'Pigmy Agent Account Master',
                tooltip:'पिग्मी एजंट खाते मास्टर',
                id: 22
              },
              {
                state: 'pigmyAccountMaster',
                name: 'Pigmy Account Master',
                tooltip:'पिग्मी खाते मास्टर',
                id: 23
              },
              {
                state: 'deadStockMaster',
                name: 'Dead Stock Account Master',
                tooltip:'डेड स्टॉक अकाउंट मास्टर',
                id: 24
              },
              {
                state: 'accountOpening',
                name: 'Investment Master',
                tooltip:'गुंतवणूक मास्टर',
                id: 25
              },
              {
                state: 'lockerMaster',
                name: 'Locker Master',
                tooltip:'लॉकर मास्टर',
                id: 26
              },
              {
                state: 'LoanApplication',
                name: 'Loan Application',
                tooltip:'लोन अॅप्लिकेशन',
                id: 368
              },
            ]
          },
          {
            state: 'balanceEntry',
            short_label: 'D',
            name: 'Balance Entry',
            tootltip:'शिल्लक नोंद',
            type: 'sub',
            id: 27,
            children: [
              {
                state: 'balanceUpdation',
                name: 'Balance Updation',
                tootltip:'शिल्लक अपडेशन',
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
            tooltip:'धोरण सेटिंग्ज',
            short_label: 'D',
            type: 'sub',
            id: 32,
            children: [
              {
                state: 'information',
                name: 'Information',
                tooltip:'माहिती',
                id: 33
              },
              {
                state: 'definations',
                name: 'Definations',
                tooltip:'व्याख्या',
                id: 34
              },
              {
                state: 'sizewiseBalanceModification',
                name: 'Sizewise Balance Modification',
                tooltip:'आकारानुसार शिल्लक बदल',
                id: 35
              },
              {
                state: 'tDReceiptTypeMaster',
                name: 'TD Receipt Type Master',
                tooltip:'टीडी पावती प्रकार मास्टर',
                id: 36
              },
              {
                state: 'nPAClassificationSlabMaster',
                name: 'NPA Classification Slab Master ',
                tooltip:'एनपीए वर्गीकरण स्लॅब मास्टर',
                id: 37
              },
            ]
          },
          {
            state: 'Maintainance',
            name: 'Maintainance',
            tooltip:'देखभाल',
            short_label: 'D',
            type: 'sub',
            id: 38,
            children: [
              {
                state: 'securityDetails',
                name: 'Security Details',
                tooltip:'सुरक्षा तपशील',
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
                tooltip:'ठेव / कर्ज व्याज दर संपादित / बदल',
                id: 41
              },
              {
                state: 'npaOpeningDetailsEntry',
                name: 'NPA Opening Details Entry',
                tooltip:'एनपीए उघडण्याच्या तपशीलांची नोंद',
                id: 42
              },
              {
                state: 'interestPostingFlagUpdation',
                name: 'Interest Posting Flag Updation',
                tooltip:'स्वारस्य पोस्टिंग Flag अपडेशन',
                id: 43
              },
              // {
              //   state: 'accountwiseDocumentAcceptance',
              //   name: 'Accountwise Document Acceptance',
              //   id: 44
              // },
              {
                state: 'recoveryFlag',
                name: 'Recovery Flag Updation',
                tooltip:'पुनर्प्राप्ती Flag अपडेशन',
                id: 358
              },
              {
                state: 'notingCharges',
                name: 'Noting Charges',
                tooltip:'नोटिंग शुल्क',
                id: 45
              },
              {
                state: 'tdsformsubmission',
                name: 'TDS Form Submission',
                tooltip:'TDS फॉर्म सबमिशन',
                id: 46
              },
              {
                state: 'moratoriumperiodmaster',
                name: 'Moratorium Period Master',
                tooltip:'मोरेटोरियम पीरियड मास्टर',
                id: 47
              }
            ]

          },
          {
            state: 'Instruction',
            name: 'Instruction',
            tooltip:'सूचना',
            short_label: 'D',
            type: 'sub',
            id: 48,
            children: [
              {
                state: 'overDraft',
                name: 'Over Draft',
                tooltip:'ओव्हर ड्राफ्ट',
                id: 49
              },
              {
                state: 'standingInstruction',
                name: 'Standing Instruction',
                tooltip:'स्थायी सूचना',
                id: 50
              },
              {
                state: 'interestInstruction',
                name: 'Interest Instruction',
                tooltip:'स्वारस्य सूचना',
                id: 51
              },
              {
                state: 'special',
                name: 'Special',
                tooltip:'विशेष',
                id: 52
              },
              {
                state: 'freezeAccount',
                name: 'Freeze Account',
                tooltip:'Freeze खाते',
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
                tooltip:'Lien मार्क क्लियर',
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
            tooltip:'शेअर्स लाभांश',
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
                tooltip:'Year Wise Unpaid Dividend Entry',
                id: 68
              },
              {
                state: 'dividendTransferEntry',
                name: 'Dividend Transfer Instruction',
                tooltip:'लाभांश हस्तांतरण सूचना',
                id: 69
              },
              {
                state: 'dividendCalculation',
                name: 'Dividend Calculation',
                tooltip:'लाभांश गणना',
                id: 70
              },
              {
                state: 'dividendPosting',
                name: 'Dividend Posting',
                tooltip:'लाभांश पोस्टिंग',
                id: 71
              },
              {
                state: 'dividendTransferPosting',
                name: 'Dividend Transfer Posting',
                tooltip:'लाभांश हस्तांतरण पोस्टिंग',
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
        tooltip: 'व्यवहार',
        type: 'sub',
        icon: 'fa fa-money',
        id: 75,
        children: [
          {
            state: 'voucherEntry',
            name: 'Voucher Entry',
            tooltip: 'व्हाउचर एंट्री',
            id: 76
          },
          {
            state: 'multiVoucher',
            name: 'Multi Voucher',
            tooltip: 'मल्टी व्हाउचर',
            id: 77
          },
          {
            state: 'batchVoucher',
            name: 'Batch Transfer Voucher',
            tooltip: 'बॅच ट्रान्सफर व्हाउचर',
            id: 78
          },
          {
            state: 'pigmyChartEntry',
            name: 'Pigmy Chart Entry',
            tooltip: 'पिग्मी चार्ट एंट्री',
            id: 79
          },
          {
            state: 'deadStockPurchase',
            name: 'Dead Stock Purchase',
            tooltip: 'डेड स्टॉक खरेदी',
            id: 80
          },
          {
            state: 'deadStockTransaction',
            name: 'Dead Stock Transaction',
            tooltip: 'डेड स्टॉक व्यवहार',
            id: 81
          },

          {
            state: 'reconciliationEntry',
            name: 'Reconciliation Entry',
            tooltip: 'रेकन्सीलेशन एंट्री ',
            id: 82
          },
          {
            state: 'savingspigmyaccountclosing',
            name: 'Savings-Pigmy Account Closing',
            tooltip: 'बचत-पिग्मी खाते बंद करणे',
            id: 83
          },
          {
            state: 'termDepositAccountClosing',
            name: 'Term Deposit Account Closing',
            tooltip: 'मुदत ठेव खाते बंद करणे',
            id: 84
          },
          {
            state: 'TermDepositeAcRenewal',
            name: 'Term Deposit A/c Renewal',
            tooltip: 'मुदत ठेव खाते नूतनीकरण',
            id: 85
          },
          {
            state: 'cashCreditAcRenewal',
            name: 'Cash Credit A/c Renewal',
            tooltip: 'कॅश क्रेडिट खात्याचे नूतनीकरण',
            id: 86
          },
          {
            state: 'shareTransactions',
            name: 'Share Transaction',
            tooltip: 'शेअर व्यवहार',
            id: 87
          },

          {
            state: 'locker',
            name: 'Locker Transaction',
            tooltip: 'लॉकर व्यवहार',
            short_label: 'L',
            type: 'sub',
            id: 88,
            children: [
              {
                state: 'lockerOpenTransaction',
                name: 'Locker Open Transaction',
                tooltip: 'लॉकर open व्यवहार',
                id: 89
              },
              {
                state: 'lockerCloseTransaction',
                name: 'Locker Close Transaction',
                tooltip: 'लॉकर close व्यवहार',
                id: 90
              },
              {
                state: 'lockerRentTransaction',
                name: 'Locker Rent Transaction',
                tooltip: 'लॉकर भाडे व्यवहार',
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
            tooltip: 'रोख मूल्य',
            id: 96,
            children: [
              {
                state: 'acceptD',
                name: 'Accept Denomination',
                tooltip: 'अॅक्सेप्ट डेनॉमिन ',
                id: 97
              },
              {
                state: 'paymentDenomination',
                name: 'Payment Denomination',
                tooltip: 'पेमेंट  डेनॉमिन ',
                id: 98
              },
              {
                state: 'cashInDenomination',
                name: 'Cash In Denomination',
                tooltip: 'कॅश इन डेनॉमिन ',
                id: 99
              },
              {
                state: 'cashOutDenomination',
                name: 'Cash Out Denomination',
                tooltip: 'कॅश आउट  डेनॉमिन ',
                id: 100
              },
              {
                state: 'cashInitialisationEntry',
                name: 'cash Initialisation Entry',
                tooltip: 'कॅश इनिशियलायझेशन एंट्री ',
                id: 101
              },
              {
                state: 'safeValultToCashier',
                name: 'Safe Valult To Cashier',
                tooltip: 'सेफ Valult टु कॅशीर ',
                id: 102
              },
              {
                state: 'cashierToSafeVault',
                name: 'Cashier To Safe Vault',
                tooltip: 'कॅशीर टु Valult सेफ ',
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
            name: 'Gold/Silver Return Entry',
            tooltip: 'सोने/चांदीची रिटर्न एंट्री',
            id: 111
          },
          {
            state: 'memberDAPDT',
            name: 'Member Dividend And Payable Dividend Transaction ',
            tooltip :'सदस्य लाभांश आणि देय लाभांश व्यवहार',
            id: 112
          },
          {
            state: 'memberTransfer',
            name: 'Member Transfer',
            tooltip:'मेंबर ट्रान्सफर',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 113,
            children: [
              {
                state: 'MemberTransferTransaction',
                name: 'Member Transfer Transaction',
                tooltip:'मेंबर ट्रान्सफर व्यवहार',
                id: 114
              },

              {
                state: 'BranchAndSalaryDC',
                name: 'Branch And Salary Division Changes',
                tooltip:'शाखा आणि वेतन विभागातील बदल',
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
            tooltip:'रिकव्हरी',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 117,
            children: [
              {
                state: 'recoveryProcessing',
                name: 'Recovery Processing',
                tooltip:'रिकव्हरी प्रोसेसिंग',
                id: 118
              },
              {
                state: 'recoveryModification',
                name: 'Recovery Modification',
                tooltip:'रिकव्हरी बदल',
                id: 119
              },
              {
                state: 'recoveryPosting',
                name: 'Recovery Posting',
                tooltip:'रिकव्हरी पोस्टिंग',
                id: 120
              },
              {
                state: 'recoveryDataImportExport',
                name: 'Recovery Data Import Export',
                tooltip:'रिकव्हरी डेटा आयात निर्यात',
                id: 121
              },
            ]
          },

          {
            state: 'memberLoan',
            name: 'Member Loan',
            tooltip:'सदस्य कर्ज',
            short_label: 'D',
            type: 'sub',
            id: 122,
            children: [
              {
                state: 'loanApplication',
                name: 'Loan Application',
                tooltip:'लोन अॅप्लिकेशन',
                id: 123
              },
              {
                state: 'loanSanction',
                name: 'Loan Sanction',
                tooltip:'कर्ज मंजुरी',
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
            tooltip:'लाभांश पे',
            id: 126,
            children: [
              {
                state: 'dividendPaidMarkSD',
                name: 'Dividend Paid Mark(Salary Division)',
                tooltip:'लाभांश पेड मार्क (पगार विभाग)',
                id: 127
              },
              {
                state: 'dividendPaidSD',
                name: 'Dividend Pay(Salary Division)',
                tooltip:'लाभांश पेड (पगार विभाग)',
                id: 128
              },
            ]
          },
          {
            state: 'cashRecoveryTransaction',
            name: 'Cash Recovery Transaction',
            tooltip:'रोख Recovery व्यवहार',
            id: 129
          },
          {
            state: 'consolidationTransaction',
            name: 'Consolidation Transaction',
            tooltip:'एकत्रीकरण व्यवहार',
            id: 130
          },
          {
            state: 'inwardRegister',
            name: 'Inward Register',
            tooltip:'आवक नोंदणी',
            id: 131
          },
        ]
      },
      {
        state: 'neftRtgs',
        short_label: 'D',
        name: 'NEFT / RTGS ',
        type: 'sub',
        icon: 'fa fa-money',
        tooltip:'NEFT / RTGS',
        id: 349,
        children: [
          {
            state: 'neftTransfer',
            name: 'NEFT Transfer',
            tooltip:'NEFT हस्तांतरण',
            id: 350
          },
          {
            state: 'rtgsTransfer',
            name: 'RTGS Transfer',
            tooltip:'RTGS हस्तांतरण',
            id: 351
          },
          {
            state: 'billPayment',
            name: 'Bill Payment',
            tooltip:'बिल पेमेन्ट ',
            id: 352
          },
          {
            state: 'fundTransfer',
            name: 'Fund Transfer',
            tooltip:'फंड ट्रान्सफर',
            id: 353
          },
        ]
      },
      {
        state: 'passing',
        short_label: 'D',
        name: 'Passing',
        type: 'sub',
        tooltip: 'पासिंग',
        icon: 'fa fa-check-square-o',
        id: 132,
        children: [
          {
            state: 'centralisedPassing',
            name: 'Centralised Passing',
            tooltip: 'Centralised पासिंग',
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
            tooltip: 'नामंजूर',
            id: 135
          },
          {
            state: 'neftPassing',
            name: 'NEFT/RTGS Transaction Passing',
            tooltip: 'एनईएफटी/आरटीजीएस ट्रान्झॅक्शन पासिंग',
            id: 354
          },
        ]
      },
      {
        state: 'view',
        short_label: 'D',
        name: 'View',
        tooltip:'व्यूव',
        type: 'sub',
        icon: 'fa fa-book',
        id: 136,
        children: [
          {
            state: 'accountEnquiry',
            name: 'Account Enquiry',
            tooltip:'खाते चौकशी',
            id: 137
          },
          {
            state: 'ledgerView',
            name: 'Ledger View',
            tooltip:'लेजर व्यूव',
            id: 138
          },
          {
            state: 'sharesLedgerView',
            name: 'Shares Ledger View',
            tooltip:'शेअर्स लेजर व्यूव',
            id: 139
          },
          {
            state: 'voucherView',
            name: 'Voucher View',
            tooltip:'व्हाउचर व्यूव',
            id: 140
          },
          {
            state: 'customerView',
            name: 'Customer View',
            tooltip:'ग्राहक व्यूव',
            id: 141
          },
          {
            state: 'guarantorView',
            name: 'Guarantor View',
            tooltip:'हमीदार व्यूव',
            id: 142
          },
          {
            state: 'memberView',
            name: 'Member View',
            tooltip:'मेंबर व्यूव',
            id: 143
          },
          {
            state: 'masterCard',
            name: 'Master Card',
            tooltip:'मास्टर कार्ड',
            id: 144
          },
          {
            state: 'memberLiablityView',
            name: 'Member Liablity View',
            tooltip: 'मेंबर Liablity व्यूव',
            id: 145
          },
          {
            state: 'otherView',
            name: 'Other View',
            tooltip: 'इतर व्यूव',
            id: 146
          },
          {
            state: 'managerView',
            name: 'Manager View',
            tooltip: 'व्यवस्थापक व्यूव',
            id: 147

          },
          {
            state: 'lockerView',
            name: 'Locker View',
            tooltip: 'लॉकर व्यूव',
            id: 348

          },
        ],

      },
      {
        state: 'printing',
        short_label: 'D',
        name: 'Printing',
        tooltip: 'प्रिंटिंग',
        type: 'sub',
        icon: 'fa fa-print',
        id: 347,
        children: [
          {
            state: 'voucherPrint',
            name: 'Voucher Printing',
            tooltip: 'वॉउचर प्रिंटिंग',
            id: 110,

          },
          {
            state: 'termDepositReceiptPrinting',
            name: 'Term Deposit Receipt Printing',
            tooltip: 'मुदत ठेव पावती छपाई',
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
            state: 'goldSilverReceipt',
            name: 'Gold/Silver Receipt Print',
            tooltip: 'सोने/चांदीची पावती प्रिंट',
            id: 344
          },
          {
            state: 'passbookPrinting',
            name: 'Passbook Printing',
            tooltip: 'पासबूक प्रिंटिंग',
            short_label: 'D',
            type: 'sub',
            id: 105,
            children: [
              {
                state: 'passbookIssue',
                name: 'Passbook Issue',
                tooltip: 'पासबुक इश्यू',
                id: 106
              },
              {
                state: 'passbookEntryPrint',
                name: 'Passbook Entry Print',
                tooltip: 'पासबुक एंट्री इश्यू',
                id: 107
              }
            ]
          }
        ]
      },
      {
        state: 'reports',
        short_label: 'D',
        name: 'Reports',
        tooltip: 'रेपोर्टस',
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
            name: 'Daily Reports',
            tooltip: 'दैनिक रेपोर्टस',
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
                tooltip: 'टी फॉर्म डे पुस्तक तपशील/सारांश',
                id: 152
              },
              {
                state: 'BnkSubsidaryDetail',
                name: 'Subsidiary  Debit/Credit',
                tooltip: 'सबसिडीअरी  डेबिट/क्रेडिट',
                id: 153
              },
              {
                state: 'BnkScrollDetailBoth',
                name: 'Scroll Book Debit/Credit/Both',
                tooltip: 'स्क्रोल बुक डेबिट/क्रेडिट/दोन्ही',
                id: 154
              },
              {
                state: 'IntInstructionExecutionFailure',
                name: 'Interest Instructions Execution List (Failure/Success)',
                tooltip: 'स्वारस्य निर्देशांची अंमलबजावणी यादी (अपयश/यश)',
                id: 155
              },
              {
                state: 'StandingInstExecutionFailure',
                name: 'Standing Instructions Execution List (Failure/Success)',
                tooltip: 'स्थायी निर्देशांची अंमलबजावणी यादी (अपयश/यश)',
                id: 156
              },
              {
                state: 'StandingInstExecutionCredit',
                name: 'Standing Instructions Execution List (Expected Credit Scheme)',
                tooltip: 'स्थायी सूचना अंमलबजावणी यादी (अपेक्षित क्रेडिट योजना)',
                id: 157
              },
              {
                state: 'StandingInstExecutionDebit',
                name: 'Standing Instructions Execution List (Expected Debit Scheme )',
                tooltip: 'स्थायी निर्देशांची अंमलबजावणी यादी (अपेक्षित डेबिट योजना)',
                id: 158
              },
              {
                state: 'IntInstructExecutionCredit',
                name: 'Interest Instructions Execution List (Expected Credit Scheme)',
                tooltip: 'व्याज सूचना अंमलबजावणी यादी (अपेक्षित क्रेडिट योजना)',
                id: 159
              },
              {
                state: 'IntInstructExecutionDebit',
                name: 'Interest Instructions Execution List (Expected Debit Scheme)',
                tooltip:'व्याज निर्देशांची अंमलबजावणी यादी (अपेक्षित डेबिट योजना)',
                id: 160
              },

              {
                state: 'otherSubsidiary',
                name: 'Other Subsidiary',
                tooltip:'इतर Subsidiary',
                id: 341
              },
              {
                state: 'SubsidiarySummery',
                name: ' Subsidary Summery',
                tooltip:'Subsidiary समरी',
                id: 342
              },
              {
                state: 'headOfficeSubsidary',
                name: 'Head Office Subsidary',
                tooltip:'मुख्य कार्यालय Subsidary',
                id: 386
              },
              {
                state: 'frequencywiseintrestinstructionlit',
                name: 'Frequency wise intrest instruction Excution List',
                tooltip:'Frequency wise intrest instruction Excution List',
                id: 392
              },
              {
                state: 'covering-voucher',
                name: 'Covering Voucher',
                tooltip:'कव्हरिंग व्हाउचर',
                id: 398
              },

            ]
          },
          //
          {
            state: 'statement',
            name: 'Statement',
            tooltip:'स्टेटमेंट',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 163,
            children: [
              {
                state: 'BnkGlAcStatement',
                name: 'GL account Statement',
                tooltip:'जीएल खाते स्टेटमेंट',
                id: 164
              },
              {
                state: 'BnkAcStatement',
                name: 'Account Statement',
                tooltip:'खाते स्टेटमेंट',
                id: 165
              },
              {
                state: 'BnkLNamtStatement',
                name: 'Term Loan stament with other amount',
                tooltip:'इतर रकमेसह मुदत कर्ज विवरण',
                id: 166
              },
              {
                state: 'BnkTDStatement',
                name: 'Term Deposit Statement ',
                tooltip:'मुदत ठेव विवरण',
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
            tooltip:'बॅलेन्स बूक',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 170,
            children: [
              {
                state: 'BnkDedskBalList',
                name: 'Deadstock Balance List',
                tooltip:'डेडस्टॉक शिल्लक यादी',
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
                tooltip:'खाते शिल्लक पुस्तक',
                id: 173
              },
              {
                state: 'BnkACBalList',
                name: 'Account Balance List',
                tooltip:'खाते शिल्लक यादी',
                id: 174
              },
              {
                state: 'BnkCustIDBalList',
                name: 'Customer ID wise Balance List',
                tooltip:'ग्राहक आयडीनुसार शिल्लक यादी',
                id: 175
              },
              {
                state: 'BnkGLConsistRepo',
                name: 'Scheme - General Ledger consistancy Report',
                tooltip:'योजना - सामान्य लेजर सुसंगतता अहवाल',
                id: 176
              },
              {
                state: 'BnkReceiveIntList',
                name: 'Receivable Interest List',
                tooltip:'Receivable व्याज यादी',
                id: 177
              },
              {
                state: 'BnkPayIntList',
                name: 'Payable Interest List',
                tooltip:'देय व्याज यादी',
                id: 178
              },
              {
                state: 'BnkDedskBalListDepre',
                name: 'Deadstock Balance List with depreciation',
                tooltip:'डेड स्टॉक बॅलेन्स लिस्ट with depreciation',
                id: 179
              },
              {
                state: 'BnkDptAMList',
                name: 'Deposite Amount Wise Balance List',
                tooltip:'ठेव रकमेनुसार शिल्लक यादी',
                id: 180
              },
              {
                state: 'CatbalList',
                name: 'Categorywise Balance List',
                tooltip:'श्रेणीनिहाय शिल्लक यादी',
                id: 181
              },
              {
                state: 'DebbalReport',
                name: 'Debit Balance Report',
                tooltip:'डेबिट शिल्लक अहवाल',
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
                tooltip:'रक्कमनिहाय शिल्लक यादी',
                id: 185
              },
              {
                state: 'DeadStockDepCatList',
                name: 'Deadstock Depriciation Categorywise List',
                tooltip:'डेड स्टॉक घसारा श्रेणीनुसार यादी',
                id: 186
              },
              {
                state: 'BalConCertificate',
                name: 'Balance Confirmation Ceritificate',
                tooltip:'शिल्लक पुष्टीकरण प्रमाणपत्र',
                id: 187
              },
              {
                state: 'shortballist',
                name: 'Short Balance List',
                tooltip:'लहान शिल्लक यादी',
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
                tooltip:'खाते उघडणे आणि बंद करणे रजिस्टर',
                id: 190
              },
              {
                state: 'BnkRegStandingInstruction',
                name: 'Standing Instruction Register (Active/Revoke)',
                tooltip:'स्थायी सूचना रजिस्टर (सक्रिय/रद्द करा)',
                id: 191
              },
              {
                state: 'BnkRegInterestInstruction',
                name: 'Interest Instruction Register  (Active/Revoke)',
                tooltip:'व्याज सूचना नोंदवही (सक्रिय/रद्द करा)',
                id: 192
              },
              {
                state: 'BnkRegSpecialInstruction',
                name: 'Special Instruction Register  (Active/Revoke)',
                tooltip:'विशेष सूचना रजिस्टर (सक्रिय/रद्द करा)',
                id: 193
              },
              {
                state: 'BnkRegInsurence',
                name: 'Insurance Register',
                tooltip:'विमा नोंदणी',
                id: 194
              },
              {
                state: 'BnkODRegister',
                name: 'O.D. Register (Temprary / Periodical)',
                tooltip:'ओ.डी. नोंदणी (तात्पुरती / नियतकालिक)',
                id: 195
              },
              {
                state: 'BnkRegDeadStock',
                name: 'Deadstock Register',
                tooltip:'डेडस्टॉक रजिस्टर',
                id: 196
              },
              {
                state: 'BnkIVOpenAndCloseReg',
                name: 'Investment Register (Open/Closed)',
                tooltip:'गुंतवणूक रजिस्टर (खुले/बंद)',
                id: 197
              },
              {
                state: 'BnkRegGoldSilverSubReturn',
                name: 'Gold Silver Submission/Return Register',
                tooltip:'गोल्ड सिल्व्हर सबमिशन/रिटर्न रजिस्टर',
                id: 198
              },
              {
                state: 'DepositReceiptRegister',
                name: 'Deposit Receipt Register',
                tooltip:'ठेव पावती नोंदवही',
                id: 199
              },
              {
                state: 'lockerRentRegister',
                name: 'Locker Rent Register',
                tooltip:'लॉकर भाडे नोंदणी',
                id: 200
              },
              {
                state: 'lockerRegister',
                name: 'Locker Register Report',
                tooltip:'लॉकर नोंदणी अहवाल',
                id: 201
              },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                tooltip:'जादा रोख शिल्लक अहवाल',
                id: 202
              },
              {
                state: 'lockerkeyregister',
                name: 'Locker key Register Report',
                tooltip:'लॉकर की नोंदणी अहवाल',
                id: 389
              },
              {
                state: 'totalchallandetails',
                name: 'total challan Details',
                tooltip:'एकूण चलन तपशील',
                id: 393
              },
              {
                state: 'closedaccountlist',
                name: 'Closed Account List',
                tooltip:'बंद खाते यादी',
                id: 394
              },
              {
                state: 'accountopenbetweendates',
                name: 'Account Open between Dates',
                tooltip:'तारखांच्या दरम्यान खाते उघडा',
                id: 396
              },


            ]
          },
          //
          {
            state: 'Termdeposit',
            name: 'Term Deposit Reports',
            tooptip:'मुदत ठेव अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 203,
            children: [
              {
                state: 'maturedbutnotpaid',
                name: 'matured but not paid between two days',
                tooptip:'matured पण दोन दिवसात पैसे दिले नाहीत',
                id: 204
              },
              {
                state: 'maturedbutnotclosed',
                name: 'matured but not closed',
                tooltip:'matured पण बंद नाही',
                id: 205
              },
              {
                state: 'depositpaidlist',
                name: 'Deposit Paid List',
                tooltip:'देय ठेव यादी',
                id: 206
              },
              {
                state: 'intratewisebalancelist',
                name: 'Interest Rate Wise List',
                tooltip:'व्याजदरानुसार यादी',
                id: 207
              },
              {
                state: 'custidwiseintpaidlist',
                name: 'Customer Id Wise Interest Paid List',
                tooltip:'ग्राहक आयडीनुसार व्याज भरलेली यादी',
                id: 208
              },
              {
                state: 'custidwiseloaninterestCertificate',
                name: 'Customer Id Wise Deposit Interest Certificate',
                tooltip:'ग्राहक आयडी निहाय ठेव व्याज प्रमाणपत्र',
                id: 209
              },
              {
                state: 'IntRatewiseMaturityList',
                name: 'Interest Rate wise Maturity List',
                tooltip:'व्याजदरानुसार परिपक्वता यादी',
                id: 210
              },
              {
                state: 'custidwisedepositlist',
                name: 'Customer Id wise Deposit List',
                tooltip:'ग्राहक आयडीनुसार ठेव यादी',
                id: 211
              },
              {
                state: 'tddetailrecurroverdue',
                name: 'Term Deposite Detail List and Recurring Overdue',
                tooltip:'मुदत ठेव तपशील यादी आणि आवर्ती थकीत',
                id: 212
              },
              {
                state: 'prematuredAcCloselist',
                name: 'Prematured A/c Close List',
                tooltip:'Prematured खाते बंद यादी',
                id: 213
              },
              {
                state: 'renewalDepositList',
                name: 'Renewal Deposit List',
                tooltip:'नूतनीकरण ठेव यादी',
                id: 214
              },
              {
                state: 'directorwiseDepositlist',
                name: 'Directorwise Deposit List',
                tooltip:'Directorwise ठेव यादी',
                id: 215
              },
              {
                state: 'custidwiseInterestList',
                name: 'Customer Id Wise Interest List',
                tooltip:'ग्राहक आयडीनुसार स्वारस्य यादी',
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
                tooltip:'A/B प्रकार ठेव यादी',
                id: 218
              },
              {
                state: 'tdsinterestList',
                name: 'tds Interest List',
                tooltip:'tds व्याज यादी',
                id: 367
              },
              {
                state: 'AmountwiseDepositIntrestCerti',
                name: 'Amountwise Deposit Intrest Certificate',
                tooltip:'रक्कम निहाय ठेव व्याज प्रमाणपत्र',
                id: 390
              },
              {
                state: 'customerIdWiseTDSreport',
                name: 'customer Id Wise TDS report',
                tooltip:'ग्राहक आयडीनुसार टीडीएस अहवाल',
                type: 'sub',
                id: 388,
              },

            ]

          },

          {
            state: 'SharesReports',
            name: 'Shares Reports',
            tooltip:'शेअर अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 219,
            children: [
              {
                state: 'cityMemberList',
                name: 'CityWise Member List',
                tooltip:'सिटीवाइज सदस्य यादी',
                id: 220
              },

              {
                state: 'dividendPaidList',
                name: 'Dividend Paid List Report',
                tooltip:'लाभांश देय यादी अहवाल',
                id: 221
              },
              {
                state: 'sharesIssueRegister',
                name: 'Shares Issue Register',
                tooltip:'शेअर्स इश्यू रजिस्टर',
                id: 222
              },
              {
                state: 'sharesReturnRegister',
                name: 'Shares Return Register',
                tooltip:'शेअर्स रिटर्न रजिस्टर',
                id: 223
              },
              {
                state: 'sharesTransferRegister',
                name: 'Shares Transfer Register',
                tooltip:'शेअर्स ट्रान्सफर रजिस्टर',
                id: 224
              },
              {
                state: 'unpaidDividendList',
                name: 'Unpaid Dividend List',
                tooltip:'न भरलेल्या लाभांशाची यादी',
                id: 225
              },
              {
                state: 'monthlyRecoveryPrint',
                name: 'Monthly Recovery Print',
                tooltip:'मासिक पुनर्प्राप्ती प्रिंट',
                id: 226
              },
              {
                state: 'monthlyRecoverySubsidiary',
                name: 'Monthly Recovery Subsidiary',
                tooltip:'मासिक पुनर्प्राप्ती उपकंपनी',
                id: 227
              },
              {
                state: 'DividentTransferRegister',
                name: 'Divident Transfer Register',
                tooltip:'लाभांश हस्तांतरण रजिस्टर',
                id: 366
              },
              {
                state: 'mrutunjay-register',
                name: 'mrutunjay Register',
                tooltip:'मृतंजय रजिस्टर',
                id: 375
              },
              {
                state: 'shares-nominee-list',
                name: 'shares nominee list',
                tooltip:'शेअर्स नामनिर्देशित यादी',
                id: 376
              },
              {
                state: 'shares-account-label-print',
                name: 'Shares Account Label Print',
                tooltip:'शेअर खाते लेबल प्रिंट',
                id: 378
              },
              {
                state: 'currentunpaiddividend',
                name: 'current Unpaid Dividend',
                tooltip:'वर्तमान न भरलेला लाभांश',
                id: 379
              },
              {
                state: 'birthday-wish',
                name: 'Birthday Wish',
                tooltip:'वाढदिवसाच्या शुभेच्छा',
                id: 381
              },
              {
                state: 'dividentpaid',
                name: 'Divident Paid',
                tooltip:'लाभांश दिला',
                id: 397
              },
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
            tooltip:'मुदत कर्ज/कॅश क्रेडिट अहवाल',
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
                name: 'Loan Security Reports',
                tooltip:'कर्ज सुरक्षा अहवाल',
                type: 'sub',
                id: 232,

              },
              {
                state: 'citiwiseLoanBalancereport',
                name: 'Citiwise Loan Balance Report',
                tooltip:'सिटीनिहाय कर्ज शिल्लक अहवाल',
                type: 'sub',
                id: 233,
              },
              {
                state: 'lcdLessdraftReport',
                name: 'Loan Cash Credit Less Draft Report',
                tooltip:'कर्ज रोख क्रेडिट कमी मसुदा अहवाल',
                type: 'sub',
                id: 234,
              },
              {
                state: 'lcdOverdraftReport',
                name: 'Loan Cash Credit Over Draft Report',
                tooltip:'मसुदा अहवालावर कर्ज रोख क्रेडिट',
                type: 'sub',
                id: 235,
              },
              {
                state: 'lcd-renewal-list',
                name: 'Loan Cash Credit Renewal List',
                tooltip:'कर्ज रोख क्रेडिट नूतनीकरण यादी',
                type: 'sub',
                id: 236,
              },
              {
                state: 'lcd-turnover-list',
                name: 'Loan Cash Credit Turnover List',
                tooltip:'कर्ज रोख क्रेडिट टर्नओव्हर यादी',
                type: 'sub',
                id: 237,
              },
              {
                state: 'penalinterestlist',
                name: 'Received and Penal Interest List',
                tooltip:'प्राप्त आणि दंड व्याज यादी',
                type: 'sub',
                id: 238,
              },
              {
                state: 'pendingStockStatementlist',
                name: 'Pending Stock Statement List',
                tooltip:'प्रलंबित स्टॉक स्टेटमेंट यादी',
                type: 'sub',
                id: 239,
              },
              {
                state: 'receivedStockstatementList',
                name: 'Received Stock Statement List',
                tooltip:'स्टॉक स्टेटमेंट यादी प्राप्त झाली',
                type: 'sub',
                id: 240,
              },
              {
                state: 'recoverycwBalanceList',
                name: 'Recovery Balance List',
                tooltip:'पुनर्प्राप्ती शिल्लक यादी',
                type: 'sub',
                id: 241,
              },
              {
                state: 'receivableInstallInterest',
                name: 'Receivable Installment and Intrest List',
                tooltip:'प्राप्त हप्ता आणि व्याज यादी',
                type: 'sub',
                id: 242,
              },
              {
                state: 'loanExpiredList',
                name: 'Loan / CC Expired List',
                tooltip:'कर्ज / सीसी कालबाह्य यादी',
                type: 'sub',
                id: 343,
              },
              {
                state: 'loanduecertificate',
                name: 'Loan Due Certificate',
                tooltip:'कर्ज थकीत प्रमाणपत्र',
                type: 'sub',
                id: 355,
              },
              {
                state: 'count-wise-lawad-loan',
                name: 'count Wise Lawad Loan',
                tooltip:'count Wise Lawad Loan',
                type: 'sub',
                id: 377,
              },
              {
                state: 'security-reports',
                name: 'Security Reports',
                tooltip:'सुरक्षा अहवाल',
                type: 'sub',
                id: 382,
              },
              {
                state: 'interest-ratewise-classification-of-loan',
                name: 'Interest ratewise-classification-of loan',
                tooltip:'कर्जाचे व्याज दरनिहाय-वर्गीकरण',
                type: 'sub',
                id: 385,
              },
             
              {
                state: 'drawingPowerRegister',
                name: 'Drawing Power Register',
                tooltip:'पॉवर रजिस्टर ड्रॉइंग',
                type: 'sub',
                id: 391,
              },


            ],

          },


          {
            state: 'npaReports',
            name: 'NPA & Overdue Reports',
            short_label: 'D',
            type: 'sub',
            tooltip:'एनपीए आणि थकीत अहवाल',
            id: 243,
            children: [
              {
                state: 'loanoverduelist',
                name: 'Loan Overdue Reports',
                tooltip:'कर्ज थकीत अहवाल',
                type: 'sub',
                id: 252,

              },
              {
                state: 'npaRegister',
                name: 'NPA Register',
                tooltip:'एनपीए नोंदणी',
                id: 244
              },
              {
                state: 'npaRegPercentage',
                name: 'NPA Register Percentage',
                tooltip:'एनपीए नोंदणी टक्केवारी',
                id: 245
              },
              {
                state: 'nonNpaRecovery',
                name: 'To be Recovery Non NPA Report',
                tooltip:'रिकव्हरी नॉन एनपीए अहवाल असणे',
                id: 246
              },
              {
                state: 'directorwise',
                name: 'Directorwise Recommanded by',
                tooltip:'डायरेक्टर वाईज यांनी शिफारस केली आहे',
                id: 247
              },
              {
                state: 'citiwisenpa',
                name: 'Citywise NPA Register',
                tooltip:'शहरनिहाय एनपीए रजिस्टर',
                type: 'sub',
                id: 248,

              },
              {
                state: 'analysisnpa',
                name: 'NPA Analysis Report',
                tooltip:'एनपीए विश्लेषण अहवाल',
                type: 'sub',
                id: 249,

              },
              {
                state: 'classificationsecnpa',
                name: 'NPA Classification -Secured Or Unsecured',
                tooltip:'एनपीए वर्गीकरण - सुरक्षित किंवा असुरक्षित',
                type: 'sub',
                id: 250,
              },
              {
                state: 'LawadLoanOverdue',
                name: 'Lawad Loan Overdue',
                tooltip:'Lawad Loan Overdue',
                type: 'sub',
                id: 362,
              },
              {
                state: 'coparativeDeSummary',
                name: 'coparative Detail Summary',
                tooltip:'तुलनात्मक तपशीलवार सारांश',
                type: 'sub',
                id: 383,
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
            tooltip:'पिग्मी अहवाल',
            id: 254,
            children: [
              {
                state: 'BnkPigmyCollectionChart',
                name: 'Pigmy Agentwise Collection Chart',
                tooltip:'पिग्मी एजंटनिहाय संकलन चार्ट',
                id: 255
              },
              {
                state: 'BnkPigmyBalanceList',
                name: 'Pigmy Agent Wise Balance List',
                tooltip:'पिग्मी एजंट शहाणे शिल्लक यादी',
                id: 256
              },
              {
                state: 'BnkPigmyBalanceBook',
                name: 'Pigmy Agent Wise Balance Book',
                tooltip:'पिग्मी एजंट वाईज बॅलन्स बुक',
                id: 257
              },
              {
                state: 'BnkPigmyBlankChart',
                name: 'Pigmy Agent Collection Blank Chart',
                tooltip:'पिग्मी एजंट कलेक्शन ब्लँक चार्ट',
                id: 258
              },
              {
                state: 'BnkPigmyCommissionRepo',
                name: 'Pigmy Agent Commission Report',
                tooltip:'पिग्मी एजंट कमिशन अहवाल',
                id: 259
              },
              {
                state: 'pigmyhandbook',
                name: 'Pigmy  HandBook',
                tooltip:'पिग्मी हँडबुक',
                id: 260
              },
              {
                state: 'pigmymaturedAclist',
                name: 'Pigmy  Matured A/C List',
                tooltip:'पिग्मी मॅच्युअर A/C यादी',
                id: 261
              },
              {
                state: 'loanRegularCollectionwise',
                name: 'loan & regular collectionwise pigmy agent comission',
                tooltip:'कर्ज आणि नियमित संकलननिहाय पिग्मी एजंट कमिशन',
                id: 372
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
            tooltip:'इतर अहवाल',
            id: 262,
            children: [
              {
                state: 'BnkMinorsList',
                name: 'Minor List',
                tooltip:'किरकोळ यादी',
                id: 263
              },
              {
                state: 'BnkNomineeList',
                name: 'Nominee List',
                tooltip:'नामनिर्देशित यादी',
                id: 264
              },
              {
                state: 'BnkGuaranterList',
                name: 'Guaranter List',
                tooltip:'हमीदार यादी',
                id: 265
              },
              {
                state: 'BnkLienMarkedAcList',
                name: 'Lein mark Account List ',
                tooltip:'Lein mark Account List',
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
                tooltip:'व्यवहाराच्या रकमेची हालचाल',
                id: 268
              },
              {
                state: 'BnkDepAmountMovementDetail',
                name: 'Deposit Amount Movement',
                tooltip:'ठेव रकमेची हालचाल',
                id: 269
              },
              {
                state: 'BnkLNAmountMovementDetail',
                name: 'Loan Amount Movement',
                tooltip:'कर्जाच्या रकमेची हालचाल',
                id: 270
              },
              {
                state: 'BnkGurDetailsList',
                name: 'Guaranter Details',
                tooltip:'हमीदार तपशील',
                id: 271
              },
              {
                state: 'BnkNonGuaranteerView',
                name: 'Non Guarantor (A-Type Members Only) List',
                tooltip:'नॉन गॅरेंटर (केवळ ए-टाइप सदस्य) यादी',
                id: 272
              },
              {
                state: 'custidIntroducerList',
                name: 'CustomerIdwise Introducer List',
                tooltip:'ग्राहक आयडीनुसार परिचयकर्ता यादी',
                id: 273
              },
              {
                state: 'serviceChargeList',
                name: 'Service Charges List',
                tooltip:'सेवा शुल्क यादी',
                id: 274
              },
              {
                state: 'minorToMajorlist',
                name: 'Minor To Major List',
                tooltip:'किरकोळ ते प्रमुख यादी',
                id: 275
              },
              {
                state: 'tranLessAclist',
                name: 'Transactionless Account List',
                tooltip:'व्यवहारविरहित खाते सूची',
                id: 276
              },
              {
                state: 'dormantAccountList',
                name: 'Dormant Account List',
                tooltip:'Dormant खात्यांची यादी',
                id: 277
              },
              {
                state: 'forzenaccount',
                name: 'Forzen Account',
                tooltip:'Forzen खाते',
                id: 380
              },
              {
                state: 'nonmemberlist',
                name: 'Non Member List',
                tooltip:'सदस्य नसलेली यादी',
                id: 395
              },

            ]
          },
          //
          {
            state: 'misReports',
            name: 'MIS Reports',
            tooltip:'MIS अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 278,
            children: [
              {
                state: 'loanBalanceBetTwoDates',
                name: 'Loan Balance Bet Two Dates Report',
                tooltip:'दोन तारखांच्या अहवालादरम्यान कर्जाची शिल्लक',
                id: 356
              },
              {
                state: 'excessCashBalance',
                name: 'Excess Cash Balance Report',
                tooltip:'जादा रोख शिल्लक अहवाल',
                id: 280
              },
              {
                state: 'statistical',
                name: 'statistical',
                tooltip:'सांख्यिकीय',
                id: 363
              },
              {
                state: 'comparativeStatment',
                name: 'comparative Statment',
                tooltip:'तुलनात्मक विधान',
                id: 364
              },
              {
                state: 'expensiveList',
                name: 'Expensive List',
                tooltip:'महाग यादी',
                id: 365
              },
              {
                state: 'TransactionwiseMonthlyStatus',
                name: 'Transactionwise Monthly Status',
                tooltip:'व्यवहारानुसार मासिक स्थिती',
                id: 371
              },
              {
                state: 'WeeklyLedgerBalance',
                name: 'Weekly Ledger Balance',
                tooltip:'साप्ताहिक लेजर शिल्लक',
                id: 373
              },

            ]
          },
          //
          {
            state: 'managerViewReports',
            name: 'Manager View Reports',
            tooltip:'व्यवस्थापक पहा अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 281
          },
          //
          {
            state: 'finalReports',
            name: 'Final Reports',
            tooltip:'अंतिम अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 282,
            children: [
              {
                state: 'BnkTrialBal',
                name: 'Trial Balance ',
                tooltip:'चाचणी शिल्लक',
                id: 283
              },
              {
                state: 'BnkTrialBaldetail',
                name: 'Trial Balance Detail',
                tooltip:'चाचणी शिल्लक तपशील',
                id: 284
              },
              {
                state: 'BalanceSheet',
                name: 'Balance Sheet',
                tooltip:'ताळेबंद',
                id: 285
              },
              {
                state: 'NBalanceSheet',
                name: 'N Form Balance Sheet',
                tooltip:'एन फॉर्म ताळेबंद',
                id: 286
              },
              {
                state: 'ProfitLossAccount',
                name: 'Profit & Loss Account',
                tooltip:'नफा आणि तोटा खाते',
                id: 287
              },
              {
                state: 'NProfitLoss',
                name: 'N Form Profit & Loss Account',
                tooltip:'एन फॉर्म नफा आणि तोटा खाते',
                id: 288
              },
              {
                state: 'RecePayRep',
                name: 'Receipt & Payment Report',
                tooltip:'पावती आणि देयक अहवाल',
                id: 289
              },
              {
                state: 'RecePayRepDetails',
                name: 'Receipt & Payment Report Detail',
                tooltip:'पावती आणि देयक अहवाल तपशील',
                id: 290
              },

            ]
          },
          {
            state: 'RecoveryReport',
            name: 'Recovery Reports',
            tooltip:'पुनर्प्राप्ती अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 291,
            children: [
              {
                state: 'memberAckReport',
                name: 'Member Acknowledgement Report',
                tooltip:'सदस्य पोचपावती अहवाल',
                id: 292
              },


            ]
          },
          {
            state: 'EmployeeSocity',
            name: 'Employee Socity Reports',
            tooltip:'कर्मचारी सोसायटी अहवाल',
            short_label: 'D',
            type: 'sub',
            icon: 'icon-home',
            id: 369,
            children: [
              {
                state: 'termdeposit',
                name: 'Term Deposit Report',
                tooltip:'मुदत ठेव अहवाल',
                id: 370
              },
              {
                state: 'SharesandRecovery',
                name: 'Shares and Recovery',
                tooltip:'शेअर्स आणि रिकव्हरी',
                id: 387
              },


            ]
          },
        ]
      },
      {
        state: 'utility',
        short_label: 'D',
        name: 'Utility',
        tooltip:'उपयुक्तता',
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
            name: 'Interest Posting',
            tooltip:'स्वारस्य पोस्टिंग',
            short_label: 'D',
            type: 'sub',
            id: 302,
            children: [
              {
                state: 'interestCalculation',
                name: 'Interest Calculation',
                tooltip:'व्याज गणना',
                id: 303
              },

              {
                state: 'interestPassing',
                name: 'Interest Passing',
                tooltip:'व्याज उत्तीर्ण',
                id: 304
              },
              {
                state: 'interestList',
                name: 'Interest List',
                tooltip:'व्याज यादी',
                id: 305
              },
            ]
          },

          {
            state: 'pigmyMachineProcess',
            name: 'Pigmy Machine Process',
            tooltip:'पिग्मी मशीन प्रोसेस',
            id: 307
          },
          {
            state: 'pigmyAppProcess',
            name: 'Pigmy App Process',
            tooltip:'पिग्मी ॲप प्रक्रिया',
            id: 308
          },
          {
            state: 'monthRecProc',
            name: 'Monthly Recovery Process',
            tooltip:'मासिक पुनर्प्राप्ती प्रक्रिया',
            id: 357
          },
          {
            state: 'whatsappmessages',
            name: 'Whatsapp Messages',
            tooltip:'Whatsapp संदेश',
            id: 345
          },
          {
            state: 'deadStockP',
            name: 'Dead Stock Process',
            tooltip:'डेड स्टॉक प्रक्रिया',
            id: 309
          },
          {
            state: 'dividend',
            name: 'Dividend',
            tooltip:'लाभांश',
            short_label: 'D',
            type: 'sub',
            id: 310,
            children: [
              {
                state: 'dividendList',
                name: 'Dividend List',
                tooltip:'लाभांश यादी',
                id: 311
              },
              {
                state: 'dividendPost',
                name: 'Dividend Post',
                tooltip:'लाभांश पोस्ट',
                id: 312
              }
            ]
          },
          {
            state: 'statementHeadInsert',
            name: 'Statement Head Insert',
            tooltip:'स्टेटमेंट हेड इन्सर्ट',
            id: 313
          },


          {
            state: 'roleDefination',
            name: 'Role Defination',
            tooltip:'भूमिका व्याख्या',
            id: 315
          },
          {
            state: 'roleMaster',
            name: 'Role Master',
            tooltip:'रोल मास्टर',
            id: 316
          },
          {
            state: 'userDefination',
            name: 'User Defination',
            tooltip:'वापरकर्ता व्याख्या',
            id: 317
          },
          {
            state: 'cashierMaintance',
            name: 'Cashier Maintenace',
            tooltip:'रोखपाल देखभाल',
            id: 318
          },
          {
            state: 'cashierUM',
            name: 'Cashier User Maintainance',
            tooltip:'रोखपाल वापरकर्ता देखभाल',
            id: 319
          },
          {
            state: 'sharesCCTS',
            name: 'Shares Contribution Credit To Shares',
            tooltip:'शेअर्सचे योगदान क्रेडिट',
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
            tooltip:'योजना रक्कम हस्तांतरण नोंद',
            id: 323
          },
          {
            state: 'schemeParameters',
            name: 'Scheme Parameters',
            tooltip:'योजना पॅरामीटर्स',
            id: 324
          },
          {
            state: 'calculator',
            name: 'Calculator',
            tooltip:'कॅल्क्युलेटर',
            id: 325
          },
          // {
          //   state: 'remindMe',
          //   name: 'Remind Me',
          //   id: 326
          // },

          {
            state: 'pataSevaSupportR',
            name: 'PataSeva Support Register',
            tooltip:'पतसेवा सपोर्ट रजिस्टर',
            id: 328
          },
          {
            state: 'sharesDataEI',
            name: 'Sheres Data Export / Import',
            tooltip:'शेअर्सचे डेटा निर्यात / आयात',
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
            tooltip:'डिमांड ड्राफ्ट डेटा निर्यात/आयात',
            id: 331
          },
          {
            state: 'gmaMemberUpdation',
            name: 'General Meeting Appear Meeting Updation',
            tooltip:'सर्वसाधारण सभेत सभेचे अद्ययावतीकरण दिसून येते',
            id: 332
          },
          {
            state: 'amtTransferTransaction',
            name: 'Amount Transfer Transaction',
            tooltip:'रक्कम हस्तांतरण व्यवहार',
            id: 333
          },
          {
            state: 'recAmtTrToGL',
            name: 'Recurring Amount Transfer to GL',
            tooltip:'आवर्ती रक्कम जी एल  मध्ये हस्तांतरण',
            id: 334
          },

        ]
      },
      {
        state: 'process',
        short_label: 'D',
        name: 'Process',
        tooltip:'प्रक्रिया',
        type: 'sub',
        icon: 'fa fa-tasks',
        id: 346,
        children: [
          {
            state: 'dayBegin',
            name: 'Day Begin',
            tooltip:'दिवसाची सुरुवात',
            id: 294
          },
          {
            state: 'dayEnd',
            name: 'Day End',
            tooltip:'दिवसाचा शेवट',
            short_label: 'D',
            type: 'sub',
            id: 295,
            children: [
              {
                state: 'counterWorkDayEnd',
                name: 'Day End Handover',
                tooltip:'डे एंड हँडओव्हर',
                id: 296
              },
              {
                state: 'FinalDayEnd',
                name: 'Day End',
                tooltip:'दिवसाचा शेवट',
                id: 297
              },
              {
                state: 'pigmyDayEnd',
                name: 'pigmy Day End',
                tooltip:'पिग्मी दिवसाचा शेवट',
                id: 298
              },
              {
                state: 'yearEnd',
                name: 'Year End',
                tooltip:'वर्षाचा शेवट',
                id: 299
              },
            ]
          },

          {
            state: 'holiday',
            name: 'Holiday',
            tooltip:'सुट्टी',
            id: 301
          },


          {
            state: 'processACM',
            name: 'Process And Calculation Menu',
            tooltip:'प्रक्रिया आणि गणना मेनू',
            id: 306
          },

          {
            state: 'deadStockP',
            name: 'Dead Stock Process',
            tooltip:'डेड स्टॉक प्रक्रिया',
            id: 309
          },
          {
            state: 'dataBackup',
            name: 'Data Backup',
            tooltip:'डेटा बॅकअप',
            id: 327
          },
          {
            state: 'monthly recovery process',
            name: 'Monthly recovery process',
            tooltip:'मासिक पुनर्प्राप्ती प्रक्रिया',
            id: 360
          },
          {
            state: 'yearEndBranchwise',
            name: 'Year End BranchWise',
            tooltip:'वर्षअखेरीस शाखानिहाय',
            id: 361
          },
        ]
      },
      {
        state: 'windows',
        short_label: 'D',
        name: 'Windows',
        tooltip:'Windows',
        type: 'sub',
        icon: 'icon-home',
        id: 335,
        children: [
          {
            state: 'casecade',
            name: 'CaseCade',
            tooltip:'कॅसकेड',
            id: 336
          },
          {
            state: 'tileHorizontaily',
            name: 'Tile Horizontaily',
            tooltip:'Tile Horizontaily',
            id: 337
          },
          {
            state: 'tileVertically',
            name: 'Tile Vertically',
            tooltip:'Tile Vertically',
            id: 338
          },

        ]
      },
      {
        state: 'hotKeys',
        short_label: 'D',
        name: 'Hot Key',
        tooltip:'हॉट की',
        type: 'link',
        icon: 'fa fa-key',
        id: 339
      },
      {
        state: 'exit',
        short_label: 'D',
        name: 'Sign Out',
        tooltip:'साइन आउट करा',
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
