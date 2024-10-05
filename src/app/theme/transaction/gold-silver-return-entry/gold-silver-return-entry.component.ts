import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import *  as moment from 'moment';
import Swal from 'sweetalert2';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-gold-silver-return-entry',
  templateUrl: './gold-silver-return-entry.component.html',
  styleUrls: ['./gold-silver-return-entry.component.scss']
})
export class GoldSilverReturnEntryComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @Output() reloadTablePassing = new EventEmitter<string>();

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  // dropdown variables
  ngscheme: any = null
  ngBranchCode: any = null
  branch_code: any;
  accountedit: any = null;
  getschemename: any;
  scheme: any[];
  schemeACNo: any[];

  // Date variables
  ngreturndate: any = null;
  maxDate: any;
  minDate: Date;
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  DatatableHideShow: boolean;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  logDate
  setLang:any;
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,  private translate:TranslateService

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
      this.ngreturndate = data.CURRENT_DATE
      this.logDate = data.CURRENT_DATE
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
    if (this.childMessage != undefined) {
      this.editClickHandler(this.childMessage);
    }
  }


  ngOnInit(): void {
    this.createForm();
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' && scheme.IS_DEPO_LOAN == '0' && scheme.IS_GOLD_LOAN == '1');
      });
      this.scheme = allscheme;
    })
    let data: any = localStorage.getItem('user');
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      RETURN_DATE: ['', [Validators.required]],
      ARTICLE_NAME: [''],
      ARTICLE_DETAILS: [''],
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['BRANCH'].enable()
    //   this.ngBranchCode = result.branch.id
    // }
    // else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    // }
  }

  getBranch(event) {
    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountList()

  }

  //get account no according scheme
  getAccountList() {
    if (this.ngscheme != null && this.ngBranchCode != null) {
      this.accountedit = null
      this.tableData = []
      let object = {
        AC_TYPE: this.ngscheme,
        BRANCH_CODE: this.ngBranchCode,
        TYPE: 1,
        RETURN_DATE: null
      }
      this.http.post(this.url + '/gold-silver-return-entry/getAccountList', object).subscribe((data: any) => {
        this.schemeACNo = data
      })
    }
  }
  tableData = []
  getGoldSilverData() {
    let object = {
      AC_NO: this.accountedit,
      AC_TYPE: this.ngscheme,
      BRANCH_CODE: this.ngBranchCode
    }
    this.http.post(this.url + '/gold-silver-return-entry/GoldSilverData', object).subscribe((data: any) => {
      this.tableData = data
      this.angForm.patchValue({
        ARTICLE_NAME: data[0].ARTICLE_NAME,
        ARTICLE_DETAILS: data[0].REMARK
      })
    })
  }
  //update checkbox status in array
  checkReturnFlag(index, flag) {
    let isIntUpdate: boolean = false
    if (flag.target.checked) {
      isIntUpdate = true
    }
    else {
      isIntUpdate = false
    }
    if (this.tableData.length != 0) {
      this.tableData[index]['IS_RETURN'] = isIntUpdate
    }
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let object = {
        RETURN_DATE: this.ngreturndate,
        table: this.tableData,
        USER_CODE: result.id
      }
      this.http.post(this.url + '/gold-silver-return-entry/insert', object).subscribe((data: any) => {
        // Swal.fire("Success!", "Data Updated Successfully !", "success");
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.P7')}`, "success");
        // this.createForm()
        this.tableData = []
        this.ngscheme = null
        this.accountedit = null
        this.angForm.patchValue({
          ARTICLE_NAME: [''],
          ARTICLE_DETAILS: [''],
        })
      })
    }
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for edit button clicked
  editClickHandler(info) {
    this.angForm.disable()
    this.ngscheme = info.AC_TYPE
    this.ngBranchCode = info.BRANCH_CODE
    this.getAccountList()
    this.accountedit = info.AC_NO
    if (info.TRAN_STATUS == '0') {
      this.approveShow = true
      this.rejectShow = true
      this.showButton = false
      this.unapproveShow = false
      let obj = {
        AC_TYPE: this.ngscheme,
        BRANCH_CODE: this.ngBranchCode,
        TYPE: 0,
        RETURN_DATE: info.RETURN_DATE
      }
      this.http.post(this.url + '/gold-silver-return-entry/getAccountList', obj).subscribe((data: any) => {
        this.schemeACNo = data
      })

      let object = {
        AC_NO: this.accountedit,
        AC_TYPE: this.ngscheme,
        BRANCH_CODE: this.ngBranchCode
      }
      this.http.post(this.url + '/gold-silver-return-entry/getPassGoldSilverData', object).subscribe((data: any) => {
        this.tableData = data
        this.angForm.patchValue({
          ARTICLE_NAME: data[0].ARTICLE_NAME,
          ARTICLE_DETAILS: data[0].REMARK
        })
      })
    } else if (info.TRAN_STATUS != '0') {
      this.unapproveShow = true
      this.approveShow = false
      this.rejectShow = false
      this.showButton = false
      let obj = {
        AC_TYPE: this.ngscheme,
        BRANCH_CODE: this.ngBranchCode,
        TYPE: 0,
        RETURN_DATE: info.RETURN_DATE
      }
      this.http.post(this.url + '/gold-silver-return-entry/getAccountList', obj).subscribe((data: any) => {
        this.schemeACNo = data
      })

      let object = {
        AC_NO: this.accountedit,
        AC_TYPE: this.ngscheme,
        BRANCH_CODE: this.ngBranchCode
      }
      this.http.post(this.url + '/gold-silver-return-entry/UnPassGoldSilverData', object).subscribe((data: any) => {
        this.tableData = data
        this.angForm.patchValue({
          ARTICLE_NAME: data[0].ARTICLE_NAME,
          ARTICLE_DETAILS: data[0].REMARK
        })
      })
    }

  }

  //function for delete button clicked
  delClickHandler(info: any): void {
  }

  reject() {
    // if (this.angForm.valid) {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let object = {
        RETURN_DATE: this.ngreturndate,
        table: this.tableData,
        USER_CODE: result.id
      }
      this.http.post(this.url + '/gold-silver-return-entry/reject', object).subscribe((data: any) => {
        this.angForm.enable()
        // Swal.fire("Success!", "Data Rejected Successfully !", "success");
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.P8')}`, "success");
        // this.createForm()
        this.tableData = []
        this.ngscheme = null
        this.accountedit = null
        this.angForm.patchValue({
          ARTICLE_NAME: [''],
          ARTICLE_DETAILS: [''],
        })
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
      })
    // }
  }
  Approve() {
    // if (this.angForm.valid) {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let object = {
        RETURN_DATE: this.ngreturndate,
        table: this.tableData,
        USER_CODE: result.id
      }
      this.http.post(this.url + '/gold-silver-return-entry/approve', object).subscribe((data: any) => {
        // this.angForm.enable()
        // Swal.fire("Success!", "Data Approved Successfully !", "success");
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.P9')}`, "success");
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
        this.angForm.enable()
        // this.createForm()
        this.tableData = []
        this.ngscheme = null
        this.accountedit = null
        this.angForm.patchValue({
          ARTICLE_NAME: [''],
          ARTICLE_DETAILS: [''],
        })
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
        this.angForm.enable()
        
      })
    // }
  }
  unApprove() {
    // if (this.angForm.valid) {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let object = {
        RETURN_DATE: this.ngreturndate,
        table: this.tableData,
        USER_CODE: result.id,
        LOG_DATE: this.logDate
      }
      this.http.post(this.url + '/gold-silver-return-entry/unapprove', object).subscribe((data: any) => {
        
        // Swal.fire("Success!", "Data Unapproved Successfully !", "success");
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.P10')}`, "success");
        // this.createForm()
        this.tableData = []
        this.ngscheme = null
        this.accountedit = null
        this.angForm.patchValue({
          ARTICLE_NAME: [''],
          ARTICLE_DETAILS: [''],
        })
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
        this.angForm.enable()
      })
    // }
  }
  closeModal() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }
}

