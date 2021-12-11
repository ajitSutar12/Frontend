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
import { governmentsecuritycomponentservice } from "../govt-security-and-lic/govt-security-and-lic.component.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../../environments/environment";
import { Router } from "@angular/router";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface GovernmentMaster {
  id: number;
  AC_ACNOTYPE: string;
  AC_TYPE: number;
  AC_NO: number;
  SECU_CODE: number;
  SUBMISSION_DATE: Date;
  CERT_POLICY_DATE: Date;
  CERT_POLICY_NO: string;
  MARGIN: number;
  ASSURED_NAME: string;
  PAIDUP_AMT: number;
  SUM_ASSURED: number;
  PREMIUM: number;
  SURRENDER_VALUE: number;
  PREMIUM_DUE_DATE: Date;
  MATURE_DUE_DATE: Date;
  NOMINEE: string;
  REMARK: string;
}
@Component({
  selector: "app-govt-security-and-lic",
  templateUrl: "./govt-security-and-lic.component.html",
  styleUrls: ["./govt-security-and-lic.component.scss"],
})
export class GovtSecurityAndLicComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  //passing data form child to parent
  @Output() newgovtSecurityEvent = new EventEmitter<string>();
  newItemEvent(value) {
    this.newgovtSecurityEvent.emit(value);
  }
  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
  //api
  url = environment.base_url;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  governmentmasters: GovernmentMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = "start";
  active = 1;
  activeKeep = 1;
  // Variables for search
  filterObject: { name: string; type: string }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};
  setdate: string;
resetmaturedate:any;//reset maturedue date
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _govsecurity: governmentsecuritycomponentservice,
    public router: Router
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
            this.url + "/govt-security-and-lic",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.governmentmasters = resp.data;
            console.log(resp);
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
          title: "Cert/Policy Date",
          data: "CERT_POLICY_DATE",
        },
        {
          title: "Cert/Policy No.",
          data: "CERT_POLICY_NO",
        },
        {
          title: "Margin %",
          data: "MARGIN",
        },
        {
          title: "Assured Name",
          data: "ASSURED_NAME",
        },
        {
          title: "Paid Up Amount",
          data: "PAIDUP_AMT",
        },
        {
          title: "Sum of Assured",
          data: "SUM_ASSURED",
        },
        {
          title: "Premium Amount",
          data: "PREMIUM",
        },
        {
          title: "Surrender Value",
          data: "SURRENDER_VALUE",
        },
        {
          title: "Premium Due Date",
          data: "PREMIUM_DUE_DATE",
        },
        {
          title: "Matured Due Date",
          data: "MATURE_DUE_DATE",
        },
        {
          title: "Nominee",
          data: "NOMINEE",
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
      CERT_POLICY_DATE: ["", [Validators.required]],
      CERT_POLICY_NO: ["", [Validators.pattern, Validators.required]],
      MARGIN: ["", [Validators.pattern, Validators.required]],
      ASSURED_NAME: ["", [Validators.pattern]],
      PAIDUP_AMT: ["", [Validators.pattern]],
      SUM_ASSURED: ["", [Validators.pattern, Validators.required]],
      PREMIUM: ["", [Validators.pattern, Validators.required]],
      SURRENDER_VALUE: ["", Validators.pattern],
      PREMIUM_DUE_DATE: ["", Validators.required],
      MATURE_DUE_DATE: ["", Validators.required],
      NOMINEE: ["", Validators.pattern],
      REMARK: ["", Validators.pattern],
    });
  }

  submit(data: any) {
    const formVal = this.angForm.value;
    const dataToSend = {
      AC_TYPE: this.scheme._value[0],
      AC_NO: this.Accountno,
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      CERT_POLICY_DATE: formVal.CERT_POLICY_DATE,
      CERT_POLICY_NO: formVal.CERT_POLICY_NO,
      MARGIN: formVal.MARGIN,
      ASSURED_NAME: formVal.ASSURED_NAME,
      PAIDUP_AMT: formVal.PAIDUP_AMT,
      SUM_ASSURED: formVal.SUM_ASSURED,
      PREMIUM: formVal.PREMIUM,
      SURRENDER_VALUE: formVal.SURRENDER_VALUE,
      PREMIUM_DUE_DATE: formVal.PREMIUM_DUE_DATE,
      MATURE_DUE_DATE: formVal.MATURE_DUE_DATE,
      NOMINEE: formVal.NOMINEE,
      REMARK: formVal.REMARK,
    };
    console.log("govt send:", dataToSend);
    this._govsecurity.postData(dataToSend).subscribe(
      (data) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");

        let info = []
        info.push(data.id)
        info.push("govSecurity")

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
    this._govsecurity.getFormData(id).subscribe((data) => {
      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;
      dropdown.account = data.AC_NO.toString();
       (this.updateID = data.id);
      this.angForm.patchValue({
        AC_TYPE: this.scheme._value[0],
        AC_NO: this.Accountno,
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        CERT_POLICY_DATE: data.CERT_POLICY_DATE,
        CERT_POLICY_NO: data.CERT_POLICY_NO,
        MARGIN: data.MARGIN,
        ASSURED_NAME: data.ASSURED_NAME,
        PAIDUP_AMT: data.PAIDUP_AMT,
        SUM_ASSURED: data.SUM_ASSURED,
        PREMIUM: data.PREMIUM,
        SURRENDER_VALUE: data.SURRENDER_VALUE,
        PREMIUM_DUE_DATE: data.PREMIUM_DUE_DATE,
        MATURE_DUE_DATE: data.MATURE_DUE_DATE,
        NOMINEE: data.NOMINEE,
        REMARK: data.REMARK,
      });
    });
  }

  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100
    console.log(ele);
    if (ele <= 100) {
      console.log(ele);
    } else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._govsecurity.updateData(data).subscribe(() => {
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
      text: "Do you want to delete Submission Date  data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._govsecurity.deleteData(id).subscribe((data1) => {
          this.governmentmasters = data1;
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }
  //for checking dates
  checkdate(data: any) { 
    // debugger
    // console.log(data.value);
    //fetch premium due date value
    let premium = document.getElementById(
      "PREMIUM_DUE_DATE"
    ) as HTMLInputElement;
    let mature = document.getElementById("maturity") as HTMLInputElement;
    this.setdate = premium.value;

    if (data != "") {
      // debugger
      if (this.setdate > data) {
        console.log("if condition is true ");
        Swal.fire(
          "Cancelled",
          "Premium Due Date must be less than Mature due date",
          "error"
        );

        this.resetmaturedate= "";
      } else {
        console.log("else condition is true ");
      }
    }
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
