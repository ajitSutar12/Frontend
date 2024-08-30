import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { SavingandPigmyInterestRatesService } from './interest-rate-for-sapd.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//Service file of dropdown
import { IntrestCategoryMasterDropdownService } from '../../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface SavingandPigmyInterestRate {
  ACNOTYPE: string
  INT_CATEGORY: string
  EFFECT_DATE: Date
  INT_RATE: number
}

@Component({
  selector: 'app-interest-rate-for-sapd',
  templateUrl: './interest-rate-for-sapd.component.html',
  styleUrls: ['./interest-rate-for-sapd.component.scss'],
})
export class InterestRateForSAPDComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  savingandPigmyInterestRate: SavingandPigmyInterestRate[];
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


  //scheme dropdown variables
  //Scheme type variable
  schemeType: string = 'SB , PG'
  interestcategory: any[];
  //   simpleOption: Array<IOption> = this.schemeTypeDropdownService.getCharacters();
  // selectedOption = '3';
  // isDisabled = true;
  // characters: Array<IOption>;
  // selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  //for date 
  datemax: any;
  effectdate: any = null
  maxDate: any;
  minDate: Date;



  // dropdown
  allScheme: any[];
  ngscheme: any = null
  ngintcat: any = null
  constructor(
    private http: HttpClient,
    private savingandPigmyInterestRatesService: SavingandPigmyInterestRatesService,
    private schemeTypeDropdownService: SchemeTypeDropdownService,
    private intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private config: NgSelectConfig,) {
    // this.datemax =new Date() ;
    // this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })

  }
  tdname
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
            this.url + '/saving-and-pigmy-interest-rates',
            dataTableParameters
          ).subscribe(resp => {
            this.savingandPigmyInterestRate = resp.data;
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
          data: 'ACNOTYPE'
        }, {
          title: 'Interest Category',
          data: 'INT_CATEGORY'
        },
        {
          title: 'Interest Rate',
          data: 'INT_RATE'
        }
      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'PG' || scheme.name == 'SB');
      });
      this.allScheme = filtered;
      filtered.forEach((item: any) => {
        this.tdname = item.name;
      })
    })
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.interestcategory = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      ACNOTYPE: ['', [Validators.required]],
      INT_CATEGORY: ['', [Validators.required]],
      EFFECT_DATE: ['', [Validators.required]],
      INT_RATE: ['', [Validators.required, Validators.pattern]],
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
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'EFFECT_DATE': (formVal.EFFECT_DATE == '' || formVal.EFFECT_DATE == 'Invalid date') ? effectdate = '' : effectdate = moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
      //'EFFECT_DATE': formVal.EFFECT_DATE,
      'ACNOTYPE': formVal.ACNOTYPE,
      'INT_CATEGORY': formVal.INT_CATEGORY,
      'INT_RATE': formVal.INT_RATE,
      'TYPE': this.tdname
    }
    this.savingandPigmyInterestRatesService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      //this.rerender();
    }, (error) => {
    })
    //To clear form
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

  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {
    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.savingandPigmyInterestRatesService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.updateID = data.id;
      this.angForm.setValue({
        'EFFECT_DATE': (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? effectdate = '' : effectdate = data.EFFECT_DATE,
        //'EFFECT_DATE': data.EFFECT_DATE,
        'ACNOTYPE': data.ACNOTYPE,
        'INT_CATEGORY': data.INT_CATEGORY,
        'INT_RATE': data.INT_RATE
      })
    })
  }

  //Method for update data 
  updateData() {
    let effectdate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    if (this.updatecheckdata.EFFECT_DATE != data.EFFECT_DATE) {
      (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (effectdate = '', data['EFFECT_DATE'] = effectdate) : (effectdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment(effectdate).format('DD/MM/YYYY'))
    }
    this.savingandPigmyInterestRatesService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
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

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Interest Rate for saving and pigmy Deposit data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.savingandPigmyInterestRatesService.deleteData(id).subscribe(data1 => {
          this.savingandPigmyInterestRate = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
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
          'Your data is safe.',
          'error'
        )
      }
    })
  }

  ngAfterViewInit(): void {
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
    this.createForm();
    this.ngintcat = null
    this.ngscheme = null
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
