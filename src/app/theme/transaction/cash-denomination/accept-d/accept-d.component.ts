import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accept-d',
  templateUrl: './accept-d.component.html',
  styleUrls: ['./accept-d.component.scss']
})
export class AcceptDComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  ngTransactionNo:any=null
  ngscheme:any=null
  ngaccount:any=null

  denomination:any

  
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
  ) { }

  ngOnInit(): void {
    this.createForm()
    

  }
  createForm() {
    this.angForm = this.fb.group({
      TRANSACTION_NO:['',[Validators.required]],
      TOKEN_NO:['',[Validators.pattern]],
      SCHEME:['',[Validators.required]],
      ACCOUNT_NO:['',[Validators.required]],
      NARRATION:['',],
      DENOMINATION_AMT:['',],
      TRANSACTION_AMT:['',[Validators.required]],
      LEDGER_BAL:['',[Validators.pattern]],
      TRANSACTION_TYPE:['',[Validators.pattern]],
      
    })
    
  }

}
