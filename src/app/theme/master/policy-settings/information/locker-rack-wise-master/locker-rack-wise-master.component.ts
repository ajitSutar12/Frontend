import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LockerSMasterDropDownService } from '../../../../../shared/dropdownService/lockersize-master-dropdown.service';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { LockerRackWiseMasterService } from './locker-rack-wise-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface LockerRackWiseMaster {
  RACK_NO: number;
  LOCKER_NO: number;
  KEY_NO: number;
  SIZE_SR_NO: string;
}

@Component({
  selector: 'app-locker-rack-wise-master',
  templateUrl: './locker-rack-wise-master.component.html',
  styleUrls: ['./locker-rack-wise-master.component.scss']
})

export class LockerRackWiseMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  lockerRackWiseMaster: LockerRackWiseMaster[];
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

  nglocker: any = null
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  lockerMaster: any;

  //variable to get ID to update
  updateID: number = 0;

  //for search functionality
  filterData = {};
  ngBranchCode
  branchCode
  branch_code
  constructor(
    private http: HttpClient,
    private lockerRackWiseMasterService: LockerRackWiseMasterService,
    private fb: FormBuilder,
    private lockerSMaster: LockerSMasterDropDownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private translate: TranslateService,
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/locker-rackwise-master',
            dataTableParameters
          ).subscribe(resp => {
            this.lockerRackWiseMaster = resp.data;
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
        {
          title: this.translate.instant('master.Action.Action'),

        },
        {
          title: this.translate.instant('master.Locker_Rackwise_Master.Rack_Number'),
          data: 'RACK_NO'
        }, {
          title: this.translate.instant('master.Locker_Rackwise_Master.Locker_Number'),
          data: 'LOCKER_NO'
        },
        {
          title: this.translate.instant('master.Locker_Rackwise_Master.Locker_Key_Number'),
          data: 'KEY_NO'
        },
        {
          title: this.translate.instant('master.Locker_Rackwise_Master.Locker_Size'),
          data: 'SIZE_SR_NO'
        },
      ],
      dom: 'Blrtip',
    };


    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      // debugger
      this.angForm.controls['BRANCH_CODE'].enable()

      this.lockerSMaster.getLockerSMasterList().pipe(first()).subscribe(data => {
        this.lockerMaster = data;
      })
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
      this.lockerSMaster.getLockerSMasterListbranch(this.ngBranchCode).pipe(first()).subscribe(data => {
        this.lockerMaster = data;
      })
    }

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      debugger
      this.branch_code = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      RACK_NO: [''],
      SIZE_SR_NO: ['', [Validators.required]],
      LOCKER_NO: ['', [Validators.required, Validators.pattern]],
      KEY_NO: ['', [Validators.required, Validators.pattern]],
      BRANCH_CODE: ['', [Validators.required]]
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'RACK_NO': formVal.RACK_NO,
      'LOCKER_NO': formVal.LOCKER_NO,
      'KEY_NO': formVal.KEY_NO,
      'SIZE_SR_NO': formVal.SIZE_SR_NO,
      'BRANCH_CODE': this.ngBranchCode
    }
    this.lockerRackWiseMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.formSubmitted = false;
      // to reload after insertion of data

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
      console.log(error)
    })
    this.ngBranchCode = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }

    this.angForm.patchValue({
      BRANCH_CODE: result.branch.id
    })
    //To clear form
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.lockerRackWiseMasterService.getFormData(id).subscribe(data => {
      this.ngBranchCode = Number(data.BRANCH_CODE),
        this.updateID = data.id;
      this.angForm.patchValue({
        'RACK_NO': data.RACK_NO,
        'LOCKER_NO': data.LOCKER_NO,
        'KEY_NO': data.KEY_NO,
        'SIZE_SR_NO': data.SIZE_SR_NO
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.lockerRackWiseMasterService.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
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
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Sure')}`,
      text: `${this.translate.instant('Swal_Msg.Locker_Rackwise_Master')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.lockerRackWiseMasterService.deleteData(id).subscribe(data1 => {
          this.lockerRackWiseMaster = data1;
          Swal.fire(
            `${this.translate.instant('Swal_Msg.Delete')}`,
            `${this.translate.instant('Swal_Msg.D_Msg')}`,
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
          `${this.translate.instant('Swal_Msg.Cancel')}`,
          `${this.translate.instant('Swal_Msg.C_Msg')}`,
          'error'
        )
      }
    })
  }
  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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

  // Reset Function
  resetForm() {
    this.createForm();
    this.nglocker = null
    this.ngBranchCode = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }

    this.angForm.patchValue({
      BRANCH_CODE: result.branch.id
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
  getlocker(event) {
    console.log(event)
    console.log(this.ngBranchCode)
    this.lockerSMaster.getLockerSMasterListbranch(this.ngBranchCode).pipe(first()).subscribe(data => {
      this.lockerMaster = data;
    })
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



}