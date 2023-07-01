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
  selector: 'app-pigmy-machine-process',
  templateUrl: './pigmy-machine-process.component.html',
  styleUrls: ['./pigmy-machine-process.component.scss']
})
export class PigmyMachineProcessComponent implements OnInit {
  //api 
  url = environment.base_url;
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
  dtTrigger: Subject<any> = new Subject<any>();
  formSubmitted: boolean = false
  constructor(private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.createForm()
    this.getSystemParaDate()
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Name',
          data: 'name'
        }, {
          title: 'Position',
          data: 'position'
        }, {
          title: 'Office',
          data: 'office'
        }, {
          title: 'Age',
          data: 'age'
        }, {
          title: 'Start Date',
          data: 'date'
        }, {
          title: 'Salary',
          data: 'salary'
        }],
      dom: "Blrtip",
    };

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

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      TRAN_DATE: [''],
      BRANCH: ['', [Validators.required]],
      AGENT_ACTYPE: ['', [Validators.required]],
      CHART_NO: [1, [Validators.maxLength, Validators.minLength]],
      TRAN_AMOUNT: [0],
      AGENT_ACNO: ['', [Validators.required]]
    });
  }

  //get agent account number after branch selection
  getBranch(event) {
    this.branchCode = event.name
    this.getPigmyAgentAcnoList()
  }

  //get syspara table data for date and pigmy auto voucher flag
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.PIGMY_CURRENT_DATE
      })
    })
  }

  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }

  //fetch acno list according scheme and branch code
  getPigmyAgentAcnoList() {
    this.ngAgentCode = null
    this.agentACNO = [];
    if (this.ngschemeCode != null && this.ngBranchCode != null) {
      this.obj = [this.ngschemeCode, this.ngBranchCode]
      this.schemeAccountNoService.getpigmyChartAcno(this.obj).subscribe(data => {
        this.agentACNO = data;
      })
    }
  }

  pigmyMachineRadio(value) {
    value == 2 ? this.sysToMachine = true : this.sysToMachine = false
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    var full = []
    var fullDate = formVal.TRAN_DATE;
    full = fullDate.split(' ');
    var date = full[0].split(/\//);
    var newDate = date[1] + '/' + date[0] + '/' + date[2]
    var k = new Date(newDate);
    var expiryDate = moment(k).format('DD.MM.YYYY');
    let mem = [this.ngschemeCode, this.ngAgentCode, this.ngBranchCode, expiryDate, result.USER_NAME]
    if (this.sysToMachine == true) {
      this.http.get(this.url + '/pigmy-chart/systomachine/' + mem).subscribe((data1: any) => {
        if (data1.length != 0) {
          Swal.fire("Success!", "Pigmy Agent Processed Successfully !", "success");
          var xurl = "http://localhost:5000/send?" + 'data=' + JSON.stringify(data1);
          window.open(xurl)
        }
        else {
          Swal.fire({
            icon: 'info',
            title: 'Pigmy Agent Do Not Have Account',
          })
        }
      })
    } else {
      let nodeurl = 'http://localhost:5000'
      let obj = {
        scheme: this.ngschemeCode,
        agent: this.ngAgentCode,
        branch: this.ngBranchCode,
        expiryDate: expiryDate,
        user: result.USER_NAME
      }
      this.openWindow(obj)     
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
    this.getSystemParaDate()
    this.angForm.patchValue({
      BRANCH: result.branch.id
    })
  }

  openWindow(obj) {
    var xurl = "http://localhost:5000/receive?" + 'data=' + JSON.stringify(obj);
    window.open(xurl)  
  } 
}
