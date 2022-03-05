import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { DeadStockTransactionService } from './dead-stock-transaction.service';
import { ACMasterDropdownService } from '../../../shared/dropdownService/ac-master-dropdown.service';
import { reset } from 'mousetrap';
import { data } from 'jquery';

@Component({
  selector: 'app-dead-stock-transaction',
  templateUrl: './dead-stock-transaction.component.html',
  styleUrls: ['./dead-stock-transaction.component.scss']
})
export class DeadStockTransactionComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  formSubmitted = false;
   //api
   url = environment.base_url;
  //  Formgroup variable
   angForm: FormGroup;
  
  // dropdown variables
  itemcode:any[];
  ngBranchCode:any=null
  ngtransactiondate:any=null
  branch_code: any[];
  schemeedit: any;

  // Date variables
  ngresolutiondate:any=null
  maxDate: Date;
  minDate: Date;

  isTransfer:boolean=false
  isCash: boolean;
  accountedit: any;

  narration: any;
  narrationList: any;
  
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  //Transaction type variable
  ngtransactiontype: any = null
  transactiontype = [
    { id: 'S', label: 'Sales' },
    { id: 'B', label: 'Breakage' },
    { id: 'G', label: 'Gain' },
    { id: 'L', label: 'Loss' },
    { id: 'D', label: 'Depriciation' },
    { id: 'T', label: 'Transfer' }
  ]
  schemeACNo: any[];
  scheme: any[];
  ACMasterDropdown: any;
  ngresolutionnum: boolean;
  cash: boolean;

  
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private deadstocktransaction:DeadStockTransactionService,
    public ACMasterDropdownService: ACMasterDropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
  ) { 
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  dtExportButtonOptions: any = {};
 

  ngOnInit(): void {
    this.getSystemParaDate()
    this.createForm()

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value
    })

    this.ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {

      this.ACMasterDropdown = data;
    })


    // /Narration List
    this.deadstocktransaction.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })
  
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE:['',[Validators.required]],
      TRAN_DATE:[''],
      TRAN_YEAR:[''],
      TRANSACTION_TYPE:['',[Validators.required]],
      ITEM_CODE:[''],
      DEAD_STOCK:[''],
      AC_TYPE:['',[Validators.required]],
      AC_NO:['',[Validators.required]],
      RESOLUTION_DATE:['',[Validators.required]],
      RESOLUTION_NUM:['',[Validators.required,Validators.pattern]],
      NARRATION:['',[Validators.required,Validators.pattern]],
  
  
    })
  }

  
  getBranch() {
   
    this.getIntroducer()
  }

  schemechange(event) {

    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()


  }


  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {


    this.obj = [this.schemeedit, this.ngBranchCode]


    switch (this.getschemename) {
      
        case 'GL':
          this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;
    }
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE,

      })
      // var full = []
      var formatfullDate =data.CURRENT_DATE;
      var nyear = formatfullDate.split(/\//);
      let next= Number(nyear[2]) + 1 
      console.log(next)
      var transactionDate = nyear[2] + next
      this.angForm.patchValue({
            TRAN_YEAR: transactionDate
          })
          console.log(transactionDate)

    })
    
  }

   //get Narration Details 
   getNarration(ele) {
    this.narration = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  changetransaction(){
    this.schemeedit=null,
    this.accountedit=null,
    this.ngresolutionnum=null,
    this.narration=null,
    this.angForm.patchValue({
      // RESOLUTION_DATE: this.angForm.controls['RESOLUTION_DATE'].value,
      RESOLUTION_DATE:'',
    })

  }


  Narration: boolean=false
  Resolution:boolean=false
  GLAccount:boolean=false
  isFormA(value) {

    debugger
    if (this.ngtransactiontype.label == 'Sales'){

      document.getElementById('formC').removeAttribute("disabled");
      if (value == 1) {
        this.GLAccount=true

        this.Resolution=true
       
        this.Narration=true;
        
      }
      else if (value == 2) {
        this.GLAccount=false
        this.Resolution=true

        this.Narration=true;
      
        
      }
      
      // this.angForm.get('type').reset();
    }
    
    if (this.ngtransactiontype.label == 'Breakage'){
      document.getElementById('formC').setAttribute("disabled", "true");
      if (value == 1) {
        this.GLAccount=true

        this.Resolution=true
       
        this.Narration=true;
      }
    }
    
    if (this.ngtransactiontype.label == 'Gain'){
      document.getElementById('formC').setAttribute("disabled", "true");
      if (value == 1) {
        this.GLAccount=true

        this.Resolution=true
        
        this.Narration=true;
      }
      
    }
    if (this.ngtransactiontype.label == 'Loss'){
      document.getElementById('formC').setAttribute("disabled", "true");
      if (value == 1) {
        this.GLAccount=true

        this.Resolution=true
        
        this.Narration=true;
      }
      
      
    }
    if (this.ngtransactiontype.label == 'Depriciation'){
      document.getElementById('formC').removeAttribute("disabled");
      if (value == 1) {
        this.GLAccount=true

        this.Resolution=true
        
        this.Narration=true;
      }
      else if (value == 2) {
        
        
        this.GLAccount=false

        this.Resolution=true
        
        this.Narration=true;
        
      }
      
    }
    if (this.ngtransactiontype.label == 'Transfer'){
      document.getElementById('formC').setAttribute("disabled", "true");
      if (value == 1) {
        this.GLAccount=true

        this.Resolution=true
        
        this.Narration=true;
      }
     
    }
    // this.angForm.patchValue({
        
      // })
    
    
  }

  

  // Reset Function
  resetForm() {
    this.createForm();
    
    this.ngBranchCode = null
    this.schemeedit = null
    this.accountedit = null
    
  }

}
