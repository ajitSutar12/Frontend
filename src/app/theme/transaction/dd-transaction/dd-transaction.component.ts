import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-dd-transaction',
  templateUrl: './dd-transaction.component.html',
  styleUrls: ['./dd-transaction.component.scss']
})
export class DdTransactionComponent implements OnInit {

  url = environment.base_url
  angForm: FormGroup;
  branch_code
  ngBranchCode = null
  tranNo
  branchNo
  issueDate
  bankCode
  cityCode
  cityArray
  bankArray
  drawnOn
  amount
  draftNo
  dates: any = null
  tableData
  dtExportButtonOptions: DataTables.Settings = {};
  filterData = {};

  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = "start";
  active = 1;
  activeKeep = 1;

  // For reloading angular datatable after CRUD operation
  //  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();



  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,

  ) {
    this.dates = moment().format('DD/MM/YYYY');
  }

  ngOnInit(): void {
    this.createForm();
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })


    this.http.get(this.url + '/dd-change-printing/getData').subscribe((data) => {
      this.bankArray = data
      this.cityArray = data
    })


    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   paging: true,
    //   pageLength: 10,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTableParameters: any, callback) => {
    //     this.http.get(this.url +'/dd-change-printing').subscribe((data: any[]) => {
    //       this.tableData = data;
    //       callback({ data: data });
    //     });
    //   },
    //   columns: [
    //     { title: 'ID', data: 'id' },
    //     { title: 'Tran No', data: 'CODE' },
    //     { title: 'Branch No', data: 'BRANCH_NO' },
    //     { title: 'Issue Date', data: 'TRAN_DATE' },
    //     { title: 'Bank Code', data: 'BANK_CODE' },
    //     { title: 'City Code', data: 'CITY_CODE' },
    //     { title: 'Draft No', data: 'DRAFT_NO' },
    //     { title: 'Drawn On', data: 'DRAWN_ON' },
    //     { title: 'Amount', data: 'AMT' }
    //   ],
    //   dom: 'Blrtip'
    // };


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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .get<DataTableResponse>(this.url + '/dd-change-printing').subscribe(resp => {
            this.tableData = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
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
          title: 'ID',
          data: 'id'
        },
        {
          title: 'Tran No',
          data: 'CODE'
        },
        {
          title: 'Branch No',
          data: 'BRANCH_NO'
        },
        {
          title: 'Issue Date',
          data: 'TRAN_DATE'
        },
        {
          title: 'Participation in Clearing',
          data: 'PARTICIPATE_IN_CLEARING'
        }
      ],
      dom: 'Blrtip',
    }
  }


  ngAfterViewInit(): void {
    //  this.ngSelect.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('#customermastertable tfoot tr').appendTo('#customermastertable thead');
        $("input", this.footer()).on("keyup change", function () {
          if (this["value"] != "") {
            that.search(this["value"]).draw();
          } else {
            that.search(this["value"]).draw();
          }
        });
      });
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      TRAN_NO: ['', [Validators.required]],
      BRANCH_NO: ['', [Validators.required]],
      ISSUE_DATE: ['', [Validators.required]],
      BANK_CODE: [''],
      CITY_CODE: [''],
      DRAFT_NO: ['', [Validators.required]],
      DRAWN_ON: ['', [Validators.required]],
      AMOUNT: ['', [Validators.required]],
    })
  }

  bankCodeNo
  getBankCode(event) {
    this.bankCodeNo = event.BANK_CODE
  }

  cityCodeNo
  getCityCode(event) {
    this.cityCodeNo = event.CODE
  }

  submit() {

    if (this.angForm.valid) {
      let formValue = this.angForm.value;
      let userData = JSON.parse(localStorage.getItem("user"));

      let USER_CODE = userData.id


      let Date: any;
      if (this.dates == formValue.ISSUE_DATE) {
        Date = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        Date = moment(formValue.ISSUE_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let obj = {
        'BRANCH_CODE': formValue.BRANCH_CODE,
        'CODE': formValue.TRAN_NO,
        'BRANCH_NO': formValue.BRANCH_NO,
        'TRAN_DATE': Date,
        'BANK_CODE': this.bankCodeNo,
        'CITY_CODE': this.cityCodeNo,
        'DRAFT_NO': formValue.DRAFT_NO,
        'DRAWN_ON': formValue.DRAWN_ON,
        'AMT': formValue.AMOUNT,
        'USER_CODE': USER_CODE,
        'OFFICER_CODE': USER_CODE,
      }

      this.http.post(this.url + '/dd-change-printing/insert', obj).subscribe((data) => {
        Swal.fire('Success', 'Data submitted successfully', 'success');
      })
    }

    else {
      Swal.fire('Warning', 'Please fill all mandatory fields', 'warning');

    }
  }

  resetForm() {
    this.angForm.controls['TRAN_NO'].reset()
    this.angForm.controls['BRANCH_NO'].reset()
    this.angForm.controls['ISSUE_DATE'].reset()
    this.angForm.controls['BANK_CODE'].reset()
    this.angForm.controls['CITY_CODE'].reset()
    this.angForm.controls['DRAFT_NO'].reset()
    this.angForm.controls['DRAWN_ON'].reset()
    this.angForm.controls['AMOUNT'].reset()
  }

  editClickHandler(id) {

  }

}