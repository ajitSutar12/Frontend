import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { NPAClassificationService } from './n-paclassification-slab-master.component.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment'
import * as moment from 'moment';
import { NgSelectComponent } from '@ng-select/ng-select';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
interface NPAClassification {
  EFFECT_DATE: string
  NPA_BASE_DAYS: number
}

@Component({
  selector: 'app-n-paclassification-slab-master',
  templateUrl: './n-paclassification-slab-master.component.html',
  styleUrls: ['./n-paclassification-slab-master.component.scss']
})
export class NPAClassificationSlabMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;

  bsValue
  formSubmitted: boolean = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  angForm: FormGroup;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtExportButtonOptions: DataTables.Settings = {};
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  //filter variable
  filterData = {};

  ngNPAClass: any = null

  NPAClass = [
    { id: 'ST', label: 'Standard', subClassNo: '1' },
    { id: 'SS', label: 'Sub Standard', subClassNo: '1' },
    { id: 'DB', label: 'Doubtful Assets1', subClassNo: '1' },
    { id: 'DB', label: 'Doubtful Assets2', subClassNo: '2' },
    { id: 'DB', label: 'Doubtful Assets3', subClassNo: '3' },
    { id: 'LS', label: 'Loss Assets', subClassNo: '1' },
    { id: 'H', label: '--Heading--', subClassNo: '1' },
  ]

  multiField = [];

  INPAClass: NPAClassification[];

  arrIndex: number
  arrID: number
  maxDate: Date;

  //variable to get ID to update
  updateID: number = 0;
  //store data at edit method
  updatecheckdata: any

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  addShowButton: boolean = true
  UpdateShowButton: boolean = false
  newbtnShow: boolean = false

  isDisableMonth: boolean = false
  isDisableDay: boolean = false

  constructor(private fb: FormBuilder, private npaservice: NPAClassificationService, private http: HttpClient,) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/npa-classification-master',
            dataTableParameters
          ).subscribe(resp => {
            this.INPAClass = resp.data;
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
          title: 'Action',
        },
        {
          data: 'EFFECT_DATE',
          title: 'Effect Date'
        },
        {
          data: 'NPA_BASE_DAYS',
          title: 'Base Days'
        }
      ],
      dom: "Blrtip",
    };

  }

  createForm() {
    this.angForm = this.fb.group({
      EFFECT_DATE: ['', [Validators.required, Validators.pattern]],
      NPA_CLASS: ['',],
      SUB_CLASS_NO: [''],
      NPA_DESCRIPTION: ['',],
      FROM_MONTHS: ['', [Validators.pattern]],
      FROM_DAYS: ['', [Validators.pattern]],
      TO_MONTHS: ['', [Validators.pattern]],
      TO_DAYS: ['', [Validators.pattern]],
      SECURED_PERCENT: ['0.00', [Validators.pattern]],
      UNSECURED_PERCENT: ['0.00', [Validators.pattern, Validators.max(100)]],
      NPA_BASE_DAYS: ['', [Validators.pattern, Validators.required]],
    });
  }

  selectedNPA() {
    if (this.ngNPAClass.id == "H") {
      this.angForm.controls['TO_DAYS'].disable()
      this.angForm.controls['FROM_MONTHS'].disable()
      this.angForm.controls['TO_MONTHS'].disable()
      this.angForm.controls['FROM_DAYS'].disable()
      this.angForm.controls['SECURED_PERCENT'].disable()
      this.angForm.controls['UNSECURED_PERCENT'].disable()
      this.angForm.patchValue({
        SECURED_PERCENT: 0.00,
        UNSECURED_PERCENT: 0.00,
        FROM_DAYS: '',
        FROM_MONTHS: '',
        TO_MONTHS: '',
        TO_DAYS: ''
      })
    }
    else {
      this.angForm.controls['TO_DAYS'].enable()
      this.angForm.controls['FROM_MONTHS'].enable()
      this.angForm.controls['TO_MONTHS'].enable()
      this.angForm.controls['FROM_DAYS'].enable()
      this.angForm.controls['SECURED_PERCENT'].enable()
      this.angForm.controls['UNSECURED_PERCENT'].enable()
    }
  }

  checkEffectDate() {
    let effectDate = moment(this.angForm.controls['EFFECT_DATE'].value).format('DD/MM/YYYY')
    this.npaservice.getData().subscribe(data => {
      if (data?.length != 0) {
        if (data.find(data => data['EFFECT_DATE'] != (effectDate == ''))) {
          if (data.find(data => data['EFFECT_DATE'] == effectDate)) {
            Swal.fire({
              icon: 'info',
              title: 'This Effect Date is Already Exist',
            })
            this.angForm.controls['EFFECT_DATE'].reset();
          }
        }
      }
    })
  }
  //checks percentage of secured
  checkPercent(event) {
    if (Number(event) > 100) {
      Swal.fire('Info', 'Please Input percentage upto 100', 'info')
      this.angForm.patchValue({
        SECURED_PERCENT: '0.00'
      })
    }
  }
  //checks percentage of unsecured
  checkUnsecurePercent(event) {
    if (Number(event) > 100) {
      Swal.fire('Info', 'Please Input percentage upto 100', 'info')
      this.angForm.patchValue({
        UNSECURED_PERCENT: '0.00'
      })
    }
  }
  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }

  //enable/disable from month and to month
  disableMonth() {
    if (this.angForm.controls['FROM_DAYS'].value != '') {
      this.angForm.controls['FROM_MONTHS'].disable()
      this.angForm.controls['TO_MONTHS'].disable()
      this.isDisableMonth = true
    }
    else {
      this.angForm.controls['FROM_MONTHS'].enable()
      this.angForm.controls['TO_MONTHS'].enable()
      this.angForm.controls['FROM_DAYS'].disable()
      this.angForm.controls['TO_DAYS'].disable()
      this.angForm.patchValue({
        FROM_DAYS: 0,
        TO_DAYS: 0
      })
      this.isDisableMonth = false
    }
  }

  //enable/disable from Days and to Days
  disableDays() {
    if (this.angForm.controls['FROM_MONTHS'].value != '') {
      this.angForm.controls['FROM_DAYS'].disable()
      this.angForm.controls['TO_DAYS'].disable()
      this.isDisableDay = true
    }
    else {
      this.angForm.controls['FROM_DAYS'].enable()
      this.angForm.controls['TO_DAYS'].enable()
      this.angForm.controls['FROM_MONTHS'].disable()
      this.angForm.controls['TO_MONTHS'].disable()
      this.angForm.patchValue({
        FROM_MONTHS: 0,
        TO_MONTHS: 0
      })
      this.isDisableDay = false
    }
  }

  //compare from and to Days
  compareDays() {
    if (Number(this.angForm.controls['TO_DAYS'].value) <= Number(this.angForm.controls['FROM_DAYS'].value)) {
      Swal.fire('Info', 'To Days Must Greater Than From Days', 'info')
      this.angForm.patchValue({
        TO_DAYS: ''
      })
    }
  }
  //compare from and to Month
  compareMonths() {
    if (Number(this.angForm.controls['TO_MONTHS'].value) <= Number(this.angForm.controls['FROM_MONTHS'].value)) {
      Swal.fire('Info', 'To Months Must Greater Than From Months', 'info')
      this.angForm.patchValue({
        TO_MONTHS: ''
      })
    }
  }
  //add object into array
  addField() {
    let fromDay = (document.getElementById("FROM_DAYS") as HTMLInputElement).value;
    let today = (document.getElementById("TO_DAYS") as HTMLInputElement).value;
    let fromMonth = (document.getElementById("FROM_MONTHS") as HTMLInputElement).value;
    let toMonth = (document.getElementById("TO_MONTHS") as HTMLInputElement).value;
    let SECURED_PERCENT = (document.getElementById("SECURED_PERCENT") as HTMLInputElement).value;
    let UNSECURED_PERCENT = (document.getElementById("UNSECURED_PERCENT") as HTMLInputElement).value;
    if (this.ngNPAClass.id == "H") {
      const formVal = this.angForm.value;
      var object = {
        NPA_CLASS: this.ngNPAClass.id,
        SUB_CLASS_NO: this.ngNPAClass.subClassNo,
        NPA_DESCRIPTION: formVal.NPA_DESCRIPTION,
        FROM_MONTHS: formVal.FROM_MONTHS,
        FROM_DAYS: formVal.FROM_DAYS,
        TO_MONTHS: formVal.TO_MONTHS,
        TO_DAYS: formVal.TO_DAYS,
        SECURED_PERCENT: formVal.SECURED_PERCENT,
        UNSECURED_PERCENT: formVal.UNSECURED_PERCENT
      }
      this.multiField.push(object);
      this.resetField()
    }
    else {
      if (this.ngNPAClass == null) { Swal.fire('Info', 'Please Select NPA Class', 'info') }
      else if (this.isDisableDay == false && (fromDay == null || fromDay == '')) { Swal.fire('Info', 'Please Add From Days', 'info') }
      else if (this.isDisableMonth == false && (fromMonth == null || fromMonth == '')) { Swal.fire('Info', 'Please Add From Months', 'info') }
      else if (this.isDisableDay == false && (today == null || today == '')) { Swal.fire('Info', 'Please Add To Days', 'info') }
      else if (this.isDisableMonth == false && (toMonth == null || toMonth == '')) { Swal.fire('Info', 'Please Add To Months', 'info') }
      else if (SECURED_PERCENT == null || SECURED_PERCENT == '') { Swal.fire('Info', 'Please Add Secured percentage', 'info') }
      else if (UNSECURED_PERCENT == null || UNSECURED_PERCENT == '') { Swal.fire('Info', 'Please Add Unsecured percentage', 'info') }
      else if (this.isDisableDay == false && (Number(this.angForm.controls['TO_DAYS'].value) <= Number(this.angForm.controls['FROM_DAYS'].value))) { Swal.fire('Info', 'To Days Must Greater Than From Days', 'info') }
      else if (this.isDisableMonth == false && (Number(this.angForm.controls['TO_MONTHS'].value) <= Number(this.angForm.controls['FROM_MONTHS'].value))) { Swal.fire('Info', 'To Months Must Greater Than From Months', 'info') }
      else
      // if ((Number(this.angForm.controls['TO_DAYS'].value) > Number(this.angForm.controls['FROM_DAYS'].value)) && (Number(this.angForm.controls['TO_MONTHS'].value) > Number(this.angForm.controls['FROM_MONTHS'].value)))
      {
        const formVal = this.angForm.value;
        var object = {
          NPA_CLASS: this.ngNPAClass.id,
          SUB_CLASS_NO: this.ngNPAClass.subClassNo,
          NPA_DESCRIPTION: formVal.NPA_DESCRIPTION,
          FROM_MONTHS: formVal.FROM_MONTHS,
          FROM_DAYS: formVal.FROM_DAYS,
          TO_MONTHS: formVal.TO_MONTHS,
          TO_DAYS: formVal.TO_DAYS,
          SECURED_PERCENT: formVal.SECURED_PERCENT,
          UNSECURED_PERCENT: formVal.UNSECURED_PERCENT
        }
        this.multiField.push(object);
        this.resetField()
      }
    }
  }
  //edit multifield array element
  editField(id) {
    this.arrIndex = id
    this.arrID = this.multiField[id].id;
    this.addShowButton = false;
    this.UpdateShowButton = true;
    if (this.multiField[id].FROM_DAYS != '' && this.multiField[id].FROM_DAYS != undefined) {
      this.angForm.controls['FROM_MONTHS'].disable()
      this.angForm.controls['TO_MONTHS'].disable()
      this.angForm.controls['FROM_DAYS'].enable()
      this.angForm.controls['TO_DAYS'].enable()
      this.isDisableMonth = true
      this.isDisableDay = false
    }
    else {
      this.angForm.controls['FROM_MONTHS'].enable()
      this.angForm.controls['TO_MONTHS'].enable()
      this.angForm.controls['FROM_DAYS'].disable()
      this.angForm.controls['TO_DAYS'].disable()
      this.isDisableMonth = false
      this.isDisableDay = true
    }
    if (this.multiField[id].NPA_CLASS == "H") {
      this.angForm.controls['TO_DAYS'].disable()
      this.angForm.controls['FROM_MONTHS'].disable()
      this.angForm.controls['TO_MONTHS'].disable()
      this.angForm.controls['FROM_DAYS'].disable()
      this.angForm.controls['SECURED_PERCENT'].disable()
      this.angForm.controls['UNSECURED_PERCENT'].disable()
    }
    else {
      this.angForm.controls['TO_DAYS'].enable()
      this.angForm.controls['FROM_MONTHS'].enable()
      this.angForm.controls['TO_MONTHS'].enable()
      this.angForm.controls['FROM_DAYS'].enable()
      this.angForm.controls['SECURED_PERCENT'].enable()
      this.angForm.controls['UNSECURED_PERCENT'].enable()
    }
    this.angForm.patchValue({
      NPA_CLASS: this.multiField[id].NPA_CLASS,
      NPA_DESCRIPTION: this.multiField[id].NPA_DESCRIPTION,
      FROM_MONTHS: this.multiField[id].FROM_MONTHS,
      FROM_DAYS: this.multiField[id].FROM_DAYS,
      TO_MONTHS: this.multiField[id].TO_MONTHS,
      TO_DAYS: this.multiField[id].TO_DAYS,
      SECURED_PERCENT: this.multiField[id].SECURED_PERCENT,
      UNSECURED_PERCENT: this.multiField[id].UNSECURED_PERCENT,
    })
  }
  //update object in multifield array
  updateField() {
    let fromDay = (document.getElementById("FROM_DAYS") as HTMLInputElement).value;
    let today = (document.getElementById("TO_DAYS") as HTMLInputElement).value;
    let fromMonth = (document.getElementById("FROM_MONTHS") as HTMLInputElement).value;
    let toMonth = (document.getElementById("TO_MONTHS") as HTMLInputElement).value;
    let SECURED_PERCENT = (document.getElementById("SECURED_PERCENT") as HTMLInputElement).value;
    let UNSECURED_PERCENT = (document.getElementById("UNSECURED_PERCENT") as HTMLInputElement).value;
    if (this.ngNPAClass.id == "H" || this.angForm.controls['NPA_CLASS'].value == "H") {
      let index = this.arrIndex;
      this.addShowButton = true;
      this.UpdateShowButton = false;
      const formVal = this.angForm.value;
      var object = {
        NPA_CLASS: this.ngNPAClass,
        SUB_CLASS_NO: this.ngNPAClass.subClassNo,
        NPA_DESCRIPTION: formVal.NPA_DESCRIPTION,
        FROM_MONTHS: formVal.FROM_MONTHS,
        FROM_DAYS: formVal.FROM_DAYS,
        TO_MONTHS: formVal.TO_MONTHS,
        TO_DAYS: formVal.TO_DAYS,
        SECURED_PERCENT: formVal.SECURED_PERCENT,
        UNSECURED_PERCENT: formVal.UNSECURED_PERCENT,
        id: this.arrID
      }
      if (typeof (formVal.NPA_CLASS) == 'string') {
        object['NPA_CLASS'] = formVal.NPA_CLASS
      }
      else {
        object['NPA_CLASS'] = this.ngNPAClass.id
      }
      this.multiField[index] = object;
      this.resetField()
      this.ngNPAClass = null
    }
    else {
      if (this.ngNPAClass == null) { Swal.fire('Info', 'Please Select NPA Class', 'info') }
      else if (this.isDisableDay == false && (fromDay == null || fromDay == '')) { Swal.fire('Info', 'Please Add From Days', 'info') }
      else if (this.isDisableMonth == false && (fromMonth == null || fromMonth == '')) { Swal.fire('Info', 'Please Add From Months', 'info') }
      else if (this.isDisableDay == false && (today == null || today == '')) { Swal.fire('Info', 'Please Add To Days', 'info') }
      else if (this.isDisableMonth == false && (toMonth == null || toMonth == '')) { Swal.fire('Info', 'Please Add To Months', 'info') }
      else if (SECURED_PERCENT == null || SECURED_PERCENT == '') { Swal.fire('Info', 'Please Add Secured percentage', 'info') }
      else if (UNSECURED_PERCENT == null || UNSECURED_PERCENT == '') { Swal.fire('Info', 'Please Add Unsecured percentage', 'info') }
      else if (this.isDisableDay == false && (Number(this.angForm.controls['TO_DAYS'].value) <= Number(this.angForm.controls['FROM_DAYS'].value))) { Swal.fire('Info', 'To Days Must Greater Than From Days', 'info') }
      else if (this.isDisableMonth == false && (Number(this.angForm.controls['TO_MONTHS'].value) <= Number(this.angForm.controls['FROM_MONTHS'].value))) { Swal.fire('Info', 'To Months Must Greater Than From Months', 'info') }
      else {
        let index = this.arrIndex;
        this.addShowButton = true;
        this.UpdateShowButton = false;
        const formVal = this.angForm.value;
        var object = {
          NPA_CLASS: this.ngNPAClass,
          SUB_CLASS_NO: this.ngNPAClass.subClassNo,
          NPA_DESCRIPTION: formVal.NPA_DESCRIPTION,
          FROM_MONTHS: formVal.FROM_MONTHS,
          FROM_DAYS: formVal.FROM_DAYS,
          TO_MONTHS: formVal.TO_MONTHS,
          TO_DAYS: formVal.TO_DAYS,
          SECURED_PERCENT: formVal.SECURED_PERCENT,
          UNSECURED_PERCENT: formVal.UNSECURED_PERCENT,
          id: this.arrID
        }
        if (typeof (formVal.NPA_CLASS) == 'string') {
          object['NPA_CLASS'] = formVal.NPA_CLASS
        }
        else {
          object['NPA_CLASS'] = this.ngNPAClass.id
        }
        this.multiField[index] = object;
        this.resetField()
        this.ngNPAClass = null
      }
    }
  }
  //delete array element
  delField(id) {
    this.multiField.splice(id, 1)
  }
  //reset multifield array
  resetField() {
    this.ngNPAClass = null
    // this.angForm.controls['NPA_DESCRIPTION'].reset();
    // this.angForm.controls['FROM_MONTHS'].reset();
    // this.angForm.controls['FROM_DAYS'].reset();
    // this.angForm.controls['TO_MONTHS'].reset();
    // this.angForm.controls['TO_DAYS'].reset();
    this.angForm.patchValue({
      SECURED_PERCENT: 0.00,
      UNSECURED_PERCENT: 0.00,
      FROM_DAYS: '',
      NPA_DESCRIPTION: '',
      FROM_MONTHS: '',
      TO_MONTHS: '',
      TO_DAYS: ''
    })
    this.isDisableMonth = false
    this.isDisableDay = false
  }

  submit() {
    if (this.angForm.valid) {
      if (this.multiField.length != 0) {
        const formVal = this.angForm.value;
        const dataToSend = {
          'EFFECT_DATE': moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
          'NPA_BASE_DAYS': formVal.NPA_BASE_DAYS,
          'MultiField': this.multiField
        };
        this.npaservice.postData(dataToSend).subscribe(
          (data) => {
            Swal.fire("Success!", "Data Added Successfully !", "success");
            // to reload after insertion of data
            // this.rerender();
            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              dtInstance.ajax.reload()
            });
          },
          (error) => {
            console.log(error);
          }
        );
        this.resetForm()
        this.multiField = []
      }
      else {
        Swal.fire('Info', 'Please Add NPA Classification Details', 'info')
      }
    }
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.npaservice.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.updateID = data.id;
      this.multiField = data.NPAClass
      this.angForm.patchValue({
        'EFFECT_DATE': data.EFFECT_DATE,
        'NPA_BASE_DAYS': data.NPA_BASE_DAYS,
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    let opdate
    data['id'] = this.updateID;
    if (this.updatecheckdata.EFFECT_DATE != data.EFFECT_DATE) {
      (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (opdate = '', data['EFFECT_DATE'] = opdate) : (opdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment(opdate).format('DD/MM/YYYY'))
    }
    data['MultiField'] = this.multiField
    this.npaservice.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiField = []
      this.ngNPAClass = null
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
    this.multiField = []
    this.ngNPAClass = null
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Serial No.data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
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
      dtInstance.columns().every(function () {
        const that = this;
        $('#table tfoot tr').appendTo('#table thead');
        $("input", this.footer()).on("keyup change", function () {
          if (this["value"] != "") {
            that.search(this["value"]).draw();
          } else {
            that.search(this["value"]).draw();
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

}
