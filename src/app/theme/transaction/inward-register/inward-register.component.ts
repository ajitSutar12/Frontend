import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-inward-register',
  templateUrl: './inward-register.component.html',
  styleUrls: ['./inward-register.component.scss']
})
export class InwardRegisterComponent implements OnInit {
  angForm : FormGroup;
  maxDate: Date;
  obj: any;

  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private _schemeService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
  ) 
  { 
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  //checkbox variable
  isIsRestrictTransactionEntry: boolean = false;

  //ngfor variables
  branchCode
  member_No
  loan_Scheme

  //ngmodel variables
  selectedBranch1
  selectedshMemNo
  selectedLScheme
  selectedBranch
  nhelp

  ngOnInit(): void {
    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchCode = data;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 1;
    this.obj = [code,branchCode]

    this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {

      this.member_No = data;

    })
    

     // Scheme Code
     this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (loan_Scheme) {
        return (loan_Scheme.name == 'LN' || loan_Scheme.name == 'CC' || loan_Scheme.name == 'DS');
      });
      this.loan_Scheme = filtered;
      //console.log(this.loan_Scheme);

    })
    
  }

  getbranch(event)
    {
      this.selectedBranch = event.label;
      console.log(event);
    }

  createForm(){
    this.angForm = this.fb.group({
      inwardNo: ['',[Validators.required]],
      branch: ['',[Validators.required]],
      date: ['',[Validators.required]],
      memno: ['',[Validators.required]],
      dbranch: ['',[Validators.required]],
      lscheme: ['',[Validators.required]],
      nhNo: ['1',[Validators.required]],
      otherif: ['',[Validators.required]],
      NARRATION: [''],
      checkActive: [false]
    });
  }

}
