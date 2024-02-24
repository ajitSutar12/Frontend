import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { ChargesTypeService } from '../../../../../shared/dropdownService/charges-type.service';
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service';
import { ACMasterDropdownService } from '../../../../../shared/dropdownService/ac-master-dropdown.service';
import { SchemeTypeChargesService } from './scheme-type-cherges-d.service';
import { IOption } from 'ng-select';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
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
interface SchemeTypeChargesRate {
  EFFECT_DATE: Date;
  ACNOTYPE: string;
  SERIAL_NO: number;
  CHARGES_TYPE: string;
  FROM_RANGE: number;
  TO_RANGE: number;
  CHARGES_AMT: number;
  CHARGES_GL_ACNO: string;
}
@Component({
  selector: 'app-scheme-type-charges-d',
  templateUrl: './scheme-type-charges-d.component.html',
  styleUrls: ['./scheme-type-charges-d.component.scss'],
})
export class SchemeTypeChargesDComponent implements OnInit, AfterViewInit, OnDestroy {
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
  schemeTypeChargesRate: SchemeTypeChargesRate[];
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
  // for dropdown ngmodule
  ngschemetype: any = null
  ngchargestype: any = null
  ngchargesgl: any = null

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
  category: any;

  //title select variables
  chargestype: Array<IOption> = this.chargesType.getCharacters();
  schemeType: Array<IOption> = this.schemeTypeDropdown.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  accontType: any;

  //for date control
  datemax: any;
  effectdate: any = null
  maxDate: any;
  minDate: Date;
  submitTranMode: any;
  tran_mode: any;
  totalAmt: number;

  constructor(
    private translate:TranslateService,
    private http: HttpClient,
    private fb: FormBuilder,
    // for dropdown
    public chargesType: ChargesTypeService,
    private schemeTypeDropdown: SchemeTypeDropdownService,
    private schemeTypeChargesService: SchemeTypeChargesService,
    private aCMasterService: ACMasterDropdownService,
    private systemParameter: SystemMasterParametersService,
    private config: NgSelectConfig,) {
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
            this.url + '/scheme-type-charges-definition',
            dataTableParameters
          ).subscribe(resp => {
            this.schemeTypeChargesRate = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: this.translate.instant('master.Action.Action')
        },
        {
          title: this.translate.instant('master.Scheme_Type_Charges_Defination.Effective_Date'),
          data: 'EFFECT_DATE'
        },
        {
          title: this.translate.instant('master.Scheme_Type_Charges_Defination.Scheme_Type'),
          data: 'ACNOTYPE'
        },


        {
          title: this.translate.instant('master.Scheme_Type_Charges_Defination.Charges_Type'),
          data: 'CHARGES_TYPE'
        },

        {
          title: this.translate.instant('master.Scheme_Type_Charges_Defination.Charges_GL_Acc'),
          data: 'CHARGES_GL_ACNO'
        }
      ],
      dom: 'Blrtip',
    };

    this.createForm();
    this.runTimer();
    this.dataSub = this.schemeTypeDropdown.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.chargesType.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.aCMasterService.getACMasterList().pipe(first()).subscribe(data => {
      this.accontType = data;
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

  createForm() {
    this.angForm = this.fb.group({
      EFFECT_DATE: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
      ACNOTYPE: ['', [Validators.required]],
      SERIAL_NO: [''],
      CHARGES_TYPE: ['', [Validators.required]],
      FROM_RANGE: ['', [Validators.pattern]],
      TO_RANGE: ['', [Validators.pattern]],
      CHARGES_AMT: ['', [Validators.pattern]],
      CHARGES_GL_ACNO: ['', [Validators.required]],
    });
  }
  //disabledate on keyup
  disabledate(data: any) {

    if (data != "") {
      if (data > this.datemax) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Invalid_Input')}`, `${this.translate.instant('Swal_Msg.Date')}`, "warning");
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
        // 'EFFECT_DATE': formVal.EFFECT_DATE,
        'ACNOTYPE': formVal.ACNOTYPE,
        'CHARGES_TYPE': formVal.CHARGES_TYPE,
        'CHARGES_GL_ACNO': formVal.CHARGES_GL_ACNO,
        'FieldData': this.multiField,
      }
      this.schemeTypeChargesService.postData(dataToSend).subscribe(data1 => {
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
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
        `${this.translate.instant('Swal_Msg.Warning')}`,
        `${this.translate.instant('Swal_Msg.Slab_Details')}`,
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
    this.schemeTypeChargesService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.updateID = data.id;
      this.multiField = data.rate
      this.ngchargesgl = Number(data.CHARGES_GL_ACNO)
      this.angForm.patchValue({
        'EFFECT_DATE': (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? effectdate = '' : effectdate = data.EFFECT_DATE,
        // 'EFFECT_DATE': data.EFFECT_DATE,
        'ACNOTYPE': data.ACNOTYPE,
        'CHARGES_TYPE': data.CHARGES_TYPE,
        // 'CHARGES_GL_ACNO': data.CHARGES_GL_ACNO,
      })
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiField = [];
    this.resetForm();
  }

  //Method for update data 
  updateData() {
    let effectdate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['FieldData'] = this.multiField
    if (this.updatecheckdata.EFFECT_DATE != data.EFFECT_DATE) {
      (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (effectdate = '', data['EFFECT_DATE'] = effectdate) : (effectdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment(effectdate).format('DD/MM/YYYY'))
    }
    this.schemeTypeChargesService.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
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
        this.schemeTypeChargesService.deleteData(id).subscribe(data1 => {
          this.schemeTypeChargesRate = data1;
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
    this.ngschemetype = null
    this.ngchargestype = null
    this.ngchargesgl = null

  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  addField() {
    let trange = (document.getElementById("TO_RANGE") as HTMLInputElement).value;
    let camount = (document.getElementById("CHARGES_AMT") as HTMLInputElement).value;
    if (camount == "") {
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Info')}`,
        `${this.translate.instant('Swal_Msg.I_Msg4_Am')}`,
        'info')
    }
    if (trange == "") {
      Swal.fire( `${this.translate.instant('Swal_Msg.Info')}`, `${this.translate.instant('Swal_Msg.I_Msg5_Ran')}`, 'info')
    }


    if (trange != "" && camount != "") {
      const formVal = this.angForm.value;
      var object = {
        FROM_RANGE: formVal.FROM_RANGE,
        TO_RANGE: formVal.TO_RANGE,
        CHARGES_AMT: formVal.CHARGES_AMT,
      }
      this.multiField.push(object);
      this.resetField()
    }

  }
  resetField() {
    this.angForm.controls['FROM_RANGE'].reset();
    this.angForm.controls['TO_RANGE'].reset();
    this.angForm.controls['CHARGES_AMT'].reset();
  }
  intIndex: number
  intID: number
  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    const formVal = this.angForm.value;
    var object = {
      FROM_RANGE: formVal.FROM_RANGE,
      TO_RANGE: formVal.TO_RANGE,
      CHARGES_AMT: formVal.CHARGES_AMT,
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
      SERIAL_NO: this.multiField[id].SERIAL_NO,
      FROM_RANGE: this.multiField[id].FROM_RANGE,
      TO_RANGE: this.multiField[id].TO_RANGE,
      CHARGES_AMT: this.multiField[id].CHARGES_AMT,
    })
  }
  delField(id) {
    this.multiField.splice(id, 1)
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }

  comparerange() {
    let from = Number((document.getElementById("FROM_RANGE") as HTMLInputElement).value);
    let to = Number((document.getElementById("TO_RANGE") as HTMLInputElement).value);
    if (to != 0) {
      if (from > to) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Warning')}`,
          `${this.translate.instant('Swal_Msg.W_Msg3_r')}`,
          'warning'
        );
        (document.getElementById("TO_RANGE") as HTMLInputElement).value = ""

      }
    }

  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}