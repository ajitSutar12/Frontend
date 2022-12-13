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
import * as moment from 'moment';
import { first } from "rxjs/operators";

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
  implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;

  //passing data form child to parent
  @Output() newgovtSecurityEvent = new EventEmitter<any>();
  datemax: any;
  newbtnShow: boolean;
  newItemEvent(value) {
    this.newgovtSecurityEvent.emit(value);
  }
  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
  @Input() AC_ACNOTYPE: any;
  @Input() branchCode: any;
  @Input() sec_code: any;

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

  // for date
  submissiondate: any = null
  certicatedate: any = null
  premiumduedate: any = null
  maturityduedate: any = null
  maxDate: Date;
  minDate: Date;

  //filter variable
  filterData = {};
  setdate: string;
  resetmaturedate: any;//reset maturedue date
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _govsecurity: governmentsecuritycomponentservice,
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
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'ftip'
    }

    let obj = {
      scheme: this.scheme,
      ac_no: this.Accountno,
      acnotype: this.AC_ACNOTYPE,
      branch: this.branchCode
    }
    this._govsecurity.getdatatable(obj).pipe(first()).subscribe((data) => {
      this.governmentmasters = data
    })
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
    //         this.url + "/govt-security-and-lic",
    //         dataTableParameters
    //       )
    //       .subscribe((resp) => {
    //         this.governmentmasters = resp.data;

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
    //       title: "Cert/Policy Date",
    //       data: "CERT_POLICY_DATE",
    //     },
    //     {
    //       title: "Cert/Policy No.",
    //       data: "CERT_POLICY_NO",
    //     },
    //     {
    //       title: "Margin %",
    //       data: "MARGIN",
    //     },
    //     {
    //       title: "Assured Name",
    //       data: "ASSURED_NAME",
    //     },
    //     {
    //       title: "Paid Up Amount",
    //       data: "PAIDUP_AMT",
    //     },
    //     {
    //       title: "Sum of Assured",
    //       data: "SUM_ASSURED",
    //     },
    //     {
    //       title: "Premium Amount",
    //       data: "PREMIUM",
    //     },
    //     {
    //       title: "Surrender Value",
    //       data: "SURRENDER_VALUE",
    //     },
    //     {
    //       title: "Premium Due Date",
    //       data: "PREMIUM_DUE_DATE",
    //     },
    //     {
    //       title: "Matured Due Date",
    //       data: "MATURE_DUE_DATE",
    //     },
    //     {
    //       title: "Nominee",
    //       data: "NOMINEE",
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

  submit(event) {
    let submissiondate
    let certicatedate
    let premiumduedate
    let maturityduedate
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

        'CERT_POLICY_DATE': (formVal.CERT_POLICY_DATE == '' || formVal.CERT_POLICY_DATE == 'Invalid date') ? certicatedate = '' : certicatedate = moment(formVal.CERT_POLICY_DATE).format('DD/MM/YYYY'),

        CERT_POLICY_NO: formVal.CERT_POLICY_NO,
        MARGIN: formVal.MARGIN,
        ASSURED_NAME: formVal.ASSURED_NAME,
        PAIDUP_AMT: formVal.PAIDUP_AMT,
        SUM_ASSURED: formVal.SUM_ASSURED,
        PREMIUM: formVal.PREMIUM,
        SURRENDER_VALUE: formVal.SURRENDER_VALUE,
        'PREMIUM_DUE_DATE': (formVal.PREMIUM_DUE_DATE == '' || formVal.PREMIUM_DUE_DATE == 'Invalid date') ? premiumduedate = '' : premiumduedate = moment(formVal.PREMIUM_DUE_DATE).format('DD/MM/YYYY'),

        'MATURE_DUE_DATE': (formVal.MATURE_DUE_DATE == '' || formVal.MATURE_DUE_DATE == 'Invalid date') ? maturityduedate = '' : maturityduedate = moment(formVal.MATURE_DUE_DATE).format('DD/MM/YYYY'),

        NOMINEE: formVal.NOMINEE,
        REMARK: formVal.REMARK,
      };
      this._govsecurity.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          let info = []
          info.push(data.id)
          info.push("govSecurity")

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
      this.formSubmitted = false;
    }

  }
  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let submissiondate
    let certicatedate
    let premiumduedate
    let maturityduedate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._govsecurity.getFormData(id).subscribe((data) => {
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
      this.newgovtSecurityEvent.emit(obj1);
      (this.updateID = data.id);
      this.scheme = data.AC_TYPE
      this.Accountno = data.AC_NO
      this.angForm.patchValue({

        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,

        'CERT_POLICY_DATE': (data.CERT_POLICY_DATE == 'Invalid date' || data.CERT_POLICY_DATE == '' || data.CERT_POLICY_DATE == null) ? certicatedate = '' : certicatedate = data.CERT_POLICY_DATE,

        CERT_POLICY_NO: data.CERT_POLICY_NO,
        MARGIN: data.MARGIN,
        ASSURED_NAME: data.ASSURED_NAME,
        PAIDUP_AMT: data.PAIDUP_AMT,
        SUM_ASSURED: data.SUM_ASSURED,
        PREMIUM: data.PREMIUM,
        SURRENDER_VALUE: data.SURRENDER_VALUE,
        'PREMIUM_DUE_DATE': (data.PREMIUM_DUE_DATE == 'Invalid date' || data.PREMIUM_DUE_DATE == '' || data.PREMIUM_DUE_DATE == null) ? premiumduedate = '' : premiumduedate = data.PREMIUM_DUE_DATE,

        'MATURE_DUE_DATE': (data.MATURE_DUE_DATE == 'Invalid date' || data.MATURE_DUE_DATE == '' || data.MATURE_DUE_DATE == null) ? maturityduedate = '' : maturityduedate = data.MATURE_DUE_DATE,

        NOMINEE: data.NOMINEE,
        REMARK: data.REMARK,
      });
    });
  }

  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100

    if (ele <= 100) {

    } else {
      this.angForm.controls['MARGIN'].reset()
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }

  updateData() {
    let submissiondate
    let certicatedate
    let premiumduedate
    let maturityduedate
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
    if (this.updatecheckdata.CERT_POLICY_DATE != data.CERT_POLICY_DATE) {
      (data.CERT_POLICY_DATE == 'Invalid date' || data.CERT_POLICY_DATE == '' || data.CERT_POLICY_DATE == null) ? (certicatedate = '', data['CERT_POLICY_DATE'] = certicatedate) : (certicatedate = data.CERT_POLICY_DATE, data['CERT_POLICY_DATE'] = moment(certicatedate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.PREMIUM_DUE_DATE != data.PREMIUM_DUE_DATE) {
      (data.PREMIUM_DUE_DATE == 'Invalid date' || data.PREMIUM_DUE_DATE == '' || data.PREMIUM_DUE_DATE == null) ? (premiumduedate = '', data['PREMIUM_DUE_DATE'] = premiumduedate) : (premiumduedate = data.PREMIUM_DUE_DATE, data['PREMIUM_DUE_DATE'] = moment(premiumduedate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.MATURE_DUE_DATE != data.MATURE_DUE_DATE) {
      (data.MATURE_DUE_DATE == 'Invalid date' || data.MATURE_DUE_DATE == '' || data.MATURE_DUE_DATE == null) ? (maturityduedate = '', data['MATURE_DUE_DATE'] = maturityduedate) : (maturityduedate = data.SUBMISSION_DATE, data['MATURE_DUE_DATE'] = moment(maturityduedate).format('DD/MM/YYYY'))
    }
    this._govsecurity.updateData(data).subscribe(() => {
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
    //fetch premium due date value
    let premium = document.getElementById(
      "PREMIUM_DUE_DATE"
    ) as HTMLInputElement;
    let mature = document.getElementById("maturity") as HTMLInputElement;
    this.setdate = premium.value;

    if (data != "") {
      if (this.setdate > data) {

        Swal.fire(
          "Cancelled",
          "Premium Due Date must be less than Mature due date",
          "error"
        );

        this.resetmaturedate = "";
      } else {

      }
    }
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
    this.newgovtSecurityEvent.emit(obj1);
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
