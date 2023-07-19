import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SavingMasterService } from 'src/app/theme/master/customer/saving-master/saving-master.service';
 

// import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-member-transfer-transaction',
  templateUrl: './member-transfer-transaction.component.html',
  styleUrls: ['./member-transfer-transaction.component.scss']
})
export class MemberTransferTransactionComponent implements OnInit {

  angForm : FormGroup;

  //Dropdown variables
  Branch:any
  Schemecode:any
  Membernumber:any
  Newbranch:any
  NewSdivision:any

  

  dtExportButtonOptions: any = {};
  branch_code: any;
  introducerACNo: any;
  obj: any;
  schemeType: string = 'SH'
  // schemeCodeDropdownService: any;
  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private savingMasterService : SavingMasterService,
    ) { }
    selectedTransScheme
    selectedTransBranch
    selectedTransMemno
    selectedNewBranch
    selectedNewSDiv
  ngOnInit(): void {
    this.createForm();

    //for Branch Dropdown
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.getIntroducer()
    })

    // this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    //   var allscheme = data.filter(function (scheme) {
    //     return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'IV' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL')
    //   });
    //   this.Schemecode = allscheme;
    // })

    //Scheme Code Dropdown
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.Schemecode = data
      // this.Schemecode = data[0].value
      this.getIntroducer()
    })
    

    //For Member Number Dropdown
    // this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
    //   this.introducerACNo = data;
    // })
    // //For New Branch Dropdown
    // this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
    //   this.branch_code = data;
    // })
  
    //For New Salary Division Dropdown

    

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

