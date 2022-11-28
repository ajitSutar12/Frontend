import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditInterestCalculationComponent } from '../edit-interest-calculation/edit-interest-calculation.component';
import { EditInterestCalculationService } from '../edit-interest-calculation/edit-interest-calculation.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-calculate-interest-passing',
  templateUrl: './calculate-interest-passing.component.html',
  styleUrls: ['./calculate-interest-passing.component.scss']
})
export class CalculateInterestPassingComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // date variables
  ngintDate:any=null
  warrentDate
  dtExportButtonOptions : any = {};
  selectedWarrentDate: any;
  selectedDivFromYear: any;
  selectedDivToYear: any;
  showMsg:boolean = true;

  tableData:any;
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private _service : EditInterestCalculationService
  ) { }

  ngOnInit(): void {

    this.createForm()
    this.http.get(this.url + '/interest-passing').subscribe((data) => {
      this.warrentDate = data
    })

    this._service.interestDate().subscribe((data) => {
      debugger
      this.warrentDate = data
      console.log(this.warrentDate)
    })
  }

  createForm() {
   
    this.angForm = this.fb.group({
     
      INT_DATE:['',[Validators.required]],
      
    });
  }

  getIntDetails(event) {

    this._service.getDataForPassing(event).subscribe(data=>{
      this.tableData = data;
      console.log(this.tableData)
      if(this.tableData.length == 0){
        this.showMsg = true;
      }else{
        this.showMsg = false;
      }
    },err=>{
      
    })
  }

  editClickHandler(): void {

  }
  delField() {
    
  }

  AddDataList = new Array();
  AddData(ac_type,acnotype,ele){
    if(ele.target.checked){
      if(this.AddDataList.length == 0){
        this.AddDataList.push(ac_type)
      }else{
         let result = this.AddDataList.filter(ele=>ele == ac_type);
         if(result.length==0){
          this.AddDataList.push(ac_type)
         }
      }
    }else{
        let index = this.AddDataList.findIndex(ele=>ele == ac_type);
        this.AddDataList.splice(index,1);
    }
  }

  submit(){
    if(this.AddDataList.length == 0){
      Swal.fire('Oops..!',"Please select scheme data","warning");
    }else{
      let user = JSON.parse(localStorage.getItem('user'));
      let obj = {
        data:this.AddDataList,
        date:this.ngintDate,
        user:user
      }
      this._service.createVoucher(obj).subscribe(data=>{
        Swal.fire('Success',"Passing and Voucher created successfully",'success');
        this.AddDataList = [];
      },err=>{
        console.log(err);
      })
    }
  }

}
