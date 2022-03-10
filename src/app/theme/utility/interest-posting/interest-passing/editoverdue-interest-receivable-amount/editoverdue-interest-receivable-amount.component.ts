import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Subject } from 'rxjs-compat';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editoverdue-interest-receivable-amount',
  templateUrl: './editoverdue-interest-receivable-amount.component.html',
  styleUrls: ['./editoverdue-interest-receivable-amount.component.scss']
})
export class EditoverdueInterestReceivableAmountComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;

  // date variables
  ngtrandate:any=null
  warrentDate

  // dropdown variables
  ngBranchCode:any=null
  ngscheme:any=null
  ngfromac:any=null
  ngtoac:any=null

  // Formgroup variable
  angForm: FormGroup;
  dtExportButtonOptions : any = {};
  branch_code: any;
  selectedWarrentDate: any;
  selectedDivFromYear: any;
  selectedDivToYear: any;
  getschemename: any;
  schemeedit: any;
  obj: any[];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  fromAc: any[];
  toAc: any[];
  scheme: any[];
  showButton: boolean;
  InterestArr: any[];

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
  ) { }

  ngOnInit(): void {

    this.createForm()

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    this.http.get(this.url + '/interest-passing').subscribe((data) => {
      this.warrentDate = data
    })

    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = filtered;
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH:['',[Validators.required]],
      TRAN_DATE:['',[Validators.required]],
      AC_TYPE:['',[Validators.required]],
      FROM_AC:['',[Validators.required]],
      TO_AC:['',[Validators.required]],
    });
  }

  getIntDetails(event) {
    
    this.selectedWarrentDate = event.WARRENT_DATE
    this.selectedDivFromYear = event.DIV_FROM_YEAR
    this.selectedDivToYear = event.DIV_TO_YEAR
  }

  getBranch() {
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
    
  }

  schemechange(event) {

    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()


  }

  getIntroducer() {


    

    this.obj = [this.ngscheme, this.ngBranchCode]


    switch (this.getschemename) {
      
      case 'CC':

        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data

        })
        break;
      case 'LN':

        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data


        })
        break;
        
    }
  }

  // Method to insert data into database through NestJS
  submit(event) {
    //To clear form
    this.resetForm();
  }

  addNewData() {
   this.showButton = true;
   
   this.resetForm();
 }

  resetForm(){

 }

 select(){
   this.InterestArr = []
 
   if (this.angForm.controls['FROM_AC'].value < this.angForm.controls['TO_AC'].value) {
    
    
     var object = {
       // AC_NO: event.AC_NO,
       // AC_NAME: event.AC_NAME,
     }
     this.InterestArr.push(object)
   
     
   }
   else {
     Swal.fire("To Account Number Must Be Greater Than From Account Number");
     this.InterestArr = []
     this.angForm.patchValue({
       TO_AC: ''
     })
   }
 }

}
