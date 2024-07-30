import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SchemeCodeDropdownService } from '../../../shared/dropdownService/scheme-code-dropdown.service'
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service'
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-pigmy-app-process',
  templateUrl: './pigmy-app-process.component.html',
  styleUrls: ['./pigmy-app-process.component.scss']
})
export class PigmyAppProcessComponent implements OnInit {
  //api 
  url = environment.base_url;
  showprocessbutton: boolean = true
  angForm: FormGroup;
  sysDate
  ngBranchCode: any = null
  ngschemeCode: any = null
  branch_code
  scheme
  branch
  ngAgentCode: any = null
  agentACNO
  branchCode
  userID
  agentBankACNO
  S_GLACNO
  obj
  tableArr: any
  mem
  sysToMachine: boolean = false

  //Scheme type variable
  schemeType: string = 'AG'
  dtOptions: DataTables.Settings = {};
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  //filter variable
  filterData = {};
  maxDate
  dtTrigger: Subject<any> = new Subject<any>();
  formSubmitted: boolean = false
  accountsList
  receivedAccount
  showloader: boolean = false
  showProBar: boolean = false
  completedCount = 0
  constructor(private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    this.userID = result.USER_NAME
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }
    this.getPigmyDate()
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      TRAN_DATE: [''],
      BRANCH: ['', [Validators.required]],
      startDate: ['',],
      // endDate: ['',]
    });
  }

  //get agent account number after branch selection
  getBranch(event) {
    this.branchCode = event.name
    this.getPigmyDate()
  }

  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }


  pigmyMachineRadio(value) {
    value == 2 ? this.sysToMachine = true : this.sysToMachine = false
  }

  getPigmyaccounts() {
    let obj = {
      expiryDate: this.angForm.controls['TRAN_DATE'].value,
      branch: this.ngBranchCode
    }
    this.http.post(this.url + '/pigmy-chart/sendapp/', obj).subscribe(data => {
      this.accountsList = data
      this.showloader = false
      // this.showprocessbutton = false
      Swal.fire('success', 'Data processed successfully.Now you can proceed with app', 'success')
    })
  }

  // Method to insert data into database through NestJS
  submit() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (this.sysToMachine == false) {
      for (let ele of this.accountsList) {
        let obj = {
          "type": "insert",
          "table": "master",
          "column_values": [
            ele
          ]
        }
        // this.showProBar = true
        // this.getCompletedPercentage()
        // ele['completed'] = true
        this.http.post('http://68.183.93.209/pigmy_test/inserData.php', obj).subscribe(res => {
          // console.log('resp', res)
          this.showprocessbutton = true
          Swal.fire('Success', 'Data processed successfully', 'success')
        })
      }
    } else {
      let obj = {
        records: this.receivedAccount,
        "branch_code": this.ngBranchCode,
        "start_date": moment(this.angForm.controls['startDate'].value).format('DD-MM-YYYY'),
        // "end_date": moment(this.angForm.controls['endDate'].value).format('DD-MM-YYYY')
        "end_date": moment(this.angForm.controls['startDate'].value).format('DD-MM-YYYY'),

      }
      this.http.post(this.url + '/pigmy-chart/receivefromapp/', obj).subscribe(data => {
        this.showprocessbutton = true
        Swal.fire('Success', 'Data processed successfully', 'success')
      })
    }
    this.userID = result.USER_NAME
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }
    //To clear form
    this.resetForm();
  }

  resetForm() {
    this.showloader = false
    this.createForm()
    this.ngBranchCode = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    this.userID = result.USER_NAME
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }

    this.ngschemeCode = null
    this.ngAgentCode = null
    this.getPigmyDate()
    this.angForm.patchValue({
      BRANCH: result.branch.id
    })
  }

  getPigmyDate() {
    let obj = {
      branch: this.ngBranchCode
    }
    this.http.post(this.url + '/voucher/EndPigmyDayend/', obj).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data['PIGMY_CURRENT_DATE']
      })
      this.maxDate = moment(data['PIGMY_CURRENT_DATE'], 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }
  receiveData() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    // let obj = {
    //   "u_flag": "getData",
    //   // "bank_code": 1,
    //   "bank_code": result.branch.syspara.BANK_CODE,
    //   "branch_code": this.ngBranchCode,
    //   "start_date": moment(this.angForm.controls['startDate'].value).format('DD-MM-YYYY'),
    //   "end_date": moment(this.angForm.controls['endDate'].value).format('DD-MM-YYYY')
    // }
    let obj = {
      "branch_code": this.ngBranchCode,
      "start_date": moment(this.angForm.controls['startDate'].value).format('DD-MM-YYYY'),
      // "end_date": moment(this.angForm.controls['endDate'].value).format('DD-MM-YYYY')
      "end_date": moment(this.angForm.controls['startDate'].value).format('DD-MM-YYYY'),

    }
    // this.http.post('http://68.183.93.209/pigmy_test/getDataModified.php', obj).subscribe(data => {
    this.http.post(this.url + '/pigmy-chart/receivefromapp/', obj).subscribe(data => {
      // console.log(data, 'receive')
      this.receivedAccount = data
      this.showloader = false
      // this.showprocessbutton = false
      Swal.fire('Success', 'Data processed successfully', 'success')
    })
  }
  Process() {
    this.showloader = true
    this.sysToMachine == false ? this.getPigmyaccounts() : this.receiveData()
  }

  getCompletedPercentage(): number {
    this.completedCount = this.accountsList.filter(r => r.completed).length;
    return (this.completedCount / this.accountsList.length) * 100;
  }
}
