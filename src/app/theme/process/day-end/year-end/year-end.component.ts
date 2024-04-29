import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DayEndService } from '../day-end.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-year-end',
  templateUrl: './year-end.component.html',
  styleUrls: ['./year-end.component.scss']
})
export class YearEndComponent implements OnInit {
  branchHandOverList: any = [];
  flagCheck: boolean = true;
  branchName: any;
  base_url = environment.base_url;
  yearEndList: any = [];
  dateYear: any;
  totalDebit: number = 0;
  totalCredit: number = 0;
  showTable: boolean = false;

  constructor(private _service: DayEndService,
    private ownbranchMasterService: OwnbranchMasterService,
    private fb: FormBuilder, private http: HttpClient

  ) {
    
   }

  ngForm: FormGroup
  dateY
  ngbranch
  sysparadetails: any;
  remark: boolean = false;
  interval;
  modalClass: string = 'modalHide';
  branchOption: any = [];
  ydate: any = [];
  ngOnInit(): void {
    //branchcode
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

    this.http.get(this.base_url +'/voucher/yearenddatelist').subscribe(List1 => {
      this.yearEndList = List1;
      // this.calculateTotals();
    })
    this.getBranch(event)
    this.secondtableData()
   
  }
  createForm() {
    this.ngForm = this.fb.group({
      Branch: ['',],
      Date: ['',],
    });
  }

  getDate(event){
    this.dateYear = event.DATE
  }
  //// Day End 
  dayend() {
    let data1: any = localStorage.getItem('user');
    let branch = JSON.parse(data1);
    this._service.yearEnd({ branch: this.branchName, flag: 0, trandate:this.dateYear, user: branch.id }).subscribe(async data => {
      if (data.flag == 1) {
        Swal.fire({
          title: '',
          text: data.msg,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
            this.showTable = true;
            this.modalClass = 'modalShow';
            this._service.yearEnd({ branch: branch.branch.id, flag: 1, trandate:this.dateY, user: branch.id }).subscribe(async data1 => {
              this.modalClass = 'modalHide';
              Swal.fire('success', data1.msg, 'success')
            })
          }
          else if (result.dismiss === Swal.DismissReason.cancel) {
            this.modalClass = 'modalHide';
            Swal.fire("Cancelled", "Year end overwrite cancelled", "warning");
          }
        })
      } else {
        this.modalClass = 'modalHide';
        Swal.fire('success', data.msg, 'success')
      }
    }, err => {
      console.log(err?.error?.message)
    })
  }
  date
  getBranch(event) {
    this.ngbranch = event.name
    this.branchName = event.value
    let obj = {
      BRANCH_CODE: this.branchName
    }
    this.http.post(this.base_url + '/voucher/branchwiselistofyearend', obj).subscribe(data => {
      // this.http.post('http://192.168.1.108:7266/voucher/branchwiselistofyearend', obj).subscribe(data => {
      this.ydate = data;
    }) 
  }
  TableArray
  lastRowIndex: number; 
  secondtableData() {
    let obj = {
      'branch':this.branchName,
      'date': this.dateYear
    }
    // this.http.post('http://192.168.1.108:7266/gl-account-master/ACCOTRANrecords', obj).subscribe((response: any[]) => {
    this.http.post(this.base_url + '/gl-account-master/ACCOTRANrecords', obj).subscribe((response: any[]) => {
      console.log(response);
      this.TableArray = response   
      this.lastRowIndex = this.TableArray.length - 1;
      this.calculateTotals();
    })
  }
  ngAfterViewInit() {
    this.highlightLastRow();
  }

  highlightLastRow() {
    const rows = document.querySelectorAll('table tbody tr');
    if (rows.length > 0) {
      rows[this.lastRowIndex].classList.add('highlight');
    }
  }
  totalDebit1
  totalCredit1
  calculateTotals() {
    let totalDebit = 0.0;
    let totalCredit = 0.0;
    for (let i = 0; i < this.TableArray.length; i++) {
      if (this.TableArray[i]['TRAN_DRCR'] === 'D') {
        totalDebit += parseFloat(this.TableArray[i]['TRAN_AMOUNT']);
      } else if (this.TableArray[i]['TRAN_DRCR'] === 'C') {
        totalCredit += parseFloat(this.TableArray[i]['TRAN_AMOUNT']);
      }
    }
    this.totalDebit1 = parseFloat(totalDebit.toFixed(2));
    this.totalCredit1 = parseFloat(totalCredit.toFixed(2));
  }
}
