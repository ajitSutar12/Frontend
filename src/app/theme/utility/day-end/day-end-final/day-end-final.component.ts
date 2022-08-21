import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DayEndService } from '../day-end.service';
@Component({
  selector: 'app-day-end-final',
  templateUrl: './day-end-final.component.html',
  styleUrls: ['./day-end-final.component.scss']
})
export class DayEndFinalComponent implements OnInit {
  branchHandOverList : any = [];
  flagCheck : boolean = true;
  constructor(private _service : DayEndService) { }
  sysparadetails :any;
  remark :boolean = false;
  interval;
  ngOnInit(): void {
    this._service.getSysparaDetails().subscribe(data=>{
        this.sysparadetails = data;
        
        this._service.CheckBranchHandOverReport({date : this.sysparadetails[0].CURRENT_DATE}).subscribe(data=>{
          this.branchHandOverList = data;
          for(let item of this.branchHandOverList){
            debugger
            if(item.flag == 0){
              this.flagCheck = true;
            }else{
              this.flagCheck = false;
            }
          }
        },err=>{
          console.log(err);
        })
    })
    
  }

  ngOnDestroy() {
      clearInterval(this.interval);
  }
  refresh(){
    this._service.CheckBranchHandOverReport({date : this.sysparadetails[0].CURRENT_DATE}).subscribe(data=>{
      this.branchHandOverList = data;
      for(let item of this.branchHandOverList){
        if(item.flag == 0){
          this.flagCheck = true;
        }else{
          this.flagCheck = false;
        }
      }
    },err=>{
      console.log(err);
    })
  }

  //// Day End 
  async dayend(){
    this.flagCheck = true;
    this.remark = true;
    this.interval = setInterval(() => {
      this._service.CheckBranchHandOverReport({date : this.sysparadetails[0].CURRENT_DATE}).subscribe(data=>{
        this.branchHandOverList = data;
        for(let item of this.branchHandOverList){
          if(item.flag == 0 || item.admin_status == 2 || item.admin_status == 1){
            this.flagCheck = true;
          }else{
            this.flagCheck = false;
          }
        }

      },err=>{
        console.log(err);
      })
      console.log('interval')
    }, 500);
    for await (let item of this.branchHandOverList){
      debugger
        await this.sendDayEnd({date:item.date,branch_id:item.branch_id});
        this._service.dayEndProccessingRemarkChangeBranchWise({date:item.date,branch_id:item.branch_id}).subscribe(async ele=>{

        }) 
    }
  }

  async sendDayEnd(item){
    this._service.sendBranchData({date:item.date,branch_id:item.branch_id}).subscribe(async data=>{
      this._service.dayEndRemarkChangeBranchWise({date:item.date,branch_id:item.branch_id}).subscribe(async ele=>{

      })
    },err=>{

    })
  }

  revertHandOver(id,date,name){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Revert it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.revertHandOver({id:id,date:date}).subscribe(data=>{
          Swal.fire(
            'Day End Reverted!',
            name+' Branch day end reverted successfully',
            'success'
          )
          this.ngOnInit()
      },err=>{
          console.log(err);
      })
        
      }
    })
    
  }
}
