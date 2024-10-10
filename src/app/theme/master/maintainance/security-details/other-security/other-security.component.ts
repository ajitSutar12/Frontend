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
import * as moment from 'moment';
import { first } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";

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
  formSubmitted = false;
  //passing data form child to parent
  @Output() newOtherSecurityEvent = new EventEmitter<any>();
  datemax: string;
  newbtnShow: boolean;
  newItemEvent(value) {
    this.newOtherSecurityEvent.emit(value);
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
  //for date
  submissiondate: any = null
  maxDate: Date;
  minDate: Date;
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
  setLang:any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _security: othersecuritycomponentservice,
    public router: Router,  private translate:TranslateService,
    private systemParameter:SystemMasterParametersService,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    }) 

  }

  ngOnInit(): void {
    this.createForm();

    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'ftip'
    }

    // let obj = {
    //   scheme: this.scheme,
    //   ac_no: this.Accountno,
    //   acnotype: this.AC_ACNOTYPE,
    //   branch: this.branchCode
    // }
    // this._security.getdatatable(obj).pipe(first()).subscribe((data) => {
    //   this.securitymasters = data
    // })
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
    //         this.url + "/other-security",
    //         dataTableParameters
    //       )
    //       .subscribe((resp) => {
    //         this.securitymasters = resp.data;

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
    //       title: "Date of Submission",
    //       data: "SUBMISSION_DATE",
    //     },
    //     {
    //       title: "Short Details",
    //       data: "SHORT_DETAILS",
    //     },
    //     {
    //       title: "Total Valuet",
    //       data: "TOTAL_VALUE",
    //     },
    //     {
    //       title: "Margin %",
    //       data: "MARGIN",
    //     },
    //     {
    //       title: "Security Details",
    //       data: "DETAILS",
    //     },
    //   ],
    //   dom: "Blrtip",
    // };
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
  submit(event) {
    let submissiondate
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

        SHORT_DETAILS: formVal.SHORT_DETAILS,
        TOTAL_VALUE: formVal.TOTAL_VALUE,
        MARGIN: formVal.MARGIN,
        DETAILS: formVal.DETAILS,
      };
      this._security.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          let info = []
          info.push(data.id)
          info.push("otherSecurity")

          // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          //   dtInstance.ajax.reload()
          // });
          this.loadTable();
          this.newItemEvent(info);


        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
    }

  }

  loadTable() {

    let obj = {
      scheme: this.scheme,
      ac_no: this.Accountno,
      acnotype: this.AC_ACNOTYPE,
      branch: this.branchCode
    }
    this._security.getdatatable(obj).pipe(first()).subscribe((data) => {
      this.securitymasters = this.sort_by_key(data, 'SUBMISSION_DATE');
      // this.securitymasters = data
    })

  }

  sort_by_key(array: any, key: any) {
    return array.sort(function (a: any, b: any) {
      let p = moment(a[key], 'DD/MM/YYYY');
      let q = moment(b[key], 'DD/MM/YYYY');
      return (p > q) ? -1 : ((p < q) ? 1 : 0)
    });
  }
  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let submissiondate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._security.getFormData(id).subscribe((data) => {
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
      this.newOtherSecurityEvent.emit(obj1);

      this.scheme = data.AC_TYPE
      this.Accountno = data.AC_NO
      this.updateID = data.id;

      this.angForm.patchValue({
        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,

        SHORT_DETAILS: data.SHORT_DETAILS,
        TOTAL_VALUE: data.TOTAL_VALUE,
        MARGIN: data.MARGIN,
        DETAILS: data.DETAILS,
      });
    });
  }
  //check  if margin values are below 100
  checkmargin(ele: any) {


    if (ele <= 100) {

    }
    else {
      this.angForm.controls['MARGIN'].reset()
      Swal.fire("Invalid Input", "Please Insert Values Below 100", "error");
    }
  }

  updateData() {

    let submissiondate
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

    this._security.updateData(data).subscribe(() => {

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
  delClickHandler(info: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want To Delete Date Of Submission data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your Data Has Been Deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data Is Safe.", "error");
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
    this.newOtherSecurityEvent.emit(obj1);

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

}
