import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-master-card',
  templateUrl: './master-card.component.html',
  styleUrls: ['./master-card.component.scss']
})
export class MasterCardComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];

  iframe5url: any = '';
  showRepo: boolean = false;
  setLang:any;
  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,

  ) { this.systemParameter.getFormData(1).subscribe(data => {
    
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
  })}

  //ngmodel variables
  selectedScheme
  selectedmemno

  //ngfor variables
  Schemecode
  member_No

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Schemecode = filtered;
      this.getIntroducer()
    })
  }


  getIntro(event){
    this.getschemename = event.name
    this.getIntroducer()
  }

  getschemename: any
  getIntroducer() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.selectedScheme,branchCode]

    
    switch (this.getschemename) {

      case 'SH':
        this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
          this.member_No = data;
          

        })
        break;

    }
     
   }

  createForm(){
    this.angForm = this.fb.group({
      scode: ['',[Validators.required]],
      memNo: ['',[Validators.required]],
      name: ['',[Validators.required]],
      address: ['',[Validators.required]],
      sdate: ['',[Validators.required]],
      rdate: ['',[Validators.required]],
      sdname: ['',[Validators.required]],
      rinstall: ['',[Validators.required]],
      branch: ['',[Validators.required]],
      shledger: ['',[Validators.required]],
      dividend: ['',[Validators.required]],
    
    });
  }

}
