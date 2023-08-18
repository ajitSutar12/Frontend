import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { TermDepositPatSchemeService } from './term-deposit-pat-scheme.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//Service file of dropdown
import { IntrestCategoryMasterDropdownService } from '../../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { TermemeDepositeSchMasterDropdownService } from '../../../../../shared/dropdownService/term_deposit_scheme-dropdown.service'
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface TermDepositPatScheme {
  EFFECT_DATE: string
  AC_TYPE: string
  INT_CATEGORY: string
  MONTHS: string
  DAYS: string
  INT_RATE: string
}

@Component({
  selector: 'app-term-deposit-pat-scheme',
  templateUrl: './term-deposit-pat-scheme.component.html',
  styleUrls: ['./term-deposit-pat-scheme.component.scss'],
})
export class TermDepositPatSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ViewChild("scheme") myInputField: ElementRef;//input field autofocus
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  termDepositPatScheme: TermDepositPatScheme[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  dtModalOptions: DataTables.Settings = {};
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
  addShowButton: boolean = true
  UpdateShowButton: boolean = false
  multiField = [];
  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};
  //variable for checkinput
  days: any;
  months: any;

  ngscheme: any = null
  ngintcat: any = null
  //for date 
  datemax: any;
  effectdate: any = null
  maxDate: any;
  minDate: Date;


  //scheme dropdown variables
  interestcategory;
  scheme: any;

  timeLeft = 5;
  schemeType: string = 'TD'
  private dataSub: Subscription = null;


  constructor(
    private http: HttpClient,
    private termDepositPatSchemeService: TermDepositPatSchemeService,
    private intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private TermemeDepositeSchMasterDropdownService: TermemeDepositeSchMasterDropdownService,
    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private config: NgSelectConfig,) {
    // this.datemax = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })
  }

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
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        this.page = dataTableParameters.start / dataTableParameters.length;
        this.http
          .post<DataTableResponse>(
            this.url + '/pat-scheme-interest-rates',
            dataTableParameters
          ).subscribe(resp => {
            this.termDepositPatScheme = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: 'Action'
        },
        {
          title: 'Effected Date',
          data: 'EFFECT_DATE'
        },
        {
          title: 'Scheme Type',
          data: 'AC_TYPE'
        }, {
          title: 'Interest Category',
          data: 'INT_CATEGORY'
        },
      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
      this.scheme = data
    })
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.interestcategory = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      EFFECT_DATE: [''],
      AC_TYPE: ['', [Validators.required]],
      INT_CATEGORY: ['', [Validators.required]],
      MONTHS: ['', [Validators.pattern]],
      DAYS: ['', [Validators.pattern]],
      INT_RATE: ['', [Validators.pattern]],
    });
  }
  //disabledate on keyup
  disabledate(data: any) {
    if (data != "") {
      if (data > this.datemax) {
        Swal.fire("Invalid Input", "Please Insert Valid Date ", "warning");
        (document.getElementById("EFFECT_DATE") as HTMLInputElement).value = ""
      }
    }
  }
  // Method to insert data into database through NestJS
  submit() {
    let effectdate
    if (this.multiField.length != 0) {
      this.formSubmitted = true;
      const formVal = this.angForm.value;
      const dataToSend = {
        'EFFECT_DATE': (formVal.EFFECT_DATE == '' || formVal.EFFECT_DATE == 'Invalid date') ? effectdate = '' : effectdate = moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
        //'EFFECT_DATE': formVal.EFFECT_DATE,
        'AC_TYPE': formVal.AC_TYPE,
        'INT_CATEGORY': formVal.INT_CATEGORY,
        'FieldData': this.multiField,
      }
      this.termDepositPatSchemeService.postData(dataToSend).subscribe(data1 => {
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
        this.formSubmitted = false;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
      }, (error) => {
      })
      //To clear form
      this.resetForm();
      this.multiField = []
    }
    else {
      Swal.fire(
        'Info',
        'Please Input Slab Details ',
        'info'
      )
    }

  }
  tableButton: boolean = true
  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {
    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.addShowButton = true
    this.termDepositPatSchemeService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.multiField = data.rate
      this.updateID = data.id;
      //after clicking edit to get value in dropdown
      this.angForm.controls['AC_TYPE'].disable()
      this.ngscheme = Number(data.AC_TYPE)
      this.angForm.controls['INT_CATEGORY'].disable()
      this.ngintcat = Number(data.INT_CATEGORY)
      this.angForm.controls['EFFECT_DATE'].disable()
      this.angForm.patchValue({
        EFFECT_DATE: data.EFFECT_DATE
      })
    })
  }

  //Method for update data 
  updateData() {
    let effectdate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['FieldData'] = this.multiField
    if (this.updatecheckdata.EFFECT_DATE != this.effectdate) {
      (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (effectdate = '', data['EFFECT_DATE'] = effectdate) : (effectdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment(effectdate).format('DD/MM/YYYY'))
    }
    else {
      data['EFFECT_DATE'] = this.effectdate
    }
    data['AC_TYPE'] = this.ngscheme
    data['INT_CATEGORY'] = this.ngintcat
    this.termDepositPatSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiField = []
      this.resetForm();

    })
  }

  addNewData() {
    this.angForm.controls['AC_TYPE'].enable()
    this.angForm.controls['INT_CATEGORY'].enable()
    this.angForm.controls['EFFECT_DATE'].enable()
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.addShowButton = true;
    this.multiField = [];
    this.resetForm();
  }
  //check  if percentage  is below 50
  checkmargin(ele: any) {
    //check  if given value  is below 50
    if (ele.target.value <= 50) {
    }
    else {
      Swal.fire("Invalid Input", "Please Insert Values Below 50", "error");
      ele.target.value = 0

    }
  }


  //checking input for days and months
  checkinput() {

    this.days = (document.getElementById("days") as HTMLInputElement).value;
    this.months = (document.getElementById("months") as HTMLInputElement).value;


    if (this.days == "" && this.months == "") {
      Swal.fire(
        'Invalid Input',
        'Please Enter Days Or Months ',
        'warning'
      )
    }
    else if (this.days == 0 && this.months == 0) {
      Swal.fire(
        'Invalid Input',
        'Days or Months Value Must Not Be Equal To Zero ',
        'warning'
      )
    }
    // else {
    //   Swal.fire(
    //     'Invalid Input',
    //     'Days or Months  value must not be zero',
    //     'warning'
    //   )
    // }

  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Want To Delete Term Deposit Pat Scheme Data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.termDepositPatSchemeService.deleteData(id).subscribe(data1 => {
          this.termDepositPatScheme = data1;
          Swal.fire(
            'Deleted!',
            'Your Data Has Been Deleted.',
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
          'Cancelled',
          'Your Data Is Safe.',
          'error'
        )
      }
    })
  }

  ngAfterViewInit(): void {
    // this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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

  // Reset Function
  resetForm() {
    this.angForm.controls['AC_TYPE'].enable()
    this.angForm.controls['INT_CATEGORY'].enable()
    this.angForm.controls['EFFECT_DATE'].enable()
    this.createForm();
    this.ngscheme = null
    this.ngintcat = null
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
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }

  addField() {
    let intrate = (document.getElementById("INT_RATE") as HTMLInputElement).value;
    if (intrate == "") {
      Swal.fire(
        'Info',
        'Please Input Interest Rate.',
        'info'
      )
    }
    else if (intrate != "") {
      const formVal = this.angForm.value;
      var object = {
        MONTHS: formVal.MONTHS,
        DAYS: formVal.DAYS,
        INT_RATE: formVal.INT_RATE,

      }
      this.multiField.push(object);
      this.resetField();
    }
  }

  resetField() {
    this.angForm.controls['MONTHS'].reset();
    this.angForm.controls['DAYS'].reset();
    this.angForm.controls['INT_RATE'].reset();
  }

  intIndex: number
  intID: number
  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    const formVal = this.angForm.value;
    var object = {
      MONTHS: formVal.MONTHS,
      DAYS: formVal.DAYS,
      INT_RATE: formVal.INT_RATE,
      id: this.intID
    }
    this.multiField[index] = object;
    this.resetField()
  }

  editField(id) {
    this.intIndex = id
    this.intID = this.multiField[id].id;
    this.addShowButton = false;
    this.UpdateShowButton = true;
    this.angForm.patchValue({
      MONTHS: this.multiField[id].MONTHS,
      DAYS: this.multiField[id].DAYS,
      INT_RATE: this.multiField[id].INT_RATE,

    })
  }

  delField(id) {
    this.multiField.splice(id, 1)
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



}
