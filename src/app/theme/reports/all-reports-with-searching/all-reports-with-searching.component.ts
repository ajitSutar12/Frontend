import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { first } from 'rxjs/operators';
import { Subject } from "rxjs";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
// import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';



@Component({
  selector: 'app-all-reports-with-searching',
  templateUrl: './all-reports-with-searching.component.html',
  styleUrls: ['./all-reports-with-searching.component.scss']
})
export class AllReportsWithSearchingComponent implements OnInit {
   // Created Form Group
   maxDate: Date;
  angForm:FormGroup
  ordername:any
  TYPEOFOR:number  
  MATERIAL:number
  MDESC:number

  workorder=[ 
    { id: 1, name: 'Insurance' },
    { id: 2, name: 'Other' },
    { id: 3, name: 'ATMs' },
    { id: 4, name: ' Merchant Banking and Underwriting' },
  ];
  ordertype=[ 
    { id: 1, name: 'any order' },
    { id: 2, name: 'Other' },
    { id: 3, name: 'ATMs' },
    { id: 4, name: ' Merchant Banking and Underwriting' },
  ];
  mdesc=[ 
    { id: 1, name: 'material type' },
    { id: 2, name: 'Other' },
    { id: 3, name: 'ATMs' },
    { id: 4, name: ' Merchant Banking and Underwriting' },
  ];

  addShowButton:boolean=true;
  UpdateShowButton: boolean = false;
  delbtn:boolean
  multiField=[]

  constructor(private config: NgSelectConfig,private fb: FormBuilder,) { 
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({

      DATETYPE:["" ,[Validators.required]],
      ORDERTYPE:["" ,[Validators.required]],
      PROJECT:["" ,[Validators.required]],
      CUSTOMER:["" ,[Validators.required]],
      NOTE:["" ,[Validators.required]],
      SIT_NAME:["" ,[Validators.required]],
      UOM:["" ,[Validators.required]],
      QUANTITY:["" ,[Validators.required]],
      REMARK:["" ,[Validators.required]],
      MATERIAL:["" ,[Validators.required]],
      WORK:["" ,[Validators.required]],
      DESC:["" ,[Validators.required]],
      WOM:["" ,[Validators.required]],
    });
  }

  addField(){
    debugger
    const formVal =this.angForm.value
    var object = {
      SR_NO:formVal.SR_NO,
       DESC:formVal.DESC,
        QUANTITY:formVal.QUANTITY,
        UOM:formVal.UOM,
        
    }
    this.multiField.push(object);
    this.resetField()
    }
    resetField() {
      // this.angForm.controls['SR_NO'].reset();
      this.createForm()
      this.angForm.controls['DESC'].reset();
      this.angForm.controls['QUANTITY'].reset();
      this.angForm.controls['UOM'].reset();
    }
    intID: number
    intIndex: number

    updateField() {
      let index = this.intIndex;
      this.addShowButton = true;
      this.UpdateShowButton = false;
      const formVal = this.angForm.value;
      var object = {
        SR_NO:formVal.SR_NO,
        DESC:formVal.DESC,
        QUANTITY: formVal.QUANTITY,
        UOM: formVal.UOM,
        CUSTOMER:formVal.CUSTOMER,
        PROJECT:formVal.PROJECT,
        NOTE: formVal.NOTE,
        SIT_NAME: formVal.SIT_NAME,
        REMARK: formVal.REMARK,
        MATERIAL:formVal.MATERIAL,
        WORK:formVal.WORK,
        WOM: formVal.WOM,
      }
      this.multiField[index] = object;
      this.resetField()
    }

    editField(id){
      this.intIndex =id
      this.intID = this.multiField[id].id;
      this.addShowButton = false;
      this.UpdateShowButton =true;
      // this.intID = this.multiField[id].SR_NO;
      this.angForm.patchValue({
        SR_NO:this.multiField[id].SR_NO,
        DESC: this.multiField[id].DESC,
        QUANTITY: this.multiField[id].QUANTITY,
        UOM: this.multiField[id].UOM,
        CUSTOMER: this.multiField[id].CUSTOMER,
        PROJECT: this.multiField[id].PROJECT,
        NOTE: this.multiField[id].NOTE,
        SIT_NAME: this.multiField[id].SIT_NAME,
        REMARK: this.multiField[id].REMARK,
        MATERIAL: this.multiField[id].MATERIAL,
        WORK: this.multiField[id].WORK,
        WOM: this.multiField[id].WOM,
        })
    }
        
        delField(id) {
          this.multiField.splice(id, 1)
        }
}