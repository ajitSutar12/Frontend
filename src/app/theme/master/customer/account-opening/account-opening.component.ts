import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BankMasterService } from '../../../../shared/dropdownService/bank-Master-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { InvestmentService } from './account-opening.service';
import { BankService } from '../../policy-settings/information/bank-master/bank-master.service';
import { environment } from '../../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface InvestmentMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  INVEST_BANK: string
  INVEST_BRANCH: string
  AC_NAME: string
  AC_REF_RECEIPTNO: number
  AC_OPDATE: Date
  AC_ASON_DATE: Date
  AC_EXPDT: Date
  AC_MONTHS: number
  AC_DAYS: number
  AC_SCHMAMT: number
  AC_INTRATE: number
  AC_MATUAMT: number
  AC_CLOSEDT: Date
}
@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.scss']
})

export class AccountOpeningComponent implements OnInit {
  @Input() childMessage: string;
  @Output() public getUserData = new EventEmitter<string>();
  //api 
  url = environment.base_url;
  formSubmitted = false;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  investmentMaster: InvestmentMaster[];
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  dtExportOptions: DataTables.Settings = {};
  Data: any;
  datemax: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  //variable to get ID to update
  updateID: number = 0;
  // Filter Variable
  filterData = {};

  //Scheme type variable
  schemeType: string = 'IV'

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  id: string = '';
  BankCode: any[];
  BranchCode: any[];
  scheme: any[];
  bsValue
  AC_TYPE: boolean = false
  code: any = null
  ngBank: any = null
  ngBranch: any = null
  DatatableHideShow: boolean = true;
  rejectShow:boolean =false;
  approveShow:boolean =false;

  constructor(private fb: FormBuilder,
    private bankMasterService: BankMasterService,
    private ownbranchMaster: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private bankService: BankService,
    private investmentService: InvestmentService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;

        dataTableParameters.columns.forEach(element => {
          if (element.search.value != '') {
            let string = element.search.value;
            this.filterData[element.data] = string;
          } else {
            let getColumnName = element.data;
            let columnValue = element.value;
            if (this.filterData.hasOwnProperty(element.data)) {
              let value = this.filterData[getColumnName];
              if (columnValue != undefined || value != undefined) {
                delete this.filterData[element.data];
              }
            }
          }
        });
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/investment',
            dataTableParameters
          ).subscribe(resp => {
            this.investmentMaster = resp.data;
            console.log(this.investmentMaster)
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          title: 'Action',
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account Number',
          data: 'AC_NO'
        },
        {
          title: 'Member Name',
          data: 'AC_NAME'
        },
        {
          title: 'Bank Code',
          data: 'INVEST_BANK'
        },
        {
          title: 'Branch Code',
          data: 'INVEST_BRANCH'
        },
        {
          title: 'A/c Open Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'As On Date',
          data: 'AC_ASON_DATE'
        },
        {
          title: 'Maturity Date',
          data: 'AC_EXPDT'
        },
        {
          title: 'Receipt No.',
          data: 'AC_REF_RECEIPTNO'
        },
        {
          title: 'Interest Rate',
          data: 'AC_INTRATE'
        },
        {
          title: 'Deposit Amount',
          data: 'AC_SCHMAMT'
        },

        {
          title: 'Maturity Amount',
          data: 'AC_MATUAMT'
        },
        {
          title: 'Account Closed Date',
          data: 'AC_CLOSEDT'
        },
      ],
      dom: 'Blrtip',
    };
    this.bankMasterService.getBankList().pipe(first()).subscribe(data => {
      this.BankCode = data;
    })
    this.ownbranchMaster.getOwnbranchList().pipe(first()).subscribe(data => {
      this.BranchCode = data;
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
      this.code = this.scheme[0].value
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_ACNOTYPE: ['IV'],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: [''],
      INVEST_BANK: ['', [Validators.required]],
      INVEST_BRANCH: ['', [Validators.required]],
      AC_NAME: [''],
      AC_REF_RECEIPTNO: ['', [Validators.pattern, Validators.required]],
      AC_OPDATE: ['', [Validators.required]],
      AC_ASON_DATE: ['', [Validators.required]],
      AC_EXPDT: ['', [Validators.required]],
      AC_MONTHS: ['', [Validators.pattern, Validators.required]],
      AC_DAYS: ['', [Validators.pattern, Validators.required]],
      AC_SCHMAMT: ['', [Validators.pattern, Validators.required]],
      AC_INTRATE: ['', [Validators.pattern, Validators.required]],
      AC_MATUAMT: ['', [Validators.pattern]],
      AC_CLOSEDT: ['']
    });
  }

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'INVEST_BANK': formVal.INVEST_BANK,
      'INVEST_BRANCH': formVal.INVEST_BRANCH,
      'AC_NAME': formVal.AC_NAME,
      'AC_REF_RECEIPTNO': formVal.AC_REF_RECEIPTNO,
      'AC_OPDATE': formVal.AC_OPDATE,
      'AC_ASON_DATE': formVal.AC_ASON_DATE,
      'AC_EXPDT': formVal.AC_EXPDT,
      'AC_MONTHS': formVal.AC_MONTHS,
      'AC_DAYS': formVal.AC_DAYS,
      'AC_SCHMAMT': formVal.AC_SCHMAMT,
      'AC_INTRATE': formVal.AC_INTRATE,
      'AC_MATUAMT': formVal.AC_MATUAMT,
      'AC_CLOSEDT': formVal.AC_CLOSEDT
    }
    console.log("dataToSend", dataToSend)
    this.investmentService.postData(dataToSend).subscribe(data => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
    }, (error) => {
      console.log(error)
    })

    //To clear form
    this.resetForm();
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  // Reset Function
  resetForm() {
    this.createForm();
  }
  getBankName(id) {
    this.bankService.getFormData(id).subscribe(data => {
      console.log('get customer data', data)
      this.angForm.patchValue({
        INVEST_BANK: id.toString(),
        AC_NAME: data.BANK_NAME
      })
    })
  }
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.investmentService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'AC_ACNOTYPE': data.AC_ACNOTYPE,
        'AC_TYPE': data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'INVEST_BANK': data.INVEST_BANK,
        'INVEST_BRANCH': data.INVEST_BRANCH,
        'AC_NAME': data.AC_NAME,
        'AC_REF_RECEIPTNO': data.AC_REF_RECEIPTNO,
        'AC_OPDATE': data.AC_OPDATE,
        'AC_ASON_DATE': data.AC_ASON_DATE,
        'AC_EXPDT': data.AC_EXPDT,
        'AC_MONTHS': data.AC_MONTHS,
        'AC_DAYS': data.AC_DAYS,
        'AC_SCHMAMT': data.AC_SCHMAMT,
        'AC_INTRATE': data.AC_INTRATE,
        'AC_MATUAMT': data.AC_MATUAMT,
        'AC_CLOSEDT': data.AC_CLOSEDT
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.investmentService.updateData(data).subscribe(() => {
      console.log(data)
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.rerender();
      this.resetForm();
    })
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#mastertable tfoot tr').appendTo('#mastertable thead');
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
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

    //approve account
    Approve(){
      let user = JSON.parse(localStorage.getItem('user'));
      let obj ={
        id : this.updateID,
        user: user.id
      }
      this.investmentService.approve(obj).subscribe(data=>{
        Swal.fire(
          'Approved',
          'Saving Account approved successfully',
          'success'
        );
        var button = document.getElementById('triggerhide');
        button.click();
  
        this.getUserData.emit('welcome to stackoverflow!');
      },err=>{
        console.log('something is wrong');
      })
    }
  
  
    //reject account
    reject(){
      let user = JSON.parse(localStorage.getItem('user'));
      let obj ={
        id : this.updateID,
        user: user.id
      }
      this.investmentService.reject(obj).subscribe(data=>{
        Swal.fire(
          'Rejected',
          'Saving Account rejected successfully',
          'success'
        );
  
        var button = document.getElementById('triggerhide');
        button.click();
      },err=>{
        console.log('something is wrong');
      })
    }

}
