import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
//import { AlternateCodeService } from '../../../../shared/elements/alternatecode.service';
import { IOption } from 'ng-select';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { LockersSchemeService } from './lockers-scheme.service';
import Swal from 'sweetalert2';
//Dropdown service file
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface LockeScheme {
  S_ACNOTYPE: string;
  S_APPL: string;
  S_NAME: string;
  S_SHNAME: string;
  S_GLACNO: string;
  LOCKER_RENT_ACNO: string;
  LOCKER_RECBL_RENT_ACNO: string;
  LOCKER_DEPOSIT_APPLICABLE: boolean;
}

@Component({
  selector: 'app-lockers-scheme',
  templateUrl: './lockers-scheme.component.html',
  styleUrls: ['./lockers-scheme.component.scss'],
})
export class LockersSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
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
  lockeScheme: LockeScheme[];
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
  //variable to get Id to update
  updateID: number = 0;
  //Dropdown option variable
  acMaster: any
  ngglac: any = null
  nglocker: any = null
  ngreceivablelocker: any = null
  ngschemecode: any = null



  filterData = {}
  newbtnShow: boolean;

  constructor(
    private http: HttpClient,
    private lockersSchemeService: LockersSchemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) { }

  ngOnInit(): void {
    this.createForm();
    // this.getOneColumn();
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
            this.url + '/lockers-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.lockeScheme = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: 'Action',
          // render: function (data: any, type: any, full: any) {
          //   return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="deletebtn btn btn-outline-primary btn-sm">Delete</button>';
          // }
        },
        {
          title: 'Type',
          data: 'S_ACNOTYPE'
        },
        {
          title: 'Scheme Code',
          data: 'S_APPL'
        },
        {
          title: 'Description',
          data: 'S_NAME'
        },
        {
          title: 'Short Name',
          data: 'S_SHNAME'
        },
        {
          title: 'GL Account Number',
          data: 'S_GLACNO'
        },
        {
          title: 'Locker Rent Account',
          data: 'LOCKER_RENT_ACNO'
        },
        {
          title: 'Receivable Locker Rend Account',
          data: 'LOCKER_RECBL_RENT_ACNO'
        },
        {
          title: 'Locker Deposit Applicable',
          data: 'LOCKER_DEPOSIT_APPLICABLE'
        }
      ],
      dom: 'Bfrtip',
    };
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
    })
  }

  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['LK'],
      S_APPL: ['', [Validators.required]],
      S_SHNAME: ['', [Validators.pattern, Validators.required]],
      S_NAME: ['', [Validators.pattern, Validators.required]],
      S_GLACNO: ['', [Validators.required]],
      LOCKER_RENT_ACNO: [''],
      LOCKER_RECBL_RENT_ACNO: [''],
      LOCKER_DEPOSIT_APPLICABLE: ['']
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_SHNAME': formVal.S_SHNAME,
      'S_NAME': formVal.S_NAME,
      'S_GLACNO': formVal.S_GLACNO,
      'LOCKER_RENT_ACNO': formVal.LOCKER_RENT_ACNO,
      'LOCKER_RECBL_RENT_ACNO': formVal.LOCKER_RECBL_RENT_ACNO,
      'LOCKER_DEPOSIT_APPLICABLE': (formVal.LOCKER_DEPOSIT_APPLICABLE == true ? '1' : '0'),

    }
    console.log(dataToSend);
    this.lockersSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
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

    this.lockersSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngglac = Number(data.S_GLACNO)
      this.nglocker = Number(data.LOCKER_RECBL_RENT_ACNO)
      this.ngreceivablelocker = Number(data.LOCKER_RECBL_RENT_ACNO)
      // this.ngschemecode=Number(data.S_APPL)
      this.angForm.patchValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_SHNAME': data.S_SHNAME,
        'S_NAME': data.S_NAME,
        // 'S_GLACNO': data.S_GLACNO,
        // 'LOCKER_RENT_ACNO': data.LOCKER_RENT_ACNO,
        // 'LOCKER_RECBL_RENT_ACNO': data.LOCKER_RECBL_RENT_ACNO,
        'LOCKER_DEPOSIT_APPLICABLE': (data.LOCKER_DEPOSIT_APPLICABLE == '1' ? true : false),

      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['LOCKER_DEPOSIT_APPLICABLE'] = (data.LOCKER_DEPOSIT_APPLICABLE == true ? '1' : '0')
    this.lockersSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      //this.rerender();
      this.resetForm();
      this.angForm.controls['S_APPL'].enable()

    })
  }
  resetForm() {
    this.createForm();
    this.ngglac = null
    this.nglocker = null
    this.ngreceivablelocker = null
    this.angForm.controls['S_APPL'].enable()

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
      title: 'Are you sure?',
      text: "Do you want to delete bank master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.lockersSchemeService.deleteData(id).subscribe(data1 => {
          this.lockeScheme = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
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
      if (obj.scheme >= 351 && obj.scheme <= 400) {
        this.lockersSchemeService.duplicatecheck(obj).subscribe(data => {
          if (data.length != 0) {
            this.angForm.controls['S_APPL'].reset()
            Swal.fire('Oops', 'This scheme Code is already exists', 'error')
          }
        })
      } else {
        this.angForm.controls['S_APPL'].reset()
        Swal.fire('Oops', 'Please enter the scheme code within 351 to 400 this range', 'error')
      }
    }
  }
  onFocus(ele: NgSelectComponent) {  
    ele.open()
  }

}

