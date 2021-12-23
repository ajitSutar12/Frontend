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

  schemeType: Array<IOption> = this.schemeTypeDropdown.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  //for search functionality
  filterData = {};
  private dataSub: Subscription = null;
  scheme: any;

  //Scheme type variable
  schemeTypeCode: string = 'GL'
  companyACNo: any;

  constructor(
    private http: HttpClient,
    private companyGroupMasterService: CompanyGroupMasterService,
    private fb: FormBuilder,
    public schemeTypeDropdown: SchemeTypeDropdownService,
    private schemeService: SchemeAccountNoService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService) { }


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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/company-group-master',
            dataTableParameters
          ).subscribe(resp => {
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
          title: 'Action'
        },
        {
          title: 'Code',
          data: 'COMP_CODE'
        }, {
          title: 'Name',
          data: 'NAME'
        }, {
          title: 'Address',
          data: 'ADDRESS'
        }, {
          title: 'Scheme Type',
          data: 'AC_ACNOTYPE'
        }, {
          title: 'Scheme code',
          data: 'AC_TYPE'
        }, {
          title: 'A/c No',
          data: 'AC_NO'
        }],
      dom: 'Blrtip',
    };
    this.createForm();

    this.runTimer();
    this.dataSub = this.schemeTypeDropdown.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeTypeCode).pipe(first()).subscribe(data => {
      this.scheme = data;
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
      AC_NO: ['', [Validators.pattern, Validators.required]]
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
      this.updateID = data.id;
      this.angForm.setValue({

        'COMP_CODE': data.COMP_CODE,
        'NAME': data.NAME,
        'ADDRESS': data.ADDRESS,
        'AC_ACNOTYPE': data.AC_ACNOTYPE,
        'AC_TYPE': data.AC_TYPE,
        'AC_NO': data.AC_NO,

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
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  acno: any
    //get account no according scheme for introducer
    getIntroducer(acno) {
      switch (acno) {
        case 'SB':
          console.log("saving");
          this.schemeService.getSavingSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'SH':
          console.log("Share");
          this.schemeService.getShareSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'CA':
          console.log("Current account");
          this.schemeService.getCurrentAccountSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'LN':
          console.log("Term Loan");
          this.schemeService.getTermLoanSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'TD':
          console.log("Term Deposit");
          this.schemeService.getTermDepositSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'DS':
          console.log("Dispute Loan");
          this.schemeService.getDisputeLoanSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'CC':
          console.log("Cash Credit Loan");
          this.schemeService.getCashCreditSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'GS':
          console.log("anamat");
          this.schemeService.getAnamatSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'PG':
          console.log("Pigmy account");
          this.schemeService.getPigmyAccountSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'AG':
          console.log("Pigmy agent");
          this.schemeService.getPigmyAgentSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
  
        case 'IV':
          console.log("Investment");
          this.schemeService.getInvestmentSchemeList().pipe(first()).subscribe(data => {
            this.companyACNo = data;
          })
          break;
      }
    }

      //get introducer name according account no
   
  getAC_NO(value: any) {
    this.angForm.patchValue({
      'AC_NO' : value.AC_NO
    })
  }
}
