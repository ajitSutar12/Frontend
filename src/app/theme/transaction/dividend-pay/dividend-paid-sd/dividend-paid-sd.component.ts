import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';

@Component({
  selector: 'app-dividend-paid-sd',
  templateUrl: './dividend-paid-sd.component.html',
  styleUrls: ['./dividend-paid-sd.component.scss']
})
export class DividendPaidSDComponent implements OnInit {
  angForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,

  ) { }

  //ngfor variables
  branchCode
  s_Div

  //ngmodel variables
  selectedbranch
  selectedSDiv
  particulars

  ngOnInit(): void {
    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchCode = data;
    })

    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.s_Div = data;
    })
    
  }


  createForm(){
    this.angForm = this.fb.group({
      traNo: ['',[Validators.required]],
      T_TYPE: ['CS'],
      branch: ['',[Validators.required]],
      date: ['',[Validators.required]],
      sdiv: ['',[Validators.required]],
      particulars: ['',[Validators.required]],
    });
  }
}
