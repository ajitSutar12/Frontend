import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shares-ccts',
  templateUrl: './shares-ccts.component.html',
  styleUrls: ['./shares-ccts.component.scss']
})
export class SharesCCTSComponent implements OnInit {

  @ViewChild('myTable') myTable: ElementRef

  angForm: FormGroup;
  obj: any;

  iframe5url: any = '';
  showRepo: boolean = false;
  Date: string;
  maxDate: Date;
  minDate: Date;
  tableColumns: any;
  branchid: any;
  constructor(
    private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
  ) {
    this.Date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  //ngfor variables
  d_Scheme
  c_Scheme
  introducerACNo
  kd_scheme
  glacno
  glCredit
  //ngmodel variables
  selectedDScheme
  selectedCScheme
  selectedaccNo
  selectedKDscheme
  particulars
  Narration


  showSecondSelect = false;
  showShareAmt = true;
  kayamDepScheme = true;
  bsValue = new Date();

  branch_code = [];
  selectedBranch: any
  totalAmount: number = 1000; // The total amount limit
  shareAmounts: number[] = [200, 900]; // Initial share amounts
  newShareAmounts: number[] = []; // New share amounts after redistribution

  // table calculation
  tableData: any = [];
  vargani: number[] = [];
  kayamthev;
  ShareBl: any[] = [];
  shareTran: any[] = []
  kayamTh: any = [];
  kayam_acno: any = [];
  memno;
  shareAmt;
  shbal;
  shtotal;
  var_bal;
  kay_th;
  kayam = 0;
  totalVargani_Bal;
  totalShare_Tran;
  totalKayam_Thev;

  varg_bal
  nar: any = [];
  url = environment.base_url;
  report_url = environment.report_url;
  ngOnInit(): void {
    this.createForm();
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      //debugger
      this.branch_code = data;
      console.log('Branch Data', this.branch_code);
      this.selectedBranch = user.branchId;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 10;
    this.obj = [code, branchCode]

    this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
      console.log(data);
      this.introducerACNo = data;

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.d_Scheme = data;
      this.c_Scheme = data;
    });

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      //console.log(data)
      var filtered = data.filter(function (kd_scheme) {
        return (kd_scheme.name == 'TD');
      });
      this.kd_scheme = filtered.slice(0, 5);


    })
    // this.http.get('http://192.168.137.1:3000/employee/getSchemeCredit').subscribe((data: any) => {
    this.http.get(this.url + '/employee/getSchemeCredit').subscribe((data: any) => {

      // console.log(data);

      this.glCredit = data

      console.log(this.glCredit)
    })

    // this.http.get('http://192.168.137.1:3000/employee/getCrGlcode').subscribe((data: any) => {
    this.http.get(this.url + '/employee/getCrGlcode').subscribe((data: any) => {

      // console.log(data);

      this.glacno = data

      console.log(this.glacno)
    })


    // this.http.get('http://192.168.137.1:3000/employee/Narration').subscribe((data: any) => {

    this.http.get(this.url + '/employee/Narration').subscribe((data: any) => {

      // console.log(data);

      this.nar = data
      console.log(this.nar)
    })



  }

  createForm() {
    this.angForm = this.fb.group({
      dscheme: ['', [Validators.required]],
      cscheme: ['', [Validators.required]],
      kdscheme: [''],
      shamtlimit: [''],
      accNo: [''],
      particulars: ['', [Validators.required]],
      tlAmt: [''],

      // Narration: ['', [Validators.required]],
      // Date: ["", [Validators.required]],
      branch_code: ['', [Validators.required]],
    });
  }
  crid
  sno1
  sno2
  onSelectChange(event) {
    console.log('Selected Credit Scheme:', this.selectedCScheme);
    this.sno1 = event.S_APPL,
      this.sno2 = event.S_ACNOTYPE
    this.crid = event.id

    if (this.selectedCScheme && this.selectedCScheme.S_NAME === "GENERAL LEDGER") {
      this.showSecondSelect = true;
      this.showShareAmt = false;
      this.kayamDepScheme = false;


      this.disableColumns();

    } else {
      this.showSecondSelect = false;
      this.showShareAmt = true;
      this.kayamDepScheme = true;

      this.enableColumns();

    }


    console.log('GL A/c No. Field Enabled:', this.showSecondSelect);
    // this.sno1 = event.S_APPL,
    //   this.sno2 = event.S_ACNOTYPE
  }

  // disable column
  disableColumns() {
    const table: HTMLTableElement = this.myTable.nativeElement;
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      // Disable the 6th and 7th cells (Share Balance and Share Transfer columns)
      cells[5].classList.add('disabled');
      cells[6].classList.add('disabled');
    }
  }

  // Method to enable all columns
  enableColumns() {
    const table: HTMLTableElement = this.myTable.nativeElement;
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      // Remove the disabled class from all cells
      cells[5].classList.remove('disabled');
      cells[6].classList.remove('disabled');
    }
  }


  id1
  name1
  id
  getstype(event) {
    this.id1 = event.id,
      this.name1 = event.name
    this.id = event.value
  }

  kayamTh1: any[] = []


  isShowAcc: boolean = false
  isHideAcc: boolean = false
  getglacno(event) {
    // this.isShowAcc = true
    // this.isHideAcc = false
    let obj = {

      "S_APPL": this.id1,           //DEBIT
      "S_ACNOTYPE": this.name1,
      "S_APPL1": this.sno1,         //CREDIT
      "S_ACNOTYPE1": this.sno2,
      'S_APPL2': this.ID,
      'S_ACNOTYPE2': this.Name
    }

    // this.http.post('http://192.168.137.1:3000/employee/getShares', obj).subscribe((data: any) => {
    this.http.post(this.url + '/employee/getShares', obj).subscribe((data: any) => {

      console.log(data);

      this.tableData = data
      for (let i = 0; i < this.tableData.length; i++) {
        this.kayamTh1.push(this.tableData[i].vargani_balance);
      }
      this.totalVargani_Bal = this.tableData.reduce((total, row) => total + parseFloat(row.vargani_balance), 0);

      console.log("kayamThev", this.kayamTh1);
      this.tableData.forEach((row, index) => {
        row.KayamThav = this.kayamTh1[index];

      });
      this.totalKayam_Thev = this.tableData.reduce((total, row) => total + parseFloat(row.KayamThav), 0);

      console.log(this.tableData)
    }
    )


  }


  ID
  Name
  getkayamdep(event) {
    this.isShowAcc = false
    this.isHideAcc = true
    this.ID = event.id,
      this.Name = event.name
    let obj = {

      "S_APPL": this.id1,           //DEBIT
      "S_ACNOTYPE": this.name1,
      "S_APPL1": this.sno1,         //CREDIT
      "S_ACNOTYPE1": this.sno2,
      'S_APPL2': this.ID,
      'S_ACNOTYPE2': this.Name
    }
    // this.http.post('http://192.168.137.1:3000/employee/getShares', obj).subscribe((data: any) => {

    this.http.post(this.url + '/employee/getShares', obj).subscribe((data: any) => {
      console.log(data);

      this.tableData = data

      console.log(this.tableData)

    }
    )
    // this.enableColumns();
  }

  getshareTranfer(event) {

    this.shareAmt = event.target.value;
    for (let i = 0; i < this.tableData.length; i++) {
      this.shbal = parseFloat(this.tableData[i].share_balance);

      if (this.shareAmt == this.shbal) {
        this.shareTran.push(this.kayam);
        this.kayamTh.push(parseFloat(this.tableData[i].vargani_balance))
      } else if (this.shareAmt > this.shbal) {

        this.shtotal = this.shbal + parseFloat(this.tableData[i].vargani_balance);
        this.var_bal = this.shtotal - this.shareAmt;
        this.kay_th = this.tableData[i].vargani_balance - this.var_bal
        if (this.shtotal < this.shareAmt) {
          this.shareTran.push(parseFloat(this.tableData[i].vargani_balance));
          this.kayamTh.push(this.kayam);
        } else if (this.shtotal >= this.shareAmt) {

          this.shareTran.push(this.kay_th);
          this.kayamTh.push(this.var_bal);
        }
      } else if (this.shareAmt < this.shbal) {
        this.shareTran.push(this.kayam);
        this.kayamTh.push(parseFloat(this.tableData[i].vargani_balance));
      }
      this.totalVargani_Bal = this.tableData.reduce((total, row) => total + parseFloat(row.vargani_balance), 0);
    }

    console.log("shareTran", this.shareTran);
    console.log("kayam", this.kayamTh);

    this.tableData.forEach((row, index) => {
      row.KayamThav = this.kayamTh[index];
    });
    this.tableData.forEach((row, index) => {
      row.ShareTransfer = this.shareTran[index];
    });
    this.totalShare_Tran = this.tableData.reduce((total, row) => total + parseFloat(row.ShareTransfer), 0);
    this.totalKayam_Thev = this.tableData.reduce((total, row) => total + parseFloat(row.KayamThav), 0);


  }

  code
  submit() {
    if (this.angForm.invalid) {
      return;
    }

    this.VarBal();
    let userData = JSON.parse(localStorage.getItem("user"));
    this.code = userData.branch.CODE
    this.branchid = userData.branch.id

    let obj = {
      'BRANCH_CODE': this.branchid,
      'DATA': this.tableData,
      'data': this.debdata,
      'data1': this.crdata,

      'id': this.id,
      'name': this.name1,
      'crid': this.crid,
      'crname': this.sno2
    };

    // this.http.post('http://192.168.137.1:3000/employee/setDebitEntry', obj).subscribe(
    this.http.post(this.url + '/employee/setDebitEntry', obj).subscribe(

      (response) => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data submitted successfully',
        });
      },

    );
  }

  // Reset Feilds
  Reset() {
    this.angForm.controls['branch_code'].reset();
    this.angForm.controls['dscheme'].reset();
    this.angForm.controls['cscheme'].reset();
    this.angForm.controls['accNo'].reset();
    this.angForm.controls['kdscheme'].reset();
    this.angForm.controls['shamtlimit'].reset();
    this.angForm.controls['tlAmt'].reset();
    this.angForm.controls['particulars'].reset();

  }
  // getglacno(event){

  // }
  vb: number;
  Vardata: any[] = []
  dactype;
  crdata: any[] = []
  debdata: any[] = []


  VarBal() {


    for (let i = 0; i < this.tableData.length; i++) {
      this.vb = parseFloat(this.tableData[i].vargani_balance)
      if (this.vb != 0) {
        this.Vardata.push(this.tableData[i]);
      }
    }
    console.log(this.Vardata);
    for (let i = 0; i < this.Vardata.length; i++) {
      this.dactype = (this.Vardata[i].AC_TYPE)
      if (this.dactype == this.id) {
        this.debdata.push(this.Vardata[i]);
      } else if (this.dactype == this.crid) {
        this.crdata.push(this.Vardata[i])
      }
    }
    console.log('deb', this.debdata);
    console.log('ced', this.crdata)

  }
}


