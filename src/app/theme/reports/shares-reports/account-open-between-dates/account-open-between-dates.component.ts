import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { MultiVoucherService } from 'src/app/theme/transaction/multi-voucher/multi-voucher.service';


@Component({
  selector: 'app-account-open-between-dates',
  templateUrl: './account-open-between-dates.component.html',
  styleUrls: ['./account-open-between-dates.component.scss']
})
export class AccountOpenBetweenDatesComponent implements OnInit {

  //fromgroup
  ngForm: FormGroup

  // for dropdown ng module
  fromdate: any = null
  ngbranch: any = null;
  scode: any = null;
  //ngfor
  scheme: any[];
  master: any;

  branchOption: any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  transferSchemeDetails: any;
  tScheme
  isTdsForm: boolean = false;
  ngCity: any = null
  city: any[];
   allSchemeCode: any//from schme master
   allScheme = new Array()//from schme master


  //date
  dates: any = null
  date: any = null
  bsValue = new Date();

  maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;
  branchName: any;
  FormGroup: any;
  formSubmitted = false;
  iframe5url: any = '';


  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    public SchemeTypeService: SchemeTypeService,
     private sanitizer: DomSanitizer,
     private _service: MultiVoucherService,
    ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })



    this._service.getSchemeCodeList().subscribe(data => {
      
      var schemeList = data;
      this.master = schemeList;
      //debugger
      this.allSchemeCode = [...new Map(schemeList.map(item => [item['S_ACNOTYPE'], item])).values()]
      this.allSchemeCode = this.allSchemeCode.sort(this.dynamicSort("S_ACNOTYPE"));
      console.log(this.allSchemeCode);
    })
    
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  selectedCode: string;
    IntersetHeadDate: any;
    selectedSchemeCode() {
  
      this.allScheme = [];
      this.master.forEach(element => {
        if (element.S_ACNOTYPE == this.selectedCode) {
          this.allScheme.push(element)
        }
      });
      console.log(this.allScheme);
  }

  tempschmetype;
  selectedScheme;
  resetscheme() {
    // console.log(this.tempschmetype)
    if (this.tempschmetype != this.selectedCode) {
      this.selectedScheme = null
      // this.customer = null
      // this.introducerACNo = []
    }
  }
  


  

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name

  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      SUBMISSION: ['SUBMISSION'],
      scheme: ['', [Validators.required]],
      scheme_type: ['', [Validators.required]],

    });

  }

  view(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;
      let Date = moment(obj.START_DATE).format('DD/MM/YYYY');
      let Date1 = moment(obj.END_DATE).format('DD/MM/YYYY');

      // let branch = obj.BRANCH_CODE

      let Rdio = obj.SUBMISSION
      let scheme = this.tScheme


      this.iframe5url = this.report_url + "examples/ACCOUNTOPENBETWEENDATES.php?startDate='" + Date + "'&Rdio='" + Rdio+"'&branchname='" + branchName  + "'&branch='" + this.ngbranch + "&bankName=" + bankName + "" + "'&enddate='" + Date1 + "'&scheme='" +  this.selectedCode + "'&Scode=" + this.selectedScheme;
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);



    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;

    } else {
      this.isTdsForm = false;

    }
  }

  close() {
    this.resetForm()
    this.showRepo = false;
    this.clicked = false;
  }




  onLoad() {
    this.showLoading = false;

  }
  resetForm() {
    this.ngForm.controls.scheme.reset();
    this.ngForm.controls.scheme_type.reset();

    this.ngForm.controls.START_DATE.reset();
    this.ngForm.controls.END_DATE.reset();

  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
}