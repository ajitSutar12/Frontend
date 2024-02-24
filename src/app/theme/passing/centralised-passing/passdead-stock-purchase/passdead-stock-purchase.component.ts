import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { DeadStockPurchaseComponent } from 'src/app/theme/transaction/dead-stock-purchase/dead-stock-purchase.component';
import { TranslateService } from '@ngx-translate/core';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DeadStockPurchase {
  TRAN_NO: number
  TRAN_AMOUNT: number
  TRAN_SUPPLIER_NAME: string
  NARRATION: string
  TRAN_ENTRY_TYPE: string

}

@Component({
  selector: 'app-passdead-stock-purchase',
  templateUrl: './passdead-stock-purchase.component.html',
  styleUrls: ['./passdead-stock-purchase.component.scss']
})
export class PassdeadStockPurchaseComponent implements OnInit ,AfterViewInit{

  @ViewChild(DeadStockPurchaseComponent) child: DeadStockPurchaseComponent;
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
  deadStockPurchase: DeadStockPurchase[];
  savingData: any;
  constructor(private http: HttpClient,private translate:TranslateService,) {
    this.translate.setDefaultLang(environment.setLang);
   }

  deadStockPurchaseData: any = {};

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
            this.url + '/deadstock-purchase/passing',
            dataTableParameters
          ).subscribe(resp => {
            this.deadStockPurchase = resp.data;
            console.log('table data', this.deadStockPurchase)
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
          title: this.translate.instant('Passing.Action.Record_Number'),
          data: 'TRAN_NO'
        },
        {
          title: this.translate.instant('Passing.Action.Amount'),
          data: 'TRAN_AMOUNT'
        },

        {
          title: this.translate.instant('Passing.Dead_Stock_Purchase.Supplier_Name'),
          data: 'TRAN_SUPPLIER_NAME'
        },
        {
          title: this.translate.instant('Passing.Action.Narration'),
          data: 'NARRATION'
        },

        {
          title: this.translate.instant('Passing.Action.Entry_Type'),
          data: 'TRAN_ENTRY_TYPE'
        },

      ],
      dom: 'Blrtip',

    };
  }
  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  //get saving customer data
  getDeadStockPurchaseData(data) {
    this.deadStockPurchaseData = data.id;
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
