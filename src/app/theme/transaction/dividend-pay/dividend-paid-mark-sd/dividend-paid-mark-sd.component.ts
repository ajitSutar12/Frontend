import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';

@Component({
  selector: 'app-dividend-paid-mark-sd',
  templateUrl: './dividend-paid-mark-sd.component.html',
  styleUrls: ['./dividend-paid-mark-sd.component.scss']
})
export class DividendPaidMarkSDComponent implements OnInit {
  angForm : FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
  ) { }


  //ngfor variables
  s_Div

  //ngmodel variables
  selectedSDiv
  particulars

  ngOnInit(): void {
    this.createForm();
    
    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.s_Div = data;
    })
  }


  createForm(){
    this.angForm = this.fb.group({
      traNo: ['',[Validators.required]],
      date: ['',[Validators.required]],
      sdiv: ['',[Validators.required]],
      particulars: ['',[Validators.required]],
    });
  }

}
