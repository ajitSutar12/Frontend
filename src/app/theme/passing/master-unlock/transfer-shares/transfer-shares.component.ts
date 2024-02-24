import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { SharesTransferComponent } from '../../../transaction/share-transactions/shares-transfer/shares-transfer.component';
import { TranslateService } from '@ngx-translate/core';


class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend 
interface ShareTransfer {
  TRAN_NO: number;
  TRAN_AMOUNT: number;
  TRAN_TIME: number;
  TRAN_TYPE: string;
  TRAN_ACTYPE: string;
  TRAN_ACNO: number;
  USER_CODE: string;

}


@Component({
  selector: 'app-transfer-shares',
  templateUrl: './transfer-shares.component.html',
  styleUrls: ['./transfer-shares.component.scss']
})
// export class TransferSharesComponent implements OnInit {
//   @ViewChild(SharesTransferComponent) child: SharesTransferComponent;
//   @ViewChild('trigger') myDiv: ElementRef<HTMLElement>;

//   dtExportButtonOptions: any = {};
//   @ViewChild(DataTableDirective, { static: false })
//   dtElement: DataTableDirective;
//   dtTrigger: Subject<any> = new Subject();
//   mySubscription: Subscription

//   page: number = 1;
//   //filter variable
//   filterData = {};
//   url = environment.base_url;
//   // Store data from backend
//   shareTransfer: ShareTransfer[];
//   savingData: any;
//   constructor(private http: HttpClient,) { }

//   shareTransferData: any 

//   ngOnInit(): void {
//     this.dtExportButtonOptions = {
//       pagingType: 'full_numbers',
//       paging: true,
//       pageLength: 10,
//       serverSide: true,
//       processing: true,
//       ajax: (dataTableParameters: any, callback) => {
//         dataTableParameters.minNumber = dataTableParameters.start + 1;
//         dataTableParameters.maxNumber =
//           dataTableParameters.start + dataTableParameters.length;
//         let datatableRequestParam: any;
//         this.page = dataTableParameters.start / dataTableParameters.length;

//         dataTableParameters.columns.forEach(element => {
//           if (element.search.value != '') {
//             let string = element.search.value;
//             this.filterData[element.data] = string;
//           } else {
//             let getColumnName = element.data;
//             let columnValue = element.value;
//             if (this.filterData.hasOwnProperty(element.data)) {
//               let value = this.filterData[getColumnName];
//               if (columnValue != undefined || value != undefined) {
//                 delete this.filterData[element.data];
//               }
//             }
//           }
//         });
//         let data: any = localStorage.getItem('user');
//         let result = JSON.parse(data);
//         let branchCode = result.branch.id;

//         dataTableParameters['branchCode'] = branchCode;
//         dataTableParameters['filterData'] = this.filterData;
//         // this.mySubscription = interval(1000).subscribe((x => {

//         this.http
//           .post<DataTableResponse>(
//             this.url + '/shares-transfer/Tranpassing',
//             dataTableParameters
//           ).subscribe(resp => {
//             this.shareTransfer = resp.data;
//             callback({
//               recordsTotal: resp.recordsTotal,
//               recordsFiltered: resp.recordsTotal,
//               data: []
//             });
//           });
//         //  }));
//       },
//       columnDefs: [{
//         targets: '_all',
//         defaultContent: ""
//       }],
//       columns: [
//         {
//           title: 'Action',
//         },
//         {
//           title: 'Record Number ',
//           data: 'TRAN_NO'
//         },
//         {
//           title: 'Amount',
//           data: 'TRAN_AMOUNT'
//         },
//         {
//           title: 'Time',
//           data: 'TRAN_TIME'
//         },

//         {
//           title: 'Scheme Type',
//           data: 'TRAN_ACTYPE'
//         },
//         // {
//         //   title: 'Scheme Code',
//         //   data: 'TRAN_TYPE'
//         // },

//         {
//           title: 'Account Number',
//           data: 'TRAN_ACNO'
//         },
//         // {
//         //   title: 'Account Name',
//         //   data: 'TRAN_ACNO'
//         // },
//         {
//           title: 'User',
//           data: 'USER_CODE'
//         },
//         // {
//         //   title: 'User Name',
//         //   // data: 'AC_OPDATE'
//         // },
//       ],
//       dom: 'Blrtip',

//     };

//   }

//   ngOnDestroy() {
//     this.mySubscription?.unsubscribe();
//   }
//   //get saving customer data
//   getShareTransferData(data) {
//     this.shareTransferData = data.id;
//     this.child.editClickHandler(data.id);
//     this.child.rejectShow = true;
//     this.child.approveShow = true; 
//   }

//   reloadTable() {
//     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//       dtInstance.ajax.reload()
//       console.log(dtInstance.ajax.reload);
//     });
//   }
// }


export class TransferSharesComponent implements OnInit, AfterViewInit {

  @ViewChild(SharesTransferComponent) child: SharesTransferComponent;
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
  // issueNewShare: issueNewShare[];
  shareTransfer: ShareTransfer[];
  savingData: any;
  constructor(private http: HttpClient, private translate:TranslateService) {
    this.translate.setDefaultLang(environment.setLang) }

  shareTransferData: any

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
            this.url + '/shares-transfer/Tranpassing',
            dataTableParameters
          ).subscribe(resp => {
            this.shareTransfer = resp.data;
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
          title: this.translate.instant('master.Action.Action'),
        },
        {
          title: this.translate.instant('master.All.Record_Number'),
          data: 'TRAN_NO'
        },
        {
          title:this.translate.instant('master.All.Amount'),
          data: 'TRAN_AMOUNT'
        },
        {
          title: this.translate.instant('master.All.Time'),
          data: 'TRAN_TIME'
        },

        {
          title: this.translate.instant('master.All.Scheme_Type'),
          data: 'TRAN_ACTYPE'
        },
        // {
        //   title: 'Scheme Code',
        //   data: 'TRAN_TYPE'
        // },

        {
          title:this.translate.instant('master.All.Account_Number'),
          data: 'TRAN_ACNO'
        },
        // {
        //   title: 'Account Name',
        //   data: 'TRAN_ACNO'
        // },
        {
          title:this.translate.instant('master.All.User'),
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
  getShareTransferData(data) {
    this.shareTransferData = data.id;
    this.child.editClickHandler(data.id);
    this.child.rejectShow = true;
    this.child.approveShow = true;
  }

  reloadTable() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
      console.log(dtInstance.ajax.reload);

    });
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#transactiontable tfoot tr').appendTo('#transactiontable thead');
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

