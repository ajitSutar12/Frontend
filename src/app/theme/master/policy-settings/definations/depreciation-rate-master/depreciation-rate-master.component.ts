import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
// import { PrematurePigmyService } from './premature-pigmy-less-ir.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { DepriciationCatDropdownMasterService } from '../../../../../shared/dropdownService/depriciation-category-master-dropdown.service';
import { IOption } from 'ng-select';
import { DereciationService } from './depreciation-rate-master.service';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DepriciationRate {
  DEPR_RATE: number;
  CATEGORY: string;
  EFFECT_DATE: Date;
}

@Component({
  selector: 'app-depreciation-rate-master',
  templateUrl: './depreciation-rate-master.component.html',
  styleUrls: ['./depreciation-rate-master.component.scss'],
})
export class DepreciationRateMasterComponent implements OnInit {
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
  depriciationRate: DepriciationRate[];
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

  ngcategory: any = null
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  updateID: number = 0;
  schemeCode: any;
  //for search functionality
  filterData = {};
  category: any[];
  //for date 
  datemax: any;
  effectdate: any = null
  maxDate: any;
  minDate: Date;



  constructor(
    private translate:TranslateService,
    private http: HttpClient,
    private fb: FormBuilder,
    // for dropdown
    public categoryMaster: DepriciationCatDropdownMasterService,
    private dereciationService: DereciationService,
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
            this.url + '/depriciation-rate-master',
            dataTableParameters
          ).subscribe(resp => {
            this.depriciationRate = resp.data;

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
        },
        {
          title: this.translate.instant('master.Depreciation_Rate_Master.Last_Depreciation_Date'),
          data: 'EFFECT_DATE'
        },
        {
          title: this.translate.instant('master.Depreciation_Rate_Master.Categary_Code'),
          data: 'CATEGORY'
        },
        {
          title: this.translate.instant('master.Depreciation_Rate_Master.Depreciation_Rate'),
          data: 'DEPR_RATE'
        }
      ],
      dom: 'Blrtip',
    };
    this.createForm();

    this.categoryMaster.getDepriciationMasterList().pipe(first()).subscribe(data => {
      this.category = data;
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      EFFECT_DATE: ['', [Validators.required]],
      CATEGORY: ['', [Validators.required]],
      DEPR_RATE: [''],
    });
  }


  //disabledate on keyup
  disabledate(data: any) {

    if (data != "") {
      if (data > this.datemax) {
        Swal.fire("Invalid Input", "Please insert valid date ", "warning");
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
      // 'EFFECT_DATE': formVal.EFFECT_DATE,
      'CATEGORY': formVal.CATEGORY,
      'DEPR_RATE': formVal.DEPR_RATE,
    }
    this.dereciationService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
    })
    //To clear form
    this.resetForm();
  }

  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {
    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.dereciationService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.updateID = data.id;
      this.ngcategory = Number(data.CATEGORY)
      this.angForm.patchValue({
        'EFFECT_DATE': (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? effectdate = '' : effectdate = data.EFFECT_DATE,
        // 'EFFECT_DATE': data.EFFECT_DATE,
        // 'CATEGORY': data.CATEGORY,
        'DEPR_RATE': data.DEPR_RATE,
      })
    })
  }

  //check  if percentage  is below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele.target.value <= 100) {
    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
      ele.target.value = 0

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
    this.dereciationService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
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

  // Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Company Group Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dereciationService.deleteData(id).subscribe(data1 => {
          this.depriciationRate = data1;
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
    // this.myInputField.nativeElement.focus();
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
    this.ngcategory = null
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
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