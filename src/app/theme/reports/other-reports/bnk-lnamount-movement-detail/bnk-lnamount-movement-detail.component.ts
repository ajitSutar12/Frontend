
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";

@Component({
  selector: 'app-bnk-lnamount-movement-detail',
  templateUrl: './bnk-lnamount-movement-detail.component.html',
  styleUrls: ['./bnk-lnamount-movement-detail.component.scss'],
  providers: [OwnbranchMasterService, SchemeCodeDropdownService,]
})
export class BnkLNAmountMovementDetailComponent implements OnInit {

  // Created Form Group
  angForm: FormGroup;
  // Date variables
  endingdate: any = null;
  startingdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  formSubmitted = false;
  //Dropdown variables
  schemetype: any[];

  //Dropdown option variable for ngModel
  branchOption: any;
  ngbranch: any = null;

  ngscheme: any = null;
  //Type dropdown
  selectedType: any = null;
  Types:any = [
    { id: 1, value: "Summary" },
    { id: 2, value: "Details" },

  ];
  constructor(private fb: FormBuilder, private _ownbranchmasterservice: OwnbranchMasterService, public schemeCodeDropdownService: SchemeCodeDropdownService,)
   {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'SH' || scheme.name == 'CA' || scheme.name == 'LN' || scheme.name == 'TD' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'AG' || scheme.name == 'IV' || scheme.name == 'GL')
      });
      this.schemetype = filtered;

    })

  }

  createForm() {
    this.angForm = this.fb.group({
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      BRANCH_CODE: ["", [Validators.required]],
      SchemeType: ["", [Validators.required]],
      FAmount: ["", [Validators.required]],
      ToAmount: ["", [Validators.required]],
      Transaction_Type: [''],
      Print_Side: [''],
      Type: ['', [Validators.required]],
    });
  }





}
