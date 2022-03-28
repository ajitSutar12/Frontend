import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { CashCreditAcRenewalComponent } from 'src/app/theme/transaction/cash-credit-ac-renewal/cash-credit-ac-renewal.component';


class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface CashCreditAcRenewal {
  TRAN_NO: number
  AC_TYPE: string
  AC_NO: string
  NEW_RECEIPTNO: string
  
    
}
@Component({
  selector: 'app-passcash-credit-ac-renewal',
  templateUrl: './passcash-credit-ac-renewal.component.html',
  styleUrls: ['./passcash-credit-ac-renewal.component.scss']
})
export class PasscashCreditAcRenewalComponent implements OnInit {
  @ViewChild(CashCreditAcRenewalComponent) child: CashCreditAcRenewalComponent;
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
  cashCreditAcRenewal: CashCreditAcRenewal[];
  savingData: any;
  constructor(private http: HttpClient,) { }

  cashCreditAcRenewalData: any = {};

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
            this.url + '/cash-credit-ac-renewal/passing',
            dataTableParameters
          ).subscribe(resp => {
            this.cashCreditAcRenewal = resp.data;
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
        // {
        //   title: 'Receipt Number',
        //   data: 'NEW_RECEIPTNO'
        // },
       
      ],
      dom: 'Blrtip',

    };

  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
  //get saving customer data
  getCashCreditAcRenewalData(data) {
    console.log(data.id);
    this.cashCreditAcRenewalData = data.id;
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
