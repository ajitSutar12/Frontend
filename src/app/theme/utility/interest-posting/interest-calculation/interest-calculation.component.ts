import { HttpClient } from '@angular/common/http';
// import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { InterestPostingFlagUpdationService } from 'src/app/theme/master/maintainance/interest-posting-flag-updation/interest-posting-flag-updation.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import Swal from 'sweetalert2';
import { data } from 'jquery';
@Component({
  selector: 'app-interest-calculation',
  templateUrl: './interest-calculation.component.html',
  styleUrls: ['./interest-calculation.component.scss']
})
export class InterestCalculationComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;


  // date variables
  maxDate: Date;
  minDate: Date;
  intuptodate:any=null
  InterestArr = []
 // Formgroup variable
 angForm: FormGroup;
  isSchemeWise: boolean;
  isAccountWise: boolean;
  isSelectiveAccountWise: boolean;

  // dropdown variables
  ngBranchCode:any=null
  ngscheme:any=null
  ngfromac:any=null
  ngtoac:any=null
  scheme

  fromAc:any
  toAc:any

  
  branch_code: any;
  arrTable: any;
  showButton: boolean = true;
  showTable: boolean=false;
  mem: any[];
  getschemename: any;
  schemeACNo: any[];
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private schemeAccountNoService: SchemeAccountNoService,
    private _service: InterestPostingFlagUpdationService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
  ) {
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
   }

  ngOnInit(): void {

    this.getSystemParaDate()
    this.createForm();

    this.http.get(this.url + '/scheme-parameters/FlagInterest').subscribe((data) => {
      this.scheme = data
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.intapp == true );
      });
      this.scheme = filtered;
      console.log(data)
      console.log(this.scheme)
      
     
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    
  }

  createForm() {
    this.angForm = this.fb.group({
      INT_UPTO_DATE:['',[Validators.required]],
      Ledger_Date:[''],
      INT_CAL:[''],
      BRANCH:['',[Validators.required]],
      AC_TYPE:['',[Validators.required]],
      FROM_AC:['',[Validators.required]],
      TO_AC:['',[Validators.required]],
      AC_NO:['',[Validators.required]],
      BRANCH1:['',[Validators.required]],
      AC_TYPE1:['',[Validators.required]],

    });
  }

  submit() {
    // if(){
    //   const dataToSend={
        
    //   }
    //   this._service.postData(dataToSend).subscribe(
    //     (data) => {
    //       Swal.fire("Success!", "Data Updated Successfully !", "success");
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    //   //To clear form
    //   this.resetForm();
    //   this.arrTable = []
    //   this.InterestArr = []
    // }

    // if (this.InterestArr.length != 0) {
    //   const dataToSend = {
    //     'AC_TYPE': this.getschemename,
    //     'InterestArr': this.InterestArr
    //   };

      
    
  }
  select(){
    this.InterestArr = []
    var memFrom = this.angForm.controls['FROM_AC'].value
    var memTo = this.angForm.controls['TO_AC'].value
    if (this.angForm.controls['FROM_AC'].value < this.angForm.controls['TO_AC'].value) {
     
      this.mem = [memFrom, memTo, this.ngscheme, this.ngBranchCode, this.getschemename]
      this.http.get(this.url + '/interest-calculation/accounts/' + this.mem).subscribe((data) => {
        this.arrTable = data;
        this.arrTable.forEach(element => {
          var object = {
            AC_NO: element.AC_NO,
            AC_NAME: element.AC_NAME,
           
            
          }
          this.InterestArr.push(object)
        });
      });
    }
    else {
      Swal.fire("To Account Number Must Be Greater Than From Account Number");
      this.InterestArr = []
      this.angForm.patchValue({
        TO_AC: ''
      })
    }
  }
  resetForm() {
    
  }

  //clear scheme and account no
  getBranch() {
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    this.InterestArr = []
  }

  //get scheme wise account number
  getSchemeAcno(event) {
    debugger
    let obj = [this.ngscheme, this.ngBranchCode]
    this.ngfromac = null
    this.ngtoac = null

    switch (event.name) {
      
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data

        })
        
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data
          console.log(this.schemeACNo)
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo=data
        })
        break;
    }
  
    console.log(event.name)
    console.log(this.fromAc)
    console.log(this.toAc)

    
  }
  //load table according account range
  getTable() {
    debugger
    this.InterestArr = []
    
    var memAC = this.angForm.controls['AC_NO'].value
    

    this.showTable = true
      this.mem = [memAC,  this.ngscheme, this.ngBranchCode, this.getschemename]
      this.http.get(this.url + '/interest-calculation/accounts/' + this.mem).subscribe((data) => {
        this.arrTable = data;
        this.arrTable.forEach(element => {
          var object = {
            AC_NO: element.AC_NO,
            AC_NAME: element.AC_NAME,
            
          }
          this.InterestArr.push(object)
        });
      });
    
  }

  isSelect(value) {
    if (value == 1) {
      this.isSchemeWise = true;
      this.isAccountWise=false;
      this.isSelectiveAccountWise=false;
      this.angForm.controls['BRANCH'].reset()
      this.angForm.controls['AC_TYPE'].reset()
      this.angForm.controls['FROM_AC'].reset()
      this.angForm.controls['TO_AC'].reset()
      this.angForm.controls['BRANCH1'].reset()
      this.angForm.controls['AC_TYPE1'].reset()
      this.angForm.controls['AC_TYPE1'].reset()
      
    }
    if (value == 2) {
      this.isSchemeWise = false;
      this.isAccountWise=true;
      this.isSelectiveAccountWise=false;
      this.angForm.controls['BRANCH1'].reset()
      this.angForm.controls['AC_TYPE1'].reset()
      this.angForm.controls['AC_TYPE1'].reset()
      
    }
    if (value == 3) {
      this.isSchemeWise = false;
      this.isAccountWise=false;
      this.isSelectiveAccountWise=true;
      this.angForm.controls['BRANCH'].reset()
      this.angForm.controls['FROM_AC'].reset()
      this.angForm.controls['TO_AC'].reset()
    }
    
  }

   //update checkbox status in array
   checkInterestFlag(uptodate, ledgerdate, flag) {
    let isIntUpdate: boolean = false
    if (flag.target.checked) {
      isIntUpdate = true
    }
    else {
      isIntUpdate = false
    }
    if (this.InterestArr.length != 0) {
      if (this.InterestArr.some(item => item.INT_UPTO_DATE === uptodate)) {
        this.InterestArr.forEach((element) => {
          if (element.INT_UPTO_DATE == uptodate) {
            element['IS_POST_INT_AC'] = isIntUpdate
          }
        })
      }
      else {
        var object = {
          INT_UPTO_DATE: uptodate,
          Ledger_Date: ledgerdate,
          
        }
        this.InterestArr.push(object)
      }
    }
    else {
      var object = {
        INT_UPTO_DATE: uptodate,
        Ledger_Date: ledgerdate,
        
      }
      this.InterestArr.push(object)
    }
  }

  


  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'INT_UPTO_DATE': data.CURRENT_DATE,
        'Ledger_Date': data.CURRENT_DATE,
      })
    })
  }

}
