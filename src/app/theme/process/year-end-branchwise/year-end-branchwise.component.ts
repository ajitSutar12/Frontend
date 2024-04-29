import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-year-end-branchwise',
  templateUrl: './year-end-branchwise.component.html',
  styleUrls: ['./year-end-branchwise.component.scss']
})
export class YearEndBranchwiseComponent implements OnInit {
  ngForm
  ngdate: any = null
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  flagCheck: boolean = true;
  url = environment.base_url;
  constructor(private fb: FormBuilder, private systemParameter: SystemMasterParametersService, private http: HttpClient) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  ngOnInit(): void {
    this.createForm()
    this.getDate()
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })

  }
  createForm() {
    this.ngForm = this.fb.group({
      END_DATE: ['']
    })

  }
  date
  Tabledata
  getDate() {
    // this.http.post('http://192.168.1.108:7266/voucher/YearEndDates', {}).subscribe(
    this.http.post(this.url +'/voucher/YearEndDates', {}).subscribe(

      (response) => {
        this.Tabledata = response
        console.log(this.Tabledata)

      },
    );

  }
  TableResponse
  headTransfer
  headTF
  amt
  flg
  getTableDate(event) {

    let myObj = {
      'date': event.DATE
    }
    //get all details of Account 
    // this.http.post('http://192.168.1.108:7266/voucher/YearEndData', myObj).subscribe(
    this.http.post(this.url +'/voucher/YearEndData', myObj).subscribe(

      (response) => {
        this.TableResponse = response
        console.log(this.TableResponse)
        this.headTransfer = this.TableResponse[this.TableResponse.length-1]
        this.headTF = this.headTransfer.accoentry[0].BRANCH_CODE
        this.flg= this.headTransfer.flag[0]
        for (let i = 0; i < this.TableResponse.length; i++) {
          if (this.headTF == this.TableResponse[i]['BRANCH_CODE']) {
            if( this.flg=='profit and loss a/c transfer'){
            // this.amt = this.headTransfer[0]['TRAN_AMOUNT']
            this.TableResponse[i]['amt'] = this.headTransfer.accoentry[0]['TRAN_AMOUNT'];
            }
            else {
              this.TableResponse[i]['amt'] = this.headTransfer.accoentry[0]['TRAN_AMOUNT'];
            }
          }
          
          
        }

        for (let item of this.TableResponse) {
          if (item.STATUS == 1) {
            this.flagCheck = true;
          } else {
            this.flagCheck = false;
          }
        }
      },
    );

  }
}
