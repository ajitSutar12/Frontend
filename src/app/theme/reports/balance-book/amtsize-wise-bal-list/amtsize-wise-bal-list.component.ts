import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { TranslateService } from "@ngx-translate/core";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
@Component({
  selector: 'app-amtsize-wise-bal-list',
  templateUrl: './amtsize-wise-bal-list.component.html',
  styleUrls: ['./amtsize-wise-bal-list.component.scss']
})
export class AmtsizeWiseBalListComponent implements OnInit {
  angForm: FormGroup;
  maxDate: Date;

  iframe5url: any = '';
  showRepo: boolean = false;
  setLang: any;

  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private translate: TranslateService,
    private systemParameter: SystemMasterParametersService
  ) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());

    this.systemParameter.getFormData(1).subscribe(data => {
      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }


//ngfor variables
Schemecode

//ngmodel variables
selectedScheme

ngOnInit(): void {
  this.createForm();

  this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    var filtered = data.filter(function (Schemecode) {
      return (Schemecode.name == 'TD');
    });
    this.Schemecode = filtered;

  })
}

createForm() {
  this.angForm = this.fb.group({
    T_TYPE: ['D'],
    scode: ['', [Validators.required]],
    sdate: ['', [Validators.required]],
    edate: ['', [Validators.required]],
  });
}

}
