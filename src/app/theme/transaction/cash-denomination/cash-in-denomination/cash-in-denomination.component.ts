import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cash-in-denomination',
  templateUrl: './cash-in-denomination.component.html',
  styleUrls: ['./cash-in-denomination.component.scss']
})
export class CashInDenominationComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  ngTransactionNo:any=null

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
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

  }

  createForm() {
    this.angForm = this.fb.group({
      
      DENOMINATION_AMT:['',],
      TRANSACTION_NO:['',[Validators.required,Validators.pattern]],
      TRAN_DATE:['',[Validators.required]],
    })
    
  }
  

}
