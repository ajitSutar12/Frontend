import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-branch-and-salary-dc',
  templateUrl: './branch-and-salary-dc.component.html',
  styleUrls: ['./branch-and-salary-dc.component.scss']
})
export class BranchAndSalaryDCComponent implements OnInit {
  angForm : FormGroup;

  //Dropdown variables
  Branch:any
  Schemecode:any
  Membernumber:any
  Newbranch:any
  NewSdivision:any

  branch_code: any;
  introducerACNo: any;
  obj: any;
  schemeType: string = 'SH'

  selectedTransScheme
  selectedTransBranch
  selectedTransMemno
  selectedNewBranch
  selectedNewSDiv

  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
  ) { }

  ngOnInit(): void {
    this.createForm();

    //for Branch Dropdown
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.getIntroducer()
    })

 
    //Scheme Code Dropdown
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.Schemecode = data
      // this.Schemecode = data[0].value
      this.getIntroducer()
    })
    

  }

  getIntroducer() {
    // debugger
    this.obj = [this.selectedTransScheme, this.selectedTransBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      // console.log(data);
      
      this.introducerACNo = data;
    })
  }

  createForm(){
    this.angForm = this.fb.group({
      branch: ['',[Validators.required]],
      scode: ['',[Validators.required]],
      memno: ['',[Validators.required]],
      salarydiv: ['',[Validators.required]],
      newbranch: ['',[Validators.required]],
      newsd: ['',[Validators.required]],
      fdate: ['',[Validators.required]]
    });
  }

}
