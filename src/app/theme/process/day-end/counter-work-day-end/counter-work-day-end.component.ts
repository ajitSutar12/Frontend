import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DayEndService } from '../day-end.service';
import * as moment from 'moment';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

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
  isLoading: boolean = false;
  setLang: string;
  constructor(private _services: DayEndService, private _hotkeysService: HotkeysService,
    private systemParameter: SystemMasterParametersService,
    private translate:TranslateService
  ) { 
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

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

  isHotkeyShow: boolean = true
  DayEnd() {
    this.isLoading = true;
    var value = localStorage.setItem('key','0');
    this.isHotkeyShow = false
    //get login details
    let user = JSON.parse(localStorage.getItem('user'));
    let flag
    this._services.checkDayHandOverStatus({ date: this.ngbdate, branch_id: user.branchId }).subscribe(data => {
      flag = data.flag
      if (flag == 1) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Info')}`, `Already day handovered for ${this.ngbdate}`, 'info')
      } else {
        //  let current_date = this.ngdate;
        Swal.fire({
          title: `${this.translate.instant('Swal_Msg.Are_you_sure')}`,
          text: `${this.translate.instant('Swal_Msg.Do_you_want_day_handover.')}`,
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
                Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, 'Day End Handovered On ' + this.systemInfo.CURRENT_DATE + ' Successfully!', 'success');
              }, err => {
                this.isLoading = false;
                if (err.error.statusCode == 400) {
                  Swal.fire(`${this.translate.instant('Swal_Msg.Cancel')}`, err.error.message, 'error');
                }
              })
            }, err => {
              this.isLoading = false;
              if (err.error.statusCode == 400) {
                Swal.fire(`${this.translate.instant('Swal_Msg.Cancel')}`, err.error.message, 'error');
              }
            })
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            this.isLoading = false;
            Swal.fire(
              `${this.translate.instant('Swal_Msg.Cancel')}`, `${this.translate.instant('Swal_Msg.C_Msg')}`,
              'error'
            )
          }
        })
      }
    }, err => {
      console.log(err);
      this.isLoading = false;
    })


  }
}
