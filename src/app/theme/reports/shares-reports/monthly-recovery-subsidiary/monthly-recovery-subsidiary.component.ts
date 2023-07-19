import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';

@Component({
  selector: 'app-monthly-recovery-subsidiary',
  templateUrl: './monthly-recovery-subsidiary.component.html',
  styleUrls: ['./monthly-recovery-subsidiary.component.scss']
})
export class MonthlyRecoverySubsidiaryComponent implements OnInit {
  angForm : FormGroup;

  maxDate: Date;

  iframe5url: any = '';
  showRepo: boolean = false;

  constructor(
    private fb: FormBuilder,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
  ) 
  {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  //ngfor variables
  div_code1
  div_code2

  //ngmodel variables
  selectedDivcode1
  selectedDivcode2


  ngOnInit(): void {
    this.createForm();
    
    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.div_code1 = data;
      this.div_code2 = data;
    })
  }

  createForm(){
    this.angForm = this.fb.group({
      date: ['',[Validators.required]],
      dcode1:  ['',[Validators.required]],
      dcode2: ['',[Validators.required]],

    });
  }


}
