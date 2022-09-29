import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-denomination-reports',
  templateUrl: './denomination-reports.component.html',
  styleUrls: ['./denomination-reports.component.scss']
})
export class DenominationReportsComponent implements OnInit {

  maxDate: Date;
  angForm:FormGroup;
  selectedType:number;

  Types=[ 
    { id: 1, name: 'Oliv' },
    { id: 2, name: 'CBS' },
    { id: 3, name: 'Greencon' },
    { id: 4, name: 'CRM' },
  ];

  constructor(private config: NgSelectConfig,private fb: FormBuilder,) { 
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({

      FIRST_NAME:["" ,[Validators.required]],
      LAST_NAME:["" ,[Validators.required]],
      DATETYPE:["" ,[Validators.required]],
      SITE_NAME:["" ,[Validators.required]],
      // NOTE:["" ,[Validators.required]],
      // SIT_NAME:["" ,[Validators.required]],
      // UOM:["" ,[Validators.required]],
      // QUANTITY:["" ,[Validators.required]],
      // REMARK:["" ,[Validators.required]],
      // MATERIAL:["" ,[Validators.required]],
      // WORK:["" ,[Validators.required]],
      // DESC:["" ,[Validators.required]],
      // WOM:["" ,[Validators.required]],
    });
  }

}
