import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { PigmyAccountMasterComponent } from '../../../master/customer/pigmy-account-master/pigmy-account-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface PigmyAccountMaster {
  AC_TYPE: string;
  AC_ACNOTYPE: string;
  AC_NAME: string;
  AC_NO: number;
  AC_CUSTID: number;
  AC_SHORT_NAME: string;
  REF_ACNO: string;
  AC_MEMBTYPE: string;
  AC_MEMBNO: string;
  AC_AGE: string;
  AC_OPDATE: string;
  AC_RENEW_DATE: string;
  AC_EXPDT: string;
  AC_OCODE: string;
  AC_CATG: string;
  AC_OPR_CODE: string;
  AC_INTCATA: string;
  AC_ADDFLAG: boolean
  AC_THONO: string;

  AC_TWARD: string;

  AC_TADDR: string;

  AC_TGALLI: string;

  AC_TAREA: string;

  AC_TCTCODE: string;

  AC_TPIN: string

  AC_MONTHS: string;
  AC_SCHMAMT: string;
  AGENT_ACTYPE: string;
  AGENT_ACNO: string;
  //minor and introducer
  AC_MINOR: boolean;
  AC_MBDATE: string;
  AC_GRDNAME: string;
  AC_GRDRELE: string;
  AC_INTROBRANCH: string;
  AC_INTROID: string;
  AC_INTRACNO: string;
  AC_INTRNAME: string;
  SIGNATURE_AUTHORITY: string;
  PG_COMM_TYPE: boolean;
}
@Component({
  selector: 'app-master-pigmy',
  templateUrl: './master-pigmy.component.html',
  styleUrls: ['./master-pigmy.component.scss']
})
export class MasterPigmyComponent implements OnInit {

  @ViewChild(PigmyAccountMasterComponent) child: PigmyAccountMasterComponent;
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
  pigmyAccountMaster: PigmyAccountMaster[];
  PigmyData: any;
  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    // this.dtExportButtonOptions = {
    //   ajax: 'fake-data/datatable-data.json',
    //   columns: [
    //     {
    //       title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
    //       }
    //     },
    //     {
    //       title: 'Name',
    //       data: 'name'
    //     }, {
    //       title: 'Position',
    //       data: 'position'
    //     }, {
    //       title: 'Office',
    //       data: 'office'
    //     }, {
    //       title: 'Age',
    //       data: 'age'
    //     }, {
    //       title: 'Start Date',
    //       data: 'date'
    //     }, {
    //       title: 'Salary',
    //       data: 'salary'
    //     }],
    //   dom: "Blrtip",
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
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        this.page = dataTableParameters.start / dataTableParameters.length;
        // this.mySubscription = interval(1000).subscribe((x => {
        this.http
          .post<DataTableResponse>(
            this.url + '/pigmy-account-master/passing',
            dataTableParameters
          ).subscribe(resp => {
            this.pigmyAccountMaster = resp.data;
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
        // {
        //   title: 'PG Scheme Type',
        //   data: 'AC_ACNOTYPE'
        // },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account Number',
          data: 'BANKACNO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Member Name',
          data: 'AC_NAME'
        },
        // {
        //   title: 'A/c Short Name',
        //   data: 'AC_SHORT_NAME'
        // },

        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
        {
          title: 'Detail Address',
          data: 'AC_ADDR'
        },
        {
          title: 'City',
          data: 'AC_CTCODE'
        },
        // {
        //   title: 'Member Scheme',
        //   data: 'AC_MEMBTYPE'
        // },
        // {
        //   title: 'Member No',
        //   data: 'AC_MEMBNO'
        // },

        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        // {
        //   title: 'Renewal Date',
        //   data: 'AC_RENEW_DATE'
        // },
        {
          title: 'Expiry Date',
          data: 'AC_EXPDT'
        },

        // {
        //   title: 'Category',
        //   data: 'AC_CATG'
        // },
        // {
        //   title: 'Operation',
        //   data: 'AC_OPR_CODE'
        // },
        // {
        //   title: 'Interest Category',
        //   data: 'AC_INTCATA'
        // },

        {
          title: 'Period',
          data: 'AC_MONTHS'
        },
        {
          title: 'Default Deposite Amount',
          data: 'AC_SCHMAMT'
        },
        // {
        //   title: 'Agent Scheme',
        //   data: 'AGENT_ACTYPE'
        // },
        {
          title: 'Agent Code',
          data: 'AGENT_ACNO'
        }, {
          title: 'Minor Details',
          data: 'AC_MINOR'
        },
        // {
        //   title: 'Birth Date',
        //   data: 'AC_MBDATE'
        // },
        // {
        //   title: 'Guardian Name',
        //   data: 'AC_GRDNAME'
        // },
        // {
        //   title: 'Relation',
        //   data: 'AC_GRDRELE'
        // },
        // {
        //   title: 'Branch',
        //   data: 'AC_INTROBRANCH'
        // },
        // {
        //   title: 'Account Type',
        //   data: 'AC_INTROID'
        // },
        // {
        //   title: 'Account Code',
        //   data: 'AC_INTRACNO'
        // },
        // {
        //   title: 'Name',
        //   data: 'AC_INTRNAME'
        // },
        // {
        //   title: 'Signature Authority',
        //   data: 'SIGNATURE_AUTHORITY'
        // },
        {
          title: 'Is Calculate Separate Pigmy Commission for Loan Against Collection',
          data: 'PG_COMM_TYPE'
        },

      ],
      dom: 'Blrtip',
    };
  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }

  //get saving customer data
  getPigmyAccountData(data) {
    this.PigmyData = data.id;
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
