import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, } from "@angular/core";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { lienService } from './lien-mark-clear.service'
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { first } from 'rxjs/operators';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface LienMaster {
  AC_NO: number
  DEPO_AC_TYPE: string;
  DEPO_AC_NO: number;
  // SECU_CODE: number;
  LEDGER_BAL: number;
  DEPOSIT_AMT: number;
  RECEIPT_NO: number;
  IS_LIEN_MARK_CLEAR: number;
  AC_TYPE: string;
  BALANCE_OF_LOAN_ACCOUNT: number;
  AC_EXPIRE_DATE: Date;
}

@Component({
  selector: 'app-lien-mark-clear',
  templateUrl: './lien-mark-clear.component.html',
  styleUrls: ['./lien-mark-clear.component.scss']
})
export class LienMarkClearComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  lienMaster: LienMaster[];
  angForm: FormGroup;

  //Datatable
  dtExportButtonOptions: any = {};
  acno
  allScheme // all scheme
  schemeACNo //account no 
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isIsLienMarkClear: boolean = false;
  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};
  page: number;


  constructor(private fb: FormBuilder, private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService, private http: HttpClient, private _lien: lienService) { }

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
            this.url + '/lien-mark-clear',
            dataTableParameters
          )
          .subscribe((resp) => {
            this.lienMaster = resp.data;
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
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          title: 'Scheme',
          data: 'DEPO_AC_TYPE'
        },
        {
          title: 'Account No',
          data: 'DEPO_AC_NO'
        },
        // {
        //   title: 'Security Code',
        //   data: 'SECU_CODE'
        // },
        {
          title: 'Ledger Balance',
          data: 'LEDGER_BAL'
        },
        {
          title: 'Deposit Amount',
          data: 'DEPOSIT_AMT'
        },
        {
          title: 'TD Receipt No',
          data: 'RECEIPT_NO'
        },
        {
          title: 'IsLienMarkClear',
          data: 'IS_LIEN_MARK_CLEAR'
        },
        {
          title: 'Loan Ac No',
          data: 'AC_TYPE'
        },
        {
          title: 'Loan Os Balance',
          data: 'BALANCE_OF_LOAN_ACCOUNT'
        },
        {
          title: 'Loan Expiry Date',
          data: 'AC_EXPIRE_DATE'
        }
      ],
      dom: 'Blrtip',
    };

    this.runTimer();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.value == 'TD' || scheme.value == 'PG' || scheme.value == 'SB');
      });
      this.allScheme = filtered;
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
      DEPO_AC_TYPE: ['',],
      DEPO_AC_NO: ['',],
      // SECU_CODE: ['', [Validators.pattern, Validators.required]],
      LEDGER_BAL: [''],
      DEPOSIT_AMT: [''],
      RECEIPT_NO: [''],
      IS_LIEN_MARK_CLEAR: [''],
      AC_TYPE: [''],
      BALANCE_OF_LOAN_ACCOUNT: [''],
      AC_EXPIRE_DATE: [''],
    });
  }

  //get account no according scheme 
  getSchemeAcNO(acno) {
    switch (acno) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
      case 'TD':
        console.log("Term Deposit");
        this.schemeAccountNoService.getTermDepositSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        console.log("Pigmy account");
        this.schemeAccountNoService.getPigmyAccountSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      DEPO_AC_TYPE: formVal.DEPO_AC_TYPE,
      DEPO_AC_NO: formVal.DEPO_AC_NO,
      // SECU_CODE: formVal.SECU_CODE,
      LEDGER_BAL: formVal.LEDGER_BAL,
      DEPOSIT_AMT: formVal.DEPOSIT_AMT,
      RECEIPT_NO: formVal.RECEIPT_NO,
      IS_LIEN_MARK_CLEAR: formVal.IS_LIEN_MARK_CLEAR,
      AC_TYPE: formVal.AC_TYPE,
      BALANCE_OF_LOAN_ACCOUNT: formVal.BALANCE_OF_LOAN_ACCOUNT,
      AC_EXPIRE_DATE: formVal.AC_EXPIRE_DATE,

    };
    this._lien.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        this.rerender();
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.resetForm();

  }

  //function for edit button clicked
  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._lien.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        DEPO_AC_TYPE: data.DEPO_AC_TYPE,
        DEPO_AC_NO: data.DEPO_AC_NO.toString(),
        // SECU_CODE: data.SECU_CODE,
        LEDGER_BAL: data.LEDGER_BAL,
        DEPOSIT_AMT: data.DEPOSIT_AMT,
        RECEIPT_NO: data.RECEIPT_NO,
        IS_LIEN_MARK_CLEAR: data.IS_LIEN_MARK_CLEAR,
        AC_TYPE: data.AC_TYPE,
        BALANCE_OF_LOAN_ACCOUNT: data.BALANCE_OF_LOAN_ACCOUNT,
        AC_EXPIRE_DATE: data.AC_EXPIRE_DATE,

      });
    });
  }

  //function for delete button clicked
  delClickHandler(id: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Lien Mark data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._lien.deleteData(id).subscribe((data1) => {
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

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._lien.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      // this.rerender();
      this.resetForm();
    });
  }
  ngAfterViewInit(): void {
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
