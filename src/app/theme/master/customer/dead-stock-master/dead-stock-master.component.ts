import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
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
export class DeadStockMasterComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  //calculations

  firstnumber: number;
  secondnumber: number;

 //todays date
  date = new Date;                       
  //api
  url = environment.base_url;

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
  //itemtypeoption: Array<IOption> = this.ItemCatMasterDropdownService.getCharacters();
  // SUPPLIER_NAME: IOption[];
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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private deadstockmasterService: DeadstockmasterService,
    private ItemCatMasterDropdownService: ItemCatMasterDropdownService,
    private DepriciationCatDropdownMaster: DepriciationCatDropdownMasterService,
    private ACMasterDropdownService: ACMasterDropdownService
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
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
      
        {
          title: "Item Type",
          data: "ITEM_TYPE",
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
          title: "Purchase Date",
          data: "PURCHASE_DATE",
        },
        {
          title: "Depr Category",
          data: "DEPR_CATEGORY",
        },
        {
          title: "Op.Balance Date",
          data: "OP_BAL_DATE",
        },
        {
          title: "SupplierName",
          data: "SUPPLIER_NAME",
        },
        {
          title: "Opening Amount",
          data: "OP_BALANCE",
        },
        {
          title: "Quantity",
          data: "OP_QUANTITY",
        },

        {
          title: "PURCHASE QUANTITY",
          data: "PURCHASE_OP_QUANTITY",
        },
        {
          title: "Purchase Rate",
          data: "PURCHASE_RATE",
        },
        {
          title: "Purchase Qty",
          data: "PURCHASE_QUANTITY",
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
          title: "GL A/C No",
          data: "GL_ACNO",
        },
        // {
        //    title: 'Total Records',
        //    data: 'TotalRecords'
        //  },
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
      ITEM_TYPE: ["", [Validators.required, Validators.pattern]],
      ITEM_CODE: [""],
      ITEM_NAME: ["", [Validators.required, Validators.pattern]],
      PURCHASE_DATE: ["", [Validators.required]],
      DEPR_CATEGORY: ["", [Validators.required]],
      OP_BAL_DATE: ["", [Validators.required, Validators.pattern]],
      SUPPLIER_NAME: ["", [Validators.required, Validators.pattern]],
      PURCHASE_OP_QUANTITY: [""],
      PURCHASE_RATE: ["", [Validators.pattern]],
      PURCHASE_QUANTITY: ["", [Validators.pattern]],
      PURCHASE_VALUE: ["", [Validators.pattern]],
      OP_BALANCE: ["", [Validators.pattern]],
      OP_QUANTITY: ["", [Validators.pattern]],
      LAST_DEPR_DATE: ["", [Validators.pattern]],
      GL_ACNO: ["", [Validators.required]],
    });
  }


  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      ITEM_TYPE: formVal.ITEM_TYPE,
      ITEM_CODE: formVal.ITEM_CODE,
      ITEM_NAME: formVal.ITEM_NAME,
      PURCHASE_DATE: formVal.PURCHASE_DATE,
      DEPR_CATEGORY: formVal.DEPR_CATEGORY,
      OP_BAL_DATE: formVal.OP_BAL_DATE,
      SUPPLIER_NAME: formVal.SUPPLIER_NAME,
      PURCHASE_OP_QUANTITY: formVal.PURCHASE_OP_QUANTITY,
      PURCHASE_RATE: formVal.PURCHASE_RATE,
      PURCHASE_QUANTITY: formVal.PURCHASE_QUANTITY,
      PURCHASE_VALUE: formVal.PURCHASE_VALUE,
      OP_BALANCE: formVal.OP_BALANCE,
      OP_QUANTITY: formVal.OP_QUANTITY,
      LAST_DEPR_DATE: formVal.LAST_DEPR_DATE,
      GL_ACNO: formVal.GL_ACNO,
    };
    this.deadstockmasterService.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
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
    this.deadstockmasterService.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        ITEM_TYPE: data.ITEM_TYPE,
        ITEM_CODE: data.ITEM_CODE,
        ITEM_NAME: data.ITEM_NAME,
        PURCHASE_DATE: data.PURCHASE_DATE,
        DEPR_CATEGORY: data.DEPR_CATEGORY,
        OP_BAL_DATE: data.OP_BAL_DATE,
        SUPPLIER_NAME: data.SUPPLIER_NAME,
        PURCHASE_OP_QUANTITY: data.PURCHASE_OP_QUANTITY,
        PURCHASE_RATE: data.PURCHASE_RATE,
        PURCHASE_QUANTITY: data.PURCHASE_QUANTITY,
        PURCHASE_VALUE: data.PURCHASE_VALUE,
        OP_BALANCE: data.OP_BALANCE,
        OP_QUANTITY: data.OP_QUANTITY,
        LAST_DEPR_DATE: data.LAST_DEPR_DATE,
        GL_ACNO: data.GL_ACNO,
      });
    });
  }
  //Method for update data
  updateData() {
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this.deadstockmasterService.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
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
}
