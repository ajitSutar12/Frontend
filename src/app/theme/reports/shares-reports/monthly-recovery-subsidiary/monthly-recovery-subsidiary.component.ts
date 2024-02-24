import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { environment } from 'src/environments/environment';

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
    private translate:TranslateService
  ) 
  {
    this.translate.setDefaultLang(environment.setLang) ;

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
