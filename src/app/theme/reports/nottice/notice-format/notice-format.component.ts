import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from "rxjs/operators";
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import * as moment from 'moment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-notice-format',
  templateUrl: './notice-format.component.html',
  styleUrls: ['./notice-format.component.scss']
})
export class NoticeFormatComponent implements OnInit {
  @ViewChild('textarea') textareaRef: ElementRef;
  textareaWidth: number = 1300;
  Options = ['Loan_Due_Installment_Notice', 'Loan_Installment_Intimation_Notice_Before_Expiry', 'Loan_Installment_Notice_for_Guaranter_After_Expiry','Cash_Credit_Notice_Before_Expiry','Loan/Cash_Credit_OverDue_Notice_After_Expiry','Cash_Credit_Renewal_Notice','Three_Months_Interest_For_Loan','Gold_Silver_Notice,Gold_Silver_Notice1','Gold_Silver_Auction_Notice','Notice_Before_dispute','Property_Clear','APPENDIX','Non_Objection_Certificate(Vehicle)','Deposit_Renewal_Instimate_Notice'];
  AccNo

  ngForm: FormGroup
  enteredName: string;
  selectedText: string = '';
  selectedAccount: string = '';

  code: any;
  code1
  noticeType: any;
  noticeType1: any;
  fontSize: number = 12;

  letterTemplate: string = ''
  GuaranterletterTemplate: string = ''
  isGuaranterCopyRequired: boolean = false;
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  isShow: boolean = false;
  shemeDetails: any
  showButtons: boolean = false;

  showViewButton: boolean = true;
  showPrintButton: boolean = true;
  showCancelButton: boolean = true;
  accdetails: any;
  constructor(private http: HttpClient, private ngZone: NgZone, private fb: FormBuilder, private systemParameter: SystemMasterParametersService) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    // this.Options = [];
    // this.Menu = [];
    this.AddSchemeData();
    // this.fetchData();
    this.fetchAccount();
    this.drop();
    // this.getNotice(event)
    // this.detail();

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });
  }
  createForm() {
    this.ngForm = this.fb.group({
      AccNo: ['', [Validators.required]],
      notice: ['', [Validators.required]],
      Scheme_code: ['', [Validators.required]],
      NOTICE_DATE: ['', [Validators.required]],
      Expired_DATE: ['', [Validators.required]],
      TOTAL_DAYS: ['', [Validators.required]],
      TOTAL_INSTALL: [''],
      IS_GURANTOR: [''],
      GURANTOR: [''],
    });

  }
  actype
  //get scheme data
  AddSchemeData() {
    this.http.get('http://192.168.1.113:7276/ledger-view/cschem').subscribe((data: any[]) => {
      // this.http.get('http://' + this.base_url +'/ledger-view/cschem').subscribe((data: any[]) => {

      this.shemeDetails = data.map(item => ({ ...item, isSelected: false }))
      if (this.shemeDetails.length > 0) {
        this.actype = this.shemeDetails[0].id;
      }
      console.log(this.shemeDetails);
    });
    this.detail();
  }

  //get notice type
  drop() {
    this.http.post('http://192.168.1.121:3002/notice/getnoticedata', {}).subscribe(
      (data: any) => {
        console.log(data)
        this.noticeType = data
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  getNotice(event: any) {
    // let selectedNotice = this.noticeType1;
    // let noticeCode = selectedNotice.CODE;
  }
  // calculateRows(text: string): number {
  //   const numberOfLines = text.split('\n').length;
  //   return Math.max(numberOfLines, 2);
  // }

  updateTextarea() {

    // const selectedOptionText = this.selectedOption ? `${this.selectedOption} ` : '';
    // const selectedMenuText = this.selectedMenu ? `${this.selectedMenu} ` : '';
    // const selectedListText = this.selectedList ? `${this.selectedList} ` : '';

    // const backendText = this.selectedText || '';


    // const textarea = document.querySelector('textarea');
    // const cursorPosition = textarea.selectionStart;
    // const newText = `${backendText.slice(0, cursorPosition)}${selectedOptionText}${selectedMenuText}${selectedListText}${backendText.slice(cursorPosition)}`;
    // this.selectedText = newText.trim();
  }

  resetFields(): void {
    // this.selectedOption = '';
    // this.selectedMenu = '';
    // this.selectedList = '';
  }

  ///get notice
  fetchData(): void {
    const dataSend =
    {
      CODE: 1,
    };
    // console.log(dataSend.CODE)
    this.http.post('http://192.168.1.121:3002/notice/noticedata', dataSend).subscribe(
      (data: any) => {
        console.log(data)
        this.ngZone.run(() => {
          this.selectedText = data.letter;
          this.code = data.CODE;
        });
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  name
  acno
  opdate
  Listdata

  //Account data
  fetchAccount(): void {
    this.http.get('http://192.168.1.121:3002/notice/getdata').subscribe(
      (data: any) => {
        this.selectedAccount = data;
        // this.name=data[0].AC_NAME;
        // this.acno=data[0].AC_NO;
        // this.opdate=data[0].AC_OPDATE
        // console.log(data )
        // for (let i = 0; i < data.length; i++) {
        //   this.Listdata.push({
        //     'Name': data[i].AC_NAME,
        //     'AC_NO': data[i].AC_NO,
        //     'BRANCH_CODE': data[i].BRANCH_CODE,
        //     'AC_SANCTION_DATE': data[i].AC_SANCTION_DATE,
        //     'Opening Date': data[i].AC_OPDATE
        //   });
        // }
        // console.log(this.Listdata)
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
    this.detail();
  }
  Name
  AC_NO
  Branch_code
  listdata1: any = null;
  sanction_date
  getAcc(event) {
    this.Name = event.AC_NAME
    this.AC_NO = event.AC_NO
    this.Branch_code = event.BRANCH_CODE
    this.sanction_date = event.AC_SANCTION_DATE


  }
  BRANCH_CODE
  sanction_amt
  BALANCE
  CURRENT_INTEREST
  OVERDUEDATE

  resetForm() {
    this.ngForm.reset();
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.AccNo.reset();
    this.ngForm.controls.REPORT_DATE.reset();
    this.ngForm.controls.NOTICE_DATE.reset();
    this.ngForm.controls.TOTAL_DAYS.reset();
    this.ngForm.controls.CITY_CODE.reset();
    this.ngForm.controls.Expired_DATE.reset();
    this.ngForm.controls.TOTAL_INSTALL.reset();
    this.ngForm.controls.IS_GURANTOR.reset();

    // this.showRepo = false;
    // this.clicked=false;
  }
  printTextArea() {

    const printWindow = window.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<pre>' + this.letterTemplate + '</pre>');
    printWindow.document.write('</body></html>');
    printWindow.print();
    printWindow.close();

    this.showViewButton = false;
    this.showCancelButton = true;

  }

  detail() {
    let userData = JSON.parse(localStorage.getItem('user'));
    let BRANCH_CODE = userData.branch.id;

    let myObj = {
      'BRANCH_CODE': BRANCH_CODE
    }
    //get all details of Account 
    this.http.post('http://192.168.1.121:3002/notice/getalldetailsofloanacc', myObj).subscribe(
      (data: any) => {
        this.accdetails = data;
        const loanDetails = data[0];
        this.accdetails = loanDetails;
        this.sanction_amt = loanDetails.AC_SANCTION_AMOUNT;
        // this.sanction_amt = data[0].AC_SANCTION_AMOUNT
        this.BALANCE = data[0].BALANCE
        this.CURRENT_INTEREST = data[0].CURRENT_INTEREST
        this.OVERDUEDATE = data[0].OVERDUEDATE
        console.log(this.accdetails)
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  view() {

    if (this.ngForm.valid) {
      let obj = this.ngForm.value

      let AC_NAME = obj.AccNo.AC_NAME
      let AC_NO = obj.AccNo.BANKACNO
      let NOTICE_DATE = obj.NOTICE_DATE
      let Expired_DATE = this.ngForm.value.Expired_DATE
      let notice = obj.notice

      let REPORT_DATE = this.ngForm.value.REPORT_DATE
      let S_NAME = obj.Scheme_code.S_NAME
      // let sanction_amt =this.accdetails.AC_SANCTION_AMOUNT
      // let balance = this.accdetails.BALANCE
      // let current_interest = this.CURRENT_INTEREST
      // let overdue_date = this.accdetails.OVERDUEDATE
      // let rec_pay_interest = this.accdetails.REC_PAY_INTEREST
      // let address =this.accdetails.ADDRESS
      // let duebal = this.accdetails.DUEBAL
      // let gac_name =this.accdetails.GAC_NAME
      // let city_name =this.accdetails.CITY_NAME





      let sanction_amt = this.accdetails.AC_SANCTION_AMOUNT ? this.accdetails.AC_SANCTION_AMOUNT : '';
      let balance = this.accdetails.BALANCE ? this.accdetails.BALANCE : '';
      let overdue_date = this.accdetails.OVERDUEDATE ? this.accdetails.OVERDUEDATE : '';
      let address = this.accdetails.ADDRESS ? this.accdetails.ADDRESS : '';
      let city_name = this.accdetails.CITY_NAME ? this.accdetails.CITY_NAME : '';
      let gac_name = this.accdetails.GAC_NAME ? this.accdetails.GAC_NAME : '';


      let rec_pay_interest = this.accdetails.REC_PAY_INTEREST ? this.accdetails.REC_PAY_INTEREST : 0;
      let duebal = this.accdetails.DUEBAL ? this.accdetails.DUEBAL : 0;
      let current_interest = this.CURRENT_INTEREST ? this.CURRENT_INTEREST : 0;

      let total = rec_pay_interest + duebal + current_interest


      if (notice === 'Loan_Due_Installment_Notice') {

        this.letterTemplate = `


        प्रती :

        श्री/सौ/कु. ${AC_NAME}

        पत्ता : ${address}

        ।।।।।।।।।।।।।।।।।।।।।।।

        प्रेषक,

        व्यंकटेश नागरी सह.पतसंस्था मर्या.कोल्हापूर

        2925 ए वॉर्ड, वांगीबोळ, कोल्हापूर.

        -----------------------------------------------------------------------------------
        ^SB व्यंकटेश नागरी सह.पतसंस्था मर्या.कोल्हापूर ^EB

        ^SB 2925 ए वॉर्ड, वांगी बोळ, कोल्हापूर. ^EB

        ^SB नोटीस 


        खाते नं. ${AC_NO}

        दिनांक:${NOTICE_DATE}

        ${address}

        ${city_name}        ${AC_NAME}

        यांना कळविणेतयेते की, आपण इकडील पतसंस्थेतून  ${S_NAME}  दिनांक${NOTICE_DATE} इ.रोजीकर्ज रू.${sanction_amt}  घेतले असून त्यापौकी आपले कर्ज खातेवरकर्ज रू. ${balance} येणे निघतेत्यापौकी कर्जाचेथकीत रू.${duebal} व येणेव्याज ${rec_pay_interest} चालू व्याज  ${current_interest} (दिनांक ${Expired_DATE} पर्यंत)एकुणरू.(${total} ) दिनांक ${overdue_date} पासूनथकलेले आहे. तरी सदरनोटीस पोहोचले पासून 7 दिवसाचे आतकर्जाचे हप्त्याचीत्यावरील होणारेव्याज वजादा व्याजासहइकडील पतसंस्थेत भरणेची तजवीज व्हावी.

        कळावे. 

        जामीनदार

        यांना माहीतीसाठी ${gac_name}

        क्लार्क                                                        ऑफिसर                                                                   व्यवस्थापकक

        --------------------------------------------------------------------------------------------------------------------



        टीप. थकबाकीभरली असलेससदर नोटीस रद्द समजावी.^EB
        `;
        this.isShow = true;
        this.showButtons = true;
        this.showCancelButton = true;
        this.showViewButton = false;
        // this.showViewButton = false;
      }

      else if (notice === 'Loan_Installment_Intimation_Notice_Before_Expiry') {


        this.letterTemplate = `


        प्रती :

        श्री/सौ/कु. ${AC_NAME}

        पत्ता : ${address}

        ।।।।।।।।।।।।।।।।।।।।।।।

        प्रेषक,

        व्यंकटेश नागरी सह.पतसंस्था मर्या.कोल्हापूर

        2925 ए वॉर्ड, वांगीबोळ, कोल्हापूर.

        -----------------------------------------------------------------------------------
         व्यंकटेश नागरी सह.पतसंस्था मर्या.कोल्हापूर ^EB

         2925 ए वॉर्ड, वांगी बोळ, कोल्हापूर. ^EB

         नोटीस 


        खाते नं. ${AC_NO}

        दिनांक:${NOTICE_DATE}

        ${address}

        ${city_name}        ${AC_NAME}

        यांना कळविणेतयेते की, आपण इकडील पतसंस्थेतून  ${S_NAME}  दिनांक${NOTICE_DATE} इ.रोजीकर्ज रू.${sanction_amt}  घेतले असून त्यापौकी आपले कर्ज खातेवरकर्ज रू. ${balance} येणे निघतेत्यापौकी कर्जाचेथकीत रू.${duebal} व येणेव्याज ${rec_pay_interest} चालू व्याज  ${current_interest} (दिनांक ${Expired_DATE} पर्यंत)एकुणरू.(${total} ) दिनांक ${overdue_date} पासूनथकलेले आहे. तरी सदरनोटीस पोहोचले पासून 7 दिवसाचे आतकर्जाचे हप्त्याचीत्यावरील होणारेव्याज वजादा व्याजासहइकडील पतसंस्थेत भरणेची तजवीज व्हावी.

        कळावे. 

        जामीनदार

        यांना माहीतीसाठी ${gac_name}

        क्लार्क                                                        ऑफिसर                                                                   व्यवस्थापकक

        --------------------------------------------------------------------------------------------------------------------



       टीप. थकबाकीभरली असलेससदर नोटीस रद्द समजावी.^EB
        `;
        this.isShow = true;
        this.showButtons = true;
        this.showCancelButton = true;
        this.showViewButton = false;
      }
      else {


        this.letterTemplate = `
 

  प्रती :
  
  श्री/सौ/कु. ${AC_NAME}
  
  पत्ता : ${address}
  
  ।।।।।।।।।।।।।।।।।।।।।।।
  
  प्रेषक,
  
  व्यंकटेश नागरी सह.पतसंस्था मर्या.कोल्हापूर
  
  2925 ए वॉर्ड, वांगीबोळ, कोल्हापूर.
  
  -----------------------------------------------------------------------------------
   व्यंकटेश नागरी सह.पतसंस्था मर्या.कोल्हापूर ^EB
  
   2925 ए वॉर्ड, वांगी बोळ, कोल्हापूर. ^EB
  
   नोटीस 
  
  
  खाते नं. ${AC_NO}
  
  दिनांक:${NOTICE_DATE}
  
  ${address}
  
  ${city_name}        ${AC_NAME}
  
  यांना कळविणेतयेते की, आपण इकडील पतसंस्थेतून  ${S_NAME}  दिनांक${NOTICE_DATE} इ.रोजीकर्ज रू.${sanction_amt}  घेतले असून त्यापौकी आपले कर्ज खातेवरकर्ज रू. ${balance} येणे निघतेत्यापौकी कर्जाचेथकीत रू.${duebal} व येणेव्याज ${rec_pay_interest} चालू व्याज  ${current_interest} (दिनांक ${Expired_DATE} पर्यंत)एकुणरू.(${total} ) दिनांक ${overdue_date} पासूनथकलेले आहे. तरी सदरनोटीस पोहोचले पासून 7 दिवसाचे आतकर्जाचे हप्त्याचीत्यावरील होणारेव्याज वजादा व्याजासहइकडील पतसंस्थेत भरणेची तजवीज व्हावी.
  
  कळावे. 
  
  जामीनदार
  
  यांना माहीतीसाठी ${gac_name}
  
  क्लार्क                                                        ऑफिसर                                                                   व्यवस्थापकक
  
  --------------------------------------------------------------------------------------------------------------------
  
  
  
 टीप. थकबाकीभरली असलेससदर नोटीस रद्द समजावी.^EB
  `;



        // this.showPrintButton = false;
        this.isShow = true;
        this.showButtons = true;
        this.showCancelButton = true;
        this.showViewButton = false;
        // this.showViewButton = false;
      }
    } else {
      console.log("Form is invalid");
    }
  }



  cancel() {
    // Reset form and hide textarea
    this.ngForm.reset();
    this.isShow = false;
    this.showButtons = false;
    this.showViewButton = true;
    // this.showPrintButton = true;
  }
}