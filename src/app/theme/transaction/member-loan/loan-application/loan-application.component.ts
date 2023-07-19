import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent implements OnInit {

  angForm : FormGroup;
  obj: any[];
  schemeType: string= 'SH'
  dschemeType: string= 'LN'
  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService
  ) { }

  //ngfor variables
  branch_code
  Schemecode
  introducerACNo
  demand_Scheme
  purpose_Loan
  g_One
  g_Two


  //ngmodel variables
  selectedTransBranch
  selectedTransScheme
  selectedTransMemno
  selectedApplNo
  selectedDScheme
  selectedpfLoan
  selectedG1
  selectedG2

  ngacno: any;
  tScheme: any;
  transferSchemeDetails: any;



  ngOnInit(): void {
    this.createForm();

    //for Branch Dropdown
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.getIntroducer()
    })
    
    //Scheme Code Dropdown
    // this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
    //   this.Schemecode = data
    //   // this.Schemecode = data[0].value
    //   this.getIntroducer()
      
    // })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Schemecode = filtered;
      this.getIntroducer()

      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.dates = data.CURRENT_DATE;
      // });

    })

    //Demand Scheme Code Dropdown
    // this.schemeCodeDropdownService.getSchemeCodeList(this.dschemeType).pipe(first()).subscribe(data => {
    //   this.demand_Scheme = data
    //   // this.Schemecode = data[0].value
    //   this.getIntroducer()
    // })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (demand_Scheme) {
        return (demand_Scheme.name == 'LN');
      });
      this.demand_Scheme = filtered.slice(0,5);

      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.dates = data.CURRENT_DATE;
      // });

    })
  }

  getIntroducer() {
    // debugger
    this.obj = [this.selectedTransScheme, this.selectedTransBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      // console.log(data);
      
      this.introducerACNo = data;
      this.g_One = data;
      this.g_Two = data;
    })
  }

 
  createForm(){
    this.angForm = this.fb.group({
      demandApplNo: ['',[Validators.required]],
      loandDate: ['',[Validators.required]],
      meetDate: ['',[Validators.required]],
      branch: ['',[Validators.required]],
      scode: ['',[Validators.required]],
      memno: ['',[Validators.required]],
      demandScheme: ['',[Validators.required]],
      demandAmt: ['',[Validators.required]],
      basicDa: ['',[Validators.required]],
      totalS: ['',[Validators.required]],
      totalD: ['',[Validators.required]],
      iRate: ['',[Validators.required]],
      loanPeriod: ['',[Validators.required]],
      asAmt: ['',[Validators.required]],
      sanShifaras: ['',[Validators.required]],
      pfLoan: ['',[Validators.required]],
      oldLDues: ['',[Validators.required]],
      gOne: ['',[Validators.required]],
      shDeduct: ['',[Validators.required]],
      gTwo: ['',[Validators.required]],
      deposits: ['',[Validators.required]],
      othSName: ['',[Validators.required]],
      othSdeduct: ['',[Validators.required]]
      
    });
  }



}
