
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import {SchemeLinkingWithDService} from './scheme-linking-with-d.service';
import {DocumentMasterService} from '../../information/document-master/document-master.service';
import { Scheme4Service } from '../../../../../shared/elements/scheme4.service';
import { SchemeTypeDropdownService} from '../../../../../shared/dropdownService/scheme-type-dropdown.service';

import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import{environment} from '../../../../../../environments/environment'

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface SchemeLinkingWithD {
  SCHEME_CODE:string;
  DOCUMENT_CODE:string;
}
interface DocumentMaster {
 
  DOCUMENT_CODE:string;
  NAME:string
}

@Component({
  selector: 'app-scheme-linking-with-d',
  templateUrl: './scheme-linking-with-d.component.html',
  styleUrls: ['./scheme-linking-with-d.component.scss'],
})

export class SchemeLinkingWithDComponent implements OnInit , AfterViewInit, OnDestroy {
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
 angForm: FormGroup;
 dtExportButtonOptions: any = {};
 dtExportOptions:any ={}
 documentMaster:DocumentMaster[];
 schemeLinkingWithD: SchemeLinkingWithD[];
 private dataSub: Subscription = null;
// Variables for search 
filterObject: { name: string; type: string; }[];
filter: any;
filterForm: FormGroup;
// Variables for hide/show add and update button
showButton: boolean = true;
updateShow: boolean = false;

//variable to get ID to update
updateID: number = 0;
page: number = 1;
//filter variable
filterData = {};

 showDialog = false;
 @Input() visible: boolean;
 public config: any;
 //title select variables
 schemetype: Array<IOption> = this.SchemeTypes.getCharacters(); 
  simpleOption: Array<IOption> = this.Scheme4Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  StatementCodeDropdown:any;

  constructor(public documentMasterService:DocumentMasterService, 
    public schemeLinkingWithDService: SchemeLinkingWithDService,  
    public SchemeTypes:SchemeTypeDropdownService,
     private http: HttpClient,public Scheme4Service: Scheme4Service, 
     private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.getData();
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
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
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        this.page = dataTableParameters.start / dataTableParameters.length;
        this.http
          .post<DataTableResponse>(
            this.url +'/scheme-linking-with-d',
            dataTableParameters
          ).subscribe(resp => {
            this.schemeLinkingWithD = resp.data;
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
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Scheme',
          data: 'SCHEME_CODE'
        }, {
          title: 'Code',
          data: 'DOCUMENT_CODE'
        }
      ],
      dom: 'lrtip',
      

      
    };
 
    this.runTimer();
    this.dataSub = this.Scheme4Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
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

      SCHEME_CODE: ['', [Validators.required]],
      // DOCUMENT_CODE:['']
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'SCHEME_CODE': formVal.SCHEME_CODE,
      'DOCUMENT_CODE':formVal.CODE,
      
    }
    this.schemeLinkingWithDService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
       //To clear form
    this.angForm.reset();
    }, (error) => {
      console.log(error)
    })
   
  }
  getData(){
    this.documentMasterService.getData().subscribe(data2 =>{
      this.documentMaster = data2;
      console.log(data2);
      
    })
  }
  
    // Reset Function
    resetForm() {
      this.createForm();
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

    //Method for append data into fields
  editClickHandler(id) {
    
    this.showButton = false;
    this.updateShow = true;
    this.schemeLinkingWithDService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        
        'SCHEME_CODE': data.SCHEME_CODE,
      'DOCUMENT_CODE':data.DOCUMENT_CODE,
        
      })
    })
  }
 
 
 //Method for update data 
 updateData() {
  let data = this.angForm.value;
  data['id'] = this.updateID;
  this.schemeLinkingWithDService.updateData(data).subscribe(() => {
    Swal.fire('Success!', 'Record Updated Successfully !', 'success');
    this.showButton = true;
    this.updateShow = false;
    this.rerender();
    this.resetForm();
  })
}

  //function for delete button clicked
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
      this.schemeLinkingWithDService.deleteData(id).subscribe(data1 => {
        this.schemeLinkingWithD = data1;
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


}
