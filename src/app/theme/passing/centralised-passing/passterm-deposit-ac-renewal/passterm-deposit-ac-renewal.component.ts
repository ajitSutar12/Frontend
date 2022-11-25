import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { TermDepositeAcRenewalComponent } from 'src/app/theme/transaction/term-deposite-ac-renewal/term-deposite-ac-renewal.component';


class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface TermDepositAcRenewal {
  TRAN_NO: number
  AC_TYPE: string
  AC_NO: string
  NEW_RECEIPTNO: string

}
@Component({
  selector: 'app-passterm-deposit-ac-renewal',
  templateUrl: './passterm-deposit-ac-renewal.component.html',
  styleUrls: ['./passterm-deposit-ac-renewal.component.scss']
})
export class PasstermDepositAcRenewalComponent implements OnInit {

  @ViewChild(TermDepositeAcRenewalComponent) child: TermDepositeAcRenewalComponent;
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
  termDepositAcRenewal: TermDepositAcRenewal[];
  savingData: any;
  constructor(private http: HttpClient,) { }

  termDepositAcRenewalData: any = {};


  ngOnInit(): void {
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 2,
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
            this.url + '/cash-credit-ac-renewal/TermDepositpassing',
            dataTableParameters
          ).subscribe(resp => {
            this.termDepositAcRenewal = resp.data;
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
          title: 'Record Number ',
          data: 'TRAN_NO'
        },
        {
          title: 'Account Type',
          data: 'AC_TYPE'
        },

        // {
        //   title: 'Account Name',
        //   data: 'AC_NAME'
        // },

        {
          title: 'Account Number',
          data: 'AC_NO'
        },
        {
          title: 'Receipt Number',
          data: 'NEW_RECEIPTNO'
        },

      ],
      dom: 'Blrtip',

    };
  }
  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  //get saving customer data
  getTermDepositAcRenewalData(data) {
    this.termDepositAcRenewalData = data.id;
    this.child.editClickHandler(data.id);
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
