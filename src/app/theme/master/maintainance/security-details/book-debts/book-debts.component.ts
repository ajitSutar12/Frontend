import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input, Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { environment } from "src/environments/environment";
import { first } from "rxjs/operators";
import { BookdebtsService } from "./book-debts.service";
import { isNullOrUndefined } from "@swimlane/ngx-datatable";
import { data } from "jquery";
import { Router } from "@angular/router";
import * as moment from 'moment';
import { SecurityDetailsComponent } from "../security-details.component";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";


// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface BookMaster {
  id: number;
  AC_ACNOTYPE: string;
  AC_TYPE: number;
  SUBMISSION_DATE: Date;
  STATEMENT_DATE: Date;
  DEBTORS_OP_BAL: number;
  CREDIT_SALE: number;
  RECOVERY: number;
  OVERAGED_DEBTORS: number;
  CLOSE_BAL: number;
  CRD_OUTSTAND_BAL: number;
  MARGIN: number;
  REMARK: string;
}

@Component({
  selector: "app-book-debts",
  templateUrl: "./book-debts.component.html",
  styleUrls: ["./book-debts.component.scss"],
})
export class BookDebtsComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  @ViewChild(SecurityDetailsComponent) child: SecurityDetailsComponent;
  //passing data form child to parent
  @Output() newbookEvent = new EventEmitter<any>();
  datemax: any;
  newbtnShow: boolean;
  logDate: any;
  newItemEvent(value) {
    this.newbookEvent.emit(value);
  }
  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
  @Input() AC_ACNOTYPE: any;
  @Input() branchCode: any;
  @Input() sec_code: any;

  //api
  url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number; //variable for updating

  submissiondate: any = null
  statementdate: any = null
  maxDate: any;
  minDate: Date;


  // Store data from backend
  bookMaster: BookMaster[];

  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData = {};
  // //variables for calculating debtors closing balance
  // debtopen: number = 0;
  // addcredit: number = 0;
  // lessrecovery: number = 0;
  // LessOveragedDebtors: number = 0;
  // debtclosing: number = 0;
  // bookdebts: number = 0;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _book: BookdebtsService, private systemParameter: SystemMasterParametersService,
    public router: Router
  ) {


    console.log(this.scheme)
    console.log(this.Accountno)
   // this.maxDate = new Date();
   this.minDate = new Date();
   this.minDate.setDate(this.minDate.getDate() - 1);
   // this.maxDate.setDate(this.maxDate.getDate())

   this.systemParameter.getFormData(1).subscribe(data => {

     this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
     this.maxDate = this.maxDate._d 
     this.logDate = data.CURRENT_DATE
   })

  }

  ngOnInit(): void {
    console.log(this.scheme)
    console.log(this.Accountno)
    this.createForm();

    console.log(this.scheme, this.Accountno, this.AC_ACNOTYPE)
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'ftip'
    }

   this.loadTable();
    this.dtTrigger.next();

    // // Fetching Server side data
    // this.dtExportButtonOptions = {
    //   pagingType: "full_numbers",
    //   paging: true,
    //   pageLength: 10,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTableParameters: any, callback) => {
    //     dataTableParameters.minNumber = dataTableParameters.start + 1;
    //     dataTableParameters.maxNumber =
    //       dataTableParameters.start + dataTableParameters.length;
    //     let datatableRequestParam: any;
    //     this.page = dataTableParameters.start / dataTableParameters.length;

    //     dataTableParameters.columns.forEach((element) => {
    //       if (element.search.value != "") {
    //         let string = element.search.value;
    //         this.filterData[element.data] = string;
    //       } else {
    //         let getColumnName = element.data;
    //         let columnValue = element.value;
    //         if (this.filterData.hasOwnProperty(element.data)) {
    //           let value = this.filterData[getColumnName];
    //           if (columnValue != undefined || value != undefined) {
    //             delete this.filterData[element.data];
    //           }
    //         }
    //       }
    //     });
    //     let data: any = localStorage.getItem('user');
    //     let result = JSON.parse(data);
    //     let branchCode = result.branch.id;
    //     console.log(this.scheme)
    //     console.log(this.Accountno)
    //     dataTableParameters['branchCode'] = branchCode;
    //     dataTableParameters["filterData"] = this.filterData;
    //     this.http
    //       .post<DataTableResponse>(
    //         this.url + "/book-debts",
    //         dataTableParameters
    //       )
    //       .subscribe((resp) => {
    //         this.bookMaster = resp.data;

    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsTotal,
    //           data: [],
    //         });
    //       });
    //   },
    //   columns: [
    //     {
    //       title: "Action",
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
    //       },
    //     },
    //     {
    //       title: "Submission Date",
    //       data: "SUBMISSION_DATE",
    //     },
    //     {
    //       title: "Statement Date",
    //       data: "STATEMENT_DATE",
    //     },
    //     {
    //       title: "Debtors Opening Balance.",
    //       data: "DEBTORS_OP_BAL",
    //     },
    //     {
    //       title: "Credit Sales",
    //       data: "CREDIT_SALE",
    //     },
    //     {
    //       title: "Recovery",
    //       data: "RECOVERY",
    //     },
    //     {
    //       title: "Overaged Debtors",
    //       data: "OVERAGED_DEBTORS",
    //     },
    //     {
    //       title: "Debtors Closing Balance",
    //       data: "CLOSE_BAL",
    //     },
    //     {
    //       title: "Creditors O/S Balance",
    //       data: "CRD_OUTSTAND_BAL",
    //     },
    //     {
    //       title: "Margin %",
    //       data: "MARGIN",
    //     },
    //     {
    //       title: "Remarks",
    //       data: "REMARK",
    //     },
    //   ],
    //   dom: "Blrtip",
    // };
  }

  createForm() {
    this.angForm = this.fb.group({
      SUBMISSION_DATE: ["", [Validators.required]],
      STATEMENT_DATE: ["", [Validators.required]],
      DEBTORS_OP_BAL: [0, [Validators.pattern, Validators.required]],
      CREDIT_SALE: ["", [Validators.pattern]],
      RECOVERY: ["", [Validators.pattern]],
      OVERAGED_DEBTORS: ["", [Validators.pattern]],
      CLOSE_BAL: ["", [Validators.pattern]],
      CRD_OUTSTAND_BAL: ["", [Validators.pattern, Validators.required]],
      MARGIN: ["", [Validators.pattern]],
      REMARK: ["", [Validators.pattern, Validators.required]],
    });
  }

  submit(event) {

    event.preventDefault();
    this.formSubmitted = true;
    let submissiondate
    let statementdate

    // let closingbalid = (document.getElementById("DebtorsClosingBalance") as HTMLInputElement).value;

    // this.angForm.patchValue({
    //   CLOSE_BAL: closingbalid,

    // });



    if (this.angForm.valid) {

      const formVal = this.angForm.value;
      //get bank code and branch code from session
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;

      const dataToSend = {
        AC_TYPE: this.scheme,
        AC_NO: this.Accountno,
        AC_ACNOTYPE: this.AC_ACNOTYPE,
        BRANCH_CODE: this.branchCode,
        SECU_CODE: this.sec_code,

        SUBMISSION_DATE: (formVal.SUBMISSION_DATE == '' || formVal.SUBMISSION_DATE == 'Invalid date') ? submissiondate = '' : submissiondate = moment(formVal.SUBMISSION_DATE).format('DD/MM/YYYY'),
        // SUBMISSION_DATE: formVal.SUBMISSION_DATE,
        STATEMENT_DATE: (formVal.STATEMENT_DATE == '' || formVal.STATEMENT_DATE == 'Invalid date') ? statementdate = '' : statementdate = moment(formVal.STATEMENT_DATE).format('DD/MM/YYYY'),
        // STATEMENT_DATE: formVal.STATEMENT_DATE,
        DEBTORS_OP_BAL: formVal.DEBTORS_OP_BAL,
        CREDIT_SALE: formVal.CREDIT_SALE,
        RECOVERY: formVal.RECOVERY,
        OVERAGED_DEBTORS: formVal.OVERAGED_DEBTORS,
        CLOSE_BAL: formVal.CLOSE_BAL,
        CRD_OUTSTAND_BAL: formVal.CRD_OUTSTAND_BAL,
        MARGIN: formVal.MARGIN,
        REMARK: formVal.REMARK,
      };

      this._book.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          // to reload after insertion of data
          let info = []
          info.push(data.id)
          info.push("book")


          this.loadTable();
          this.newItemEvent(info);

          // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          //   dtInstance.ajax.reload()
          // });
        },
        (error) => {

        }
      );
      //To clear form
      this.resetForm();
    }


  }
  loadTable(){
   
    let obj = {
      scheme: this.scheme,
      ac_no: this.Accountno,
      acnotype: this.AC_ACNOTYPE,
      branch: this.branchCode
    }
    this._book.getdatatable(obj).pipe(first()).subscribe((data) => {
      this.bookMaster = this.sort_by_key(data, 'SUBMISSION_DATE');
    })
   
  
  }
  
  sort_by_key(array: any, key: any) {
    return array.sort(function (a: any, b: any) {
      let p = moment(a[key], 'DD/MM/YYYY');
      let q = moment(b[key], 'DD/MM/YYYY');
      return (p > q) ? -1 : ((p < q) ? 1 : 0)
    });
  }
  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100

    if (ele <= 100) {

    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
      this.angForm.controls['MARGIN'].reset()
    }
  }

  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let submissiondate
    let statementdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._book.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      this.updateID = data.id;
      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;

      // this.newItemEvent(dropdown.scheme)

      dropdown.account = data.AC_NO;

      // this.newItemEvent(dropdown.account)
      let obj1 = {
        'AccountType': data.AC_TYPE,
        'AccountNo': data.AC_NO,
        'SchemeType': data.AC_ACNOTYPE
      }
      this.newbookEvent.emit(obj1);

      this.scheme = data.AC_TYPE
      this.Accountno = data.AC_NO
      this.angForm.patchValue({
        // AC_TYPE: this.scheme._value[0],
        // AC_NO: this.Accountno,
        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,
        // SUBMISSION_DATE: data.SUBMISSION_DATE,
        'STATEMENT_DATE': (data.STATEMENT_DATE == 'Invalid date' || data.STATEMENT_DATE == '' || data.STATEMENT_DATE == null) ? statementdate = '' : statementdate = data.STATEMENT_DATE,
        // STATEMENT_DATE: data.STATEMENT_DATE,
        DEBTORS_OP_BAL: data.DEBTORS_OP_BAL,
        CREDIT_SALE: data.CREDIT_SALE,
        RECOVERY: data.RECOVERY,
        OVERAGED_DEBTORS: data.OVERAGED_DEBTORS,
        CLOSE_BAL: data.CLOSE_BAL,
        CRD_OUTSTAND_BAL: data.CRD_OUTSTAND_BAL,
        MARGIN: data.MARGIN,
        REMARK: data.REMARK,
      });
    });
  }

  updateData() {
    let submissiondate
    let statementdate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data["AC_TYPE"] = this.scheme
    data["AC_NO"] = this.Accountno
    if (this.updatecheckdata.SUBMISSION_DATE != data.SUBMISSION_DATE) {
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.STATEMENT_DATE != data.STATEMENT_DATE) {
      (data.STATEMENT_DATE == 'Invalid date' || data.STATEMENT_DATE == '' || data.STATEMENT_DATE == null) ? (submissiondate = '', data['STATEMENT_DATE'] = statementdate) : (statementdate = data.STATEMENT_DATE, data['STATEMENT_DATE'] = moment(statementdate).format('DD/MM/YYYY'))
    }
    this._book.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      // this.rerender();
      this.resetForm();
    });
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //function for delete button clicked
  delClickHandler(id: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete Book Debts  data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._book.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }
  ngAfterViewInit(): void {
    // this.myInputField.nativeElement.focus();//for autofocus
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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
  // Reset Function
  resetForm() {
    this.createForm();
    let obj1 = {
      'AccountType': null,
      'AccountNo': null,
      // 'SchemeType':null
    }
    this.newbookEvent.emit(obj1);
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  calculateopening() {


    let opbal = Number(this.angForm.controls['DEBTORS_OP_BAL'].value);
    let credit = Number(this.angForm.controls['CREDIT_SALE'].value)
    let recovery = Number(this.angForm.controls['RECOVERY'].value);
    let debt = Number(this.angForm.controls['OVERAGED_DEBTORS'].value)

    if (opbal != 0) {
      let balance
      balance = opbal + credit - recovery - debt
      this.angForm.patchValue({
        CLOSE_BAL: balance
      })
    }
  }

  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  

}
