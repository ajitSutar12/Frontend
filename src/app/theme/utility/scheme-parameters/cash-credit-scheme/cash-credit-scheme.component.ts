import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { CashcreditService } from './cash-credit-scheme.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
//Dropdown service file
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { OverdraftInterestPostService } from '../../../../shared/dropdownService/overdraft-interest-post.service'
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
interface Cashcredit {
  S_ACNOTYPE: string;
  S_APPL: string;
  S_NAME: string;
  S_SHNAME: string;
  S_GLACNO: string;
  S_INT_ACNO: string;
  S_RECBL_PYBL_INT_ACNO: string;
  S_PENAL_ACNO: string;
  S_RECBL_PENAL_ACNO: string;
  S_RECBL_ODUE_INT_ACNO: string;
  S_INT_APPLICABLE: string;
  POST_TO_INDIVIDUAL_AC: string;
  S_RECEIVABLE_INT_ALLOW: string;
  IS_SHOW_INT_AS_RECINT_IFDUEBAL: string;
  IS_INTUPTODATE: string;
  IS_NO_POST_INT_AFT_OD: string;
  MIN_INT_LIMIT: string;
  ROUNDOFF_FACTOR: string;
  S_PENAL_INT_APPLICABLE: string;
  IS_POST_PENAL_TO_AC: string;
  POST_PENALINT_IN_INTEREST: string;
  IS_CAL_EXTRAPENAL_FOR_CC: string;
  S_PENAL_INT_RATE: string;
  OVERDRAFT_INTEREST_APPLICABLE: string;
  OVERDRAFT_INTEREST_RATE: string;
  ODPENALTY_ON_EXPIRED_LEDGERBAL: string;
  INT_INSTRUCTION_ALLOW: string;
  STAND_INSTRUCTION_ALLOW: string;
  BALANCE_ADD_APPLICABLE: string;
  CHEQUEBOOK_MIN_BAL: string;
  IS_DEPO_LOAN: string;
  IS_GOLDLOAN: string;
}

@Component({
  selector: 'app-cash-credit-scheme',
  templateUrl: './cash-credit-scheme.component.html',
  styleUrls: ['./cash-credit-scheme.component.scss']
})
export class CashCreditSchemeComponent implements OnInit {
  //api 
  url = environment.base_url;
  //least routing
  InterestApplicableTrue = true;
  PenalInterestApplicableTrue = false;
  OverDraftInteresttypeTrue = false;
  otherSettingsTrue = false;
  cashCredittypeTrue = false;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  cashcredit: Cashcredit[];
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
  //variable to get Id to update
  updateID: number = 0;

  //Dropdown option variable
  acMaster: any
  OverDraft: Array<IOption> = this.overdraftInterestPostService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  constructor(
    private http: HttpClient,
    private cashcreditservice: CashcreditService,
    private overdraftInterestPostService: OverdraftInterestPostService,
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
            this.url + '/cash-credit-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.cashcredit = resp.data;
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
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          }
        },
        {
          title: 'Type',
          data: 'S_ACNOTYPE',
        },
        {
          title: 'Scheme Code',
          data: 'S_APPL',
        },
        {
          title: 'Description',
          data: 'S_NAME',
        },
        {
          title: 'Short Name',
          data: 'S_SHNAME',
        },
        {
          title: 'G.L.A/c No.',
          data: 'S_GLACNO',
        },
        {
          title: 'Interest GL A/c',
          data: 'S_INT_ACNO',
        },
        {
          title: 'Receivable Int. A/c',
          data: 'S_RECBL_PYBL_INT_ACNO',
        },
        {
          title: 'Penal Int. A/c',
          data: 'S_PENAL_ACNO',
        },
        {
          title: 'Recble Penal Int. A/c',
          data: 'S_RECBL_PENAL_ACNO',
        },
        {
          title: 'Recble Overdue Int.',
          data: 'S_RECBL_ODUE_INT_ACNO',
        },
        {
          title: 'Is Interest Applicable ?',
          data: 'S_INT_APPLICABLE',
        },
        {
          title: 'Is Post Interest to A/c ?',
          data: 'POST_TO_INDIVIDUAL_AC',
        },
        {
          title: 'Is Balance Entry Allow ?',
          data: 'S_RECEIVABLE_INT_ALLOW',
        },
        {
          title: 'Is Receivable Int. Allowed ?',
          data: 'IS_SHOW_INT_AS_RECINT_IFDUEBAL',
        },
        {
          title: 'Post as Receivable Interest, if Account goes in Overdue ?',
          data: 'IS_SHOW_INT_AS_RECINT_IFDUEBAL',
        },
        {
          title: 'Is Dont Post Interest After Expiry Date ?',
          data: 'IS_INTUPTODATE',
        },
        {
          title: 'Is Dont Post Interest After OD',
          data: 'IS_NO_POST_INT_AFT_OD',
        },
        {
          title: 'Minimum Interest Amount',
          data: 'MIN_INT_LIMIT',
        },
        {
          title: 'Interest Round Off Factor in Paise',
          data: 'ROUNDOFF_FACTOR',
        },
        {
          title: 'Penal Interest Applicable ?',
          data: 'S_PENAL_INT_APPLICABLE',
        },
        {
          title: 'Post Penal Interest to Account ?',
          data: 'IS_POST_PENAL_TO_AC',
        },
        {
          title: 'Add Penal Interest in Interest Amount ?',
          data: 'POST_PENALINT_IN_INTEREST',
        },
        {
          title: 'Calculate Extra Penal for CC Overdraf',
          data: 'IS_CAL_EXTRAPENAL_FOR_CC',
        },
        {
          title: 'Penal Interest Rate %',
          data: 'S_PENAL_INT_RATE',
        },
        {
          title: 'OverDraft Interest Post / Add in',
          data: 'OVERDRAFT_INTEREST_APPLICABLE',
        },
        {
          title: 'Overdraf Interest Rate %',
          data: 'OVERDRAFT_INTEREST_RATE',
        },
        {
          title: 'Is OD Interest Calculate Only after Account Expiry Date ?',
          data: 'ODPENALTY_ON_EXPIRED_LEDGERBAL',
        },
        {
          title: 'Is Interest Instruction Applicable ?',
          data: 'INT_INSTRUCTION_ALLOW',
        },
        {
          title: 'Is Standing Instruction Applicable ?',
          data: 'STAND_INSTRUCTION_ALLOW',
        },
        {
          title: 'Is Balance Entry Allowed ?',
          data: 'BALANCE_ADD_APPLICABLE',
        },
        {
          title: 'Cheque Book Minimum Balance',
          data: 'CHEQUEBOOK_MIN_BAL',
        },
        {
          title: 'Is Deposit against CC',
          data: 'IS_DEPO_LOAN',
        },
        {
          title: 'Is Gold against CC',
          data: 'IS_GOLDLOAN',
        }
        // {
        //   title: 'Other type of CC',
        //   data: 'IS_DEPO_LOAN=0, IS_GOLDLOAN= 0',
        // }

      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.dataSub = this.overdraftInterestPostService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
    })
  }


  // enable-disable checkbox event
  Interest_applicable($event) {
    if ($event.target.checked) {
      document.getElementById('POST_TO_INDIVIDUAL_AC').removeAttribute("disabled");
      document.getElementById('S_RECEIVABLE_INT_ALLOW').removeAttribute("disabled");
      document.getElementById('IS_SHOW_INT_AS_RECINT_IFDUEBAL').removeAttribute("disabled");
      document.getElementById('IS_INTUPTODATE').removeAttribute("disabled");
      document.getElementById('IS_NO_POST_INT_AFT_OD').removeAttribute("disabled");
      document.getElementById('MIN_INT_LIMIT').removeAttribute("disabled");
      document.getElementById('ROUNDOFF_FACTOR').removeAttribute("disabled");
    }
    else {
      document.getElementById('POST_TO_INDIVIDUAL_AC').setAttribute("disabled", "true")
      this.angForm.controls.POST_TO_INDIVIDUAL_AC.reset();
      document.getElementById('S_RECEIVABLE_INT_ALLOW').setAttribute("disabled", "true")
      this.angForm.controls.S_RECEIVABLE_INT_ALLOW.reset();
      document.getElementById('IS_SHOW_INT_AS_RECINT_IFDUEBAL').setAttribute("disabled", "true")
      this.angForm.controls.IS_SHOW_INT_AS_RECINT_IFDUEBAL.reset();
      document.getElementById('IS_INTUPTODATE').setAttribute("disabled", "true")
      this.angForm.controls.IS_INTUPTODATE.reset();
      document.getElementById('IS_NO_POST_INT_AFT_OD').setAttribute("disabled", "true")
      this.angForm.controls.IS_NO_POST_INT_AFT_OD.reset();
      document.getElementById('MIN_INT_LIMIT').setAttribute("disabled", "true")
      this.angForm.controls.MIN_INT_LIMIT.reset();
      document.getElementById('ROUNDOFF_FACTOR').setAttribute("disabled", "true")
      this.angForm.controls.ROUNDOFF_FACTOR.reset();
    }
  }

  PenalInterest_applicable($event) {
    if ($event.target.checked) {
      document.getElementById('IS_POST_PENAL_TO_AC').removeAttribute("disabled");
      document.getElementById('POST_PENALINT_IN_INTEREST').removeAttribute("disabled");
      document.getElementById('IS_CAL_EXTRAPENAL_FOR_CC').removeAttribute("disabled");
      document.getElementById('S_PENAL_INT_RATE').removeAttribute("disabled");
    }
    else {
      document.getElementById('IS_POST_PENAL_TO_AC').setAttribute("disabled", "true")
      this.angForm.controls.IS_POST_PENAL_TO_AC.reset();
      document.getElementById('POST_PENALINT_IN_INTEREST').setAttribute("disabled", "true")
      this.angForm.controls.POST_PENALINT_IN_INTEREST.reset();
      document.getElementById('IS_CAL_EXTRAPENAL_FOR_CC').setAttribute("disabled", "true")
      this.angForm.controls.IS_CAL_EXTRAPENAL_FOR_CC.reset();
      document.getElementById('S_PENAL_INT_RATE').setAttribute("disabled", "true")
      this.angForm.controls.S_PENAL_INT_RATE.reset();
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['CC'],
      S_APPL: ['', [Validators.required, Validators.pattern]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_GLACNO: ['', [Validators.required, Validators.pattern]],
      S_INT_ACNO: ['', [Validators.required, Validators.pattern]],
      S_RECBL_PYBL_INT_ACNO: [''],
      S_PENAL_ACNO: [''],
      S_RECBL_PENAL_ACNO: [''],
      S_RECBL_ODUE_INT_ACNO: [''],
      S_INT_APPLICABLE: [''],
      POST_TO_INDIVIDUAL_AC: [''],
      S_RECEIVABLE_INT_ALLOW: [''],
      IS_SHOW_INT_AS_RECINT_IFDUEBAL: [''],
      IS_INTUPTODATE: [''],
      IS_NO_POST_INT_AFT_OD: [''],
      MIN_INT_LIMIT: ['', [Validators.pattern]],
      ROUNDOFF_FACTOR: [''],
      S_PENAL_INT_APPLICABLE: [''],
      IS_POST_PENAL_TO_AC: [''],
      POST_PENALINT_IN_INTEREST: [''],
      IS_CAL_EXTRAPENAL_FOR_CC: [''],
      S_PENAL_INT_RATE: [''],
      OVERDRAFT_INTEREST_APPLICABLE: [''],
      OVERDRAFT_INTEREST_RATE: [''],
      ODPENALTY_ON_EXPIRED_LEDGERBAL: [''],
      INT_INSTRUCTION_ALLOW: [''],
      STAND_INSTRUCTION_ALLOW: [''],
      BALANCE_ADD_APPLICABLE: [''],
      CHEQUEBOOK_MIN_BAL: ['', [Validators.pattern]],
      IS_DEPO_LOAN: [''],//radiobutton
      IS_GOLDLOAN: [''], //radiobutton
    });
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
      'S_PENAL_ACNO': formVal.S_PENAL_ACNO,
      'S_RECBL_PENAL_ACNO': formVal.S_RECBL_PENAL_ACNO,
      'S_RECBL_ODUE_INT_ACNO': formVal.S_RECBL_ODUE_INT_ACNO,
      'S_INT_APPLICABLE': formVal.S_INT_APPLICABLE,
      'POST_TO_INDIVIDUAL_AC': formVal.POST_TO_INDIVIDUAL_AC,
      'S_RECEIVABLE_INT_ALLOW': formVal.S_RECEIVABLE_INT_ALLOW,
      'IS_SHOW_INT_AS_RECINT_IFDUEBAL': formVal.IS_SHOW_INT_AS_RECINT_IFDUEBAL,
      'IS_INTUPTODATE': formVal.IS_INTUPTODATE,
      'IS_NO_POST_INT_AFT_OD': formVal.IS_NO_POST_INT_AFT_OD,
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT,
      'ROUNDOFF_FACTOR': formVal.ROUNDOFF_FACTOR,
      'S_PENAL_INT_APPLICABLE': formVal.S_PENAL_INT_APPLICABLE,
      'IS_POST_PENAL_TO_AC': formVal.IS_POST_PENAL_TO_AC,
      'POST_PENALINT_IN_INTEREST': formVal.POST_PENALINT_IN_INTEREST,
      'IS_CAL_EXTRAPENAL_FOR_CC': formVal.IS_CAL_EXTRAPENAL_FOR_CC,
      'S_PENAL_INT_RATE': formVal.S_PENAL_INT_RATE,
      'OVERDRAFT_INTEREST_APPLICABLE': formVal.OVERDRAFT_INTEREST_APPLICABLE,
      'OVERDRAFT_INTEREST_RATE': formVal.OVERDRAFT_INTEREST_RATE,
      'ODPENALTY_ON_EXPIRED_LEDGERBAL': formVal.ODPENALTY_ON_EXPIRED_LEDGERBAL,
      // 'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      'INT_INSTRUCTION_ALLOW': formVal.INT_INSTRUCTION_ALLOW,
      'STAND_INSTRUCTION_ALLOW': formVal.STAND_INSTRUCTION_ALLOW,
      'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      'CHEQUEBOOK_MIN_BAL': formVal.CHEQUEBOOK_MIN_BAL,
      'IS_DEPO_LOAN': formVal.IS_DEPO_LOAN,
      'IS_GOLDLOAN': formVal.IS_GOLDLOAN,
    }
    this.cashcreditservice.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.angForm.reset();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.cashcreditservice.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_NAME': data.S_NAME,
        'S_SHNAME': data.S_SHNAME,
        'S_GLACNO': data.S_GLACNO,
        'S_INT_ACNO': data.S_INT_ACNO,
        'S_RECBL_PYBL_INT_ACNO': data.S_RECBL_PYBL_INT_ACNO,
        'S_PENAL_ACNO': data.S_PENAL_ACNO,
        'S_RECBL_PENAL_ACNO': data.S_RECBL_PENAL_ACNO,
        'S_RECBL_ODUE_INT_ACNO': data.S_RECBL_ODUE_INT_ACNO,
        'S_INT_APPLICABLE': data.S_INT_APPLICABLE,
        'POST_TO_INDIVIDUAL_AC': data.POST_TO_INDIVIDUAL_AC,
        'S_RECEIVABLE_INT_ALLOW': data.S_RECEIVABLE_INT_ALLOW,
        'IS_SHOW_INT_AS_RECINT_IFDUEBAL': data.IS_SHOW_INT_AS_RECINT_IFDUEBAL,
        'IS_INTUPTODATE': data.IS_INTUPTODATE,
        'IS_NO_POST_INT_AFT_OD': data.IS_NO_POST_INT_AFT_OD,
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT,
        'ROUNDOFF_FACTOR': data.ROUNDOFF_FACTOR,
        'S_PENAL_INT_APPLICABLE': data.S_PENAL_INT_APPLICABLE,
        'IS_POST_PENAL_TO_AC': data.IS_POST_PENAL_TO_AC,
        'POST_PENALINT_IN_INTEREST': data.POST_PENALINT_IN_INTEREST,
        'IS_CAL_EXTRAPENAL_FOR_CC': data.IS_CAL_EXTRAPENAL_FOR_CC,
        'S_PENAL_INT_RATE': data.S_PENAL_INT_RATE,
        'OVERDRAFT_INTEREST_APPLICABLE': data.OVERDRAFT_INTEREST_APPLICABLE,
        'OVERDRAFT_INTEREST_RATE': data.OVERDRAFT_INTEREST_RATE,
        'ODPENALTY_ON_EXPIRED_LEDGERBAL': data.ODPENALTY_ON_EXPIRED_LEDGERBAL,
        // 'BALANCE_ADD_APPLICABLE': data.BALANCE_ADD_APPLICABLE,
        'INT_INSTRUCTION_ALLOW': data.INT_INSTRUCTION_ALLOW,
        'STAND_INSTRUCTION_ALLOW': data.STAND_INSTRUCTION_ALLOW,
        'BALANCE_ADD_APPLICABLE': data.BALANCE_ADD_APPLICABLE,
        'CHEQUEBOOK_MIN_BAL': data.CHEQUEBOOK_MIN_BAL,
        'IS_DEPO_LOAN': data.IS_DEPO_LOAN,
        'IS_GOLDLOAN': data.IS_GOLDLOAN,
      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.cashcreditservice.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.angForm.reset();
    })
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete narration data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cashcreditservice.deleteData(id).subscribe(data1 => {
          this.cashcredit = data1;
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
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  OpenLink(val) {

    if (val == 31) {
      this.InterestApplicableTrue = true;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }
    if (val == 32) {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = true;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }

    if (val == 33) {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = true;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }

    if (val == 34) {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = true;
      this.cashCredittypeTrue = false;
    }

    if (val == 35) {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = true;
    }
  }
}
