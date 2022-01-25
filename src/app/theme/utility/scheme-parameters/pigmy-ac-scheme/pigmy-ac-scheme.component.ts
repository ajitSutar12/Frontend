import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { PigmyAcSchemeService } from './pigmy-ac-scheme.service';
// Used to Call API
import { HttpClient } from '@angular/common/http'
//Dropdown service file
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface PigmyACScheme {
  S_ACNOTYPE: string,
  S_APPL: number,
  S_NAME: string,
  S_SHNAME: string,
  S_GLACNO: string
  S_INT_ACNO: string
  S_RECBL_PYBL_INT_ACNO: string
  S_INT_APPLICABLE: boolean
  POST_TO_INDIVIDUAL_AC: boolean
  S_PAYABLE_INT_ALLOW: boolean
  S_PRODUCT_DAY_BASE: string
  S_PRODUCT_DAY_BASE_END: string
  MIN_INT_LIMIT: number
  STAND_INSTRUCTION_ALLOW: boolean
  IS_AUTO_CUT_INSTRUCTION: boolean
  IS_ALLOW_SI_MINBAL: boolean
  WITHDRAWAL_APPLICABLE: boolean
  S_INTPAID_ON_CLOSING: boolean
  ROUNDOFF_FACTOR: number
  BALANCE_ADD_APPLICABLE: boolean
  PREMATURE_COMPOUND_INT: boolean
  PIGMY_MACHINE_SCHEME: number
  OVERDRAFT_INTEREST_APPLICABLE: boolean
  OVERDRAFT_INTEREST_RATE: number
  SVR_CHARGE_GLCODE: number
  SVR_CHARGE_RATE: number
}

@Component({
  selector: 'app-pigmy-ac-scheme',
  templateUrl: './pigmy-ac-scheme.component.html',
  styleUrls: ['./pigmy-ac-scheme.component.scss']
})
export class PigmyAcSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  
@ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  pigmyACScheme: PigmyACScheme[];
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
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  //variables to route list
  intrestTrue = true;
  StandingTrue = false;
  BalanceTrue = false;
  OverDraftTrue = false;
  ServiceTrue = false;

  //Variables to add property as enable/disable to fields
  IS_RECBL_PYBL_INT_ACNO: boolean = false;
  S_PRODUCT_DAY_BASE;
  S_PRODUCT_DAY_BASE_END;
  IS_OVERDRAFT_INTEREST_RATE: boolean = false;

  //Dropdown option variable
  acMaster: any
  newbtnShow: boolean;

  constructor(
    private http: HttpClient,
    private pigmyAcSchemeService: PigmyAcSchemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder) { }

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
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;
        if (dataTableParameters.search.value != '') {
          this.filter = dataTableParameters.search.value;
          this.filterObject = [
            // { name: "A_BALCODE", type: "default" },
            // { name: "A_ACHEAD", type: "default" },
            // { name: "A_ACTYPE", type: "default" }
          ]
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length,
            filter: dataTableParameters.search.value,
            filter_in: this.filterObject
          }
        }
        else {
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length
          }
        }
        this.http
          .post<DataTableResponse>(
            this.url + '/pigmy-ac-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.pigmyACScheme = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: 'Action',
        },
        {
          title: 'Type'
        },
        {
          title: 'Scheme Code',
        },
        {
          title: 'Description',
        },
        {
          title: 'Short Name',
        },
        {
          title: 'G.L. A/c No.',
        },
        {
          title: 'Interest GL A/c',
        },
        {
          title: 'Payable Int.A/c',
        },
        {
          title: 'Is Interest Applicable? ',
        },
        {
          title: 'Is Post Interest to A/c ?',
        },
        {
          title: 'Is Payable Interest Allow ?',
        },
        {
          title: 'Product Base Start Day',
        },
        {
          title: 'Product Base End Day',
        },
        {
          title: 'Minimum Interest Amount',
        },
        {
          title: 'Is Standing Instruction Applicable ?',
        },
        {
          title: 'Is Instruction though Auto Cutting LN/CC',
        },
        {
          title: 'Is Allow Standing Instruction Minimum Bal.?',
        },
        {
          title: 'Is Withdrawal Applicable ?',
        },
        {
          title: 'Is Interest Paid on A/c Closing ?',
        },
        {
          title: 'Interest Round Off Factor in Paise',
        },
        {
          title: 'Is Balance Entry Allow ?',
        },
        {
          title: 'Is Prematured Compound Interest ?',
        },
        {
          title: 'Pigmy Machine Scheme No.',
        },
        {
          title: 'Is OverDraft Interest Applicable',
        },
        {
          title: 'Overdraft Interest Rate %',
        },
        {
          title: 'Service Charges GL Code',
        },
        {
          title: 'Service Charges Rate',
        },
      ],
      dom: 'Blrtip',
    };
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['PG'],
      S_APPL: ["", [Validators.required,Validators.pattern, Validators.min(401),Validators.max(499)]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_GLACNO: ['', [Validators.required]],
      S_INT_ACNO: ['', [Validators.required]],
      S_RECBL_PYBL_INT_ACNO: [''],
      S_INT_APPLICABLE: [false],
      POST_TO_INDIVIDUAL_AC: [false],
      S_PAYABLE_INT_ALLOW: [false],
      S_PRODUCT_DAY_BASE: [0, [Validators.pattern]],
      S_PRODUCT_DAY_BASE_END: [0, [Validators.pattern]],
      MIN_INT_LIMIT: ['', [Validators.pattern]],
      STAND_INSTRUCTION_ALLOW: [false],
      IS_AUTO_CUT_INSTRUCTION: [false],
      IS_ALLOW_SI_MINBAL: [false],
      WITHDRAWAL_APPLICABLE: [false],
      S_INTPAID_ON_CLOSING: [false],
      ROUNDOFF_FACTOR: [''],
      BALANCE_ADD_APPLICABLE: [false],
      PREMATURE_COMPOUND_INT: [false],
      PIGMY_MACHINE_SCHEME: ['', [Validators.pattern]],
      OVERDRAFT_INTEREST_APPLICABLE: [false],
      OVERDRAFT_INTEREST_RATE: ['', [Validators.pattern]],
      SVR_CHARGE_GLCODE: [''],
      SVR_CHARGE_RATE: ['', [Validators.pattern]]
    })
  }

 // Method check scheme code 

 checkscheme(S_APPL){
   let schemecode =document.getElementById("S_APPL") as HTMLInputElement;

  this.pigmyAcSchemeService.getFormData(S_APPL).subscribe(data => {
    this.angForm.setValue({
    'S_APPL': data.S_APPL,
    })
  })
  if(schemecode=S_APPL){
    Swal.fire('Scheme code value already present ');
  }
  else{
    this.submit();
  }
 } 


  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_NAME': formVal.S_NAME,
      'S_SHNAME': formVal.S_SHNAME,
      'S_GLACNO': formVal.S_GLACNO,
      'S_INT_ACNO': formVal.S_INT_ACNO,
      'S_RECBL_PYBL_INT_ACNO': formVal.S_RECBL_PYBL_INT_ACNO,
      'S_INT_APPLICABLE': formVal.S_INT_APPLICABLE,
      'POST_TO_INDIVIDUAL_AC': formVal.POST_TO_INDIVIDUAL_AC,
      'S_PAYABLE_INT_ALLOW': formVal.S_PAYABLE_INT_ALLOW,
      'S_PRODUCT_DAY_BASE': formVal.S_PRODUCT_DAY_BASE,
      'S_PRODUCT_DAY_BASE_END': formVal.S_PRODUCT_DAY_BASE_END,
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT,
      'STAND_INSTRUCTION_ALLOW': formVal.STAND_INSTRUCTION_ALLOW,
      'IS_AUTO_CUT_INSTRUCTION': formVal.IS_AUTO_CUT_INSTRUCTION,
      'IS_ALLOW_SI_MINBAL': formVal.IS_ALLOW_SI_MINBAL,
      'WITHDRAWAL_APPLICABLE': formVal.WITHDRAWAL_APPLICABLE,
      'S_INTPAID_ON_CLOSING': formVal.S_INTPAID_ON_CLOSING,
      'ROUNDOFF_FACTOR': formVal.ROUNDOFF_FACTOR,
      'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      'PREMATURE_COMPOUND_INT': formVal.PREMATURE_COMPOUND_INT,
      'PIGMY_MACHINE_SCHEME': formVal.PIGMY_MACHINE_SCHEME,
      'OVERDRAFT_INTEREST_APPLICABLE': formVal.OVERDRAFT_INTEREST_APPLICABLE,
      'OVERDRAFT_INTEREST_RATE': formVal.OVERDRAFT_INTEREST_RATE,
      'SVR_CHARGE_GLCODE': formVal.SVR_CHARGE_GLCODE,
      'SVR_CHARGE_RATE': formVal.SVR_CHARGE_RATE
    }
    this.pigmyAcSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
          // to reload after insertion of data
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload();
          });
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.pigmyAcSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_NAME': data.S_NAME,
        'S_SHNAME': data.S_SHNAME,
        'S_GLACNO': data.S_GLACNO,
        'S_INT_ACNO': data.S_INT_ACNO,
        'S_RECBL_PYBL_INT_ACNO': data.S_RECBL_PYBL_INT_ACNO,
        'S_INT_APPLICABLE': data.S_INT_APPLICABLE,
        'POST_TO_INDIVIDUAL_AC': data.POST_TO_INDIVIDUAL_AC,
        'S_PAYABLE_INT_ALLOW': data.S_PAYABLE_INT_ALLOW,
        'S_PRODUCT_DAY_BASE': data.S_PRODUCT_DAY_BASE,
        'S_PRODUCT_DAY_BASE_END': data.S_PRODUCT_DAY_BASE_END,
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT,
        'STAND_INSTRUCTION_ALLOW': data.STAND_INSTRUCTION_ALLOW,
        'IS_AUTO_CUT_INSTRUCTION': data.IS_AUTO_CUT_INSTRUCTION,
        'IS_ALLOW_SI_MINBAL': data.IS_ALLOW_SI_MINBAL,
        'WITHDRAWAL_APPLICABLE': data.WITHDRAWAL_APPLICABLE,
        'S_INTPAID_ON_CLOSING': data.S_INTPAID_ON_CLOSING,
        'ROUNDOFF_FACTOR': data.ROUNDOFF_FACTOR,
        'BALANCE_ADD_APPLICABLE': data.BALANCE_ADD_APPLICABLE,
        'PREMATURE_COMPOUND_INT': data.PREMATURE_COMPOUND_INT,
        'PIGMY_MACHINE_SCHEME': data.PIGMY_MACHINE_SCHEME,
        'OVERDRAFT_INTEREST_APPLICABLE': data.OVERDRAFT_INTEREST_APPLICABLE,
        'OVERDRAFT_INTEREST_RATE': data.OVERDRAFT_INTEREST_RATE,
        'SVR_CHARGE_GLCODE': data.SVR_CHARGE_GLCODE,
        'SVR_CHARGE_RATE': data.SVR_CHARGE_RATE
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.pigmyAcSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
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
  // Reset Function
  resetForm() {
    this.createForm();
  }
  //Method for delete data
  // delClickHandler(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to delete Pigmy AC Scheme data.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#229954',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.pigmyAcSchemeService.deleteData(id).subscribe(data1 => {
  //         this.pigmyACScheme = data1;
  //         Swal.fire(
  //           'Deleted!',
  //           'Your data has been deleted.',
  //           'success'
  //         )
  //       }), (error) => {
  //         console.log(error)
  //       }
  //       // to reload after delete of data
  //       this.rerender();
  //     } else if (
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your data is safe.',
  //         'error'
  //       )
  //     }
  //   })
  // }

  OpenLink(val) {
    if (val == 4) {
      this.intrestTrue = true;
      this.StandingTrue = false;
      this.BalanceTrue = false;
      this.OverDraftTrue = false;
      this.ServiceTrue = false;
    }
    if (val == 5) {
      this.intrestTrue = false;
      this.StandingTrue = true;
      this.BalanceTrue = false;
      this.OverDraftTrue = false;
      this.ServiceTrue = false;
    }
    if (val == 6) {
      this.intrestTrue = false;
      this.StandingTrue = false;
      this.BalanceTrue = true;
      this.OverDraftTrue = false;
      this.ServiceTrue = false;
    }

    if (val == 7) {
      this.intrestTrue = false;
      this.StandingTrue = false;
      this.BalanceTrue = false;
      this.OverDraftTrue = true;
      this.ServiceTrue = false;
    }

    if (val == 8) {
      this.intrestTrue = false;
      this.StandingTrue = false;
      this.BalanceTrue = false;
      this.OverDraftTrue = false;
      this.ServiceTrue = true;
    }
  }

  //Function to enable/Disable fields according selection of Interest applicable list
  isIntrestApplicable($event) {
    if ($event.target.checked) {
      document.getElementById('POST_TO_INDIVIDUAL_AC').removeAttribute("disabled");
      document.getElementById('S_PAYABLE_INT_ALLOW').removeAttribute("disabled");
      document.getElementById('S_PRODUCT_DAY_BASE').removeAttribute("disabled");
      document.getElementById('S_PRODUCT_DAY_BASE_END').removeAttribute("disabled");
      document.getElementById('MIN_INT_LIMIT').removeAttribute("disabled");
    }
    else {
      document.getElementById('POST_TO_INDIVIDUAL_AC').setAttribute("disabled", "true");
      document.getElementById('S_PAYABLE_INT_ALLOW').setAttribute("disabled", "true");
      document.getElementById('S_PRODUCT_DAY_BASE').setAttribute("disabled", "true");
      document.getElementById('S_PRODUCT_DAY_BASE_END').setAttribute("disabled", "true");
      document.getElementById('MIN_INT_LIMIT').setAttribute("disabled", "true");
      this.angForm.controls.POST_TO_INDIVIDUAL_AC.reset();
      this.angForm.controls.S_PAYABLE_INT_ALLOW.reset();
      this.angForm.controls.S_PRODUCT_DAY_BASE.reset();
      this.angForm.controls.S_PRODUCT_DAY_BASE_END.reset();
      this.angForm.controls.MIN_INT_LIMIT.reset();
    }
  }

  //Function to required property according selection of payable interest 
  isPaybaleInterestAllow($event) {
    if ($event.target.checked) {
      this.IS_RECBL_PYBL_INT_ACNO = true;
    }
    else {
      this.IS_RECBL_PYBL_INT_ACNO = false;
    }
  }

  //Function to enable/Disable fields according selection of product day base start day
  isProductDayBase(S_PRODUCT_DAY_BASE) {
    if (S_PRODUCT_DAY_BASE == 0) {
      document.getElementById('S_PRODUCT_DAY_BASE_MONTH_BEGIN').removeAttribute("disabled");
      document.getElementById('S_PRODUCT_DAY_BASE_MONTH_END').removeAttribute("disabled");
    }
    else {
      document.getElementById('S_PRODUCT_DAY_BASE_MONTH_BEGIN').setAttribute("disabled", "false");
      document.getElementById('S_PRODUCT_DAY_BASE_MONTH_END').setAttribute("disabled", "false");
    }
  }

  //Function to enable/Disable fields according selection of product day base end day
  isProductDayBaseEndDay(S_PRODUCT_DAY_BASE_END) {
    if (S_PRODUCT_DAY_BASE_END == 0) {
      document.getElementById('S_PRODUCT_DAY_BASE_END_MONTH_BEGIN').removeAttribute("disabled");
      document.getElementById('S_PRODUCT_DAY_BASE_END_MONTH_END').removeAttribute("disabled");
    }
    else {
      document.getElementById('S_PRODUCT_DAY_BASE_END_MONTH_BEGIN').setAttribute("disabled", "false");
      document.getElementById('S_PRODUCT_DAY_BASE_END_MONTH_END').setAttribute("disabled", "false");
    }
  }

  //Function to enable/Disable fields according selection of overdraft Interest applicable 
  isOverdraftInterestApplicable($event) {
    if ($event.target.checked) {
      document.getElementById('OVERDRAFT_INTEREST_RATE').removeAttribute("disabled");
      this.IS_OVERDRAFT_INTEREST_RATE = true;
    }
    else {
      document.getElementById('OVERDRAFT_INTEREST_RATE').setAttribute("disabled", "true");
      this.IS_OVERDRAFT_INTEREST_RATE = false;
      this.angForm.controls.OVERDRAFT_INTEREST_RATE.reset();
    }
  }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
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

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
