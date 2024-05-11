import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { BatchVoucherComponent } from 'src/app/theme/transaction/batch-voucher/batch-voucher.component';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface BatchVoucher {
  TRAN_NO: string;
  TRAN_AMOUNT: string;

  TRAN_TIME: string;
  TRAN_ACTYPE: string;
  TRAN_TYPE: string;
  TRAN_ACNO: string;
  USER_CODE: string;


}

@Component({
  selector: 'app-passbatch-voucher',
  templateUrl: './passbatch-voucher.component.html',
  styleUrls: ['./passbatch-voucher.component.scss']
})
export class PassbatchVoucherComponent implements OnInit {
  @ViewChild(BatchVoucherComponent) child: BatchVoucherComponent;
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
  batchVoucher: BatchVoucher[];
  savingData: any;

  setLang:any;
  constructor(private http: HttpClient, 
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,
  ) { 
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  batchVoucherData: any = {};




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
            this.url + '/voucher/batchPassing',
            dataTableParameters
          ).subscribe(resp => {
            this.batchVoucher = resp.data;
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
          title: this.translate.instant('Passing.Action.Action'),
        },
        {
          title: this.translate.instant('Passing.Batch_Voucher.Record_Number'),
          data: 'TRAN_NO'
        },
        {
          title: this.translate.instant('Passing.Batch_Voucher.Amount'),
          data: 'TRAN_AMOUNT'
        },

        {
          title: this.translate.instant('Passing.Batch_Voucher.Time'),
          data: 'TRAN_TIME'
        },
        {
          title: this.translate.instant('Passing.Batch_Voucher.Scheme_Type'),
          data: 'TRAN_ACTYPE'
        },
        // {
        //   title: 'Scheme',
        //   data: 'scheme'
        // },
        {
          title: this.translate.instant('Passing.Batch_Voucher.Transaction_Type'),
          data: 'TRAN_TYPE'
        },
        {
          title: this.translate.instant('Passing.Batch_Voucher.Account_Number'),
          data: 'TRAN_ACNO'
        },
        // {
        //   title: 'Account Name',
        //   data: 'TRAN_ACNO'
        // },
        {
          title: this.translate.instant('Passing.Batch_Voucher.User'),
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
  getBatchVoucherData(data) {
    this.batchVoucherData = data.id;
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
