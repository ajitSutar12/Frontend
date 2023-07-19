import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-member-dapdt',
  templateUrl: './member-dapdt.component.html',
  styleUrls: ['./member-dapdt.component.scss']
})
export class MemberDAPDTComponent implements OnInit {
  angForm : FormGroup;
  obj: any;

  iframe5url: any = '';
  showRepo: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _schemeService: SchemeAccountNoService
  ) { }

  //ngfor variables
  introducerACNo


  //ngmodel variables
  selectedmemNo


  ngOnInit(): void {
    this.createForm();

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 1;
    this.obj = [code,branchCode]

    this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
      //console.log(data);
     
      this.introducerACNo = data;

   })
    
  }


  createForm(){
    this.angForm = this.fb.group({
      memno: ['',[Validators.required]],
      T_TYPE: ['CS'],
      tpayamt: ['',[Validators.required]],
    });
  }

}
