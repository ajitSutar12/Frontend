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
import { data } from "jquery";
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'

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
  REVOKE_DATE: string
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
  acno: any = null
  excuteonOption: Array<IOption> = this.exucuteOnService.getCharacters();
  allScheme // all scheme
  schemeACNo //account no 
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  todate: any = null
  fromdate: any = null
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
  ngacno: any = null
  ngexecuteon: any = null
  constructor(private fb: FormBuilder, private datePipe: DatePipe, public exucuteOnService: ExucuteOnService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,
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
        {
          title: 'Revoke Date',
          data: 'REVOKE_DATE'
        },

      ],
      dom: 'Blrtip',

    };
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.allScheme = data;
    })

    this.dataSub = this.exucuteOnService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  sysDate
  createForm() {
    this.angForm = this.fb.group({
      INSTRUCTION_NO: ['',],
      INSTRUCTION_DATE: [],
      TRAN_ACTYPE: ['', [Validators.required]],
      TRAN_ACNO: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      DRCR_APPLY: ['', [Validators.required]],
      IS_RESTRICT: [false],
      DETAILS: ['', [Validators.required]],
      REVOKE_DATE: []
    });
    // let sysdate = new Date()
    // // let sysDate = this.datePipe.transform(sysdate, "yyyy-MM-dd")
    // let sysDate = moment(sysdate).format('DD/MM/YYYY')
    // this.angForm.patchValue({
    //   'INSTRUCTION_DATE': sysDate,
    //   'FROM_DATE': sysDate,
    //   'TO_DATE': sysDate
    // })

    this.systemParameter.getFormData(1).subscribe(data => {
      this.sysDate = data.CURRENT_DATE
      this.angForm.patchValue({
        'INSTRUCTION_DATE': data.CURRENT_DATE,
        'FROM_DATE': data.CURRENT_DATE,
        'TO_DATE': data.CURRENT_DATE
      })
    })
  }

  addNewData() {
    this.angForm.controls['REVOKE_DATE'].disable()
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
    this.acno = null
    this.ngacno = null
    this.ngexecuteon = null
  }

  submit() {
    let fromdate
    let todate
    this.formSubmitted = true;
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      const dataToSend = {
        INSTRUCTION_NO: formVal.INSTRUCTION_NO,
        INSTRUCTION_DATE: formVal.INSTRUCTION_DATE,
        TRAN_ACTYPE: formVal.TRAN_ACTYPE,
        TRAN_ACNO: formVal.TRAN_ACNO,
        // FROM_DATE: formVal.FROM_DATE,        
        // TO_DATE: formVal.TO_DATE,
        DRCR_APPLY: formVal.DRCR_APPLY,
        IS_RESTRICT: formVal.IS_RESTRICT == false ? '0' : '1',
        DETAILS: formVal.DETAILS,
      };
      if (this.sysDate == formVal.FROM_DATE)
        dataToSend['FROM_DATE'] = this.sysDate
      else {
        dataToSend['FROM_DATE'] = (formVal.FROM_DATE == '' || formVal.FROM_DATE == 'Invalid date' || formVal.FROM_DATE == null || formVal.FROM_DATE == undefined) ? fromdate = '' : fromdate = moment(formVal.FROM_DATE).format('DD/MM/YYYY')
      }
      if (this.sysDate == formVal.TO_DATE)
        dataToSend['FROM_DATE'] = this.sysDate
      else {
        dataToSend['TO_DATE'] = (formVal.TO_DATE == '' || formVal.TO_DATE == 'Invalid date' || formVal.TO_DATE == null || formVal.TO_DATE == undefined) ? todate = '' : todate = moment(formVal.TO_DATE).format('DD/MM/YYYY')
      }
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
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }
  /**
* @editClickHandler function for edit button clicked
*/
  updatecheckdata: any
  editClickHandler(id: any): void {
    let fromdate
    let todate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._special.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      this.updateID = data.id;
      this.acno = data.TRAN_ACTYPE
      this.angForm.patchValue({
        INSTRUCTION_NO: data.INSTRUCTION_NO,
        INSTRUCTION_DATE: data.INSTRUCTION_DATE,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
        DRCR_APPLY: data.DRCR_APPLY,
        IS_RESTRICT: data.IS_RESTRICT == '0' ? false : true,
        DETAILS: data.DETAILS,
        REVOKE_DATE: data.REVOKE_DATE,
      });
      this.ngacno = null
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      let branchCode = result.branch.id;
      let obj = [this.acno, branchCode]
      switch (data.specialIns.S_SHNAME) {
        case 'SB':
          this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'SH':
          this.schemeAccountNoService.getShareSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'CA':
          this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'LN':
          this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'TD':
          this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'DS':
          this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'CC':
          this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'GS':
          this.schemeAccountNoService.getAnamatSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'PG':
          this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'AG':
          this.schemeAccountNoService.getPigmyAgentSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'IV':
          this.schemeAccountNoService.getInvestmentSchemeList1(obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;
      }      this.ngacno = Number(data.TRAN_ACNO)
    });
    this.angForm.controls['REVOKE_DATE'].enable()

  }

  /**
  * @updateData function for update data 
  */
  updateData() {
    let fromdate
    let todate
    let revokeDate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data['IS_RESTRICT'] = data.IS_RESTRICT == false ? '0' : '1'
    if (this.updatecheckdata.FROM_DATE != data.FROM_DATE) {
      (data.FROM_DATE == 'Invalid date' || data.FROM_DATE == '' || data.FROM_DATE == null) ? (fromdate = '', data['FROM_DATE'] = fromdate) : (fromdate = data.FROM_DATE, data['FROM_DATE'] = moment(fromdate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.TO_DATE != data.TO_DATE) {
      (data.TO_DATE == 'Invalid date' || data.TO_DATE == '' || data.TO_DATE == null) ? (todate = '', data['TO_DATE'] = todate) : (todate = data.TO_DATE, data['TO_DATE'] = moment(todate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.REVOKE_DATE != data.REVOKE_DATE) {
      (data.REVOKE_DATE == 'Invalid date' || data.REVOKE_DATE == '' || data.REVOKE_DATE == null) ? (revokeDate = '', data['REVOKE_DATE'] = revokeDate) : (revokeDate = data.REVOKE_DATE, data['REVOKE_DATE'] = moment(revokeDate).format('DD/MM/YYYY'))
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
  getSchemeAcNO(event) {
    this.ngacno = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let obj = [this.acno, branchCode]
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).pipe(first()).subscribe(data => {
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
    this.angForm.controls['REVOKE_DATE'].disable()
    this.createForm();
    this.acno = null
    this.ngacno = null
    this.ngexecuteon = null
    this.angForm.controls['REVOKE_DATE'].disable()
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
