import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { SavingMasterComponent } from '../../../master/customer/saving-master/saving-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface SavingMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  AC_CATG: string
  AC_NAME: string
  AC_BALCATG: string
  AC_OPR_CODE: number
  AC_CUSTID: number
  AC_INTCATA: string
  AC_OPDATE: Date
  AC_SCHMAMT: string
  REF_ACNO: string
  //address
  AC_ADDFLAG: boolean
  AC_THONO: string;
  AC_TWARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_TAREA: string;
  AC_TCTCODE: number;
  AC_TPIN: number
  BANKACNO: number
  //minor and introducer
  AC_MINOR: boolean
  AC_MBDATE: Date
  AC_GRDNAME: string
  AC_GRDRELE: string
  AC_INTROBRANCH: string
  AC_INTROID: string
  AC_INTRACNO: string
  AC_INTRNAME: string
  SIGNATURE_AUTHORITY: string
}
@Component({
  selector: 'app-master-saving',
  templateUrl: './master-saving.component.html',
  styleUrls: ['./master-saving.component.scss']
})


export class MasterSavingComponent implements OnInit {
  @ViewChild(SavingMasterComponent) child: SavingMasterComponent;
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
  savingMaster: SavingMaster[];
  savingData: any;
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
        this.http
          .post<DataTableResponse>(
            this.url + '/saving-master/Unapprovpassing',
            dataTableParameters
          ).subscribe(resp => {
            let data: any = localStorage.getItem('user');
            let result = JSON.parse(data);
            let branchCode = result.branch.id;
            let master = new Array()
            resp.data.forEach(element => {
              if (element?.BRANCH_CODE == branchCode) {
                master.push(element)
                this.savingMaster = master
              }
            })
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
          data: 'BANKACNO'
        },
        {
          title: 'Name',
          data: 'AC_NAME'
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
        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
        {
          title: 'Minor Details',
          data: 'AC_MINOR'
        },
        {
          title: 'Birth Date',
          data: 'AC_MBDATE'
        },
      ],
      // dom:'<"bottom"flp><"clear">'
      // dom: 'ip',
      dom: 'Blrtip',
    };

  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  //get saving customer data
  getSavingData(data) {
    this.savingData = data.id;
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
