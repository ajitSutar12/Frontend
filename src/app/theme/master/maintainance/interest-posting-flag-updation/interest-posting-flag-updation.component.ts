import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { InterestPostingFlagUpdationService } from './interest-posting-flag-updation.service'
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
@Component({
  selector: 'app-interest-posting-flag-updation',
  templateUrl: './interest-posting-flag-updation.component.html',
  styleUrls: ['./interest-posting-flag-updation.component.scss']
})

export class InterestPostingFlagUpdationComponent implements OnInit {
  formSubmitted = false;
  angForm: FormGroup;
  //api
  url = environment.base_url;
  // dropdown ngmodel variables
  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null

  branch_code
  scheme
  dtExportButtonOptions: any = {};
  fromAc
  toAc
  showButton: boolean = true;
  updateShow: boolean = false;
  dtTrigger: Subject<any> = new Subject<any>();
  dtElement: any;
  ngBranchCode: any = null
  showTable: boolean = false
  mem
  arrTable
  getschemename
  InterestArr = []
    constructor(
    private http: HttpClient, private fb: FormBuilder,
    private schemeAccountNoService: SchemeAccountNoService,
    private _service: InterestPostingFlagUpdationService,
    private ownbranchMasterService: OwnbranchMasterService,) { }

  ngOnInit(): void {
    this.createForm();
    this.http.get(this.url + '/scheme-parameters/FlagInterest').subscribe((data) => {
      this.scheme = data
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      BRANCH: ['', [Validators.required]]
    });
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
    this.arrTable = []
    this.InterestArr = []
    switch (event.S_ACNOTYPE) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
    }
    this.getschemename = event.S_ACNOTYPE
  }

  //load table according account range
  getTable() {
    this.InterestArr = []
    var memFrom = this.angForm.controls['FROM_AC'].value
    var memTo = this.angForm.controls['TO_AC'].value
    if (this.angForm.controls['FROM_AC'].value < this.angForm.controls['TO_AC'].value) {
      this.showTable = true
      this.mem = [memFrom, memTo, this.ngscheme, this.ngBranchCode, this.getschemename]
      this.http.get(this.url + '/interest-posting-updation/accounts/' + this.mem).subscribe((data) => {
        this.arrTable = data;
        this.arrTable.forEach(element => {
          var object = {
            AC_NO: element.AC_NO,
            AC_NAME: element.AC_NAME,
            id: element.id,
            IS_POST_INT_AC: element.IS_POST_INT_AC
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

  //update checkbox status in array
  checkInterestFlag(id, acno, flag) {
    let isIntUpdate: boolean = false
    if (flag.target.checked) {
      isIntUpdate = true
    }
    else {
      isIntUpdate = false
    }
    if (this.InterestArr.length != 0) {
      if (this.InterestArr.some(item => item.AC_NO === acno)) {
        this.InterestArr.forEach((element) => {
          if (element.AC_NO == acno) {
            element['IS_POST_INT_AC'] = isIntUpdate
          }
        })
      }
      else {
        var object = {
          AC_NO: acno,
          id: id,
          IS_POST_INT_AC: isIntUpdate
        }
        this.InterestArr.push(object)
      }
    }
    else {
      var object = {
        AC_NO: acno,
        id: id,
        IS_POST_INT_AC: isIntUpdate
      }
      this.InterestArr.push(object)
    }
  }
  //checks all checkbox
  selectAll() {
    const checkedTrue = true
    this.InterestArr.forEach(item => item.IS_POST_INT_AC = checkedTrue);
  }

  //unchecks all checkbox
  deselectAll() {
    const checkedFalse = false
    this.InterestArr.forEach(item => item.IS_POST_INT_AC = checkedFalse);
  }

  //submit method for update records
  submit() {
    if (this.InterestArr.length != 0) {
      const dataToSend = {
        'AC_TYPE': this.getschemename,
        'InterestArr': this.InterestArr
      };

      this._service.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Updated Successfully !", "success");
        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
      this.arrTable = []
      this.InterestArr = []
    }
  }

  //clear form
  resetForm() {
    this.createForm()
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
    this.ngBranchCode = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete acc no. data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }
  ngAfterViewInit(): void {

    // this.dtTrigger.next();
    // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   $('#interestpostingflagtable tfoot tr').appendTo('#interestpostingflagtable thead');
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     $('input', this.footer()).on('keyup change', function () {
    //       if (this['value'] != '') {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       } else {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       }
    //     });
    //   });
    // });
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

}
