import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recurring-attg',
  templateUrl: './recurring-attg.component.html',
  styleUrls: ['./recurring-attg.component.scss']
})
export class RecurringAttgComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];

  constructor(
    private translate:TranslateService,
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService
  ) { 
    this.translate.setDefaultLang(environment.setLang);
  }

  //ngfor variables
  branchCode
  schemeCode
  schemeGCode

  //ngmodel variables
  selectedBranch
  selectedTDscheme
  selectedGLscheme

  ngOnInit(): void {
    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchCode = data;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      //console.log(data)
      var filtered = data.filter(function (schemeCode) {
        return (schemeCode.name == 'TD');
      });
      this.schemeCode = filtered.slice(0,5); 
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 10;
    this.obj = [code,branchCode]

    this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
      console.log(data);
      this.schemeGCode = data;

    })

  }

  createForm(){
    this.angForm = this.fb.group({
      branch: ['',[Validators.required]],
      tdScheme: ['',[Validators.required]],
      fdate: ['',[Validators.required]],
      tdate: ['',[Validators.required]],
      cglScheme: ['',[Validators.required]],
    });
  }

}
