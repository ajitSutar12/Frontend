import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { CashCreditMasterComponent } from '../../../master/customer/cash-credit-master/cash-credit-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface CashCreditMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  AC_CUSTID: string
  AC_OPDATE: Date
  AC_OPEN_OLD_DATE: Date
  REF_ACNO: string
  AC_INTCATA: string
  AC_SANCTION_AMOUNT: number
  AC_SANCTION_DATE: Date
  AC_DRAWPOWER_AMT: number
  AC_MONTHS: number
  AC_EXPIRE_DATE: Date
  AC_INTRATE: number
  AC_INSTALLMENT: number
  AC_AUTHORITY: string
  AC_RECOMMEND_BY: string
  AC_RECOVERY_CLERK: string
  AC_PRIORITY: string
  AC_PRIORITY_SUB1: string
  AC_PRIORITY_SUB2: string
  AC_PRIORITY_SUB3: string
  AC_WEAKER: string
  AC_PURPOSE: string
  AC_INDUSTRY: string
  AC_HEALTH: string
  AC_RELATION_TYPE: string
  AC_DIRECTOR: string
  AC_DIRECTOR_RELATION: string
  AC_COREG_NO: number
  AC_COREG_DATE: Date
  AC_COREG_AMT: number
  AC_RESO_NO: number
  AC_RESO_DATE: Date
  AC_ADDFLAG: boolean
  AC_THONO: string
  AC_TWARD: string
  AC_TADDR: string
  AC_TGALLI: string
  AC_TAREA: string
  AC_TCTCODE: string
  AC_TPIN: number
  AC_IS_RECOVERY: boolean
}
@Component({
  selector: 'app-master-cash-credit',
  templateUrl: './master-cash-credit.component.html',
  styleUrls: ['./master-cash-credit.component.scss']
})
export class MasterCashCreditComponent implements OnInit, AfterViewInit {
  @ViewChild(CashCreditMasterComponent) child: CashCreditMasterComponent;
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
  cashCreditMaster: CashCreditMaster[];
  cashCreditData: any;
  setLang:any;
  constructor(private http: HttpClient,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,) {
      this.systemParameter.getFormData(1).subscribe(data => {
    
        this.setLang = data.SET_LANGUAGE
        this.translate.setDefaultLang(this.setLang);
      })
   }

  ngOnInit(): void {
    // Fetching Server side data
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
            this.url + '/cash-credit-master/passing',
            dataTableParameters
          ).subscribe(resp => {
            this.cashCreditMaster = resp.data;
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
          title: this.translate.instant('Passing.Action.Name'), 
          data: 'AC_NAME'
        },
        {
          title: this.translate.instant('Passing.Action.Opening_date'),
          data: 'AC_OPDATE'
        },
        {
          title: this.translate.instant('Passing.Action.Renewal_Date'),
          data: 'AC_OPEN_OLD_DATE'
        },
        {
          title: this.translate.instant('Passing.Action.Manual_Reference_Number'),
          data: 'REF_ACNO'
        },
        {
          title: this.translate.instant('Passing.Action.Detail'),
          data: 'AC_ADDR'
        },
        {
          title: this.translate.instant('Passing.Action.City'),
          data: 'AC_CTCODE'
        },
        {
          title: this.translate.instant('Passing.Action.Sanction_Date'),
          data: 'AC_SANCTION_DATE'
        },
        {
          title: this.translate.instant('Passing.Action.Period'),
          data: 'AC_MONTHS'
        },
        {
          title:  this.translate.instant('Passing.Action.Expiry_Date'),
          data: 'AC_EXPIRE_DATE'
        },
        {
          title: this.translate.instant('Passing.Action.Sanction_Limit'),
          data: 'AC_SANCTION_AMOUNT'
        },
        {
          title: this.translate.instant('Passing.Action.Drawing_Power'),
          data: 'AC_DRAWPOWER_AMT'
        },
        {
          title:this.translate.instant('Passing.Action.Interest_Rate'),
          data: 'AC_INTRATE'
        },
        {
          title: this.translate.instant('Passing.Action.Installment'),
          data: 'AC_INSTALLMENT'
        },
        {
          title: this.translate.instant('Passing.Action.Sanction_Authority'),
          data: 'AC_AUTHORITY'
        },
        {
          title: this.translate.instant('Passing.Action.Purpose'),
          data: 'AC_PURPOSE'
        },

      ],
      dom: 'Blrtip',
    };


  }
  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }

  //get saving customer data
  getCashCreditData(data) {
    this.cashCreditData = data.id;
    this.child.editClickHandler(data.id, 1);
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
      $('#mastertable1 tfoot tr').appendTo('#mastertable1 thead');
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
