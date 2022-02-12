import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { ExucuteOnService } from '../../../../shared/dropdownService/exucute-on.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { specialservice } from './special.service'
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators';
//date pipe
import { DatePipe } from '@angular/common';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface SpecialMaster {
  INSTRUCTION_NO: number;
  INSTRUCTION_DATE: Date;
  TRAN_ACTYPE: string;
  TRAN_ACNO: number;
  FROM_DATE: Date;
  TO_DATE: Date;
  DRCR_APPLY: string;
  IS_RESTRICT: boolean;
  DETAILS: string;
}

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  angForm: FormGroup;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  specialMaster: SpecialMaster[];
  //filter variable
  filterData = {};

  //Datatable
  dtExportButtonOptions: any = {};
  acno: any
  excuteonOption: Array<IOption> = this.exucuteOnService.getCharacters();
  allScheme // all scheme
  schemeACNo //account no 
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  todate:any=null
  fromdate:any=null
  maxDate: Date;
  minDate: Date;

  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable for checkbox and radio button 
  isIsRestrictTransactionEntry: boolean = false;
  page: number;
  updateID: any;
  ngacno:any=null
  ngexecuteon:any=null
  constructor(private fb: FormBuilder, private datePipe: DatePipe, public exucuteOnService: ExucuteOnService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private http: HttpClient,
    private _special: specialservice,
    private config: NgSelectConfig,) {
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
     }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: "full_numbers",
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

        dataTableParameters.columns.forEach((element) => {
          if (element.search.value != "") {
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
        dataTableParameters["filterData"] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + "/special-instruction",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.specialMaster = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columns: [
        {
          title: "Action",
        },
        {
          title: 'Instruction No',
          data: 'INSTRUCTION_NO'
        }, {
          title: 'Date',
          data: 'INSTRUCTION_DATE'
        },
        {
          title: 'Scheme',
          data: 'TRAN_ACTYPE'
        }, {
          title: 'Account No',
          data: 'TRAN_ACNO'
        },
        {
          title: 'Start From',
          data: 'FROM_DATE'
        },
        {
          title: 'Upto Date',
          data: 'TO_DATE'
        },
        {
          title: 'Execute On',
          data: 'DRCR_APPLY'
        },
        {
          title: 'Is Restrict Transaction Entry',
          data: 'IS_RESTRICT'
        },

        {
          title: 'Details',
          data: 'DETAILS'
        },

      ],
      dom: 'Blrtip',

    };
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.allScheme = data;
    })

    this.runTimer();
    this.dataSub = this.exucuteOnService.loadCharacters().subscribe((options) => {
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

  createForm() {
    this.angForm = this.fb.group({
      INSTRUCTION_NO: ['',],
      INSTRUCTION_DATE: ['',],
      TRAN_ACTYPE: ['', [Validators.required]],
      TRAN_ACNO: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      DRCR_APPLY: ['', [Validators.required]],
      IS_RESTRICT: [''],
      DETAILS: ['', [Validators.required]],
    });
    let sysdate = new Date()
    let sysDate = this.datePipe.transform(sysdate, "yyyy-MM-dd")
    this.angForm.patchValue({
      'INSTRUCTION_DATE': sysDate,
      'FROM_DATE': sysDate,
      'TO_DATE': sysDate
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  submit() {
    let fromdate
    let  todate
    this.formSubmitted=true;
    const formVal = this.angForm.value;
    const dataToSend = {
      INSTRUCTION_NO: formVal.INSTRUCTION_NO,
      INSTRUCTION_DATE: formVal.INSTRUCTION_DATE,
      TRAN_ACTYPE: formVal.TRAN_ACTYPE,
      TRAN_ACNO: formVal.TRAN_ACNO,
      FROM_DATE: (formVal.FROM_DATE == '' || formVal.FROM_DATE == 'Invalid date') ? fromdate = '' : fromdate = moment(formVal.FROM_DATE).format('DD/MM/YYYY'),
      // FROM_DATE: formVal.FROM_DATE,
      TO_DATE: (formVal.TO_DATE == '' || formVal.TO_DATE == 'Invalid date') ? todate = '' : todate = moment(formVal.TO_DATE).format('DD/MM/YYYY'),
      // TO_DATE: formVal.TO_DATE,
      DRCR_APPLY: formVal.DRCR_APPLY,
      IS_RESTRICT: formVal.IS_RESTRICT,
      DETAILS: formVal.DETAILS,
    };
    this._special.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
        this.formSubmitted = false;
        // to reload after delete of data
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.resetForm();
  }
  /**
* @editClickHandler function for edit button clicked
*/
  updatecheckdata:any 
  editClickHandler(id: any): void {
    let fromdate
    let todate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._special.getFormData(id).subscribe((data) => {
      this.updatecheckdata=data
      this.updateID = data.id;
      this.angForm.setValue({
        INSTRUCTION_NO: data.INSTRUCTION_NO,
        INSTRUCTION_DATE: data.INSTRUCTION_DATE,
        TRAN_ACTYPE: data.TRAN_ACTYPE,
        TRAN_ACNO: data.TRAN_ACNO,
        FROM_DATE: (data.FROM_DATE == 'Invalid date' || data.FROM_DATE == '' || data.FROM_DATE == null) ? fromdate = '' : fromdate = data.FROM_DATE,
        // FROM_DATE: data.FROM_DATE,
        TO_DATE: (data.TO_DATE == 'Invalid date' || data.TO_DATE == '' || data.TO_DATE == null) ? todate = '' : todate = data.TO_DATE,
        // TO_DATE: data.TO_DATE,
        DRCR_APPLY: data.DRCR_APPLY,
        IS_RESTRICT: data.IS_RESTRICT,
        DETAILS: data.DETAILS,
      });
    });
  }

  /**
  * @updateData function for update data 
  */
  updateData() {
    let fromdate
    let todate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    if(this.updatecheckdata.EFFECT_DATE!=data.EFFECT_DATE){
      (data.FROM_DATE == 'Invalid date' || data.FROM_DATE == '' || data.FROM_DATE == null) ? (fromdate = '', data['FROM_DATE'] = fromdate) : (fromdate = data.FROM_DATE, data['FROM_DATE'] = moment(fromdate).format('DD/MM/YYYY'))
      }
    if(this.updatecheckdata.EFFECT_DATE!=data.EFFECT_DATE){
      (data.TO_DATE == 'Invalid date' || data.TO_DATE == '' || data.TO_DATE == null) ? (todate = '', data['TO_DATE'] = todate) : (todate = data.TO_DATE, data['TO_DATE'] = moment(todate).format('DD/MM/YYYY'))
      }
    this._special.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      // to reload after delete of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    });
  }

  //get account no according scheme for introducer
  getSchemeAcNO(acno) {
    switch (acno) {
      case 'SB':
        console.log("saving");
        this.schemeAccountNoService.getSavingSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'SH':
        console.log("Share");
        this.schemeAccountNoService.getShareSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CA':
        console.log("Current account");
        this.schemeAccountNoService.getCurrentAccountSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':
        console.log("Term Loan");
        this.schemeAccountNoService.getTermLoanSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'TD':
        console.log("Term Deposit");
        this.schemeAccountNoService.getTermDepositSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'DS':
        console.log("Dispute Loan");
        this.schemeAccountNoService.getDisputeLoanSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':
        console.log("Cash Credit Loan");
        this.schemeAccountNoService.getCashCreditSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'GS':
        console.log("anamat");
        this.schemeAccountNoService.getAnamatSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        console.log("Pigmy account");
        this.schemeAccountNoService.getPigmyAccountSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'AG':
        console.log("Pigmy agent");
        this.schemeAccountNoService.getPigmyAgentSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'IV':
        console.log("Investment");
        this.schemeAccountNoService.getInvestmentSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }

  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
  delClickHandler(id: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete  Special Instruction  data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      /* run code if our result  isConfirmed function Swal.fire open a modal window to display message
      else if result is dismiss then it cancel and open a modal window to display cancel message
       */
      if (result.isConfirmed) {
        this._special.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
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
    //this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#instructiontable tfoot tr').appendTo('#instructiontable thead');
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
}
