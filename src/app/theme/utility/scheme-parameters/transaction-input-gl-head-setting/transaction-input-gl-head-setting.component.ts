import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment'
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';
import { TranscationInputSettingService } from './transaction-input-gl-head-setting.service'
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
interface TransactionInput {
  SCHEME_TYPE: string;
  FIELD_AMOUNT: string
  FIELD_GL: string
  FIELD_INTEREST_DATE: string
  FIELD_TRAN_TABLE: string
  GL_CODE: number
  GL_CODE_FROM_SCHEME_FIELD: string
  DESCRIPTION: string
  SHORT_NAME: string
  CHECK_REQUIRE: boolean
  DRCR_APPLICABLE: string
  INTEREST_DATE_INPUT: boolean
  HEAD_TYPE: string
  IS_NOTING_REQUIRED: boolean
  IS_GLBAL_MAINTAIN: boolean
}

@Component({
  selector: 'app-transaction-input-gl-head-setting',
  templateUrl: './transaction-input-gl-head-setting.component.html',
  styleUrls: ['./transaction-input-gl-head-setting.component.scss']
})
export class TransactionInputGlHeadSettingComponent implements OnInit, AfterViewInit, OnDestroy {
  //scheme type variable
  ngSchemeType: any = null
  schemeType = [
    { id: 'GS' },
    { id: 'IV' },
    { id: 'LN' },
    { id: 'TD' },
    { id: 'PG' },
    { id: 'SB' },
    { id: 'SH' },
  ]
  //head type variables
  ngHeadType: any = null
  headType = [
    { label: 'Interest', FieldAmount: 'INTEREST_AMOUNT', FieldGL: 'INTEREST_GLACNO', HeadType: 'INT', FIELD_TRAN_TABLE: 'INTEREST_AMOUNT' },
    { label: 'Penal Interest', FieldAmount: 'PENAL_INT_AMOUNT', FieldGL: 'PENAL_INT_GLACNO', HeadType: 'PNI', FIELD_TRAN_TABLE: 'PENAL_INTEREST' },
    { label: 'Receivable Penal', FieldAmount: 'REC_PENAL_INT_AMOUNT', FieldGL: 'REC_PENAL_INT_GLACNO', HeadType: 'RPN', FIELD_TRAN_TABLE: 'REC_PENAL_INT_AMOUNT' },
    { label: 'Payable Interest', FieldAmount: 'RECPAY_INT_AMOUNT', FieldGL: 'RECPAY_INT_GLACNO', HeadType: 'PYI', FIELD_TRAN_TABLE: 'RECPAY_INT_AMOUNT' },
    { label: 'Receivable Interest', FieldAmount: 'RECPAY_INT_AMOUNT', FieldGL: 'RECPAY_INT_GLACNO', HeadType: 'REC', FIELD_TRAN_TABLE: 'RECPAY_INT_AMOUNT' },
    { label: 'Other1_amount', FieldAmount: 'OTHER1_AMOUNT', FieldGL: 'OTHER1_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER1_AMOUNT' },

    { label: 'Other2_amount', FieldAmount: 'OTHER2_AMOUNT', FieldGL: 'OTHER2_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER2_AMOUNT' },
    { label: 'Other3_amount', FieldAmount: 'OTHER3_AMOUNT', FieldGL: 'OTHER3_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER3_AMOUNT' },
    { label: 'Other4_amount', FieldAmount: 'OTHER4_AMOUNT', FieldGL: 'OTHER4_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER4_AMOUNT' },
    { label: 'Other5_amount', FieldAmount: 'OTHER5_AMOUNT', FieldGL: 'OTHER5_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER5_AMOUNT' },
    { label: 'Other6_amount', FieldAmount: 'OTHER6_AMOUNT', FieldGL: 'OTHER6_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER6_AMOUNT' },
    { label: 'Other7_amount', FieldAmount: 'OTHER7_AMOUNT', FieldGL: 'OTHER7_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER7_AMOUNT' },
    { label: 'Other8_amount', FieldAmount: 'OTHER8_AMOUNT', FieldGL: 'OTHER8_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER8_AMOUNT' },
    { label: 'Other9_amount', FieldAmount: 'OTHER9_AMOUNT', FieldGL: 'OTHER9_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER9_AMOUNT' },
    { label: 'Other11_amount', FieldAmount: 'OTHER11_AMOUNT', FieldGL: 'OTHER11_ACNO', HeadType: 'OTH', FIELD_TRAN_TABLE: 'OTHER11_AMOUNT' },
    { label: 'Overdue_Interest', FieldAmount: 'OTHER10_AMOUNT', FieldGL: 'OTHER10_ACNO', HeadType: 'OVI', FIELD_TRAN_TABLE: 'OTHER10_AMOUNT' }
  ]
  //Gl account master variable
  ngGlCode: any = null
  glcode
  showGL: boolean = true

  //debit/credit applicable variable
  ngDebitCredit: any = null
  debitCredit = [
    { id: 'C', label: 'Credit Entry' },
    { id: 'D', label: 'Debit Entry' },
    { id: 'B', label: 'Both Entries' }
  ]

  //interest selected in headtype
  isIntrest: boolean = true

  isSchemeWise: boolean = true
  schemeWise: boolean = true

  // Store data from backend
  transactionInput: TransactionInput[];


  formSubmitted = false;
  //api 
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
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
  // Variables for hide/show add and update and new button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  constructor(private http: HttpClient, private fb: FormBuilder, private acmaster: ACMasterDropdownService, private _transInput: TranscationInputSettingService,private translate:TranslateService) {this.translate.setDefaultLang(environment.setLang); }

  ngOnInit(): void {
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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/transcation-input-gl-head-setting',
            dataTableParameters
          ).subscribe(resp => {
            this.transactionInput = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: this.translate.instant('Utility.Action.Action'),
        },
        {
          title: this.translate.instant('Utility.Transcation_Input_GL_Head_Setting.Scheme_Type'),
          data: 'SCHEME_TYPE'
        }, {
          title:  this.translate.instant('Utility.Transcation_Input_GL_Head_Setting.Head_Type'),
          data: 'FIELD_AMOUNT'
        },
        {
          title: this.translate.instant('Utility.Transcation_Input_GL_Head_Setting.Description'),
          data: 'DESCRIPTION'
        }, {
          title:  this.translate.instant('Utility.Transcation_Input_GL_Head_Setting.Short_Name'),
          data: 'SHORT_NAME'
        },],
      dom: "Blrtip",
    };

    this.acmaster.getACMasterList().pipe(first()).subscribe(data => {
      this.glcode = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      SCHEME_TYPE: ['', [Validators.required]],
      FIELD_AMOUNT: ['', [Validators.required]],
      FIELD_GL: [''],
      FIELD_INTEREST_DATE: [''],
      FIELD_TRAN_TABLE: [''],
      GL_CODE: [],
      GL_CODE_FROM_SCHEME_FIELD: [''],
      DESCRIPTION: ['', [Validators.required]],
      SHORT_NAME: ['', [Validators.required]],
      CHECK_REQUIRE: [''],
      DRCR_APPLICABLE: [''],
      INTEREST_DATE_INPUT: [''],
      HEAD_TYPE: [''],
      IS_NOTING_REQUIRED: [''],
      IS_GLBAL_MAINTAIN: [''],
    })
  }

  getHeadType(event) {
    if (event.label == "Interest") {
      this.angForm.controls['INTEREST_DATE_INPUT'].enable()
      this.angForm.patchValue({
        FIELD_INTEREST_DATE: "INTEREST_DATE"
      })
      this.isSchemeWise = true
      this.schemeWise = false
      this.showGL = false
    }
    else if (event.label == "Other2_amount" || event.label == "Other3_amount" || event.label == "Other4_amount" || event.label == "Other5_amount" || event.label == "Other6_amount" || event.label == "Other7_amount" || event.label == "Other8_amount" || event.label == "Other9_amount" || event.label == "Other11_amount" || event.label == "Overdue_Interest") {
      this.angForm.patchValue({
        FIELD_INTEREST_DATE: ""
      })
      this.isSchemeWise = false
      this.showGL = true
      this.schemeWise = true
      this.angForm.controls['INTEREST_DATE_INPUT'].disable()
      this.angForm.patchValue({
        INTEREST_DATE_INPUT: ""
      })
    }
    else {
      this.angForm.patchValue({
        FIELD_INTEREST_DATE: ""
      })
      this.isSchemeWise = true
      this.schemeWise = false
      this.showGL = false
      this.angForm.controls['INTEREST_DATE_INPUT'].disable()
      this.angForm.patchValue({
        INTEREST_DATE_INPUT: ""
      })
    }
  }

  showGLCode(value) {
    if (value == 1) {
      this.showGL = false
      if (this.ngHeadType.label == 'Interest') {
        this.angForm.patchValue({
          GL_CODE_FROM_SCHEME_FIELD: 'S_INT_ACNO',
          GL_CODE: ""
        })
      }
      else if (this.ngHeadType.label == 'Penal Interest') {
        this.angForm.patchValue({
          GL_CODE_FROM_SCHEME_FIELD: "S_PENAL_ACNO",
          GL_CODE: ""
        })
      }
      else if (this.ngHeadType.label == 'Receivable Penal') {
        this.angForm.patchValue({
          GL_CODE_FROM_SCHEME_FIELD: "S_RECBL_PENAL_ACNO",
          GL_CODE: ""
        })
      }
      else if (this.ngHeadType.label == 'Payable Interest' || this.ngHeadType.label == 'Receivable Interest') {
        this.angForm.patchValue({
          GL_CODE_FROM_SCHEME_FIELD: "S_RECBL_PYBL_INT_ACNO",
          GL_CODE: ""
        })
      }
      else if (this.ngHeadType.label == 'Overdue_Interest') {
        this.angForm.patchValue({
          GL_CODE_FROM_SCHEME_FIELD: "S_RECBL_ODUE_INT_ACNO",
          GL_CODE: ""
        })
      }
    }
    else {
      this.showGL = true
    }
  }

  patchGlNo(event) {
    this.angForm.patchValue({
      // GL_CODE_FROM_SCHEME_FIELD: "",
      // GL_CODE: event.name
    })
  }

  submit() {
    this.formSubmitted = true;
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      const dataToSend = {
        SCHEME_TYPE: formVal.SCHEME_TYPE.id,
        FIELD_AMOUNT: this.ngHeadType.FieldAmount, //formVal.FIELD_AMOUNT,
        FIELD_GL: this.ngHeadType.FieldGL,                //formVal.FIELD_GL,
        FIELD_INTEREST_DATE: formVal.FIELD_INTEREST_DATE,
        FIELD_TRAN_TABLE: this.ngHeadType.FIELD_TRAN_TABLE,               //formVal.FIELD_TRAN_TABLE,
        GL_CODE: formVal.GL_CODE,
        GL_CODE_FROM_SCHEME_FIELD: formVal.GL_CODE_FROM_SCHEME_FIELD,
        DESCRIPTION: formVal.DESCRIPTION,
        SHORT_NAME: formVal.SHORT_NAME,
        CHECK_REQUIRE: (formVal.CHECK_REQUIRE == true ? '1' : '0'),
        DRCR_APPLICABLE: formVal.DRCR_APPLICABLE.id,
        INTEREST_DATE_INPUT: (formVal.INTEREST_DATE_INPUT == true ? '1' : '0'),
        HEAD_TYPE: this.ngHeadType.HeadType,                          //formVal.HEAD_TYPE,
        IS_NOTING_REQUIRED: (formVal.IS_NOTING_REQUIRED == true ? '1' : '0'),
        IS_GLBAL_MAINTAIN: (formVal.IS_GLBAL_MAINTAIN == true ? '1' : '0')
      }
      this._transInput.postData(dataToSend).subscribe(data => {
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
        this.formSubmitted = false;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
      }, (error) => {
      })
      //To clear form
      this.resetForm();
    } else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Fill')}`, 'warning');
    }
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.angForm.controls['SCHEME_TYPE'].disable()
    this.angForm.controls['FIELD_AMOUNT'].disable()
    this._transInput.getFormData(id).subscribe(data => {

      // data.GL_CODE == null ? (this.schemeWise = true, this.showGLCode(1)) : (this.schemeWise = false, this.showGL = true, this.ngGlCode = data.GL_CODE);
      // data.GL_CODE == null ? (this.schemeWise = true, this.showGL = false, this.ngGlCode = null) : (this.schemeWise = false, this.showGL = true, this.ngGlCode = data.GL_CODE);
      this.updateID = data.id
      if (data.DRCR_APPLICABLE == "C") {
        this.ngDebitCredit = "Credit Entry"
      }
      else if (data.DRCR_APPLICABLE == "D") {
        this.ngDebitCredit = "Debit Entry"
      }
      else if (data.DRCR_APPLICABLE == "B") {
        this.ngDebitCredit = "Both Entries"
      } else {
        this.ngDebitCredit = null
      }

      data.FIELD_AMOUNT == "INTEREST_AMOUNT" ? this.angForm.controls['INTEREST_DATE_INPUT'].enable() : this.angForm.controls['INTEREST_DATE_INPUT'].disable()
      // this.ngHeadType = data.FIELD_AMOUNT

      this.angForm.patchValue({
        SCHEME_TYPE: data.SCHEME_TYPE,
        FIELD_AMOUNT: data.FIELD_AMOUNT,
        FIELD_GL: data.FIELD_GL,
        FIELD_INTEREST_DATE: data.FIELD_INTEREST_DATE,
        FIELD_TRAN_TABLE: data.FIELD_TRAN_TABLE,
        // GL_CODE: data.GL_CODE,
        GL_CODE_FROM_SCHEME_FIELD: data.GL_CODE_FROM_SCHEME_FIELD,
        DESCRIPTION: data.DESCRIPTION,
        SHORT_NAME: data.SHORT_NAME,
        CHECK_REQUIRE: (data.CHECK_REQUIRE == '1' ? true : false),
        INTEREST_DATE_INPUT: (data.INTEREST_DATE_INPUT == '1' ? true : false),
        HEAD_TYPE: data.HEAD_TYPE,
        IS_NOTING_REQUIRED: (data.IS_NOTING_REQUIRED == '1' ? true : false),
        IS_GLBAL_MAINTAIN: (data.IS_GLBAL_MAINTAIN == '1' ? true : false)
      })


      if (data.GL_CODE == null) {
        this.schemeWise = false;
        this.showGLCode(1);
      } else {
        this.schemeWise = true;
        this.showGL = true;
        this.ngGlCode = data.GL_CODE
      }
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    // data['SCHEME_TYPE'] = this.ngSchemeType;
    data['FIELD_AMOUNT'] = this.ngHeadType.FieldAmount
    data['FIELD_GL'] = this.ngHeadType.FieldGL
    data['FIELD_TRAN_TABLE'] = this.ngHeadType.FIELD_TRAN_TABLE
    data['DRCR_APPLICABLE'] = this.ngDebitCredit.id,
      data['CHECK_REQUIRE'] = (data.CHECK_REQUIRE == true ? '1' : '0')
    data['INTEREST_DATE_INPUT'] = (data.INTEREST_DATE_INPUT == true ? '1' : '0')
    data['IS_NOTING_REQUIRED'] = (data.IS_NOTING_REQUIRED == true ? '1' : '0')
    data['IS_GLBAL_MAINTAIN'] = (data.IS_GLBAL_MAINTAIN == true ? '1' : '0')
    this._transInput.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  resetForm() {
    this.createForm()
    this.showGL = true
    this.schemeWise = true
    this.ngSchemeType = null
    this.ngHeadType = null
    this.ngGlCode = null
    this.ngDebitCredit = null

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

  checkduplicate() {
    let obj = {
      scheme: this.ngSchemeType.id,
      fieldamount: this.ngHeadType.FieldAmount
    }
    if (this.ngSchemeType.id != null && this.ngHeadType.FieldAmount != null) {
      this._transInput.duplicatecheck(obj).subscribe(data => {
        if (data.length != 0) {
          this.ngHeadType = null
          Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.record_already')}`, 'error')
        }
      })
    }

  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
