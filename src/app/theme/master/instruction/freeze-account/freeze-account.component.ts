import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { freezeAccountService } from '../../../../shared/dropdownService/freeze-account.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { DPMasterACNODropdownService } from '../../../../shared/dropdownService/dpmasterACNo-dropdown.service';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service'
import { FreezeAccountService } from './freeze-account.service'
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment'
// Used to Call API
import { HttpClient } from '@angular/common/http';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;

}
// For fetching values from backend
interface FreezAccount {
  AC_TYPE: string
  AC_NO: number
  AC_CUSTID: string
  AC_FREEZE_STATUS: string
  AC_FREEZE_AMOUNT: number
  AC_FREEZE_DATE: Date
  AC_FREEZE_REASON: string
}

@Component({
  selector: 'app-freeze-account',
  templateUrl: './freeze-account.component.html',
  styleUrls: ['./freeze-account.component.scss']
})
export class FreezeAccountComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  scheme
  Cust_ID
  acno
  freezoption: Array<IOption> = this.freezeAccountService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Created Form Group
  angForm: FormGroup;
  // Store data from backend
  freezAccount: FreezAccount[];
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
  newbtnShow: boolean = false;
  updateID: number = 0;

  // column search
  filterData = {};

  constructor(private fb: FormBuilder,
    private freezeAccountService: freezeAccountService,
    private dpMasterACNODropdownService: DPMasterACNODropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private FreezeAccountService: FreezeAccountService,
    private customerIDMasterDropdownService: CustomerIDMasterDropdownService,
    private http: HttpClient) { }

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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/dpmaster',
            dataTableParameters
          ).subscribe(resp => {
            this.freezAccount = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: resp.data
            });
          });
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          title: 'Action',
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account No',
          data: 'AC_NO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Freeze Status',
          data: 'AC_FREEZE_STATUS'
        },
        {
          title: 'Freeze Amount',
          data: 'AC_FREEZE_AMOUNT'
        },
        {
          title: 'Freeze Date',
          data: 'AC_FREEZE_DATE'
        },
        {
          title: 'Remark',
          data: 'AC_FREEZE_REASON'
        }

      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.dataSub = this.freezeAccountService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.schemeCodeDropdownService.getSchemeCodeList().pipe(first()).subscribe(data => {
      this.scheme = data;
    })
    this.dpMasterACNODropdownService.getACNOList().pipe(first()).subscribe(data => {
      this.acno = data;
    })
    this.customerIDMasterDropdownService.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
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
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      AC_CUSTID: ['',],
      AC_FREEZE_STATUS: ['', [Validators.required]],
      AC_FREEZE_AMOUNT: ['', [Validators.pattern]],
      AC_FREEZE_DATE: ['',],
      AC_FREEZE_REASON: ['', [Validators.pattern]]
    });
  }

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'AC_CUSTID': formVal.AC_CUSTID,
      'AC_FREEZE_STATUS': formVal.AC_FREEZE_STATUS,
      'AC_FREEZE_AMOUNT': formVal.AC_FREEZE_AMOUNT,
      'AC_FREEZE_DATE': formVal.AC_FREEZE_DATE,
      'AC_FREEZE_REASON': formVal.AC_FREEZE_REASON
    }
    this.FreezeAccountService.postData(dataToSend).subscribe(data => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();
  }

  //function for edit button clicked
  editClickHandler(id): void {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.FreezeAccountService.getFormData(id).subscribe(data => {
      this.angForm.setValue({
        'AC_TYPE': data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'AC_CUSTID': data.AC_CUSTID,
        'AC_FREEZE_STATUS': data.AC_FREEZE_STATUS,
        'AC_FREEZE_AMOUNT': data.AC_FREEZE_AMOUNT,
        'AC_FREEZE_DATE': data.AC_FREEZE_DATE,
        'AC_FREEZE_REASON': data.AC_FREEZE_REASON
      })
    })
  }

  //function for delete button clicked
  delClickHandler(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete freez account data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
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
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.FreezeAccountService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.rerender();
      this.resetForm();
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  freezStatus
  freezDeatils(freezStatus) {
    if (freezStatus == '0') {
      this.angForm.controls['AC_FREEZE_AMOUNT'].disable()
      this.angForm.controls['AC_FREEZE_DATE'].disable()
      this.angForm.controls['AC_FREEZE_REASON'].disable()
    }
    else if (freezStatus == '1') {
      this.angForm.controls['AC_FREEZE_AMOUNT'].disable()
    }
    else if (freezStatus == '2') {
      this.angForm.controls['AC_FREEZE_AMOUNT'].disable()
    }
    else {
      this.angForm.controls['AC_FREEZE_AMOUNT'].enable()
      this.angForm.controls['AC_FREEZE_DATE'].enable()
      this.angForm.controls['AC_FREEZE_REASON'].enable()
    }
  }

  ngAfterViewInit(): void {
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
