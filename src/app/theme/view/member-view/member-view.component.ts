import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];

  constructor(
    private fb: FormBuilder,
    private _schemeService: SchemeAccountNoService

  ) { }

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
