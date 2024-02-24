import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-amt-transfer-transaction',
  templateUrl: './amt-transfer-transaction.component.html',
  styleUrls: ['./amt-transfer-transaction.component.scss']
})
export class AmtTransferTransactionComponent implements OnInit {
  angForm : FormGroup;

  iframe5url: any = '';
  showRepo: boolean = false;

  constructor(
    private translate:TranslateService,
    private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
  ) {
    this.translate.setDefaultLang(environment.setLang);
   }

  //ngfor variables
  d_Scheme
  c_Scheme

  //ngmodel variables
  selectedDScheme
  selectedCScheme
  particulars


  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.d_Scheme = data;
      this.c_Scheme = data;
    });
  }

  createForm(){
    this.angForm = this.fb.group({
      demandApplNo: ['',[Validators.required]],
      // T_TYPE: ['DC'],
      // R_TYPE: ['BA'],
      T_TYPE: new FormControl('debit-credit'),
      R_TYPE: new FormControl('BA'),
      dscheme: ['',[Validators.required]],
      cscheme: ['',[Validators.required]],
      particulars: ['',[Validators.required]]

    });
  }

}
