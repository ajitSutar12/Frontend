import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createnotice',
  templateUrl: './createnotice.component.html',
  styleUrls: ['./createnotice.component.scss']
})
export class CreatenoticeComponent implements OnInit {

 CODE: any;
  name:any;
  selectedText: any;
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  code1=[{id:1},{id:2}, {id:3},{id:4}, {id:5},{id:6}]
  selectedAccount: any;
  ngForm: any;
  shemeDetails: any[];
  noticeType: any;
  showButtons: boolean = false;
  showCancelButton: boolean = true;
  showViewButton = true;
  isShow: boolean = false;
  showQuillEditor: boolean = false;
  noticeType1
  Options
  clicked:boolean=false;
  constructor(private http: HttpClient,private ngZone: NgZone,private systemParameter: SystemMasterParametersService,private fb: FormBuilder) { 
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    // this.fetchData()
    this.createForm()
    this.AddSchemeData();
  
    this.fetchAccount();
    this.drop();

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });
  }
  createForm() {
    this.ngForm = this.fb.group({
      Scheme_code: ['', [Validators.required]],
      AccNo: ['', [Validators.required]],
      notice: [''],
      
      NOTICE_DATE: ['', [Validators.required]],
      Expired_DATE: [''],
      TOTAL_DAYS: [''],
      TOTAL_INSTALL: [''],
      IS_GURANTOR: [''],
      GURANTOR: [''],
    });

  }
  actype
  //get scheme data
  AddSchemeData() {
    this.http.get('http://192.168.1.113:7276/ledger-view/cschem').subscribe((data: any[]) => {
      // this.http.get(this.base_url +'/ledger-view/cschem').subscribe((data: any[]) => {
      this.shemeDetails = data.map(item => ({ ...item, isSelected: false }))
      if (this.shemeDetails.length > 0) {
        this.actype = this.shemeDetails[0].id;
      }
      console.log(this.shemeDetails);
    });
    this.fetchAccount();
    this.drop();
  }

  //get notice type
  drop() {
    this.http.post('http://192.168.1.121:3002/notice/getnoticedata', {}).subscribe(
      (data: any) => {
        console.log(data)
        this.noticeType = data
        this.CODE=data.CODE
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
   
  }
  subject: string = '';
  htmlText: string = '';
  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video']                         // link and image, video
      ],
    }
  };

  onSelectionChanged(event: any) {
    console.log('selection changed', event);
  }
  onContentChanged(event: any) {
    console.log('content changed', event);
  }
  getNotice(event){
    this.CODE=event.CODE
    this.fetchData()
  }
  code
  fetchData(): void {
    let dataSend =
{
      'CODE':  this.CODE,
    };
    // console.log(dataSend.CODE)
    this.http.post('http://192.168.1.121:3002/notice/noticedata', dataSend).subscribe(
      (data: any) => {
        console.log(data)
        this.ngZone.run(() => {
          this.htmlText = data.letter;
          this.code = data.CODE;
        });
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  submit() {
    let emailData = {
      CODE: 13,
      NAME:this.name,
      textareaContent : this.htmlText
    };
  
    this.http.post('http://192.168.1.121:3002/notice/insert', emailData)
      .subscribe(response => {
        console.log('data sent successfully');
        // Handle success
      }, error => {
        console.error('Error sending data');
        // Handle error
      });
  }
  printTextArea() {

    // let printWindow = window.open();
    // printWindow.document.write('<html><head><title>Print</title></head><body>');
    // printWindow.document.write('<pre>' + this.htmlText + '</pre>');
    // printWindow.document.write('</body></html>');
    // printWindow.print();
    // printWindow.close();
    // this.showViewButton = false;

    let printWindow = window.open();
    printWindow!.document.write('<html><head><title>Print</title></head><body>');
    printWindow!.document.write('<div style="white-space: pre-wrap;">' + this.htmlText + '</div>');
    printWindow!.document.write('</body></html>');
    printWindow!.document.close();
    printWindow!.print();
    printWindow!.close();
  }
  fetchAccount(): void {

    let userData = JSON.parse(localStorage.getItem('user'));
    let BRANCH_CODE = userData.branch.id;

    // let myObj = {
    //   'BRANCH_CODE': BRANCH_CODE
    // }
    // //get all details of Account 
    // this.http.post('http://192.168.1.121:3002/notice/getalldetailsofloanacc', myObj).subscribe(
    //   (data) => {
    //     this.selectedAccount = data;
    //   },
    //   error => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
    let myObj = {
      'BRANCH_CODE': BRANCH_CODE
    }
    this.http.post('http://192.168.1.121:3002/notice/getalldetailsofloanacc', myObj).subscribe(
      (response) => {
        // this.getQuill(response);
        this.selectedAccount = response;

      },
      (error) => {
        console.error('Error fetching account information:', error);
      }
    );

    // this.detail();
  }
  getAcc(event: any) {
    let userData = JSON.parse(localStorage.getItem('user'));
    let BRANCH_CODE = userData.branch.id;

    let myObj = {
      'BRANCH_CODE': BRANCH_CODE
    }
    //get all details of Account 
    // this.http.post('http://192.168.1.121:3002/notice/getalldetailsofloanacc', myObj).subscribe(
    //   (response) => {
    //     // this.getQuill(response);
    //     this.selectedAccount = response;

    //   },
    //   (error) => {
    //     console.error('Error fetching account information:', error);
    //   }
    // );
  }
  AC_NAME
 
  getQuill(event) {
    if (this.htmlText || event.AC_NAME || event.AC_NO || event.AC_EXPIRE_DATE || event.S_NAME || event.BANKACNO || event.BALANCE || event.CITY_NAME || event.DUEBAL || event.REC_PAY_INTEREST || event.CURRENT_INTEREST || event.OVERDUEDATE)  {
      console.log(this.htmlText);
      this.htmlText = this.htmlText.replace('AC_NAME', event.AC_NAME);
      this.htmlText = this.htmlText.replace('AC_NO', event.AC_NO);
      this.htmlText = this.htmlText.replace('AC_OPDATE', event.AC_OPDATE);
      this.htmlText = this.htmlText.replace('AC_EXPIRE_DATE', event.AC_EXPIRE_DATE);
      this.htmlText = this.htmlText.replace('AC_SANCTION_AMOUNT', event.AC_SANCTION_AMOUNT);
      this.htmlText = this.htmlText.replace('BANKACNO', event.BANKACNO);
      this.htmlText = this.htmlText.replace('S_NAME', event.S_NAME);
      this.htmlText = this.htmlText.replace('BALANCE', event.BALANCE);
      this.htmlText = this.htmlText.replace('CITY_NAME', event.CITY_NAME);
      this.htmlText = this.htmlText.replace('DUEBAL', event.DUEBAL);
      this.htmlText = this.htmlText.replace('REC_PAY_INTEREST', event.REC_PAY_INTEREST);
      this.htmlText = this.htmlText.replace('CURRENT_INTEREST', event.CURRENT_INTEREST);
      this.htmlText = this.htmlText.replace('OVERDUEDATE', event.OVERDUEDATE);
    }
  }
view(event){
  event.preventDefault();
  if (this.ngForm.valid) {
  this.showQuillEditor = true;
  this.showButtons = true;
  this.showViewButton = false;
 
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
}
cancel(){
  this.ngForm.reset();
  this.isShow = false;
  this.showQuillEditor = false;
  this.showButtons = false;
  this.showViewButton = true;
}

}
