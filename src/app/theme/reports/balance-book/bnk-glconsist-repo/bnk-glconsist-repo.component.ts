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
import { VoucherEntryService } from 'src/app/theme/transaction/voucher-entry/voucher-entry.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
 allSchemeCode:any;
 report_url = environment.report_url;

  constructor( private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter:SystemMasterParametersService,
    private voucherservice: VoucherEntryService,
    private sanitizer: DomSanitizer, ) { 
      this.defaultDate = moment().format('DD/MM/YYYY');
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
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
    })
    
    this.voucherservice.getSchemeCodeList().subscribe(data=>{
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]
      this.allSchemeCode = this.allSchemeCode.sort(this.dynamicSort("S_ACNOTYPE"));
      let obj = {
        "S_ACNOTYPE" : 'ALL'
      }
      this.allSchemeCode.unshift(obj);
      console.log(this.allSchemeCode);
    },err=>{
      console.log(err);
    })
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE:["",[Validators.pattern, Validators.required]],
      S_ACNOTYPE:["",[Validators.pattern, Validators.required]],
      REPOTYPE: [""],
      Print: [""],
      Penal: [""],
      OPENINGDATE:["",[Validators.pattern, Validators.required]],
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }
  printpay(){
    this.printpenal=true;
  }
  view(event) {
    debugger
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    
    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      // let sdate = moment(obj.OPENINGDATE).format('DD/MM/YYYY');

      let sdate:any;
      if (this.defaultDate == obj.OPENINGDATE) {
        sdate = moment(this.defaultDate,'DD/MM/YYYY').format('DD/MM/YYYY')
      }else{ 
        sdate = moment(this.defaultDate,'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let schemed = obj.S_ACNOTYPE;
      let branch = obj.BRANCH_CODE;
      let schemewise = obj.REPOTYPE;
      let print = obj.Print;
      let penal = obj.Penal;
  
      this.iframeurl = this.report_url+"examples/GeneralLedgerConsistancy.php?sdate='" + sdate +"'&branch='"+branch+"'&schemed='"+schemed+"'&schemewise='"+schemewise+"'&print='"+print+"'&penal='"+penal+"' &bankName='" + bankName + "'";
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
    // this.createForm()
    this.angForm.controls.S_ACNOTYPE.reset();
    this.angForm.controls.REPOTYPE.reset();
    this.showRepo = false;
    this.clicked=false;
  }
}
