import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-member-liablity-view',
  templateUrl: './member-liablity-view.component.html',
  styleUrls: ['./member-liablity-view.component.scss']
})
export class MemberLiablityViewComponent implements OnInit {
  angForm : FormGroup;
    obj: any;

  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService

  ) { }

  //ngfor variables
  sh_Scheme
  introducerACNo

  //ngmodel variables
  selectedshScheme
  selectedmemNo

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

        var filtered = data.filter(function (sh_Scheme) {
          return (sh_Scheme.name == 'SH');
        });
        this.sh_Scheme = filtered;
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
    this.obj = [this.selectedshScheme,branchCode]

    
    switch (this.getschemename) {

      case 'SH':
        this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          //console.log(data,"gj");        

        })
        break;

    }
     
   }


  createForm(){
    this.angForm = this.fb.group({
      scheme: ['',[Validators.required]],
      memNo: ['',[Validators.required]]
    });
  }

}
