import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { PigmyAgentMasterComponent } from '../../../master/customer/pigmy-agent-master/pigmy-agent-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface PigmyAgentMaster {
  AC_TYPE: string;
  AC_ACNOTYPE: string;
  AC_NO: number;
  AC_CUSTID: number;
  AC_OPDATE: string;
  AC_NAME: string;
  PIGMY_ACTYPE: string;
  AC_INTROBRANCH: string;
  AC_INTROID: string;
  AC_INTRACNO: string;
  AC_INTRNAME: string;
  SIGNATURE_AUTHORITY: string;
  AC_NNAME: string;
  AC_NRELA: string;
  AC_NDATE: string;
  AGE: number;
  AC_ADDFLAG: boolean;
  AC_NHONO: string;
  AC_NWARD: string;
  AC_NADDR: string;
  AC_NGALLI: string;
  AC_NAREA: string;
  AC_NCTCODE: string;
  AC_NPIN: number;
}
@Component({
  selector: 'app-master-pigmy-agent',
  templateUrl: './master-pigmy-agent.component.html',
  styleUrls: ['./master-pigmy-agent.component.scss']
})
export class MasterPigmyAgentComponent implements OnInit {
  @ViewChild(PigmyAgentMasterComponent) child: PigmyAgentMasterComponent;
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
  pigmyAgentMaster: PigmyAgentMaster[];
  savingData: any;
  constructor(private http: HttpClient,) { }
  pigmyAgentData: any = {};

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
              this.url + '/pigmy-agent-master/passing',
              dataTableParameters
            ).subscribe(resp => {
              this.pigmyAgentMaster = resp.data;
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
          title: 'Agent Number',
          data: 'AC_NO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Member Name',
          data: 'AC_NAME'
        },
        {
          title: 'Pimgy Scheme',
          data: 'PIGMY_ACTYPE'
        },
        {
          title: 'Appontied On',
          data: 'AC_OPDATE'
        },
      ],
      dom: 'Blrtip',

    };

  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
  //get saving customer data
  getPigmyAgentData(data) {
    this.pigmyAgentData = data.id;
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
