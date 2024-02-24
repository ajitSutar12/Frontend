import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-monthly-recovery-print',
  templateUrl: './monthly-recovery-print.component.html',
  styleUrls: ['./monthly-recovery-print.component.scss']
})
export class MonthlyRecoveryPrintComponent implements OnInit {
  angForm : FormGroup;
  obj: any[];

  iframe5url: any = '';
  showRepo: boolean = false;

  constructor(
    private fb: FormBuilder,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
    private _schemeService: SchemeAccountNoService,
    private translate:TranslateService
  ) {      this.translate.setDefaultLang(environment.setLang) ;
  }


  //ngfor variables
  div_code
  m_from
  m_to

  //ngmodel variables
  selectedDivcode
  selectedMemfrom
  selectedMemto


  ngOnInit(): void {
    this.createForm();

    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.div_code = data;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 1;
    this.obj = [code,branchCode]

    this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
      console.log(data);
      
      this.m_from = data;
      this.m_to = data;

    })
  }

  alertWithSuccess(){
    Swal.fire(`${this.translate.instant('Swal_Msg.Thank_You')}`, `${this.translate.instant('Swal_Msg.Submit')}`, 'success')
  }

  createForm(){
    this.angForm = this.fb.group({
      demandApplNo: ['',[Validators.required]],
      T_TYPE: new FormControl('sd-wise'),
      P_TYPE: new FormControl('mem-no'),
      R_TYPE: new FormControl('all'),
      dcode: ['',[Validators.required]],
      month: ['',[Validators.required]],
      year: ['',[Validators.required]],
      mfrom: ['',[Validators.required]],
      mto: ['',[Validators.required]],

    });
  }

}
