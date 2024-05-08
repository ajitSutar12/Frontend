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
  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private sanitizer: DomSanitizer,

  ) {
    this.fromdate = moment().format('DD/MM/YYYY');
    this.FROM_DATE = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  //ngfor variables
  sh_Scheme
  introducerACNo

  //ngmodel variables
  selectedshScheme
  selectedmemNo

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (sh_Scheme) {
        return (sh_Scheme.name == 'SH');
      });

      this.sh_Scheme = filtered;
      this.getIntroducer()

    })
  }


  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }
  bankacno:any
  ac_name:any
  getIntro1(event) {
    this.bankacno = event.bankacno
    this.ac_name=event.name
    // this.getIntroducer()
  }

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


  createForm() {
    this.angForm = this.fb.group({
      scheme: ['', [Validators.required]],
      memNo: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.pattern, Validators.required]],
      PRINT_CUSTID: [""],
    });
  
  }
  view(event) {
    // debugger
    event.preventDefault();
    this.formSubmitted = true;
    this.isShow = true
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchId=userData.branch.id
    let branchName = userData.branch.NAME;

    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;
      //  let startDate = this.fromdate;  

      let startDate: any;
      if (this.fromdate == obj.FROM_DATE) {
        startDate = moment(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        startDate = moment(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let scheme = this.selectedshScheme;
      let branch =userData.branch.NAME;
      let introducerACNo = obj.memNo;
      let bankacno=this.bankacno
      let pritns = obj.PRINT_CUSTID;
      let ac_name=this.ac_name;
      if(pritns==null || pritns==false)
      {
        pritns =0;
      }
     else
      {
        pritns =1;
      }

      this.iframe5url = this.report_url + "examples/memberliability.php?Date='" + startDate + "'&scheme='" + scheme + "'&bankName=" + bankName + " &customerID=" + introducerACNo + " &pritns=" + pritns +  " &branchName=" + branch + " &bankacno='" + bankacno + "'&ac_name=" + ac_name + "&branchCode=" +branchId + " ";
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

     
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }
  close() {
    this.resetForm()
    this.isShow = false
  }

  // Reset Function
  resetForm() {
    // this.createForm()
    // this.angForm.controls.scheme.reset();
    this.angForm.controls.memNo.reset();
    this.angForm.controls.FROM_DATE.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  onLoad() {
    this.showLoading = false;
  }
}
