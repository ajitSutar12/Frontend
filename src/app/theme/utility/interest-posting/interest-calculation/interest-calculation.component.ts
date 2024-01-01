import { HttpClient } from '@angular/common/http';
// import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { InterestPostingFlagUpdationService } from 'src/app/theme/master/maintainance/interest-posting-flag-updation/interest-posting-flag-updation.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import { CurrentSchemeService } from './interest-calculation.service';
import Swal from 'sweetalert2';
import { data, event } from 'jquery';
import { async } from 'rxjs/internal/scheduler/async';
import * as moment from 'moment';
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
  intuptodate: any = null
  InterestArr = []
  // Formgroup variable
  angForm: FormGroup;
  isSchemeWise: boolean;
  isAccountWise: boolean;
  isSelectiveAccountWise: boolean;

  // dropdown variables
  ngBranchCode: any = null
  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null
  scheme: any;

  fromAc: any
  toAc: any


  branch_code: any;
  arrTable: any;
  showButton: boolean = true;
  showTable: boolean = false;
  mem: any[];
  getschemename: any;
  schemeACNo: any[];
  UpdateData: [];
  schemeDataList: any;
  codeList: any;
  selectedSchemeData: any;
  schemewiseRadio: boolean = true;
  modalClass: string = 'modalHide';
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private schemeAccountNoService: SchemeAccountNoService,
    private _service: InterestPostingFlagUpdationService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private _serviceScheme: CurrentSchemeService
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    $('#loading').hide();

    this.getSystemParaDate()
    this.createForm();

    // this.http.get(this.url + '/scheme-parameters/FlagInterest').subscribe((data) => {
    //   this.scheme = data
    // })

    this._serviceScheme.getSchemeCodeList().subscribe(data => {
      this.schemeDataList = data;
      this.codeList = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]
      console.log(this.codeList, 'Codelist')
    }, err => {
      console.log('Scheme Parameter Not Loading :', err);
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.intapp == '1');
      });
      console.log('filter', filtered);
      this.scheme = filtered;
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

  }

  createForm() {
    this.angForm = this.fb.group({
      INT_UPTO_DATE: ['', [Validators.required]],
      Ledger_Date: [''],
      INT_CAL: [''],
      BRANCH: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      BRANCH1: ['', [Validators.required]],
      AC_TYPE1: ['', [Validators.required]],

    });
  }

  getSelectedCodeScheme(ele) {
    let code = ele;
    this.selectedSchemeData = this.schemeDataList.filter(c => c.S_ACNOTYPE == code)
  }
  submit() {
    debugger
    var FormValue = this.angForm.value;
    if (FormValue.INT_CAL == "") {
      Swal.fire("Oops...", "Please choose any option for Interest Calculation", "error");
      return;
    } else if (FormValue.INT_CAL == 'Form1') {
      if (FormValue.BRANCH == '' || FormValue.AC_TYPE == '' || this.selectedSchemeDataForOption1.length == 0) {
        Swal.fire("Oops...", "Please select required field value", "error");
        return;
      } else {
        this.modalClass = 'modalShow';
        this.showButton = false;
        let datetobind = moment(FormValue.INT_UPTO_DATE, 'DD/MM/YYYY')
        let apiObj = {
          option: 0,
          obj: {
            SchemeCode: this.selectedSchemeDataForOption1
          },
          schemeType: FormValue.AC_TYPE,
          branch_code: FormValue.BRANCH,
          date: moment(datetobind).format('DD/MM/YYYY')
        }

        //Send Data for Interest Calculation Scheme Wise;
        this._service.IntrestCalculation(apiObj).subscribe((data) => {
          this.modalClass = 'modalHide';
          Swal.fire("Success", "Interest Calculation Successfully Completed", "success");
          this.ngOnInit()
          this.showButton = true;
        },
          // err => {
          //   console.log(err);
          //   this.modalClass = 'modalHide';
          //   this.showButton = true;
          // })
          (error) => {
            console.log(error, 'err')
            this.modalClass = 'modalHide';
            Swal.fire('Oops!', error?.error?.message, 'error');
            this.showButton = true;
          })
      }
    } else if (FormValue.INT_CAL == 'Form2') {
      if (FormValue.BRANCH == '' || FormValue.AC_TYPE == '' || FormValue.FROM_AC == '' || FormValue.TO_AC == '') {
        Swal.fire("Oops...", "Please select required field value", "error");
      } else {
        this.modalClass = 'modalShow';
        this.showButton = false;
        let apiObj = {
          option: 1,
          obj: {
            SchemeCode: [FormValue.AC_TYPE],
            Range: {
              StartAcNO: FormValue.FROM_AC,
              EndAcNo: FormValue.TO_AC
            }
          },
          schemeType: FormValue.AC_TYPE,
          branch_code: FormValue.BRANCH,
          date: FormValue.INT_UPTO_DATE
        }

        //Send Data for Interest Calculation Scheme Wise;
        this._service.IntrestCalculation(apiObj).subscribe(data => {
          this.modalClass = 'modalHide';
          Swal.fire("Success", "Interest Calculation Successfully Completed", "success");
          this.ngOnInit()
          this.showButton = true;
        }, (error) => {
          console.log(error, 'err')
          this.modalClass = 'modalHide';
          Swal.fire('Oops!', error?.error?.message, 'error');
          this.showButton = true;
        })
      }
    } else {
      if (FormValue.BRANCH1 == '' || FormValue.AC_TYPE1 == '' || this.InterestArr.length == 0) {
        Swal.fire("Oops...", "Please select required field value", "error");
      } else {
        this.modalClass = 'modalShow';
        this.showButton = false;
        let AccountData = this.InterestArr.map(x => `'${x}'`).join(',')

        let apiObj = {
          option: 2,
          obj: {
            SchemeCode: [FormValue.AC_TYPE1],
            SelectiveData: AccountData
          },
          schemeType: FormValue.AC_TYPE1,
          branch_code: FormValue.BRANCH,
          date: FormValue.INT_UPTO_DATE
        }

        //Send Data for Interest Calculation Scheme Wise;
        this._service.IntrestCalculation(apiObj).subscribe(data => {
          this.modalClass = 'modalHide';
          Swal.fire("Success", "Interest Calculation Successfully Completed", "success");
          this.ngOnInit()
          this.showButton = true;
        }, err => {
          console.log(err);
          this.showButton = true;
        })
      }
    }
  }
  select() {
    this.InterestArr = []
    var memFrom = this.angForm.controls['FROM_AC'].value
    var memTo = this.angForm.controls['TO_AC'].value
    if (this.angForm.controls['FROM_AC'].value <= this.angForm.controls['TO_AC'].value) {

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
          this.schemeACNo = data

        })

        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo = data
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo = data
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo = data
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo = data
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo = data
          console.log(this.schemeACNo)
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo = data
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo = data
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
          this.schemeACNo = data
        })
        break;
    }

    console.log(event.name)
    console.log(this.fromAc)
    console.log(this.toAc)


  }
  //load table according account range
  AccountWiseData = new Array()
  getTable(event) {
    debugger
    // this.InterestArr = []
    this.showTable = true
    let searchData = this.InterestArr.filter(ele => ele.AC_NO === event.value);
    if (searchData.length != 0) {
      Swal.fire('Oops...!', 'Your selected Account Already Exists in Table', 'error');
    } else {
      let obj = {
        AC_NO: event.bankacno,
        AC_NAME: event.name
      }
      this.AccountWiseData.push(obj);
      this.InterestArr.push(event.bankacno)
    }



  }

  isSelect(value) {
    if (value == 1) {
      this.isSchemeWise = true;
      this.isAccountWise = false;
      this.isSelectiveAccountWise = false;
      this.ngBranchCode = null
      this.ngscheme = null
      this.ngfromac = null
      this.ngtoac = null
      // this.angForm.controls['BRANCH'].reset()
      // this.angForm.controls['AC_TYPE'].reset()
      // this.angForm.controls['FROM_AC'].reset()
      // this.angForm.controls['TO_AC'].reset()
      // this.angForm.controls['BRANCH1'].reset()
      // this.angForm.controls['AC_TYPE1'].reset()
      // this.angForm.controls['AC_NO'].reset()

    }
    if (value == 2) {
      this.isSchemeWise = false;
      this.isAccountWise = true;
      this.isSelectiveAccountWise = false;
      this.angForm.controls['BRANCH1'].reset()
      this.angForm.controls['AC_TYPE1'].reset()
      this.angForm.controls['AC_NO'].reset()

    }
    if (value == 3) {
      this.isSchemeWise = false;
      this.isAccountWise = false;
      this.isSelectiveAccountWise = true;
      this.angForm.controls['BRANCH'].reset()
      this.angForm.controls['FROM_AC'].reset()
      this.angForm.controls['TO_AC'].reset()
    }

  }

  //  //update checkbox status in array
  //  checkInterestFlag(uptodate, ledgerdate, flag) {
  //   let isIntUpdate: boolean = false
  //   if (flag.target.checked) {
  //     isIntUpdate = true
  //   }
  //   else {
  //     isIntUpdate = false
  //   }
  //   if (this.InterestArr.length != 0) {
  //     if (this.InterestArr.some(item => item.INT_UPTO_DATE === uptodate)) {
  //       this.InterestArr.forEach((element) => {
  //         if (element.INT_UPTO_DATE == uptodate) {
  //           element['IS_POST_INT_AC'] = isIntUpdate
  //         }
  //       })
  //     }
  //     else {
  //       var object = {
  //         INT_UPTO_DATE: uptodate,
  //         Ledger_Date: ledgerdate,

  //       }
  //       this.InterestArr.push(object)
  //     }
  //   }
  //   else {
  //     var object = {
  //       INT_UPTO_DATE: uptodate,
  //       Ledger_Date: ledgerdate,

  //     }
  //     this.InterestArr.push(object)
  //   }
  // }




  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'INT_UPTO_DATE': data.CURRENT_DATE,
        'Ledger_Date': data.CURRENT_DATE,
      })
    })
  }

  selectedSchemeDataForOption1 = new Array();
  //Add into SchemeList
  AddSchemeData(ele, data) {
    console.log(ele);
    console.log(data);

    if (ele.target.checked) {
      // this.selectedSchemeData.push(data);
      if (this.selectedSchemeDataForOption1.length == 0) {
        this.selectedSchemeDataForOption1.push(data.id)
      } else {
        let result = this.selectedSchemeDataForOption1.filter(ele => ele == data.id);
        if (result.length == 0) {
          this.selectedSchemeDataForOption1.push(data.id)
        }
      }
    } else {
      let index = this.selectedSchemeDataForOption1.findIndex(ele => ele === data.id)
      delete this.selectedSchemeDataForOption1[index];
      console.log(this.selectedSchemeDataForOption1);
    }
  }
}
