import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;

  angForm: FormGroup;
  url = environment.base_url
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
  // filterData = {};

  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = "start";
  active = 1;
  activeKeep = 1;


  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;

  //variable to get Id to update
  updateID: number = 0;

  // column search variable
  filterData = {};


  dcno


  // Hide Show Buttons

  isSubmit: boolean = true
  isCancel: boolean = true
  isUpdate: boolean = false

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef,
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


    this.http.get('http://192.168.1.157:4771/dd-change-printing/getData').subscribe((data) => {
      this.bankArray = data
      this.cityArray = data
    })

    this.tableLoad()
  }

  tableLoad() {

    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber = dataTableParameters.start + dataTableParameters.length;
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
        this.http.post<DataTableResponse>('http://192.168.1.157:4771/dd-change-printing', dataTableParameters)
          .subscribe(resp => {
            console.log(resp)
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
        defaultContent: ''
      }],
      columns: [
        {
          title: "Action",
        },
        { title: 'ID', data: 'id' },
        { title: 'Tran No', data: 'CODE' },
        { title: 'Branch No', data: 'BRANCH_NO' },
        { title: 'Issue Date', data: 'TRAN_DATE' },
        { title: 'Bank Code', data: 'BANK_CODE' },
        { title: 'City Code', data: 'CITY_CODE' },
        { title: 'Draft No', data: 'DRAFT_NO' },
        { title: 'Drawn On', data: 'DRAWN_ON' },
        { title: 'Amount', data: 'AMT' }
      ],
      dom: 'Blrtip'
    };
  }


  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      CODE: ['', [Validators.required]],
      BRANCH_NO: ['', [Validators.required]],
      TRAN_DATE: ['', [Validators.required]],
      BANK_CODE: [''],
      CITY_CODE: [''],
      DRAFT_NO: ['', [Validators.required]],
      DRAWN_ON: ['', [Validators.required]],
      AMT: ['', [Validators.required]],
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
    this.isSubmit = true
    this.isCancel = true
    this.isUpdate = false

    if (this.angForm.valid) {
      let formValue = this.angForm.value;
      let userData = JSON.parse(localStorage.getItem("user"));

      let USER_CODE = userData.id


      let Date: any;
      if (this.dates == formValue.TRAN_DATE) {
        Date = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        Date = moment(formValue.TRAN_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let obj = {
        'BRANCH_CODE': formValue.BRANCH_CODE,
        'CODE': formValue.CODE,
        'BRANCH_NO': formValue.BRANCH_NO,
        'TRAN_DATE': Date,
        'BANK_CODE': this.bankCodeNo,
        'CITY_CODE': this.cityCodeNo,
        'DRAFT_NO': formValue.DRAFT_NO,
        'DRAWN_ON': formValue.DRAWN_ON,
        'AMT': formValue.AMT,
        'USER_CODE': USER_CODE,
        'OFFICER_CODE': USER_CODE,
      }

      this.http.post('http://192.168.1.157:4771/dd-change-printing/insert', obj).subscribe((data) => {
        Swal.fire('Success', 'Data submitted successfully', 'success');
      })
    }

    else {
      Swal.fire('Warning', 'Please fill all mandatory fields', 'warning');

    }
  }

  resetForm() {
    this.angForm.controls['CODE'].reset()
    this.angForm.controls['BRANCH_NO'].reset()
    this.angForm.controls['TRAN_DATE'].reset()
    this.angForm.controls['BANK_CODE'].reset()
    this.angForm.controls['CITY_CODE'].reset()
    this.angForm.controls['DRAFT_NO'].reset()
    this.angForm.controls['DRAWN_ON'].reset()
    this.angForm.controls['AMT'].reset()
  }

  editClickHandler(id) {

    this.isSubmit = false
    this.isCancel = true
    this.isUpdate = true


    console.log(id)
    this.updateID = id;
    // let obj = { 'id': id }
    this.http.get('http://192.168.1.157:4771/dd-change-printing/' + id).subscribe((resp: any) => {
      console.log(resp)

      // this.ngBranchCode = resp.BRANCH_CODE
      // this.bankCode = resp,
      // this.cityCode = resp.CITY_CODE
      this.angForm.patchValue({
        CODE: resp.CODE,
        BRANCH_NO: resp.BRANCH_NO,
        TRAN_DATE: resp.TRAN_DATE,
        BANK_CODE: resp.BANK_CODE,
        CITY_CODE: resp.CITY_CODE,
        DRAFT_NO: resp.DRAFT_NO,
        DRAWN_ON: resp.DRAWN_ON,
        AMT: resp.AMT,
      });
      // this.angForm.controls['CITY_CODE'].setValue(resp.CITY_CODE);
      // this.cdRef.detectChanges();

    })
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  updateData() {

    let userData = JSON.parse(localStorage.getItem("user"));
    let USER_CODE = userData.id

    let obj = this.angForm.value


    let Date: any;
    if (this.dates == obj.TRAN_DATE) {
      Date = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
    } else {
      Date = moment(obj.TRAN_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY')
    };


    obj['id'] = this.updateID;
    obj['USER_CODE'] = USER_CODE;
    obj['OFFICER_CODE'] = USER_CODE;
    obj['TRAN_DATE'] = Date

    // this.http.put(this.url + '/dd-change-printing/update', obj).subscribe(data => {
    this.http.put('http://192.168.1.157:4771/dd-change-printing/update', obj).subscribe(data => {


      Swal.fire("Success!", "Record Updated Successfully !", "success");

      this.tableLoad()
      this.resetForm()
      this.isSubmit = true
      this.isCancel = true
      this.isUpdate = false

    })
  }

}