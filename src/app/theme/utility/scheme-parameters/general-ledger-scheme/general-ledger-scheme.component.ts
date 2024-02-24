import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
//files for dropdown
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//default service files for dropdown
import { S1Service } from '../../../../shared/elements/s1.service';
// Service File For Handling CRUD Operation
import { GeneralLedgerSchemeService } from './general-ledger-scheme.service';
// Used to Call API
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface GeneralLedgerScheme {
  S_ACNOTYPE: string,
  S_APPL: number,
  S_NAME: string,
  S_SHNAME: string,
  S_INT_APPLICABLE: boolean,
  STAND_INSTRUCTION_ALLOW: boolean,
  INT_INSTRUCTION_ALLOW: boolean,
  MIN_INT_LIMIT: number,
}

@Component({
  selector: 'app-general-ledger-scheme',
  templateUrl: './general-ledger-scheme.component.html',
  styleUrls: ['./general-ledger-scheme.component.scss']
})
export class GeneralLedgerSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  //api 
  url = environment.base_url;


  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  generalLedgerScheme: GeneralLedgerScheme[];
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

  //variable to get ID to update
  updateID: number = 0;

  //Variable to route list
  firstTrue = true;
  filterData = {};
  newbtnShow: boolean;

  constructor(
    private http: HttpClient,
    private generalLedgerSchemeService: GeneralLedgerSchemeService,
    private s1Service: S1Service,
    private fb: FormBuilder,private translate:TranslateService) {
    this.generalLedgerSchemeService.getData().subscribe(data => {
      if (data.length == 0) {
        this.showButton = true
        this.updateShow = false

      } else {
        this.updateShow = true
        this.showButton = false
      }
    })
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
        this.http
          .post<DataTableResponse>(
            this.url + '/general-ledger-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.generalLedgerScheme = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: this.translate.instant('Utility.Action.Action'),
        },
        {
          title: this.translate.instant('Utility.General_Ledger_Scheme_Settings.Type'),
          data: 'S_ACNOTYPE'
        },
        {
          title: this.translate.instant('Utility.General_Ledger_Scheme_Settings.Scheme_Code'),
          data: 'S_APPL'
        },
        {
          title:this.translate.instant('Utility.General_Ledger_Scheme_Settings.Description'),
          data: 'S_NAME'
        },
        {
          title: this.translate.instant('Utility.General_Ledger_Scheme_Settings.Short_Name'),
          data: 'S_SHNAME'
        },
        // {
        //   title: 'Is Interest Applicable? ',
        //   data: 'S_INT_APPLICABLE'
        // },
        // {
        //   title: 'Minimum Interest Amount',
        //   data: 'MIN_INT_LIMIT'
        // },
        // {
        //   title: 'Is Standing Instruction Applicable?',
        //   data: 'STAND_INSTRUCTION_ALLOW'
        // },
        // {
        //   title: 'Is Interest Instruction Allowed ?',
        //   data: 'INT_INSTRUCTION_ALLOW'
        // }
      ],
      dom: 'Blrtip',
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['GL'],
      S_APPL: ['', [Validators.required, Validators.pattern]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_INT_APPLICABLE: [],
      STAND_INSTRUCTION_ALLOW: [],
      INT_INSTRUCTION_ALLOW: [],
      MIN_INT_LIMIT: ['', [Validators.pattern]]
    })
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_NAME': formVal.S_NAME,
      'S_SHNAME': formVal.S_SHNAME,
      'S_INT_APPLICABLE': (formVal.S_INT_APPLICABLE == true ? '1' : '0'),
      'STAND_INSTRUCTION_ALLOW': (formVal.STAND_INSTRUCTION_ALLOW == true ? '1' : '0'),
      'INT_INSTRUCTION_ALLOW': (formVal.INT_INSTRUCTION_ALLOW == true ? '1' : '0'),
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT
    }
    this.generalLedgerSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      // to reload after insertion of data
      //this.rerender();
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
    this.angForm.controls['S_APPL'].disable()
    this.generalLedgerSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;


      if (data.S_INT_APPLICABLE == '1') {
        document.getElementById('STAND_INSTRUCTION_ALLOW').removeAttribute("disabled");
        document.getElementById('INT_INSTRUCTION_ALLOW').removeAttribute("disabled");
        document.getElementById('MIN_INT_LIMIT').removeAttribute("disabled");
      }
      else {
        document.getElementById('STAND_INSTRUCTION_ALLOW').setAttribute("disabled", "true");
        document.getElementById('INT_INSTRUCTION_ALLOW').setAttribute("disabled", "true");
        document.getElementById('MIN_INT_LIMIT').setAttribute("disabled", "true");
        this.angForm.controls.STAND_INSTRUCTION_ALLOW.reset();
        this.angForm.controls.INT_INSTRUCTION_ALLOW.reset();
        this.angForm.controls.MIN_INT_LIMIT.reset();
      }

      this.angForm.setValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_NAME': data.S_NAME,
        'S_SHNAME': data.S_SHNAME,
        'S_INT_APPLICABLE': (data.S_INT_APPLICABLE == '1' ? true : false),
        'STAND_INSTRUCTION_ALLOW': (data.STAND_INSTRUCTION_ALLOW == '1' ? true : false),
        'INT_INSTRUCTION_ALLOW': (data.INT_INSTRUCTION_ALLOW == '1' ? true : false),
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['S_INT_APPLICABLE'] = (data.S_INT_APPLICABLE == true ? '1' : '0')
    data['STAND_INSTRUCTION_ALLOW'] = (data.STAND_INSTRUCTION_ALLOW == true ? '1' : '0')
    data['INT_INSTRUCTION_ALLOW'] = (data.INT_INSTRUCTION_ALLOW == true ? '1' : '0')


    this.generalLedgerSchemeService.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      //this.rerender();
      this.angForm.controls['S_APPL'].enable()

      this.resetForm();
    })
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //reset form
  resetForm() {
    this.createForm()
    this.angForm.controls['S_APPL'].enable()
  }

  //Method for delete data
  // delClickHandler(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to delete General Ledger Scheme data.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#229954',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.generalLedgerSchemeService.deleteData(id).subscribe(data1 => {
  //         this.generalLedgerScheme = data1;
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

  OpenLink(val) {

    if (val == 1) {
      this.firstTrue = true;
    }
  }

  //Function to enable/Disable fields according selection of Interest applicable list 
  isIntrestApplicable($event) {
    if ($event.target.checked) {
      document.getElementById('STAND_INSTRUCTION_ALLOW').removeAttribute("disabled");
      document.getElementById('INT_INSTRUCTION_ALLOW').removeAttribute("disabled");
      document.getElementById('MIN_INT_LIMIT').removeAttribute("disabled");
    }
    else {
      document.getElementById('STAND_INSTRUCTION_ALLOW').setAttribute("disabled", "true");
      document.getElementById('INT_INSTRUCTION_ALLOW').setAttribute("disabled", "true");
      document.getElementById('MIN_INT_LIMIT').setAttribute("disabled", "true");
      this.angForm.controls.STAND_INSTRUCTION_ALLOW.reset();
      this.angForm.controls.INT_INSTRUCTION_ALLOW.reset();
      this.angForm.controls.MIN_INT_LIMIT.reset();
    }
  }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#schemeparametertable tfoot tr').appendTo('#schemeparametertable thead');
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

  checkDuplicate(event) {

    let obj = {
      scheme: event.target.value
    }
    if (obj.scheme != '') {
      if (Number(obj.scheme) == 980) {
        this.generalLedgerSchemeService.duplicatecheck(obj).subscribe(data => {
          if (data.length != 0) {
            this.angForm.controls['S_APPL'].reset()
            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.scheme_Code')}`, 'error')
          }
        })
      } else {
        this.angForm.controls['S_APPL'].reset()
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.scheme_code_980')}`, 'error')
      }

    }
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
