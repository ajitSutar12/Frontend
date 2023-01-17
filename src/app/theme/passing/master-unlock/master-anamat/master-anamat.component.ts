import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AnamatGSMComponent } from '../../../master/customer/anamat-gsm/anamat-gsm.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface anamatinf {
  //id:number
  AC_ACNOTYPE: number;
  AC_TYPE: string;
  AC_NO: String;
  AC_CUSTID: string;
  AC_TITLE: string;
  AC_NAME: string;
  AC_MEMBTYPE: string;
  AC_MEMBNO: string;
  AC_HONO: string;
  AC_WARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_AREA: string;
  AC_CTCODE: string;
  AC_PIN: string;
  AC_OPDATE: Date;
  AC_IS_RECOVERY: string;
  DEBIT: boolean;
  AC_PARTICULAR: string;
  BANKACNO: number
}

@Component({
  selector: 'app-master-anamat',
  templateUrl: './master-anamat.component.html',
  styleUrls: ['./master-anamat.component.scss']
})
export class MasterAnamatComponent implements OnInit {

  @ViewChild(AnamatGSMComponent) child: AnamatGSMComponent;
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
  anamat: anamatinf[];
  anamatData: any;
  constructor(private http: HttpClient,) { }
  ngOnInit(): void {
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: "full_numbers",
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
        dataTableParameters.columns.forEach((element) => {
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
        dataTableParameters["filterData"] = this.filterData;
        // this.mySubscription = interval(1000).subscribe((x => {

        this.http
          .post<DataTableResponse>(
            this.url + "/anamat-gsm/Unapprovpassing",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.anamat = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });

        // }));
      },
      columnDefs: [
        {
          targets: "_all",
          defaultContent: '',
        },
      ],
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          data: "AC_TYPE",
          title: "Scheme",
        },
        {
          data: "BANKACNO",
          title: "Account Number",
        },
        {
          data: "AC_CUSTID",
          title: "Customer ID",
        },
        {
          data: "AC_NAME",
          title: "Member Name",
        },      
        {
          data: "AC_AREA",
          title: "Detail Address",
        },
        {
          data: "AC_CTCODE",
          title: "City",
        },
        {
          data: "AC_OPDATE",
          title: "Opening date",
        },
        {
          data: "AC_PARTICULAR",
          title: "Reason",
        },
      ],
      dom: "Blrtip",
    };
  }
  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  //get saving customer data
  getAnamatData(data) {
    this.anamatData = data.id;
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
