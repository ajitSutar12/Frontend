import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-consolidation-transaction',
  templateUrl: './consolidation-transaction.component.html',
  styleUrls: ['./consolidation-transaction.component.scss']
})
export class ConsolidationTransactionComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];

  constructor(
    private fb: FormBuilder,
    private schemeAccountNoService: SchemeAccountNoService
  ) { }

  //checkbox variable
  isIsRestrictTransactionEntry: boolean = false;

  //ngfor variable
  gl_Scheme

  //ngmodel variable
  selectedScheme

  ngOnInit(): void {
    this.createForm();

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 10;
    this.obj = [code,branchCode]

    this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
      //console.log(data);
      this.gl_Scheme = data;

    })
  }

  createForm(){
    this.angForm = this.fb.group({
      checkActive1: [false],
      checkActive2: [false],
      checkActive3: [false],
      checkActive4: [false],
      T_TYPE: ['CS'],
      Scheme: ['',[Validators.required]]
    });
  }

}
