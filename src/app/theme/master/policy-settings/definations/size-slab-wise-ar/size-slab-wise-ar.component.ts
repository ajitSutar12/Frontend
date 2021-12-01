import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import {SizeSlabWiseService} from './size-slab-wise-ar.service';
// for dropdown
//import { StatementTypeService } from '../../../../shared/elements/statement-type.service';
import { SchemeTypeDropdownService} from '../../../../../shared/dropdownService/scheme-type-dropdown.service';
import { Int8Service } from '../../../../../shared/elements/int8.service';
import {IntrestCategoryMasterDropdownService} from '../../../../../shared/dropdownService/interest-category-master-dropdown.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { id } from '@swimlane/ngx-datatable';
import { first } from 'rxjs/operators';
import {environment} from '../../../../../../environments/environment'


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
  //api
  url = environment.base_url;
   // For reloading angular datatable after CRUD operation
   @ViewChild(DataTableDirective, { static: false })
   dtElement: DataTableDirective;
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportOptions:any ={}


  //title select variables
 ///intrestCategoryMaster: Array<IOption> = this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList();
  
 //title select variables
 schemetype: Array<IOption> = this.SchemeTypes.getCharacters(); selectedOption = '3';
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
 // Variables for hide/show add and update and new button
 showButton: boolean = true;
 updateShow: boolean = false;
 newbtnShow: boolean = false;
 addShowButton: boolean = true
 UpdateShowButton: boolean = false
 multiField = [];

 //variable to get ID to update
 updateID: number = 0;
 page: number = 1;
 //filter variable
 filterData = {};
 counter = 1;
 obj : any;
 rowData= [];
  showDialog = false;
  @Input() visible: boolean;
  public config: any;
  intrestCategoryMaster:any;
  constructor( 
      // for dropdown
    public SchemeTypes:SchemeTypeDropdownService,
    public Int8Service:Int8Service,
    public intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService, 
    private http: HttpClient,
    private fb: FormBuilder,
    public SizeSlabWiseService:SizeSlabWiseService ) { this.createForm(); }

  ngOnInit(): void {

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
            this.url+'/deposit-intrest-rate',
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
   
   
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      console.log(data);
      this.intrestCategoryMaster = data;
      
    })
   
  }

  createForm() {
    this.angForm = this.fb.group({
      SERIAL_NO:[''],
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
      'Data':this.rowData,
      'FieldData': this.multiField,
    }
    console.log(dataToSend);
    this.SizeSlabWiseService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
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
//Method for delete data
delClickHandler(id: number) {
  Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to delete all rows data.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#229954',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.SizeSlabWiseService.deleteData(id).subscribe(data1 => {
        this.rowData = data1;
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
    //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.SizeSlabWiseService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.multiField = data.rate
      this.angForm.patchValue({
        'ACNOTYPE': data.ACNOTYPE,
        'INT_CATEGORY': data.INT_CATEGORY
      })
    })
  }
 

 //Method for update data 
 updateData() {
  let data = this.angForm.value;
  data['id'] = this.updateID;
  data['FieldData'] = this.multiField
  this.SizeSlabWiseService.updateData(data).subscribe(() => {
    Swal.fire('Success!', 'Record Updated Successfully !', 'success');
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
    this.multiField = []
    this.resetForm();
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

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiField = [];
    this.resetForm();
  }
addField() {
    const formVal = this.angForm.value;
    var object = {
      EFFECT_DATE: formVal.EFFECT_DATE,
      INT_RATE: formVal.INT_RATE,
     
    }
    this.multiField.push(object);
    console.log(this.multiField)
    this.resetField()
  }
  resetField() {
    this.angForm.controls['INT_RATE'].reset();
    this.angForm.controls['EFFECT_DATE'].reset();
  }
  intIndex: number
  intID: number
  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    const formVal = this.angForm.value;
    var object = {
      EFFECT_DATE: formVal.EFFECT_DATE,
      INT_RATE: formVal.INT_RATE,
      id: this.intID
    }
    this.multiField[index] = object;
    this.resetField()
  }

  editField(id) {
    this.intIndex = id
    this.intID = this.multiField[id].id;
    this.addShowButton = false;
    this.UpdateShowButton = true;
    this.angForm.patchValue({
      EFFECT_DATE: this.multiField[id].EFFECT_DATE,
      INT_RATE: this.multiField[id].INT_RATE,
    })
  }
  delField(id) {
    this.multiField.splice(id, 1)
  }
  

}