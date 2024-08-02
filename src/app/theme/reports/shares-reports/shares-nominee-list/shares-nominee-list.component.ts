import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shares-nominee-list',
  templateUrl: './shares-nominee-list.component.html',
  styleUrls: ['./shares-nominee-list.component.scss']
})
export class SharesNomineeListComponent implements OnInit {

  angForm: FormGroup;
  ngbranch!: any;
  branchOption: any = [];
  branchName: any;
  showRepo: boolean = false;
  report_url = environment.report_url;
  showLoading: boolean = false;
  clicked: boolean =false;



  //date
  bsValue = new Date();
  start_date: string;
  end_date: String;
  maxDate: Date;
  minDate: Date;
  tableData: any[] = [];
  showData = []
  formSubmitted: boolean = false;
  ngscheme
  iframe5url: any = '';
  ngbranchName: any;
  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
  ) {
    this.start_date = moment().format('DD/MM/YYYY');
    this.end_date = moment().format('DD/MM/YYYY');
     this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  scheme
  ngOnInit(): void {
    this.createForm();
    this.showtable();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SH');
      });
      this.scheme = filtered;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      start_date: ["", [Validators.required]],
      end_date: ["", [Validators.required]],
      Scheme: ["", [Validators.required]]

    })
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.ngbranchName = event.branchName
  }
  showtable() {
    this.http.get('http://192.168.1.108:7266/ledger-view/cschemtdsbpg').subscribe((data: any) => {
      // console.log(data);

      this.tableData = data
      this.showData.push(this.tableData)

      console.log(this.tableData)
    })
  }

  onLoad() {
    this.showLoading = false;

  }
  view(event){
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if(this.angForm.valid){
      let obj = this.angForm.value
      this.showRepo = true;
      let Date = moment(obj.start_date).format('DD/MM/YYYY');
      let Date1 = moment(obj.end_date).format('DD/MM/YYYY');

      let branch = obj.BRANCH
      
      let Scheme = this.scheme
  
           
     this.iframe5url= this.report_url+"examples/ShareNominee_List.php?startDate='"+Date+"'&scheme='" + branch +  "'&branch='"+branchName +"&bankName=" + bankName + ""+"'&enddate='"+Date1+"'&scheme'"+this.ngscheme;
     this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
     
      
     
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }
  }
  resetForm() {
    this.angForm.controls.Scheme.reset();
    this.angForm.controls.end_date.reset();
    this.angForm.controls.start_date.reset();
  }
  close(){
    this. resetForm();
    this.showRepo = false;
    this.clicked = false;
   }
}
