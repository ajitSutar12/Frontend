import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";

import { animate, style, transition, trigger } from "@angular/animations";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
// Service File For Handling CRUD Operation
import { DeadstockmasterService } from "./dead-stock-master.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
//  dropdown
import { ItemCatMasterDropdownService } from "../../../../shared/dropdownService/item-category-master-dropdown.service";
import { DepriciationCatDropdownMasterService } from "../../../../shared/dropdownService/depriciation-category-master-dropdown.service";
import { ACMasterDropdownService } from "../../../../shared/dropdownService/ac-master-dropdown.service";

import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { first } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as moment from 'moment';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { NgSelectComponent } from '@ng-select/ng-select'

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface deadstockinterface {
  //id:number
  ITEM_TYPE: string;
  ITEM_CODE: String;
  ITEM_NAME: string;
  PURCHASE_DATE: number;
  DEPR_CATEGORY: number;
  OP_BAL_DATE: string;
  SUPPLIER_NAME: string;
  OP_BALANCE: string;
  OP_QUANTITY: number;
  PURCHASE_OP_QUANTITY: string;
  PURCHASE_RATE: string;
  PURCHASE_QUANTITY: string;
  PURCHASE_VALUE: string;
  LAST_DEPR_DATE: Date;
  GL_ACNO: string;
}

@Component({
  selector: "app-dead-stock-master",
  templateUrl: "./dead-stock-master.component.html",
  styleUrls: ["./dead-stock-master.component.scss"],
})
export class DeadStockMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() childMessage: string;
  @Output() reloadTablePassing = new EventEmitter<string>();
  formSubmitted = false;
  //calculations

  firstnumber: number;
  secondnumber: number;

  //todays date
  date = new Date;
  //api
  url = environment.base_url;
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  customerMaster: deadstockinterface[];
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
  newbtnShow: boolean = false;
  updateID: number = 0;

  companyCode: any;
  schemeCode: any;

  //for search functionality
  filterData = {};
  //Title
  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;

  private dataSub: Subscription = null;
  itemtypeoption: any[];
  DeprCategoryoption;
  GLACNooption: any[];

  setdate: string;
  today: () => number;
  datemax: string;
  logDate
  bsValue
  ngItem: any = null
  ngDepre: any = null
  ngGlAC: any = null
  maxDate: any;
  purValue: any
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private deadstockmasterService: DeadstockmasterService,
    private ItemCatMasterDropdownService: ItemCatMasterDropdownService,
    private DepriciationCatDropdownMaster: DepriciationCatDropdownMasterService,
    private ACMasterDropdownService: ACMasterDropdownService,
    private systemParameter: SystemMasterParametersService,
  ) {
    if (this.childMessage != undefined) {
      this.editClickHandler(this.childMessage);
    }
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.logDate = data.CURRENT_DATE
    })
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
            this.url + "/dead-stock-master",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.customerMaster = resp.data;
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
        },
        {
          title: "Item Code",
          data: "ITEM_CODE",
        },
        {
          title: "Item Name",
          data: "ITEM_NAME",
        },
        {
          title: "SupplierName",
          data: "SUPPLIER_NAME",
        },
        {
          title: "Purchase Date",
          data: "PURCHASE_DATE",
        },
        {
          title: "Depreciation Category",
          data: "DEPR_CATEGORY",
        },
        {
          title: "Purchase Quantity",
          data: "PURCHASE_QUANTITY",
        },
        {
          title: "Purchase Rate",
          data: "PURCHASE_RATE",
        },

        {
          title: "Purchase Value",
          data: "PURCHASE_VALUE",
        },
        {
          title: "Last Depreciation Date",
          data: "LAST_DEPR_DATE",
        },
        {
          title: "GL Account Number",
          data: "GL_ACNO",
        },
      ],
      dom: "Blrtip",
    };

    this.ItemCatMasterDropdownService.getItemMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.itemtypeoption = data;
      });
    this.DepriciationCatDropdownMaster.getDepriciationMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.DeprCategoryoption = data;
      });

    this.ACMasterDropdownService.getACMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.GLACNooption = data;
      });
    this.runTimer();

  }

  createForm() {
    this.angForm = this.fb.group({
      ITEM_TYPE: [[Validators.required, Validators.pattern]],
      ITEM_CODE: [""],
      ITEM_NAME: ["", [Validators.required, Validators.pattern]],
      PURCHASE_DATE: ["", [Validators.required]],
      DEPR_CATEGORY: ["", [Validators.required]],
      OP_BAL_DATE: ["", [Validators.pattern]],
      SUPPLIER_NAME: ["", [Validators.required, Validators.pattern]],
      PURCHASE_OP_QUANTITY: [""],
      PURCHASE_RATE: ["", [Validators.pattern]],
      PURCHASE_QUANTITY: [[Validators.pattern]],
      PURCHASE_VALUE: ["", [Validators.pattern]],
      OP_BALANCE: [[Validators.pattern]],
      OP_QUANTITY: ["", [Validators.pattern]],
      LAST_DEPR_DATE: ["",],
      GL_ACNO: ["", [Validators.required]],
    });
  }
  //disabledate on keyup
  disabledate(data: any) {
    if (data != "") {
      if (data > this.datemax) {
        Swal.fire("Invalid Input", "Please insert valid date ", "warning");
        (document.getElementById("EFFECT_DATE") as HTMLInputElement).value = ""

      }
    }
  }
  openingReq: boolean = false
  getDate(value: Date): void {
    if (value == null) {
      this.angForm.controls['SUPPLIER_NAME'].disable()
      this.angForm.controls['OP_BALANCE'].disable()
      this.angForm.controls['OP_QUANTITY'].disable()
      this.angForm.controls['PURCHASE_RATE'].disable()
      this.angForm.controls['PURCHASE_OP_QUANTITY'].disable()
      this.angForm.controls['PURCHASE_VALUE'].disable()
      this.angForm.controls['LAST_DEPR_DATE'].disable()
      this.angForm.controls['SUPPLIER_NAME'].reset()
      this.angForm.controls['OP_BALANCE'].reset()
      this.angForm.controls['OP_QUANTITY'].reset()
      this.angForm.controls['PURCHASE_RATE'].reset()
      this.angForm.controls['PURCHASE_OP_QUANTITY'].reset()
      this.angForm.controls['PURCHASE_VALUE'].reset()
      this.angForm.controls['LAST_DEPR_DATE'].reset()
      this.openingReq = false
    } else {
      this.angForm.controls['SUPPLIER_NAME'].enable()
      this.angForm.controls['OP_BALANCE'].enable()
      this.angForm.controls['OP_QUANTITY'].enable()
      this.angForm.controls['PURCHASE_RATE'].enable()
      this.angForm.controls['PURCHASE_OP_QUANTITY'].enable()
      this.angForm.controls['LAST_DEPR_DATE'].enable()
      this.openingReq = true
    }

  }

  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    let purchase
    let purchase1
    let purchase2
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let bankCode = Number(result.branch.syspara.BANK_CODE)
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      const dataToSend = {
        'BRANCH_CODE': branchCode,
        'bankCode': bankCode,
        ITEM_TYPE: formVal.ITEM_TYPE,
        ITEM_CODE: formVal.ITEM_CODE,
        ITEM_NAME: formVal.ITEM_NAME,
        PURCHASE_DATE: (formVal.PURCHASE_DATE == '' || formVal.PURCHASE_DATE == 'Invalid date' || formVal.PURCHASE_DATE == undefined || formVal.PURCHASE_DATE == null) ? purchase = '' : purchase = moment(formVal.PURCHASE_DATE).format('DD/MM/YYYY'),
        DEPR_CATEGORY: formVal.DEPR_CATEGORY,

        OP_BAL_DATE: (formVal.OP_BAL_DATE == '' || formVal.OP_BAL_DATE == 'Invalid date' || formVal.OP_BAL_DATE == undefined || formVal.OP_BAL_DATE == null) ? purchase1 = '' : purchase1 = moment(formVal.OP_BAL_DATE).format('DD/MM/YYYY'),
        SUPPLIER_NAME: formVal.SUPPLIER_NAME,
        OP_BALANCE: formVal.OP_BALANCE,
        OP_QUANTITY: formVal.OP_QUANTITY,
        PURCHASE_RATE: formVal.PURCHASE_RATE,
        PURCHASE_OP_QUANTITY: formVal.PURCHASE_OP_QUANTITY,
        PURCHASE_VALUE: this.firstnumber * this.secondnumber,
        LAST_DEPR_DATE: (formVal.LAST_DEPR_DATE == '' || formVal.LAST_DEPR_DATE == 'Invalid date' || formVal.LAST_DEPR_DATE == undefined || formVal.LAST_DEPR_DATE == null) ? purchase2 = '' : purchase2 = moment(formVal.LAST_DEPR_DATE).format('DD/MM/YYYY'),
        GL_ACNO: formVal.GL_ACNO,

      };
      this.deadstockmasterService.postData(dataToSend).subscribe(
        (data1) => {
          Swal.fire({
            icon: 'success',
            title: 'Account Created successfully!',
            html:
              '<b>ITEM NAME : </b>' + data1.ITEM_NAME + ',' + '<br>' +
              '<b>ITEM CODE : </b>' + data1.ITEM_CODE + '<br>'
          })
          this.formSubmitted = false;
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload();
          });
        },
        (error) => {
          console.log(error);
        }
      );

      // }





      //To clear form
      this.angForm.reset();
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }
  lddate: any
  nglastdedate: any
  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {

    let date
    let date1
    let date2
    this.deadstockmasterService.getFormData(id).subscribe((data) => {
      if (data.SYSCHNG_LOGIN != null && data.status == 0) {
        this.unapproveShow = true
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && data.status == 1) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true;
      }
      else {
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      this.updatecheckdata = data
      this.ngItem = Number(data.ITEM_TYPE)
      this.ngDepre = Number(data.DEPR_CATEGORY)
      this.nglastdedate = data.LAST_DEPR_DATE

      if (data.OP_BAL_DATE != '') {
        this.angForm.controls['SUPPLIER_NAME'].enable()
        this.angForm.controls['OP_BALANCE'].enable()
        this.angForm.controls['OP_QUANTITY'].enable()
        this.angForm.controls['PURCHASE_RATE'].enable()
        this.angForm.controls['PURCHASE_OP_QUANTITY'].enable()
        this.angForm.controls['PURCHASE_VALUE'].enable()
        this.angForm.controls['LAST_DEPR_DATE'].enable()
        this.purValue = data.PURCHASE_VALUE
        this.angForm.patchValue({
          OP_BAL_DATE: (data.OP_BAL_DATE == 'Invalid date' || data.OP_BAL_DATE == '' || data.OP_BAL_DATE == null) ? date1 = '' : date1 = data.OP_BAL_DATE,
          SUPPLIER_NAME: data.SUPPLIER_NAME,
          PURCHASE_OP_QUANTITY: data.PURCHASE_OP_QUANTITY,
          PURCHASE_RATE: data.PURCHASE_RATE,
          PURCHASE_QUANTITY: data.PURCHASE_QUANTITY,
          // PURCHASE_VALUE: data.PURCHASE_VALUE,
          OP_BALANCE: parseInt(data.OP_BALANCE).toFixed(2),
          OP_QUANTITY: data.OP_QUANTITY,
          LAST_DEPR_DATE: (data.LAST_DEPR_DATE == 'Invalid date' || data.LAST_DEPR_DATE == '' || data.LAST_DEPR_DATE == null) ? date2 = null : date2 = data.LAST_DEPR_DATE,
          // ITEM_TYPE: data.ITEM_TYPE,
          ITEM_CODE: data.ITEM_CODE,
          ITEM_NAME: data.ITEM_NAME,
          PURCHASE_DATE: (data.PURCHASE_DATE == 'Invalid date' || data.PURCHASE_DATE == '' || data.PURCHASE_DATE == null) ? date = '' : date = data.PURCHASE_DATE,
          // DEPR_CATEGORY: Number(data.DEPR_CATEGORY),
          GL_ACNO: Number(data.GL_ACNO),
        })
      } else {
        this.angForm.controls['SUPPLIER_NAME'].disable()
        this.angForm.controls['OP_BALANCE'].disable()
        this.angForm.controls['OP_QUANTITY'].disable()
        this.angForm.controls['PURCHASE_RATE'].disable()
        this.angForm.controls['PURCHASE_OP_QUANTITY'].disable()
        this.angForm.controls['PURCHASE_VALUE'].disable()
        this.angForm.controls['LAST_DEPR_DATE'].disable()
        this.angForm.controls['SUPPLIER_NAME'].reset()
        this.angForm.controls['OP_BALANCE'].reset()
        this.angForm.controls['OP_QUANTITY'].reset()
        this.angForm.controls['PURCHASE_RATE'].reset()
        this.angForm.controls['PURCHASE_OP_QUANTITY'].reset()
        this.angForm.controls['PURCHASE_VALUE'].reset()
        this.angForm.controls['LAST_DEPR_DATE'].reset()
        this.angForm.controls['OP_BAL_DATE'].reset()
        this.angForm.patchValue({
          // ITEM_TYPE: data.ITEM_TYPE,
          ITEM_CODE: data.ITEM_CODE,
          ITEM_NAME: data.ITEM_NAME,
          PURCHASE_DATE: (data.PURCHASE_DATE == 'Invalid date' || data.PURCHASE_DATE == '' || data.PURCHASE_DATE == null) ? date = '' : date = data.PURCHASE_DATE,
          // DEPR_CATEGORY: Number(data.DEPR_CATEGORY),
          GL_ACNO: Number(data.GL_ACNO),
        });
      }

      // this.angForm.patchValue({
      //   // ITEM_TYPE: data.ITEM_TYPE,
      //   ITEM_CODE: data.ITEM_CODE,
      //   ITEM_NAME: data.ITEM_NAME,
      //   PURCHASE_DATE: (data.PURCHASE_DATE == 'Invalid date' || data.PURCHASE_DATE == '' || data.PURCHASE_DATE == null) ? date = '' : date = data.PURCHASE_DATE,
      //   // DEPR_CATEGORY: Number(data.DEPR_CATEGORY),
      //   GL_ACNO: Number(data.GL_ACNO),
      // });
    });
  }

  //Method for update data
  updateData() {
    let date
    let date1
    let date2
    let data = this.angForm.value;

    data["id"] = this.updateID;
    if (this.updatecheckdata.PURCHASE_DATE != data.PURCHASE_DATE) {
      (data.PURCHASE_DATE == 'Invalid date' || data.PURCHASE_DATE == '' || data.PURCHASE_DATE == null) ? (date = '', data['PURCHASE_DATE'] = date) : (date = data.PURCHASE_DATE, data['PURCHASE_DATE'] = moment(date).format('DD/MM/YYYY'))
    } else {
      data['PURCHASE_DATE'] = data.PURCHASE_DATE
    }
    if (this.updatecheckdata.OP_BAL_DATE != data.OP_BAL_DATE) {
      (data.OP_BAL_DATE == 'Invalid date' || data.OP_BAL_DATE == '' || data.OP_BAL_DATE == null) ? (date1 = '', data['OP_BAL_DATE'] = date1) : (date1 = data.OP_BAL_DATE, data['OP_BAL_DATE'] = moment(date1).format('DD/MM/YYYY'))
    } else {
      data['OP_BAL_DATE'] = data.OP_BAL_DATE
    }
    if (this.updatecheckdata.LAST_DEPR_DATE != data.LAST_DEPR_DATE) {
      (data.LAST_DEPR_DATE == 'Invalid date' || data.LAST_DEPR_DATE == '' || data.LAST_DEPR_DATE == null) ? (date2 = '', data['LAST_DEPR_DATE'] = date2) : (date2 = data.LAST_DEPR_DATE, data['LAST_DEPR_DATE'] = moment(date2).format('DD/MM/YYYY'))
    } else {
      data['LAST_DEPR_DATE'] = data.LAST_DEPR_DATE
    }

    if (data.OP_BAL_DATE == null || data.OP_BAL_DATE == '' || data.OP_BAL_DATE == 'Invalid date' || data.OP_BAL_DATE == undefined) {
      this.angForm.controls['SUPPLIER_NAME'].reset()
      this.angForm.controls['OP_BALANCE'].reset()
      this.angForm.controls['OP_QUANTITY'].reset()
      this.angForm.controls['PURCHASE_RATE'].reset()
      this.angForm.controls['PURCHASE_OP_QUANTITY'].reset()
      this.angForm.controls['PURCHASE_VALUE'].reset()
      this.angForm.controls['LAST_DEPR_DATE'].reset()
      data['SUPPLIER_NAME'] = ''
      data['OP_BALANCE'] = ''
      data['OP_QUANTITY'] = ''
      data['PURCHASE_RATE'] = ''
      data['PURCHASE_OP_QUANTITY'] = ''
      data['PURCHASE_VALUE'] = ''
      data['LAST_DEPR_DATE'] = ''
    }
    data['PURCHASE_VALUE'] = this.firstnumber * this.secondnumber
    this.deadstockmasterService.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.resetForm()
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.angForm.controls['SUPPLIER_NAME'].disable()
    this.angForm.controls['OP_BALANCE'].disable()
    this.angForm.controls['OP_QUANTITY'].disable()
    this.angForm.controls['PURCHASE_RATE'].disable()
    this.angForm.controls['PURCHASE_OP_QUANTITY'].disable()
    this.angForm.controls['PURCHASE_VALUE'].disable()
    this.angForm.controls['LAST_DEPR_DATE'].disable()

    this.resetForm();
  }
  // Reset Function
  resetForm() {
    this.createForm();
    this.ngItem = null
    this.ngDepre = null
    this.ngGlAC = null
    this.angForm.controls['OP_BAL_DATE'].reset()
    this.angForm.controls['SUPPLIER_NAME'].disable()
    this.angForm.controls['OP_BALANCE'].disable()
    this.angForm.controls['OP_QUANTITY'].disable()
    this.angForm.controls['PURCHASE_RATE'].disable()
    this.angForm.controls['PURCHASE_OP_QUANTITY'].disable()
    this.angForm.controls['PURCHASE_VALUE'].disable()
    this.angForm.controls['LAST_DEPR_DATE'].disable()
    this.openingReq = false
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
        this.deadstockmasterService.deleteData(id).subscribe((data1) => {
          this.customerMaster = data1;
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
      $('#mastertable tfoot tr').appendTo('#mastertable thead');
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
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.deadstockmasterService.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Dead Stock Account approved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.deadstockmasterService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Dead Stock rejected successfully',
        'success'
      );

      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this.deadstockmasterService.unapporve(obj).subscribe(data => {
      Swal.fire(
        'Unapproved',
        'Account unapproved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  selectAllContent($event) {
    $event.target.select();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }
  closeModal() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }
  disableForm(id) {
    this.editClickHandler(id)
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
