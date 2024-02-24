import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DayEndService } from '../day-end.service';
import { TranslateService } from '@ngx-translate/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-day-end-final',
  templateUrl: './day-end-final.component.html',
  styleUrls: ['./day-end-final.component.scss']
})
export class DayEndFinalComponent implements OnInit {
  branchHandOverList: any = [];
  flagCheck: boolean = true;

  constructor(private _service: DayEndService,private translate:TranslateService) { this.translate.setDefaultLang(environment.setLang)}

  sysparadetails: any;
  remark: boolean = false;
  interval;
  ngOnInit(): void {
    this._service.getSysparaDetails().subscribe(data => {
      this.sysparadetails = data;

      this._service.CheckBranchHandOverReport({ date: this.sysparadetails[0].CURRENT_DATE }).subscribe(data => {
        this.branchHandOverList = data;

        let result = this.branchHandOverList.filter(ele => ele.flag == 0 && ele.admin_status == 0);
        if (result.length != 0) {
          this.flagCheck = true;
        } else {
          this.flagCheck = false;
        }
      }, err => {
        console.log(err);
      })
    })

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  refresh() {
    this._service.CheckBranchHandOverReport({ date: this.sysparadetails[0].CURRENT_DATE }).subscribe(data => {
      this.branchHandOverList = data;
      let result = this.branchHandOverList.filter(ele => ele.flag == 0 && ele.admin_status == 0);
      if (result.length != 0) {
        this.flagCheck = true;
      } else {
        this.flagCheck = false;
      }
    }, err => {
      console.log(err);
    })
  }

  //// Day End 
  async dayend() {
    this.flagCheck = true;
    this.remark = true;
    this.interval = setInterval(() => {
      this._service.CheckBranchHandOverReport({ date: this.sysparadetails[0].CURRENT_DATE }).subscribe(data => {
        this.branchHandOverList = data;
        for (let item of this.branchHandOverList) {
          if (item.flag == 0 || item.admin_status == 2 || item.admin_status == 1) {
            this.flagCheck = true;
          } else {
            this.flagCheck = false;
          }
        }

      }, err => {
        console.log(err);
      })
      console.log('interval')
    }, 500);
    this._service.sendBranchData({ date: this.sysparadetails[0].CURRENT_DATE }).subscribe(async data => {
Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Pigmy_Day_End_Successfuly')}`,'success')
    }, err => {
      console.log(err?.error?.message)
    })

  }

  revertHandOver(id, date, name) {
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Are_you_sure')}`,
      text: `${this.translate.instant('Swal_Msg.You_revert_this')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Revert it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.revertHandOver({ id: id, date: date }).subscribe(data => {
          Swal.fire(
            `${this.translate.instant('Swal_Msg.End_Reverted')}`,
            name + `${this.translate.instant('Swal_Msg.End_Reverted')}`,
            'success'
          )
          this.ngOnInit()
        }, err => {
          console.log(err);
        })

      }
    })

  }
}
