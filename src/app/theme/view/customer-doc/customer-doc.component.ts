import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-doc',
  templateUrl: './customer-doc.component.html',
  styleUrls: ['./customer-doc.component.scss']
})
export class CustomerDocComponent implements OnInit {

  constructor(private ownbranchMasterService: OwnbranchMasterService, private schemeCodeDropdownService: SchemeCodeDropdownService, private http: HttpClient, private fb: FormBuilder,public sanitizer: DomSanitizer,) { 
    console.log('hi')
  }

  angForm: FormGroup
  branch_code = []
  allScheme
  url = environment.base_url
  accountedit
  branchName

  ngOnInit(): void {

    this.createForm()

    let userData = JSON.parse(localStorage.getItem('user'));
    this.branchName = userData.branch.NAME;
    this.ngBranchCode = userData.branchId

    this.angForm.patchValue({
      "BRANCH_CODE": this.branchName
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GL' || scheme.name == 'SH')
      });
      this.allScheme = allscheme;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      // DATE: ['', [Validators.required]],
    });
  }

  getschemename
  schemechange(event) {
    this.getschemename = event.name
    this.ngscheme1 = event.value
    this.getAccountlist()
  }

  ngscheme
  ngscheme1
  ngBranchCode
  schemeACNo
  getAccountlist() {

    let obj = [this.ngscheme1, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':

        this.http.get<any>(this.url + '/saving-master/balUpdate/' + obj).subscribe((data) => {
        // this.http.get<any>('http://192.168.1.153:7272/saving-master/balUpdate/' + obj).subscribe((data) => {
          this.schemeACNo = data
          //  this.des =  this.schemeACNo.push(this.idmaster)
          console.log(data);
        })
        break;
      case 'CA':

        this.http.get<any>(this.url + '/current-account-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
      case 'AG':

        this.http.get<any>(this.url + '/pigmy-agent-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
      case 'GS':

        this.http.get<any>(this.url + '/anamat-gsm/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
      case 'PG':

        this.http.get<any>(this.url + '/pigmy-account-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
      case 'TD':

        this.http.get<any>(this.url + '/term-deposits-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
      case 'LN':

        this.http.get<any>(this.url + '/term-loan-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
      case 'DS':
        this.http.get<any>(this.url + '/dispute-loan-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);

        })
        break;
      case 'CC':

        this.http.get<any>(this.url + '/cash-credit-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
      case 'SH':

        // this.http.get<any>(this.url + '/share-master/balUpdate/' + obj).subscribe(data => {
        this.http.get<any>('http://192.168.1.153:7272/share-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
      case 'GL':

        this.http.get<any>(this.url + '/gl-account-master').subscribe(data => {
          this.schemeACNo = data
          console.log(this.schemeACNo);
        })

        break;
      case 'IV':

        this.http.get<any>(this.url + '/investment/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
          console.log(data);
        })
        break;
    }
  }

  accountEvent
  getAccountDetails(event) {

    this.accountEvent = event

  }

  getBranch(event) {
    this.ngBranchCode = event.value
  }


  selectedImagePreview: any;
  documentUrl = this.url + '/'

  isPdf: boolean = false
  isImgPreview: boolean = false
  urlMap: SafeResourceUrl
  viewImagePreview(ele, id) {
    this.selectedImagePreview = id;
   if (this.selectedImagePreview.toLowerCase().endsWith('.jpg') || this.selectedImagePreview.toLowerCase().endsWith('.png') || this.selectedImagePreview.toLowerCase().endsWith('.jpeg')) {
      this.isImgPreview = true;
      this.isPdf = false;
      this.selectedImagePreview = this.selectedImagePreview;
      this.urlMap = '';
    } else if (this.selectedImagePreview.toLowerCase().endsWith('.pdf')) {
      this.isImgPreview = false;
      this.isPdf = true; 
      // this.selectedImagePreview = '';
      this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedImagePreview);
    } else {
      this.isImgPreview = false;
      this.isPdf = false; 
      this.selectedImagePreview = '';
      this.urlMap = '';
    }
  }
}
