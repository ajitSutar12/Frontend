import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { ProcessAcmService } from '../process-acm.service';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-transfer-to-glby-closing-ac',
  templateUrl: './transfer-to-glby-closing-ac.component.html',
  styleUrls: ['./transfer-to-glby-closing-ac.component.scss']
})
export class TransferToGLbyClosingACComponent implements OnInit {

  // variable for validation
  formSubmitted = false;
  // Created Form Group
  angForm: FormGroup;
  modalClass: string = 'modalHide';
  // dropdown variables
  scheme
  ngscheme: any = null
  ngBranchCode: any = null
  glaccount: any = null;
  schemeACNo: any[];
  branch_code: any[];
  schemeedit: any;
  ACMasterDropdown: any[];

  totalCharges: any = null
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: any;
  minDate: any;
  bsValue = new Date();
  // variables for button
  showButton: boolean = true;
  updateShow: boolean;
  newbtnShow: boolean;
  setLang: any;
  constructor(
    private fb: FormBuilder,
    private config: NgSelectConfig,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    public ACMasterDropdownService: ACMasterDropdownService,
    public _service: ProcessAcmService,
    private translate: TranslateService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate

      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = user.branchId
    })
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'GS' || scheme.name == 'SH');
      });
      this.scheme = allscheme;
    })

  }
  getACmastercode(event) {
    console.log(event)

    this.ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.ACMasterDropdown = data;
    })
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      GL_AC: [''],
      TOTAL_CHARGES: [''],
      PARTICULAR: [''],
      TRAN_PASSING: [''],
    })
  }
  getBranch() {

    this.getIntroducer()
  }
  schemechange(event) {
    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()
  }
  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.schemeedit, this.ngBranchCode]
    switch (this.getschemename) {

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break
    }
  }

  // checking date 
  counter = 0;
  checkDate(event) {

    this.counter = this.counter + 1;
    if (this.counter > 2 && event.length != 0) {
      let value1
      let value2
      value1 = moment(this.fromdate).format('DD/MM/YYYY');
      // console.log(value1)
      value2 = moment(this.todate).format('DD/MM/YYYY');
      // console.log(value2)
      if (moment(value1).isSame(value2)) {
        Swal.fire(`${this.translate.instant('Swal_Msg.same_date')}`)
        this.angForm.controls['TO_DATE'].reset()
      }
    }
  }


  //=====--------------* Transfer to GL Closing Account *----------========///
  posting() {
    let obj = this.angForm.value;
    obj['user'] = JSON.parse(localStorage.getItem('user'));
    // console.log(obj);
    Swal.fire({
      title: '',
      text: `${this.translate.instant('Swal_Msg.continue')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      this.modalClass = 'modalShow';
      this._service.transferGLClosingAccount(obj).subscribe(data => {
        if (data.type == 'error') {
          Swal.fire(`${this.translate.instant('Swal_Msg.Info')}`, data.msg, 'warning');
        }
        else if (data.msg != '') {
          Swal.fire(`${this.translate.instant('Swal_Msg.Info')}`, data.msg, 'success');
        }
        this.angForm.reset();
        this.modalClass = 'modalHide';
      })
    })
  }
}
