import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DayEndService } from '../day-end.service';
@Component({
  selector: 'app-year-end',
  templateUrl: './year-end.component.html',
  styleUrls: ['./year-end.component.scss']
})
export class YearEndComponent implements OnInit {
  branchHandOverList: any = [];
  flagCheck: boolean = true;
  constructor(private _service: DayEndService) { }
  sysparadetails: any;
  remark: boolean = false;
  interval;
  ngOnInit(): void {

  }
  //// Day End 
  async dayend() {
    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    this._service.yearEnd({ branch: result.branch.id }).subscribe(async data => {
      Swal.fire('Success', 'Year ended Successfully', 'success')
    }, err => {
      console.log(err?.error?.message)
    })

  }


}
