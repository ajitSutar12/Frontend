import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { TermLoanMasterComponent } from '../../../master/customer/term-loan-master/term-loan-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface TermLoanMaster {
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
  AC_REPAYMODE: string
  INSTALLMENT_METHOD: string
  AC_INSTALLMENT: number
  AC_MORATORIUM_PERIOD: number
  AC_GRACE_PERIOD: number
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
  BANKACNO: number
}
@Component({
  selector: 'app-master-loan',
  templateUrl: './master-loan.component.html',
  styleUrls: ['./master-loan.component.scss']
})
export class MasterLoanComponent implements OnInit {

  @ViewChild(TermLoanMasterComponent) child: TermLoanMasterComponent;
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
  termLoanMaster: TermLoanMaster[];
  loanData: any;
  constructor(private http: HttpClient,) { }


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
        this.mySubscription = interval(1000).subscribe((x => {
          this.http
            .post<DataTableResponse>(
              this.url + '/term-loan-master/passing',
              dataTableParameters
            ).subscribe(resp => {
              this.termLoanMaster = resp.data;
              console.log(this.termLoanMaster, "data")
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
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account Number',
          data: 'BANKACNO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Name',
          data: 'AC_NAME'
        },
        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'Renewal Date',
          data: 'AC_OPEN_OLD_DATE'
        },
        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
        {
          title: 'Detail',
          data: 'AC_ADDR'
        },
        {
          title: 'City',
          data: 'AC_CTCODE'
        },
        {
          title: 'Sanction Date',
          data: 'AC_SANCTION_DATE'
        },
        {
          title: 'Period',
          data: 'AC_MONTHS'
        },
        {
          title: 'Expiry Date',
          data: 'AC_EXPIRE_DATE'
        },
        {
          title: 'Sanction Limit',
          data: 'AC_SANCTION_AMOUNT'
        },
        {
          title: 'Drawing Power',
          data: 'AC_DRAWPOWER_AMT'
        },
        {
          title: 'Interest Rate',
          data: 'AC_INTRATE'
        },
        {
          title: 'Installment',
          data: 'AC_INSTALLMENT'
        },
        {
          title: 'Sanction Authority',
          data: 'AC_AUTHORITY'
        },
        {
          title: 'Purpose',
          data: 'AC_PURPOSE'
        }
      ],
      dom: 'Blrtip',
    };

  }
  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
  //get saving customer data
  getLoanData(data) {
    console.log(data.id);
    this.loanData = data.id;
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
