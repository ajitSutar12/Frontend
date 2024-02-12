import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { CompanyGroupMasterService } from './company-group-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
//Used to dropdown
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../../shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { VoucherEntryService } from 'src/app/theme/transaction/voucher-entry/voucher-entry.service';
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
interface CompanyGroupMaster {
  id: number;
  COMP_CODE: number;
  NAME: string;
  ADDRESS: string;
  AC_ACNOTYPE: string;
  AC_TYPE: string;
  AC_NO: number;
}

@Component({
  selector: 'app-company-group-master',
  templateUrl: './company-group-master.component.html',
  styleUrls: ['./company-group-master.component.scss']
})
export class CompanyGroupMasterComponent implements OnInit, AfterViewInit, OnDestroy {
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
  companyGroupMaster: CompanyGroupMaster[];
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

  ngscheme: any = null
  ngBranchCode
  branchCode
  branch_code

  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  updateID: number = 0;
  schemeCode: any;

  // schemeType: Array<IOption> = this.schemeTypeDropdown.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  //for search functionality
  filterData = {};
  private dataSub: Subscription = null;
  scheme: any;
  selectedCode: any
  //Scheme type variable
  schemeTypeCode: string = 'GL'
  companyACNo: any;
  schemeType: any[]
  master: any[]
  constructor(
    private http: HttpClient,
    private companyGroupMasterService: CompanyGroupMasterService,
    private fb: FormBuilder,
    public schemeTypeDropdown: SchemeTypeDropdownService,
    private _schemeService: SchemeAccountNoService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
    private _service: VoucherEntryService,
    private ownbranchMasterService: OwnbranchMasterService,

    private config: NgSelectConfig, private translate:TranslateService) { }


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
            this.url + '/company-group-master',
            dataTableParameters
          ).subscribe(resp => {
            console.log(resp.data)
            this.companyGroupMaster = resp.data;
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
          title: this.translate.instant('master.Company_Group_Master.Code'),
          data: 'COMP_CODE'
        }, {
          title: this.translate.instant('master.Company_Group_Master.Name'),
          data: 'NAME'
        }, {
          title: this.translate.instant('master.Company_Group_Master.Address'),
          data: 'ADDRESS'
        }, {
          title: this.translate.instant('master.Company_Group_Master.Scheme_Type'),
          data: 'AC_ACNOTYPE'
        }, {
          title: this.translate.instant('master.Company_Group_Master.Scheme_Code'),
          data: 'AC_TYPE'
        }, {
          title: this.translate.instant('master.Company_Group_Master.Account_Number'),
          data: 'AC_NO'
        }],
      dom: 'Blrtip',
    };
    this.createForm();

    this.runTimer();
    this.dataSub = this.schemeTypeDropdown.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    // this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeTypeCode).pipe(first()).subscribe(data => {
    //   this.scheme = data;
    // })
    //Scheme Code
    this._service.getSchemeCodeList().subscribe(data => {
      console.log(data);
      this.master = data;
      this.schemeType = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]

    })

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
    // this.subSalaryDivision.getSalaryMasterList().pipe(first()).subscribe(data => {
    //   this.division = data;
    // })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
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
      COMP_CODE: [''],
      NAME: [''],
      ADDRESS: [''],
      AC_ACNOTYPE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.pattern]],
      AC_NO: ['', [Validators.pattern, Validators.required]],
      BRANCH_CODE: ['']

    });
  }
  // Method to insert data into database through NestJS
  submit() {

    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {

      'COMP_CODE': formVal.COMP_CODE,
      'NAME': formVal.NAME,
      'ADDRESS': formVal.ADDRESS,
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'BRANCH_CODE': this.ngBranchCode

    }
    this.companyGroupMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
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
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.companyGroupMasterService.getFormData(id).subscribe(data => {
      this.ngBranchCode = Number(data.BRANCH_CODE),

        this.updateID = data.id;
      this.selectedCode = data.AC_ACNOTYPE,
        this.selectedSchemeCode()
      this.ngscheme = data.AC_TYPE,
        this.getIntroducer();
      this.ngacno = Number(data.AC_NO),
        this.angForm.patchValue({

          'COMP_CODE': data.COMP_CODE,
          'NAME': data.NAME,
          'ADDRESS': data.ADDRESS,
        })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.companyGroupMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }

  // Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Company Group Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.companyGroupMasterService.deleteData(id).subscribe(data1 => {
          this.companyGroupMaster = data1;
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
    this.selectedCode = null
    this.ngscheme = null
    this.ngacno = null
    this.ngBranchCode = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data)
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

  selectedSchemeCode() {

    this.scheme = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        let obj = { label: element.S_APPL, value: element.id, name: element.S_NAME };
        this.scheme.push(obj)
      }
    });
    this.ngscheme = null
    this.ngacno = null
  }

  acno: any = null
  obj: any
  account: any[]
  ngacno: any

  //get account no according scheme for introducer
  getIntroducer() {
    // let data1: any = localStorage.getItem('user');
    // let result = JSON.parse(data1);
    // let branchCode = result.branch.id;
    let scheme = this.ngscheme
    this.obj = [scheme, this.ngBranchCode]
    this.ngacno = null
    switch (this.selectedCode) {
      case 'SB':
        this._schemeService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.account = data;
          console.log(this.account)

        })
        break;

      case 'SH':
        this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'CA':
        this._schemeService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'LN':
        this._schemeService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'TD':
        this._schemeService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'DS':
        this._schemeService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'CC':
        this._schemeService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'GS':
        this._schemeService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'PG':
        this._schemeService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'AG':
        this._schemeService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;

      case 'IV':
        this._schemeService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.account = data;

        })
        break;
      case 'GL':
        this._schemeService.getACMasterList2().pipe(first()).subscribe(data => {
          this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data1 => {
            this.account = data.filter(ele => ele.label !== Number(data1['CASH_IN_HAND_ACNO']))
          })
        })
        break;
    }
  }

  //get introducer name according account no

  getAC_NO(value: any) {
    this.angForm.patchValue({
      'AC_NO': value.AC_NO
    })
  }

  getData() {
    // this.ngscheme = null
    this.ngacno = null
    // this.selectedCode = null
    this.getIntroducer()
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
