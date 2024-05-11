import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
//default service files for dropdown
import { StatementCodeDropdownService } from '../../../../shared/dropdownService/statement-code-dropdown.service';
// Service File For Handling CRUD Operation
import { GlAccountsMasterService } from './gl-accounts-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface GLAccountMaster {
  AC_NO: number
  AC_NAME: string
  AC_BCD: string
  IS_DIRECT_ENTRY_ALLOW: boolean
  IS_RED_BALANCE_AC: boolean
  AC_IS_CASH_IN_TRANSIT: boolean
  IS_TAXABLEFOR_GST: boolean
  IS_ACTIVE: boolean
}
@Component({
  selector: 'app-gl-accounts-master',
  templateUrl: './gl-accounts-master.component.html',
  styleUrls: ['./gl-accounts-master.component.scss'],
})

export class GlAccountsMasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  glAccountMaster: any;
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  Data: any;
  //variables for pagination
  page: number = 1;
  getschemename

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
  scheme: any;
  role: any;
  ngBranchCode: any;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable to get ID to update
  updateID: number = 0;
  statementCode: any;
  selectedStatementcode: any;
  some: any;

  // Filter Variable
  filterData = {};
  statementCodeData: any;
  recall: any;
  setLang:any;

  selectedAccount = 'Adam';
  accounts = [
    { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States', child: { state: 'Active' } },
    { name: 'Homer', email: 'homer@email.com', age: 47, country: '', child: { state: 'Active' } },
    { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States', child: { state: 'Active' } },
    { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina', child: { state: 'Active' } },
    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina', child: { state: 'Active' } },
    { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador', child: { state: 'Active' } },
    { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador', child: { state: 'Inactive' } },
    { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador', child: { state: 'Inactive' } },
    { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } },
    { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia', child: { state: 'Inactive' } },
    { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } }
  ];

  constructor(
    private http: HttpClient,
    private glAccountsMasterService: GlAccountsMasterService,
    private statement: StatementCodeDropdownService,
    private fb: FormBuilder,private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,

  ) { 
    this.systemParameter.getFormData(1).subscribe(data => {
    
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
  })

    // 
    this.statement.getStatementCodeList().pipe(first()).subscribe(data => {
      this.statementCode = data;
      //  this.role = this.statementCode.slice(0,4)
      console.log(this.statementCode, "statementcode");

      this.role = this.statementCode.filter(function (scheme) {
        return (scheme.parent_node == '0')
      });
      let step_2_data = new Array();
      let final_obj = new Array()
      let parentData = this.statementCode.filter(ele => ele.parent_node == 0);
      for (let item of parentData) {
        let data = this.statementCode.filter(ele => ele.parent_node == item.id);
        if (data.length != 0) {
          for (let elem of data) {
            elem['parent_name'] = item.head_name;
            step_2_data.push(elem);
          }
        }
      }

      this.some = step_2_data;
      for (let ele1 of step_2_data) {
        let data = this.statementCode.filter(ele => ele.parent_node == ele1.id)
        for (let item of data) {
          item['gl_code'] = ele1.head_name;
          item['child'] = { state: 'Active' }
          final_obj.push(item);
        }
      }
      this.statementCodeData = final_obj;
      // this.scheme = this.statementCodeData;

    }
    )
  }


  getAccountList(event: any) {
    this.selectedStatementcode = null;
    let newArray = new Array();
    this.statementCode.forEach(element => {
      let subArray = new Array();
      if (element.parent_node == event.id) {
        this.statementCode.forEach(ele1 => {
          if (ele1.parent_node == element.id) {
            subArray.push(ele1)
          }
        });
        let subarr = this.sort_by_key(subArray, 'position')
        // element['child'] = subarr;
        subarr.forEach(element => {
          newArray.push(element)
        });
        newArray.push(element);
        this.scheme = newArray
      }
    })

  }
  forEditgetAccountList(event: any) {
    this.selectedStatementcode = null;
    let newArray = new Array();
    this.statementCode.forEach(element => {
      let subArray = new Array();
      if (element.parent_node == event) {
        this.statementCode.forEach(ele1 => {
          if (ele1.parent_node == element.id) {
            subArray.push(ele1)
          }
        });
        let subarr = this.sort_by_key(subArray, 'position')
        // element['child'] = subarr;
        subarr.forEach(element => {
          newArray.push(element)
        });
        newArray.push(element);
        this.scheme = newArray
      }
    })

  }

  sort_by_key(array: any, key: any) {
    return array.sort(function (a: any, b: any) {
      let p = a[key];
      let q = b[key];
      return (p < q) ? -1 : ((p > q) ? 1 : 0)
    });
  }

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
            this.url + '/gl-account-master',
            dataTableParameters
          ).subscribe(resp => {
            this.glAccountMaster = resp.data;
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
          title: this.translate.instant('master.Account_Master.General_Ledger_Code'),
          data: 'AC_NO'
        },
        {
          title: this.translate.instant('master.Account_Master.General_Ledger_Name'),
          data: 'AC_NAME'
        },
        {
          title: this.translate.instant('master.Account_Master.Statement_code'),
          data: 'head_name'
        },
        {
          title: 'Is Red Balance Account',
          data: 'IS_RED_BALANCE_AC'
        },
        {
          title: 'Is Allow Direct Entry To Account',
          data: 'IS_DIRECT_ENTRY_ALLOW'
        },
        {
          title: 'Cash In TransitAccount',
          data: 'AC_IS_CASH_IN_TRANSIT'
        },
        {
          title: 'Is Tax able For GST',
          data: 'IS_TAXABLEFOR_GST'
        },
        {
          title: 'Is Active Account',
          data: 'IS_ACTIVE'
        }

      ],
      dom: 'Blrtip',
    };

  }

  createForm() {
    this.angForm = this.fb.group({
      AC_NO: [''],
      AC_NAME: ['', [Validators.required]],
      AC_CODE: [''],
      AC_BCD: ['', [Validators.required]],
      IS_DIRECT_ENTRY_ALLOW: [true],
      IS_RED_BALANCE_AC: [false],
      AC_IS_CASH_IN_TRANSIT: [false],
      IS_TAXABLEFOR_GST: [false],
      IS_ACTIVE: [true]
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    console.log(this.angForm.value);

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    const dataToSend = {
      'BRANCH_CODE': branchCode,
      'AC_NAME': formVal.AC_NAME,
      'PARENT_NODE': formVal.AC_CODE,
      'AC_BCD': formVal.AC_BCD,
      'IS_DIRECT_ENTRY_ALLOW': formVal.IS_DIRECT_ENTRY_ALLOW,
      'IS_RED_BALANCE_AC': formVal.IS_RED_BALANCE_AC,
      'AC_IS_CASH_IN_TRANSIT': formVal.AC_IS_CASH_IN_TRANSIT,
      'IS_TAXABLEFOR_GST': formVal.IS_TAXABLEFOR_GST,
      'IS_ACTIVE': formVal.IS_ACTIVE
    }
    this.glAccountsMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
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
    this.newbtnShow = true;
    this.glAccountsMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.forEditgetAccountList(data.PARENT_NODE)
      let stateData = this.statementCode.filter(ele => ele.id == Number(data.AC_BCD));
      let parentData = this.statementCode.filter(ele => ele.id == Number(data.PARENT_NODE));
      this.ngBranchCode =  parentData[0]
      this.selectedStatementcode = stateData[0];
      this.angForm.patchValue({
        'AC_NO': data.AC_NO,
        'AC_NAME': data.AC_NAME,
        // 'AC_BCD': data.AC_BCD,
        // 'AC_CODE': Number(data.PARENT_NODE),
        'IS_DIRECT_ENTRY_ALLOW': data.IS_DIRECT_ENTRY_ALLOW,
        'IS_RED_BALANCE_AC': data.IS_RED_BALANCE_AC,
        'AC_IS_CASH_IN_TRANSIT': data.AC_IS_CASH_IN_TRANSIT,
        'IS_TAXABLEFOR_GST': data.IS_TAXABLEFOR_GST,
        'IS_ACTIVE': data.IS_ACTIVE
      })
      // this.selectedStatementcode = Number(data.AC_BCD)
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //Method for update data 
  updateData() {
    debugger
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['PARENT_NODE'] = data.AC_CODE
    this.glAccountsMasterService.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }

  //reset form
  resetForm() {
    this.createForm()
  }

  //Method for delete data
  // delClickHandler(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to delete Pigmy AC Scheme data.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#229954',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.pigmyAcSchemeService.deleteData(id).subscribe(data1 => {
  //         this.pigmyACScheme = data1;
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

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
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
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
