import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,Input, Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
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
import { VehicleService } from "./vehicle.service";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { environment } from "src/environments/environment";
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
interface VehicleMaster {
  id:number;
  AC_ACNOTYPE:string;
  AC_TYPE:number;
  SUBMISSION_DATE: Date;
  RTO_REG_DATE: Date;
  VEHICLE_MAKE: string;
  MANUFACTURE_YEAR: number;
  VEHICLE_NO: string;
  CHASSIS_NO: string;
  AQUISITION_DATE: Date;
  NEW_VEHICLE: number;
  SUPPLIER_NAME: string;
  PURCHASE_PRICE: number;
  MARGIN: number;
  REMARK: string;
}

@Component({
  selector: "app-vehicle",
  templateUrl: "./vehicle.component.html",
  styleUrls: ["./vehicle.component.scss"],
})
export class VehicleComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
   //passing data form child to parent
   @Output() newVehicalEvent = new EventEmitter<any>();
  datemax: string;
  newbtnShow: boolean;
   newItemEvent(value) {
     this.newVehicalEvent.emit(value);
   }
  //passing data from parent to child component
   @Input() scheme:any;
   @Input() Accountno:any;
   @Input() AC_ACNOTYPE: any;
   //api
  //api
  url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  isnew_equip: boolean = false;
  new_article:boolean;

 // for date 
 submissiondate:any=null
 rtoregdate:any=null
 acquisitiondate:any=null
 maxDate: Date;
 minDate: Date;

  updateID: number; //variable for updating
  // Store data from backend
  vehiclemasters: VehicleMaster[];
  
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData={};
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _vehicle: VehicleService,
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
            this.url + "/vehicle",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.vehiclemasters = resp.data;
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
          title: "RTO Registration Date",
          data: "RTO_REG_DATE",
        },
        {
          title: "Vehicle Make.",
          data: "VEHICLE_MAKE",
        },
        {
          title: "Year of Manufacture",
          data: "MANUFACTURE_YEAR",
        },
        {
          title: "Vehicle No.",
          data: "VEHICLE_NO",
        },
        {
          title: "Chassis No",
          data: "CHASSIS_NO",
        },
        {
          title: "Date of Acquisition",
          data: "AQUISITION_DATE",
        },
        {
          title: "New Vehicle",
          data: "NEW_VEHICLE",
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
      RTO_REG_DATE: ["", [Validators.required]],
      VEHICLE_MAKE: ["", [Validators.pattern, Validators.required]],
      MANUFACTURE_YEAR: ["", [Validators.pattern, Validators.required]],
      VEHICLE_NO: ["", [Validators.pattern, Validators.required]],
      CHASSIS_NO: ["", [Validators.pattern]],
      AQUISITION_DATE: [""],
      NEW_VEHICLE: [""],
      SUPPLIER_NAME: ["", [Validators.pattern]],
      PURCHASE_PRICE: ["", [Validators.pattern, Validators.required]],
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
      console.log(this.angForm.value); // Process your form
      const formVal = this.angForm.value;
    const dataToSend = {
      AC_TYPE: this.scheme,
      AC_NO: this.Accountno,
      AC_ACNOTYPE: this.AC_ACNOTYPE,
      'SUBMISSION_DATE': (formVal.SUBMISSION_DATE == '' || formVal.SUBMISSION_DATE == 'Invalid date') ? submissiondate = '' : submissiondate = moment(formVal.SUBMISSION_DATE).format('DD/MM/YYYY'),
      
      RTO_REG_DATE: formVal.RTO_REG_DATE,
      VEHICLE_MAKE: formVal.VEHICLE_MAKE,
      MANUFACTURE_YEAR: formVal.MANUFACTURE_YEAR,
      VEHICLE_NO: formVal.VEHICLE_NO,
      CHASSIS_NO: formVal.CHASSIS_NO,
      'AQUISITION_DATE': (formVal.AQUISITION_DATE == '' || formVal.AQUISITION_DATE == 'Invalid date') ? acquisitiondate = '' : acquisitiondate = moment(formVal.AQUISITION_DATE).format('DD/MM/YYYY'),
     
      NEW_VEHICLE: formVal.NEW_VEHICLE,
      SUPPLIER_NAME: formVal.SUPPLIER_NAME,
      PURCHASE_PRICE: formVal.PURCHASE_PRICE,
      MARGIN: formVal.MARGIN,
      REMARK: formVal.REMARK,
    };
    console.log(dataToSend);
    this._vehicle.postData(dataToSend).subscribe(
      (data) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        this.formSubmitted = false;
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
  updatecheckdata:any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let submissiondate
    let acquisitiondate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._vehicle.getFormData(id).subscribe((data) => {
      this.updatecheckdata=data
      

      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;
     
      
      dropdown.account = data.AC_NO;
     
      let obj1 = {
        'AccountType' :data.AC_TYPE,
        'AccountNo': data.AC_NO,
        'SchemeType':data.AC_ACNOTYPE
      }
      this.newVehicalEvent.emit(obj1);
      this.updateID = data.id;

      this.scheme=data.AC_TYPE
      this.Accountno=data.AC_NO
      this.angForm.patchValue({
       
        AC_ACNOTYPE: data.AC_ACNOTYPE,
        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,
       
        RTO_REG_DATE: data.RTO_REG_DATE,
        VEHICLE_MAKE: data.VEHICLE_MAKE,
        MANUFACTURE_YEAR: data.MANUFACTURE_YEAR,
        VEHICLE_NO: data.VEHICLE_NO,
        CHASSIS_NO: data.CHASSIS_NO,
        'AQUISITION_DATE': (data.AQUISITION_DATE == 'Invalid date' || data.AQUISITION_DATE == '' || data.AQUISITION_DATE == null) ? acquisitiondate = '' : acquisitiondate = data.AQUISITION_DATE,
        
        NEW_VEHICLE: data.NEW_VEHICLE,
        SUPPLIER_NAME: data.SUPPLIER_NAME,
        PURCHASE_PRICE: data.PURCHASE_PRICE,
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


  updateData() {
    let submissiondate
    let acquisitiondate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data["AC_TYPE"]=this.scheme
    data["AC_NO"]=this.Accountno
    if(this.updatecheckdata.SUBMISSION_DATE!=data.SUBMISSION_DATE){
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
      }
      if(this.updatecheckdata.AQUISITION_DATE!=data.AQUISITION_DATE){
        (data.AQUISITION_DATE == 'Invalid date' || data.AQUISITION_DATE == '' || data.AQUISITION_DATE == null) ? (acquisitiondate = '', data['AQUISITION_DATE'] = acquisitiondate) : (acquisitiondate = data.AQUISITION_DATE, data['AQUISITION_DATE'] = moment(acquisitiondate).format('DD/MM/YYYY'))
        }
    this._vehicle.updateData(data).subscribe(() => {
      console.log(data);
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
      });
      
      this.resetForm();
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
          this._vehicle.deleteData(id).subscribe((data1) => {
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
      'AccountType' : null,
      'AccountNo': null,
     
    }
    this.newVehicalEvent.emit(obj1);
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
