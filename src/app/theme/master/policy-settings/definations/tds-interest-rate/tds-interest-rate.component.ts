import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { TdsInterestRateService } from './tds-interest-rate.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment'
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface TdsInterest {
  FIN_YEAR: number;
  INTEREST_AMOUNT: number;
  TDS_RATE: number;
  SURCHARGE_RATE: number;
  EFFECT_DATE: Date;
}
@Component({
  selector: 'app-tds-interest-rate',
  templateUrl: './tds-interest-rate.component.html',
  styleUrls: ['./tds-interest-rate.component.scss']
})
export class TdsInterestRateComponent implements OnInit, AfterViewInit, OnDestroy {
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
  tdsInterests: TdsInterest[];
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

  ngfinyear: any = null
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
  newbtnShow: boolean = false;
  updateID: number = 0;
  schemeCode: any;
  //for search functionality
  filterData = {};
  //for date 
  datemax: any;
  effectdate: any = null
  maxDate: any;
  minDate: Date;

  constructor(
    private translate:TranslateService,
    private http: HttpClient,
    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private tdsInterestRate: TdsInterestRateService) {
    // this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })
  }

  ngOnInit(): void {
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
            this.url + '/tds-interest-rate',
            dataTableParameters
          ).subscribe(resp => {
            this.tdsInterests = resp.data;

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
          title: this.translate.instant('master.Action.Action')
        }, {
          title: this.translate.instant('master.TDS_Interest_Rate.Financial_Year'),
          data: 'FIN_YEAR'
        }, {
          title: this.translate.instant('master.TDS_Interest_Rate.Effective_Date'),
          data: 'EFFECT_DATE'
        }, {
          title: this.translate.instant('master.TDS_Interest_Rate.Interest_Amount'),
          data: 'INTEREST_AMOUNT'
        }, {
          title: this.translate.instant('master.TDS_Interest_Rate.TDS_Rate'),
          data: 'TDS_RATE'
        }, {
          title: this.translate.instant('master.TDS_Interest_Rate.Surcharge_Rate'),
          data: 'SURCHARGE_RATE'
        },
      ],
      dom: 'Blrtip',
    };
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      FIN_YEAR: ['', [Validators.required, Validators.pattern]],
      EFFECT_DATE: ['', [Validators.required]],
      INTEREST_AMOUNT: ['', [Validators.required, Validators.pattern]],
      TDS_RATE: ['', [Validators.required, Validators.pattern]],
      SURCHARGE_RATE: ['', [Validators.pattern]]
    });
  }
  //disabledate on keyup
  disabledate(data: any) {

    if (data != "") {
      if (data > this.datemax) {
        Swal.fire( `${this.translate.instant('Swal_Msg.Invalid_Input')}`,  `${this.translate.instant('Swal_Msg.Date')}`, "warning");
        (document.getElementById("EFFECT_DATE") as HTMLInputElement).value = ""

      }
    }
  }
  // Method to insert data into database through NestJS
  submit() {
    let effectdate
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'FIN_YEAR': formVal.FIN_YEAR,
      'EFFECT_DATE': (formVal.EFFECT_DATE == '' || formVal.EFFECT_DATE == 'Invalid date') ? effectdate = '' : effectdate = moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
      // 'EFFECT_DATE': formVal.EFFECT_DATE,
      'INTEREST_AMOUNT': formVal.INTEREST_AMOUNT,
      'TDS_RATE': formVal.TDS_RATE,
      'SURCHARGE_RATE': formVal.SURCHARGE_RATE,
    }
    this.tdsInterestRate.postData(dataToSend).subscribe(data1 => {
      Swal.fire( `${this.translate.instant('Swal_Msg.Success')}`,  `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
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

  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {
    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.tdsInterestRate.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.updateID = data.id;
      this.angForm.setValue({
        'FIN_YEAR': data.FIN_YEAR,
        'EFFECT_DATE': (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? effectdate = '' : effectdate = data.EFFECT_DATE,
        // 'EFFECT_DATE': data.EFFECT_DATE,
        'INTEREST_AMOUNT': data.INTEREST_AMOUNT,
        'TDS_RATE': data.TDS_RATE,
        'SURCHARGE_RATE': data.SURCHARGE_RATE,

      })
    })
  }

  //method for adding hyphen in date
  addhyphen(data: any) {
    let date = new Date().getFullYear() + 1;
    let result = Number((document.getElementById("FIN_YEAR") as HTMLInputElement).value);
    if (result > date) {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`,  `${this.translate.instant('Swal_Msg.W_Msg3_Y')}`, "warning");
      (document.getElementById("FIN_YEAR") as HTMLInputElement).value = "";
    }
    else {
      if (data.length == 4) {
        result += 1;
        this.ngfinyear = data + "-" + result;
      }

    }
  }
  //Method for update data 
  updateData(id) {
    let effectdate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    if (this.updatecheckdata.EFFECT_DATE != data.EFFECT_DATE) {
      (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (effectdate = '', data['EFFECT_DATE'] = effectdate) : (effectdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment(effectdate).format('DD/MM/YYYY'))
    }
    this.tdsInterestRate.updateData(data).subscribe(() => {
      Swal.fire( `${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }

  // Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Sure')}`,
      text: `${this.translate.instant('Swal_Msg.Group_Master')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tdsInterestRate.deleteData(id).subscribe(data1 => {
          this.tdsInterests = data1;
          Swal.fire(
            `${this.translate.instant('Swal_Msg.Delete')}`,
            `${this.translate.instant('Swal_Msg.D_Msg')}`,
            'success'
          )
        }), (error) => {

        }
        // to reload after delete of data
        this.rerender();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Cancel')}`,
          `${this.translate.instant('Swal_Msg.C_Msg')}`,
          'error'
        )
      }
    })
  }


  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#definationtable tfoot tr').appendTo('#definationtable thead');
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

  // Reset Function
  resetForm() {
    this.createForm();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  //check  if percentage  is below 50
  checkmargin(ele: any) {
    //check  if given value  is below 50
    if (ele.target.value <= 50) {
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Invalid_Input')}`, `${this.translate.instant('Swal_Msg.Input_Limit_50')}`, "error");
      ele.target.value = 0

    }
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
} 
