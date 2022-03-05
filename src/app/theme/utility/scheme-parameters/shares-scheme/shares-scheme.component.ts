
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { SharesSchemeService } from './shares-scheme.service';
import Swal from 'sweetalert2';
//Dropdown service file
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'
import { NgSelectConfig } from '@ng-select/ng-select';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface ShareScheme {
  S_ACNOTYPE: string;
  S_APPL: string;
  S_NAME: string;
  S_SHNAME: string;
  S_GLACNO: string;
  MEMBER_TYPE: string;
  IS_AUTO_NO: string;
  SHARES_FACE_VALUE: string;
  MAX_SHARES_LIMIT: string;
  DIVIDEND_PERCENTAGE: string;
  INTEREST_RULE: string;
  IS_ADD_BONUS_IN_DIVIDEND: boolean;
  BALANCE_ADD_APPLICABLE: boolean;
  INT_ROUND_OFF: string;
  ROUNDOFF_FACTOR: string;
  SANCT_LIMIT_PERCENTAGE: string;

  RETIREMENT_YEARS: string;
  SH_CERTIFICATE_METHOD: string;

}
@Component({
  selector: 'app-shares-scheme',
  templateUrl: './shares-scheme.component.html',
  styleUrls: ['./shares-scheme.component.scss']
})
export class SharesSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  //api 
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  shareScheme: ShareScheme[];
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
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  //variable to get Id to update
  updateID: number = 0;

  //Dropdown option variable
  acMaster: any
  ngglacno: any = null
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  dropDown;
  selectedItems: any;
  FaceValueDividendTrue = true;
  OtherSettings_True = false;
  filterData = {};
  newbtnShow: boolean = false;

  constructor(
    private http: HttpClient,
    public sharesSchemeService: SharesSchemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) { }

  ngOnInit(): void {
    this.createForm();
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
        this.http
          .post<DataTableResponse>(
            this.url + '/shares-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.shareScheme = resp.data;
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
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="deletebtn btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Type',
          data: 'S_ACNOTYPE'
        },
        {
          title: 'Scheme Code',
          data: 'S_APPL'
        },
        {
          title: 'Description',
          data: 'S_NAME'
        },
        {
          title: 'Short Name',
          data: 'S_SHNAME'
        },
        {
          title: 'G.L. A/c No.',
          data: 'S_GLACNO'
        },
        {
          title: 'Member Type',
          data: 'MEMBER_TYPE'
        },
        {
          title: 'Is Auto Account Number Show ?',
          data: 'IS_AUTO_NO'
        },
        // {
        //   title: 'Shares Face Value',
        //   data: 'SHARES_FACE_VALUE'
        // },
        // {
        //   title: 'Maximum No.of Shares Limit',
        //   data: 'MAX_SHARES_LIMIT'
        // },
        // {
        //   title: 'Dividend Percentage %',
        //   data: 'S_ADIVIDEND_PERCENTAGEPPL'
        // },
        // {
        //   title: 'Dividen Methods',
        //   data: 'INTEREST_RULE'
        // },
        // {
        //   title: 'Simple as per Shares Closing Balance',
        //   data: 'INTEREST_RULE'
        // },
        // {
        //   title: 'Simple Days Basis + Transaction wise.',
        //   data: 'INTEREST_RULE'
        // },
        // {
        //   title: 'Transaction Wise',
        //   data: 'INTEREST_RULE'
        // },
        // {
        //   title: 'Month Basis + Transaction wise',
        //   data: 'INTEREST_RULE'
        // },
        // {
        //   title: 'Is Add Bonus Amount in Dividend Amount?',
        //   data: 'IS_ADD_BONUS_IN_DIVIDEND'
        // },
        // {
        //   title: 'Is Balance Entry Allow ?',
        //   data: 'BALANCE_ADD_APPLICABLE'
        // },
        // {
        //   title: 'Is Dividend Round off Required..?',
        //   data: 'INT_ROUND_OFF'
        // },
        // {
        //   title: 'Interest Round Off Factor in Paise',
        //   data: 'ROUNDOFF_FACTOR'
        // },
        // {
        //   title: 'Percentage for Calc.Sanction Limit',
        //   data: 'SANCT_LIMIT_PERCENTAGE'
        // },
        // {
        //   title: 'Years for Retirement Date',
        //   data: 'RETIREMENT_YEARS'
        // },
        // {
        //   title: 'Shares Certificate On',
        //   data: 'SH_CERTIFICATE_METHOD'
        // },

      ],
      dom: 'Bfrtip',
    };
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['SH'],
      S_APPL: ["", [Validators.required, Validators.pattern, Validators.min(901), Validators.max(999)]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_GLACNO: [''],
      MEMBER_TYPE: ['', [Validators.required, Validators.pattern]],
      IS_AUTO_NO: [''],
      SHARES_FACE_VALUE: ['', [Validators.pattern]],
      MAX_SHARES_LIMIT: ['', [Validators.pattern]],
      DIVIDEND_PERCENTAGE: ['', [Validators.pattern]],
      IS_ADD_BONUS_IN_DIVIDEND: [false],
      INT_ROUND_OFF: [''],
      ROUNDOFF_FACTOR: ['', [Validators.pattern]],
      SANCT_LIMIT_PERCENTAGE: ['', [Validators.pattern]],
      RETIREMENT_YEARS: ['', [Validators.pattern]],
      SH_CERTIFICATE_METHOD: [''],
      BALANCE_ADD_APPLICABLE: [''],
      INTEREST_RULE: [''],
    });
  }
  OpenLink(val) {

    if (val == 101) {
      this.FaceValueDividendTrue = true;
      this.OtherSettings_True = false;
    }
    if (val == 102) {
      this.FaceValueDividendTrue = false;
      this.OtherSettings_True = true;
    }
  }

  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_SHNAME': formVal.S_SHNAME,
      'S_NAME': formVal.S_NAME,
      'S_GLACNO': formVal.S_GLACNO,
      'MEMBER_TYPE': formVal.MEMBER_TYPE,
      'IS_AUTO_NO': formVal.IS_AUTO_NO,
      'SHARES_FACE_VALUE': formVal.SHARES_FACE_VALUE,
      'MAX_SHARES_LIMIT': formVal.MAX_SHARES_LIMIT,
      'DIVIDEND_PERCENTAGE': formVal.DIVIDEND_PERCENTAGE,
      'INTEREST_RULE': formVal.INTEREST_RULE,
      'IS_ADD_BONUS_IN_DIVIDEND': formVal.IS_ADD_BONUS_IN_DIVIDEND,
      'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      'ROUNDOFF_FACTOR': formVal.ROUNDOFF_FACTOR,
      'INT_ROUND_OFF': formVal.INT_ROUND_OFF,
      'SANCT_LIMIT_PERCENTAGE': formVal.SANCT_LIMIT_PERCENTAGE,
      'RETIREMENT_YEARS': formVal.RETIREMENT_YEARS,
      'SH_CERTIFICATE_METHOD': formVal.SH_CERTIFICATE_METHOD,

    }
    console.log(dataToSend);
    this.sharesSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      // to reload after insertion of data
      //this.rerender();
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();
  }
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.sharesSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_SHNAME': data.S_SHNAME,
        'S_NAME': data.S_NAME,
        'S_GLACNO': data.S_GLACNO,
        'MEMBER_TYPE': data.MEMBER_TYPE,
        'IS_AUTO_NO': data.IS_AUTO_NO,
        'SHARES_FACE_VALUE': data.SHARES_FACE_VALUE,
        'MAX_SHARES_LIMIT': data.MAX_SHARES_LIMIT,
        'DIVIDEND_PERCENTAGE': data.DIVIDEND_PERCENTAGE,
        'INTEREST_RULE': data.INTEREST_RULE,
        'IS_ADD_BONUS_IN_DIVIDEND': data.IS_ADD_BONUS_IN_DIVIDEND,
        'BALANCE_ADD_APPLICABLE': data.BALANCE_ADD_APPLICABLE,
        'ROUNDOFF_FACTOR': data.ROUNDOFF_FACTOR,
        'INT_ROUND_OFF': data.INT_ROUND_OFF,
        'SANCT_LIMIT_PERCENTAGE': data.SANCT_LIMIT_PERCENTAGE,
        'RETIREMENT_YEARS': data.RETIREMENT_YEARS,
        'SH_CERTIFICATE_METHOD': data.SH_CERTIFICATE_METHOD,
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.sharesSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      //this.rerender();
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
    this.createForm();
  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete bank master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.sharesSchemeService.deleteData(id).subscribe(data1 => {
          this.shareScheme = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {
          console.log(error)
        }
        // to reload after delete of data
        this.rerender();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }
  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#schemeparametertable tfoot tr').appendTo('#schemeparametertable thead');
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
}
