import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TermDepositSchemeService } from 'src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit-interest-projection',
  templateUrl: './deposit-interest-projection.component.html',
  styleUrls: ['./deposit-interest-projection.component.scss']
})
export class DepositInterestProjectionComponent implements OnInit {


  ngForm: FormGroup;

//ngmodel
BranchCode
scheme
depositAmount
schemeCode
demo:any;
bsValue
getschemename: any
maxDate: any;
minDate: Date;
logDate


  dtExportButtonOptions: any = {};
  branch_code: any;
  constructor(private fb: FormBuilder,private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService:SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,
    private _termDepositScheme: TermDepositSchemeService  ) {
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate());
      // this.maxDate.setDate(this.maxDate.getDate())
      this.systemParameter.getFormData(1).subscribe(data => {
        this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
        this.maxDate = this.maxDate._d
        this.logDate = data.CURRENT_DATE
      })
     }

  ngOnInit(): void {
  
    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

//branchcode
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.BranchCode = user.branchId;
    })

//scheme
this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
  var filtered = data.filter(function (scheme) {
    return (scheme.name == 'TD');
   
  });
  
  this.scheme = filtered;
})


  }

  createForm()
  {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme: ['', [Validators.required]],
      DEPO_AMT: ['', [Validators.required]],
      AC_MONTHS: [0, [Validators.pattern, Validators.required]],
      AC_DAYS: [0],
      AC_EXPDT: ['', [Validators.required]],
      INT_RATE : ['', [Validators.required]],
      AC_SCHMAMT : ['', [Validators.required]],
      MATUR_AMT: ['', [Validators.required]],
    });
  }
  // some(event:any){
  //  if(this.depositAmount = event.value){
  //  this.depositAmount.toFixed(2);
  //  }
    
  // }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }

  decimalAllContent($event) {
    // let value = Number($event.target.value);
    //   let data = value.toFixed(2);
    //   $event.target.value = data;
      var t = $event.target.value;
      $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

  getBranch() {
    this.getschemename = null
   
    this.schemeCode = null
  }

 

   //check  if margin values are below 100
   checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele <= 50) {
    } else {
      Swal.fire("Invalid Input", "Please insert values below 50", "error");
      this.ngForm.patchValue({
        TDS_RATE: 0
      })
    }
  }
  expiryDate
  getMaturityDate() {
    if (this.BranchCode != null) {
      this._termDepositScheme.getFormData(this.BranchCode).subscribe(data => {
        if (data.S_INTASON == '1') {
          document.getElementById('AC_ASON_DATE').removeAttribute("disabled");
        }
        else {
          document.getElementById('AC_ASON_DATE').setAttribute("disabled", "true");
          let months = this.ngForm.controls['AC_MONTHS'].value
          let days = this.ngForm.controls['AC_DAYS'].value
          // var maturityDt = new Date(this.angForm.controls['AC_ASON_DATE'].value)
          // var year = maturityDt.getFullYear();
          // var month = new Date(maturityDt).getMonth();
          // var day = new Date(maturityDt).getDate();
          // var maturityMonth = month + Number(months)
          // var maturityDay = day + Number(days)
          // var date = new Date(year, maturityMonth, maturityDay);
          // var maturityDate = this.datePipe.transform(date, "DD/MM/YYYY")

          // var check = moment(n.entry.date_entered, 'YYYY/MM/DD');

          // var month = check.format('M');
          // var day = check.format('D');
          // var year = check.format('YYYY');
          // debDugger
          var maturityDt = moment(this.ngForm.controls['AC_ASON_DATE'].value, 'DD/MM/YYYY')
          var year = maturityDt.format('YYYY');
          var month = maturityDt.format('M');
          var day = maturityDt.format('D');

          var maturityMonth = Number(month) + Number(months)
          var maturityDay = Number(day) + Number(days)
          var date = new Date(Number(year), Number(maturityMonth), Number(maturityDay));
          var maturityDate = moment(date).format("DD/MM/YYYY")
          this.expiryDate = maturityDate
          this.ngForm.patchValue({
            AC_EXPDT: maturityDate
          })
        }

        if (data.PERIOD_APPLICABLE == '1') {
          document.getElementById('AC_MONTHS').removeAttribute("disabled");
          document.getElementById('AC_DAYS').removeAttribute("disabled");
        }
        else {
          document.getElementById('AC_MONTHS').setAttribute("disabled", "true");
          document.getElementById('AC_DAYS').setAttribute("disabled", "true");
        }



        if (data.RECEIPT_NO_INPUT == '1') {
          document.getElementById('AC_REF_RECEIPTNO').removeAttribute("disabled");
        }
        else {
          document.getElementById('AC_REF_RECEIPTNO').setAttribute("disabled", "true");
        }





        // if (data.RECEIPT_TYPE != null) {
        //   this._InterestInstruction.getFormData(this.selectedValue).subscribe(data => {

        //     this.http.get<any>(
        //       this.url + '/td-receipt-type',
        //     ).subscribe(resp => {
        //       if (resp.length != 0) {
        //         resp.forEach(async (element) => {
        //           if (data.RECEIPT_TYPE == element.RECEIPT_TYPE) {
        //             this.angForm.patchValue({
        //               AC_REF_RECEIPTNO: element.LAST_RECEIPT_NO + 1
        //             })
        //           } else {
        //             this.angForm.patchValue({
        //               AC_REF_RECEIPTNO: 0
        //             })
        //           }
        //         })
        //       }
        //       else {
        //         this.angForm.patchValue({
        //           AC_REF_RECEIPTNO: 0
        //         })
        //       }
        //     })



        //   })

        // }

    
      })
    }

  }

  CheckmonthDays() {
    debugger
    this._termDepositScheme.getFormData(this.BranchCode).subscribe(data => {
    
        this.ngForm.controls['AC_MONTHS'].enable()
        this.ngForm.controls['AC_DAYS'].enable()
        if (Number(this.ngForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.ngForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + " Month and " + data.MIN_DAYS + " Days", "error");
          this.ngForm.controls['AC_MONTHS'].reset()
          this.ngForm.controls['AC_DAYS'].reset()
        }

      // else if (data.UNIT_OF_PERIOD == "D") {
      //   this.ngForm.patchValue({
      //     AC_MONTHS: ''
      //   })
      //   this.ngForm.controls['AC_MONTHS'].disable()
      //   this.ngForm.controls['AC_DAYS'].enable()
      //   if (Number(this.ngForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
      //     Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS + ' Days', "error");
      //     this.ngForm.controls['AC_DAYS'].reset()
      //   }
      // }
      // else if (data.UNIT_OF_PERIOD == "M") {
      //   this.ngForm.patchValue({
      //     AC_DAYS: '',
      //   })
      //   this.ngForm.controls['AC_MONTHS'].enable()
      //   this.ngForm.controls['AC_DAYS'].disable()
      //   if (Number(this.ngForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH)) {
      //     Swal.fire("Month Must Be Geater Than " + data.MIN_MONTH + ' Months', "error");
      //     this.ngForm.controls['AC_MONTHS'].reset()
      //   }
      // }


      if (data.UNIT_OF_PERIOD == "B" && data.IS_AUTO_PERIOD_CALCULATE == '1') {
        this.ngForm.controls['AC_MONTHS'].enable()
        this.ngForm.controls['AC_DAYS'].enable()
        if (Number(this.ngForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.ngForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
          this.ngForm.controls['AC_MONTHS'].reset()
          this.ngForm.controls['AC_DAYS'].reset()
        }
      }

      var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
      let expiryT = moment(date1, 'DD/MM/YYYY').add(Number(this.ngForm.controls['AC_DAYS'].value), 'days').format('DD/MM/YYYY')
      let expiryDate = moment(expiryT, 'DD/MM/YYYY').add(Number(this.ngForm.controls['AC_MONTHS'].value), 'months').format('DD/MM/YYYY')
      this.expiryDate = expiryDate
      this.ngForm.patchValue({
        AC_EXPDT: expiryDate
      })


      // if (data.MULTIPLE_OF_DAYS != null) {
      //   if ((Number((this.angForm.controls['AC_DAYS'].value)) % Number((data.MULTIPLE_OF_DAYS))) != 0) {
      //     Swal.fire("Days Should Be Multiple Of " + data.MULTIPLE_OF_DAYS, "error");
      //   }
      // }
      // if (data.MULTIPLE_OF_MONTH != null) {
      //   if ((Number((this.angForm.controls['AC_MONTHS'].value)) % Number((data.MULTIPLE_OF_MONTH))) != 0) {
      //     Swal.fire("Month Should Be Multiple Of " + data.MULTIPLE_OF_MONTH, "error");
      //   }
      // }
    })  
  }
  setMaturityDate() {
  
    this.ngForm.patchValue({
      AC_MATUAMT: this.ngForm.controls['AC_SCHMAMT'].value == '' || this.ngForm.controls['AC_SCHMAMT'].value == null ? 0 : this.ngForm.controls['AC_SCHMAMT'].value
    })
  }
  monthDays() {
    if (this.BranchCode != null) {
      this._termDepositScheme.getFormData(this.BranchCode).subscribe(data => {
        if (this.ngForm.controls['AC_EXPDT'].value != null && this.ngForm.controls['AC_EXPDT'].value != '') {
          var date1 = this.ngForm.controls['AC_ASON_DATE'].value;
          var date2 = this.ngForm.controls['AC_EXPDT'].value;
          var b = moment(date1, "DD-MM-YYYY");
          var a = moment(date2, "DD-MM-YYYY");
          var bd = moment(date1, "DD-MM-YYYY");
          var ab = moment(date2, "DD-MM-YYYY");
          var months = a.diff(b, 'months');
          var days = a.diff(b, 'days');
          b.add(months, 'months');

          var Diffmonths = ab.diff(bd, 'months');
          bd.add(months, 'months');

          var Diffdays = ab.diff(bd, 'days');

          if (data.IS_AUTO_PERIOD_CALCULATE == '1') {
            this.ngForm.patchValue({
              AC_MONTHS: months,
              AC_DAYS: Diffdays,
            })
          }
          else {
            if (data.UNIT_OF_PERIOD == "B") {
              this.ngForm.controls['AC_MONTHS'].enable()
              this.ngForm.controls['AC_DAYS'].enable()
              this.ngForm.patchValue({
                AC_MONTHS: months,
                AC_DAYS: Diffdays,
              })
              if (Number(this.ngForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.ngForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + " Month and " + data.MIN_DAYS + " Days", "error");
                this.ngForm.controls['AC_MONTHS'].reset()
                this.ngForm.controls['AC_DAYS'].reset()
                this.ngForm.controls['AC_EXPDT'].reset()
              }
              else {
                this.ngForm.patchValue({
                  AC_MONTHS: months,
                  AC_DAYS: Diffdays
                })
              }
            }
            else if (data.UNIT_OF_PERIOD == "D") {
              this.ngForm.patchValue({
                AC_MONTHS: '',
                AC_DAYS: days,
              })
              this.ngForm.controls['AC_MONTHS'].disable()
              this.ngForm.controls['AC_DAYS'].enable()
              if (Number(this.ngForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS + ' Days', "error");
                this.ngForm.controls['AC_DAYS'].reset()
                this.ngForm.controls['AC_EXPDT'].reset()
              }
            }
            else if (data.UNIT_OF_PERIOD == "M") {
              this.ngForm.patchValue({
                AC_DAYS: '',
                AC_MONTHS: months,
              })
              this.ngForm.controls['AC_MONTHS'].enable()
              this.ngForm.controls['AC_DAYS'].disable()
              if (Number(this.ngForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH)) {
                Swal.fire("Month Must Be Geater Than " + data.MIN_MONTH + ' Months', "error");
                this.ngForm.controls['AC_MONTHS'].reset()
                this.ngForm.controls['AC_EXPDT'].reset()
              }
            }
          }
        }
      })
    }
 
  }
}
