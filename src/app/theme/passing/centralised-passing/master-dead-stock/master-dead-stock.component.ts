import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DeadStockMasterComponent } from '../../../master/customer/dead-stock-master/dead-stock-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
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

  @ViewChild(DeadStockMasterComponent) child: DeadStockMasterComponent;
  @ViewChild('triggerhide') myDiv: ElementRef<HTMLElement>;

  dtExportButtonOptions: any = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  mySubscription: Subscription
  page: number = 1;
  //filter variable
  filterData = {};
  url = environment.base_url;
  // Store data from backend
  customerMaster: deadstockinterface[];
  deadstockData: any;
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        // this.mySubscription = interval(1000).subscribe((x => {
        this.http
          .post<DataTableResponse>(
            this.url + "/dead-stock-master/passing",
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
        // }));
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
  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  //get saving customer data
  getCurrentData(data) {
    this.deadstockData = data.id;
    this.child.editClickHandler(data.id,1);
    this.child.DatatableHideShow = false;
    this.child.rejectShow = true;
    this.child.approveShow = true;
  }
  reloadTable() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
  }

}
