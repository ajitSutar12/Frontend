import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { SavingandPigmyInterestRatesService } from './interest-rate-for-sapd.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//Service file of dropdown
import { IntrestCategoryMasterDropdownService } from '../../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service'
import { first } from 'rxjs/operators';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface SavingandPigmyInterestRate {
  ACNOTYPE: string
  INT_CATEGORY: string
  EFFECT_DATE: Date
  INT_RATE: number

}

@Component({
  selector: 'app-interest-rate-for-sapd',
  templateUrl: './interest-rate-for-sapd.component.html',
  styleUrls: ['./interest-rate-for-sapd.component.scss'],
})
export class InterestRateForSAPDComponent implements OnInit, AfterViewInit, OnDestroy {
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  savingandPigmyInterestRate: SavingandPigmyInterestRate[];
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
  // Variables for hide/show add and update and new button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};


  //scheme dropdown variables
  interestcategory;
  simpleOption: Array<IOption> = this.schemeTypeDropdownService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  constructor(
    private http: HttpClient,
    private savingandPigmyInterestRatesService: SavingandPigmyInterestRatesService,
    private schemeTypeDropdownService: SchemeTypeDropdownService,
    private intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private fb: FormBuilder) { }

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
            'http://localhost:4000/saving-and-pigmy-interest-rates',
            dataTableParameters
          ).subscribe(resp => {
            this.savingandPigmyInterestRate = resp.data;
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
          title: 'Effected Date',
          data: 'EFFECT_DATE'
        },
        {
          title: 'Scheme Type',
          data: 'ACNOTYPE'
        }, {
          title: 'Int.Category',
          data: 'INT_CATEGORY'
        },
        {
          title: 'Interest Rate',
          data: 'INT_RATE'
        }
      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.dataSub = this.schemeTypeDropdownService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.interestcategory = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      ACNOTYPE: ['', [Validators.required]],
      INT_CATEGORY: ['', [Validators.required]],
      EFFECT_DATE: ['', [Validators.required]],
      INT_RATE: ['', [Validators.required, Validators.pattern]],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'EFFECT_DATE': formVal.EFFECT_DATE,
      'ACNOTYPE': formVal.ACNOTYPE,
      'INT_CATEGORY': formVal.INT_CATEGORY,
      'INT_RATE': formVal.INT_RATE
    }
    this.savingandPigmyInterestRatesService.postData(dataToSend).subscribe(data1 => {
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
    this.newbtnShow = true;
    this.savingandPigmyInterestRatesService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'EFFECT_DATE': data.EFFECT_DATE,
        'ACNOTYPE': data.ACNOTYPE,
        'INT_CATEGORY': data.INT_CATEGORY,
        'INT_RATE': data.INT_RATE
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.savingandPigmyInterestRatesService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.rerender();
      this.resetForm();
    })
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
      text: "Do you want to delete Interest Rate for saving and pigmy Deposit data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.savingandPigmyInterestRatesService.deleteData(id).subscribe(data1 => {
          this.savingandPigmyInterestRate = data1;
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

  // Reset Function
  resetForm() {
    this.createForm();
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
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
}
