import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { TermDepositsMasterComponent } from '../../../master/customer/term-deposits-master/term-deposits-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface TermDepositMaster {
  AC_ACNOTYPE: string;
  AC_TYPE: string;
  AC_NO: number;
  AC_INTRATE: string;
  AC_CUSTID: number;
  REF_ACNO: string;
  AC_OPDATE: string;
  AC_BIRTH_DT: string;
  AC_OCODE: string;
  AC_CATG: string;
  AC_OPR_CODE: string;
  AC_INTCATA: string;
  AC_IS_RECOVERY: boolean;
  AC_REF_RECEIPTNO
  AC_ASON_DATE: string;
  AC_MONTHS: string

  AC_EXPDT: string;
  AC_SCHMAMT: string;
  AC_MATUAMT: string;
  IS_DISCOUNTED_INT_RATE: boolean;
  //address
  AC_ADDFLAG: boolean
  AC_THONO: string;
  AC_TWARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_TAREA: string;
  AC_TCTCODE: string;
  AC_TPIN: string
  //minor and introducer
  AC_MINOR: boolean
  AC_MBDATE: string
  AC_GRDNAME: string
  AC_GRDRELE: string
  AC_INTROBRANCH: string
  AC_INTROID: string
  AC_INTRACNO: string
  AC_INTRNAME: string
  SIGNATURE_AUTHORITY: string
  BANKACNO: number
}

@Component({
  selector: 'app-master-deposits',
  templateUrl: './master-deposits.component.html',
  styleUrls: ['./master-deposits.component.scss']
})
export class MasterDepositsComponent implements OnInit, AfterViewInit {

  @ViewChild(TermDepositsMasterComponent) child: TermDepositsMasterComponent;
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
  termDepositMaster: TermDepositMaster[];
  termDepositData: any;
  constructor(private http: HttpClient, private translate:TranslateService,) {
    this.translate.setDefaultLang(environment.setLang);
   }


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
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        this.page = dataTableParameters.start / dataTableParameters.length;
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        // this.mySubscription = interval(1000).subscribe((x => {
        this.http
          .post<DataTableResponse>(
            this.url + '/term-deposits-master/passing',
            dataTableParameters
          ).subscribe(resp => {
            this.termDepositMaster = resp?.data;
            callback({
              recordsTotal: resp?.recordsTotal,
              recordsFiltered: resp?.recordsTotal,
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
          title: this.translate.instant('Passing.Action.Action'),
        },
        // {
        //   title: 'Scheme Type',
        //   data: 'AC_ACNOTYPE'
        // },
        {
          title: this.translate.instant('Passing.Action.Scheme'), 
          data: 'AC_TYPE'
        },
        {
          title: this.translate.instant('Passing.Action.Account_Number'),
          data: 'BANKACNO'
        },
        {
          title: this.translate.instant('Passing.Action.Customer_ID'),
          data: 'AC_CUSTID'
        },
        {
          title: this.translate.instant('Passing.Action.Member_Name'),
          data: 'AC_NAME'
        },
        {
          title: this.translate.instant('Passing.Action.Detail_Address'),
          data: 'AC_ADDR'
        },
        {
          title: this.translate.instant('Passing.Action.City'),
          data: 'AC_CTCODE'
        },
        {
          title: this.translate.instant('Passing.Action.Manual_Reference_Number'),
          data: 'REF_ACNO'
        },
        {
          title: this.translate.instant('Passing.Action.Birth_Date'),
          data: 'AC_MBDATE'
        },
        {
          title: this.translate.instant('Passing.Action.Opening_date'),
          data: 'AC_OPDATE'
        },
        {
          title: this.translate.instant('Passing.Master_Deposits.As_On_Date'),
          data: 'AC_ASON_DATE'
        },
        {
          title: this.translate.instant('Passing.Master_Deposits.Maturity_Date'),
          data: 'AC_EXPDT'
        },
        {
          title: this.translate.instant('Passing.Master_Deposits.Receipt_No'),
          data: 'AC_REF_RECEIPTNO'
        },
        {
          title: this.translate.instant('Passing.Master_Deposits.Deposit_Amount'),
          data: 'AC_SCHMAMT'
        },
        {
          title: this.translate.instant('Passing.Master_Deposits.Maturity_Amount'),
          data: 'AC_MATUAMT'
        },
        {
          title: this.translate.instant('Passing.Master_Deposits.Minor_Details'),
          data: 'AC_MINOR'
        },
        {
          title: this.translate.instant('Passing.Master_Deposits.Signature_Authority'),
          data: 'SIGNATURE_AUTHORITY'
        },

      ],
      dom: 'Blrtip',
    };
  }
  //get saving customer data
  getTermDepositData(data) {
    this.termDepositData = data.id;
    this.child.editClickHandler(data.id, 1);
    this.child.DatatableHideShow = false;
    this.child.rejectShow = true;
    this.child.approveShow = true;
  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  reloadTable() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#termmastertable1 tfoot tr').appendTo('#termmastertable1 thead');
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
}
