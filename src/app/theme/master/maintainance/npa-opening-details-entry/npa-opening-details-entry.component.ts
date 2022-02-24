import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NpaOpeningDetailsEntryService } from './npa-opening-details-entry.service';
import { HttpClient } from '@angular/common/http'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { environment } from "src/environments/environment";
import { first } from 'rxjs/operators';
import { Subject } from "rxjs";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-npa-opening-details-entry',
  templateUrl: './npa-opening-details-entry.component.html',
  styleUrls: ['./npa-opening-details-entry.component.scss']
})

export class NpaOpeningDetailsEntryComponent implements OnInit, AfterViewInit, OnDestroy {
  //api
  url = environment.base_url;
  formSubmitted = false;

  httpData: any;
  dtExportButtonOptions: any = {};
  makeForm: any;

  npaOpeningForm: FormGroup;

  showButton: boolean = true;
  updateShow: boolean = false;


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  //dropdown ngmodel variables

  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null
  scheme

  constructor(private fb: FormBuilder, private http: HttpClient,
    private _npaService: NpaOpeningDetailsEntryService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'ftip'
    };
    this.createForm()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = allscheme;
    })
  }

  createForm() {
    this.npaOpeningForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]]
    });
  }

  ToAC
  fromAC
  getschemename
  //get account no according scheme
  getAccountList(event) {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    let obj = [this.ngscheme, branchCode]
    switch (event.name) {
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          console.log(data)
        })
        break;
    }
    this.getschemename = event.name
  }

  showTable: boolean = false
  mem
  arrTable
  getTable() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    var memFrom = this.npaOpeningForm.controls['FROM_AC'].value
    var memTo = this.npaOpeningForm.controls['TO_AC'].value
    if (this.npaOpeningForm.controls['FROM_AC'].value < this.npaOpeningForm.controls['TO_AC'].value) {
      this.showTable = true
      this.mem = [memFrom, memTo, this.ngscheme, branchCode, this.getschemename]
      // this.shareDatatable()
      this.http.get(this.url + '/term-loan-master/npaopening/' + this.mem).subscribe((data) => {
        this.arrTable = data;
        console.log('arrTable', this.arrTable)
        // this.arrTable.forEach(element => {
        //   if (element.shareDividend == null) {
        //     element.shareDividend = 0
        //   }
        // });
      });
    }
    else {
      Swal.fire("Select Different Member", "error");
      this.npaOpeningForm.patchValue({
        TO_AC: ''
      })
    }

  }

  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }

  npaEntryArray = []

  //push receipt no into object
  getLastTranDate(id, acno, AC_ACTDATE, OP_POSTED_INT, AC_OP_TOTAL_DEPOSITAMT, IS_DISPUTE_LOAN) {
    if (AC_ACTDATE != '' || AC_ACTDATE != 'Invalid date') {
      if (this.npaEntryArray.length != 0) {
        if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
          this.npaEntryArray.forEach((element) => {
            if (element.AC_NO == acno) {
              element['AC_ACTDATE'] = AC_ACTDATE
            }
          })
        }
        else {
          var object = {
            AC_ACTDATE: AC_ACTDATE,
            AC_NO: acno,
            id: id,
            OP_POSTED_INT: OP_POSTED_INT,
            AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
            IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
          }
          this.npaEntryArray.push(object)
        }
      }
      else {
        var object = {
          AC_ACTDATE: AC_ACTDATE,
          AC_NO: acno,
          id: id,
          OP_POSTED_INT: OP_POSTED_INT,
          AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
          IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
        }
        this.npaEntryArray.push(object)
      }
    }
    console.log(this.npaEntryArray)
  }

  //push amount in npaEntryArray array
  getPostedInterest(id, acno, OP_POSTED_INT, AC_ACTDATE, AC_OP_TOTAL_DEPOSITAMT, IS_DISPUTE_LOAN) {
    if (OP_POSTED_INT != '') {
      if (this.npaEntryArray.length != 0) {
        if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
          this.npaEntryArray.forEach((element) => {
            if (element.AC_NO == acno) {
              element['OP_POSTED_INT'] = OP_POSTED_INT
            }
          })
        }
        else {
          var object = {
            AC_ACTDATE: AC_ACTDATE,
            AC_NO: acno,
            id: id,
            OP_POSTED_INT: OP_POSTED_INT,
            AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
            IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
          }
          this.npaEntryArray.push(object)
        }
      }
      else {
        var object = {
          AC_ACTDATE: AC_ACTDATE,
          AC_NO: acno,
          id: id,
          OP_POSTED_INT: OP_POSTED_INT,
          AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
          IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
        }
        this.npaEntryArray.push(object)
      }
    }
    console.log(this.npaEntryArray)
  }

  getDepositAmount(id, acno, AC_OP_TOTAL_DEPOSITAMT, AC_ACTDATE, OP_POSTED_INT, IS_DISPUTE_LOAN) {

    if (AC_OP_TOTAL_DEPOSITAMT != '') {
      if (this.npaEntryArray.length != 0) {
        if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
          this.npaEntryArray.forEach((element) => {
            if (element.AC_NO == acno) {
              element['AC_OP_TOTAL_DEPOSITAMT'] = AC_OP_TOTAL_DEPOSITAMT
            }
          })
        }
        else {
          var object = {
            AC_ACTDATE: AC_ACTDATE,
            AC_NO: acno,
            id: id,
            OP_POSTED_INT: OP_POSTED_INT,
            AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
            IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
          }
          this.npaEntryArray.push(object)
        }
      }
      else {
        var object = {
          AC_ACTDATE: AC_ACTDATE,
          AC_NO: acno,
          id: id,
          OP_POSTED_INT: OP_POSTED_INT,
          AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
          IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
        }
        this.npaEntryArray.push(object)
      }
    }
    console.log(this.npaEntryArray)
  }

  checkDisputeFlag(id, acno, flag, AC_ACTDATE, OP_POSTED_INT, AC_OP_TOTAL_DEPOSITAMT) {

    let isDispute: boolean = false
    if (flag.target.checked) {
      isDispute = true
    }
    else {
      isDispute = false
    }

    if (this.npaEntryArray.length != 0) {
      if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
        this.npaEntryArray.forEach((element) => {
          if (element.AC_NO == acno) {
            element['IS_DISPUTE_LOAN'] = isDispute
          }
        })
      }
      else {
        var object = {
          AC_ACTDATE: AC_ACTDATE,
          AC_NO: acno,
          id: id,
          OP_POSTED_INT: OP_POSTED_INT,
          AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
          IS_DISPUTE_LOAN: isDispute
        }
        this.npaEntryArray.push(object)
      }
    }
    else {
      var object = {
        AC_ACTDATE: AC_ACTDATE,
        AC_NO: acno,
        id: id,
        OP_POSTED_INT: OP_POSTED_INT,
        AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
        IS_DISPUTE_LOAN: isDispute
      }
      this.npaEntryArray.push(object)
    }
  }

  submit() {
    if (this.npaEntryArray.length != 0) {
      const dataToSend = {
        'npaEntryArray': this.npaEntryArray
      };
      console.log(dataToSend)
      this._npaService.postData(dataToSend).subscribe(
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
      this.npaEntryArray = []
    }
  }

  resetForm() {
    this.createForm()
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
  }
  //function for edit button clicked
  editClickHandler(info: any): void {
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete A/c no  data",
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

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  ngAfterViewInit(): void {

    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#npaopeningdetailstable tfoot tr').appendTo('#npaopeningdetailstable thead');
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (this['value'] != '') {
            that
              .search(this['value'])
              .draw();
          } else {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


}
