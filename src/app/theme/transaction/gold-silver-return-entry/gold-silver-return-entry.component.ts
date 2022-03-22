import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-gold-silver-return-entry',
  templateUrl: './gold-silver-return-entry.component.html',
  styleUrls: ['./gold-silver-return-entry.component.scss']
})
export class GoldSilverReturnEntryComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;
  showButton: boolean;
  updateShow: boolean;


  // dropdown variables
  ngscheme:any=null
  ngBranchCode:any=null
  branch_code: any;
  accountedit:any=null;
  getschemename: any;
  scheme: any[];
  schemeACNo: any[];

  // Date variables
  ngreturndate:any=null;
  maxDate: Date;
  minDate: Date;
  InterestArr=[];
  


  


  constructor(
    private fb: FormBuilder,private http: HttpClient,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    ) {

      this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())

   }

  ngOnInit(): void {

    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      // var allscheme = data.filter(function (scheme) {
      //   return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      // });
      this.scheme = data;
    })
    let data: any = localStorage.getItem('user');

  }

  
  

  createForm() {
    this.angForm = this.fb.group({
     BRANCH:['',[Validators.required]],
     AC_TYPE:['',[Validators.required]],
     AC_NO:['',[Validators.required]],
     RETURN_DATE:['',[Validators.required]],
     ARTICLE_NAME:[''],
     ARTICLE_DETAILS:[''],

    });
  }

  getBranch(event) {
    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountList()
   
  }

  //get account no according scheme
  getAccountList() {
    this.accountedit = null
    
    
    let obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo=data
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo=data
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo=data
        })
        break;
    }
    
  }

   //update checkbox status in array
   checkInterestFlag(acno, flag) {
    // let isIntUpdate: boolean = false
    // if (flag.target.checked) {
    //   isIntUpdate = true
    // }
    // else {
    //   isIntUpdate = false
    // }
    // if (this.InterestArr.length != 0) {
    //   if (this.InterestArr.some(item => item.AC_NO === acno)) {
    //     this.InterestArr.forEach((element) => {
    //       if (element.AC_NO == acno) {
    //         element['IS_POST_INT_AC'] = isIntUpdate
    //       }
    //     })
    //   }
    //   else {
    //     var object = {
    //       AC_NO: acno,
          
    //       IS_POST_INT_AC: isIntUpdate
    //     }
    //     this.InterestArr.push(object)
    //   }
    // }
    // else {
    //   var object = {
    //     AC_NO: acno,
       
    //     IS_POST_INT_AC: isIntUpdate
    //   }
    //   this.InterestArr.push(object)
    //   console.log(this.InterestArr)
    // }
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
  }
    
}
  
