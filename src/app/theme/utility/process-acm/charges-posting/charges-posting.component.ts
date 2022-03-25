import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import {ACMasterDropdownService} from '../../../../shared/dropdownService/ac-master-dropdown.service'

@Component({
  selector: 'app-charges-posting',
  templateUrl: './charges-posting.component.html',
  styleUrls: ['./charges-posting.component.scss']
})
export class ChargesPostingComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variables
  allScheme: any[]
  ngscheme:any=null
  isServiceCharges: boolean=true
  isMinimumBalanceCharges=false
  isDormantCharges=false
  isChargesEntry=false
  GLACNooption: any[];
  ngGlAC:any=null

  // for date 
  maxDate: Date;
  minDate: Date;

  label:string='Service Charges'
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private ACMasterDropdownService: ACMasterDropdownService,
  ) { 
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      // var allscheme = data.filter(function (scheme) {
      //   return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH'||scheme.name == 'GL')
      // });
      this.allScheme = data;
    })
    this.ACMasterDropdownService.getACMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.GLACNooption = data;
      });
  }


  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FORM_TYPE:['Service Charges'],
      CHARGES_AMT:['',[Validators.required,Validators.pattern]],
      TRANFROM_DATE:['',[Validators.required]],
      TRANTO_DATE:['',[Validators.required]],
      BALCHARGES_AMT:['',[Validators.required,Validators.pattern]],
      DORMANTFROM_DATE:['',[Validators.required]],
      DORMANTTO_DATE:['',[Validators.required]],
      DORMANTCHARGES_AMT:['',[Validators.required]],
      BALANCE:[''],
      BAL_AMT:['',[Validators.required],Validators.pattern],
      ENTRY_CHARGES:['',[Validators.required],Validators.pattern],
      MIN_CHARGES:['',[Validators.required],Validators.pattern],
      TRAN_PERIOD:['',[Validators.required]],
      TRANPERIOD_TO:['',[Validators.required]],
      TYPE:[''],
      GL_ACNO:['',[Validators.required]],
      TOTAL_CHARGE:[''],
      PARTICULAR:['Service Charges'],

    });
  }

  isForm(value,data) {

    this.label=data
    // console.log(this.label)
    this.angForm.patchValue({
      'PARTICULAR':data
      
    })
    if (value == 1) {
      this.isServiceCharges = true;
      this.isMinimumBalanceCharges=false;
      this.isDormantCharges=false;
      this.isChargesEntry=false
      
    }
    else if (value == 2) {
      this.isServiceCharges = false;
      this.isMinimumBalanceCharges=true;
      this.isDormantCharges=false;
      this.isChargesEntry=false
      
      
    }
    else if (value == 3) {
      this.isServiceCharges = false
      this.isMinimumBalanceCharges=false;
      this.isDormantCharges=true;
      this.isChargesEntry=false
      
      
    }
    else if (value == 4) {
      this.isServiceCharges = false;
      this.isMinimumBalanceCharges=false;
      this.isDormantCharges=false;
      this.isChargesEntry=true
      
      
    }
    
    
  }

}
