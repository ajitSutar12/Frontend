import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { CompanyGroupLinkMasterService } from './company-group-link-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
//Used to dropdown
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeDropdownService } from '../../../../../shared/dropdownService/scheme-code-dropdown.service';
import { CompanyGroupMasterDropdownService } from '../../../../../shared/dropdownService/company-group-master-dropdown.service';
import { first, map } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { AllAccountDropdownService } from '../../../../../shared/dropdownService/all-account-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface CompanyGroupLinkMaster {
  COMP_CODE: string,
  CODE: string,
  FROM_AC: number,
  TO_AC: number,
}
@Component({
  selector: 'app-company-group-link-master',
  templateUrl: './company-group-link-master.component.html',
  styleUrls: ['./company-group-link-master.component.scss']
})

export class CompanyGroupLinkMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  companyGroupLinkMaster: CompanyGroupLinkMaster[];
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
  newbtnShow: boolean = false;

  updateID: number = 0;
  ngToAccount: any = null
  companyCode: any;
  schemeCode: any;
  ngcompany: any = null
  ngcode: any = null
  //Scheme type variable
  schemeType: string = 'GL'
  account: any[]
  ngAccount: any = null
  //for search functionality
  filterData = {};
  ngBranchCode
  branchCode
  branch_code


  constructor(
    private http: HttpClient,
    private companyGroupLinkMasterService: CompanyGroupLinkMasterService,
    private fb: FormBuilder,
    public schemeCodeService: SchemeCodeDropdownService,
    public companyGroupService: CompanyGroupMasterDropdownService,
    private _allAcc: AllAccountDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,

    private config: NgSelectConfig,) { }

  ngOnInit(): void {
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
            this.url + '/company-group-link-master',
            dataTableParameters
          ).subscribe(resp => {
            this.companyGroupLinkMaster = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: 'Action'
        },
        {
          title: 'Company Code',
          data: 'COMP_CODE'
        },
        {
          title: 'Scheme Code',
          data: 'CODE'
        },
        {
          title: 'From Account',
          data: 'FROM_AC'
        },
        {
          title: 'To Account',
          data: 'TO_AC'
        },

      ],
      dom: 'Blrtip',
    };
    this.createForm();
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {

      this.angForm.controls['BRANCH_CODE'].enable()
      this.companyGroupService.getCompanyGroupMasterList().pipe(first()).subscribe(data => {
        this.companyCode = data;
      })
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
      this.companyGroupService.getCompanyGroupMasterBranchList(this.ngBranchCode).pipe(first()).subscribe(data => {
        this.companyCode = data;
      })

    }
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    // this.schemeCodeService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
    //   this.schemeCode = data;
    // })
    this.schemeCodeService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'GL' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'GS');
      });
      this.schemeCode = filtered;

    })
  }

  createForm() {
    this.angForm = this.fb.group({
      COMP_CODE: ['', [Validators.required]],
      CODE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      BRANCH_CODE: ['', [Validators.required]]

    });
  }
  // Method to insert data into database through NestJS
  submit() {
    if (this.multiData.length != 0) {
      this.formSubmitted = true;
      const formVal = this.angForm.value;
      const dataToSend = {
        'COMP_CODE': formVal.COMP_CODE,
        'CODE': formVal.CODE,
        'FROM_AC': formVal.FROM_AC,
        'TO_AC': formVal.TO_AC,
        'BRANCH_CODE': this.ngBranchCode,
        'Company_Data': this.multiData
      }
      this.companyGroupLinkMasterService.postData(dataToSend).subscribe(data1 => {
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
        this.formSubmitted = false;
        this.multiData = [];
        // to reload after insertion of data
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
      }, (error) => {

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
  }

  //Method for append data into fields
  editClickHandler(id) {

    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;

    this.companyGroupLinkMasterService.getFormData(id).subscribe(data => {
      console.log(data, 'edit data')
      this.updateID = data.id;
      this.ngBranchCode = Number(data.BRANCH_CODE)
      this.ngcompany = Number(data.COMP_CODE)
      this.ngcode = Number(data.CODE)
      this.ngAccount = Number(data.FROM_AC)
      this.ngToAccount = Number(data.TO_AC)

      this.multiData = []


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
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.companyGroupLinkMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.multiData = []
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      }); this.resetForm();
    })
  }

  // Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Company Group Link Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.companyGroupLinkMasterService.deleteData(id).subscribe(data1 => {
          this.companyGroupLinkMaster = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {

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
    this.ngBranchCode = null
    this.ngcompany = null
    this.ngcode = null
    this.ngAccount = null
    this.ngToAccount = null
    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data)
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['BRANCH_CODE'].enable()
    //   this.ngBranchCode = result.branch.id
    // }
    // else {
    //   this.angForm.controls['BRANCH_CODE'].disable()
    //   this.ngBranchCode = result.branch.id
    //   this.branchCode = result.branch.CODE
    // }

    // this.angForm.patchValue({
    //   BRANCH_CODE: result.branch.id
    // })
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  scheme: any
  getAccount(event) {
    this._allAcc
    this.account = null
    this.scheme = event.name
    var actype = event.value
    var obj = [this.ngBranchCode, actype]
    this.ngAccount = null
    this.ngToAccount = null
    this.multiData = []
    switch (event.name) {
      case 'SB':
        this._allAcc.getSavingList(obj).subscribe(data => {
          this.account = data;

        })
        break;
      case 'GL':
        this._allAcc.getGLListAccount(obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'SH':
        this._allAcc.getShareList(obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'CA':
        this._allAcc.getCurrentList(obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'LN':
        this._allAcc.getTermLoanList(obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'TD':
        this._allAcc.getTermDepositList(obj).subscribe(data => {
          this.account = data;

        })
        break;
      case 'CC':
        this._allAcc.getCashCreditList(obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'GS':
        this._allAcc.getAnamatList(obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'PG':
        this._allAcc.getPigmyAccountList(obj).subscribe(data => {
          this.account = data;

        })
        break;
    }

  }
  multiData: any
  accountno: any
  checkValidaion() {
    var fromac = this.angForm.controls['FROM_AC'].value
    var toac = this.angForm.controls['TO_AC'].value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.accountno = [fromac, toac, branchCode, this.ngcode]
    if (this.angForm.controls['TO_AC'].value == '' || this.angForm.controls['TO_AC'].value == null) {

    } else if (this.angForm.controls['FROM_AC'].value <= this.angForm.controls['TO_AC'].value) {
      switch (this.scheme) {
        case 'SB':
          this.http.get(this.url + '/saving-master/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });
          break;
        case 'GL':
          this.http.get(this.url + '/gl-account-master/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });
          break;

        case 'SH':
          this.http.get(this.url + '/share-master/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });
          break;

        case 'CA':

          this.http.get(this.url + '/current-account-master/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });
          break;

        case 'LN':

          this.http.get(this.url + '/term-loan-master/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });
          break;

        case 'TD':

          this.http.get(this.url + '/term-deposits-master/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });
          break;
        case 'CC':

          this.http.get(this.url + '/cash-credit-master/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });
          break;

        case 'GS':
          this.http.get(this.url + '/anamat-gsm/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });

          break;

        case 'PG':

          this.http.get(this.url + '/pigmy-account-master/listalldata/' + this.accountno).subscribe((data) => {
            this.multiData = data;
          });
          break;
      }


    } else {
      Swal.fire('Oops', 'To Account Number Must Be Greater Than From Account Number', 'error');
      this.ngToAccount = null
      this.angForm.controls['TO_AC'].reset()
    }

  }
  getData() {
    this.companyGroupService.getCompanyGroupMasterBranchList(this.ngBranchCode).pipe(first()).subscribe(data => {
      this.companyCode = data;
    })
  }

  delfields(id) {
    this.multiData.splice(id, 1)
  }

  //set Amount Data when edit
  setAmountData(data, index) {
    if (this.multiData[index].hasOwnProperty('Amount')) {
      this.multiData[index].Amount = data.target.value;
    } else {
      this.multiData[index]['Amount'] = data.target.value;
    }
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
