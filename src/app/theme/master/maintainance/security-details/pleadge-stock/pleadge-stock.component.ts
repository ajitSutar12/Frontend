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
 //passing data form child to parent
 @Output() newItemEvent = new EventEmitter<string>();

  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
  //api
  url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number; //variable for updating
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
    private _pleadge: pleadgestockService
  ) {}

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: "full_numbers",
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;

        dataTableParameters.columns.forEach((element) => {
          if (element.search.value != "") {
            let string = element.search.value;
            this.filterData[element.data] = string;
          } else {
            let getColumnName = element.data;
            let columnValue = element.value;
            if (this.filterData.hasOwnProperty(element.data)) {
              let value = this.filterData[getColumnName];
              if (columnValue != undefined || value != undefined) {
                delete this.filterData[element.data];
              }
            }
          }
        });
        dataTableParameters["filterData"] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + "/pleadge-stock",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.pleadgeMaster = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          title: "Submission Date",
          data: "SUBMISSION_DATE",
        },
        {
          title: "Storage Memo No.",
          data: "STORAGE_MEMO_NO",
        },
        {
          title: "Storage Date.",
          data: "STORAGE_DATE",
        },
        {
          title: "Goods Qty",
          data: "GOODS_QTY",
        },
        {
          title: "Manufacturer/Mill",
          data: "MANUF_MILL",
        },
        {
          title: "Description",
          data: "DISCRIPTION",
        },
        {
          title: "Bal. Quantity",
          data: "BALANCE_QTY",
        },
        {
          title: "Rate",
          data: "RATE",
        },
        {
          title: "Value",
          data: "VALUE",
        },
        {
          title: "Margin %",
          data: "MARGIN",
        },
        {
          title: "Remarks",
          data: "REMARK",
        },
      ],
      dom: "Blrtip",
    };
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

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      AC_TYPE: this.scheme._value[0],
      AC_NO: this.Accountno,
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      STORAGE_MEMO_NO: formVal.STORAGE_MEMO_NO,
      STORAGE_DATE: formVal.STORAGE_DATE,
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
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        this.rerender();
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.resetForm();
  }
 //check  if margin values are below 100
 checkmargin(ele:any){ 
  //check  if given value  is below 100
  console.log(ele);
  if(ele <= 100){
console.log(ele);
  }
  else{
    Swal.fire("Invalid Input", "Please insert values below 100", "error");
  }
}
  //function for edit button clicked
  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._pleadge.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
       //sending values to parent
       let dropdown: any = {};
       dropdown.scheme = data.AC_TYPE;
       dropdown.account = data.AC_NO.toString();
       this.newItemEvent.emit(dropdown),
 
      this.angForm.patchValue({
        AC_TYPE: this.scheme._value[0],
        AC_NO: this.Accountno,
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        STORAGE_MEMO_NO: data.STORAGE_MEMO_NO,
        STORAGE_DATE: data.STORAGE_DATE,
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
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._pleadge.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    });
  }
  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();//for autofocus
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $("input", this.footer()).on("keyup change", function () {
          if (this["value"] != "") {
            that.search(this["value"]).draw();
          } else {
            that.search(this["value"]).draw();
          }
        });
      });
    });
  }
  // Reset Function
  resetForm() {
    this.createForm();
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
}
