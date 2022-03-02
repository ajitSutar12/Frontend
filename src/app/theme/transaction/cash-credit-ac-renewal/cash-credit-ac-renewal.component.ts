import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import Swal from 'sweetalert2';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { IntrestCategoryMasterDropdownService } from 'src/app/shared/dropdownService/interest-category-master-dropdown.service';
import { CashCreditLoanRenewalService } from './cash-credit-loan-renewal.service'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface CashCreditLoanRenewal {
  id: number;
  BRANCH_CODE:string
  AC_TYPE:string
  AC_NO:number
  REN_DATE:Date
  AC_OPENING_DATE:Date
  AC_RENEWAL_COUNTER:Date

}



@Component({
  selector: 'app-cash-credit-ac-renewal',
  templateUrl: './cash-credit-ac-renewal.component.html',
  styleUrls: ['./cash-credit-ac-renewal.component.scss']
})
export class CashCreditAcRenewalComponent implements OnInit {

  formSubmitted = false;
   //api
   url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;
  // cashcreditloanrenewalForm: FormGroup;

  // Variables for hide/show add and update button
  showButton: boolean = true;

  // interface variable
  cashcreditloanrenewal: CashCreditLoanRenewal[];

  // dropdown variables
  ngscheme: any=null
  ngBranchCode:any=null
  ngacno:any=null
  getschemename: any;
  schemeACNo: any[];
  scheme: any[];
  obj: any;
  int_category:any=null
  branch_code: any[];
  intCat: any[];
  
  // date variables
  maxDate: Date;
  minDate: Date;
  renewaldate:any=null
  acopeningdate:any=null
  ngexpirydate:any=null
  ngsansctiondate:any=null
  nglastintdate:any=null
  ngeffectivedate:any=null
  

  



  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private cashcreditservice: CashCreditLoanRenewalService,
    private interstCate: IntrestCategoryMasterDropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,) { 

      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
    }
 
  
    ngOnInit(): void {
      this.createForm();

      this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
        var filtered = data.filter(function (scheme) {
          return (scheme.name == 'LN' || scheme.name == 'CC');
        });
        this.scheme = filtered;
      })
      this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
        this.branch_code = data;
        this.ngBranchCode = data[0].value
      })
      this.interstCate.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
        this.intCat = data;
      })
    }
    createForm() {
      this.angForm = this.fb.group({
        BRANCH_CODE:['',[Validators.required,Validators.pattern]],
        AC_TYPE:['',[Validators.required,Validators.pattern]],
        AC_NO:['',[Validators.pattern,Validators.required]],
        RENEWAL_DATE:['',[Validators.required]],
        AC_OPDATE:['',[Validators.required]],
        AC_RENEWAL_COUNTER:['',[Validators.required,Validators.pattern]],
        OLDAC_MONTHS:[''],
        OLDAC_EXPIRE_DATE:[''],
        OLDAC_SANCTION_AMOUNT:[''],
        OLDAC_SANCTION_DATE:[''],
        OLDAC_SECURITY_AMT:[''],
        OLDAC_DRAWPOWER_AMT:[''],
        OLDAC_INSTALLMENT:[''],
        AC_MONTHS:['',[Validators.required,Validators.pattern]],
        AC_EXPIRE_DATE:['',[Validators.required]],
        AC_SANCTION_AMOUNT:['',[Validators.required,Validators.pattern]],
        AC_SANCTION_DATE:['',[Validators.required]],
        AC_SECURITY_AMT:['',[Validators.required,Validators.pattern]],
        AC_DRAWPOWER_AMT:['',[Validators.required,Validators.pattern]],
        AC_INSTALLMENT:['',[Validators.required,Validators.pattern]],
        AC_INTCATA:['',[Validators.required,Validators.pattern]],
        LAST_INTDATE:['',[Validators.required]],
        AC_RESO_NO:['',[Validators.required,Validators.pattern]],
        AC_RESO_DATE:['',[Validators.required]],
        INT_RATE:['',[Validators.required,Validators.pattern]],
        PENAL_INT_RATE:['',[Validators.required,Validators.pattern]],
        EFFECT_DATE:['',[Validators.required]],


      });
    }
    addNewData() {
      this.showButton = true;
      
      this.resetForm();
    }
  resetForm() {
    
  }

    getBranch() {
   
      this.getIntroducer()
    }
    
    
  
    getIntro(event) {
    
      this.getschemename = event.name
      this.getIntroducer()
    }
  
    //get account no according scheme
    getIntroducer() {
    
    debugger
    
    let obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {

      case 'CC':

        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;

        })
        break;
      case 'LN':

        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
          
        })
        break;


    }
    // this.getschemename = event.name
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'RENEWAL_DATE': data.CURRENT_DATE,
      })
    })
  }

    submit() {
      
    }
    
  

  

}