import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bnk-dedsk-bal-list-depre',
  templateUrl: './bnk-dedsk-bal-list-depre.component.html',
  styleUrls: ['./bnk-dedsk-bal-list-depre.component.scss']
})
export class BnkDedskBalListDepreComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;
  id: any;
  Cust_ID: any[] //customer id from idmaster
  newcustid: any = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }
  src: any;
  view(event) {
    debugger
    
    event.preventDefault();
    this.formSubmitted = true;
    if(this.angForm.valid){

    // this.showRepo = true;
    let obj = this.angForm.value
    let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
    let scheme = obj.S_ACNOTYPE
    const url = "http://localhost/NewReport/report-code/Report/examples/Nomineelist.php?startDate='" + date + "'&scheme='" + scheme + "'&";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    window.open(url, '_blank');
   
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
  }
  
}
  close(){}
}
