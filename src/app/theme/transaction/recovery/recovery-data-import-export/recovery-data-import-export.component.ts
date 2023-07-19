import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';


const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { log } from 'console';

@Component({
  selector: 'app-recovery-data-import-export',
  templateUrl: './recovery-data-import-export.component.html',
  styleUrls: ['./recovery-data-import-export.component.scss']
})
export class RecoveryDataImportExportComponent implements OnInit {
  angForm : FormGroup;
  obj: any;
  
  
  constructor(
    private fb: FormBuilder,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
    private _schemeService: SchemeAccountNoService

  ) { }


  //ngfor variables
  div_From
  div_To
  div_Code
  ac_From
  ac_To

  //ngmodel variables
  selectedDivfrom
  selectedDivto
  selectedDcode
  selectedAcfrom
  selectedActo

  ngOnInit(): void {
    this.createForm();
   
    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.div_Code = data;
      this.div_From = data;
      this.div_To   = data;

    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 1;
    this.obj = [code,branchCode]

    this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
      console.log(data);
      
      this.ac_From = data;
      this.ac_To = data;

    })
  }


  createForm(){
    this.angForm = this.fb.group({
      divcode: ['', [Validators.required]],
      imonth: ['', [Validators.required]],
      iyear: ['', [Validators.required]],
      IFT: ['CS'],
      divfrom: ['',[Validators.required]],
      tdate: ['', [Validators.required]],
      divto: ['',[Validators.required]],
      month: ['',[Validators.required]],
      year: ['',[Validators.required]],
      acfrom: ['',[Validators.required]],
      acto: ['',[Validators.required]],

      

      
    });
  }

}
