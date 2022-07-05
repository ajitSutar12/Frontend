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
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
// Service File For Handling CRUD Operation
import { furnitureandfixtureservice } from "./furniture-and-fixture.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../../environments/environment";
import { Router } from "@angular/router";
import * as moment from 'moment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface FurnitureMaster {
  id: number;
  AC_ACNOTYPE: string;
  AC_TYPE: number;
  SUBMISSION_DATE: Date;
  ARTICLE_NAME: string;
  ARTICLE_MAKE: string;
  AQUISITION_DATE: Date;
  NEW_ARTICLE: boolean;
  SUPPLIER_NAME: string;
  PURCHASE_PRICE: number;
  MARGIN: number;
  REMARK: string;
}

@Component({
  selector: "app-furniture-and-fixture",
  templateUrl: "./furniture-and-fixture.component.html",
  styleUrls: ["./furniture-and-fixture.component.scss"],
})
export class FurnitureAndFixtureComponent
  implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //passing data form child to parent
  @Output() newfurnitureFixEvent = new EventEmitter<any>();
  datemax: any;
  newbtnShow: boolean;
  newItemEvent(value) {
    this.newfurnitureFixEvent.emit(value);
  }
  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
  @Input() AC_ACNOTYPE: any;
  //api
  url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  new_article: boolean = false;
  page: number;
  filterData = {};
  updateID: number; //variable for updating

  // for date 
  submissiondate: any = null
  acquistitiondate: any = null
  maxDate: Date;
  minDate: Date;


  // Store data from backend
  furnituremasters: FurnitureMaster[];
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _furniture: furnitureandfixtureservice,
    public router: Router
  ) {

    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

  }

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
            this.url + "/furniture-and-fixture",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.furnituremasters = resp.data;
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
          title: "Article Name",
          data: "ARTICLE_NAME",
        },
        {
          title: "Article Make.",
          data: "ARTICLE_MAKE",
        },
        {
          title: "Acquisition Date",
          data: "AQUISITION_DATE",
        },
        {
          title: "New Article",
          data: "NEW_ARTICLE",
        },
        {
          title: "Supplier Name",
          data: "SUPPLIER_NAME",
        },
        {
          title: "Purchase Price",
          data: "PURCHASE_PRICE",
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
      ARTICLE_NAME: ["", [Validators.pattern, Validators.required]],
      ARTICLE_MAKE: ["", [Validators.pattern, Validators.required]],
      AQUISITION_DATE: ["", [Validators.required]],
      NEW_ARTICLE: ["", [Validators.pattern]],
      SUPPLIER_NAME: ["", [Validators.pattern]],
      PURCHASE_PRICE: ["", [Validators.pattern]],
      MARGIN: ["", [Validators.pattern]],
      REMARK: ["", [Validators.pattern]],
    });
  }

  submit(event) {
    let submissiondate
    let acquistitiondate
    event.preventDefault();
    this.formSubmitted = true;

    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      const dataToSend = {
        AC_TYPE: this.scheme,
        AC_NO: this.Accountno,
        AC_ACNOTYPE: this.AC_ACNOTYPE,
        'SUBMISSION_DATE': (formVal.SUBMISSION_DATE == '' || formVal.SUBMISSION_DATE == 'Invalid date') ? submissiondate = '' : submissiondate = moment(formVal.SUBMISSION_DATE).format('DD/MM/YYYY'),

        ARTICLE_NAME: formVal.ARTICLE_NAME,
        ARTICLE_MAKE: formVal.ARTICLE_MAKE,
        'AQUISITION_DATE': (formVal.AQUISITION_DATE == '' || formVal.AQUISITION_DATE == 'Invalid date') ? acquistitiondate = '' : acquistitiondate = moment(formVal.AQUISITION_DATE).format('DD/MM/YYYY'),

        NEW_ARTICLE: (formVal.NEW_ARTICLE == true ? '1' : '0'),
        SUPPLIER_NAME: formVal.SUPPLIER_NAME,
        PURCHASE_PRICE: formVal.PURCHASE_PRICE,
        MARGIN: formVal.MARGIN,
        REMARK: formVal.REMARK,
      };
      this._furniture.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          let info = []
          info.push(data.id)
          info.push("furniture")
  
          this.newItemEvent(info);
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });
        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
    }

  }

  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100

    if (ele <= 100) {

    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }

  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let submissiondate
    let acquistitiondate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._furniture.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;
      dropdown.account = data.AC_NO;
      let obj1 = {
        'AccountType': data.AC_TYPE,
        'AccountNo': data.AC_NO,
        'SchemeType': data.AC_ACNOTYPE
      }
      this.newfurnitureFixEvent.emit(obj1);

      this.updateID = data.id;
      this.scheme = data.AC_TYPE
      this.Accountno = data.AC_NO
      this.angForm.patchValue({

        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,
        ARTICLE_NAME: data.ARTICLE_NAME,
        ARTICLE_MAKE: data.ARTICLE_MAKE,
        'AQUISITION_DATE': (data.AQUISITION_DATE == 'Invalid date' || data.AQUISITION_DATE == '' || data.AQUISITION_DATE == null) ? acquistitiondate = '' : acquistitiondate = data.AQUISITION_DATE,
        NEW_ARTICLE: (data.NEW_ARTICLE == '1' ? true : false),
        SUPPLIER_NAME: data.SUPPLIER_NAME,
        PURCHASE_PRICE: data.PURCHASE_PRICE,
        MARGIN: data.MARGIN,
        REMARK: data.REMARK,
      });
    });
  }

  updateData() {
    let submissiondate
    let acquistitiondate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data['NEW_ARTICLE'] = (data.NEW_ARTICLE == true ? '1' : '0'),
      data["AC_TYPE"] = this.scheme
    data["AC_NO"] = this.Accountno
    if (this.updatecheckdata.SUBMISSION_DATE != data.SUBMISSION_DATE) {
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.AQUISITION_DATE != data.AQUISITION_DATE) {
      (data.AQUISITION_DATE == 'Invalid date' || data.AQUISITION_DATE == '' || data.AQUISITION_DATE == null) ? (acquistitiondate = '', data['AQUISITION_DATE'] = acquistitiondate) : (acquistitiondate = data.AQUISITION_DATE, data['AQUISITION_DATE'] = moment(acquistitiondate).format('DD/MM/YYYY'))
    }
    this._furniture.updateData(data).subscribe(() => {
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
      text: "Do you want to delete Submission Date data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._furniture.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
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
    this.newfurnitureFixEvent.emit(obj1);
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
