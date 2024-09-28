import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TranslateService } from "@ngx-translate/core";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
@Component({
  selector: 'app-npaprocess-locking',
  templateUrl: './npaprocess-locking.component.html',
  styleUrls: ['./npaprocess-locking.component.scss']
})
export class NPAProcessLockingComponent implements OnInit {

  npaDates
  url = environment.base_url
  angForm: FormGroup;
  npaProcessDate
  npaDate;
  setLang: any;
  constructor(private http: HttpClient, private fb: FormBuilder, private translate: TranslateService,
    private systemParameter: SystemMasterParametersService) {
    this.systemParameter.getFormData(1).subscribe(data => {
      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    this.createForm()
    this.npaProcessedDate()
    this.lockedDate()
  }

  createForm() {
    this.angForm = this.fb.group({
      NPA_DATE: ['', [Validators.required]],
    });
  } F

  npaProcessedDate() {
    let obj = {
      "Date": null
    }

    this.http.post(this.url + '/voucher/npadatadate', obj).subscribe((data) => {
      this.npaDates = data
      console.log(data)
    })
  }
  getnpaDate(event) {
    this.npaDate = event.REPORT_DATE;
  }

  lockedDate() {
    let Object1 = {

    }
    this.http.post(this.url + '/voucher/npalockdate', Object1).subscribe((data: any[]) => {
      console.log(data)
      this.alreadylockdate = data
    })
  }

  branchcode;
  current_date;
  alreadylockdate: any[] = [];
  lockDate() {
    let userData = JSON.parse(localStorage.getItem("user"));
    this.branchcode = userData.branch.id;
    this.current_date = moment().format('DD/MM/YYYY');


    if (this.alreadylockdate.some(item => item.LOCK_DATE === this.npaDate)) {

      Swal.fire({
        icon: 'warning',
        title: `${this.translate.instant('Swal_Msg.Date_Already_Locked')}`,
      });

      this.angForm.controls.NPA_DATE.reset()

    } else {

      let Object = {
        "PROCESS_DATE": this.npaDate,
        "BRANCH_CODE": this.branchcode,
        "LOCK_DATE": this.current_date
      }
      this.http.post(this.url + '/voucher/npalock', Object).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: `${this.translate.instant('Swal_Msg.Date_Lock')}`
        })

        this.lockedDate();



      })
    }
  }

  unlockDate() {
    let userData = JSON.parse(localStorage.getItem("user"));
    this.branchcode = userData.branch.id;
    this.current_date = moment().format('DD/MM/YYYY');
    let Object = {
      "PROCESS_DATE": this.npaDate,
      "BRANCH_CODE": this.branchcode,
      "LOCK_DATE": null
    }
    this.http.post(this.url + '/voucher/npaunlock', Object).subscribe((data) => {

      Swal.fire({
        icon: 'success',
        title: `${this.translate.instant('Swal_Msg.Date_UnLock')}`
      })
      this.lockedDate();
    })
  }

  lockProcess() {
    if (this.angForm.valid) {
      Swal.fire({
        title: `${this.translate.instant('Swal_Msg.Sure')}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.http.get(this.url + '/npa-classification-master').subscribe((data) => {
            this.npaDates = data;
            // console.log(data);
            Swal.fire({
              title: `${this.translate.instant('Swal_Msg.NPA_Process_Date_Locked')}`,
              icon: 'success',
              timer: 2000,
              timerProgressBar: true
            });
          });
        }
      });
    }
    else {
      Swal.fire({
        title: `${this.translate.instant('Swal_Msg.Mandatory_Field')}`,
        icon: 'error'
      });
    }
  }



}
