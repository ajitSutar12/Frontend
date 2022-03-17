import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { HttpClient } from '@angular/common/http';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import * as moment from 'moment';
import { Subject } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-shares-ledger-view',
  templateUrl: './shares-ledger-view.component.html',
  styleUrls: ['./shares-ledger-view.component.scss']
})
export class SharesLedgerViewComponent implements OnInit {
  angForm: FormGroup;
  formSubmitted = false;

  //api 

  url = environment.base_url;

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  // dropdown variables
  allScheme: any[]
  ngscheme:any=null
  accountedit:any=null
  schemeACNo: any;

  // Date variables
  todate: any = null;
  fromdate:any=null
  maxDate: any;
  minDate: any;
  bsValue = new Date();

  

  constructor( 
    private fb: FormBuilder,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private config: NgSelectConfig,
    
    ) {
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate());
      this.maxDate.setDate(this.maxDate.getDate())
     }

  ngOnInit(): void {
    this.createForm()

    
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SH');
      });
      this.allScheme = filtered;
    })
    
    
  }
  
  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      AC_OPDATE:['', [Validators.required]],

    });
  }


  schemechange(event) {

    this.getschemename = event.name
    this.ngscheme = event.value
    this.getIntroducer()


  }
  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {

    switch (this.getschemename) {

      case 'SH':

        this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;

        })
        break;
      
    }
  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  counter = 0;
  

  // checking date 
  checkDate(event){

    this.counter = this.counter+1;
    if(this.counter>2 && event.length!=0){
        let value1
      let value2
      value1 = moment(this.fromdate).format('DD/MM/YYYY');
      // console.log(value1)
      value2 = moment(this.todate).format('DD/MM/YYYY');
      // console.log(value2)
      if(moment(value1).isSame(value2)){
        Swal.fire("from date should not be same as to date")
        this.angForm.controls['TO_DATE'].reset()
      }
    }
    
  }
  

}
