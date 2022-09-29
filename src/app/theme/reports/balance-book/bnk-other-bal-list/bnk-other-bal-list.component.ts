import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-bnk-other-bal-list',
  templateUrl: './bnk-other-bal-list.component.html',
  styleUrls: ['./bnk-other-bal-list.component.scss']
})
export class BnkOtherBalListComponent implements OnInit {

  maxDate: Date;
  angForm:FormGroup
  ordername:any
  TYPEOFOR:any  
  MATERIAL:any
  MDESC:any

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
        id: this.intID
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
        })
    }
        
        delField(id) {
          this.multiField.splice(id, 1)
        }
}
