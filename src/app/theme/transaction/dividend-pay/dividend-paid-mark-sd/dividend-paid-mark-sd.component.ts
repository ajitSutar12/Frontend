import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dividend-paid-mark-sd',
  templateUrl: './dividend-paid-mark-sd.component.html',
  styleUrls: ['./dividend-paid-mark-sd.component.scss']
})
export class DividendPaidMarkSDComponent implements OnInit {
  angForm: FormGroup;
  clicked = false;
  showRepo: boolean = false;
  url = environment.base_url;
  constructor(
    private fb: FormBuilder,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
    private http: HttpClient,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,) { }


  //ngfor variables
  s_Div
  schemename
  acc_number
  date
  Branchcode
  //ngmodel variables
  selectedBranch
  selectedSDiv
  particulars
  sname
  account_no
  selectedSubSDiv
  selectedTransScheme
  obj: any;
  selectedTransBranch
  introducerACNo: any;
  Schemecode: any
  schemeType: string = 'SH'
  Narration
  date1
  getIntroducer() {
    // debugger
    this.obj = [this.selectedTransScheme, this.selectedTransBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      // console.log(data);

      this.introducerACNo = data;
    })

  }

  subSdivision
  narr
  Date
  ngOnInit(): void {

    this.createForm();

    // this.http.get('http://192.168.137.1:3000/employee/getBranchCode').subscribe((data: any) => {
    this.http.get(this.url+'/employee/getBranchCode').subscribe((data: any) => {

      this.Branchcode = data
      console.log("branch", this.Branchcode);
    })

    // this.http.get('http://192.168.137.1:3000/employee/Salarydiv').subscribe((data: any) => {
    this.http.get(this.url+'/employee/Salarydiv').subscribe((data: any) => {

      this.s_Div = data
      console.log("sal", this.s_Div)
    })

    // this.http.get('http://192.168.137.1:3000/employee/SubSalarydiv').subscribe((data: any) => {
    this.http.get(this.url+'/employee/SubSalarydiv').subscribe((data: any) => {


      this.subSdivision = data
      console.log(this.subSdivision)
    })
    // this.http.get('http://192.168.137.1:3000/employee/Narration').subscribe((data: any) => {
      this.http.get(this.url+'/employee/Narration').subscribe((data: any) => {

      this.narr = data
      console.log(this.narr)
    })

    // this.http.get('http://192.168.137.1:3000/employee/WarrentDt').subscribe((data: any) => {
    this.http.get(this.url+'/employee/WarrentDt').subscribe((data: any) => {

      // console.log(data);

      this.Date = data
      console.log(this.Date)
    })

    //Scheme Code Dropdown
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Schemecode = filtered;
      this.getIntroducer()

    })

  }
  acType
  getid
  getScheme(event) {
    this.acType = event.value
    this.getid = event.id
  }


  createForm() {
    this.angForm = this.fb.group({
      // traNo: ['', [Validators.required]],
      date: ['', [Validators.required]],
     
      // particulars: ['', [Validators.required]],
      // Narration: ['', [Validators.required]],
      // scheme: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      scode: ['', [Validators.required]],
      sdiv: ['', [Validators.required]],
      subsd: ['', [Validators.required]],
      narration: ['', [Validators.required]],

    });
  }


  tableData
  id
  totalAmount
  TotalAmt
  totalBalanceInput
  wDate
  getdate(event) {
    this.wDate = event.WARRENT_DATE
  }

  saldiv(event) {

    let obj = {

      'ACTYPE': this.acType,
      'WARRENT_DATE': this.wDate,
      'AC_SALARYDIVISION_CODE': event.CODE,
      'BRANCH_CODE': this.branchid


    }
    // this.http.post('http://192.168.137.1:3000/employee/getSalaryDividend', obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/getSalaryDividend', obj).subscribe((data: any) => {
      // console.log(data);

      // this.tableData = data
      this.tableData = data.map((row: any) => {
        return { ...row, checkboxChecked: true };
      });
      this.id = data[0].id
      console.log(this.tableData)
      this.totalBalance = this.tableData.reduce((total, row) => total + parseFloat(row.DIVIDEND_AMOUNT), 0);
      this.totalBalance = parseFloat(this.totalBalance.toFixed(2));


      console.log(this.totalBalance)
      this.updatedtable = [...this.tableData];
      console.log("before", this.updatedtable)

    });

  }
  updatedtable: any[] = [];
  totalBalance
  UpdatedId
  CheckboxChange(row) {
    row.checkboxChecked = !row.checkboxChecked;
    this.updateTotalBalance();
    if (row.checkboxChecked) {
      if (!this.updatedtable.includes(row)) {
        this.updatedtable.push(row);
      }
    } else {
      const index = this.updatedtable.findIndex(item => item === row);
      if (index !== -1) {
        this.updatedtable.splice(index, 1);
      }
    }
    console.log("after", this.updatedtable)
    for (let i = 0; i < this.updatedtable.length; i++){
      this.UpdatedId.push(this.tableData[i].id)
    }
  }


  updateTotalBalance() {
    this.totalBalance = this.tableData.reduce((total, row) => {
      if (row.checkboxChecked) {
        return total + parseFloat(row.DIVIDEND_AMOUNT);
      } else {
        return total;
      }
    }, 0);
  }


  reset() {
    this.angForm.controls['branch'].reset()
    // this.angForm.controls['tlAmt'].reset()
    this.angForm.controls['date'].reset()
    this.angForm.controls['sdiv'].reset()
    this.angForm.controls['subsd'].reset()
    this.angForm.controls['narration'].reset()
    this.angForm.controls['scode'].reset()
  }

  branchid
  getbranchcode(event) {
    this.branchid = event.id
  }
  submit() {
    if (this.angForm.invalid) {
      return;
    }

    let formValues = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);

    let obj = {
      "BRANCH_CODE":this.branchid,
      'id': this.id,
      'date': this.wDate,
      'data': this.updatedtable

    };

    // this.http.post('http://192.168.137.1:3000/employee/setDivpaidtran', obj).subscribe(
    this.http.post(this.url+'/employee/setDivpaidtran', obj).subscribe(

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


}
