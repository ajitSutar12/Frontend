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
import { NgSelectConfig } from '@ng-select/ng-select';
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
  ngschemetype:any=null
  ngchargestype:any=null
  ngchargesgl:any=null

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

    //for date 
    datemax: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    // for dropdown
    public chargesType: ChargesTypeService,
    private schemeTypeDropdown: SchemeTypeDropdownService,
    private schemeTypeChargesService: SchemeTypeChargesService,
    private aCMasterService: ACMasterDropdownService,
    private config: NgSelectConfig,) {
      this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
      console.log(this.datemax);
     
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
          title: 'Action'
        },
        {
          title: 'Effect Date',
          data: 'EFFECT_DATE'
        },
        {
          title: 'Scheme Type',
          data: 'ACNOTYPE'
        },
        

        {
          title: 'Charges Type',
          data: 'CHARGES_TYPE'
        },

        {
          title: 'Charges GL Account',
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
      disabledate(data:any){
    
        console.log(data);
        if(data != ""){
          if(data > this.datemax){
            Swal.fire("Invalid Input", "Please Insert Valid Date ", "warning");
            (document.getElementById("EFFECT_DATE")as HTMLInputElement).value = ""
                
          }
        } 
      }
  // Method to insert data into database through NestJS
  submit() {
    if(this.multiField.length!=0){
      this.formSubmitted=true;
      const formVal = this.angForm.value;
      const dataToSend = {
      'EFFECT_DATE': formVal.EFFECT_DATE,
      'ACNOTYPE': formVal.ACNOTYPE,
      'CHARGES_TYPE': formVal.CHARGES_TYPE,
      'CHARGES_GL_ACNO': formVal.CHARGES_GL_ACNO,
      'FieldData': this.multiField,
    }
    this.schemeTypeChargesService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();
    this.multiField = [] 
    }
    else{
      Swal.fire(
        'Warning',
        'Please Input Slab Details ',
        'warning'
        )
    }
    
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.schemeTypeChargesService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.multiField = data.rate
      this.angForm.patchValue({
        'EFFECT_DATE': data.EFFECT_DATE,
        'ACNOTYPE': data.ACNOTYPE,
        'CHARGES_TYPE': data.CHARGES_TYPE,
        'CHARGES_GL_ACNO': data.CHARGES_GL_ACNO,
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
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['FieldData'] = this.multiField
    this.schemeTypeChargesService.updateData(data).subscribe(() => {
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
        this.schemeTypeChargesService.deleteData(id).subscribe(data1 => {
          this.schemeTypeChargesRate = data1;
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
    this.myInputField.nativeElement.focus();
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
 
  addField() {
    let trange = (document.getElementById("TO_RANGE") as HTMLInputElement).value;
    let camount = (document.getElementById("CHARGES_AMT") as HTMLInputElement).value;
    if(camount == ""){
      Swal.fire(
        'Info',
        'Please Input Charges Amount ',
        'info')
    }
    if(trange==""){
      Swal.fire('Info','Please Input To Range','info')
    }
    
    
    if( trange != "" && camount != ""){
      const formVal = this.angForm.value;
      var object = {
        FROM_RANGE: formVal.FROM_RANGE,
        TO_RANGE: formVal.TO_RANGE,
        CHARGES_AMT: formVal.CHARGES_AMT,
    }
    this.multiField.push(object);
    console.log(this.multiField)
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
}