import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { TermDepositInterestRateService } from './term-deposit-ir.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//Service file of dropdown
import { IntrestCategoryMasterDropdownService } from '../../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { NgSelectConfig } from '@ng-select/ng-select';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface TermDepositInterestRate {
  EFFECT_DATE: Date
  ACNOTYPE: string
  INT_CATEGORY: string
  // FROM_DAYS: string
  // FROM_MONTHS: string
  // TO_DAYS: string
  // TO_MONTHS: string
  // INT_RATE: String
  // PENAL_INT_RATE: string
}
@Component({
  selector: 'app-term-deposit-ir',
  templateUrl: './term-deposit-ir.component.html',
  styleUrls: ['./term-deposit-ir.component.scss'],
})
export class TermDepositIRComponent implements OnInit, AfterViewInit, OnDestroy {
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
  termDepositInterestRate: TermDepositInterestRate[];
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
  ngscheme:any=null
  ngintcat:any=null
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
  fromdays: any;
  todays: any;
  frommonths: any;
  tomonths: any;

  //for date 
  datemax: any;

  //scheme dropdown variables
  //Scheme type variable
  
  schemeType: string = 'SB'
  timeLeft = 5;
  private dataSub: Subscription = null;
  delbtn: boolean;
  interestcategory: any[];
  scheme: any[];
   
    
  constructor(
    private http: HttpClient,
    private termDepositInterestRateService: TermDepositInterestRateService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private systemParameter: SystemMasterParametersService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) {
      this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
      console.log(this.datemax);
    
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
            this.url + '/interest-rate-for-term-deposit',
            dataTableParameters
          ).subscribe(resp => {
            this.termDepositInterestRate = resp.data;
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
          title: 'Int.Category',
          data: 'INT_CATEGORY'
        },
      ],
      dom: 'Blrtip',
    };

    this.runTimer();

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
    })
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.interestcategory = data;
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
      ACNOTYPE: ['', [Validators.required]],
      INT_CATEGORY: ['', [Validators.required]],
      EFFECT_DATE: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
      FROM_DAYS: ['', [Validators.pattern]],
      FROM_MONTHS: ['', [Validators.pattern]],
      TO_DAYS: ['', [Validators.pattern]],
      TO_MONTHS: ['', [Validators.pattern]],
      INT_RATE: ['', [Validators.pattern]],
      PENAL_INT_RATE: ['', [Validators.pattern]]
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    if(this.multiField.length!=0){    
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'EFFECT_DATE': formVal.EFFECT_DATE,
      'ACNOTYPE': formVal.ACNOTYPE,
      'INT_CATEGORY': formVal.INT_CATEGORY,
      'FieldData': this.multiField,
    }
    this.termDepositInterestRateService.postData(dataToSend).subscribe(data1 => {
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
      'Info',
      'Please Input Slab Details ',
      'info'
      )
  }
  

  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.addShowButton = true
    this.termDepositInterestRateService.getFormData(id).subscribe(data => {
      console.log("edit", data)
      this.multiField = data.rate
      this.updateID = data.id;
      this.angForm.patchValue({
        'EFFECT_DATE': data.EFFECT_DATE,
        'ACNOTYPE': data.ACNOTYPE,
        'INT_CATEGORY': data.INT_CATEGORY
      })
    })
  }
  checkinput() {

    this.fromdays = (document.getElementById("Formdays") as HTMLInputElement).value;
    this.todays = (document.getElementById("todays") as HTMLInputElement).value;
    this.frommonths = (document.getElementById("FROM_months") as HTMLInputElement).value;
    this.tomonths = (document.getElementById("TO_months") as HTMLInputElement).value;


    if ((this.fromdays == "" && this.todays == "") || (this.fromdays == "" && this.todays == "")) {

      Swal.fire(
        'Invalid Input',
        'Please Enter Days Or Month Range ',
        'warning'
      )

    }
    if ((this.fromdays == 0 || this.todays == 0) || (this.fromdays == 0 || this.todays == 0)) {

      Swal.fire(
        'Invalid Input',
        'Days Or Month Range Value Should Not Be Zero ',
        'warning'
      )

    }

  }

  compareamountdays() {

    let from = Number((document.getElementById("Formdays") as HTMLInputElement).value);
    let to = Number((document.getElementById("todays") as HTMLInputElement).value);
    if(to != 0){
      if (from > to) {
        Swal.fire(  
          'Warning!',
          'From Days Should Be Less Than To Days',
          'warning'
        );
        (document.getElementById("todays") as HTMLInputElement).value = ""
      }
    }
   
  } 
  compareamountmonths() {

    let from = Number((document.getElementById("FROM_months") as HTMLInputElement).value);
    let to = Number((document.getElementById("TO_months") as HTMLInputElement).value);
    if(to != 0){
      if (from > to) {
        Swal.fire(  
          'Warning!',
          'From Months Should Be Less Than To Months',
          'warning'
        );
        (document.getElementById("TO_months") as HTMLInputElement).value = ""
      }
    }
   
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
    //set open date, appointed date and expiry date
    getSystemParaDate() {
      this.systemParameter.getFormData(1).subscribe(data => {
        this.angForm.patchValue({
          AC_OPDATE: data.CURRENT_DATE,
          DATE_APPOINTED: data.CURRENT_DATE,
          DATE_EXPIRY: data.CURRENT_DATE
        })
      })
    }
  // //disable input fields 
  // disableinput() {
  //   this.fromdays = (document.getElementById("Formdays") as HTMLInputElement);
  //   this.todays = (document.getElementById("todays") as HTMLInputElement);
  //   this.frommonths = (document.getElementById("FROM_months") as HTMLInputElement);
  //   this.tomonths = (document.getElementById("TO_months") as HTMLInputElement);

  // //for days input field
  //   if (this.fromdays.value != "" || this.todays.value != "") {
  //     this.frommonths.disabled = true;
  //       this.tomonths.disabled= true;
  //   }
  //   else{
  //     this.frommonths.disabled = false;
  //     this.tomonths.disabled= false;
  //   }

  // //for months input field
  //   if (this.frommonths.value != "" || this.tomonths.value != "") {
  //     this.fromdays.disabled = true;
  //       this.todays.disabled= true;
  //   }
  //   else{
  //     this.fromdays.disabled = false;
  //     this.todays.disabled= false;
  //   }
  // }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    console.log("updatedata", data)
    data['id'] = this.updateID;
    data['FieldData'] = this.multiField
    this.termDepositInterestRateService.updateData(data).subscribe(() => {
      console.log("update", data)
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

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Want To Delete Interest Rate For Term Deposit Data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.termDepositInterestRateService.deleteData(id).subscribe(data1 => {
          this.termDepositInterestRate = data1;
          Swal.fire(
            'Deleted!',
            'Your Data Has Been Deleted.',
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
          'Your Data Is Safe.',
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

  // Reset Function
  resetForm() {
    this.createForm();
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

  addField() { 
    
    let intrate = (document.getElementById("INT_RATE") as HTMLInputElement).value;
    let penint = (document.getElementById("PENAL_INT_RATE") as HTMLInputElement).value;
    if(penint == ""){
      Swal.fire(
        'Info',
        'Please Input Panel Interest Rate',
        'info'
      )
    }
    if(intrate == ""){

      Swal.fire(
        'Info',
        'Please Input Interest Rate ',
        'info'
      )
        
    }
    
    if(intrate!="" && penint != "")
    {
      const formVal = this.angForm.value;
      var object = {
        FROM_DAYS: formVal.FROM_DAYS,
        FROM_MONTHS: formVal.FROM_MONTHS,
        TO_DAYS: formVal.TO_DAYS,
        TO_MONTHS: formVal.TO_MONTHS,
        INT_RATE: formVal.INT_RATE,
        PENAL_INT_RATE: formVal.PENAL_INT_RATE,
      }
      this.multiField.push(object);
      console.log(this.multiField)
      
      this.resetField()
    }
    
  }
  resetField() {
    this.angForm.controls['FROM_DAYS'].reset();
    this.angForm.controls['FROM_MONTHS'].reset();
    this.angForm.controls['TO_DAYS'].reset();
    this.angForm.controls['TO_MONTHS'].reset();
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
      FROM_DAYS: formVal.FROM_DAYS,
      FROM_MONTHS: formVal.FROM_MONTHS,
      TO_DAYS: formVal.TO_DAYS,
      TO_MONTHS: formVal.TO_MONTHS,
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
    this.delbtn=false;
    this.angForm.patchValue({
      FROM_DAYS: this.multiField[id].FROM_DAYS,
      FROM_MONTHS: this.multiField[id].FROM_MONTHS,
      TO_DAYS: this.multiField[id].TO_DAYS,
      TO_MONTHS: this.multiField[id].TO_MONTHS,
      INT_RATE: this.multiField[id].INT_RATE,
      PENAL_INT_RATE: this.multiField[id].PENAL_INT_RATE,
    })
  }
  delField(id) {
    this.multiField.splice(id, 1)
  }
}