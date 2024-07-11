import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-head-office-subsidary',
  templateUrl: './head-office-subsidary.component.html',
  styleUrls: ['./head-office-subsidary.component.scss']
})
export class HeadOfficeSubsidaryComponent implements OnInit {

  angForm: FormGroup;

  ngbranch!: any;
  branchOption: any = [];
  branchName: any;

  Scheme
  //date
  bsValue = new Date();
  date: string;
  maxDate: Date;
  minDate: Date;
  Termwise: boolean = false;
  Schemewise: boolean = false;
  Payble:boolean =false;
  url = environment.base_url
  

  iframe5url: any = '';
  report_url = environment.report_url;
  showLoading: boolean = false;
  showRepo: boolean = false;
  clicked: boolean = false;
  formSubmitted: boolean = false;
 
  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) {
    this.date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  SchemeOption
  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.http.get(this.url+'/ledger-view/schems').subscribe((data: any) => {
      this.SchemeOption = data
      console.log("new", this.SchemeOption)
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      date: ["", [Validators.required]],
      Schemewise:[""]
    })
  }

  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  onLoad(){
    this.showLoading = false;

  }
  Schemecode
  getscheme(event){
    this.Schemecode = event.value
  }
  view(event) {
    debugger
  
  
    event.preventDefault();
    this.formSubmitted = true;
  
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
  
  
    if (this.angForm.valid) {
  
      this.showRepo = true;
      let obj = this.angForm.value
        this.showRepo = true;
        let Date = moment(obj.date).format('DD/MM/YYYY');
        // let StartInstall = obj.SInstall
        // let EndInstall = obj.EInstall
        let checkbox = obj.Schemewise
    
        
    
             
       this.iframe5url= this.report_url+"examples/HeadOffice.php?startDate='"+Date+  "'&checkbox='" + checkbox +  "'&branchName='" + branchName + "'&branchCode='"+ this.ngbranch + "&bankName=" + bankName + "";
       this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
       
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  reset() {
    this.angForm.controls['date'].reset()
    


  }

  close() {
    this.reset();
    this.showRepo = false;
    this.clicked = false;
  }

}
