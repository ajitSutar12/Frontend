import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

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
  selector: 'app-master-dead-stock',
  templateUrl: './master-dead-stock.component.html',
  styleUrls: ['./master-dead-stock.component.scss']
})
export class MasterDeadStockComponent implements OnInit {

  dtExportButtonOptions: any = {};
  //api
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();

  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  filterData = {};
  customerMaster: deadstockinterface[];


  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    // this.dtExportButtonOptions = {
    //   ajax: 'fake-data/datatable-data.json',
    //   columns: [
    //     {
    //       title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
    //       }
    //     },
    //     {
    //     title: 'Name',
    //     data: 'name'
    //   }, {
    //     title: 'Position',
    //     data: 'position'
    //   }, {
    //     title: 'Office',
    //     data: 'office'
    //   }, {
    //     title: 'Age',
    //     data: 'age'
    //   }, {
    //     title: 'Start Date',
    //     data: 'date'
    //   }, {
    //     title: 'Salary',
    //     data: 'salary'
    //   }],
    //   dom: 'Bfrtip',
    //   buttons: [
    //     'copy',
    //     'print',
    //     'excel',
    //     'csv'
    //   ]
    // };
    

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
  }


}
