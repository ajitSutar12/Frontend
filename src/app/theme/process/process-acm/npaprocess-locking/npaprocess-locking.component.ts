import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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
  constructor(private http: HttpClient, private fb: FormBuilder,) { }

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
        title: 'Date is Already Locked',
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
          title: 'Date is Lock Successfully'
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
        title: 'Date is UnLock Successfully'
      })
      this.lockedDate();
    })
  }

  lockProcess() {
    if (this.angForm.valid) {
      Swal.fire({
        title: 'Are you sure?',
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
              title: 'NPA Process Date Locked',
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
        title: 'All fields are mandatory',
        icon: 'error'
      });
    }
  }



}
