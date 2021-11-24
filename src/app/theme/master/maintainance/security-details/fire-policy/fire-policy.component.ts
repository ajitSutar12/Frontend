import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,Input,
  Output,
EventEmitter,
} from "@angular/core";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { firepolicycomponentservice } from "./fire-policy.component.service";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { environment } from "src/environments/environment";

import { Subject } from "rxjs";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface FireMaster {
  id:number;
    AC_ACNOTYPE:string;
    AC_TYPE:number;
    AC_NO:number;
  SUBMISSION_DATE: Date;
  POLICY_DUE_DATE: Date;
  POLICY_NO: string;
  POLICY_AMT: number;
  POLICY_NATURE: string;
  INSU_CO_CODE: number;
  ADDRESS: string;
  CITY: string;
  PREMIUM: number;
  PREMIUM_DUE_DATE: Date;
  SECURITY_TYPE:string;
}
@Component({
  selector: "app-fire-policy",
  templateUrl: "./fire-policy.component.html",
  styleUrls: ["./fire-policy.component.scss"],
})
export class FirePolicyComponent implements OnInit, AfterViewInit, OnDestroy {
  //passing data form child to parent
  @Output() newItemEvent = new EventEmitter<string>();
   //passing data from parent to child component
   @Input() scheme:any;
   @Input() Accountno:any;
 //api
 url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number;
  firemaster: FireMaster[];
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData= {};
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _fire: firepolicycomponentservice
  ) {
    this.createForm();
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
            this.url + "/fire-policy",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.firemaster = resp.data;
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
          title: "Policy Due Date",
          data: "POLICY_DUE_DATE",
        },
        {
          title: "Policy No.",
          data: "POLICY_NO",
        },
        {
          title: "Policy Amount",
          data: "POLICY_AMT",
        },
        {
          title: "Policy Nature",
          data: "POLICY_NATURE",
        },
        {
          title: "Insurance Code",
          data: "INSU_CO_CODE",
        },
        {
          title: "Address",
          data: "ADDRESS",
        },
        {
          title: "City",
          data: "CITY",
        },
        {
          title: "Premium Amount",
          data: "PREMIUM",
        },
        {
          title: "Premium Due Date",
          data: "PREMIUM_DUE_DATE",
        },
      ],
      dom: "Blrtip",
      
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      SUBMISSION_DATE: ["", [Validators.required]],
      POLICY_DUE_DATE: ["", [Validators.required]],
      POLICY_NO: ["", [Validators.pattern, Validators.required]],
      POLICY_AMT: ["", [Validators.pattern, Validators.required]],
      POLICY_NATURE: ["", [Validators.pattern, Validators.required]],
      INSU_CO_CODE: ["", [Validators.pattern, Validators.required]],
      CITY: ["", [Validators.pattern, Validators.required]],
      PREMIUM: ["", [Validators.pattern, Validators.required]],
      PREMIUM_DUE_DATE: ["", [Validators.required]],
      ADDRESS: ["", [Validators.pattern]],
    });
  }

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      AC_TYPE:this.scheme._value[0],
      AC_NO:this.Accountno,
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      POLICY_DUE_DATE: formVal.POLICY_DUE_DATE,
      POLICY_NO: formVal.POLICY_NO,
      POLICY_AMT: formVal.POLICY_AMT,
      POLICY_NATURE: formVal.POLICY_NATURE,
      INSU_CO_CODE: formVal.INSU_CO_CODE,
      CITY: formVal.CITY,
      PREMIUM: formVal.PREMIUM,
      PREMIUM_DUE_DATE: formVal.PREMIUM_DUE_DATE,
      ADDRESS: formVal.ADDRESS,
    };
    this._fire.postData(dataToSend).subscribe(
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

  //function for edit button clicked
  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._fire.getFormData(id).subscribe((data) => {
           //sending values to parent
           let dropdown: any = {};
           dropdown.scheme = data.AC_TYPE;
           dropdown.account = data.AC_NO.toString();
           this.newItemEvent.emit(dropdown),

      this.updateID = data.id;
      this.angForm.patchValue({
        AC_TYPE:this.scheme._value[0],
        AC_NO:this.Accountno,
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        POLICY_DUE_DATE: data.POLICY_DUE_DATE,
        POLICY_NO: data.POLICY_NO,
        POLICY_AMT: data.POLICY_AMT,
        POLICY_NATURE: data.POLICY_NATURE,
        INSU_CO_CODE: data.INSU_CO_CODE,
        CITY: data.CITY,
        PREMIUM: data.PREMIUM,
        PREMIUM_DUE_DATE: data.PREMIUM_DUE_DATE,
        ADDRESS: data.ADDRESS,
      });
    });
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._fire.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    });
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
        this._fire.deleteData(id).subscribe((data1) => {
          this.firemaster = data1;
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
