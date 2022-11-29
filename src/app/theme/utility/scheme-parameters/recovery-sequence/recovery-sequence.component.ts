import { Component, OnInit } from '@angular/core';
import { hasOwnProp } from 'ngx-bootstrap/chronos/utils/type-checks';
import Swal from 'sweetalert2';
import { RecoverySequenceService } from './recovery-sequence.service';
@Component({
  selector: 'app-recovery-sequence',
  templateUrl: './recovery-sequence.component.html',
  styleUrls: ['./recovery-sequence.component.scss']
})
export class RecoverySequenceComponent implements OnInit {
  dtExportButtonOptions: any = {};
  recoveryData : any;
  constructor(private service : RecoverySequenceService) { }

  recovery_list = new Array()
  ngOnInit(): void {
    this.service.getRecoveryData().subscribe(data=>{
      console.log(data);
      this.recovery_list = data;
      this.recovery_list.push({S_APPL:980,S_NAME:'OTHER AMOUNT',RECOVERT_FIELD : 'T_OTHERAMT'},{S_APPL:980,S_NAME:'OTHER AMOUNT 1',RECOVERT_FIELD : 'T_OTHER1AMT'},{S_APPL:980,S_NAME:'OTHER AMOUNT',RECOVERT_FIELD : 'T_OTHER2AMT'})
      for(let ele of this.recovery_list){
        ele['checked']=false;
      }
    },err=>{  
        console.log(err);
    })
  }

  upSide(index){
    let cutOut = this.recovery_list.splice(index, 1) [0]; // cut the element at index 'from'
    this.recovery_list.splice(index-1, 0, cutOut);  
  }

  downSide(index){
    let cutOut = this.recovery_list.splice(index, 1) [0]; // cut the element at index 'from'
    this.recovery_list.splice(index+1, 0, cutOut);
  }

  isApplicableCondition(ele,data,index){
    debugger
    if(this.recovery_list[index].hasOwnProperty('checked')){
      if(ele.target.checked){
        this.recovery_list[index].checked = true;
      }else{
        this.recovery_list[index].checked = false;
      }
    }else{
      this.recovery_list[index]['checked'];
      if(ele.target.checked){
        this.recovery_list[index].checked = true;
      }else{
        this.recovery_list[index].checked = false;
      }
    }
  }

  submitSequence(){
    if(this.recovery_list.length == 0){
      Swal.fire('Oops..','Data Not Exists please checked','warning');
    }else{
      console.log(this.recovery_list);
      this.service.submitRecoveryData(this.recovery_list).subscribe(data=>{
        
      },err=>{

      })
    }
  }
}
