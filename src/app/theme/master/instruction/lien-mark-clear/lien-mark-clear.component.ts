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
import { TranslateService } from "@ngx-translate/core";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";

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
  setLang:any;


  constructor(private fb: FormBuilder, private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService, private http: HttpClient,
     private _lien: lienService,private translate:TranslateService,
     private systemParameter: SystemMasterParametersService,
    ) {
      this.systemParameter.getFormData(1).subscribe(data => {
    
        this.setLang = data.SET_LANGUAGE
        this.translate.setDefaultLang(this.setLang);
      })
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
          title: this.translate.instant('master.Action.Action'),
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          title: this.translate.instant('master.Lien_Mark_or_Clear.Scheme'),
          data: 'DEPO_AC_TYPE'
        },
        {
          title: this.translate.instant('master.Lien_Mark_or_Clear.Account_No'),
          data: 'DEPO_AC_NO'
        },
        // {
        //   title: 'Security Code',
        //   data: 'SECU_CODE'
        // },
        {
          title: this.translate.instant('master.Lien_Mark_or_Clear.Ledger_Balance'),
          data: 'LEDGER_BAL'
        },
        {
          title: this.translate.instant('master.Lien_Mark_or_Clear.Deposit_Amount'),
          data: 'DEPOSIT_AMT'
        },
        {
          title: this.translate.instant('master.Lien_Mark_or_Clear.TD_Receipt_No'),
          data: 'RECEIPT_NO'
        },
        {
          title: this.translate.instant('master.Lien_Mark_or_Clear.Is_Lien_Mark_Clear'),
          data: 'IS_LIEN_MARK_CLEAR'
        },
        {
          title:  this.translate.instant('master.Lien_Mark_or_Clear.Loan_A/c_No'),
          data: 'AC_TYPE'
        },
        {
          title: this.translate.instant('master.Lien_Mark_or_Clear.Loan_O/s_Balance'),
          data: 'BALANCE_OF_LOAN_ACCOUNT'
        },
        {
          title: this.translate.instant('master.Lien_Mark_or_Clear.Loan_Expiry_Date'),
          data: 'AC_EXPIRE_DATE'
        }
      ],
      dom: 'Blrtip',
    };

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.value == 'TD' || scheme.value == 'PG' || scheme.value == 'SB');
      });
      this.allScheme = filtered;
    })
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
        this.schemeAccountNoService.getTermDepositSchemeList().pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
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
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`,`${this.translate.instant('Swal_Msg.S_Msg')}`, "success");
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
        DEPO_AC_NO: data.DEPO_AC_NO,
        // SECU_CODE: data.SECU_CODE,
        LEDGER_BAL: data.LEDGER_BAL,
        DEPOSIT_AMT: data.DEPOSIT_AMT,
        RECEIPT_NO: data.RECEIPT_NO,
        IS_LIEN_MARK_CLEAR: data.IS_LIEN_MARK_CLEAR == '0' ? false : true,
        AC_TYPE: data.AC_TYPE,
        BALANCE_OF_LOAN_ACCOUNT: data.BALANCE_OF_LOAN_ACCOUNT,
        AC_EXPIRE_DATE: data.AC_EXPIRE_DATE,

      });
    });
  }

  //function for delete button clicked
  delClickHandler(id: any): void {
    Swal.fire({
      title:`${this.translate.instant('Swal_Msg.Sure')}`,
      text: `${this.translate.instant('Swal_Msg.M1')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._lien.deleteData(id).subscribe((data1) => {
          Swal.fire(`${this.translate.instant('Swal_Msg.Delete')}`, `${this.translate.instant('Swal_Msg.D_Msg')}`, "success");
        }),
          Swal.fire(
            `${this.translate.instant('Swal_Msg.Delete')}`,
            `${this.translate.instant('Swal_Msg.D_Msg')}`,
            'success'
          )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Cancel')}`,
          `${this.translate.instant('Swal_Msg.C_Msg')}`,
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
    data['IS_LIEN_MARK_CLEAR'] = data.IS_LIEN_MARK_CLEAR == false ? '0' : '1'
    this._lien.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`,`${this.translate.instant('Swal_Msg.Update')}`, "success");
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
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
