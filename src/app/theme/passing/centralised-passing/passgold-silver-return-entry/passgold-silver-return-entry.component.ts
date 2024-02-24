import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { GoldSilverReturnEntryComponent } from 'src/app/theme/transaction/gold-silver-return-entry/gold-silver-return-entry.component';
import { TranslateService } from '@ngx-translate/core';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface GoldSilverReturnEntry {
  TRAN_NO: number
  TRAN_AMOUNT: number

  NARRATION: string
  TRAN_ENTRY_TYPE: string

}
@Component({
  selector: 'app-passgold-silver-return-entry',
  templateUrl: './passgold-silver-return-entry.component.html',
  styleUrls: ['./passgold-silver-return-entry.component.scss']
})
export class PassgoldSilverReturnEntryComponent implements OnInit, AfterViewInit {

  @ViewChild(GoldSilverReturnEntryComponent) child: GoldSilverReturnEntryComponent;
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
  goldSilverReturnEntry: GoldSilverReturnEntry[];
  savingData: any;
  constructor(private http: HttpClient,private translate:TranslateService,) {
    this.translate.setDefaultLang(environment.setLang);
   }

  goldSilverReturnEntryData: any = {};
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
            this.url + '/gold-silver-return-entry/passing',
            dataTableParameters
          ).subscribe(resp => {
            this.goldSilverReturnEntryData = resp.data;
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
          title: this.translate.instant('Passing.Action.Account_Number'),
          data: 'AC_NO'
        },
        {
          title: this.translate.instant('Passing.Gold_Silver_Return_Entry.Return_Date'),
          data: 'RETURN_DATE'
        },

        {
          title: this.translate.instant('Passing.Gold_Silver_Return_Entry.User_Code'),
          data: 'USER_CODE'
        },
      ],
      dom: 'Blrtip',

    };
  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  goldsilverentry
  //get saving customer data
  getGoldSilverReturnEntryData(data) {
    this.goldsilverentry = data;
    this.child.editClickHandler(data);
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
