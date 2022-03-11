import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { NgSelectConfig } from '@ng-select/ng-select';

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
  ngBranchCode:any=null

  // date variables
  maxDate: Date;
  minDate: Date;
  ngcalculationdate:any=null



  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
  ) { 
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();



    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value

    })
  }

  createForm(){

    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      CAL_DATE: ['', [Validators.required]],

    })
  }

}
