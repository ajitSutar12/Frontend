import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { InterestRateForLoanandCCService } from './interest-rate-for-lacc.service'
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//Service file of dropdown
import { IntrestCategoryMasterDropdownService } from '../../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { NgSelectConfig } from '@ng-select/ng-select';
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
interface InterestRateForLoanandCC {
  ACNOTYPE: string
  INT_CATEGORY: string
  EFFECT_DATE: Date
}

@Component({
  selector: 'app-interest-rate-for-lacc',
  templateUrl: './interest-rate-for-lacc.component.html',
  styleUrls: ['./interest-rate-for-lacc.component.scss'],
})
export class InterestRateForLACCComponent implements OnInit, AfterViewInit, OnDestroy {
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
  interestRateForLoanandCC: InterestRateForLoanandCC[];
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
  // for dropdown ngmodule
  ngintcat:any=null
  ngscheme:any=null
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
  
  allScheme: any[]

  //scheme dropdown variables
  interestcategory: any[];
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  //for date 
  datemax: any;
  effectdate:any=null
  maxDate: Date;
  minDate: Date;
  constructor(
    private http: HttpClient,
    private interestRateForLoanandCCService: InterestRateForLoanandCCService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) {
      // this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
      // console.log(this.datemax);
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
    
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
            this.url + '/interest-rate-for-loan-and-cc',
            dataTableParameters
          ).subscribe(resp => {
            this.interestRateForLoanandCC = resp.data;
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
        },
        {
          title: 'Int.Category',
          data: 'INT_CATEGORY'
        },

      ],
      dom: 'Blrtip',
    };
    this.runTimer();

   
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.allScheme = filtered;
    })
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.interestcategory = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      ACNOTYPE: ['', [Validators.required]],
      INT_CATEGORY: ['', [Validators.required]],
      EFFECT_DATE: ['', [ Validators.maxLength(10), Validators.minLength(4)]],
      FROM_AMOUNT: ['', [Validators.pattern]],
      TO_AMOUNT: ['', [Validators.pattern]],
      INT_RATE: ['', [ Validators.pattern]],
      PENAL_INT_RATE: ['', [Validators.pattern]],
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
    let effectdate
    if(this.multiField.length!=0){
      this.formSubmitted=true;
      const formVal = this.angForm.value;
      const dataToSend = {
        'EFFECT_DATE': (formVal.EFFECT_DATE == '' || formVal.EFFECT_DATE == 'Invalid date') ? effectdate = '' : effectdate = moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
        //'EFFECT_DATE': formVal.EFFECT_DATE,
        'ACNOTYPE': formVal.ACNOTYPE,
        'INT_CATEGORY': formVal.INT_CATEGORY,
        'FieldData': this.multiField,
      }
      

      
      this.interestRateForLoanandCCService.postData(dataToSend).subscribe(data1 => {
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
  updatecheckdata:any
  //Method for append data into fields
  editClickHandler(id) {
    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.interestRateForLoanandCCService.getFormData(id).subscribe(data => {
      this.updatecheckdata=data
      this.updateID = data.id;
      this.multiField = data.rate
      this.ngintcat=Number(data.INT_CATEGORY)
      this.angForm.patchValue({
        'EFFECT_DATE': (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? effectdate = '' : effectdate = data.EFFECT_DATE,
        //'EFFECT_DATE': data.EFFECT_DATE,
        'ACNOTYPE': data.ACNOTYPE,
        // 'INT_CATEGORY': data.INT_CATEGORY,

      })
    })
  }
 

  //Method for update data 
  updateData() {
    let effectdate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['FieldData'] = this.multiField
    if(this.updatecheckdata.EFFECT_DATE!=data.EFFECT_DATE){
      (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (effectdate = '', data['EFFECT_DATE'] = effectdate) : (effectdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment(effectdate).format('DD/MM/YYYY'))
      }
    this.interestRateForLoanandCCService.updateData(data).subscribe(() => {
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
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiField = [];
    this.resetForm();
  }
  //check  if percentage  is below 100
checkmargin(ele:any){ 
  //check  if given value  is below 100
  console.log(ele);
  if(ele <= 100){
console.log(ele);
  }
  else{
    Swal.fire("Invalid Input", "Please Insert Values Below 100", "error");
  }
}
compareamount() {
  let from = Number((document.getElementById("FROM_AMOUNT") as HTMLInputElement).value);
  let to = Number((document.getElementById("toamt") as HTMLInputElement).value);
  if(to != 0){
    if (from > to) {
      Swal.fire(
        'Warning!',
        'From Amount Should Be Less Than Upto Amount',
        'warning'
      );
      (document.getElementById("toamt") as HTMLInputElement).value = ""
    }
  }
 
}

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Want To Delete Interest Rate For loan And CC Data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.interestRateForLoanandCCService.deleteData(id).subscribe(data1 => {
          this.interestRateForLoanandCC = data1;
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
    //this.myInputField.nativeElement.focus();
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

  // Reset Function
  resetForm() {
    this.createForm();
    this.ngscheme=null
    this.ngintcat=null
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
    let penint = (document.getElementById("PENAL_INT_RATE") as HTMLInputElement).value;
    if(penint==""){
      Swal.fire(
        'Info',
        'Please Add Panel Interest',
        'info'
        )
    }
    if(intrate == ""){
      Swal.fire(
        'Info',
        'Please Input Interest Rate',
        'info'
        )
    }
    
    if(intrate && penint != ""){
      const formVal = this.angForm.value;
      var object = {
        FROM_AMOUNT: formVal.FROM_AMOUNT,
        TO_AMOUNT: formVal.TO_AMOUNT,
        INT_RATE: formVal.INT_RATE,
        PENAL_INT_RATE: formVal.PENAL_INT_RATE,

      }
      this.multiField.push(object);
      console.log(this.multiField)
      this.resetField()
    }
    
  }
  resetField() {
    this.angForm.controls['FROM_AMOUNT'].reset();
    this.angForm.controls['TO_AMOUNT'].reset();
    this.angForm.controls['INT_RATE'].reset();
    this.angForm.controls['PENAL_INT_RATE'].reset();
  }
  intIndex: number
  intID: number
  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    const formVal = this.angForm.value;
    var object = {
      FROM_AMOUNT: formVal.FROM_AMOUNT,
      TO_AMOUNT: formVal.TO_AMOUNT,
      INT_RATE: formVal.INT_RATE,
      PENAL_INT_RATE: formVal.PENAL_INT_RATE,
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
      FROM_AMOUNT: this.multiField[id].FROM_AMOUNT,
      TO_AMOUNT: this.multiField[id].TO_AMOUNT,
      INT_RATE: this.multiField[id].INT_RATE,
      PENAL_INT_RATE: this.multiField[id].PENAL_INT_RATE,
    })
  }
  delField(id) {
    this.multiField.splice(id, 1)
  }
}
