import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { GeneralSubAcSchemeService } from './general-sub-ac-scheme.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
//Dropdown service file
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface GeneralMaster {
  S_ACNOTYPE: string,
  S_APPL: string,
  S_NAME: string,
  S_SHNAME: string,
  S_GLACNO: string,
  BALANCE_ADD_APPLICABLE: boolean
}

@Component({
  selector: 'app-general-sub-ac-scheme',
  templateUrl: './general-sub-ac-scheme.component.html',
  styleUrls: ['./general-sub-ac-scheme.component.scss']
})
export class GeneralSubAcSchemeComponent implements OnInit, AfterViewInit, OnDestroy {

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  generalMaster: GeneralMaster[];
  otherTrue = true;
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

  //Dropdown option variable
  acMaster: any

  constructor(public generalSubAcSchemeService: GeneralSubAcSchemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder,
    private http: HttpClient) { }

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
            'http://localhost:4000/general-sub-ac-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.generalMaster = resp.data;
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
          title: 'Type'
        },
        {
          title: 'Scheme Code'
        },
        {
          title: 'Description'
        },
        {
          title: 'Short Name'
        },
        {
          title: 'G.L. A/c No.'
        },
        {
          title: 'Is Balance Entry Applicable ?'
        },
      ],
      dom: 'Blrtip',
    };
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
    })
  }

  OpenLink(val) {
    if (val == 1) {
      this.otherTrue = true;
    }
  }

  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['GS'],
      S_APPL: ['', [Validators.required, Validators.pattern]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_GLACNO: ['', [Validators.required, Validators.pattern]],
      BALANCE_ADD_APPLICABLE: [false],
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_NAME': formVal.S_NAME,
      'S_SHNAME': formVal.S_SHNAME,
      'S_GLACNO': formVal.S_GLACNO,
      'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
    }
    this.generalSubAcSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
    }, (error) => {
      console.log(error)
    })
    // To clear form
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.generalSubAcSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_NAME': data.S_NAME,
        'S_SHNAME': data.S_SHNAME,
        'S_GLACNO': data.S_GLACNO,
        'BALANCE_ADD_APPLICABLE': data.BALANCE_ADD_APPLICABLE,
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.generalSubAcSchemeService.updateData(data).subscribe(() => {
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
