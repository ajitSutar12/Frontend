import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@Component({
  selector: 'app-loan-sanction',
  templateUrl: './loan-sanction.component.html',
  styleUrls: ['./loan-sanction.component.scss']
})
export class LoanSanctionComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];
  
  //schemeType: string = 'LN'

  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _schemeService: SchemeAccountNoService

  ) { }

  //ngfor variables
  Schemecode
  introducerACNo
  loan_Scheme
  nl_acScheme
  nl_acno
  tr_Scheme
  tr_Account

  //ngmodel variables
  selectedshScheme
  selectedMemno
  selectedLScheme
  selectedNLacScheme
  selectedNLacNo
  selectedtScheme
  selectedtAccount

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      console.log(data)
      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Schemecode = filtered;
      this.getIntroducer()

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (loan_Scheme) {
        return (loan_Scheme.name == 'LN');
      });
      this.loan_Scheme = filtered.slice(0,5);
      
      

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (nl_acScheme) {
        return (nl_acScheme.name == 'LN');
      });
      this.nl_acScheme = filtered.slice(0,5);
      

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (tr_Scheme) {
        return (tr_Scheme.name == 'LN');
      });
      this.tr_Scheme = filtered.slice(0,5);
      

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
    this.obj = [this.selectedshScheme,branchCode]

    
    switch (this.getschemename) {

      case 'SH':
        this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.nl_acno = data;
          this.tr_Account = data;
          //console.log(data,"gj");
          
        //this.startingAccount = null
        


        })
        break;


    
    }
     
   }

  // getIntroducer() {
  //   // debugger
  //   this.obj = [this.selectedshScheme]


  //   this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
  //     // console.log(data);
      
  //     this.introducerACNo = data;
      
  //   })
  // }

  createForm(){
    this.angForm = this.fb.group({
      demandApplNo: ['',[Validators.required]],
      mlsdate: ['',[Validators.required]],
      scode: ['',[Validators.required]],
      memno: ['',[Validators.required]],
      lscheme: ['',[Validators.required]],
      ldemandamt: ['',[Validators.required]],
      lsanctionamt: ['',[Validators.required]],
      pdate: ['',[Validators.required]],
      sanamt: ['',[Validators.required]],
      dedamt: ['',[Validators.required]],
      pcamt: ['',[Validators.required]],
      newlacs: ['',[Validators.required]],
      newlacno: ['',[Validators.required]],
      month: ['',[Validators.required]],
      installment: ['',[Validators.required]],
      cdate: ['',[Validators.required]],
      chNo: ['',[Validators.required]],
      T_TYPE: ['CS'],
      tScheme:['',[Validators.required]],
      tAccount: ['',[Validators.required]]

      
    });
  }
}
