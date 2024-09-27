import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { IOption } from 'ng-select';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Used to Call API
import { HttpClient } from '@angular/common/http';
// Service File For Handling CRUD Operation
import { TDReceiptService } from './t-dreceipt-type-master.component.service';
import { TdReceiptService } from '../../../../shared/dropdownService/tdReceipt-type.service';
import { environment } from '../../../../../environments/environment'
import { first } from 'rxjs/operators';
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface TDReceiptinterface {
  LAST_RECEIPT_NO: number,
  RECEIPT_TYPE: string,
}

@Component({
  selector: 'app-t-dreceipt-type-master',
  templateUrl: './t-dreceipt-type-master.component.html',
  styleUrls: ['./t-dreceipt-type-master.component.scss'],
})
export class TDReceiptTypeMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  angForm: FormGroup;
  formSubmitted = false;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtExportButtonOptions: any = {};
  // Variables for hide/show add and update and new button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  // tdMaster: any[]
  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};
  //variables for pagination
  page: number = 1;

  // Store data from backend
  tdReceipt: TDReceiptinterface[];

  selectedValue: any = null
  receipt: number
  //title select variables
  tdMaster: Array<IOption> = this._tdReceiptService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  setLang: any;

  constructor(private fb: FormBuilder, private _receipt: TDReceiptService,
    private http: HttpClient,
    private _tdReceiptService: TdReceiptService,
    private translate: TranslateService,
    private systemParameter: SystemMasterParametersService,

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {

      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    this.createForm();
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;
        dataTableParameters['filterData'] = this.filterData;
        dataTableParameters['branchCode'] = branchCode;
        this.http
          .post<DataTableResponse>(
            this.url + '/td-receipt-type',
            dataTableParameters
          ).subscribe(resp => {
            this.tdReceipt = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        // {
        //   title: this.translate.instant('master.Action.Action'),
        // },
        {
          title: this.translate.instant('master.TD_Receipt_Type_Master.Receipt_Type'),
          data: 'RECEIPT_TYPE'
        },
        {
          title: this.translate.instant('master.TD_Receipt_Type_Master.last_Receipt_No'),
          data: 'LAST_RECEIPT_NO'
        }
      ],
      dom: 'Blrtip',
    };

    this.runTimer();
    this.dataSub = this._tdReceiptService.loadCharacters().subscribe((options) => {
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
      LAST_RECEIPT_NO: [, [Validators.pattern, Validators.required]],
      RECEIPT_TYPE: ['', [Validators.required]]
    });
  }

  submit() {
    this.formSubmitted = true;
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      // console.log(this.receipt)
      const dataToSend = {
        'LAST_RECEIPT_NO': formVal.LAST_RECEIPT_NO,
        'RECEIPT_TYPE': formVal.RECEIPT_TYPE,
        BRANCH_CODE: branchCode
      };
      // console.log(this.angForm.value);
      // console.log(dataToSend, "dataToSend");
      this._receipt.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, "success");
          // to reload after insertion of data
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });
          this.formSubmitted = false;
        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
    }
  }
  //function toggle update to add button
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    let branchCode = result.branch.id;
    data['BRANCH_CODE'] = branchCode
    this._receipt.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Updated_Successfully')}`, 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }
  //function for edit button clicked
  editClickHandler(id): void {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._receipt.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.patchValue({
        RECEIPT_TYPE: data.RECEIPT_TYPE,
        LAST_RECEIPT_NO: data.LAST_RECEIPT_NO
      })
    })
  }

  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Sure')}`,
      text: `${this.translate.instant('Swal_Msg.You_won')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Delete')}`, `${this.translate.instant('Swal_Msg.D_Msg')}`,
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Cancel')}`, `${this.translate.instant('Swal_Msg.C_Msg')}`,
          'error'
        )
      }
    })
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  // Reset Function
  resetForm() {
    this.createForm();
    this.selectedValue = null
  }

  //reset function while update
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next()
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#ftable tfoot tr').appendTo('#ftable thead');
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


  getValue(event) {
    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    let branchCode = result.branch.id;
    this.http.get<any>(
      this.url + '/td-receipt-type/getTDReceiptTypeMasterList/' + branchCode,
    ).subscribe(resp => {
      if (resp.length != 0) {
        for (let element of resp) {
          if (event.value == element.RECEIPT_TYPE) {
            this.angForm.patchValue({
              LAST_RECEIPT_NO: element.LAST_RECEIPT_NO
            })
            break
          }
          else {
            this.angForm.patchValue({
              LAST_RECEIPT_NO: 0
            })
          }
        }
      }
      else {
        this.angForm.patchValue({
          LAST_RECEIPT_NO: 0
        })
      }
    })
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
}
