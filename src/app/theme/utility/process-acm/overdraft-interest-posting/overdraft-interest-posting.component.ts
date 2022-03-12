import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import {ACMasterDropdownService} from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-overdraft-interest-posting',
  templateUrl: './overdraft-interest-posting.component.html',
  styleUrls: ['./overdraft-interest-posting.component.scss']
})
export class OverdraftInterestPostingComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variaqbles
  branch_code: any;
  ngBranchCode:any=null
  schemeedit:any=null
  ngfromac:any=null
  ngtoac:any=null
  ngGlAC:any=null
  scheme: any[];
  fromAC:any[];
  ToAC:any[];
  GLACNooption: any[];
  schemeACNo: any[];

  // date variables
  maxDate: Date;
  minDate: Date;

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ACMasterDropdownService: ACMasterDropdownService,
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
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      this.scheme = data;
    })

    this.ACMasterDropdownService.getACMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.GLACNooption = data;
      });
  }

  createForm(){

    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC:['',[Validators.required]],
      CAL_DATE:['',[Validators.required]],
      GL_ACNO:['',[Validators.required]],
      PARTICULAR:[''],
      TOTAL_CHARGE:[''],
      AUTO_TRAN:[''],

    })
  }

  getBranch() {
    this.schemeedit = null
    this.ngfromac = null
    this.ngtoac = null
    
  }
  schemechange(event) {

    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()


  }
  obj: any
  getschemename: any


  //get account no according scheme for introducer

  getIntroducer() {
    this.obj = [this.schemeedit, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
        case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
        case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;

      case 'CC':

        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data

        })
        break;
        case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
        case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
        case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
        case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;

      case 'LN':

        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data


        })
        break;
        case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
        case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
        case 'GL':
          this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(first()).subscribe(data => {
            this.fromAC = data;
          this.ToAC = data
          })
          break;
    }
  }

  //decimal content show purpose wrote below function
  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
  }

  select(){
    if (this.angForm.controls['FROM_AC'].value < this.angForm.controls['TO_AC'].value) {
      Swal.fire("To Account Number Must Be Greater Than From Account Number");
     
     
    }
  }
  

}
