import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import { HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class RoleDefinationService {

  url =  environment.base_url;
  constructor(private http:HttpClient) { }

  getRoleList(): Observable<any> {
    return this.http.post(this.url + '/user-defination/roles',{}).pipe();
  }

  addNewRoleHasPermission(data): Observable<any>{
    return this.http.post(this.url+ '/user-defination/insert_role_permission',data).pipe();
  }

  getRoleMenuList(): Observable<any>{
    return this.http.post(this.url +'/user-defination/RoleMenuList',{}).pipe()
  }

  getBooks(): TreeviewItem[] {

    const masterMenu = new TreeviewItem({
        text: 'Master', value: 1, children: [
          {
            text: 'General Ledger', value: 2, children: [
              { text: 'GL Statement Code', value: 3 },
              { text: 'GL Account Master', value: 4 },
              { text: 'GL Report Master', value: 5 },
              { text: 'GL Report Linking', value: 6 },
              { text: 'Budget Master', value: 7 },
            ]
          },
          {
            text: 'Customer', value: 8, children: [
              { text: 'Customer Id', value: 9 },
              { text: 'Shares Master', value: 10 },
              { text: 'Anamat / General Sub Master', value: 11 },
              { text: 'Saving Master', value: 12 },
              { text: 'Current Account Master', value: 13 },
              { text: 'Term Deposits Master', value: 14 },
              { text: 'Cash Credit Master', value: 15 },
              { text: 'Term Loan Master', value: 16 },
              { text: 'Dispute Loan Master', value: 17 },
              { text: 'Pigmy Agent Master', value: 18 },
              { text: 'Pigmy Account Master', value: 19 },
              { text: 'Dead Stock Master', value: 20 },
            ]
          },
          {
            text: 'Balance Entry', value: 21, children: [
              { text: 'Balance Updation', value: 22 },
              { text: 'Reconciliation Opening Transaction Entry', value: 23 },
              { text: 'Reconciliation Transaction Entry', value: 24 },
              { text: 'Loan Installment Edit and Close Date Updation', value: 25 },

            ]
          },
          {
            text: 'Policy Settings', value: 26, children: [
              { text: 'Information', value: 27 },
              { text: 'Definations', value: 28 },
              { text: 'Sizewise Balance Modification', value: 29 },
              { text: 'TD Receipt Type Master', value: 30 },
              { text: 'NPA Classification Slab Master ', value: 31 },

            ]
          },
          {
            text: 'Maintainance', value: 32, children: [
              { text: 'Security Details', value: 33 },
              { text: 'Loan And CC Interest Rate Changes', value: 34 },
              { text: 'Deposit / Loan Interest Rate Edit / Change', value: 35 },
              { text: 'NPA Opening Details Entry', value: 36 },
              { text: 'Interest Posting Flag Updation', value: 37 },
              { text: 'Accountwise Document Acceptance', value: 38 },
              { text: 'Noting Charges', value: 39 },
            ]
          },
          {
            text: 'Instruction', value: 40, children: [
              { text: 'Over Draft', value: 41 },
              { text: 'Standing Instruction', value: 42 },
              { text: 'Interest Instruction', value: 43 },
              { text: 'Special', value: 44 },
              { text: 'Freeze Account', value: 45 },
              { text: 'Reminder Instruction', value: 46 },
              { text: 'Revoke Standing Instructions', value: 48 },
              { text: 'Revoke Interest Instruction', value: 49 },
              { text: 'Revoke Special Instruction', value: 50 },
              { text: 'Lien Mark Clear', value: 51 },
            ]
          },
          {
            text: 'Investment', value: 52, children: [
              { text: 'Account Opening', value: 53 },
              { text: 'Transaction Entry', value: 54 },
              { text: 'Account Closing', value: 55},
              { text: 'Account Open Passing', value: 56 },
              { text: 'Transaction Passing', value: 57 },
              { text: 'Account Close Passing', value: 58 },
            ]
          },
          {
            text: 'Shares/Dividend', value: 59, children: [
              { text: 'Unpaid Dividend Entry', value: 60 },
              { text: 'Year Wise Unpaid Dividend Entry', value: 61 },
              { text: 'Dividend Transfer Entry', value: 62 },
              { text: 'Dividend Transfer Posting', value: 63 },
              { text: 'Dividend Calculation', value: 64 },
              { text: 'Dividend Posting', value: 65 },
            ]
          },
          {
            text: 'SignatureScanning', value: 66
          },
          {
            text: 'DDBankCityMaster', value: 67
          },

        ]

      },
    );
    const transactionMenu = new TreeviewItem({
        text: 'Transaction', value: 68, children: [
          {
            text:'Voucher Entry', value:69
          },
          {
            text:'Multi Voucher', value:70
          },
          {
            text:'Batch Transfer Voucher', value:71
          },
          {
            text:'Member Dividend And Payable Dividend Transaction', value:72
          },
          {
            text:'Member Transfer', value:73, children: [
              { text: 'Member Transfer Transaction', value: 74 },
              { text: 'Branch And Salary Division Changes', value: 75 },
              { text: 'Trasferred Member Opening Balances', value: 76 },
            ]
          },
          {
            text:'Recovery', value:77, children: [
              { text: 'Recovery Processing', value: 78 },
              { text: 'Recovery Modification', value: 79 },
              { text: 'Recovery Posting', value: 80 },
              { text: 'Recovery Data Import Export', value: 81 },
            ]
          },
          {
            text:'Member Loan', value:82, children: [
              { text: 'Loan Application', value: 83 },
              { text: 'Loan Sanction', value: 84 },
            ]
          },
          {
            text:'DD Transaction', value:85
          },
          {
            text:'Pigmy Chart Entry', value:86
          },
          {
            text:'Dividend Pay', value:87, children: [
              { text: 'Dividend Paid Mark(Salary Division)', value: 88 },
              { text: 'Dividend Pay(Salary Division)', value: 89 },
            ]
          },
          {
            text:'Cash Credit A/c Renewal', value:90
          },
          {
            text:'Share Transaction', value:91
          },
          {
            text:'Term Deposit Account Closing', value:92
          },
          {
            text:'Term Deposite A/c Renewal', value:93
          },
          {
            text:'Cash Denomination', value:94, children: [
              { text: 'Accept Denomination', value: 95 },
              { text: 'Payment Denomination', value: 96 },
              { text: 'Cash In Denomination', value: 97 },
              { text: 'Cash Out Denomination', value: 98 },
              { text: 'cash Initialisation Entry', value: 100 },
              { text: 'Safe Valult To Cashier', value: 101 },
              { text: 'Cashier To Safe Vault', value: 102 },
            ]
          },
          {
            text:'Passbook Printing', value:103, children: [
              { text: 'Passbook Issue', value: 104 },
              { text: 'Passbook Entry Print', value: 105 },
            ]
          },
          {
            text:'Term Deposit Receipt Printing', value:106, children: [
              { text: 'Deposit Receipt Print', value: 107 },
            ]
          },
          {
            text:'Dead Stock Purchase', value:108
          },
          {
            text:'Dead Stock Transaction', value:109
          },
          {
            text:'Reconciliation Entry', value:110
          },
        ]
      },

    );
    const passingMenu = new TreeviewItem({
        text:'Passing', value:111, children:[
          {
            text:'Centralised Passing', value:112, children: []
          },
          {
            text:'Shares Transaction Passing', value:113, children: []
          },
          {
            text:'Unapproval', value:114, children: [
              { text:'Unapproval Multivoucher', value:115 },
              { text:'Unapproval Voucher', value:116 },
              { text:'Unapproval Deposit Closing', value:117 },
              { text:'Unapproval Deposit Posting', value:118 },
            ]
          },
          {
            text:'Master Unlock', value:119, children: []
          },
        ]
      },
    );
    const viewMenu = new TreeviewItem({
      text:'View', value:120, children:[
          {
            text:'Account Enquiry', value:121
          },
          {
            text:'Ledger View', value:122
          },
          {
            text:'Shares Ledger View', value:123
          },
          {
            text:'Voucher View', value:124
          },
          {
            text:'Customer View', value:125
          },
          {
            text:'Guarantor View', value:126
          },
          {
            text:'Member View', value:127
          },
          {
            text:'Member Liablity View', value:128
          },
          {
            text:'Other View', value:129
          },
       ]
    });
    const reportMenu = new TreeviewItem({
      text:'Reports', value:130, children:[
        {
          text:'All Reports With Searching', value:131
        },
        {
          text:'Daily Reports', value:132
        },
        {
          text:'Statement', value:133
        },
        {
          text:'Balance Book', value:134
        },
        {
          text:'Registers', value:135
        },
        {
          text:'Denomination Reports', value:136
        },
        {
          text:'Term Deposit Reports', value:137
        },
        {
          text:'Loan Reports', value:138
        },
        {
          text:'NPA Reports', value:139
        },
        {
          text:'Shares ARR', value:140
        },
        {
          text:'Shares ADR', value:142
        },
        {
          text:'Notice', value:143
        },
        {
          text:'Other Reports', value:144
        },
        {
          text:'MIS Reports', value:145
        },
        {
          text:'Final Reports', value:146
        },
      ]
    });
    const utilityMenu = new TreeviewItem({
      text:'Utility', value:148, children:[
        {
          text:'Day Begin', value:149
        },
        {
          text:'Day End', value:150, children: [
            {text:'counter Work Day End', value:151 },
            {text:'pigmy Day End', value:152}
          ]
        },
        {
          text:'Back Dated Day Open', value:153
        },
        {
          text:'Receipt Printing Designing', value:154
        },
        {
          text:'Holiday', value:155
        },
        {
          text:'Interest Posting', value:156, children: [
            {text:'Interest Calculation', value:157 },
            {text:'Interest List', value:158 },
            {text:'Interest Passing', value:159 }

          ]
        },
        {
          text:'Process And Calculation Menu', value:160
        },
        {
          text:'Dead Stock Process', value:161
        },
        {
          text:'Dividend', value:162, children: [
            {text:'Dividend List', value:163 },
            {text:'Dividend Post', value:164 }
          ]
        },
        {
          text:'Statement Head Insert', value:165
        },
        {
          text:'Change Password', value:166
        },
        {
          text:'Role Defination',value:167
        },
        {
          text:'User Defination', value:168
        },
        {
          text:'Cashier User Maintainance', value:169
        },
        {
          text:'Shares Contribution Credit To Shares', value:170
        },
        {
          text:'Silver Jubilee Amount Credit To Shares', value:171
        },
        {
          text:'Masik Bachat Deposit Withdrawl', value:172
        },
        {
          text:'Scheme Amount Transfer Entry', value:173
        },
        {
          text:'Scheme Parameters', value:174
        },
        {
          text:'Calculator', value:175
        },
        {
          text:'Remind Me', value:176
        },
        {
          text:'Data Backup', value:177
        },
        {
          text:'PataSeva Support Register', value:178
        },
        {
          text:'Sheres Data Export / Import', value:179
        },
        {
          text:'Daybook Import / Export', value:180
        },
        {
          text:'Demand Draft Data Export/ Import', value:181
        },
      ]
    });
    const windowMenu = new TreeviewItem({
      text:'Windows', value:182, children:[
        {
          text:'CaseCade', value:183
        },
        {
          text:'Tile Horizontaily', value:184
        },
        {
          text:'Tile Vertically', value:185
        },
      ]
    });
    const hotkeysMenu = new TreeviewItem({
      text:'Hot Key', value:186
    });
    const exitMenu = new TreeviewItem({
      text:'exit', value:187
    });


    return [
      masterMenu,
      transactionMenu,
      passingMenu,
      viewMenu,
      reportMenu,
      utilityMenu,
      windowMenu,
      hotkeysMenu,
      exitMenu
    ];
  }
}
