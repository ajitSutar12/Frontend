import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-shares-ccts',
  templateUrl: './shares-ccts.component.html',
  styleUrls: ['./shares-ccts.component.scss']
})
export class SharesCCTSComponent implements OnInit {
  angForm : FormGroup;
  obj: any;

  iframe5url: any = '';
  showRepo: boolean = false;
  setLang:any;
  constructor(
    private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private schemeAccountNoService: SchemeAccountNoService,private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,

  ) { this.systemParameter.getFormData(1).subscribe(data => {
    
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
  })}

  //ngfor variables
  d_Scheme
  c_Scheme
  introducerACNo
  kd_scheme

  //ngmodel variables
  selectedDScheme
  selectedCScheme
  selectedaccNo
  selectedKDscheme
  particulars
  
  ngOnInit(): void {
    this.createForm();

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 10;
    this.obj = [code,branchCode]

    this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
      console.log(data);
      this.introducerACNo = data;

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.d_Scheme = data;
      this.c_Scheme = data;
    });

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      //console.log(data)
      var filtered = data.filter(function (kd_scheme) {
        return (kd_scheme.name == 'TD');
      });
      this.kd_scheme = filtered.slice(0,5);
      

    })

    

  }


  createForm(){
    this.angForm = this.fb.group({
      dscheme: ['',[Validators.required]],
      cscheme: ['',[Validators.required]],
      kdscheme: ['',[Validators.required]],
      shamtlimit: ['',[Validators.required]],
      accNo: ['',[Validators.required]],
      particulars: ['',[Validators.required]],
    });
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
