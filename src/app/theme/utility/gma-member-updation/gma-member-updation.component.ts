import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-gma-member-updation',
  templateUrl: './gma-member-updation.component.html',
  styleUrls: ['./gma-member-updation.component.scss']
})
export class GmaMemberUpdationComponent implements OnInit {
  angForm : FormGroup;

  //ngmodel variables
  selectedScheme
  selectedmfrom
  selectedmto

  //ngfor variables
  Scheme
  m_from
  m_to
  obj: any;

  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      console.log(data)
      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Scheme = filtered;
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
          this.m_from = data;
          this.m_to = data;
     
        })
        break;


    
    }
     
   }


  createForm(){
    this.angForm = this.fb.group({
      scheme: ['',[Validators.required]],
      wdate: ['',[Validators.required]],
      myear: ['',[Validators.required]],
      memfrom: ['',[Validators.required]],
      memto: ['',[Validators.required]]
  
    });
  }

}
