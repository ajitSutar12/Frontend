import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-voucher-view',
  templateUrl: './voucher-view.component.html',
  styleUrls: ['./voucher-view.component.scss']
})
export class VoucherViewComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;
  

  // Formgroup variable
  angForm: FormGroup;

  dtExportButtonOptions : any = {};

  // dropdown variables 
  ngBranchCode:any=null
  branch_code: any[];

  ngdate:any=null

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private ownbranchMasterService: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.getSystemParaDate()

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
   
    
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      TRAN_DATE:['']
      
    })
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE,
      })
      
    })
  }

}
