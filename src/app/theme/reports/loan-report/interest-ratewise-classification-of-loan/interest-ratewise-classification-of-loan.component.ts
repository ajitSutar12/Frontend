import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-interest-ratewise-classification-of-loan',
  templateUrl: './interest-ratewise-classification-of-loan.component.html',
  styleUrls: ['./interest-ratewise-classification-of-loan.component.scss']
})
export class InterestRatewiseClassificationOfLoanComponent implements OnInit {

  angForm: FormGroup;

  ngbranch!: any;
  branchOption: any = [];
  branchName: any;
  scheme: any[];
  transferSchemeDetails: any;
  tScheme
  scode: any = null;
  tableData: any[] = [];
  showData = []
  report_url = environment.report_url;
  iframe5url: any = '';
  showRepo: boolean = false;
  formSubmitted: boolean = false;
  clicked : boolean = false;
  showLoading : boolean = false;
  // SUBMISSION:['SUBMISSION']
  //date
  bsValue = new Date();
  date: string;
  maxDate: Date;
  minDate: Date;
  Termwise: boolean = false;
  Schemewise: boolean = false;
  ngscheme:any;
  url = environment.base_url;

  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private directorMasterDropdown: DirectorMasterDropdownService,
    private systemParameter: SystemMasterParametersService,


  ) {
    this.date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this.showtable();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = filtered;

    
    })
  }
  // getTransferAccountList(event) {
  //   this.tScheme = event.name
  //   this.scheme = event.label

  // }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      date: ["", [Validators.required]],
      // Scheme_code: ["", [Validators.required]],
      Schemewise:['Schemewise'],
      Termwise:['Termwise'],
      SUBMISSION:['SUBMISSION']



    })
  }

  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  
  onLoad() {
    this.showLoading = false;

  }
 
  selectedRows: any[] = [];

  toggleSelection(event: any, row: any) {
    if (event.target.checked) {
      if (!this.selectedRows.includes(row.id)) {
        this.selectedRows.push(row.id);
      }
    } else {
      const index = this.selectedRows.indexOf(row.id);
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
      }
    }
    this.pushSelectedRows(); 
  }
  
  isRowSelected(row: any) {
    return this.selectedRows.includes(row.id);
  }
  
  selectAll() {
    this.selectedRows = this.tableData.map(row => row.id);
    this.updateCheckboxes(true);
    this.pushSelectedRows();
  }
  
  unselectAll() {
    this.selectedRows = [];
    this.updateCheckboxes(false);
    this.pushSelectedRows();
  }
  
  pushSelectedRows() {
    console.log('Selected Rows:', this.selectedRows);
  }
  
  updateCheckboxes(checked: boolean) {
    this.tableData.forEach(row => row.isSelected = checked);
  }
  
  showtable() {
    this.http.get(this.url+'/ledger-view/schems').subscribe((data: any) => {

      this.tableData = data
      this.showData.push(this.tableData)

      console.log(this.tableData)
    })
  }
  

  view(event) {


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
       let Date = moment(obj.date).format('DD/MM/YYYY');
       let branch = obj.BRANCH;
       let checkbox = obj.SUBMISSION
       let rowArray  = this.selectedRows
      //  let scheme = this.ngscheme
      let Rdio = obj.SUBMISSION

       let flag 
      if(Rdio == 'check'){
          flag = 0;
      }
      else{
        flag = 1;
      }
       
      this.iframe5url = this.report_url + "examples/InterestRatewiseClassificationOfLoan.php/?&branchname='"+ branchName +"'&sdate='"+ Date +"'&bankname='"+ bankName +"'&AC_RECOVERY_CLERK='"+ bankName +"'&branch='"+ this.ngbranch +"&checkbox="+checkbox +"&row="+rowArray+ "&scheme='"+this.ngscheme+"&radio="+Rdio+"&flag="+ flag + "";
      // this.iframe5url = this.report_url + "examples/CLERKWISE.php/?&branchname='kotoli'&sdate='01/04/2022'&AC_TYPE='50100'&AC_RECOVERY_CLERK='2'";

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  reset() {
    this.angForm.controls['date'].reset()
    this.angForm.controls['SUBMISSION'].reset()
    this.angForm.controls['Termwise'].reset()
    this.angForm.controls['Schemewise'].reset()
   }
   
   close(){
    this. reset();
    this.showRepo = false;
    this.clicked = false;
   }

}
