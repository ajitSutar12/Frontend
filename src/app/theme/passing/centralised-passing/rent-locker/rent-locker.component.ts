import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { LockerRentTransactionsComponent } from '../../../transaction/locker/locker-rent-transactions/locker-rent-transactions.component';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface rentLocker {
  TRAN_NO: number;
  TRAN_AMOUNT: number;
  TRAN_TIME: number;
  TRAN_TYPE: string;
  TRAN_ACTYPE: string;
  TRAN_ACNO: number;
  USER_CODE: string;

}


@Component({
  selector: 'app-rent-locker',
  templateUrl: './rent-locker.component.html',
  styleUrls: ['./rent-locker.component.scss']
})
export class RentLockerComponent implements OnInit {


  @ViewChild(LockerRentTransactionsComponent) child: LockerRentTransactionsComponent;
  @ViewChild('trigger') myDiv: ElementRef<HTMLElement>;

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
  rentLocker: RentLockerComponent[];
  savingData: any;
  constructor(private http: HttpClient,) { }

  rentLockerData: any

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
        // this.mySubscription = interval(1000).subscribe((x => {
        this.http
          .post<DataTableResponse>(
            this.url + '/locker-rent-transaction/passing',
            dataTableParameters
          ).subscribe(resp => {
            this.rentLocker = resp.data;
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
          title: 'Amount',
          data: 'TRAN_AMOUNT'
        },
        {
          title: 'Time',
          data: 'TRAN_TIME'
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

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  //get saving customer data
  getRentLockerData(data) {
    this.rentLockerData = data.id;
    this.child.editClickHandler(data.id);
    // this.child.rejectShow = true;
    // this.child.approveShow = true;
  }

  reloadTable() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
  }
}


