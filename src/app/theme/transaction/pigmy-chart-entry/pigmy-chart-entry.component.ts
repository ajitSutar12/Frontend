import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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



@Component({
  selector: 'app-pigmy-chart-entry',
  templateUrl: './pigmy-chart-entry.component.html',
  styleUrls: ['./pigmy-chart-entry.component.scss']
})
export class PigmyChartEntryComponent implements OnInit {
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
  obj
  tableArr = []
  //Scheme type variable
  schemeType: string = 'AG'
  formSubmitted: boolean = false


  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  constructor(private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
  ) { }

  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    console.log('result', result)
    console.log('user type', result.RoleDefine[0].Role.NAME)
    if (result.RoleDefine[0].Role.NAME == "Admin") {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }

    this.getSystemParaDate()
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
      CHART_NO: [1, [Validators.maxLength, Validators.minLength, Validators.required]],
      TRAN_AMOUNT: [''],
      AGENT_ACNO: ['', [Validators.required]]
    });
  }

  getBranch() {
    this.getPigmyAgentAcnoList()
  }

  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: moment(data.CURRENT_DATE).format('DD/MM/YYYY')
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
    this.tableArr = []
    this.obj = [this.ngschemeCode, this.ngBranchCode]
    this.schemeAccountNoService.getpigmyChartAcno(this.obj).subscribe(data => {
      this.agentACNO = data;
      console.log('agentACNO', this.agentACNO)
    })
  }


  getTable(event) {
    console.log(event)

  }
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }


  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  resetForm() {
    this.createForm()
  }

}