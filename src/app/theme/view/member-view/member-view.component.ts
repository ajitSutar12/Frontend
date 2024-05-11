import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];
  setLang:any;
  constructor(
    private fb: FormBuilder,
    private _schemeService: SchemeAccountNoService,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,

  ) {this.systemParameter.getFormData(1).subscribe(data => {
    
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
  }) }

  //ngfor variables
  introducerACNo


  //ngmodel variables
  selectedMemno

  ngOnInit(): void {
   this.createForm();

   let data: any = localStorage.getItem('user');
   let result = JSON.parse(data);
   let branchCode = result.branch.id;
   let code = 1;
   this.obj = [code,branchCode]

   this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
     console.log(data);
     
     this.introducerACNo = data;

   })
  }


  createForm(){
    this.angForm = this.fb.group({
      memNo: ['',[Validators.required]],
      empNo: ['',[Validators.required]],
      date: ['',[Validators.required]],
      tlAmt: ['',[Validators.required]],
      tdAmt: ['',[Validators.required]],
      tioLoan: ['',[Validators.required]],
      tioDep: ['',[Validators.required]],
    
    });
  }

}
