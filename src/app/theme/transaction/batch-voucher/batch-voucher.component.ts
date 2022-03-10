import { Component, OnInit } from '@angular/core';
import { StatementTypeService } from '../../../shared/elements/statement-type.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { BatchVoucherService } from './batch-voucher.service';
import { CompanyGroupMasterDropdownService } from 'src/app/shared/dropdownService/company-group-master-dropdown.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';



@Component({
  selector: 'app-batch-voucher',
  templateUrl: './batch-voucher.component.html',
  styleUrls: ['./batch-voucher.component.scss']
})
export class BatchVoucherComponent implements OnInit {
  date: any;
  angForm: FormGroup;
  isture: boolean = true;

  branch_code: any//from ownbranchmaster
  company_code: any//From companygroupmaster
  company_data: any;
  gridData: any;
  company_main_data:any;

  selectedBranch: any;
  selectCompanyCode: any;
  totalAmt:number = 0;
  filterArray:any;
  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private _service: BatchVoucherService,
    private CompanyGroupMasterDropdownService: CompanyGroupMasterDropdownService,
    private _multiService: MultiVoucherService
  ) {}
  ngOnInit(): void {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      company_code: [''],
      ledger_balance: [''],
      chequeNo: [''],
      ChequeDate: [''],
      voucherAmount: [''],
      narration: [''],
      TotalAmt: [''],
      date:['']
    })
    let user = JSON.parse(localStorage.getItem('user'));

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      debugger
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    //Company code
    this.CompanyGroupMasterDropdownService.getCompanyGroupMasterList().pipe(first()).subscribe(data => {
      this.company_code = data;
    })

    //sys para details
    this._multiService.getSysParaData().subscribe(data => {
      this.date = data[0].CURRENT_DATE;
    })
  }

  //Get Company Code Details
  getCompanyData(ele) {
    this.CompanyGroupMasterDropdownService.getCompanyData(this.selectCompanyCode).subscribe(data => {
      this.company_data = data;
    }, err => {
      console.log(err);
    })

    this.CompanyGroupMasterDropdownService.getCompanyGridData(this.selectCompanyCode).subscribe(data => {
      this.company_main_data = data[0];
      this.gridData = data[0].comapnylink;
      this.filterArray = data[0].comapnylink;
      this.filterArray.forEach(element => {
        this.totalAmt = this.totalAmt + element.DEFAULT_AMOUNT;
      });
    }, err => {
      console.log(err);
    })
  }

  //filter object
  filterObject(ele, type) {
    console.log(this.gridData);
    let matchArray = new Array()
    this.filterArray = [];
    this.gridData.forEach(element => {
      if(type == 'AC_TYPE'){
        if(JSON.stringify(element.AC_TYPE).includes(ele.target.value)){
          this.filterArray.push(element);
        }
      }else{
        if(JSON.stringify(element.AC_NO).includes(ele.target.value)){
          this.filterArray.push(element);
        }
      }
      
    });
  }

  changeAmount(ele,i){
    debugger
    this.filterArray[i].DEFAULT_AMOUNT = Number(ele.target.value);
    this.totalAmt = 0;
    this.filterArray.forEach(element => {
      debugger
      this.totalAmt = this.totalAmt + element.DEFAULT_AMOUNT;
    });
  }

  Submit(){
    debugger
    var obj = this.angForm.value;
    if(Number(obj.voucherAmount) != Number(this.totalAmt)){
      Swal.fire('Error!', 'Voucher amount not equal to Total Amount', 'error');
    }

    //create a object
    let dataObj = this.angForm.value;
    dataObj['gridData'] = this.filterArray;
    dataObj['schemeData'] = this.company_data;
    dataObj['companyData'] = this.company_main_data;
    dataObj['user'] = JSON.parse(localStorage.getItem('user'));

    this._service.submitData(dataObj).subscribe(data=>{

    },err=>{
      console.log(err);
    })
  }
};

