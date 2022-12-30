import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SizeSlabWiseService } from './size-slab-wise-ar.service';
// for dropdown
//import { StatementTypeService } from '../../../../shared/elements/statement-type.service';
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service';
import { Int8Service } from '../../../../../shared/elements/int8.service';
import { IntrestCategoryMasterDropdownService } from '../../../../../shared/dropdownService/interest-category-master-dropdown.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { id } from '@swimlane/ngx-datatable';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';


// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface SizeSlabWise {
  SERIAL_NO: number,
  EFFECT_DATE: string,
  INT_RATE: string
  ACNOTYPE: string,
  INT_CATEGORY: string,
}

@Component({
  selector: 'app-size-slab-wise-ar',
  templateUrl: './size-slab-wise-ar.component.html',
  styleUrls: ['./size-slab-wise-ar.component.scss'],
})


export class SizeSlabWiseARComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportOptions: any = {}


  //title select variables
  ///intrestCategoryMaster: Array<IOption> = this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList();

  //title select variables
  //  schemetype: Array<IOption> = this.SchemeTypes.getCharacters(); selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  sizeSlabWise: SizeSlabWise[];
  private dataSub: Subscription = null;

  // for dropdown ngmodule
  ngintcat: any = null
  ngscheme: any = null
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
  page: number = 1;
  //filter variable
  filterData = {};
  counter = 1;
  obj: any;
  rowData = [];
  showDialog = false;
  //for date control
  effectdate: any = null
  maxDate: Date;
  minDate: Date;
  schemeType: string = 'TD'
  scheme: any
  @Input() visible: boolean;
  // public config: any;
  intrestCategoryMaster: any;
  constructor(
    // for dropdown
    public SchemeTypes: SchemeTypeDropdownService,
    public Int8Service: Int8Service,
    private schemeCodeDropdownService: SchemeCodeDropdownService,

    public intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private http: HttpClient,
    private fb: FormBuilder,
    public SizeSlabWiseService: SizeSlabWiseService,
    private config: NgSelectConfig,) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
    this.createForm();
  }

  ngOnInit(): void {

    // Fetching Server side data
    this.dtExportOptions = {
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
            this.url + '/deposit-intrest-rate',
            dataTableParameters
          ).subscribe(resp => {
           
            this.sizeSlabWise = resp.data;
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
          title: 'Scheme',
          data: 'ACNOTYPE'
        },
        {
          title: 'Interest Category',
          data: 'INT_CATEGORY'
        }
      ],
      dom: 'lrtip'

    };

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {

        return (scheme.id == 'TD');
      });
      this.scheme = filtered;
      // this.scheme = data;
    })

    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
  
      this.intrestCategoryMaster = data;

    })

  }

  createForm() {
    this.angForm = this.fb.group({
      SERIAL_NO: [''],
      EFFECT_DATE: [''],
      INT_RATE: ['', [Validators.pattern]],
      ACNOTYPE: ['', [Validators.required]],
      INT_CATEGORY: ['', [Validators.required]]
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    let effectdate
    if (this.multiField.length != 0) {
      this.formSubmitted = true;
      const formVal = this.angForm.value;
      const dataToSend = {
        'ACNOTYPE': formVal.ACNOTYPE,
        'INT_CATEGORY': formVal.INT_CATEGORY,
        'Data': this.rowData,
        'FieldData': this.multiField,
      }

      this.SizeSlabWiseService.postData(dataToSend).subscribe(data1 => {
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
        'Warning',
        'Please Input Slab details ',
        'warning'
      )
    }


  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.SizeSlabWiseService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.multiField = data.rate
      this.ngintcat = Number(data.INT_CATEGORY)
      this.angForm.patchValue({
        'ACNOTYPE': data.ACNOTYPE,
        // 'INT_CATEGORY': data.INT_CATEGORY
      })
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
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete all rows data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.SizeSlabWiseService.deleteData(id).subscribe(data1 => {
          this.rowData = data1;
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



  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['FieldData'] = this.multiField
    this.SizeSlabWiseService.updateData(data).subscribe(() => {
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


  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiField = [];
    this.resetForm();
  }
  addField() {

    let effectdate = (document.getElementById("EFFECT_DATE") as HTMLInputElement).value;
    let intrate = (document.getElementById("INT_RATE") as HTMLInputElement).value;
    if (effectdate == "") {
      Swal.fire(
        'Info',
        'Please Add Effect Date',
        'info'
      )
    }
    if (intrate == "") {

      Swal.fire(
        'Info',
        'Please Input Interest Rate ',
        'info')
    }
    let date
    if (effectdate != "" && intrate != "") {
      const formVal = this.angForm.value;
      var object = {
        EFFECT_DATE: (formVal.EFFECT_DATE == '' || formVal.EFFECT_DATE == 'Invalid date') ? date = '' : date = moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
        INT_RATE: formVal.INT_RATE,

      }
      this.multiField.push(object);
     
      this.resetField()
    }

  }
  resetField() {
    this.angForm.controls['INT_RATE'].reset();
    this.angForm.controls['EFFECT_DATE'].reset();
  }
  intIndex: number
  intID: number
  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    const formVal = this.angForm.value;
    let date1
    if (this.editdate.EFFECT_DATE != formVal.EFFECT_DATE) {
      date1 = moment(formVal.EFFECT_DATE).format('DD/MM/YYYY');
    } else {
      date1 = formVal.EFFECT_DATE
    }

    var object = {
      EFFECT_DATE: date1,
      INT_RATE: formVal.INT_RATE,
      id: this.intID
    }
    this.multiField[index] = object;
    this.resetField()
  }
  editdate: any
  editField(id) {
    this.intIndex = id
    this.intID = this.multiField[id].id;
    this.editdate = this.multiField[id]

    this.addShowButton = false;
    this.UpdateShowButton = true;
    let effectdate
    this.angForm.patchValue({
      EFFECT_DATE: (this.multiField[id].EFFECT_DATE == 'Invalid date' || this.multiField[id].EFFECT_DATE == '' || this.multiField[id].EFFECT_DATE == null) ? effectdate = '' : effectdate = this.multiField[id].EFFECT_DATE,
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