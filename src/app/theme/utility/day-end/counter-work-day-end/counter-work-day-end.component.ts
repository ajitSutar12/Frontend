import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DayEndService } from '../day-end.service';
import * as moment from 'moment';

@Component({
  selector: 'app-counter-work-day-end',
  templateUrl: './counter-work-day-end.component.html',
  styleUrls: ['./counter-work-day-end.component.scss']
})
export class CounterWorkDayEndComponent implements OnInit {
  dtExportButtonOptions: any = {};
  ngdate: any;
  ngbdate
  systemInfo: any;
  constructor(private _services: DayEndService) { }

  ngOnInit(): void {
    this._services.getSysparaDetails().subscribe(data => {
      this.systemInfo = data[0];
      console.log(this.systemInfo);
      this.ngdate = moment(this.systemInfo.CURRENT_DATE, 'DD/MM/YYYY').format('YYYY-MM-DD');
      this.ngbdate = this.systemInfo.CURRENT_DATE
    }, err => {
      console.log(err);
    })
  }

  DayEnd() {
    //get login details
    let user = JSON.parse(localStorage.getItem('user'));
    let flag
    this._services.checkDayHandOverStatus({ date: this.ngbdate, branch_id: user.branchId }).subscribe(data => {
      flag = data.flag
      if (flag == 1) {
        Swal.fire('Info', `Already day handovered for ${this.ngbdate}`, 'info')
      } else {
        //  let current_date = this.ngdate;
        Swal.fire({
          title: 'Are you sure?',
          text: "Do you want day handover to Admin.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#229954',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Day End Handover!'
        }).then((result) => {
          if (result.isConfirmed) {
            let obj = {
              date: this.ngdate,
              branch_id: user.branchId,
              user_id: user.id
            }
            //check Is valid today all transaction 
            this._services.dayEndHandoverProcess(obj).subscribe(data => {
              this._services.dayHandOver(obj).subscribe(data => {
                Swal.fire('Success', 'Day End Handovered On ' + this.systemInfo.CURRENT_DATE + ' Successfully!', 'success');
              }, err => {
                if (err.error.statusCode == 400) {
                  Swal.fire('Cancelled', err.error.message, 'error');
                }
              })
            }, err => {
              if (err.error.statusCode == 400) {
                Swal.fire('Cancelled', err.error.message, 'error');
              }
            })
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire(
              'Cancelled',
              'Your Action is revert',
              'error'
            )
          }
        })
      }
    }, err => {
      console.log(err);
    })


  }
}
