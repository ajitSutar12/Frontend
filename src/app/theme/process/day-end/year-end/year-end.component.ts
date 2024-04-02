import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DayEndService } from '../day-end.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
@Component({
  selector: 'app-year-end',
  templateUrl: './year-end.component.html',
  styleUrls: ['./year-end.component.scss']
})
export class YearEndComponent implements OnInit {
  branchHandOverList: any = [];
  flagCheck: boolean = true;
  branchName: any;
  constructor(private _service: DayEndService,
    private ownbranchMasterService: OwnbranchMasterService,
    private fb: FormBuilder,

  ) { }

  ngForm: FormGroup
  dateY
  ngbranch
  sysparadetails: any;
  remark: boolean = false;
  interval;
  modalClass: string = 'modalHide';
  branchOption: any = [];
  ydate:any = [];
  ngOnInit(): void {

    //branchcode
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

  }
  createForm() {
    this.ngForm = this.fb.group({

      Branch: ['',],
      Date: ['',],
    });
  }
  //// Day End 
  async dayend() {
    let data1: any = localStorage.getItem('user');
    let branch = JSON.parse(data1);
    this._service.yearEnd({ branch: branch.branch.id, flag: 0 }).subscribe(async data => {
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
            this._service.yearEnd({ branch: branch.branch.id, flag: 1 }).subscribe(async data1 => {
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
  // getBranch(event) {
  //   this.ngbranch = event.value
  //   this.branchName = event.branchName
  // }

}
