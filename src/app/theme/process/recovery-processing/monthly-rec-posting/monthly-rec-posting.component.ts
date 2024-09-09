import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import { RecoveryProcessingService } from '.././recovery-processing.service'

@Component({
  selector: 'app-monthly-rec-posting',
  templateUrl: './monthly-rec-posting.component.html',
  styleUrls: ['./monthly-rec-posting.component.scss'],
  // providers: [SchemeCodeDropdownService,RecoveryProcessingService]
})
export class MonthlyRecPostingComponent implements OnInit {

  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;


  url = environment.base_url;

  angForm: FormGroup;
  scheme: any;
  ngscheme
  schemeType: string = 'GL'
  ngtoac: any = null
  schemeACNo
  particulars: any;

  narrationList: any;
  bsValue = new Date();


  constructor(private fb: FormBuilder, private http: HttpClient, private _service: RecoveryProcessingService,


    private SchemeCodeDropdownService: SchemeCodeDropdownService,

  ) { }


  ngOnInit(): void {

    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })

    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.ngscheme = data[0].value
      this.getAccountList()
    })
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({

      TRAN_DATE: ['', [Validators.required]],
      DR_G_L_SCHEME: ['', [Validators.required]],
      DR_G_L_CODE: ['', [Validators.required]],
    })
  }



  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }
  //get account no according scheme
  getAccountList() {
    this.ngtoac = null
    this.http.get(this.url + '/gl-account-master/divAccount/' + this.ngscheme).subscribe((data) => {
      // console.log(data)
      this.schemeACNo = data
    })
  }


  submit(){}
}
