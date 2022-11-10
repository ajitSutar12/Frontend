import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';
@Component({
  selector: 'app-dead-stock-depreciation',
  templateUrl: './dead-stock-depreciation.component.html',
  styleUrls: ['./dead-stock-depreciation.component.scss']
})
export class DeadStockDepreciationComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variaqbles
  branch_code: any;
  ngBranchCode: any = null

  // date variables
  maxDate: any;
  minDate: any;
  ngcalculationdate: any = null



  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      CAL_DATE: ['', [Validators.required]],
    })
  }
  process() {
    let obj = {
      date: this.angForm.controls['CAL_DATE'].value,
      branch: this.ngBranchCode
    }

  }

}
