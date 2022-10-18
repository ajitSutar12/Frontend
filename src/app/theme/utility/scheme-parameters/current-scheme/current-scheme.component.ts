import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { environment } from '../../../../../environments/environment'
import { NgSelectConfig } from '@ng-select/ng-select';
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
  ngsglac: any = null
  ngintglac: any = null
  ngintapplicapble: any = null
  //ngoverdraft:any=null

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
  filterData = {};
  newbtnShow: boolean;

  constructor(
    private http: HttpClient,
    private currentSchemeService: CurrentSchemeService,
    private interestApplicableTypeService: InterestApplicableTypeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) { }


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
        this.http
          .post<DataTableResponse>(
            this.url + '/current-scheme',
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
          title: 'GL Account Number',
          data: 'S_GLACNO',
        },
        {
          title: 'Interest GL Account',
          data: 'S_INT_ACNO',
        },
        // {
        //   title: 'Is Interest Applicable? ',
        //   data: 'S_INT_APPLICABLE',
        // },
        // {
        //   title: 'Is Post Interest to A/c ? ',
        //   data: 'POST_TO_INDIVIDUAL_AC',
        // },
        // {
        //   title: 'Product Base Start Day',
        //   data: 'S_PRODUCT_DAY_BASE',
        // },
        // {
        //   title: 'Product Base End Day',
        //   data: 'S_PRODUCT_DAY_BASE_END',
        // },
        // {
        //   title: 'Minimum Interest Amount',
        //   data: 'MIN_INT_LIMIT',
        // },
        // {
        //   title: 'Is Standing Instruction Applicable ?',
        //   data: 'STAND_INSTRUCTION_ALLOW',
        // },
        // {
        //   title: 'Interest Round Off Factor in Paise',
        //   data: 'ROUNDOFF_FACTOR',
        // },
        // {
        //   title: 'Cheque Book Minimum Balance',
        //   data: 'CHEQUEBOOK_MIN_BAL',
        // },
        // {
        //   title: 'Is Balance Entry Allow ?',
        //   data: 'BALANCE_ADD_APPLICABLE',
        // },
        // {
        //   title: 'Is Allow Dormat Flag Updation ?',
        //   data: 'DORMANT_FLAG_APPLICABLE',
        // },
        // {
        //   title: 'Interest Applicable Type',
        //   data: 'OVERDRAFT_INTEREST_APPLICABLE',
        // },
        // {
        //   title: 'Overdraft Interest Rate',
        //   data: 'OVERDRAFT_INTEREST_RATE',
        // }
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

      S_APPL: ["", [Validators.required, Validators.pattern, Validators.min(151), Validators.max(199)]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_GLACNO: ['', [Validators.required]],
      S_INT_ACNO: ['', [Validators.required]],
      S_INT_APPLICABLE: [],
      POST_TO_INDIVIDUAL_AC: [],
      S_PRODUCT_DAY_BASE: ['', [Validators.required, Validators.pattern, Validators.max(31)]],
      S_PRODUCT_DAY_BASE_END: ['', [Validators.required, Validators.pattern, Validators.max(31)]],
      MIN_INT_LIMIT: ['', [Validators.pattern]],
      STAND_INSTRUCTION_ALLOW: [],
      ROUNDOFF_FACTOR: ['', [Validators.pattern]],
      CHEQUEBOOK_MIN_BAL: ['', [Validators.pattern]],
      BALANCE_ADD_APPLICABLE: [],
      DORMANT_FLAG_APPLICABLE: [],
      OVERDRAFT_INTEREST_APPLICABLE: [''],
      OVERDRAFT_INTEREST_RATE: ['', [Validators.pattern]]
    })
  }

  //check  if margin values are below 100
  checkinterest(ele: any) {
    //check  if given value  is below 100
    console.log(ele);
    if (ele <= 100) {
      console.log(ele);
    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }
  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_NAME': formVal.S_NAME,
      'S_SHNAME': formVal.S_SHNAME,
      'S_GLACNO': formVal.S_GLACNO,
      'S_INT_ACNO': formVal.S_INT_ACNO,
      'S_INT_APPLICABLE': (formVal.S_INT_APPLICABLE == true ? '1' : '0'),
      'POST_TO_INDIVIDUAL_AC': (formVal.POST_TO_INDIVIDUAL_AC == true ? '1' : '0'),
      'STAND_INSTRUCTION_ALLOW': (formVal.STAND_INSTRUCTION_ALLOW == true ? '1' : '0'),
      'BALANCE_ADD_APPLICABLE': (formVal.BALANCE_ADD_APPLICABLE == true ? '1' : '0'),
      'DORMANT_FLAG_APPLICABLE': (formVal.DORMANT_FLAG_APPLICABLE == true ? '1' : '0'),
      'S_PRODUCT_DAY_BASE': formVal.S_PRODUCT_DAY_BASE,
      'S_PRODUCT_DAY_BASE_END': formVal.S_PRODUCT_DAY_BASE_END,
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT,
      'ROUNDOFF_FACTOR': formVal.ROUNDOFF_FACTOR,
      'CHEQUEBOOK_MIN_BAL': formVal.CHEQUEBOOK_MIN_BAL,
      'OVERDRAFT_INTEREST_APPLICABLE': formVal.OVERDRAFT_INTEREST_APPLICABLE,
      'OVERDRAFT_INTEREST_RATE': formVal.OVERDRAFT_INTEREST_RATE
    }
    this.currentSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      // to reload after insertion of data
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
    this.newbtnShow = true
    this.angForm.controls['S_APPL'].disable()
    this.currentSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngsglac = Number(data.S_GLACNO)
      this.ngintglac = Number(data.S_INT_ACNO)
      this.angForm.patchValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_NAME': data.S_NAME,
        'S_SHNAME': data.S_SHNAME,
        // 'S_GLACNO': data.S_GLACNO,
        // 'S_INT_ACNO': data.S_INT_ACNO,
        'S_INT_APPLICABLE': (data.S_INT_APPLICABLE == '1' ? true : false),
        'POST_TO_INDIVIDUAL_AC': (data.POST_TO_INDIVIDUAL_AC == '1' ? true : false),
        'S_PRODUCT_DAY_BASE': data.S_PRODUCT_DAY_BASE,
        'S_PRODUCT_DAY_BASE_END': data.S_PRODUCT_DAY_BASE_END,
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT,
        'STAND_INSTRUCTION_ALLOW': (data.STAND_INSTRUCTION_ALLOW == '1' ? true : false),
        'ROUNDOFF_FACTOR': data.ROUNDOFF_FACTOR,
        'CHEQUEBOOK_MIN_BAL': data.CHEQUEBOOK_MIN_BAL,
        'BALANCE_ADD_APPLICABLE': (data.BALANCE_ADD_APPLICABLE == '1' ? true : false),
        'DORMANT_FLAG_APPLICABLE': (data.DORMANT_FLAG_APPLICABLE == '1' ? true : false),
        'OVERDRAFT_INTEREST_APPLICABLE': data.OVERDRAFT_INTEREST_APPLICABLE,
        'OVERDRAFT_INTEREST_RATE': data.OVERDRAFT_INTEREST_RATE
      })

      if (data.S_INT_APPLICABLE == '1') {
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
        this.angForm.controls['POST_TO_INDIVIDUAL_AC'].reset()
        this.angForm.controls['S_PRODUCT_DAY_BASE'].reset()
        this.angForm.controls['S_PRODUCT_DAY_BASE_END'].reset()
        this.angForm.controls['MIN_INT_LIMIT'].reset()
      }
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['S_INT_APPLICABLE'] = (data.S_INT_APPLICABLE == true ? '1' : '0')
    data['POST_TO_INDIVIDUAL_AC'] = (data.POST_TO_INDIVIDUAL_AC == true ? '1' : '0')
    data['STAND_INSTRUCTION_ALLOW'] = (data.STAND_INSTRUCTION_ALLOW == true ? '1' : '0')
    data['BALANCE_ADD_APPLICABLE'] = (data.BALANCE_ADD_APPLICABLE == true ? '1' : '0')
    data['DORMANT_FLAG_APPLICABLE'] = (data.DORMANT_FLAG_APPLICABLE == true ? '1' : '0')
    this.currentSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.resetForm();
      this.angForm.controls['S_APPL'].enable()
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
    this.ngsglac = null
    this.ngintglac = null
    this.ngintapplicapble = null
    this.angForm.controls['S_APPL'].enable()
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
      this.angForm.controls['POST_TO_INDIVIDUAL_AC'].reset()
      this.angForm.controls['S_PRODUCT_DAY_BASE'].reset()
      this.angForm.controls['S_PRODUCT_DAY_BASE_END'].reset()
      this.angForm.controls['MIN_INT_LIMIT'].reset()
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
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#schemeparametertable tfoot tr').appendTo('#schemeparametertable thead');
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

  checkDuplicate(event) {

    let obj = {
      scheme: event.target.value
    }
    if (obj.scheme != '') {
      if (Number(obj.scheme) >= 151 && Number(obj.scheme) <= 200) {
        this.currentSchemeService.duplicatecheck(obj).subscribe(data => {
          if (data.length != 0) {
            this.angForm.controls['S_APPL'].reset()
            Swal.fire('Oops', 'This scheme Code is already exists', 'error')
          }
        })
      } else {
        this.angForm.controls['S_APPL'].reset()
        Swal.fire('Oops', 'Please enter the scheme code within 151 to 200 this range', 'error')
      }
    }
  }
}
