import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { DataTableDirective } from 'angular-datatables';
import { log } from 'console';
import * as moment from 'moment';
import { Subject } from 'rxjs-compat';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-npamarking',
  templateUrl: './npamarking.component.html',
  styleUrls: ['./npamarking.component.scss']
})
export class NPAMarkingComponent implements OnInit {

  npaProcessDate
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject<any>();

  // dropdown variaqbles
  branch_code: any;
  ngBranchCode: any = null
  ngscheme: any = null
  scheme: any

  //for date
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  warrentDate: any
  ngwarrentDate: any = null
  fromdate: any = null
  todate: any = null
  npaDates
  schemeArray
  fromAcc
  toAcc
  fromAccNo
  tableData: any[] = [];
  pageSize = 10; // Number of items per page
  currentPage = 1; // Current page number
  totalPages: number;
  isTableShow: boolean = true

  // Transaction type variable
  ngnpaclass: any = null
  npaClass = [
    { id: 'S', label: 'Standard' },
    { id: 'SS', label: 'Sub Standard' },
    { id: 'D1', label: 'Doubtfull Assets 1' },
    { id: 'D2', label: 'Doubtfull Assets 2' },
    { id: 'D3', label: 'Doubtfull Assets 3' },
    { id: 'L', label: 'Loss Assets' }
  ]

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig, private cdr: ChangeDetectorRef
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value

    })

    // this.http.get(this.url + '/npa-marking').subscribe((data) => {
    //   this.warrentDate = data
    // })

    this.http.get(this.url + '/ledger-view/cschem').subscribe((data) => {
      this.schemeArray = data
      // console.log('array',this.schemeArray);
    })

    let obj
    {

    }

    this.http.post(this.url + '/voucher/npadatadate', obj).subscribe((data) => {
      this.npaDates = data
      // console.log(data)
    })

  }

  getSchemeId
  branchCode
  getScheme(event) {
    this.getSchemeId = event.id
    let userData = JSON.parse(localStorage.getItem('user'));
    this.branchCode = userData.branch.id
    let obj = {
      'ID': this.getSchemeId,
      'branch_code': this.branchCode
    }

    this.http.post(this.url + '/voucher/lnccdsloanacc', obj).subscribe((data) => {
      this.fromAcc = data
      this.toAcc = data
      // console.log(data)
    })

  }

  npaDate
  getNPADate(event) {
    this.npaDate = event.REPORT_DATE
  }

  fromBnkAcno
  fromAcno
  getFromAcc(event) {
    this.fromBnkAcno = event.BANKACNO
    this.fromAcno = event.AC_NO

  }




  toBnkAcno
  toAcno
  // tableData
  getToAcc(event) {
    this.toBnkAcno = event.BANKACNO
    this.toAcno = event.AC_NO
    this.isTableShow = true
    this.getTableData()
  }


  // onPageChange(page: number) {
  //   this.currentPage = page;
  //   this.getTableData();
  // }

  getTableData() {
    if (this.fromAcno < this.toAcno) {
      // let startIndex = (this.currentPage - 1) * this.pageSize;
      // let endIndex = startIndex + this.pageSize;

      let obj = {
        'FROMBANKACNO': this.fromBnkAcno,
        'TOBANKACNO': this.toBnkAcno,
        'ID': this.getSchemeId,
        'date': this.npaDate,
        'branch_code': this.branchCode
      }

      this.http.post(this.url + '/voucher/npadatamarckrecords', obj).subscribe((data: any[]) => {
        console.log(data)
        this.tableData = data
        // this.tableData = data.slice(startIndex, endIndex);
        // this.updateSerialNumbers(startIndex);
        // this.totalPages = Math.ceil(data.length / this.pageSize);
      });
    } else {
      // Handle error case
    }
  }

  // updateSerialNumbers(startIndex: number) {
  //   this.tableData.forEach((item, index) => {
  //     item.serialNumber = startIndex + index + 1;
  //   });
  // }


  createForm() {

    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      WARRENT_DATE: ['', [Validators.required]],
      FROM_ACC: ['', [Validators.required]],
      TO_ACC: ['', [Validators.required]],
      NPA_CLASS: [''],
      NPA_DATE: [''],


    })
  }
  // checking date 
  counter = 0;
  checkDate(event) {

    this.counter = this.counter + 1;
    if (this.counter > 2 && event.length != 0) {
      let value1
      let value2
      value1 = moment(this.fromdate).format('DD/MM/YYYY');
      // console.log(value1)
      value2 = moment(this.todate).format('DD/MM/YYYY');
      // console.log(value2)
      if (moment(value1).isSame(value2)) {
        Swal.fire("from date should not be same as to date")
        this.angForm.controls['TO_DATE'].reset()
      }
    }
  }

  dataSend: any[] = [];

  // onCellChange(event: any, data: any, field: string) {
  //   data[field] = event.target.textContent.trim();
  //   this.dataSend.push(data);
  //   console.log(this.dataSend);
  //   // this.update();
  // }

  //   update() {

  //     let userData = JSON.parse(localStorage.getItem("user"));
  //     let brachCode = userData.branch.id

  //     let obj = {
  //       'data': this.dataSend,
  //       'BRANCH_CODE': brachCode
  //     }

  //     // this.http.post(this.url+'/voucher/npaupdaterecords', obj).subscribe((data: any[]) => {
  //     //   //     console.log(data, 'marking updatedata');

  //     // });
  //   }



  pendingUpdates: any[] = [];

  onCellChange(event: any, data: any, field: string) {
    let update = this.pendingUpdates.find(update => update.data === data);
    if (!update) {
      update = { data, changes: {} };
      this.pendingUpdates.push(update);
    }


    if (field === 'NPA_CLASS') {
      update.changes[field] = event;
    } else {
      update.changes[field] = event.target.textContent.trim();
    }
  }
  isEditing: boolean = false;

  // Other component properties and methods...

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }


  update() {

    let userData = JSON.parse(localStorage.getItem("user"));
    let brachCode = userData.branch.id

    this.pendingUpdates.forEach(update => {
      Object.entries(update.changes).forEach(([field, value]) => {
        update.data[field] = value;
      });
      this.dataSend.push(update.data);
    });

    let obj1 = {
      'BRANCH_CODE': brachCode
    }
    let obj = {
      'data': this.dataSend,
      'BRACH_CODE': obj1

    }

    this.http.post(this.url+'/voucher/npaupdaterecords', obj).subscribe((data: any[]) => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.isTableShow = false
    });

    console.log(this.dataSend);
    this.pendingUpdates = [];
  }
  // isEditing: boolean = false;
  cancel() {
    this.angForm.reset();
    this.isTableShow = false
    this.tableData = []
    this.reSetForm()
    this.createForm()

  }
  reSetForm() {

    // this.angForm.controls['AC_TYPE'].setValue(null);
    // this.angForm.controls['NPA_DATE'].reset()
    // this.angForm.controls['FROM_ACC'].reset()
    // this.angForm.controls['TO_ACC'].reset()
    // this.angForm.controls.TO_ACC.reset()
  }

}
