import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from "src/environments/environment";
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { InterestPostingFlagUpdationService } from './interest-posting-flag-updation.service'
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
  //Datatable

  scheme
  dtExportButtonOptions: any = {};
  fromAc
  toAc
  showButton: boolean = true;
  updateShow: boolean = false;

  dtTrigger: any;
  dtElement: any;

  constructor(
    private http: HttpClient, private fb: FormBuilder,
    private schemeAccountNoService: SchemeAccountNoService,
    private _service: InterestPostingFlagUpdationService) { }

  ngOnInit(): void {
    this.createForm();
    this.http.get(this.url + '/scheme-parameters/FlagInterest').subscribe((data) => {
      this.scheme = data
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]]
    });
  }


  getSchemeAcno(event) {
    debugger
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let obj = [this.ngscheme, branchCode]
    console.log(this.ngscheme)
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
          console.log(data)
          this.fromAc = data;
          this.toAc = data
          console.log(this.fromAc)
          console.log(this.toAc)
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

  showTable: boolean = false
  mem
  arrTable
  getschemename
  getTable() {
    debugger
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    var memFrom = this.angForm.controls['FROM_AC'].value
    var memTo = this.angForm.controls['TO_AC'].value
    if (this.angForm.controls['FROM_AC'].value < this.angForm.controls['TO_AC'].value) {
      this.showTable = true
      this.mem = [memFrom, memTo, this.ngscheme, branchCode, this.getschemename]
      this.http.get(this.url + '/interest-posting-updation/accounts/' + this.mem).subscribe((data) => {
        this.arrTable = data;
        console.log(this.arrTable)
      });
    }
    else {
      Swal.fire("Select Different Member", "error");
      this.angForm.patchValue({
        TO_AC: ''
      })
    }

  }
  InterestArr = []


  checkInterestFlag(id, acno, flag) {
    let isIntUpdate: boolean = false
    if (flag.target.checked) {
      isIntUpdate = true
    }
    else {
      console.log('uncheck')
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
  submit() {
    if (this.InterestArr.length != 0) {
      const dataToSend = {
        'InterestArr': this.InterestArr
      };
      console.log(dataToSend)
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

  resetForm() {
    this.createForm()
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
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
