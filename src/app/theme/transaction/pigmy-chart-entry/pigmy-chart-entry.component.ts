import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SchemeCodeDropdownService } from '../../../shared/dropdownService/scheme-code-dropdown.service'
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service'
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'
import { PigmyChartEntryService } from './pigmy-chart-entry.service'
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
interface PigmyChartMasterTable {
  TRAN_DATE: string
  AGENT_ACTYPE: string
  AGENT_ACNO: string
  BRANCH_CODE: string
  SHORT_NAME: string
  CHART_NO: string
  TRAN_AMOUNT: string

}
@Component({
  selector: 'app-pigmy-chart-entry',
  templateUrl: './pigmy-chart-entry.component.html',
  styleUrls: ['./pigmy-chart-entry.component.scss']
})
export class PigmyChartEntryComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  angForm: FormGroup;

  sysDate
  ngBranchCode: any = null
  ngschemeCode: any = null
  branch_code
  scheme
  branch
  ngAgentCode: any = null
  agentACNO
  obj
  tableArr: any
  mem
  dtOptions: DataTables.Settings = {};
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  Data: any;
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
  //filter variable
  filterData = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dtTrigger1: Subject<any> = new Subject<any>();
  //Scheme type variable
  schemeType: string = 'AG'
  formSubmitted: boolean = false
  showTable: boolean = false
  totalAmt: number = 0
  pigmyChartTable = []
  pigmyAutoVoucher: boolean = false
  branchCode
  userID
  agentBankACNO
  S_GLACNO
  pigmyChartMasterTable: PigmyChartMasterTable[]
  updateID
  isReceiptShow: boolean = false
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  constructor(private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _pigmy: PigmyChartEntryService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'ftip'
    };
    this.createForm()
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/pigmy-chart',
            dataTableParameters
          ).subscribe(resp => {
            this.pigmyChartMasterTable = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: 'Action',
        },
        {
          title: 'Date',
          data: 'TRAN_DATE'
        }, {
          title: 'Agent AC Type',
          data: 'AGENT_ACTYPE'
        },
        {
          title: 'Agent Account Number',
          data: 'AGENT_ACNO'
        },
        {
          title: 'Branch Code',
          data: 'BRANCHCODE'
        },
        {
          title: 'Chart Number',
          data: 'CHART_NO'
        },
        {
          title: 'Total Amount',
          data: 'TRAN_AMOUNT'
        },

      ],
      dom: 'Blrtip',
    };
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    this.userID = result.USER_NAME
    if (result.RoleDefine[0].Role.NAME == "Admin") {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }

    this.getSystemParaDate()
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      TRAN_DATE: [''],
      BRANCH: ['', [Validators.required]],
      AGENT_ACTYPE: ['', [Validators.required]],
      CHART_NO: [1, [Validators.maxLength, Validators.minLength, Validators.required]],
      TRAN_AMOUNT: [0],
      AGENT_ACNO: ['', [Validators.required]]
    });
  }

  //get agent account number after branch selection
  getBranch(event) {
    this.branchCode = event.name
    this.getPigmyAgentAcnoList()
  }
  
  //get syspara table data for date and pigmy auto voucher flag
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      data.IS_RECEIPTNO_IN_PIGMYCHART == true ? this.isReceiptShow = true : this.isReceiptShow = false
      data.PIGMY_IS_AUTO_VOUCHER == false ? this.pigmyAutoVoucher = false : this.pigmyAutoVoucher = true

      this.angForm.patchValue({
        TRAN_DATE: data.PIGMY_CURRENT_DATE
      })
    })
  }
  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }
  //fetch acno list according scheme and branch code
  getPigmyAgentAcnoList() {
    this.ngAgentCode = null
    this.agentACNO = [];
    this.obj = [this.ngschemeCode, this.ngBranchCode]
    this.schemeAccountNoService.getpigmyChartAcno(this.obj).subscribe(data => {
      this.agentACNO = data;
    })
  }

  //check effect date form existing data in LNACINTRATE table
  checkPigmyAgentNo(event) {
    let list = this.ngschemeCode
    this.agentBankACNO = event.bank
    this.S_GLACNO = event.glacno
    this.getTable()
  }

  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
  }

  //get pigmy account data into table 
  getTable() {
    let trandate = this.angForm.controls['TRAN_DATE'].value
    var full = []
    var fullDate = trandate;
    full = fullDate.split(' ');
    var date = full[0].split(/\//);
    var newDate = date[1] + '/' + date[0] + '/' + date[2]
    var k = new Date(newDate);
    var expiryDate = moment(k).format('DD.MM.YYYY');
    let chart = this.angForm.controls['CHART_NO'].value
    this.mem = [this.ngschemeCode, this.ngAgentCode, this.ngBranchCode, expiryDate, chart]
    this.dtTrigger.unsubscribe();
    this.http.get(this.url + '/pigmy-chart/check/' + this.mem).subscribe((data) => {
      if (data == 1) {
        Swal.fire({
          icon: 'info',
          title: 'This Agent Chart is Already Exist',
        })
        this.angForm.patchValue({
          CHART_NO: ''
        })
      }
      else {
        this.http.get(this.url + '/pigmy-chart/pigmychart/' + this.mem).subscribe((data) => {
          this.tableArr = data;
          this.showTable = true
          this.totalAmt = 0
          this.pigmyChartTable = []
          this.angForm.patchValue({
            TRAN_AMOUNT: this.totalAmt
          })
          this.dtTrigger.next();
        });
      }
    })
  }

  //push receipt no into object
  getReceiptNo(id, actype, acno, glacno, bankacno, receiptNo) {
    if (receiptNo != '' || receiptNo != 0) {
      if (this.pigmyChartTable.length != 0) {
        if (this.pigmyChartTable.some(item => item.TRAN_ACNO === acno)) {
          this.pigmyChartTable.forEach((element) => {
            if (element.TRAN_ACNO == acno) {
              element['RECEIPT_NO'] = receiptNo
            }
          })
        }
        else {
          var object = {
            pigmyID: id,
            TRAN_ACTYPE: actype,
            TRAN_ACNO: acno,
            TRAN_GLACNO: glacno,
            TRAN_BANKACNO: bankacno,
            RECEIPT_NO: receiptNo,
            // TRAN_AMOUNT: amount,
          }
          this.pigmyChartTable.push(object)
        }
      }
      else {
        var object = {
          pigmyID: id,
          TRAN_ACTYPE: actype,
          TRAN_ACNO: acno,
          TRAN_GLACNO: glacno,
          TRAN_BANKACNO: bankacno,
          RECEIPT_NO: receiptNo,
          // TRAN_AMOUNT: amount,
        }
        this.pigmyChartTable.push(object)
      }
    }
  }
  //push amount in pigmyChartTable array
  getAmount(id, actype, acno, glacno, bankacno, amount) {
    if (amount != '') {
      if (this.pigmyChartTable.length != 0) {
        if (this.pigmyChartTable.some(item => item.TRAN_ACNO === acno)) {
          this.pigmyChartTable.forEach((element) => {
            if (element.TRAN_ACNO == acno) {
              this.totalAmt = this.totalAmt + parseInt(amount) - parseInt(element['TRAN_AMOUNT'])
              this.angForm.patchValue({
                TRAN_AMOUNT: this.totalAmt
              })
              element['TRAN_AMOUNT'] = amount
            }
          })
        }
        else {
          var object = {
            pigmyID: id,
            TRAN_ACTYPE: actype,
            TRAN_ACNO: acno,
            TRAN_GLACNO: glacno,
            // RECEIPT_NO: receiptNo,
            TRAN_BANKACNO: bankacno,
            TRAN_AMOUNT: amount,
          }
          this.pigmyChartTable.push(object)
          this.totalAmt = this.totalAmt + parseInt(amount)
          this.angForm.patchValue({
            TRAN_AMOUNT: this.totalAmt
          })
        }
      }
      else {
        var object = {
          pigmyID: id,
          TRAN_ACTYPE: actype,
          TRAN_ACNO: acno,
          TRAN_GLACNO: glacno,
          // RECEIPT_NO: receiptNo,
          TRAN_BANKACNO: bankacno,
          TRAN_AMOUNT: amount,
        }
        this.pigmyChartTable.push(object)
        this.totalAmt = this.totalAmt + parseInt(amount)
        this.angForm.patchValue({
          TRAN_AMOUNT: this.totalAmt
        })
      }
    }
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    if (this.pigmyChartTable.length != 0) {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      const dataToSend = {
        'BRANCH_ID': this.ngBranchCode,
        'BRANCHCODE': this.branchCode,
        'BRANCH_CODE': branchCode,
        'TRAN_DATE': formVal.TRAN_DATE,
        'AGENT_ACTYPE': formVal.AGENT_ACTYPE,
        'AGENT_ACNO': formVal.AGENT_ACNO,
        'USER_CODE': this.userID,
        'OFFICER_CODE': this.userID,
        'CHART_NO': formVal.CHART_NO,
        'PIGMY_IS_AUTO_VOUCHER': this.pigmyAutoVoucher,
        'TRAN_AMOUNT': formVal.TRAN_AMOUNT,
        'AGENTBANKAC': this.agentBankACNO,
        'S_GLACNO': this.S_GLACNO,
        'PigmyChartArr': this.pigmyChartTable
      };
      this._pigmy.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });
        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
      this.totalAmt = 0
      this.tableArr = []
      this.pigmyChartTable = []
    }
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.angForm.controls['BRANCH'].disable()
    this.angForm.controls['AGENT_ACTYPE'].disable()
    this.angForm.controls['AGENT_ACNO'].disable()
    this.angForm.controls['CHART_NO'].disable()
    this._pigmy.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngschemeCode = data.AGENT_ACTYPE
      this.ngBranchCode = data.BRANCH_ID
      this.agentBankACNO = data.AGENT_BANKACNO
      this.getPigmyAgentAcnoList()
      this.angForm.patchValue({
        'TRAN_DATE': data.TRAN_DATE,
        'BRANCH': data.BRANCH_ID,
        'AGENT_ACTYPE': data.AGENT_ACTYPE,
        'CHART_NO': data.CHART_NO,
        'TRAN_AMOUNT': data.TRAN_AMOUNT,
      })
      this.ngAgentCode = data.AGENT_ACNO
      let trandate = data.TRAN_DATE
      var full = []
      var fullDate = trandate;
      full = fullDate.split(' ');
      var date = full[0].split(/\//);
      var newDate = date[1] + '/' + date[0] + '/' + date[2]
      var k = new Date(newDate);
      var expiryDate = moment(k).format('DD.MM.YYYY');
      let mem = [data.AGENT_ACTYPE, data.AGENT_ACNO, data.BRANCH_ID, expiryDate, data.CHART_NO]
      this.dtTrigger.unsubscribe();
      this.http.get(this.url + '/pigmy-chart/pigmychart/' + mem).subscribe((data) => {
        this.tableArr = data;
        this.pigmyChartTable = []
        this.tableArr.forEach(async (element) => {
          var object = {
            pigmyID: element.id,
            TRAN_ACTYPE: element.AC_TYPE,
            TRAN_ACNO: element.AC_NO,
            TRAN_GLACNO: element.PGMaster.S_GLACNO,
            RECEIPT_NO: element.pigmychart[0].RECEIPT_NO,
            TRAN_BANKACNO: element.BANKACNO,
            TRAN_AMOUNT: element.pigmychart[0].TRAN_AMOUNT,
          }
          await this.pigmyChartTable.push(object)
        })
        this.showTable = true
        this.totalAmt = this.angForm.controls['TRAN_AMOUNT'].value
        this.angForm.patchValue({
          TRAN_AMOUNT: this.totalAmt
        })
        this.dtTrigger.next();
      });
    })
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.angForm.controls['BRANCH'].enable()
    this.angForm.controls['AGENT_ACTYPE'].enable()
    this.angForm.controls['AGENT_ACNO'].enable()
    this.angForm.controls['CHART_NO'].enable()
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['AGENTBANKAC'] = this.agentBankACNO
    data['PigmyChartArr'] = this.pigmyChartTable
    this._pigmy.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    })
    this.pigmyChartTable = []
    this.resetForm();
  }

  addNewData() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    this.userID = result.USER_NAME
    if (result.RoleDefine[0].Role.NAME == "Admin") {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }
    this.angForm.controls['AGENT_ACTYPE'].enable()
    this.angForm.controls['AGENT_ACNO'].enable()
    this.angForm.controls['CHART_NO'].enable()
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  resetForm() {
    this.createForm()
    this.showTable = false
    this.isReceiptShow = false
    this.ngBranchCode = null
    this.ngschemeCode = null
    this.ngAgentCode = null
    this.mem = []
    this.angForm.controls['BRANCH'].enable()
    this.angForm.controls['AGENT_ACTYPE'].enable()
    this.angForm.controls['AGENT_ACNO'].enable()
    this.angForm.controls['CHART_NO'].enable()
    this.getSystemParaDate()
    this.pigmyChartTable = []
    this.tableArr = []
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    this.userID = result.USER_NAME
    if (result.RoleDefine[0].Role.NAME == "Admin") {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }
  }


  ngAfterViewInit(): void {
    this.dtTrigger1.next();
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
    this.dtTrigger1.unsubscribe();
  }
}