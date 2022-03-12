import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-npaprocess',
  templateUrl: './npaprocess.component.html',
  styleUrls: ['./npaprocess.component.scss']
})
export class NPAProcessComponent implements OnInit {
  // variable for validation
  formSubmitted = false;
  // Created Form Group
  angForm: FormGroup;

  // dropdown variables
  scheme
  ngscheme: any = null
  ngBranchCode: any = null
  glaccount: any = null;
  schemeACNo: any[];
  branch_code: any[];
  schemeedit: any;
  ACMasterDropdown: any[];
  fromAC
  ngfromac:any =null
  ngtoac: any = null
  ToAC
  NPAdate
  // variables for button
  showButton: boolean =true;
  updateShow: boolean;
  newbtnShow: boolean;

    // Date variables
    todate: any = null;
    fromdate:any=null
    maxDate: Date;
    minDate: Date;
  constructor(
    private fb: FormBuilder,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
   }

  ngOnInit(): void {
    this.createForm()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        // return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = allscheme;
    })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      NPA_DATE: ['', [Validators.required]],
      FROM_AC: [''],
      TO_AC:[''],
      RECOVER_AMT:[''],
    });
  }
  schemechange(event) {
    this.getschemename = event.name
    this.ngscheme = event.value
    this.getIntroducer()
  }
  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
   
      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break
    }
  }
  getACmastercode(){}
}
