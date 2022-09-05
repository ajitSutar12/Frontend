import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import * as moment from 'moment';
import Swal from "sweetalert2";
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bnk-glconsist-repo',
  templateUrl: './bnk-glconsist-repo.component.html',
  styleUrls: ['./bnk-glconsist-repo.component.scss']
})
export class BnkGLConsistRepoComponent implements OnInit {
  showRepo: boolean = false;
  printpenal: boolean = false;
  iframeurl : any = ' ';
  clicked:boolean=false;
// Created Form Group
angForm: FormGroup;
 //Dropdown option variable
 branchOption: any;
 ngbranch: any = null;
 ngscheme: any = null;
 schemetype: any = null
 defaultDate: any;
 maxDate: Date;
 minDate: Date;
 bsValue = new Date();

 report_url = environment.report_url;

  constructor( private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer, ) { 
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
    }

  ngOnInit(): void {
    this.createForm();
 //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var schemetype = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'AG' || scheme.name == 'LK'|| scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'IV' || scheme.name == 'GL' )
      });
      this.schemetype = schemetype;
  })
  
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE:["",[Validators.pattern, Validators.required]],
      S_ACNOTYPE:["",[Validators.pattern, Validators.required]],
      REPOTYPE: [""],
      Print: [""],
      Penal: [""],
      OPENINGDATE:["",[Validators.pattern, Validators.required]],
    })
  }
  printpay(){
    this.printpenal=true;
  }
  view(event) {

    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    
    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let sdate = moment(obj.OPENINGDATE).format('DD/MM/YYYY');
      let schemed = obj.S_ACNOTYPE;
      let branch = obj.BRANCH_CODE;
      let schemewise = obj.REPOTYPE;
      let print = obj.Print;
      let penal = obj.Penal;
  
      this.iframeurl = this.report_url+"examples/GeneralLedgerConsistancy.php?sdate='" + sdate +"'&branchName='"+branchName+"'&schemed='"+schemed+"'&schemewise='"+schemewise+"'&print='"+print+"'&penal='"+penal+"' &bankName='" + bankName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }

  close() {
    this.resetForm()
  }
  // Reset Function
  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }
}
