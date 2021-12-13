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
// Used to Call API
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { othersecuritycomponentservice } from "./other-security.component.service";
import { Subject } from "rxjs";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface SecurityMaster {
  id: number;
  AC_ACNOTYPE: string;
  AC_TYPE: number;
  SUBMISSION_DATE: Date;
  SHORT_DETAILS: string;
  TOTAL_VALUE: number;
  MARGIN: number;
  DETAILS: string;
}
@Component({
  selector: "app-other-security",
  templateUrl: "./other-security.component.html",
  styleUrls: ["./other-security.component.scss"],
})
export class OtherSecurityComponent
  implements OnInit, AfterViewInit, OnDestroy {
  //passing data form child to parent
  @Output() newOtherSecurityEvent = new EventEmitter<string>();
  datemax: string;
  newbtnShow: boolean;
  newItemEvent(value) {
    this.newOtherSecurityEvent.emit(value);
  }
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
  securitymasters: SecurityMaster[];

  //for autofocus
  @ViewChild("autofocus") myInputField: ElementRef;  //input field autofocus

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  filterData = {};
  page: number;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _security: othersecuritycomponentservice,
    public router: Router
  ) {
    this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
    console.log(this.datemax);

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
            this.url + "/other-security",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.securitymasters = resp.data;
            console.log("fetch", this.securitymasters);
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
          title: "Date of Submission",
          data: "subm_date",
        },
        {
          title: "Short Details",
          data: "short_details",
        },
        {
          title: "Total Valuet",
          data: "total_value",
        },
        {
          title: "Margin %",
          data: "margin",
        },
        {
          title: "Security Details",
          data: "security_details",
        },
      ],
      dom: "Blrtip",
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: [''],
      AC_NO: [''],
      SUBMISSION_DATE: ["", [Validators.required]],
      SHORT_DETAILS: ["", [Validators.pattern, Validators.required]],
      TOTAL_VALUE: ["", [Validators.pattern, Validators.required]],
      MARGIN: ["", [Validators.pattern]],
      DETAILS: ["", [Validators.pattern, Validators.required]],
    });
  }
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      AC_TYPE: this.scheme._value[0],
      AC_NO: this.Accountno,
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      SHORT_DETAILS: formVal.SHORT_DETAILS,
      TOTAL_VALUE: formVal.TOTAL_VALUE,
      MARGIN: formVal.MARGIN,
      DETAILS: formVal.DETAILS,
    };
    console.log("in submit", dataToSend);
    this._security.postData(dataToSend).subscribe(
      (data) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        let info = []
        info.push(data.id)
        info.push("otherSecurity")

        this.newItemEvent(info);
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

  //function for edit button clicked
  editClickHandler(id: any): void {

    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._security.getFormData(id).subscribe((data) => {
      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;
      dropdown.account = data.AC_NO.toString();

        this.updateID = data.id;
      console.log(this.updateID)
      this.angForm.patchValue({
        AC_TYPE: this.scheme._value[0],
        AC_NO: this.Accountno,
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        SHORT_DETAILS: data.SHORT_DETAILS,
        TOTAL_VALUE: data.TOTAL_VALUE,
        MARGIN: data.MARGIN,
        DETAILS: data.DETAILS,
      });
    });
  }
  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100
    console.log(ele);
    if (ele <= 100) {
      console.log(ele);
    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._security.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
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
  delClickHandler(info: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete Date of Submission data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }
  ngAfterViewInit(): void {

    this.myInputField.nativeElement.focus();//autofocus
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
