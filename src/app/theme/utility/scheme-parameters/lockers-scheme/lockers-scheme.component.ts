import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

  constructor(
    private http: HttpClient,
    private lockersSchemeService: LockersSchemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder) { }

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
        if (dataTableParameters.search.value != '') {
          this.filter = dataTableParameters.search.value;
          this.filterObject = [
            // { name: "A_BALCODE", type: "default" },
            // { name: "A_ACHEAD", type: "default" },
            // { name: "A_ACTYPE", type: "default" }
          ]
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length,
            filter: dataTableParameters.search.value,
            filter_in: this.filterObject
          }
        }
        else {
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length
          }
        }
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
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="deletebtn btn btn-outline-primary btn-sm">Delete</button>';
          }
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
          title: 'G.L. A/c No.',
          data: 'S_GLACNO'
        },
        {
          title: 'Locker Rent A/c',
          data: 'LOCKER_RENT_ACNO'
        },
        {
          title: 'Receivable Locker Rend A/C',
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
      S_GLACNO: [''],
      LOCKER_RENT_ACNO: [''],
      LOCKER_RECBL_RENT_ACNO: [''],
      LOCKER_DEPOSIT_APPLICABLE: ['']
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_SHNAME': formVal.S_SHNAME,
      'S_NAME': formVal.S_NAME,
      'S_GLACNO': formVal.S_GLACNO,
      'LOCKER_RENT_ACNO': formVal.LOCKER_RENT_ACNO,
      'LOCKER_RECBL_RENT_ACNO': formVal.LOCKER_RECBL_RENT_ACNO,
      'LOCKER_DEPOSIT_APPLICABLE': formVal.LOCKER_DEPOSIT_APPLICABLE,

    }
    console.log(dataToSend);
    this.lockersSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
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
    this.lockersSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_SHNAME': data.S_SHNAME,
        'S_NAME': data.S_NAME,
        'S_GLACNO': data.S_GLACNO,
        'LOCKER_RENT_ACNO': data.LOCKER_RENT_ACNO,
        'LOCKER_RECBL_RENT_ACNO': data.LOCKER_RECBL_RENT_ACNO,
        'LOCKER_DEPOSIT_APPLICABLE': data.LOCKER_DEPOSIT_APPLICABLE

      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.lockersSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    })
  }
  resetForm() {
    this.createForm();
  }
  //Method for delete data
  /*  delClickHandler(id: number) {
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
    */

  ngAfterViewInit(): void {
    this.dtTrigger.next();
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

