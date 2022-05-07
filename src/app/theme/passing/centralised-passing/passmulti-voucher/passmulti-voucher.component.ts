import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { MultiVoucherComponent } from 'src/app/theme/transaction/multi-voucher/multi-voucher.component';


class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface MultiVoucher {
  TRAN_NO: string;
  TRAN_AMOUNT: string;
  TRAN_DRCR: string;
  TRAN_TIME: string;
  TRAN_ACTYPE: string;
  TRAN_TYPE: string;
  TRAN_ACNO: string;
  USER_CODE: string;

}
@Component({
  selector: 'app-passmulti-voucher',
  templateUrl: './passmulti-voucher.component.html',
  styleUrls: ['./passmulti-voucher.component.scss']
})
export class PassmultiVoucherComponent implements OnInit {
  @ViewChild(MultiVoucherComponent) child: MultiVoucherComponent;
  @ViewChild('triggerhide') myDiv: ElementRef<HTMLElement>;
  dtExportButtonOptions: any = {};
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  mySubscription: Subscription

  page: number = 1;
  //filter variable
  filterData = {};
  url = environment.base_url;
  // Store data from backend
  multiVoucher: MultiVoucher[];
  savingData: any;
  constructor(private http: HttpClient,) { }

  multiVoucherData: any = {};

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
              this.url + '/voucher/multiPassing',
              dataTableParameters
            ).subscribe(resp => {
              this.multiVoucher = resp.data;
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
          title: 'Amount',
          data: 'TRAN_AMOUNT'
        },
        {
          title: 'Date',
          data: 'TRAN_DATE'
        },
        {
          title: 'Time',
          data: 'TRAN_TIME'
        },
      ],
      dom: 'Blrtip',

    };

  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
  //get saving customer data
  getMultiVoucherData(data) {
    this.multiVoucherData = data.TRAN_NO;
    this.child.editClickHandler(data.TRAN_NO);
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
