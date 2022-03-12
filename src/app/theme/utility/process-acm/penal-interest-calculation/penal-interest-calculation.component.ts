import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-penal-interest-calculation',
  templateUrl: './penal-interest-calculation.component.html',
  styleUrls: ['./penal-interest-calculation.component.scss']
})
export class PenalInterestCalculationComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variaqbles
  branch_code: any;
  ngBranchCode:any=null
  ngscheme:any=null
  scheme: any[];

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    
    private config: NgSelectConfig,
  ) { }

  ngOnInit(): void {

    this.createForm();
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value

    })
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'CC' || scheme.name == 'SB'|| scheme.name == 'TD'|| scheme.name == 'LN'|| scheme.name == 'CA');
      });
      this.scheme = allscheme;
    })
   

  }

  createForm(){

    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
    })
  }

}
