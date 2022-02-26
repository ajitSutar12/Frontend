import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoleDefinationService {

  url = environment.base_url;
  constructor(private http: HttpClient) { }

  getRoleList(): Observable<any> {
    return this.http.post(this.url + '/user-defination/roles', {}).pipe();
  }

  addNewRoleHasPermission(data): Observable<any> {
    return this.http.post(this.url + '/user-defination/insert_role_permission', data).pipe();
  }

  getRoleMenuList(): Observable<any> {
    return this.http.post(this.url + '/user-defination/RoleMenuList', {}).pipe()
  }

  getBooks(): TreeviewItem[] {

    const masterMenu = new TreeviewItem({
      text: 'Master', value: 1, checked: false, children: [
        {
          text: 'General Ledger', value: 2, checked: false, children: [
            { text: 'GL Statement Code', value: 3, checked: false, },
            { text: 'GL Account Master', value: 4, checked: false, },
            { text: 'GL Report Master', value: 5, checked: false, },
            { text: 'GL Report Linking', value: 6, checked: false, },
            { text: 'Budget Master', value: 7, checked: false, },
          ]
        },
        {
          text: 'Customer', value: 8, checked: false, children: [
            { text: 'Customer Id', value: 9, checked: false, },
            { text: 'Shares Master', value: 10, checked: false, },
            { text: 'Anamat / General Sub Master', value: 11, checked: false, },
            { text: 'Saving Master', value: 12, checked: false, },
            { text: 'Current Account Master', value: 13, checked: false, },
            { text: 'Term Deposits Master', value: 14, checked: false, },
            { text: 'Cash Credit Master', value: 15, checked: false, },
            { text: 'Term Loan Master', value: 16, checked: false, },
            { text: 'Dispute Loan Master', value: 17, checked: false, },
            { text: 'Pigmy Agent Master', value: 18, checked: false, },
            { text: 'Pigmy Account Master', value: 19, checked: false, },
            { text: 'Dead Stock Master', value: 20, checked: false, },
          ]
        },
        {
          text: 'Balance Entry', value: 21, checked: false, children: [
            { text: 'Balance Updation', value: 22, checked: false, },
            { text: 'Reconciliation Opening Transaction Entry', value: 23, checked: false, },
            { text: 'Reconciliation Transaction Entry', value: 24, checked: false, },
            { text: 'Loan Installment Edit and Close Date Updation', value: 25, checked: false, },

          ]
        },
        {
          text: 'Policy Settings', value: 26, checked: false, children: [
            { text: 'Information', value: 27, checked: false, },
            { text: 'Definations', value: 28, checked: false, },
            { text: 'Sizewise Balance Modification', value: 29, checked: false, },
            { text: 'TD Receipt Type Master', value: 30, checked: false, },
            { text: 'NPA Classification Slab Master ', value: 31, checked: false, },

          ]
        },
        {
          text: 'Maintainance', value: 32, checked: false, children: [
            { text: 'Security Details', value: 33, checked: false, },
            { text: 'Loan And CC Interest Rate Changes', value: 34, checked: false, },
            { text: 'Deposit / Loan Interest Rate Edit / Change', value: 35, checked: false, },
            { text: 'NPA Opening Details Entry', value: 36, checked: false, },
            { text: 'Interest Posting Flag Updation', value: 37, checked: false, },
            { text: 'Accountwise Document Acceptance', value: 38, checked: false, },
            { text: 'Noting Charges', value: 39, checked: false, },
          ]
        },
        {
          text: 'Instruction', value: 40, checked: false, children: [
            { text: 'Over Draft', value: 41, checked: false, },
            { text: 'Standing Instruction', value: 42, checked: false, },
            { text: 'Interest Instruction', value: 43, checked: false, },
            { text: 'Special', value: 44, checked: false, },
            { text: 'Freeze Account', value: 45, checked: false, },
            { text: 'Reminder Instruction', value: 46, checked: false, },
            { text: 'Revoke Standing Instructions', value: 48, checked: false, },
            { text: 'Revoke Interest Instruction', value: 49, checked: false, },
            { text: 'Revoke Special Instruction', value: 50, checked: false, },
            { text: 'Lien Mark Clear', value: 51, checked: false, },
          ]
        },
        {
          text: 'Investment', value: 52, checked: false, children: [
            { text: 'Account Opening', value: 53, checked: false, },
            { text: 'Transaction Entry', value: 54, checked: false, },
            { text: 'Account Closing', value: 55, checked: false, },
            { text: 'Account Open Passing', value: 56, checked: false, },
            { text: 'Transaction Passing', value: 57, checked: false, },
            { text: 'Account Close Passing', value: 58, checked: false, },
          ]
        },
        {
          text: 'Shares/Dividend', value: 59, checked: false, children: [
            { text: 'Unpaid Dividend Entry', value: 60, checked: false, },
            { text: 'Year Wise Unpaid Dividend Entry', value: 61, checked: false, },
            { text: 'Dividend Transfer Entry', value: 62, checked: false, },
            { text: 'Dividend Transfer Posting', value: 63, checked: false, },
            { text: 'Dividend Calculation', value: 64, checked: false, },
            { text: 'Dividend Posting', value: 65, checked: false, },
          ]
        },
        {
          text: 'SignatureScanning', value: 66, checked: false,
        },
        {
          text: 'DDBankCityMaster', value: 67, checked: false,
        },

      ]

    },
    );
    const transactionMenu = new TreeviewItem({
      text: 'Transaction', value: 68, checked: false, children: [
        {
          text: 'Voucher Entry', value: 69, checked: false,
        },
        {
          text: 'Multi Voucher', value: 70, checked: false,
        },
        {
          text: 'Batch Transfer Voucher', value: 71, checked: false,
        },
        {
          text: 'Member Dividend And Payable Dividend Transaction', value: 72, checked: false,
        },
        {
          text: 'Member Transfer', value: 73, checked: false, children: [
            { text: 'Member Transfer Transaction', value: 74, checked: false, },
            { text: 'Branch And Salary Division Changes', value: 75, checked: false, },
            { text: 'Trasferred Member Opening Balances', value: 76, checked: false, },
          ]
        },
        {
          text: 'Recovery', value: 77, checked: false, children: [
            { text: 'Recovery Processing', value: 78, checked: false, },
            { text: 'Recovery Modification', value: 79, checked: false, },
            { text: 'Recovery Posting', value: 80, checked: false, },
            { text: 'Recovery Data Import Export', value: 81, checked: false, },
          ]
        },
        {
          text: 'Member Loan', value: 82, checked: false, children: [
            { text: 'Loan Application', value: 83, checked: false, },
            { text: 'Loan Sanction', value: 84, checked: false, },
          ]
        },
        {
          text: 'DD Transaction', value: 85, checked: false,
        },
        {
          text: 'Pigmy Chart Entry', value: 86, checked: false,
        },
        {
          text: 'Dividend Pay', value: 87, checked: false, children: [
            { text: 'Dividend Paid Mark(Salary Division)', value: 88 , checked: false},
            { text: 'Dividend Pay(Salary Division)', value: 89 , checked: false},
          ]
        },
        {
          text: 'Cash Credit A/c Renewal', value: 90, checked: false,
        },
        {
          text: 'Share Transaction', value: 91, checked: false,
        },
        {
          text: 'Term Deposit Account Closing', value: 92, checked: false,
        },
        {
          text: 'Term Deposite A/c Renewal', value: 93, checked: false,
        },
        {
          text: 'Cash Denomination', value: 94, checked: false, children: [
            { text: 'Accept Denomination', value: 95, checked: false, },
            { text: 'Payment Denomination', value: 96, checked: false, },
            { text: 'Cash In Denomination', value: 97, checked: false, },
            { text: 'Cash Out Denomination', value: 98, checked: false, },
            { text: 'cash Initialisation Entry', value: 100, checked: false, },
            { text: 'Safe Valult To Cashier', value: 101, checked: false, },
            { text: 'Cashier To Safe Vault', value: 102, checked: false, },
          ]
        },
        {
          text: 'Passbook Printing', value: 103, children: [
            { text: 'Passbook Issue', value: 104, checked: false, },
            { text: 'Passbook Entry Print', value: 105, checked: false, },
          ]
        },
        {
          text: 'Term Deposit Receipt Printing', value: 106, children: [
            { text: 'Deposit Receipt Print', value: 107, checked: false, },
          ]
        },
        {
          text: 'Dead Stock Purchase', value: 108, checked: false,
        },
        {
          text: 'Dead Stock Transaction', value: 109, checked: false,
        },
        {
          text: 'Reconciliation Entry', value: 110, checked: false,
        },
      ]
    },

    );
    const passingMenu = new TreeviewItem({
      text: 'Passing', value: 111, checked: false, children: [
        {
          text: 'Centralised Passing', value: 112, checked: false, children: []
        },
        {
          text: 'Shares Transaction Passing', value: 113,checked: false, children: []
        },
        {
          text: 'Unapproval', value: 114, checked: false, children: [
            { text: 'Unapproval Multivoucher', value: 115, checked: false, },
            { text: 'Unapproval Voucher', value: 116, checked: false, },
            { text: 'Unapproval Deposit Closing', value: 117, checked: false, },
            { text: 'Unapproval Deposit Posting', value: 118, checked: false, },
          ]
        },
        {
          text: 'Master Unlock', value: 119, checked: false, children: []
        },
      ]
    },
    );
    const viewMenu = new TreeviewItem({
      text: 'View', value: 120, checked: false, children: [
        {
          text: 'Account Enquiry', value: 121, checked: false,
        },
        {
          text: 'Ledger View', value: 122, checked: false,
        },
        {
          text: 'Shares Ledger View', value: 123, checked: false,
        },
        {
          text: 'Voucher View', value: 124, checked: false,
        },
        {
          text: 'Customer View', value: 125, checked: false,
        },
        {
          text: 'Guarantor View', value: 126, checked: false,
        },
        {
          text: 'Member View', value: 127, checked: false,
        },
        {
          text: 'Member Liablity View', value: 128, checked: false,
        },
        {
          text: 'Other View', value: 129, checked: false,
        },
      ]
    });
    const reportMenu = new TreeviewItem({
      text: 'Reports', value: 130, checked: false, children: [
        {
          text: 'All Reports With Searching', value: 131, checked: false,
        },
        {
          text: 'Daily Reports', value: 132, checked: false,
        },
        {
          text: 'Statement', value: 133, checked: false,
        },
        {
          text: 'Balance Book', value: 134, checked: false,
        },
        {
          text: 'Registers', value: 135, checked: false,
        },
        {
          text: 'Denomination Reports', value: 136, checked: false,
        },
        {
          text: 'Term Deposit Reports', value: 137, checked: false,
        },
        {
          text: 'Loan Reports', value: 138, checked: false,
        },
        {
          text: 'NPA Reports', value: 139, checked: false,
        },
        {
          text: 'Shares ARR', value: 140, checked: false,
        },
        {
          text: 'Shares ADR', value: 142, checked: false,
        },
        {
          text: 'Notice', value: 143, checked: false,
        },
        {
          text: 'Other Reports', value: 144, checked: false,
        },
        {
          text: 'MIS Reports', value: 145, checked: false,
        },
        {
          text: 'Final Reports', value: 146, checked: false,
        },
      ]
    });
    const utilityMenu = new TreeviewItem({
      text: 'Utility', value: 148, checked: false, children: [
        {
          text: 'Day Begin', value: 149, checked: false,
        },
        {
          text: 'Day End', value: 150, checked: false, children: [
            { text: 'counter Work Day End', value: 151, checked: false, },
            { text: 'pigmy Day End', value: 152, checked: false, }
          ]
        },
        {
          text: 'Back Dated Day Open', value: 153, checked: false,
        },
        {
          text: 'Receipt Printing Designing', value: 154, checked: false,
        },
        {
          text: 'Holiday', value: 155, checked: false,
        },
        {
          text: 'Interest Posting', value: 156, checked: false, children: [
            { text: 'Interest Calculation', value: 157, checked: false, },
            { text: 'Interest List', value: 158, checked: false, },
            { text: 'Interest Passing', value: 159, checked: false, }

          ]
        },
        {
          text: 'Process And Calculation Menu', value: 160, checked: false,
        },
        {
          text: 'Dead Stock Process', value: 161, checked: false,
        },
        {
          text: 'Dividend', value: 162, checked: false, children: [
            { text: 'Dividend List', value: 163, checked: false, },
            { text: 'Dividend Post', value: 164, checked: false, }
          ]
        },
        {
          text: 'Statement Head Insert', value: 165, checked: false,
        },
        {
          text: 'Change Password', value: 166, checked: false,
        },
        {
          text: 'Role Defination', value: 167, checked: false,
        },
        {
          text: 'User Defination', value: 168, checked: false,
        },
        {
          text: 'Cashier User Maintainance', value: 169, checked: false,
        },
        {
          text: 'Shares Contribution Credit To Shares', value: 170, checked: false,
        },
        {
          text: 'Silver Jubilee Amount Credit To Shares', value: 171, checked: false,
        },
        {
          text: 'Masik Bachat Deposit Withdrawl', value: 172, checked: false,
        },
        {
          text: 'Scheme Amount Transfer Entry', value: 173, checked: false,
        },
        {
          text: 'Scheme Parameters', value: 174, checked: false,
        },
        {
          text: 'Calculator', value: 175, checked: false,
        },
        {
          text: 'Remind Me', value: 176, checked: false,
        },
        {
          text: 'Data Backup', value: 177, checked: false,
        },
        {
          text: 'PataSeva Support Register', value: 178, checked: false,
        },
        {
          text: 'Sheres Data Export / Import', value: 179, checked: false,
        },
        {
          text: 'Daybook Import / Export', value: 180, checked: false,
        },
        {
          text: 'Demand Draft Data Export/ Import', value: 181, checked: false,
        },
      ]
    });
    const windowMenu = new TreeviewItem({
      text: 'Windows', value: 182, checked: false, children: [
        {
          text: 'CaseCade', value: 183, checked: false,
        },
        {
          text: 'Tile Horizontaily', value: 184, checked: false,
        },
        {
          text: 'Tile Vertically', value: 185, checked: false,
        },
      ]
    });
    const hotkeysMenu = new TreeviewItem({
      text: 'Hot Key', value: 186, checked: false,
    });
    const exitMenu = new TreeviewItem({
      text: 'exit', value: 187, checked: false,
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
