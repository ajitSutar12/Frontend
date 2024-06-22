
import { Component, OnInit } from "@angular/core";
import { NgSelectConfig } from '@ng-select/ng-select'
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators';
import Swal from "sweetalert2";
import * as moment from "moment";
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { event } from "jquery";
import { CustomerIdService } from "src/app/theme/master/customer/customer-id/customer-id.service";
import { info } from "console";


@Component({
  selector: 'app-loan-information-details',
  templateUrl: './loan-information-details.component.html',
  styleUrls: ['./loan-information-details.component.scss'],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, OwnbranchMasterService]

})
export class LoanInformationDetailsComponent implements OnInit {
  gimg: string;
  gsign: string;
  guaranter: any;
  // objguaranter: string;


  //date
  maxDate: Date;
  minDate: Date;

  ngForm: FormGroup;
  iframe5url: any = '';
  clicked: boolean = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  formSubmitted = false;
  //account
  memFrom
  memTo
  branch
  mem: any

  showLoading: boolean = false;

  startingAccount: any = null;


  //dropdown
  scheme: any[];
  startingacc: any[];
  endingacc: any[];
  branchOption: any[];
  // for dropdown ng module
  ngbranch: any = null;
  schemeCode: any = null;
  obj: any;
  EndingAccount: any = null;

  showRepo: boolean = false;
  todate: any;
  fromdate: moment.Moment;
  glDetails: any;
  banckacno: any;
  bank_acno: any
  address: any;
  imgPath: string;
  signPath: string;
  idmaster: any;
  imgPaths: any;
  signPaths: any;
  borrower: any[] = [];
  bimg: string;
  bsign: string;
  objborrower: string;
  data1: any;
  guaranters: any[] = [];

  lndetails = []

  objguaranter: string = '';
  data2Array: any[] = [];
  AC_NO: any;
  data: any;
  showViewButton: boolean;
  showCancelButton: boolean;
  cust: string;
  formattedString: string;
  formattedData = [];
  borrowerObject: any;
  borrowerString: string;
  guarentData = [];
  guarenterString: string;
  formattedGuarent: string;
  gurantObject: any;


  constructor(
    private fb: FormBuilder,
    private _CustomerIdService: CustomerIdService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public router: Router,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
  ) {
    //  this.endingdate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate());

    for (let i = 0; i < this.guaranters.length; i++) {
      // this.objguaranter += this.formattedGuaranterStrings[i] + '\n\n';
    }
  }

  ngOnInit(): void {
    this.createForm()

    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = filtered;

    });

  }


  objString: string;
  path: string = null
  path1: string = null

  AddAddress(event) {
    this.bank_acno = event.bankacno;
    this.banckacno = event.lable;


    let obj = {
      // "AC_TYPE": event.acType,
      // "AC_NO": this.banckacno,
      "BANKACNO": event.bankacno,

    };
    console.log(this.obj);


    this.http.post(this.url + '/term-loan-master/getLoanInfo', obj).subscribe((data: any) => {
      // this.http.post('http:// 192.168.1.113:7276/term-loan-master/getLoanInfo', obj).subscribe((data: any[]) => {
      this.lndetails = data;


      // if (data && data.length > 0) {
      this.glDetails = {
        'AC_CUSTID': data[0].AC_CUSTID,
        'AC_ADDR': data[0].ADDRESS,
        'mobileNo': data[0].AC_MOBILENO,
      };

      this.objString = `
        Customer_ID = ${this.glDetails.AC_CUSTID},
        Address = ${this.glDetails.AC_ADDR},
        Mobile_No = ${this.glDetails.mobileNo}
      `;

      console.log(this.objString, 'gldetails object....');
      console.log(data);


      // for (let i = 0; i < data.length; i++) {
      //   if (data[i]['PATH'] != null) {
      //     this.path = data[0].PATH;
      //     let path1 = data[1].PATH;

      //     this.imgPath = 'http://103.174.87.104:4771' + '/' + this.path;
      //     this.signPath = 'http://103.174.87.104:4771' + '/' + path1;


      //   }
      //   else {
      //     this.imgPath = 'assets/images/nouser.png';
      //     this.signPath = 'assets/images/nosignature.png';
      //   }
      // }


      if (data.length > 0) {
        const path = data[0].PATH;
        const path1 = data[1].PATH;

        this.imgPath = 'http://103.174.87.104:4771' + '/' + path;
        this.signPath = 'http://103.174.87.104:4771' + '/' + path1;

        // this.imgPath = this.url + '/' + path;
        // this.signPath = this.url + '/' + path1;


      } else {
        this.imgPath = 'assets/images/nouser.png';
        this.signPath = 'assets/images/nosignature.png';
      }

      // }

    });

    this.coBorrow();
    this.Guaranter()
  }

  coBorrow() {
    // CO-BORROWER
    let obj = {
      // "AC_TYPE": this.acType,
      'AC_NO': this.bank_acno,

    };

    this.http.post(this.url + '/term-loan-master/coborroweInfor', obj).subscribe((data1: any[]) => {
      // this.http.post('http://192.168.1.113:7276/term-loan-master/coborroweInfor', obj).subscribe((data1: any) => {

      this.borrower = data1;
      console.log("data1Array_BOrrower", this.borrower);

      this.borrowerString = JSON.stringify(this.borrower);
      this.formattedData = [];
      this.borrowerObject = JSON.parse(this.borrowerString);

      this.borrowerObject.forEach(borrower => {
        let id: string = borrower.CAC_CUSTID;
        let name: string = borrower.AC_NAME;
        let city: string = borrower.CITY_NAME;
        let address: string = borrower.ADDRESS || '';
        let mobileNo: string = borrower.AC_MOBILENO || '';

        this.formattedString =
          `ID: ${id},<br/>,<br/>
      CoBorrower Name: ${name},<br/>,<br/>
      City Name: ${city},<br/>,<br/>
      Address: ${address},<br/>,<br/>
      Mobile No.: ${mobileNo},<br/>,<br/>,<br/>`;

        this.formattedData.push(this.formattedString);
      });



      if (this.borrower.length > 0) {
        for (let i = 0; i < this.borrower.length; i++) {
          // let gpath = this.data2Array[i].PATH;
          if (this.borrower[i] == 0) {
            this.bimg = 'http://103.174.87.104:4771' + '/' + this.borrower[0].PATH;
          } else if (this.borrower[i] == 1) {
            this.bsign = 'http://103.174.87.104:4771' + '/' + this.borrower[1].PATH;
          } else {
            this.bimg = 'assets/images/nouser.png';
            this.bsign = 'assets/images/nosignature.png';
          }
        }
      } else {

      }

    });

  }

  granterAddress
  // guaranters: any[] = [];
  // formattedGuaranterStrings: string[] = [];
  Guaranter() {
    // CO-BORROWER
    let obj = {
      // "AC_TYPE": this.acType,
      'AC_NO': this.bank_acno,

    };

    this.http.post(this.url + '/term-loan-master/guaranterInfor', obj).subscribe((data2: any[]) => {
      // this.http.post('http://192.168.1.113:7276/term-loan-master/guaranterInfor', obj).subscribe((data2: any) => {

      this.data2Array = data2;
      console.log("data2Array_Guaranter", this.data2Array);



      this.guarenterString = JSON.stringify(this.data2Array);
      this.guarentData = [];
      this.gurantObject = JSON.parse(this.guarenterString);

      this.gurantObject.forEach(data2Array => {
        let id: string = data2Array.GAC_CUSTID;
        let name: string = data2Array.GNAME;
        let city: string = data2Array.CITY_NAME;
        let address: string = data2Array.ADDRESS || '';
        let mobileNo: string = data2Array.AC_MOBILENO || '';

        this.formattedGuarent =
          `ID: ${id},<br/>,<br/>
      Guaranter Name: ${name},<br/>,<br/>
      City Name: ${city},<br/>,<br/>
      Address: ${address},<br/>,<br/>
      Mobile No.: ${mobileNo},<br/>,<br/>,<br/>`;

        this.guarentData.push(this.formattedGuarent);
      });

      if (this.data2Array.length > 0) {
        let gimgFound = false;
        let gsignFound = false;
        
        for (let i = 0; i < this.data2Array.length; i++) {
          if (this.data2Array[i].TYPE == 0) {
            if (this.data2Array[i].PATH) {
              this.gimg = 'http://103.174.87.104:4771' + '/' + this.data2Array[i].PATH;
              gimgFound = true;
            }
          } else if (this.data2Array[i].TYPE == 1) {
            if (this.data2Array[i].PATH) {
              this.gsign = 'http://103.174.87.104:4771' + '/' + this.data2Array[i].PATH;
              gsignFound = true;
            }
          }
        }
      
        if (!gimgFound) {
          this.gimg = 'assets/images/nouser.png';
        }
      
        if (!gsignFound) {
          this.gsign = 'assets/images/nosignature.png';
        }
      }
       else { }

    });

  }

  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ['', [Validators.required]],
      Starting_Account: ['', [Validators.required]],
      address: [''],
      img: [''],

    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }


  //For Starting account and Ending Account dropdown
  getschemename: any

  getBranch() {
    this.getIntroducer()
  }

  getschemeCode
  acType
  getIntro(event) {
    this.getschemename = event.name
    this.acType = event.value
    this.getschemeCode = event.id
    this.getIntroducer()

  }


  getIntroducer() {

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.schemeCode, branchCode]
    switch (this.getschemename) {


      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;
      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null
        })
        break;

    }
  }


  src: any;
  View(event) {

    event.preventDefault();
    this.formSubmitted = true;
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.ngForm.valid) {
      this.showRepo = true;
      let obj = this.ngForm.value
      let branch = obj.BRANCH_CODE;
      let startingcode = obj.Starting_Account;
      //  let endingcode =obj.Ending_Account;
      let PrintEveryAccountonNewPage = obj.Print_Every_Account_on_New_Page;
      let PrintClosedAccount = obj.Print_Closed_Account;
      let PrintAddedPenalInterest = obj.Print_Added_Penal_Interest;
      let PrintConciseReporteme = obj.Print_Concise_Report;

      let scheme = obj.Scheme_code;
      let sch = this.lndetails[0].S_NAME;
      let acno = this.lndetails[0].AC_NO;
      let acname = this.lndetails[0].AC_NAME;
      let ac_opdate = this.lndetails[0].AC_OPDATE;
      let ac_sandate = this.lndetails[0].AC_SANCTION_DATE;
      let ac_sanamt = this.lndetails[0].AC_SANCTION_AMOUNT;

      let boroimg = this.bimg;
      let borosign = this.bsign;
      let grimg = this.gimg;
      let grsign = this.gsign;
      let custimg = this.imgPath;
      let custsign = this.signPath;


      let formattedDataString = this.formattedData.map(data => encodeURIComponent(data)).join(', ');
      let guarantorDataString = this.guarentData.map(data => encodeURIComponent(data)).join(', ');
      let custdata = encodeURIComponent(this.objString.replace(/\n/g, '<br/>'));

      this.iframe5url = this.report_url + "examples/LoanInfoDetails.php?&branch='" + this.ngbranch + "&scheme=" + scheme + "&guaranter='" + guarantorDataString + "'&bankName=" + bankName + "'&branchName=" + branchName + "'&SchemeName=" + sch + "'&acno='" + acno + "'&acname=" + acname + "'&ac_opdate=" + ac_opdate + "'&ac_sandate=" + ac_sandate + "'&ac_sanamt=" + ac_sanamt + "'&customer=" + custdata + "'&bankacno='" + this.bank_acno + "'&borrower='" + formattedDataString + "'&boroimg='"+boroimg+ "'&borosign='"+borosign+ "'&grimg='"+grimg+ "'&grsign='"+grsign+
      "'&custimg='"+custimg+ "'&custsign='"+custsign+  "'";

      console.log(this.iframe5url);

      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }
  //load acno according start and end acno
  loadAcno() {
    this.memFrom = this.ngForm.controls['Starting_Account'].value
    this.memTo = this.ngForm.controls['Ending_Account'].value
    this.branch = this.ngForm.controls['BRANCH_CODE'].value
    if (this.ngForm.controls['Starting_Account'].value < this.ngForm.controls['Ending_Account'].value) {
      this.mem = [this.memFrom, this.memTo, this.branch]

      if (this.getschemename == 'LN') {
        this.http.get(this.url + '/term-loan-master/scheme/' + this.mem).subscribe((data) => {
        });
      }
      else if (this.getschemename == 'CC') {
        this.http.get(this.url + '/cash-credit-master/scheme/' + this.mem).subscribe((data) => {
        });
      }
      else if (this.getschemename == 'DS') {
        this.http.get(this.url + '/dispute-loan-master/scheme/' + this.mem).subscribe((data) => {
        });
      }


    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  close() {
    this.resetForm();
    this.clearDivData();
  }

  clearDivData() {
    this.lndetails = [];
    this.borrower = [];
    this.data2Array = [];
    this.glDetails ;

  }

  resetForm() {
    // this.createForm()
    // this.ngForm.controls.BRANCH_CODE.reset();
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.Starting_Account.reset();
    this.ngForm.controls.address.reset();
    this.ngForm.controls.img.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  onLoad() {
    this.showLoading = false;

  }
}

