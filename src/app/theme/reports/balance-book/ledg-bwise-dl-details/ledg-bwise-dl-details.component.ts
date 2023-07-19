import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';

@Component({
  selector: 'app-ledg-bwise-dl-details',
  templateUrl: './ledg-bwise-dl-details.component.html',
  styleUrls: ['./ledg-bwise-dl-details.component.scss']
})
export class LedgBwiseDlDetailsComponent implements OnInit {
  angForm : FormGroup;
  maxDate: Date;

  iframe5url: any = '';
  showRepo: boolean = false;

  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
  ) 
  {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  isChecked: boolean = false;

  //ngfor variables
  Schemecode

  //ngmodel variables
  selectedScheme


  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'TD' || Schemecode.name == 'LN');
      });
      this.Schemecode = filtered;
  
    })
  }

  createForm(){
    this.angForm = this.fb.group({
      T_TYPE: ['DI'],
      scode: ['',[Validators.required]],
      sdate: ['',[Validators.required]],
      edate: ['',[Validators.required]],
      mtAmt: ['',[Validators.required]],
      checkActive1: [false],
      checkActive2: [false]
    });
  }

}
