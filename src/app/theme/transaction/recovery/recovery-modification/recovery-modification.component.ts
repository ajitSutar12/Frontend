import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SubSalaryDMasterdropdownService } from 'src/app/shared/dropdownService/subsalary-division-master-dropdown.service';

@Component({
  selector: 'app-recovery-modification',
  templateUrl: './recovery-modification.component.html',
  styleUrls: ['./recovery-modification.component.scss']
})
export class RecoveryModificationComponent implements OnInit {
  
  angForm : FormGroup;
  obj: any[];

  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
    private subSalaryDMasterdropdownService: SubSalaryDMasterdropdownService,
    private _schemeService: SchemeAccountNoService

  ) { }

  //ngfor variables
  s_Div
  ss_Div
  Schemecode
  m_from
  m_to

  //ngmodel variables
  selectedsDiv
  selectedssDiv
  selectedScheme
  selectedmfrom
  selectedmto

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Schemecode = filtered;
      this.getIntroducer()
    })

    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.s_Div = data;
    })

    this.subSalaryDMasterdropdownService.getSubSalaryDMasterList().pipe(first()).subscribe(data => {
      this.ss_Div = data;
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
    this.obj = [this.selectedScheme,branchCode]

    
    switch (this.getschemename) {

      case 'SH':
        this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
          this.m_from = data;
          this.m_to = data;
          
          //console.log(data,"gj");
          
        //this.startingAccount = null
        


        })
        break;


    
    }
     
   }


  createForm(){
    this.angForm = this.fb.group({
      T_TYPE: ['CS'],
      month: ['',[Validators.required]],
      year: ['',[Validators.required]],
      sdivision: ['',[Validators.required]],
      subsdiv: ['',[Validators.required]],
      scheme: ['',[Validators.required]],
      mfrom: ['',[Validators.required]],
      mto: ['',[Validators.required]],
      member: ['',[Validators.required]],
      

      
    });
  }

}
