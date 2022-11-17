import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pigmyagentchange',
  templateUrl: './pigmyagentchange.component.html',
  styleUrls: ['./pigmyagentchange.component.scss']
})
export class PigmyagentchangeComponent implements OnInit {

  url = environment.base_url;
  angForm: FormGroup;

  code
  code1
  AC_TYPE: boolean = false
  AC_TYPE1: boolean = false
  scheme
  // SchemeCodeDropdownDropdown: any[];
  PGSchemeCode: any[];
  SchemeCodeDropdownDropdown: any[];
  schemeType: string = 'AG'
  pgScheme: string = 'PG'

  schemeCode
  introducerACNo
  obj: any;


  ngPigmy: any = null
  OwnbranchMasterDropdown: any[];



  selectedBranch
  selectedBranch1
  branchOption: any;
  ngIntroducer: any = null
  ngIntroducer1: any = null
  ngIntroducer2: any = null
  acno: any = null
  ngBranch: any = null
  RDATE1: any = null;
  fromdate: any = null
  // accountOpenDate: any = null
  maxDate: any;
  minDate: any;
  bsValue = new Date();
  todate: any = null;




  constructor(private fb: FormBuilder,  private systemParameter: SystemMasterParametersService,
    public schemeCodeDropdownService: SchemeCodeDropdownService, private schemeAccountNoService: SchemeAccountNoService, private _ownbranchmasterservice: OwnbranchMasterService,) {this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate._d
    }) }

  ngOnInit(): void {
    this.createForm();


    // this.systemParameter.getFormData(1).subscribe(data => {
    //   this.angForm.patchValue({
    //     RDATE1: data.CURRENT_DATE
    //   })
    // })

    let user = JSON.parse(localStorage.getItem('user'));
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      this.selectedBranch = user.branchId;
      this.selectedBranch1 = user.branchId;

    })


    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      this.SchemeCodeDropdownDropdown = data;
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {

        return (scheme.id == 'AG');
      });
      this.scheme = filtered;

      this.code = this.scheme[0].value
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.pgScheme).pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {

        return (scheme.id == 'PG');
      });
      this.PGSchemeCode = filtered;
    })

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
      this.fromdate = this.fromdate._d
    })




  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      branch_code: ['', [Validators.required]],
      AC_INTRACNO: ['', [Validators.required]],
      AC_TYPE1: ['', [Validators.required]],
      RDATE: ['', [Validators.required]],
      PIGMY_ACTYPE: ['', [Validators.required]],
      branch_code1: ['', [Validators.required]],
      RDATE1: ['', [Validators.required]],
      AC_INTRACNO1: ['', [Validators.required]],
      AC_INTROBRANCH: ['', [Validators.required]],
      AC_INTRACNO2: ['', [Validators.required]],

    })
    this.angForm.controls['AC_TYPE1'].disable()
    this.angForm.controls['AC_INTRACNO2'].disable()
    this.angForm.controls['RDATE'].disable()
    

  }
  getschemename: any


  getScheme(value) {
    this.schemeCode = value.name
  }
  getBranch() {
    this.getIntroducer()
  }
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }

  getIntroducer() {
    if (this.ngPigmy != null && this.selectedBranch != null) {
      this.obj = [this.ngPigmy, this.selectedBranch]
      this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
        this.introducerACNo = data;

        console.log(this.introducerACNo, 'introducer')
      })
    }
    else {
      this.ngIntroducer1 = null
      this.introducerACNo = null
    }
  }
 






}
