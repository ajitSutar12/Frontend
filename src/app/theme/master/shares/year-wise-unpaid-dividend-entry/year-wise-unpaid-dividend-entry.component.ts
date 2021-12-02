import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, } from "@angular/core";
import { Subject } from "rxjs";

// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Displaying Sweet Alert
import Swal from "sweetalert2";

// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";

// Used to Call API
import { HttpClient } from "@angular/common/http";


import { first } from "rxjs/operators";
import { environment } from "src/environments/environment";

// Service File For Handling CRUD Operation
import { YearwiseunpaidService } from "./year-wise-unpaid-dividend-entry.service";


// dynamic dropdown
import { SchemeCodeDropdownService } from "../../../../shared/dropdownService/scheme-code-dropdown.service";
import { SalaryDMasterdropdownService } from "../../../../shared/dropdownService/salary-division-master-dropdown.service";
import { ShareMasterDropdownService } from "../../../../shared/dropdownService/share-master-dropdown.service";
import { ShareSchemeDropdownService } from "../../../../shared/dropdownService/share-scheme-dropdown.Service";
import { ShareMasterService } from "../../customer/shares-master/shares-master.service";
import { CustomerIdService } from "../../customer/customer-id/customer-id.service";




// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// for fetching values from shmaster
interface Shareyearwisedividend {
  AC_NO: string;
  AC_NAME: string;
  DIVIDEND_AMOUNT: string;
  MEMBER_CLOSE_DATE: string;
}

// For fetching values from backend
interface Yearwisedividend {
  ID: number;
  ACNOTYPE: string;
  ACTYPE: string;
  AC_SALARYDIVISION_CODE: number;
  WARRENT_DATE: Date;
  DIV_FROM_YEAR: number;
  DIV_TO_YEAR: number;
  AC_NO: number;
  TOTAL_SHARES: number;
  MEMBER_CLOSE_DATE: Date;
  DIVIDEND_AMOUNT: number;
  AC_NAME: string;
}

@Component({
  selector: "app-year-wise-unpaid-dividend-entry",
  templateUrl: "./year-wise-unpaid-dividend-entry.component.html",
  styleUrls: ["./year-wise-unpaid-dividend-entry.component.scss"],
})


export class YearWiseUnpaidDividendEntryComponent implements AfterViewInit, OnDestroy, OnInit {
  //api
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Created Form Group
  angForm: FormGroup;

  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  //datatable for values from shmaster
  dtexportshareOption: DataTables.Settings = {};
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
  newbtnShow: boolean = false;

  //variable to get Id to update
  updateID: number = 0;

  //  filter variable
  filterData = {};

  // Store data from backend
  yearwiseunpaid: Yearwisedividend[];
  sharemember: Shareyearwisedividend[];


  //Scheme type variable
  schemeType: string = "SH";

  // dropdown options
  SchemeCodeObject: any[];//S_NAME from Schemedata
  SalaryDMasterObject: any;//AC_SALARYDIVISION_CODE FROM SHMASTER
  ShareMasterObject: any[];//AC_NO From SHMASTER -member from
  ShareMasterObjectB: any[];//AC_NO From SHMASTER -member to
  shareNameObject: any[];
  acType: string = "";


  //todays date
  date = new Date();
  // year: Date;
  year =  new Date().getFullYear();

  constructor(
    private http: HttpClient,
    private YearwiseunpaidService: YearwiseunpaidService,
    private fb: FormBuilder,
    private SalaryDMasterdropdownService: SalaryDMasterdropdownService,
    private ShareMasterDropdownService: ShareMasterDropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private customerIdService: CustomerIdService,
    private ShareSchemeDropdownService: ShareSchemeDropdownService,
    private ShareMasterService: ShareMasterService
  ) { }

  ngOnInit(): void {
    this.createForm();

    // fetching records from SHmaster
    this.dtexportshareOption = {
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
            this.url + "/share-master",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.sharemember = resp.data;
            console.log("fetch", this.sharemember);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columns: [
        // {
        //   title: 'Action',
        //   render: function (data: any, type: any, full: any) {
        //     return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
        //   }
        // },
        {
          title: "Member no",
          data: "AC_NO",
        },
        {
          title: "Member name",
          data: "AC_NAME",
        },
        {
          title: "dividend amount",
          data: "DIVIDEND_AMOUNT",
        },
        {
          title: "close date",
          data: "MEMBER_CLOSE_DATE",
        },
      ],
    };

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
            this.url + "/year-wise-unpaid-dividend-entry",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.yearwiseunpaid = resp.data;
            console.log("fetch", this.yearwiseunpaid);
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
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          title: "Scheme",
          data: "ACTYPE",
        },
        {
          title: "Salary Division",
          data: "AC_SALARYDIVISION_CODE",
        },
        {
          title: "Warrant Date",
          data: "WARRENT_DATE",
        },
        {
          title: "Dividend Year From",
          data: "DIV_FROM_YEAR",
        },
        {
          title: "To",
          data: "DIV_TO_YEAR",
        },
        {
          title: "Member From",
          data: "AC_NO",
        },
        {
          title: "Member To",
          data: "AC_NO",
        },
        {
          title: "Total Amount",
          data: "TOTAL_SHARES",
        },
        {
          title: "Member No",
          data: "AC_NO",
        },
        {
          title: "Member Name",
          data: "AC_NAME",
        },
        {
          title: "Dividend Amount",
          data: "DIVIDEND_AMOUNT",
        },
        {
          title: "Close Date",
          data: "MEMBER_CLOSE_DATE",
        },
      ],
      dom: "Blrtip",
    };

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType)
      .pipe(first())
      .subscribe((data) => {
        this.SchemeCodeObject = data;
      });

    this.SalaryDMasterdropdownService.getSalaryDMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.SalaryDMasterObject = data;
      });

    this.ShareMasterDropdownService.getGLAccountMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.ShareMasterObject = data;
        this.ShareMasterObjectB = data;
      });

      this.ShareMasterDropdownService.getGLAccountMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.shareNameObject = data;
      });
  }

  //get member name according member no
  getIntroducerName(value: any) {
    this.angForm.patchValue({
      AC_INTRNAME: value.name
    })
  }
 //function to get existing customer data according selection
 getCustomer(id) {
  this.customerIdService.getFormData(id).subscribe(data => {
    this.angForm.patchValue({
      AC_NAME: data.AC_NAME,
      AC_MEMBNO: data.AC_MEMBNO,
    })
  })
}




  //formcontrols with validation
  createForm() {
    this.angForm = this.fb.group({
      ACNOTYPE: ["SH"],
      ACTYPE: [""],
      AC_SALARYDIVISION_CODE: [""],
      WARRENT_DATE: [""],
      DIV_FROM_YEAR: [""],
      DIV_TO_YEAR: [""],
      AC_NO: [""],
      TOTAL_SHARES: [""],
      MEMBER_CLOSE_DATE: [""],
      DIVIDEND_AMOUNT: [""],
      // AC_NAME:[''],
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'ACNOTYPE': formVal.ACNOTYPE,
      'ACTYPE': formVal.ACTYPE,
      'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
      'WARRENT_DATE': formVal.WARRENT_DATE,
      'DIV_FROM_YEAR': formVal.DIV_FROM_YEAR,
      'DIV_TO_YEAR': formVal.DIV_TO_YEAR,
      'TOTAL_SHARES': formVal.TOTAL_SHARES,
      'FieldData': this.sharemember,

      // 'AC_NO': formVal.AC_NO,
      // 'MEMBER_CLOSE_DATE': formVal.MEMBER_CLOSE_DATE,
      // 'DIVIDEND_AMOUNT': formVal.DIVIDEND_AMOUNT,
      // 'AC_NAME':formVal.AC_NAME,
    };
    this.YearwiseunpaidService.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload();
        });
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.resetForm();
    this.sharemember = []
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = false;
    this.YearwiseunpaidService.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      //get nominee to edit
      this.angForm.setValue({
        ACNOTYPE: data.ACNOTYPE,
        ACTYPE: data.ACTYPE,
        AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
        WARRENT_DATE: data.WARRENT_DATE,
        DIV_FROM_YEAR: data.DIV_FROM_YEAR,
        DIV_TO_YEAR: data.DIV_TO_YEAR,
        AC_NO: data.AC_NO,
        TOTAL_SHARES: data.TOTAL_SHARES,
        MEMBER_CLOSE_DATE: data.MEMBER_CLOSE_DATE,
        DIVIDEND_AMOUNT: data.DIVIDEND_AMOUNT,
        // 'AC_NAME':data.AC_NAME,
      });
    });
  }

  //Method for update data
  updateData() {
    let data = this.angForm.value;
    data["id"] = this.updateID;
    
    data['FieldData'] = this.sharemember
    this.YearwiseunpaidService.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });

      this.resetForm();
    });
  }

  //reset function while update
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;

    this.resetForm();
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete narration data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.YearwiseunpaidService.deleteData(id).subscribe((data1) => {
          this.yearwiseunpaid = data1;
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          (error) => {
            console.log(error);
          };
        // to reload after delete of data
        this.rerender();
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
          debugger;
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
  };


  // function for selecting only year format

  // $('.date-own').datepicker({
  //   minViewMode: 2,
  //   format: 'yyyy'
  // });
  
 
 

}
