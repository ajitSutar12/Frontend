import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { LockerMasterComponent } from '../../../master/customer/locker-master/lockermaster.component'
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface lockerMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  AC_CUSTID: number
  EMP_NO: string
  AC_NAME: string
  AC_JOIN_DATE: string
  AC_RETIRE_DATE: string
  MEMBERSHIP_BY: string
  AC_SREPRESENT: string
  AC_OPDATE: string
  AC_EXPDT: string
  DEATH_DATE: string
  AC_DIRECT: string
  AC_BRANCH: string
  SUB_SALARYDIVISION_CODE: string
  AC_IS_RECOVERY: boolean
  AC_SBNO: string
  AC_RESNO: string
  AC_RESDT: string
  AC_INSTALLMENT: string
  REF_ACNO: string
  AC_NARR: string
  // AC_SHBALDATE: string
  // AC_OP_SHNO: string
  // AC_FACE_VALUE: string
  // AC_OP_BAL: string
  AC_DEV_NAME: string
  AC_DEV_WARD: string
  AC_DEV_ADD: string
  AC_DEV_GALLI: string
  AC_DEV_AREA: string
  AC_DEV_CITYCODE: string
  AC_ADDFLAG: boolean
  AC_THONO: string;
  AC_TWARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_TAREA: string;
  AC_TCTCODE: number;
  AC_TPIN: number
  BANKACNO: number
}
@Component({
  selector: 'app-master-locker',
  templateUrl: './master-locker.component.html',
  styleUrls: ['./master-locker.component.scss']
})
export class MasterLockerComponent implements OnInit, AfterViewInit {
  @ViewChild(LockerMasterComponent) child: LockerMasterComponent;
  @ViewChild('triggerhide') myDiv: ElementRef<HTMLElement>;

  dtExportButtonOptions: any = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();

  page: number = 1;
  //filter variable
  filterData = {};
  url = environment.base_url;
  // Store data from backend
  lockerMaster: lockerMaster[];
  shareData: any;
  mySubscription: Subscription
  constructor(private http: HttpClient,) { }

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
        this.http.post<DataTableResponse>(
          this.url + '/locker-master/passing',
          dataTableParameters
        ).subscribe(resp => {
          this.lockerMaster = resp.data;
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
          title: 'Action'
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account Number',
          data: ' BANKACNO'
        },
        {
          title: 'Member Name',
          data: 'AC_NAME'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Detail Address',
          data: 'AC_ADDR'
        },
        {
          title: 'City',
          data: 'AC_CTCODE'
        },

        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        // {
        //   title: 'Manual Reference Number',
        //   data: 'KEYWORD'
        // },
      ],
      dom: 'Blrtip',
    };
  }

  ngAfterViewInit(): void {


    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  //get saving customer data
  getLockerData(data) {
    this.shareData = data.id;
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
