import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { TermDepositsMasterComponent } from '../../../master/customer/term-deposits-master/term-deposits-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';

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
export class MasterDepositsComponent implements OnInit {

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
  constructor(private http: HttpClient,) { }


  ngOnInit(): void {
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
            this.url + '/term-deposits-master/Unapprovpassing',
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
          title: 'Action',
        },
        // {
        //   title: 'Scheme Type',
        //   data: 'AC_ACNOTYPE'
        // },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account No',
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
        {
          title: 'Detail Address',
          data: 'AC_ADDR'
        },
        {
          title: 'City',
          data: 'AC_CTCODE'
        },
        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
        {
          title: 'Birth Date',
          data: 'AC_MBDATE'
        },
        {
          title: 'Opening Date',
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
          title: 'Receipt No.',
          data: 'AC_REF_RECEIPTNO'
        },
        {
          title: 'Deposit Amount',
          data: 'AC_SCHMAMT'
        },
        {
          title: 'Maturity Amount',
          data: 'AC_MATUAMT'
        },
        {
          title: 'Minor Details',
          data: 'AC_MINOR'
        },
        {
          title: 'Signature Authority',
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
}
