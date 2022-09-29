import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StatementTypeService } from '../../../shared/elements/statement-type.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { BatchVoucherService } from './batch-voucher.service';
import { CompanyGroupMasterDropdownService } from 'src/app/shared/dropdownService/company-group-master-dropdown.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import * as moment from 'moment';


@Component({
  selector: 'app-batch-voucher',
  templateUrl: './batch-voucher.component.html',
  styleUrls: ['./batch-voucher.component.scss']
})
export class BatchVoucherComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  date: any;
  angForm: FormGroup;
  isture: boolean = true;

  branch_code: any//from ownbranchmaster
  company_code: any//From companygroupmaster
  company_data: any;
  gridData: any;
  company_main_data: any;

  selectedBranch: any;
  selectCompanyCode: any;
  totalAmt: number = 0;
  filterArray: any;
  narrationList: any;
  particulars: any;
  dtTrigger: any;
  dtElement: any;

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private _service: BatchVoucherService,
    private CompanyGroupMasterDropdownService: CompanyGroupMasterDropdownService,
    private _multiService: MultiVoucherService
  ) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
  }
  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      //debugger
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

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      company_code: ['', [Validators.required]],
      ledger_balance: [''],
      chequeNo: [''],
      ChequeDate: [''],
      voucherAmount: [''],
      particulars: [''],
      TotalAmt: [''],
      date: [''],
      Scheme: [''],
      SchemeACNO: [''],
    })
  }

  //cheque no captial function
  chequeNoData(event){
    debugger
    this.angForm.patchValue({
      chequeNo : event.target.value.toUpperCase()
    }) 
  }
  //Get Company Code Details
  companyNameData :any;
  getCompanyData(ele) {
    this.CompanyGroupMasterDropdownService.getCompanyData(this.selectCompanyCode).subscribe(data => {
      console.log(data);
      this.company_data = data;
      this.companyNameData = data.AC_NO+'/'+data.NAME;
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
      if (type == 'AC_TYPE') {
        if (JSON.stringify(element.AC_TYPE).includes(ele.target.value)) {
          this.filterArray.push(element);
        }
      } else {
        if (JSON.stringify(element.AC_NO).includes(ele.target.value)) {
          this.filterArray.push(element);
        }
      }

    });
  }


  changeAmount(ele, i) {
    // debugger
    this.filterArray[i].DEFAULT_AMOUNT = Number(ele.target.value);
    this.totalAmt = 0;
    this.filterArray.forEach(element => {
      //debugger
      this.totalAmt = this.totalAmt + element.DEFAULT_AMOUNT;
    });
  }
  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  Submit() {
    //debugger
    var obj = this.angForm.value;
    if (Number(obj.voucherAmount) != Number(this.totalAmt)) {
      Swal.fire('Error!', 'Voucher amount not equal to Total Amount', 'error');
    }
    let cheqDate
    const formVal = this.angForm.value
    //create a object
    let dataObj = this.angForm.value;
    dataObj['ChequeDate'] = (formVal.ChequeDate == '' || formVal.ChequeDate == 'Invalid date' || formVal.ChequeDate == null || formVal.ChequeDate == undefined) ? cheqDate = '' : cheqDate = moment(formVal.ChequeDate).format('DD/MM/YYYY'),
      dataObj['gridData'] = this.filterArray;
    dataObj['schemeData'] = this.company_data;
    dataObj['companyData'] = this.company_main_data;
    dataObj['user'] = JSON.parse(localStorage.getItem('user'));

    this._service.submitData(dataObj).subscribe(data => {

    }, err => {
      console.log(err);
    })
  }
  updatecheckdata
  public visibleAnimate = false;
  public visible = false;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateID

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
  editClickHandler(id) {
    this._service.getFormData(id).subscribe((data) => {
      this.updateID = data.id
      this.updatecheckdata = data
      if (data.TRAN_STATUS == 0) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
      } else {
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.selectedBranch = data.BRANCH_CODE
      this.angForm.patchValue({
        date: data.TRAN_DATE,
        Scheme: data.TRAN_ACNOTYPE,
        SchemeACNO: data.TRAN_ACNO,
        chequeNo: data.CHEQUE_NO,
        ChequeDate: data.CHEQUE_DATE,
        voucherAmount: data.TRAN_AMOUNT,


      })

    })
  }

  updateData() {

  }

  //approve account
  Approve() {
    let obj = {
      id: this.updateID,
    }
    this._service.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Batch Voucher approved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();

    }, err => {
      console.log('something is wrong');
    })
  }

  //reject account
  reject() {
    let obj = {
      id: this.updateID,
    }
    this._service.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Batch Voucher rejected successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
    }, err => {
      console.log('something is wrong');
    })
  }


  addNewData() {
    this.createForm()
  }


  ngAfterViewInit(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#transactiontable tfoot tr').appendTo('#transactiontable thead');
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (this['value'] != '') {
            that
              .search(this['value'])
              .draw();
          } else {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }
};

