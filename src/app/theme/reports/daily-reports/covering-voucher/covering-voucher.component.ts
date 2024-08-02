import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-covering-voucher',
  templateUrl: './covering-voucher.component.html',
  styleUrls: ['./covering-voucher.component.scss']
})
export class CoveringVoucherComponent implements OnInit {

  iframe5url: any = '';
  angForm: FormGroup;
  formSubmitted = false;

  ngbranch!: any;
  branchOption: any = [];
  branchName: any;
  //date
  bsValue = new Date();
  date: string;
  maxDate: Date;
  minDate: Date;
  Schemewise: boolean = false;
  showData: any =[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  report_url = environment.report_url;
  shemeDetails: any;
url=environment.base_url
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
  tableData
  ngOnInit(): void {
    this.createForm();
    this.showtable();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      
    });
  
  }
  showtable() {
    this.http.get(this.url+'/ledger-view/cschemtdsbpg').subscribe((data: any) => {
      // console.log(data);

      this.tableData = data
      this.showData.push(this.tableData)

      console.log(this.tableData)
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      date: ["", [Validators.required]],
      SUBMISSION:['SUBMISSION']
    })
  }

  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }


  selectedRows: any[] = [];
  View(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;
      let fromDate = moment(obj.date).format('DD/MM/YYYY');
      let branch = obj.BRANCH
      let Rdio = obj.SUBMISSION
      let rowArray  = this.selectedRows


      let flag 
      if(Rdio == 'check'){
          flag = 0;
      }
      else{
        flag = 1;
      }
     



    this.iframe5url = this.report_url + "examples/CoveringVouchar.php?date='" + fromDate   + "'&Rdio='" + Rdio + "'&ROW='" + rowArray +"'&scheme='" + branch +  "'&branch='"+branchName +  "&bankName=" + bankName +""+"&flag="+flag+"";
    this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);



    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  onLoad() {
    this.showLoading = false;

  }
  resetForm() {
    this.angForm.controls.date.reset();
  }
  close(){
    this. resetForm();
    this.showRepo = false;
    this.clicked = false;
   }

}
