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
  constructor(private _service: DayEndService,
    private ownbranchMasterService: OwnbranchMasterService,
    private fb: FormBuilder, private http: HttpClient

  ) { }

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
    })


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
  getBranch(event) {
    this.ngbranch = event.name
    this.branchName = event.value

    let obj = {
      BRANCH_CODE: this.branchName
    }
    this.http.post(this.base_url + '/voucher/branchwiselistofyearend', obj).subscribe(data => {

      this.ydate = data;

    })

  }

}
