import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';

@Component({
  selector: 'app-monthly-rec-proc',
  templateUrl: './monthly-rec-proc.component.html',
  styleUrls: ['./monthly-rec-proc.component.scss']
})
export class MonthlyRecProcComponent implements OnInit { 

  ngForm : FormGroup 
  scheme: any[];
  scode
  recac
  recacno
  recinst
  recinstf
  recbalf

  recactype = [

    { label: 'T_MEMBCONT_ACTYPE', value: 'T_MEMBCONT_ACTYPE' },
    { label: 'T_LOAN_ACTYPE', value: 'T_LOAN_ACTYPE' },
    { label: 'T_RECURRING_ACTYPE', value: 'T_RECURRING_ACTYPE' },
    { label: 'T_EMRGLN_ACTYPE', value: 'T_EMRGLN_ACTYPE' },
    { label: 'T_HPLN_ACTYPE', value: 'T_HPLN_ACTYPE' },
  ];

  recaccno =  [
    { label: 'T_MEMBCONT_ACNO', value: 'T_MEMBCONT_ACNO' },
    { label: 'T_LOAN_ACNO', value: 'T_LOAN_ACNO' },
    { label: 'T_RECURRING_ACNO', value: 'T_RECURRING_ACNO' },
    { label: 'T_EMRGLN_ACNO', value: 'T_EMRGLN_ACNO' },
    { label: 'T_HPLN_ACNO', value: 'T_HPLN_ACNO' },

  ];
  recinstno = [

    { label: 'T_MEMBCONT', value: 'T_MEMBCONT' },
    { label: 'T_LOAN_AMT', value: 'T_LOAN_AMT' },
    { label: 'T_RECURRING_INST', value: 'T_RECURRING_INST' },
    { label: 'T_EMRGLN_AMT', value: 'T_EMRGLN_AMT' },
    { label: 'T_HPLN_AMT', value: 'T_HPLN_AMT' },

  ];

  recinstfield = [

    { label: 'T_LOAN_INT_AMT', value: 'T_LOAN_INT_AMT' },
    { label: 'T_EMRGLN_INT_AMT', value: 'T_EMRGLN_INT_AMT' },
    { label: 'T_HPLN_INT_AMT', value: 'T_HPLN_INT_AMT' },

  ];

  recbalfield = [

    { label: 'T_LOAN_BAL', value: 'T_LOAN_BAL' },
    { label: 'T_EMRGLN_BAL', value: 'T_EMRGLN_BAL' },
    { label: 'T_HPLN_BAL', value: 'T_HPLN_BAL' },

  ];
  
  constructor(private fb: FormBuilder,public schemeCodeDropdownService: SchemeCodeDropdownService,
    ) { }

  ngOnInit(): void {
    this.createForm()

    // Scheme Code
  this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
     
    var filtered = data.filter(function (scheme) {
      return (scheme.name == 'SB'|| scheme.name == 'AG'|| scheme.name == 'PG' ||  scheme.name == 'TD'      );
    });
    this.scheme = filtered;
  })
  }


  
  createForm() {
    this.ngForm = this.fb.group({
      Scheme_code: ["",[ Validators.required]],
      SEQ_NO: ["",[ Validators.required]],
      REC_ACTYPEFIELD: ["",[ Validators.required]],
      REC_ACNOFIELD: ["",[ Validators.required]],
      REC_INSTFIELD: ["",[ Validators.required]],
      REC__INT_INSTFIELD: ["",[ Validators.required]],
      REC_BALANCE_FIELD: ["",[ Validators.required]],
      ISAPPLY: [""],
      
    });
   
  }
}
