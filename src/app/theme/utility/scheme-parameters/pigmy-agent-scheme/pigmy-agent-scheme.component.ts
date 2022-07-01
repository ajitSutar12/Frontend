import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
// Service File For Handling CRUD Operation
import { PigmyagentService } from "./pigmy-agent-scheme.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface Pigmyagent {

  S_ACNOTYPE: string;
  S_APPL: string;
  S_NAME: string;
  S_SHNAME: string;
  S_INT_APPLICABLE: string;
  MIN_INT_LIMIT: string;
  STAND_INSTRUCTION_ALLOW: string;
  WITHDRAWAL_APPLICABLE: string;
  BALANCE_ADD_APPLICABLE: string;
}
@Component({
  selector: "app-pigmy-agent-scheme",
  templateUrl: "./pigmy-agent-scheme.component.html",
  styleUrls: ["./pigmy-agent-scheme.component.scss"],
})
export class PigmyAgentSchemeComponent
  implements OnInit, AfterViewInit, OnDestroy {
  //api
  url = environment.base_url;

  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  pigmyagentscheme: Pigmyagent[];
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
  //variable to get Id to update
  updateID: number = 0;
  checkboxStatus: any;

  //least routing
  CommissionApplicableTrue = true;
  OtherSettings1True = false;
  filterData = {};
  newbtnShow: boolean;

  constructor(
    private http: HttpClient,
    private pigmyagentService: PigmyagentService,
    private fb: FormBuilder
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
        this.http
          .post<DataTableResponse>(
            this.url + "/pigmy-agent-scheme",
            dataTableParameters
          )
          .subscribe((resp) => {
            console.log("data", resp.data);
            this.pigmyagentscheme = resp.data;
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
          // render: function (data: any, type: any, full: any) {
          //   return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          // },
        },
        {
          title: "Type",
          data: "S_ACNOTYPE",
        },
        {
          title: "Scheme Code",
          data: "S_APPL",
        },
        {
          title: "Description",
          data: "S_NAME",
        },
        {
          title: "Short Name",
          data: "S_SHNAME",
        },
        // {
        //   title: "Is Pigmy Commission Applicable ?",
        //   data: "S_INT_APPLICABLE",
        // },
        // {
        //   title: "Minimum Interest Amount - Text Box",
        //   data: "MIN_INT_LIMIT",
        // },
        // {
        //   title: "Is Standing Instruction Applicable ?",
        //   data: "STAND_INSTRUCTION_ALLOW",
        // },
        // {
        //   title: "Is Withdrawal Applicable ?",
        //   data: "WITHDRAWAL_APPLICABLE",
        // },
        // {
        //   title: "Is Balance Entry Allow ?",
        //   data: "BALANCE_ADD_APPLICABLE",
        // },
      ],
      dom: "Blrtip",
    };
  }

  // enable-disable checkbox event
  Pigmy_commission($event) {
    if ($event.target.checked) {
      document.getElementById("MIN_INT_LIMIT").removeAttribute("disabled");
    } else {
      document.getElementById("MIN_INT_LIMIT").setAttribute("disabled", "true");
      this.angForm.controls.MIN_INT_LIMIT.reset();
    }
  }
  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ["AG"],
      S_APPL: ["", [Validators.required, Validators.pattern, Validators.min(301), Validators.max(399)]],
      S_NAME: ["", [Validators.required, Validators.pattern]],
      S_SHNAME: ["", [Validators.required, Validators.pattern]],
      S_INT_APPLICABLE: [""],
      MIN_INT_LIMIT: ["", [Validators.pattern]],
      STAND_INSTRUCTION_ALLOW: [""],
      WITHDRAWAL_APPLICABLE: [""],
      BALANCE_ADD_APPLICABLE: [""],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      S_ACNOTYPE: formVal.S_ACNOTYPE,
      S_APPL: formVal.S_APPL,
      S_NAME: formVal.S_NAME,
      S_SHNAME: formVal.S_SHNAME,
      MIN_INT_LIMIT: formVal.MIN_INT_LIMIT,
      STAND_INSTRUCTION_ALLOW: (formVal.STAND_INSTRUCTION_ALLOW == true ? '1' : '0'),
      WITHDRAWAL_APPLICABLE: (formVal.WITHDRAWAL_APPLICABLE == true ? '1' : '0'),
      BALANCE_ADD_APPLICABLE: (formVal.BALANCE_ADD_APPLICABLE == true ? '1' : '0'),
      S_INT_APPLICABLE: (formVal.S_INT_APPLICABLE == true ? '1' : '0'),

    };
    console.log(formVal);
    this.pigmyagentService.postData(dataToSend).subscribe(
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
    this.angForm.reset();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.pigmyagentService.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        S_ACNOTYPE: data.S_ACNOTYPE,
        S_APPL: data.S_APPL,
        S_NAME: data.S_NAME,
        S_SHNAME: data.S_SHNAME,
        S_INT_APPLICABLE: (data.S_INT_APPLICABLE == '1' ? true : false),
        MIN_INT_LIMIT: data.MIN_INT_LIMIT,
        STAND_INSTRUCTION_ALLOW: (data.STAND_INSTRUCTION_ALLOW == '1' ? true : false),
        WITHDRAWAL_APPLICABLE: (data.WITHDRAWAL_APPLICABLE == '1' ? true : false),
        BALANCE_ADD_APPLICABLE: (data.BALANCE_ADD_APPLICABLE == '1' ? true : false),
      });
    });
  }
  //Method for update data
  updateData() {
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data['STAND_INSTRUCTION_ALLOW'] = (data.STAND_INSTRUCTION_ALLOW == true ? '1' : '0')
    data['WITHDRAWAL_APPLICABLE'] = (data.WITHDRAWAL_APPLICABLE == true ? '1' : '0')
    data['BALANCE_ADD_APPLICABLE'] = (data.BALANCE_ADD_APPLICABLE == true ? '1' : '0')
    data['S_INT_APPLICABLE'] = (data.S_INT_APPLICABLE == true ? '1' : '0')
    this.pigmyagentService.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.angForm.reset();
    });
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  // Reset Function
  resetForm() {
    this.createForm();
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
        this.pigmyagentService.deleteData(id).subscribe((data1) => {
          this.pigmyagentscheme = data1;
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
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#schemeparametertable tfoot tr').appendTo('#schemeparametertable thead');
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

  OpenLink(val) {
    if (val == 105) {
      this.CommissionApplicableTrue = true;
      this.OtherSettings1True = false;
    }
    if (val == 106) {
      this.CommissionApplicableTrue = false;
      this.OtherSettings1True = true;
    }
  }
}
