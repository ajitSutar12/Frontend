import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-scheme-ate',
  templateUrl: './scheme-ate.component.html',
  styleUrls: ['./scheme-ate.component.scss']
})
export class SchemeATEComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];
  transferSchemeDetails: any;
  tScheme: any;
  ngacno: null;

  constructor(
    private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService
  ) { }


  //ngmodel variables
  selectedTSfrom
  selectedTSto
  selectedAcfrom
  selectedActo


  //ngfor variables
  ts_From
  ts_To
  ac_From
  ac_To

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.ts_From = allscheme;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.ts_To = allscheme.slice(0,18);
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
  this.obj = [this.selectedTSto,branchCode]

  
  switch (this.getschemename) {

    case 'SH':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null
      })
      break;


   case 'SB':
    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null
       })
       break;

     case 'CA':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null
       })
       break;

     case 'LN':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null
       })
       break;

     case 'TD':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null
       })
       break;

     case 'DS':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null

       })
       break;

     case 'CC':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null
       })
       break;

     case 'GS':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null

       })
       break;

     case 'PG':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null

       })
       break;

     case 'AG':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.selectedAcfrom = null
        this.ac_To = data;
        this.selectedActo = null

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
  this.obj = [this.selectedTSto,branchCode]
  this.ngacno = null
  switch (event.name) {
    case 'SB':
      this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.ac_To = data;
      })
      break;

    case 'CA':
      this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.ac_To = data;
      })
      break;

    case 'LN':
      this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.ac_To = data;
      })
      break;

    case 'TD':
      this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.ac_To = data;
      })
      break;

    case 'DS':
      this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.ac_To = data;
      })
      break;

    case 'CC':
      this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.ac_To = data;
      })
      break;

    case 'PG':
      this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
        this.ac_From = data;
        this.ac_To = data;
      })
      break;

    case 'SH':
      this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.ac_From = data;
          this.ac_To = data;
        })
        break;

    case 'GS':
      this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
            this.ac_From = data;
            this.ac_To = data;
          })
          break;

    case 'AG':
      this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
              this.ac_From = data;
              this.ac_To = data;
            })
            break;

    
  }
}


createForm(){
  this.angForm = this.fb.group({
    trSfrom: ['',[Validators.required]],
    trSto: ['',[Validators.required]],
    acfrom: ['',[Validators.required]],
    acto: ['',[Validators.required]],
    tramt: ['',[Validators.required]],
  
  });
}
}
