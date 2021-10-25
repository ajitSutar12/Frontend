import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import {SizeSlabWiseService} from './size-slab-wise-ar.service';
import { Scheme8Service } from '../../../../../shared/elements/scheme8.service';
import { Int8Service } from '../../../../../shared/elements/int8.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';


// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface SizeSlabWise {
  SERIAL_NO: number,
  EFFECT_DATE: string,
  INT_RATE:string
  ACNOTYPE :string,
  INT_CATEGORY:string,
}

@Component({
  selector: 'app-size-slab-wise-ar',
  templateUrl: './size-slab-wise-ar.component.html',
  styleUrls: ['./size-slab-wise-ar.component.scss'],
})


export class SizeSlabWiseARComponent implements OnInit , AfterViewInit, OnDestroy {
   // For reloading angular datatable after CRUD operation
   @ViewChild(DataTableDirective, { static: false })
   dtElement: DataTableDirective;
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportOptions:any ={}
  //title select variables
  simpleOption: Array<IOption> = this.Scheme8Service.getCharacters();
  int: Array<IOption> = this.Int8Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  sizeSlabWise: SizeSlabWise[];
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
  constructor(public Scheme8Service: Scheme8Service, 
    public Int8Service: Int8Service, 
    private http: HttpClient,
    private fb: FormBuilder,
    public SizeSlabWiseService:SizeSlabWiseService ) { this.createForm(); }

  message = {
    scheme_type: "",
    int_category: "",
    scheme: "",
  };

  ngOnInit(): void {
    // this.dtExportButtonOptions = {
    //   ajax: 'fake-data/slab-wise.json',
    //   columns: [
    //     {
    //       title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
    //       }
    //     }, {
    //       title: 'Sr No.',
    //       data: 'srno'
    //     }, {
    //       title: 'Effected Date',
    //       data: 'Effected_Date'
    //     }, {
    //       title: 'Interest Rate',
    //       data: 'Interest_Rate'
    //     },
    //   ],
    //   // dom: 'Bfrtip',
    //   // buttons: [
    //   //   'copy',
    //   //   'print',
    //   //   'excel',
    //   //   'csv'
    //   // ],

    //   //row click handler code
    //   rowCallback: (row: Node, data: any[] | Object, index: number) => {
    //     const self = this;
    //     $('td', row).off('click');
    //     $('td', row).on('click', '#editbtn', () => {
    //       self.editClickHandler(data);
    //     });
    //     $('td', row).on('click', '#delbtn', () => {
    //       self.delClickHandler(data);
    //     });
    //     return row;
    //   }
    // };
 
    // Fetching Server side data
    this.dtExportOptions = {
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
            'http://localhost:4000/deposit-intrest-rate',
            dataTableParameters
          ).subscribe(resp => {
            this.sizeSlabWise = resp.data;
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
          title: 'Scheme',
          data: 'ACNOTYPE'
        },
        {
          title: 'Int.Category',
          data: 'INT_CATEGORY'
        }
      
      ],
      dom:'lrtip'
    
    };
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
            'http://localhost:4000/deposit-intrest-rate',
            dataTableParameters
          ).subscribe(resp => {
            this.sizeSlabWise = resp.data;
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
          title: 'Sr.No.',
          data: 'SERIAL_NO'
        },
        {
          title: 'Effect Date',
          data: 'EFFECT_DATE'
        },
        {
          title: 'Interest Rate',
          data: 'INT_RATE'
        },
      ],
      dom:'lrtip'
    
    };

   

   
  }

  createForm() {
    this.angForm = this.fb.group({
      SERIAL_NO:['',[Validators.pattern]],
      EFFECT_DATE: ['',[ Validators.required]],
      INT_RATE: ['',[ Validators.required,Validators.pattern]],
      ACNOTYPE: ['',[ Validators.required]],
      INT_CATEGORY: ['',[ Validators.required]]
    });
  }
  
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'ACNOTYPE': formVal.ACNOTYPE,
      'INT_CATEGORY': formVal.INT_CATEGORY,
      'SERIAL_NO': formVal.SERIAL_NO,
      'EFFECT_DATE': formVal.EFFECT_DATE,
      'INT_RATE': formVal.INT_RATE,
    }
    this.SizeSlabWiseService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
       //To clear form
    this.angForm.reset();
    }, (error) => {
      console.log(error)
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
    this.SizeSlabWiseService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'ACNOTYPE': data.ACNOTYPE,
        'INT_CATEGORY': data.INT_CATEGORY,
        'SERIAL_NO': data.SERIAL_NO,
        'EFFECT_DATE': data.EFFECT_DATE,
        'INT_RATE': data.INT_RATE
        
      })
    })
  }
 
  // //function for edit button clicked
  // editClickHandler(info: any): void {
  //   this.message.scheme_type = info.scheme_type;
  //   this.message.int_category = info.int_category;
  //   this.showButton = false;
  //   this.updateShow = true;
  // }
 //Method for update data 
 updateData() {
  let data = this.angForm.value;
  data['id'] = this.updateID;
  this.SizeSlabWiseService.updateData(data).subscribe(() => {
    Swal.fire('Success!', 'Record Updated Successfully !', 'success');
    this.showButton = true;
    this.updateShow = false;
    this.rerender();
    this.resetForm();
  })
}

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.scheme_type = info.scheme_type;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete scheme type." + this.message.scheme_type + "  data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
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

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }
 
  

}