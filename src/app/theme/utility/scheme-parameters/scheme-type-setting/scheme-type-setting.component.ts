import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient } from "@angular/common/http";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
// Service File For Handling CRUD Operation
import { SchemetypeService } from "./scheme-type-setting.service";
// for dropdown
//import { StatementTypeService } from '../../../../shared/elements/statement-type.service';
import { SchemeTypeDropdownService } from "../../../../shared/dropdownService/scheme-type-dropdown.service";
import { environment } from "../../../../../environments/environment";
import { NgSelectConfig } from '@ng-select/ng-select';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface SchemeType {
  id: number;
  S_ACNOTYPE: string;
  S_NAME: string;
  S_SINGLE_VOUCHER: string;
  S_MULTY_VOUCHER: string;
  S_CASH_PAID_LOCK: string;
  S_CASH_PAID_MIN_AMT: string;
  S_LOCAL_CLEARING: string;
  S_CHEQUE_BOOK: string;
  S_DEMAND_DRAFT: string;
  IS_PO_APPL: string;
  S_TEMP_OVERDRFT: string;
  S_PERIODCL_OVERDRFT: string;
  S_SPECIAL_INSTRUCTION: string;
  S_SUB_PRINT: string;
  S_FREEZE_APPLICABLE: string;
}

@Component({
  selector: "app-scheme-type-setting",
  templateUrl: "./scheme-type-setting.component.html",
  styleUrls: ["./scheme-type-setting.component.scss"],
})
export class SchemeTypeSettingComponent
  implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api
  url = environment.base_url;

  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  schemetypes: SchemeType[];
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

  //Datatable variable
  //dtExportButtonOptions: any = {};

  //variables for least routing
  transactionsTrue = true;
  clearingTrue = false;
  overdraftTrue = false;
  otherTrue = false;

  // Filter Variable
  filterData = {};

  //dropdown variables
  ngscheme: any = null

  //title select variables
  schemetype: Array<IOption> = this.SchemeTypes.getCharacters();

  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;

  private dataSub: Subscription = null;
  newbtnShow: boolean;

  constructor(
    private http: HttpClient,
    public schemetypeservice: SchemetypeService,
    // for dropdown
    public SchemeTypes: SchemeTypeDropdownService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) {
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
            this.url + "/scheme-type",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.schemetypes = resp.data;
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
            return (
              '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="deletebtn btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "id",
          data: "id",
        },
        {
          title: "Type",
          data: "S_ACNOTYPE",
        },
        {
          title: "Description",
          data: "S_NAME",
        },

      ],
      dom: "Blrtip",
    };

    this.runTimer();
    this.dataSub = this.SchemeTypes.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }
  // enable-disable checkbox event
  cashpaymentlock($event) {
    if ($event.target.checked) {
      document.getElementById("S_CASH_PAID_MIN_AMT").removeAttribute("disabled");
    } else {
      document.getElementById("S_CASH_PAID_MIN_AMT").setAttribute("disabled", "true");
      // this.angForm.controls.POST_TO_INDIVIDUAL_AC.reset();
      this.angForm.controls.S_CASH_PAID_MIN_AMT.reset();
    }
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  createForm() {
    this.angForm = this.fb.group({
      id: [''],
      S_ACNOTYPE: ["GL"],
      S_NAME: ["", [Validators.required, Validators.pattern]],
      S_SINGLE_VOUCHER: [],
      S_MULTY_VOUCHER: [],
      S_CASH_PAID_LOCK: [],
      S_CASH_PAID_MIN_AMT: ["", [Validators.pattern]],
      S_LOCAL_CLEARING: [],
      S_CHEQUE_BOOK: [],
      S_DEMAND_DRAFT: [],
      IS_PO_APPL: [],
      S_TEMP_OVERDRFT: [],
      S_PERIODCL_OVERDRFT: [],
      S_SPECIAL_INSTRUCTION: [],
      S_SUB_PRINT: [],
      S_FREEZE_APPLICABLE: [],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      id: formVal.id,
      S_ACNOTYPE: formVal.S_ACNOTYPE,
      S_NAME: formVal.S_NAME,
      S_SINGLE_VOUCHER: (formVal.S_SINGLE_VOUCHER == true ? '1' : '0'),
      S_MULTY_VOUCHER: (formVal.S_MULTY_VOUCHER == true ? '1' : '0'),
      S_CASH_PAID_LOCK: (formVal.S_CASH_PAID_LOCK == true ? '1' : '0'),
      S_CASH_PAID_MIN_AMT: formVal.S_CASH_PAID_MIN_AMT,
      S_LOCAL_CLEARING: (formVal.S_LOCAL_CLEARING == true ? '1' : '0'),
      S_CHEQUE_BOOK: (formVal.S_CHEQUE_BOOK == true ? '1' : '0'),
      S_DEMAND_DRAFT: (formVal.S_DEMAND_DRAFT == true ? '1' : '0'),
      IS_PO_APPL: (formVal.IS_PO_APPL == true ? '1' : '0'),
      S_TEMP_OVERDRFT: (formVal.S_TEMP_OVERDRFT == true ? '1' : '0'),
      S_PERIODCL_OVERDRFT: (formVal.S_PERIODCL_OVERDRFT == true ? '1' : '0'),
      S_SPECIAL_INSTRUCTION: (formVal.S_SPECIAL_INSTRUCTION == true ? '1' : '0'),
      S_SUB_PRINT: (formVal.S_SUB_PRINT == true ? '1' : '0'),
      S_FREEZE_APPLICABLE: (formVal.S_FREEZE_APPLICABLE ? '1' : '0'),
    };
    this.schemetypeservice.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        this.formSubmitted = false;
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
    this.schemetypeservice.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.patchValue({
        id: data.id,
        S_ACNOTYPE: data.S_ACNOTYPE,
        S_NAME: data.S_NAME,
        S_SINGLE_VOUCHER: (data.S_SINGLE_VOUCHER == '1' ? true : false),
        S_MULTY_VOUCHER: (data.S_MULTY_VOUCHER == '1' ? true : false),
        S_CASH_PAID_LOCK: (data.S_CASH_PAID_LOCK == '1' ? true : false),
        S_CASH_PAID_MIN_AMT: data.S_CASH_PAID_MIN_AMT,
        S_LOCAL_CLEARING: (data.S_LOCAL_CLEARING == '1' ? true : false),
        S_CHEQUE_BOOK: (data.S_CHEQUE_BOOK == '1' ? true : false),
        S_DEMAND_DRAFT: (data.S_DEMAND_DRAFT == '1' ? true : false),
        IS_PO_APPL: (data.IS_PO_APPL == '1' ? true : false),
        S_TEMP_OVERDRFT: (data.S_TEMP_OVERDRFT == '1' ? true : false),
        S_PERIODCL_OVERDRFT: (data.S_PERIODCL_OVERDRFT == '1' ? true : false),
        S_SPECIAL_INSTRUCTION: (data.S_SPECIAL_INSTRUCTION == '1' ? true : false),
        S_SUB_PRINT: (data.S_SUB_PRINT == '1' ? true : false),
        S_FREEZE_APPLICABLE: (data.S_FREEZE_APPLICABLE == '1' ? true : false),
      });
    });
  }
  //Method for update data
  updateData() {
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data['S_SINGLE_VOUCHER'] = (data.S_SINGLE_VOUCHER == true ? '1' : '0')
    data['S_MULTY_VOUCHER'] = (data.S_MULTY_VOUCHER == true ? '1' : '0')
    data['S_CASH_PAID_LOCK'] = (data.S_CASH_PAID_LOCK == true ? '1' : '0')
    data['S_LOCAL_CLEARING'] = (data.S_LOCAL_CLEARING == true ? '1' : '0')
    data['S_CHEQUE_BOOK'] = (data.S_CHEQUE_BOOK == true ? '1' : '0')
    data['S_DEMAND_DRAFT'] = (data.S_DEMAND_DRAFT == true ? '1' : '0')
    data['IS_PO_APPL'] = (data.IS_PO_APPL == true ? '1' : '0')
    data['S_TEMP_OVERDRFT'] = (data.S_TEMP_OVERDRFT == true ? '1' : '0')
    data['S_PERIODCL_OVERDRFT'] = (data.S_PERIODCL_OVERDRFT == true ? '1' : '0')
    data['S_SPECIAL_INSTRUCTION'] = (data.S_SPECIAL_INSTRUCTION == true ? '1' : '0')
    data['S_SUB_PRINT'] = (data.S_SUB_PRINT == true ? '1' : '0')
    data['S_FREEZE_APPLICABLE'] = (data.S_FREEZE_APPLICABLE ? '1' : '0')



    this.schemetypeservice.updateData(data).subscribe(() => {
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
    this.ngscheme = null
  }
  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }
  ngAfterViewInit(): void {
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
    if (val == 21) {
      this.transactionsTrue = true;
      this.clearingTrue = false;
      this.overdraftTrue = false;
      this.otherTrue = false;
    }
    if (val == 22) {
      this.transactionsTrue = false;
      this.clearingTrue = true;
      this.overdraftTrue = false;
      this.otherTrue = false;
    }
    if (val == 23) {
      this.transactionsTrue = false;
      this.clearingTrue = false;
      this.overdraftTrue = true;
      this.otherTrue = false;
    }
    if (val == 24) {
      this.transactionsTrue = false;
      this.clearingTrue = false;
      this.overdraftTrue = false;
      this.otherTrue = true;
    }
  }
}

