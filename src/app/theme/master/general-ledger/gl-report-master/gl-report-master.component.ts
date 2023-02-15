import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import Swal from "sweetalert2";
// Angular Datatable Directive 
import { environment } from '../../../../../environments/environment'
import { NgSelectComponent } from "@ng-select/ng-select";
import { HttpClient } from "@angular/common/http";
import { first } from "rxjs/operators";
import { ReportTMasterDropdownService } from "../../../../shared/dropdownService/report-type-master-dropdown.service";
import { DataTableDirective } from "angular-datatables";
import { GlAccountsMasterService } from "../gl-accounts-master/gl-accounts-master.service";
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}



interface GlreportMaster {

  REPO_TYPE: string,
  CODE: number,
  NAME: string,
  CODE_TYPE: string,
  ADD_PL_AMOUNT: number,
  SERIAL_NO: number,
  PERCENTAGE_OF_CODE: number,
  INPUT_ALLOWED: number,
  IS_PRINT_IN_REPORT: number,
  PERCENTAGE: number,
  PERCENTAGE_CONSIDARATION: number


}

@Component({
  selector: "app-gl-report-master",
  templateUrl: "./gl-report-master.component.html",
  styleUrls: ["./gl-report-master.component.scss"],
  animations: [
    trigger("fadeInOutTranslate", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in-out", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        style({ transform: "translate(0)" }),
        animate("400ms ease-in-out", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class GlReportMasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  url = environment.base_url;
  ngForm: FormGroup;
  // multigrid = [];
  glreport: any = [];
  glreportMaster: GlreportMaster[];

  codetype: any = [
    { id: 'A', name: 'On Balance Sheet Item' },
    { id: 'B', name: 'Off Balance Sheet Item' },
    { id: 'C', name: 'Capital Funds and Risk Assets Ratio' },];
 
    //ngModel
  selectedType
  reportType

  //button
  addButton: boolean = true
  updateButton: boolean = false
  updateID: number = 0;

  dtExportButtonOptions: any = {}; //Datatable variable
  //filter variable
  filterData = {};
  page: number = 1;


  constructor(private http: HttpClient, private fb: FormBuilder,
    private reportTypeDropdown: ReportTMasterDropdownService, private glReportMasterService: GlAccountsMasterService,
  ) { }

  ngOnInit(): void {

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
            this.url + "/gl-account-master/masterLoad",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.glreportMaster = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });

      },
      columnDefs: [
        {
          targets: "_all",
          defaultContent: '',
        },
      ],
      columns: [
        {
          title: "Action",
        },
        {
          title: "Report Type",
          data: "REPO_TYPE",
        },
        {
          title: "Code",
          data: "CODE",
        },
        {
          title: "Name",
          data: "NAME",
        },
        {
          title: "Code Type",
          data: "CODE_TYPE",
        },
        {
          title: "Serial Number",
          data: "SERIAL_NO",
        },
        {
          title: "Percentage",
          data: "PERCENTAGE",
        },
        {
          title: "Percentage Consideartion",
          data: "PERCENTAGE_CONSIDARATION",
        },
        {
          title: "Percentage of Code",
          data: "PERCENTAGE_OF_CODE",
        },
      ],

      dom: "Blrtip",

    };


    this.createForm();

    this.reportTypeDropdown.getReportTMasterList().pipe(first())
      .subscribe((data) => {
        this.glreport = data;
      });

     

  }


  createForm() {
    this.ngForm = this.fb.group({

      CODE: ["", [Validators.required]],
      NAME: ["", [Validators.required]],
      REPO_TYPE: ["", [Validators.required]],
      CODE_TYPE: ["", [Validators.required]],
      ADD_PL_AMOUNT: [''],
      SERIAL_NO: ["", [Validators.required]],
      PERCENTAGE_OF_CODE: ["", [Validators.required]],
      INPUT_ALLOWED: [''],
      IS_PRINT_IN_REPORT: [''],
      PERCENTAGE: ["", [Validators.required]],
      PERCENTAGE_CONSIDARATION: ["", [Validators.required]],


    });
  }

  addData() {
    
    const formVal = this.ngForm.value;

    var dataToSend = {

      REPO_TYPE:formVal.REPO_TYPE,
      CODE: formVal.CODE,
      NAME: formVal.NAME,
      CODE_TYPE: formVal.CODE_TYPE,
      SERIAL_NO: formVal.SERIAL_NO,
      PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
      ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
      INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
      IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),
      PERCENTAGE: formVal.PERCENTAGE,
      PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION


    }

    // this.glreportMaster.push(object);

    // console.log(this.ngForm.value);

    this.glReportMasterService.postToData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });

    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();

  }


  //reset form
  resetForm() {
    this.createForm()
  }

  //function for edit button clicked
  editClickHandler(id) {
debugger
    this.addButton = false;
    this.updateButton = true;
    this.glReportMasterService.getFromData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngForm.patchValue({
        REPO_TYPE:data.REPO_TYPE,
        CODE: data.CODE,
        NAME: data.NAME,
        CODE_TYPE:data.CODE_TYPE,
        SERIAL_NO: data.SERIAL_NO,
        PERCENTAGE: data.PERCENTAGE,
        PERCENTAGE_CONSIDARATION: data.PERCENTAGE_CONSIDARATION,
        PERCENTAGE_OF_CODE: data.PERCENTAGE_OF_CODE,
        ADD_PL_AMOUNT: (data.ADD_PL_AMOUNT ==  true ? '1' : '0'),
        INPUT_ALLOWED: (data.INPUT_ALLOWED ==  true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (data.IS_PRINT_IN_REPORT ==  true ? '1' : '0'),
      })

    })
  }

  //function toggle update to add button
  updateData() {
      

    let data = this.ngForm.value;
    data['id'] = this.updateID;

    // data ['CODE']= data.CODE,
    // data['NAME']= data.NAME,
    // data['CODE_TYPE']= data.CODE_TYPE,
    // data['SERIAL_NO']= data.SERIAL_NO,
    // data['PERCENTAGE']= data.PERCENTAGE,
    // data['PERCENTAGE_CONSIDARATION']= data.PERCENTAGE_CONSIDARATION,
    // data['PERCENTAGE_OF_CODE']= data.PERCENTAGE_OF_CODE,

    this.glReportMasterService.updateToData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.addButton = true;
      this.updateButton = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })

  }



  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele.target.value <= 100) {
    }
    else {
      Swal.fire("Invalid Input", "Please Insert Values Below 100", "error");
      ele.target.value = 0
  
    }
  }

  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
}
