import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit-interest-projection',
  templateUrl: './deposit-interest-projection.component.html',
  styleUrls: ['./deposit-interest-projection.component.scss']
})
export class DepositInterestProjectionComponent implements OnInit {


  ngForm: FormGroup;

//ngmodel
BranchCode
scheme
depositAmount
schemeCode


  dtExportButtonOptions: any = {};
  branch_code: any;
  constructor(private fb: FormBuilder,private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService:SchemeCodeDropdownService) { }

  ngOnInit(): void {
  
    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

//branchcode
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.BranchCode = user.branchId;
    })

//scheme
this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
  var filtered = data.filter(function (scheme) {
    return (scheme.name == 'TD');
    // return (scheme.name == 'SB' || scheme.name == 'CA' 
    // || scheme.name == 'TD' || scheme.name == 'DS'  || scheme.name == 'GS' 
    // || scheme.name == 'PG' || scheme.name == 'AG' || scheme.name == 'IV');
  });
  
  this.scheme = filtered;
})


  }

  createForm()
  {
    this.ngForm = this.fb.group({
    
      BRANCH_CODE: ['', [Validators.required]],
      Scheme: ['', [Validators.required]],
      DEPO_AMT: ['', [Validators.required]],
      MONTH : ['', [Validators.required]],
      DAYS : ['', [Validators.required]],
      INT_RATE : ['', [Validators.required]],
      DEPO_DATE : ['', [Validators.required]],
      MATUR_DATE : ['', [Validators.required]],
      MATUR_AMT: ['', [Validators.required]],

    });
  }



  decimalAllContent($event) {
    // let value = Number($event.target.value);
    //   let data = value.toFixed(2);
    //   $event.target.value = data;
      var t = $event.target.value;
      $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getschemename: any
  getBranch() {
    this.getschemename = null
   
    this.schemeCode = null
  }

 

   //check  if margin values are below 100
   checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele <= 50) {
    } else {
      Swal.fire("Invalid Input", "Please insert values below 50", "error");
      this.ngForm.patchValue({
        TDS_RATE: 0
      })
    }
  }
}
