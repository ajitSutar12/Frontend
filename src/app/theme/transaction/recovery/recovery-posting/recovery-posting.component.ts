import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SubSalaryDMasterdropdownService } from 'src/app/shared/dropdownService/subsalary-division-master-dropdown.service';

@Component({
  selector: 'app-recovery-posting',
  templateUrl: './recovery-posting.component.html',
  styleUrls: ['./recovery-posting.component.scss']
})
export class RecoveryPostingComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];
  transferSchemeDetails: any;
  tScheme: any;
  ngacno: null;
  
  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
    private subSalaryDMasterdropdownService: SubSalaryDMasterdropdownService,
    private schemeAccountNoService: SchemeAccountNoService

  ) { }


  //ngfor variables
  s_Div
  ss_Div
  Schemecode
  gl_Scheme
  gl_Code

  //ngmodel variables
  selectedsDiv
  selectedssDiv
  selectedScheme
  selectedGLS
  selectedGLC
  particulars

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Schemecode = filtered;
     
    })

    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.s_Div = data;
    })

    this.subSalaryDMasterdropdownService.getSubSalaryDMasterList().pipe(first()).subscribe(data => {
      this.ss_Div = data;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.gl_Scheme = allscheme.slice(0,18);
    })
    
  }

  getIntro(event){
    this.getschemename = event.name
    this.getIntroducer()
  }
  
  
  getschemename: any
  getIntroducer() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.selectedGLS,branchCode]
  
    
    switch (this.getschemename) {
  
      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
        })
        break;
  
  
     case 'SB':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
         })
         break;
  
       case 'CA':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
         })
         break;
  
       case 'LN':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
         })
         break;
  
       case 'TD':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
         })
         break;
  
       case 'DS':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
  
         })
         break;
  
       case 'CC':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
         })
         break;
  
       case 'GS':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
  
         })
         break;
  
       case 'PG':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
  
         })
         break;
  
       case 'AG':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
          this.selectedGLC = null
          
  
         })
         break;
  
  
    }
     
   }
  
  
   getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.selectedGLS,branchCode]
    this.ngacno = null
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
        })
        break;
  
      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
        })
        break;
  
      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
        })
        break;
  
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
        })
        break;
  
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
        })
        break;
  
      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
        })
        break;
  
      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.gl_Code = data;
        })
        break;
  
      case 'SH':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
            this.gl_Code = data;
            })
          break;
  
      case 'GS':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
              this.gl_Code = data;
                })
            break;
  
      case 'AG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
                this.gl_Code = data;
                    })
              break;
  
      
    }
  }
  

  createForm(){
    this.angForm = this.fb.group({
      pyear: ['',[Validators.required]],
      month: ['',[Validators.required]],
      tdate:['',[Validators.required]],
      ddcom: ['',[Validators.required]],
      T_TYPE: ['CS'],
      sdivision: ['',[Validators.required]],
      subsdiv: ['',[Validators.required]],
      scheme: ['',[Validators.required]],
      glscheme: ['',[Validators.required]],
      glcode: ['',[Validators.required]],
      particulars: ['',[Validators.required]],

      
    });
  }

}
