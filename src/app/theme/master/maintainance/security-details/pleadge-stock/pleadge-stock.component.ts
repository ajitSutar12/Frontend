import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
  Output,
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
import { pleadgestockService } from "./pleadge-stock.service";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { environment } from "src/environments/environment";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import * as moment from 'moment';
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface PleadgeMaster {
  id: number;
  AC_TYPE: number;
  AC_ACNOTYPE: string;

  AC_NO: number;
  SUBMISSION_DATE: Date;
  STORAGE_MEMO_NO: number;
  STORAGE_DATE: Date;
  GOODS_QTY: number;
  MANUF_MILL: string;
  DISCRIPTION: string;
  BALANCE_QTY: number;
  RATE: number;
  VALUE: number;
  MARGIN: string;
  REMARK: string;
}
@Component({
  selector: "app-pleadge-stock",
  templateUrl: "./pleadge-stock.component.html",
  styleUrls: ["./pleadge-stock.component.scss"],
})
export class PleadgeStockComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //passing data form child to parent
  @Output() newPleadgeEvent = new EventEmitter<any>();
  datemax: string;
  newbtnShow: boolean;
  logDate: any;
  newItemEvent(value) {
    this.newPleadgeEvent.emit(value);
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
  // for date 
  submissiondate: any = null
  storagedate: any = null
  maxDate: any;
  minDate: Date;


  // Store data from backend
  pleadgeMaster: PleadgeMaster[];
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _pleadge: pleadgestockService,  private systemParameter: SystemMasterParametersService,
    public router: Router
  ) {

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
    this.createForm();

    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'ftip'
    }

   
    this.loadTable();
    this.dtTrigger.next();
    // Fetching Server side data
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
    //     dataTableParameters["filterData"] = this.filterData;
    //     this.http
    //       .post<DataTableResponse>(
    //         this.url + "/pleadge-stock",
    //         dataTableParameters
    //       )
    //       .subscribe((resp) => {
    //         this.pleadgeMaster = resp.data;

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
    //       title: "Storage Memo No.",
    //       data: "STORAGE_MEMO_NO",
    //     },
    //     {
    //       title: "Storage Date.",
    //       data: "STORAGE_DATE",
    //     },
    //     {
    //       title: "Goods Qty",
    //       data: "GOODS_QTY",
    //     },
    //     {
    //       title: "Manufacturer/Mill",
    //       data: "MANUF_MILL",
    //     },
    //     {
    //       title: "Description",
    //       data: "DISCRIPTION",
    //     },
    //     {
    //       title: "Bal. Quantity",
    //       data: "BALANCE_QTY",
    //     },
    //     {
    //       title: "Rate",
    //       data: "RATE",
    //     },
    //     {
    //       title: "Value",
    //       data: "VALUE",
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
      STORAGE_MEMO_NO: ["", [Validators.pattern, Validators.required]],
      STORAGE_DATE: ["", [Validators.required]],
      GOODS_QTY: ["", [Validators.pattern, Validators.required]],
      MANUF_MILL: ["", [Validators.pattern]],
      DISCRIPTION: ["", [Validators.pattern]],
      BALANCE_QTY: ["", [Validators.pattern, Validators.required]],
      RATE: ["", [Validators.pattern]],
      VALUE: ["", [Validators.pattern]],
      MARGIN: ["", [Validators.pattern]],
      REMARK: ["", [Validators.pattern]],
    });
  }

  submit(event) {
    let submissiondate
    let storagedate
    event.preventDefault();
    this.formSubmitted = true;

    if (this.angForm.valid) {

      const formVal = this.angForm.value;
      const dataToSend = {
        AC_TYPE: this.scheme,
        AC_NO: this.Accountno,
        AC_ACNOTYPE: this.AC_ACNOTYPE,
        BRANCH_CODE: this.branchCode,
        SECU_CODE: this.sec_code,
        'SUBMISSION_DATE': (formVal.SUBMISSION_DATE == '' || formVal.SUBMISSION_DATE == 'Invalid date') ? submissiondate = '' : submissiondate = moment(formVal.SUBMISSION_DATE).format('DD/MM/YYYY'),

        STORAGE_MEMO_NO: formVal.STORAGE_MEMO_NO,
        'STORAGE_DATE': (formVal.STORAGE_DATE == '' || formVal.STORAGE_DATE == 'Invalid date') ? storagedate = '' : storagedate = moment(formVal.STORAGE_DATE).format('DD/MM/YYYY'),

        GOODS_QTY: formVal.GOODS_QTY,
        MANUF_MILL: formVal.MANUF_MILL,
        DISCRIPTION: formVal.DISCRIPTION,
        BALANCE_QTY: formVal.BALANCE_QTY,
        RATE: formVal.RATE,
        VALUE: formVal.VALUE,
        MARGIN: formVal.MARGIN,
        REMARK: formVal.REMARK,
      };

      this._pleadge.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          let info = []
          info.push(data.id)
          info.push("pleadge")

          this.loadTable();
          this.newItemEvent(info);
          // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          //   dtInstance.ajax.reload()
          // });
        },
        (error) => {
          console.log(error);
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
    this._pleadge.getdatatable(obj).pipe(first()).subscribe((data) => {
      this.pleadgeMaster = this.sort_by_key(data, 'SUBMISSION_DATE');
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
      this.angForm.controls['MARGIN'].reset()
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }

  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let submissiondate
    let storagedate

    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._pleadge.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      this.updateID = data.id;
      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;
      dropdown.account = data.AC_NO;

      let obj1 = {
        'AccountType': data.AC_TYPE,
        'AccountNo': data.AC_NO,
        'SchemeType': data.AC_ACNOTYPE
      }
      this.newPleadgeEvent.emit(obj1);
      this.scheme = data.AC_TYPE
      this.Accountno = data.AC_NO
      this.angForm.patchValue({

        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,

        STORAGE_MEMO_NO: data.STORAGE_MEMO_NO,
        'STORAGE_DATE': (data.STORAGE_DATE == 'Invalid date' || data.STORAGE_DATE == '' || data.STORAGE_DATE == null) ? storagedate = '' : storagedate = data.STORAGE_DATE,

        GOODS_QTY: data.GOODS_QTY,
        MANUF_MILL: data.MANUF_MILL,
        DISCRIPTION: data.DISCRIPTION,
        BALANCE_QTY: data.BALANCE_QTY,
        RATE: data.RATE,
        VALUE: data.VALUE,
        MARGIN: data.MARGIN,
        REMARK: data.REMARK,
      });
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
      text: "Do you want to delete Submission Date  data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._pleadge.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }

  updateData() {
    let submissiondate
    let storagedate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data["AC_TYPE"] = this.scheme;
    data["AC_NO"] = this.Accountno;
    if (this.updatecheckdata.SUBMISSION_DATE != data.SUBMISSION_DATE) {
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.STORAGE_DATE != data.STORAGE_DATE) {
      (data.STORAGE_DATE == 'Invalid date' || data.STORAGE_DATE == '' || data.STORAGE_DATE == null) ? (storagedate = '', data['STORAGE_DATE'] = storagedate) : (storagedate = data.STORAGE_DATE, data['STORAGE_DATE'] = moment(storagedate).format('DD/MM/YYYY'))
    }
    this._pleadge.updateData(data).subscribe(() => {
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
  ngAfterViewInit(): void {

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
    }
    this.newPleadgeEvent.emit(obj1);
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
