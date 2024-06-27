import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trial-balance',
  templateUrl: './trial-balance.component.html',
  styleUrls: ['./trial-balance.component.scss']
})
export class TrialBalanceComponent implements OnInit {

  maxDate: Date;
  minDate: Date;
  dates: any = null


  //form Group
  ngForm: FormGroup;

  formDate

  branchOption: any[];

  ngbranch
  debitfield: boolean = true;
  creditfield: boolean = true;
  searchAccountNumber: string = '';
  filteredData: any[] = [];

  constructor(private _ownbranchmasterservice: OwnbranchMasterService,
    private fb: FormBuilder, private http: HttpClient
  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
    this.filteredData = this.tableData;
  }



  ngOnInit(): void {
    this.createForm()
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
  }


  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      date: ['', [Validators.required]],
      Tb: [''],
      accountNumber: ['']

    });

  }


  filterTableData() {
    let filterValue = this.ngForm.get('accountNumber').value.trim().toLowerCase();

  
      if (!filterValue) {
        this.filteredData = this.tableData;
        return;
      }
  
      this.filteredData = this.tableData.filter(data => {
        let accountNumber = data.AC_NO ? data.AC_NO.toString().toLowerCase() : '';
        return accountNumber.includes(filterValue);
      });
  }
  
  



  dateVariable
  tableData = []
  totalDebit1
  totalCredit1
  getDateFuc() {
    let value = this.ngForm.value

    let userData = JSON.parse(localStorage.getItem('user'));

    let Date: any;
    if (this.dates == value.TRAN_DATE) {
      Date = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
    } else {
      Date = moment(value.date, 'DD/MM/YYYY').format('DD/MM/YYYY')
    };

    let obj = {
      'branch': this.branchCode,
      'date': Date
    }

    this.http.post('http://192.168.1.174:7265/gl-statement-code/trialbalance', obj).subscribe((data: any[]) => {
      this.tableData = data
      this.filteredData = this.tableData;

      console.log(data)

      let totalDebit = 0.0;
      let totalCredit = 0.0;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i]['TRAN_DRCR'] === 'D') {
          totalDebit += parseFloat(this.tableData[i]['TRAN_AMOUNT']);
        } else if (this.tableData[i]['TRAN_DRCR'] === 'C') {
          totalCredit += parseFloat(this.tableData[i]['TRAN_AMOUNT']);
        }
      }

      this.totalDebit1 = parseFloat(totalDebit.toFixed(2));
      this.totalCredit1 = parseFloat(totalCredit.toFixed(2));
    })
  }



  pendingUpdates: any[] = [];
  dataSend: any[] = [];

  onCellChange(event: any, data: any, type: string) {
    let amt = data.TRAN_AMOUNT

    let value = parseFloat(event.target.innerText);


    if (type === 'TRAN_AMOUNT') {
      if (data.TRAN_DRCR === 'C') {
        data.TRAN_AMOUNT = value;
        this.totalDebit1 += value;
        this.totalCredit1 -= amt;
        data.TRAN_DRCR = 'D'
        // data.TRAN_AMOUNT = '';

      } else if (data.TRAN_DRCR === 'D') {
        data.TRAN_AMOUNT = value;
        this.totalCredit1 += value;
        this.totalDebit1 -= amt;

        data.TRAN_DRCR = 'C'
        // data.TRAN_AMOUNT = '';

      }

    }

    this.dataSend.push(data)
    // console.log(this.dataSend)
  }



  update() {

    let userData = JSON.parse(localStorage.getItem("user"));
    let brachCode = userData.branch.id

    if (this.totalCredit1 == this.totalDebit1) {
      let obj = {
        'data': this.dataSend
        // 'BRACH_CODE': obj1

      }

      this.http.post('http://192.168.1.174:7265/voucher/trialbalentry', obj).subscribe((data: any[]) => {
        Swal.fire('Success!', 'Record Updated Successfully !', 'success');
        this.getDateFuc()
      });

      console.log(this.dataSend);
      this.pendingUpdates = [];
    } else {
      Swal.fire('Error!', 'Total credit amount and total debit amount do not match!', 'error');
    }

  }

  branchCode
  getBranch(event)
  {
    this.branchCode=event.name
  }

}
