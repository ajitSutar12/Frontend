import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cash-out-denomination',
  templateUrl: './cash-out-denomination.component.html',
  styleUrls: ['./cash-out-denomination.component.scss']
})
export class CashOutDenominationComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  ngcashier:any=null

  // date variables
  maxDate: Date;
  minDate: Date;
  ngtrandate:any=null
  
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
  ) { 

    this.maxDate = new Date();
    this.minDate = new Date();
    
  }

  ngOnInit(): void {
    this.createForm()

  }

  createForm() {
    this.angForm = this.fb.group({
      
      
      TRAN_DATE:['',[Validators.required]],
      CASHIER:['',[Validators.required]],
      DENOMINATION_AMT:['',[Validators.pattern]],
      OPEN_CASH:['',[Validators.pattern]],
      TOTAL_AMT:['',[Validators.pattern]],
      TOTAL_WITHDRAWAL:['',[Validators.pattern]],


    })
    
  }
  
}
