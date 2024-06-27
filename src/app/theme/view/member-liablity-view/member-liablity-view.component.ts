import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import * as moment from 'moment';
import Swal from "sweetalert2";
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-liablity-view',
  templateUrl: './member-liablity-view.component.html',
  styleUrls: ['./member-liablity-view.component.scss']
})
export class MemberLiablityViewComponent implements OnInit {
  angForm: FormGroup;
  obj: any;
  defaultDate: any
  showRepo: boolean = false;
  clicked: boolean = false;
  iframeurl: any = ' ';
  showLoading: boolean = false;
  ngbranch: any = null;
  todate: any = null;
  fromdate: any = null;

  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  formSubmitted = false;
  scheme: any = null
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
  FROM_DATE: any;
  isShow: boolean = false

  textareaWidth: number = 1000;
  tableHtml1: string = '';
  tableHtml: string = '';
  tableData: any[] = [];
  tableData1: any[] = [];

  bankName: string = '';
  branchName: string = '';
  reportName: string = 'Member Liability Report';
  fromDate: string = new Date().toISOString().split('T')[0];
  dueBalance: any;
  openDate: any;
  closeDate: any;
  accdetails1: any;
  GAC_CUSTID: any;
  gaccustid: any;
  accdetails2: any;
  tableHtml2: any;
  tableData2: { srNO: any; name: any; sanctionAmount: any; installmentAmount: any; openDate: any; closeDate: any; balance: any; dueBalance: any; }[];
  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private sanitizer: DomSanitizer, private http: HttpClient

  ) {
    this.fromdate = moment().format('DD/MM/YYYY');
    this.FROM_DATE = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  sh_Scheme
  introducerACNo
  selectedshScheme
  selectedmemNo
  id
  ngOnInit(): void {
    this.createForm();
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.id = data[0].id
      var filtered = data.filter(function (sh_Scheme) {
        return (sh_Scheme.name == 'SH');
      });
      this.sh_Scheme = filtered;
      this.getIntroducer()
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      scheme: ['', [Validators.required]],
      memNo: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.pattern, Validators.required]],
      PRINT_CUSTID: [""],
    });

  }
  actype
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
    this.actype = event.value
  }

  adjustTextareaWidth() {
    const content = this.tableHtml + this.tableHtml1;
    const lines = content.split('\n');
    let maxLength = 0;
    lines.forEach(line => {
        if (line.length > maxLength) {
            maxLength = line.length;
        }
    });
    this.textareaWidth = Math.min(maxLength * 8, window.innerWidth - 40); 
  }
  bankacno: any
  ac_name: any
  accdetails
  name
  balance
  sanctionamount
  installmentamt
  accustid
  getIntro1(event) {
    this.bankacno = event.bankacno
    this.ac_name = event.name
    let myObj = {
      'AC_TYPE': this.actype,
      'BANKACNO': event.bankacno,
      'BRANCH_CODE': event.branch
    }
    this.http.post(this.url+'/term-loan-master/memberLiablity1', myObj).subscribe(
      (data: any) => {
        this.accdetails = data;
        this.gaccustid = data[0].lnmasterID
        this.accustid=data[0].AC_CUSTID
        this.tableData = [{
          srNO: data[0].id,
          name: data[0].AC_NAME || '',
          sanctionAmount: data[0].AC_SANCTION_AMOUNT || 0,
          installmentAmount: data[0].AC_INSTALLMENT || 0,
          openDate: data[0].AC_OPDATE || '',
          closeDate: data[0].AC_CLOSEDT || '',
          balance: data[0].ledgerbalance || 0,
          dueBalance: data[0].duebal || 0,
          TOT_SAC_AMT:data[0].TOT_SAC_AMT || 0
        }];

        let userData = JSON.parse(localStorage.getItem('user'));
        let bankName = userData.branch.syspara.BANK_NAME;
        let branchName = userData.branch.NAME;
        this.getSecondDetails();
        this.tableHtml = this.convertTableToText(this.tableData, this.bankName, this.branchName, 'Member Liability Report', this.fromdate);
        this.adjustTextareaWidth();
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );

  }
  thirdaccustid
  getSecondDetails() {
    const myObj1 = {
      'lnmasterID': this.gaccustid
    };
    this.http.post(this.url+'/term-loan-master/memberLiablity2', myObj1).subscribe(
      (data1: any) => {
        this.accdetails1 = data1;
        this.thirdaccustid = data1[0].GAC_CUSTID
        this.tableData1 = data1.map(item => ({
          srNO: item.id,
          name: item.AC_NAME || '',
        }));

        this.tableHtml1 = this.convertTableToText1(this.tableData1);
        this.adjustTextareaWidth();
      },
      error => {
        console.error('Error fetching second details:', error);
      }
    );
    this.getThirdDetails()
  }

  getThirdDetails(){
    const myObj2 = {
      'SAC_CUSTID':  this.accustid
    };

    this.http.post('http://localhost:7271/term-loan-master/guaranterDetails3', myObj2).subscribe(
      (data3: any) => {
        this.accdetails2 = data3;
        this.tableData2 = data3.map(item => ({
          srNO: data3[0].id,
          name: data3[0].AC_NAME || '',
          sanctionAmount: data3[0].AC_SANCTION_AMOUNT || 0,
          installmentAmount: data3[0].AC_INSTALLMENT || 0,
          openDate: data3[0].AC_OPDATE || '',
          closeDate: data3[0].AC_CLOSEDT || '',
          balance: data3[0].ledgerbalance || 0,
          dueBalance: data3[0].duebal || 0
        }));
        // this.setAccountDetails(data[0]);
        this.tableHtml2 = this.convertTableToText2(this.tableData2);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // setGuarantorDetails(data) {
  //   this.tableData1 = [{
  //     srNO: data[0].id,
  //     name: data[0].AC_NAME || '',
  //     sanctionAmount: data[0].AC_SANCTION_AMOUNT || 0,
  //     installmentAmount: data[0].AC_INSTALLMENT || 0,
  //     openDate: data[0].AC_OPDATE || '',
  //     closeDate: data[0].AC_CLOSEDT || '',
  //     balance: data[0].ledgerbalance || 0,
  //     dueBalance: data[0].duebal || 0
  //   }];

  //   this.tableHtml1 = this.convertTableToText1(this.tableData1);
  // }
  getschemename: any
  getIntroducer() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.selectedshScheme, branchCode]
    switch (this.getschemename) {
      case 'SH':
        this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          //console.log(data,"gj");        
        })
        break;
    }
  }

 
 
  printTextArea() {
    const printWindow = window.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    // tableHtml: string = '';
    // printWindow.document.write('<pre>' + this.tableHtml, this.tableHtml1 + '</pre>');
    printWindow.document.write('<pre>' + this.tableHtml + '\n' + this.tableHtml1 + '\n' + this.tableHtml2 +'</pre>');
   
    printWindow.document.write('</body></html>');
    printWindow.document.close(); 
    printWindow.print();
    printWindow.close();

  }


//   convertTableToText(data: any[], bankName: string, branchName: string, reportName: string, currentDate: string): string {
//     let headers = ['Sr. No.', 'Name/Guarantor Name', 'Sanction Amount', 'Installment Amount', 'Open Date', 'Close Date', 'Balance', 'Due Balance'];


//     // let headerRow = ` ${headers[0].padEnd(5, ' ')}  ${headers[1].padEnd(20, ' ')}  ${headers[2].padEnd(15, ' ')}  ${headers[3].padStart(15, ' ')}  ${headers[4].padStart(15, ' ')}  ${headers[5].padStart(15, ' ')}  ${headers[6].padStart(15, ' ')}  ${headers[7].padStart(15, ' ')} `;

//     let headerRow = ` ${headers[0]}      ${headers[1]}               ${headers[2]}          ${headers[3]}          ${headers[4]}         ${headers[5]}        ${headers[6]}        ${headers[7]} `;

//     let separator = '___________________________________________________________________________________________________________________________________________________________';
//     // let rows = data.map(row =>
//     //   ` ${(row.srNO ?? '').toString().padEnd(5, ' ')}  ${(row.name).padEnd(20, ' ')}  ${(row.sanctionAmount ?? '').toString().padStart(15, ' ')}  ${(row.installmentAmount ?? '').toString().padStart(15, ' ')}  ${(row.openDate ?? '').padStart(15, ' ')}  ${(row.closeDate ?? '').padStart(15, ' ')}  ${(row.balance ?? '').toString().padStart(15, ' ')}  ${(row.dueBalance ?? '').toString().padStart(15, ' ')} `
//     // );


//     let rows = data.map(row =>
//       ` ${(row.srNO ?? '').toString()}          ${(row.name)}                    ${(row.sanctionAmount ?? '').toString()}           ${(row.installmentAmount ?? '').toString()}              ${(row.openDate ?? '')}            ${(row.closeDate ?? '')}           ${(row.balance ?? '').toString()}             ${(row.dueBalance ?? '').toString()} `
//     );
//     let additionalInfo = `                                                      ${bankName}  
//  ${branchName}                                                            ${reportName} ${currentDate}
 
// `;

//     return [separator, additionalInfo, separator, headerRow, separator, ...rows, separator].join('\n');
//   }
//   convertTableToText1(data: any[]): string {
//     let rows = data.map(row =>
//       ` ${(row.srNO ?? '').toString()}          ${(row.name)}          `
//     );
//     return [...rows].join('\n');
//   }

convertTableToText(data: any[], bankName: string, branchName: string, reportName: string, currentDate: string): string {
  let headers = ['Sr. No.', 'Name/Guarantor Name', 'Sanction Amount', 'Installment Amount', 'Open Date', 'Close Date', 'Balance', 'Due Balance'];
  let headerRow = ` ${headers[0]}      ${headers[1]}           ${headers[2]}          ${headers[3]}          ${headers[4]}         ${headers[5]}        ${headers[6]}        ${headers[7]} `;
  let separator = '___________________________________________________________________________________________________________________________________________________________';

  let rows = data.map(row =>
      ` 1          ${(row.name)}                      ${(row.sanctionAmount ?? '').toString()}              ${(row.installmentAmount ?? '').toString()}                  ${(row.openDate ?? '')}                ${(row.closeDate ?? '')}           ${(row.balance ?? '').toString()}             ${(row.dueBalance ?? '').toString()} `
  );

  let additionalInfo = `                                                      ${bankName}  
${branchName}                                                            ${reportName} ${currentDate}

`;

  return [separator, additionalInfo, separator, headerRow, separator, ...rows, separator].join('\n');
}

convertTableToText1(data: any[]): string {
  let rows = data.map(row =>
      ` ${(row.srNO ?? '').toString()}          ${(row.name)}          `
  );
  return rows.join('\n');
}
convertTableToText2(data: any[]): string {
  // let headers = ['Sr. No.', 'Name/Guarantor Name', 'Sanction Amount', 'Installment Amount', 'Open Date', 'Close Date', 'Balance', 'Due Balance'];
  // let headerRow = ` ${headers[0]}      ${headers[1]}           ${headers[2]}          ${headers[3]}          ${headers[4]}         ${headers[5]}        ${headers[6]}        ${headers[7]} `;
  let separator = '___________________________________________________________________________________________________________________________________________________________';

  let rows = data.map(row =>
      ` 1          ${(row.name)}                      ${(row.sanctionAmount ?? '').toString()}              ${(row.installmentAmount ?? '').toString()}                  ${(row.openDate ?? '')}                ${(row.closeDate ?? '')}           ${(row.balance ?? '').toString()}             ${(row.dueBalance ?? '').toString()} `
  );

  
  return [separator,  separator,  separator, ...rows, separator].join('\n');
}
view(event) {
  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchId = userData.branch.id
  let branchName = userData.branch.NAME;
  this.tableHtml = this.convertTableToText(this.tableData, this.bankName, this.branchName, 'Member Liability Report', this.fromdate);
  this.tableHtml1 = this.convertTableToText1(this.tableData1);

}
close() {
  this.resetForm()
  this.isShow = false
  this.angForm.reset();
}

// Reset Function
resetForm() {
  this.angForm.controls.memNo.reset();
  this.angForm.controls.FROM_DATE.reset();
  this.showRepo = false;
  this.clicked = false;
}
onLoad() {
  this.showLoading = false;
}
}
