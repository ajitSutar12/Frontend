import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { TermDepositAccountClosingComponent } from 'src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.component';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface TermDepositClosingVoucher {
  TRAN_NO:number;
  IS_PREMATURE_CLOSE:number;
  TOKEN_NO: number;
  NET_PAYABLE_AMOUNT: number;
  TRAN_TYPE: string;
  TRAN_ACTYPE: string;
  TRAN_ACNO: number;
  USER_CODE: string;
    
}


@Component({
  selector: 'app-deposit-closing-voucher',
  templateUrl: './deposit-closing-voucher.component.html',
  styleUrls: ['./deposit-closing-voucher.component.scss']
})
export class DepositClosingVoucherComponent implements OnInit {
  @ViewChild(TermDepositAccountClosingComponent) child: TermDepositAccountClosingComponent;
  @ViewChild('trigger') myDiv: ElementRef<HTMLElement>;

  dtExportButtonOptions: any = {};
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  mySubscription: Subscription

  page: number = 1;
  //filter variable
  filterData = {};
  url = environment.base_url;
  // Store data from backend
  termDepositClosingVoucher: TermDepositClosingVoucher[];
  savingData: any;
  constructor(private http: HttpClient,) { }

  termDepositClosingVoucherData: any = {};

  ngOnInit(): void {
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
        this.mySubscription = interval(1000).subscribe((x => {
        this.http
          .post<DataTableResponse>(
            this.url + '/term-deposit-account-closing/passing',
            dataTableParameters
          ).subscribe(resp => {
            this.termDepositClosingVoucher = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
        }));
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
          title: 'Closing Status',
          data: 'IS_PREMATURE_CLOSE'
        },
        {
          title: 'Token Number',
          data: 'TOKEN_NO'
        },
        {
          title: 'Net Payable Amount',
          data: 'NET_PAYABLE_AMOUNT'
        },
        {
          title: 'Scheme Type',
          data: 'TRAN_ACTYPE'
        },
        // {
        //   title: 'Scheme Code',
        //   data: 'TRAN_TYPE'
        // },
        
        {
          title: 'Account Number',
          data: 'TRAN_ACNO'
        },
        // {
        //   title: 'Account Name',
        //   data: 'TRAN_ACNO'
        // },
        {
          title: 'User',
          data: 'USER_CODE'
        },
        // {
        //   title: 'User Name',
        //   // data: 'AC_OPDATE'
        // },
      ],
      dom: 'Blrtip',

    };
    
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
  //get saving customer data
  getDepositeClosingVoucherData(data) {
    this.termDepositClosingVoucherData = data.id;
    this.child.editClickHandler(data.id);
    this.child.DatatableHideShow = false;
    this.child.rejectShow = true;
    this.child.approveShow = true;
  }
  public getData(value): void {
    let el: HTMLElement = this.myDiv.nativeElement;
    el.click();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
  }


}
