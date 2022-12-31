import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { PrematurePigmyService } from './premature-pigmy-less-ir.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service';
import { IOption } from 'ng-select';
import { environment } from '../../../../../../environments/environment'
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface PrematurePigmy {
  AC_ACNOTYPE: string;
  EFFECT_DATE: Date;
  SERIAL_NO: number;
  FROM_MONTHS: string;
  TO_MONTHS: string;
  LESS_INT_RATE: string;
}

@Component({
  selector: 'app-premature-pigmy-less-ir',
  templateUrl: './premature-pigmy-less-ir.component.html',
  styleUrls: ['./premature-pigmy-less-ir.component.scss'],
})
export class PrematurePigmyLessIRComponent implements OnInit {
  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  //api 
  url = environment.base_url;
  @ViewChild('AC_ACNOTYPE') AC_ACNOTYPE: NgSelectComponent;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  prematurePigmy: PrematurePigmy[];
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
  addShowButton: boolean = true
  UpdateShowButton: boolean = false
  multiField = [];
  updateID: number = 0;
  schemeCode: any;
  //for search functionality
  filterData = {};
  // dropdown variables
  ngschemetype: any = null


  // schemetype: Array<IOption> = this.SchemeTypes.getCharacters();
  //Scheme type variable
  schemeType: string = 'PG'
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  scheme: any[]
  private dataSub: Subscription = null;
  //for date 
  datemax: any;
  effectdate: any = null
  maxDate: Date;
  minDate: Date;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    // for dropdown
    private schemeCodeDropdownService: SchemeCodeDropdownService,

    public SchemeTypes: SchemeTypeDropdownService,
    private prematurePigmyService: PrematurePigmyService,
    private config: NgSelectConfig,) {
    // this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

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
            this.url + '/premature-pigmy-less-int-rate',
            dataTableParameters
          ).subscribe(resp => {
            this.prematurePigmy = resp.data;

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
          title: 'Effective Date',
          data: 'EFFECT_DATE'
        },

        {
          title: 'Scheme Type',
          data: 'AC_ACNOTYPE'
        }
      ],
      dom: 'Blrtip',
    };

    // this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
    //   var filtered = data.filter(function (scheme) {

    //     return (scheme.id == 'TD');
    //   });
    //   this.scheme = filtered;
    //   // this.scheme = data;
    // })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'PG');
      });
      this.scheme = filtered;
    })
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      AC_ACNOTYPE: ['', [Validators.required]],
      EFFECT_DATE: [''],
      SERIAL_NO: [''],
      FROM_MONTHS: [''],
      TO_MONTHS: [''],
      LESS_INT_RATE: ['']
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
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        // 'EFFECT_DATE': formVal.EFFECT_DATE,
        'FieldData': this.multiField,
      }
      this.prematurePigmyService.postData(dataToSend).subscribe(data1 => {
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
      this.AC_ACNOTYPE.focused=true
      this.AC_ACNOTYPE.isOpen=true
    }
    else {
      Swal.fire(
        'Warning',
        'Please Input Slab Details ',
        'warning'
      )
    }

  }
  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {

    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.addShowButton = true
    this.prematurePigmyService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.multiField = data.rate
      this.updateID = data.id;
      // this.angForm.controls['AC_ACNOTYPE'].disable()
      this.angForm.controls['EFFECT_DATE'].disable()
      this.ngschemetype = Number(data.AC_ACNOTYPE)
      this.angForm.patchValue({
        // 'EFFECT_DATE': (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? effectdate = '' : effectdate = data.EFFECT_DATE,
        EFFECT_DATE: data.EFFECT_DATE,
        // 'AC_ACNOTYPE': data.AC_ACNOTYPE,
      })
    })
  }

  //Method for update data 
  updateData(id) {
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
    data['AC_ACNOTYPE'] = this.ngschemetype
    this.prematurePigmyService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiField = []
      this.resetForm();
      this.AC_ACNOTYPE.focused=true
      this.AC_ACNOTYPE.isOpen=true
    })
  }
  //comparing from amount and to amount
  compareamount() {
    let from = Number((document.getElementById("frommonths") as HTMLInputElement).value);
    let to = Number((document.getElementById("tomonths") as HTMLInputElement).value);
    if (to != 0) {
      if (from > to) {
        Swal.fire(
          'Warning!',
          'From Months Should Be Less Than To Months',
          'warning'
        );
        (document.getElementById("tomonths") as HTMLInputElement).value = ""
      }
    }

  }
  //check  if margin values are below 50
  checkmargin(ele: any) {
    //check  if given value  is below 50
    if (ele.target.value <= 50) {
    }
    else {
      Swal.fire("Invalid Input", "Please Insert Values Below 50", "error");
      ele.target.value = 0 

    }
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
        this.prematurePigmyService.deleteData(id).subscribe(data1 => {
          this.prematurePigmy = data1;
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

    this.runTimer();
    this.dataSub = this.SchemeTypes.loadCharacters().subscribe((options) => {
      this.characters = options;
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
    this.angForm.controls['AC_ACNOTYPE'].enable()
    this.angForm.controls['EFFECT_DATE'].enable()
    this.createForm();
    this.ngschemetype = null
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  addNewData() {
    this.angForm.controls['AC_ACNOTYPE'].enable()
    this.angForm.controls['EFFECT_DATE'].enable()
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiField = [];
    this.resetForm();
    this.AC_ACNOTYPE.focused=true
    this.AC_ACNOTYPE.isOpen=true
  }
  addField() {

    let tomonth = (document.getElementById("tomonths") as HTMLInputElement).value;
    let intrate = (document.getElementById("LESS_INT_RATE") as HTMLInputElement).value;
    if (tomonth == "") {
      Swal.fire('Info', 'Please Input To Month', 'info')
    }
    if (intrate == "") {
      Swal.fire('Info', 'Please Add Interest', 'info')
    }
    if (tomonth != "" && intrate != "") {
      const formVal = this.angForm.value;
      var object = {
        FROM_MONTHS: formVal.FROM_MONTHS,
        TO_MONTHS: formVal.TO_MONTHS,
        LESS_INT_RATE: formVal.LESS_INT_RATE,

      }
      this.multiField.push(object);
      this.resetField()
    }

  }
  resetField() {
    this.angForm.controls['FROM_MONTHS'].reset();
    this.angForm.controls['TO_MONTHS'].reset();
    this.angForm.controls['LESS_INT_RATE'].reset();
  }
  intIndex: number
  intID: number
  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    const formVal = this.angForm.value;
    var object = {
      FROM_MONTHS: formVal.FROM_MONTHS,
      TO_MONTHS: formVal.TO_MONTHS,
      LESS_INT_RATE: formVal.LESS_INT_RATE,
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
      FROM_MONTHS: this.multiField[id].FROM_MONTHS,
      TO_MONTHS: this.multiField[id].TO_MONTHS,
      LESS_INT_RATE: this.multiField[id].LESS_INT_RATE,
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
