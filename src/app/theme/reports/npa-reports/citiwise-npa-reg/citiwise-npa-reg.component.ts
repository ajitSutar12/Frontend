import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { first } from "rxjs/operators";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { IOption } from "ng-select";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { ReportFrameComponent } from "../../report-frame/report-frame.component";
import { NgSelectComponent } from "@ng-select/ng-select";
import { newArray } from '@angular/compiler/src/util';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';

@Component({
  selector: 'app-citiwise-npa-reg',
  templateUrl: './citiwise-npa-reg.component.html',
  styleUrls: ['./citiwise-npa-reg.component.scss']
})
export class CitiwiseNpaRegComponent implements OnInit {
  iframe5url: any = '';
  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;
  formSubmitted = false;
  ngCity: any = null

  //fromgroup
  ngForm: FormGroup
  selectcity: any = new Array();
  Ecity: any;
  Scity: any;
  startcity: any;
  endcity: any;
  nCity: any;
  // for dropdown ng module
  fromdate: any = null
  ngbranch: any = null;
  scode: any = null;
  //ngfor
  scheme: any[];
  branchOption: any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  transferSchemeDetails: any;
  tScheme: any;

  //date
  todate: any = null
  bsValue = new Date();

  maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;
  base_url = environment.base_url;
  branchName: any;
  city: any;
  InterestArr: [];
  AC_TYPE: any;
  glDetails: any;
  nasf: any;
  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,
    private cityMaster: cityMasterService,
    private http: HttpClient,

  ) {
    this.todate = moment().format('DD/MM/YYYY');
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
      console.log(this.branchOption, "sjhjd");

      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 100 && result.RoleDefine[0].Role.id==1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }    })

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = filtered;

      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.todate = data.CURRENT_DATE;
      // });

    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data1 => {

      console.log(data1);

      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.todate = data.CURRENT_DATE;
      // });

    })

    this.cityMaster.getcityList().pipe(first()).subscribe((data) => {
      this.city = data;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.todate = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }

  reportDate
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name


    this.AC_TYPE = event.value

    let data1: any = localStorage.getItem('user');
    let result1 = JSON.parse(data1);
    let BRANCH_CODE = result1.branch.id;
    let obj1 = {
      // date: moment(this.fordate).format('DD/MM/YYYY')
      AC_TYPE: this.AC_TYPE,
      BRANCH_CODE: this.ngbranch,
      // branch_code: this.ngbranch,
    }

    console.log(obj1)
    // let queryParams = `?AC_TYPE=${encodeURIComponent(this.AC_TYPE)}&BRANCH_CODE=${encodeURIComponent(BRANCH_CODE)}`;
    // this.http.post<any>(this.url + '/npa-classification-master/dropdown ', obj1).subscribe((data) => {
    // this.http.post('http://192.168.1.113:7276/npa-classification-master/data', obj1).subscribe((data) => {
      this.http.get(this.base_url +'/npa-classification-master/data').subscribe((data: any[]) => {
      this.glDetails = data

      // console.log(this.glDetails)
    })



    console.log(this.tScheme);


  }

  getDate(event) {
    this.reportDate = event.REPORT_DATE
  }

  percentZero
  percentTen
  percentFive
  percentTwenty
  percentageDetail(event) {

    let obj = {
      "REPORT_DATE": this.reportDate
    }

    this.http.post(this.base_url +'/npa-classification-master/percentage', obj).subscribe((data) => {
      this.glDetails = data
      this.percentZero=data[0].NPA_PERCENTAGE,
      this.percentTen=data[1].NPA_PERCENTAGE,
      this.percentFive=data[2].NPA_PERCENTAGE,
      this.percentTwenty=data[3].NPA_PERCENTAGE,

      console.log(this.glDetails)
    })
  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["", [Validators.required]],
      // START_DATE: [''],
      NPA_Date: [''],
      // END_DATE: ['', [Validators.required]],
      Scity: ['', [Validators.required]],
      Ecity: ['', [Validators.required]],
      npa_per: [''],
    });

  }


  // checkInterestFlag(id, acno, flag) {
  //   let isIntUpdate: boolean = false
  //   if (flag.target.checked) {
  //     isIntUpdate = true
  //   }
  //   else {
  //     isIntUpdate = false
  //   }
  //   if (this.InterestArr.length != 0) {
  //     if (this.InterestArr.some(item => item.AC_NO === acno)) {
  //       this.InterestArr.forEach((element) => {
  //         if (element.AC_NO == acno) {
  //           element['IS_POST_INT_AC'] = isIntUpdate
  //         }
  //       })
  //     }
  //     else {
  //       var object = {
  //         AC_NO: acno,
  //         id: id,
  //         IS_POST_INT_AC: isIntUpdate
  //       }
  //       this.InterestArr.push(object)
  //     }
  //   }
  //   else {
  //     var object = {
  //       AC_NO: acno,
  //       id: id,
  //       IS_POST_INT_AC: isIntUpdate
  //     }
  //     this.InterestArr.push(object)
  //   }
  // }
  // //checks all checkbox
  // selectAll() {
  //   const checkedTrue = true
  //   this.InterestArr.forEach(item => item.IS_POST_INT_AC = checkedTrue);
  // }

  // //unchecks all checkbox
  // deselectAll() {
  //   const checkedFalse = false
  //   this.InterestArr.forEach(item => item.IS_POST_INT_AC = checkedFalse);
  // }


  view(event) {


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.ngForm.valid) {

      this.showRepo = true;

      let obj = this.ngForm.value
      let cityCode = obj.AC_CTCODE;

      let Date = moment(obj.date).format('DD/MM/YYYY');
      let tDate = moment(Date, 'DD/MM/YYYY')
      //for start date
      if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
        obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.fromdate).format('DD/MM/YYYY');
        let toDate = moment(date, 'DD/MM/YYYY')
        obj['START_DATE'] = date
      }
      //for end date
      if (this.todate == userData.branch.syspara.CURRENT_DATE) {
        obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.todate).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['END_DATE'] = date
      }

      let scheme = obj.Scheme_code

      let branch = obj.BRANCH_CODE;
      let FROMCT = obj.Scity;
      let TOCT = obj.Ecity;
      let schemeName = this.tScheme;
      let npaDate = obj.NPA_Date.REPORT_DATE;
      let flag=obj.npa_per;
      if(flag == true){
        flag = 1
      }else
      {
        flag=0
      }
      if(branch == 0){
         this.branchName='Consolidate';
      }
         this.iframe5url=this.report_url+ "examples/citywiseNPA.php/?&bankname='"+ bankName +"'&Branch='"+ this.branchName+"'&AC_TYPE='"+ scheme+"'&Npa_Date='"+npaDate+"'&percentZero='"+this.percentZero+"'&percentTen='"+this.percentTen+"'&percentFive='"+this.percentFive+"'&percentTwenty='"+this.percentTwenty+"'&ACNOTYPE='"+schemeName+"'&BRANCH_CODE='"+this.ngbranch+"'&FROM='"+FROMCT+"'&flag="+flag+"&TO='"+TOCT+"'";
      console.log(this.iframe5url); 
       this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url); 


     
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  close() {
    this.resetForm()

  }
  onLoad() {
    this.showLoading = false;

  }
  resetForm() {
    this.ngForm.controls.Scheme_code.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
}