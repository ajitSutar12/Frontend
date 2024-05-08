import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { event } from 'jquery';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-locker-view',
  templateUrl: './locker-view.component.html',
  styleUrls: ['./locker-view.component.scss']
})
export class LockerViewComponent implements OnInit {
  maxDate: any;
  minDate: any;
  angForm: FormGroup;
  ngLockerSize
  lockerViewArray: any
  highlightedRackNo: any;
  highlightedLockerNo: any[]
  url = environment.base_url

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, private systemParameter: SystemMasterParametersService,

  ) {
   {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate._d
    })
  }
  
  }
  lockerCountOfCard
  lockerCountCard: any[] = []
  ngOnInit(): void {
    // this.lockerView(sizeSrNo)
    // this.lockerView(sizeSrNo)
    this.createForm()
    let sendData
    let obj = {
      "branch": sendData
    }

    this.http.post(this.url + '/locker-master/lockersize', obj).subscribe((data) => {
      // console.log(data, 'locker view')
      this.lockerViewArray = data
    });

    this.http.post(this.url + '/locker-master/getcountrack', obj).subscribe((data) => {

      this.lockerCountOfCard = data[0].count
      for (let i = 1; i <= parseInt(this.lockerCountOfCard); i++) {
        this.lockerCountCard.push(i)
      }
      // console.log(this.lockerCountCard, 'this.lockerCountCard')


    });

    // console.log(this.lockerCountCard, 'this.lockerCountCard')

  }



  createForm() {
    this.angForm = this.fb.group({
      LOCKER_SIZE: ['', [Validators.required,]],

    })
  }

  lockerData
  lockerBox
  lockerCount: any[] = []
  currentDate: string
  allLockersCount
  rentedCount = 0
  availableCount
  lockerView(sizeSrNo: string) {
    this.currentDate = moment().format('DD/MM/YYYY');

    let userData = JSON.parse(localStorage.getItem('user'));
    let branch = userData.branch.id


    let obj = {
      'SIZE_SR_NO': sizeSrNo,
      'branch': branch,
      'date': this.currentDate
    }

    this.http.post(this.url + '/locker-master/lockerdetails', obj).subscribe((data) => {

      this.lockerData = data
      this.allLockersCount = data[0].LOCKER_TONO
      // if (this.lockerData.length > 0) {
      this.lockerBox = data[0].LOCKER_TONO
      for (let i = 1; i <= parseInt(this.lockerBox); i++) {
        this.lockerCount.push(i)
      }

      this.highlightedLockerNo = this.lockerData.map(item => item.DP_LOCKER_NO);

      this.rentedCount = this.lockerData.length;
      this.availableCount = this.allLockersCount - this.rentedCount;
      const index = this.lockerViewArray.findIndex(item => item.SIZE_SR_NO === sizeSrNo);

      if (index !== -1) {
        this.lockerViewArray[index].rentedCount = this.rentedCount;
        this.lockerViewArray[index].availableCount = this.availableCount;
        this.lockerViewArray[index].totalCount = this.allLockersCount;
      } else {
        const lockerObject = {
          SIZE_SR_NO: sizeSrNo,
          rentedCount: this.rentedCount || 0,
          availableCount: this.availableCount,
          totalCount: this.allLockersCount
        };
        this.lockerViewArray.push(lockerObject);
      }
      // this.lockerViewArray.push({
      //   // 'lockerData': data,
      //   'rentedCount': this.rentedCount,
      //   'availableCount': this.availableCount,
      //   'totalCount': this.allLockersCount
      // });




      this.highlightedRackNo = data[0].RACK_NO;


      // console.log(this.lockerData,'lockerdartttttttttttttt')
      // console.log(this.highlightedLockerNo)
      // }
    });
  }


  getCellColor(rackNo: string, lockerNo: string): string {
    if (this.lockerData.length > 0) {
      if (rackNo === this.highlightedRackNo && this.highlightedLockerNo.includes(lockerNo)) {
        return 'red';
      } else {
        return 'white';
      }
    }

  }





  openModal() {
    // this.showMoadl = true
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block'
    }
  }

  // showMoadl: boolean = false
  closeModal(): void {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
}
