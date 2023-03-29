import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AccountOpeningComponent } from '../../../master/customer/account-opening/account-opening.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface InvestmentMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  INVEST_BANK: string
  INVEST_BRANCH: string
  AC_NAME: string
  AC_REF_RECEIPTNO: number
  AC_OPDATE: Date
  AC_ASON_DATE: Date
  AC_EXPDT: Date
  AC_MONTHS: number
  AC_DAYS: number
  AC_SCHMAMT: number
  AC_INTRATE: number
  AC_MATUAMT: number
  AC_CLOSEDT: Date
}
@Component({
  selector: 'app-master-investments',
  templateUrl: './master-investments.component.html',
  styleUrls: ['./master-investments.component.scss']
})
export class MasterInvestmentsComponent implements OnInit {
  @ViewChild(AccountOpeningComponent) child: AccountOpeningComponent;
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
  investmentMaster: InvestmentMaster[];
  investmentData: any;
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
      pagingType: 'full_numbers',
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

        dataTableParameters.columns.forEach(element => {
          if (element.search.value != '') {
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
            this.url + '/investment/Unapprovpassing',
            dataTableParameters
          ).subscribe(resp => {
            this.investmentMaster = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
        // }));
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          title: 'Action',
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account Number',
          data: 'BANKACNO'
        },
        {
          title: 'Member Name',
          data: 'AC_NAME'
        },
        {
          title: 'Bank Code',
          data: 'INVEST_BANK'
        },
        {
          title: 'Branch Code',
          data: 'INVEST_BRANCH'
        },
        {
          title: 'Account Open Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'As On Date',
          data: 'AC_ASON_DATE'
        },
        {
          title: 'Maturity Date',
          data: 'AC_EXPDT'
        },
        {
          title: 'Receipt Number',
          data: 'AC_REF_RECEIPTNO'
        },
        {
          title: 'Interest Rate',
          data: 'AC_INTRATE'
        },
        {
          title: 'Deposit Amount',
          data: 'AC_SCHMAMT'
        },

        {
          title: 'Maturity Amount',
          data: 'AC_MATUAMT'
        },
        // {
        //   title: 'Account Closed Date',
        //   data: 'AC_CLOSEDT'
        // },
      ],
      dom: 'Blrtip',
    };
  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }

  //get saving customer data
  getInvestmentData(data) {
    this.investmentData = data.id;
    this.child.editClickHandler(data.id, 1);
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
