import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
//files for dropdown
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//default service files for dropdown
import { InterestApplicableTypeService } from '../../../../shared/elements/interest-applicable-type.service';
// Service File For Handling CRUD Operation
import { CurrentSchemeService } from './current-scheme.service';
// Used to Call API
import { HttpClient } from '@angular/common/http'
//Dropdown service file
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface CurrentScheme {
  S_ACNOTYPE: string
  S_APPL: number
  S_NAME: string
  S_SHNAME: string
  S_GLACNO: string
  S_INT_ACNO: string
  S_INT_APPLICABLE: boolean
  POST_TO_INDIVIDUAL_AC: boolean
  S_PRODUCT_DAY_BASE: string
  S_PRODUCT_DAY_BASE_END: string
  MIN_INT_LIMIT: number
  STAND_INSTRUCTION_ALLOW: boolean
  ROUNDOFF_FACTOR: number
  CHEQUEBOOK_MIN_BAL: number
  BALANCE_ADD_APPLICABLE: boolean
  DORMANT_FLAG_APPLICABLE: boolean
  OVERDRAFT_INTEREST_APPLICABLE: string
  OVERDRAFT_INTEREST_RATE: number
}

@Component({
  selector: 'app-current-scheme',
  templateUrl: './current-scheme.component.html',
  styleUrls: ['./current-scheme.component.scss']
})
export class CurrentSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  currentScheme: CurrentScheme[];
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

  //Dropdown option variable
  acMaster: any
  interestApplicableTypeOption: Array<IOption> = this.interestApplicableTypeService.getCharacters();

  private dataSub: Subscription = null;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  //variables to route list
  InterestApplicable = true;
  StandingInstruction = false;
  ChequeBookMinBal = false;
  BalanceEntryAllow = false;
  OverdraftIntApplicable = false;

  //variables to add enable/disable functionality
  S_PRODUCT_DAY_BASE;
  S_PRODUCT_DAY_BASE_END;
  OVERDRAFT_INTEREST_APPLICABLE;

  constructor(
    private http: HttpClient,
    private currentSchemeService: CurrentSchemeService,
    private interestApplicableTypeService: InterestApplicableTypeService,
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
            'http://localhost:4000/current-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.currentScheme = resp.data;
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
          title: 'G.L. A/c No.'
        },
        {
          title: 'Interest GL A/c'
        },
        {
          title: 'Is Interest Applicable? ',
        },
        {
          title: 'Is Post Interest to A/c ? ',
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
          title: 'Interest Round Off Factor in Paise',
        },
        {
          title: 'Cheque Book Minimum Balance',
        },
        {
          title: 'Is Balance Entry Allow ?',
        },
        {
          title: 'Is Allow Dormat Flag Updation ?',
        },
        {
          title: 'Interest Applicable Type',
        },
        {
          title: 'Overdraft Interest Rate',
        }
      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.dataSub = this.interestApplicableTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
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
      S_ACNOTYPE: ['CA'],
      S_APPL: ['', [Validators.required, Validators.pattern]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_GLACNO: ['', [Validators.required]],
      S_INT_ACNO: ['', [Validators.required]],
      S_INT_APPLICABLE: [false],
      POST_TO_INDIVIDUAL_AC: [false],
      S_PRODUCT_DAY_BASE: ['', [Validators.required, Validators.pattern, Validators.max(31)]],
      S_PRODUCT_DAY_BASE_END: ['', [Validators.required, Validators.pattern, Validators.max(31)]],
      MIN_INT_LIMIT: ['', [Validators.pattern]],
      STAND_INSTRUCTION_ALLOW: [false],
      ROUNDOFF_FACTOR: ['', [Validators.pattern]],
      CHEQUEBOOK_MIN_BAL: ['', [Validators.pattern]],
      BALANCE_ADD_APPLICABLE: [false],
      DORMANT_FLAG_APPLICABLE: [false],
      OVERDRAFT_INTEREST_APPLICABLE: [''],
      OVERDRAFT_INTEREST_RATE: ['', [Validators.pattern]]
    })
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
      'S_INT_APPLICABLE': formVal.S_INT_APPLICABLE,
      'POST_TO_INDIVIDUAL_AC': formVal.POST_TO_INDIVIDUAL_AC,
      'S_PRODUCT_DAY_BASE': formVal.S_PRODUCT_DAY_BASE,
      'S_PRODUCT_DAY_BASE_END': formVal.S_PRODUCT_DAY_BASE_END,
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT,
      'STAND_INSTRUCTION_ALLOW': formVal.STAND_INSTRUCTION_ALLOW,
      'ROUNDOFF_FACTOR': formVal.ROUNDOFF_FACTOR,
      'CHEQUEBOOK_MIN_BAL': formVal.CHEQUEBOOK_MIN_BAL,
      'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      'DORMANT_FLAG_APPLICABLE': formVal.DORMANT_FLAG_APPLICABLE,
      'OVERDRAFT_INTEREST_APPLICABLE': formVal.OVERDRAFT_INTEREST_APPLICABLE,
      'OVERDRAFT_INTEREST_RATE': formVal.OVERDRAFT_INTEREST_RATE
    }
    this.currentSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
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
    this.currentSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_NAME': data.S_NAME,
        'S_SHNAME': data.S_SHNAME,
        'S_GLACNO': data.S_GLACNO,
        'S_INT_ACNO': data.S_INT_ACNO,
        'S_INT_APPLICABLE': data.S_INT_APPLICABLE,
        'POST_TO_INDIVIDUAL_AC': data.POST_TO_INDIVIDUAL_AC,
        'S_PRODUCT_DAY_BASE': data.S_PRODUCT_DAY_BASE,
        'S_PRODUCT_DAY_BASE_END': data.S_PRODUCT_DAY_BASE_END,
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT,
        'STAND_INSTRUCTION_ALLOW': data.STAND_INSTRUCTION_ALLOW,
        'ROUNDOFF_FACTOR': data.ROUNDOFF_FACTOR,
        'CHEQUEBOOK_MIN_BAL': data.CHEQUEBOOK_MIN_BAL,
        'BALANCE_ADD_APPLICABLE': data.BALANCE_ADD_APPLICABLE,
        'DORMANT_FLAG_APPLICABLE': data.DORMANT_FLAG_APPLICABLE,
        'OVERDRAFT_INTEREST_APPLICABLE': data.OVERDRAFT_INTEREST_APPLICABLE,
        'OVERDRAFT_INTEREST_RATE': data.OVERDRAFT_INTEREST_RATE
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.currentSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    })
  }

  //reset form
  resetForm() {
    this.createForm();
  }

  //Method for delete data
  // delClickHandler(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to delete Current Scheme data.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#229954',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.currentSchemeService.deleteData(id).subscribe(data1 => {
  //         this.authorityMaster = data1;
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
    if (val == 41) {
      this.InterestApplicable = true;
      this.StandingInstruction = false;
      this.ChequeBookMinBal = false;
      this.BalanceEntryAllow = false;
      this.OverdraftIntApplicable = false;
    }
    if (val == 42) {
      this.InterestApplicable = false;
      this.StandingInstruction = true;
      this.ChequeBookMinBal = false;
      this.BalanceEntryAllow = false;
      this.OverdraftIntApplicable = false;
    }
    if (val == 43) {
      this.InterestApplicable = false;
      this.StandingInstruction = false;
      this.ChequeBookMinBal = true;
      this.BalanceEntryAllow = false;
      this.OverdraftIntApplicable = false;
    }
    if (val == 44) {
      this.InterestApplicable = false;
      this.StandingInstruction = false;
      this.ChequeBookMinBal = false;
      this.BalanceEntryAllow = true;
      this.OverdraftIntApplicable = false;
    }
    if (val == 45) {
      this.InterestApplicable = false;
      this.StandingInstruction = false;
      this.ChequeBookMinBal = false;
      this.BalanceEntryAllow = false;
      this.OverdraftIntApplicable = true;
    }
  }

  //Function to enable/Disable fields according selection of Interest applicable list
  isIntrestApplicable($event) {
    if ($event.target.checked) {
      document.getElementById('POST_TO_INDIVIDUAL_AC').removeAttribute("disabled");
      document.getElementById('S_PRODUCT_DAY_BASE').removeAttribute("disabled");
      document.getElementById('S_PRODUCT_DAY_BASE_END').removeAttribute("disabled");
      document.getElementById('MIN_INT_LIMIT').removeAttribute("disabled");
    }
    else {
      document.getElementById('POST_TO_INDIVIDUAL_AC').setAttribute("disabled", "true");
      document.getElementById('S_PRODUCT_DAY_BASE').setAttribute("disabled", "true");
      document.getElementById('S_PRODUCT_DAY_BASE_END').setAttribute("disabled", "true");
      document.getElementById('MIN_INT_LIMIT').setAttribute("disabled", "true");
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

  //Function to enable/Disable fields according selection of overdraft Interest applicable list
  isOverdraftInterest() {
    if (this.OVERDRAFT_INTEREST_APPLICABLE == 'NotApplicable') {
      document.getElementById('OVERDRAFT_INTEREST_RATE').setAttribute("disabled", "false");
    }
    else {
      document.getElementById('OVERDRAFT_INTEREST_RATE').removeAttribute("disabled");
    }
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
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
