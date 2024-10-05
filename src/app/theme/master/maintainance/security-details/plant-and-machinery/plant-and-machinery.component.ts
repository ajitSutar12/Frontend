import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild, Input, Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
import { first } from "rxjs/operators";

// Used to Call API
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { plantmachineryService } from "./plant-and-machinery.service";

// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { environment } from "src/environments/environment";
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
interface PlantMaster {
  id: number;
  AC_ACNOTYPE: string;
  AC_TYPE: number;
  SUBMISSION_DATE: Date;
  MACHINE_NAME: string;
  MACHINE_TYPE: string;
  DISTINCTIVE_NO: string;
  SPECIFICATION: string;
  AQUISITION_DATE: Date;
  NEW_EQUIPEMENT: number;
  SUPPLIER_NAME: string;
  PURCHASE_PRICE: number;
  MARGIN: number;
  REMARK: string;
}
@Component({
  selector: "app-plant-and-machinery",
  templateUrl: "./plant-and-machinery.component.html",
  styleUrls: ["./plant-and-machinery.component.scss"],
})
export class PlantAndMachineryComponent
  implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //passing data form child to parent
  @Output() newPlantandMachiEvent = new EventEmitter<any>();
  datemax: string;
  newbtnShow: boolean;
  logDate: any;
  newItemEvent(value) {
    this.newPlantandMachiEvent.emit(value);
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
  isnew_equip: boolean = false;

  updateID: number; //variable for updating

  // for date 
  submissiondate: any = null
  acquisitiondate: any = null
  maxDate: any;
  minDate: Date;


  // Store data from backend
  plantmasters: PlantMaster[];
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
    private _plant: plantmachineryService,
    private http: HttpClient,private systemParameter: SystemMasterParametersService,
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
    // Fetching Server side data
    console.log(this.scheme, this.Accountno, this.AC_ACNOTYPE)
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'ftip'
    }

    this.loadTable();
    this.dtTrigger.next();

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
    //         this.url + "/plant-and-machinery",
    //         dataTableParameters
    //       )
    //       .subscribe((resp) => {
    //         this.plantmasters = resp.data;
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
    //       title: "Machinery Name",
    //       data: "MACHINE_NAME",
    //     },
    //     {
    //       title: "Machinery Type",
    //       data: "MACHINE_TYPE",
    //     },
    //     {
    //       title: "Distinctive Number",
    //       data: "DISTINCTIVE_NO",
    //     },
    //     {
    //       title: "Specification",
    //       data: "SPECIFICATION",
    //     },
    //     {
    //       title: "Acquisition Date",
    //       data: "AQUISITION_DATE",
    //     },
    //     {
    //       title: "New Equipment",
    //       data: "NEW_EQUIPEMENT",
    //     },
    //     {
    //       title: "Supplier Name",
    //       data: "SUPPLIER_NAME",
    //     },
    //     {
    //       title: "Purchase Price",
    //       data: "PURCHASE_PRICE",
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
      MACHINE_NAME: ["", [Validators.pattern, Validators.required]],
      MACHINE_TYPE: ["", [Validators.pattern, Validators.required]],
      DISTINCTIVE_NO: ["", [Validators.pattern, Validators.required]],
      SPECIFICATION: ["", [Validators.pattern]],
      AQUISITION_DATE: [""],
      NEW_EQUIPEMENT: ["", [Validators.pattern, Validators.required]],
      SUPPLIER_NAME: ["", [Validators.pattern, Validators.required]],
      PURCHASE_PRICE: ["", [Validators.pattern]],
      MARGIN: ["", [Validators.pattern]],
      REMARK: ["", [Validators.pattern]],
    });
  }

  submit(event) {
    let submissiondate
    let acquisitiondate
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

        MACHINE_NAME: formVal.MACHINE_NAME,
        MACHINE_TYPE: formVal.MACHINE_TYPE,
        DISTINCTIVE_NO: formVal.DISTINCTIVE_NO,
        SPECIFICATION: formVal.SPECIFICATION,
        'AQUISITION_DATE': (formVal.AQUISITION_DATE == '' || formVal.AQUISITION_DATE == 'Invalid date') ? acquisitiondate = '' : acquisitiondate = moment(formVal.AQUISITION_DATE).format('DD/MM/YYYY'),

        NEW_EQUIPEMENT: (formVal.NEW_EQUIPEMENT == true ? '1' : '0'),
        SUPPLIER_NAME: formVal.SUPPLIER_NAME,
        PURCHASE_PRICE: formVal.PURCHASE_PRICE,
        MARGIN: formVal.MARGIN,
        REMARK: formVal.REMARK,
      };
      this._plant.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          let info = []
          info.push(data.id)
          info.push("plantMachinary")


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
    this._plant.getdatatable(obj).pipe(first()).subscribe((data) => {
      this.plantmasters = this.sort_by_key(data, 'SUBMISSION_DATE');
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
    let acquisitiondate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._plant.getFormData(id).subscribe((data) => {
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
      this.newPlantandMachiEvent.emit(obj1);
      this.updateID = data.id;

      this.scheme = data.AC_TYPE
      this.Accountno = data.AC_NO
      this.angForm.patchValue({


        AC_ACNOTYPE: data.AC_ACNOTYPE,
        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,

        MACHINE_NAME: data.MACHINE_NAME,
        MACHINE_TYPE: data.MACHINE_TYPE,
        DISTINCTIVE_NO: data.DISTINCTIVE_NO,
        SPECIFICATION: data.SPECIFICATION,
        'AQUISITION_DATE': (data.AQUISITION_DATE == 'Invalid date' || data.AQUISITION_DATE == '' || data.AQUISITION_DATE == null) ? acquisitiondate = '' : acquisitiondate = data.AQUISITION_DATE,

        NEW_EQUIPEMENT: (data.NEW_EQUIPEMENT == '1' ? true : false),
        SUPPLIER_NAME: data.SUPPLIER_NAME,
        PURCHASE_PRICE: data.PURCHASE_PRICE,
        MARGIN: data.MARGIN,
        REMARK: data.REMARK,
      });
    });
  }

  updateData() {
    let submissiondate
    let acquisitiondate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data["AC_TYPE"] = this.scheme
    data["AC_NO"] = this.Accountno
    data['NEW_EQUIPEMENT']= (data.NEW_EQUIPEMENT == true ? '1' : '0')
    if (this.updatecheckdata.SUBMISSION_DATE != data.SUBMISSION_DATE) {
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.AQUISITION_DATE != data.AQUISITION_DATE) {
      (data.AQUISITION_DATE == 'Invalid date' || data.AQUISITION_DATE == '' || data.AQUISITION_DATE == null) ? (submissiondate = '', data['AQUISITION_DATE'] = acquisitiondate) : (acquisitiondate = data.AQUISITION_DATE, data['AQUISITION_DATE'] = moment(acquisitiondate).format('DD/MM/YYYY'))
    }

    this._plant.updateData(data).subscribe(() => {
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
      text: "Do you want to delete Plant and Machinery data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._plant.deleteData(id).subscribe((data1) => {
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
    this.newPlantandMachiEvent.emit(obj1);
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
