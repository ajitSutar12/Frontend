import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { InterestRateForLoanandCCService } from './interest-rate-for-lacc.service'
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
interface InterestRateForLoanandCC {
  ACNOTYPE: string
  INT_CATEGORY: string
  EFFECT_DATE: Date
  FROM_AMOUNT: number
  TO_AMOUNT: number
  INT_RATE: number
  PENAL_INT_RATE: number
}

@Component({
  selector: 'app-interest-rate-for-lacc',
  templateUrl: './interest-rate-for-lacc.component.html',
  styleUrls: ['./interest-rate-for-lacc.component.scss'],
})
export class InterestRateForLACCComponent implements OnInit, AfterViewInit, OnDestroy {
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  interestRateForLoanandCC: InterestRateForLoanandCC[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  dtModalOptions: DataTables.Settings = {};
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
    private interestRateForLoanandCCService: InterestRateForLoanandCCService,
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
            'http://localhost:4000/interest-rate-for-loan-and-cc',
            dataTableParameters
          ).subscribe(resp => {
            this.interestRateForLoanandCC = resp.data;
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
          title: 'From Amount',
          data: 'FROM_AMOUNT'
        },
        {
          title: 'Upto Amount',
          data: 'TO_AMOUNT'
        },
        {
          title: 'Interest Rate',
          data: 'INT_RATE'
        },
        {
          title: 'Penal Interest Rate',
          data: 'PENAL_INT_RATE'
        },
      ],
      dom: 'Blrtip',
    };
    // this.dtModalOptions = {
    //   pagingType: 'full_numbers',
    //   paging: true,
    //   pageLength: 10,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTableParameters: any, callback) => {
    //     dataTableParameters.columns.forEach(element => {
    //       if (element.search.value != '') {
    //         let string = element.search.value;
    //         this.filterData[element.data] = string;
    //       } else {
    //         let getColumnName = element.data;
    //         let columnValue = element.value;
    //         if (this.filterData.hasOwnProperty(element.data)) {
    //           let value = this.filterData[getColumnName];
    //           if (columnValue != undefined || value != undefined) {
    //             delete this.filterData[element.data];
    //           }
    //         }
    //       }
    //     });
    //     dataTableParameters['filterData'] = this.filterData;
    //     dataTableParameters.minNumber = dataTableParameters.start + 1;
    //     dataTableParameters.maxNumber =
    //       dataTableParameters.start + dataTableParameters.length;
    //     this.page = dataTableParameters.start / dataTableParameters.length;
    //     this.http
    //       .post<DataTableResponse>(
    //         'http://localhost:4000/interest-rate-for-loan-and-cc',
    //         dataTableParameters
    //       ).subscribe(resp => {
    //         this.interestRateForLoanandCC = resp.data;
    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsTotal,
    //           data: []
    //         });
    //       });
    //   },
    //   columns: [
    //     {
    //       title: 'Action'
    //     },


    //   ],
    //   dom: 'lrtip',
    // };
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
      EFFECT_DATE: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
      FROM_AMOUNT: ['', [Validators.pattern]],
      TO_AMOUNT: ['', [Validators.pattern]],
      INT_RATE: ['', [Validators.required, Validators.pattern]],
      PENAL_INT_RATE: ['', [Validators.required, Validators.pattern]],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'EFFECT_DATE': formVal.EFFECT_DATE,
      'ACNOTYPE': formVal.ACNOTYPE,
      'INT_CATEGORY': formVal.INT_CATEGORY,
      'FROM_AMOUNT': formVal.FROM_AMOUNT,
      'TO_AMOUNT': formVal.TO_AMOUNT,
      'INT_RATE': formVal.INT_RATE,
      'PENAL_INT_RATE': formVal.PENAL_INT_RATE
    }
    this.interestRateForLoanandCCService.postData(dataToSend).subscribe(data1 => {
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
    this.interestRateForLoanandCCService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'EFFECT_DATE': data.EFFECT_DATE,
        'ACNOTYPE': data.ACNOTYPE,
        'INT_CATEGORY': data.INT_CATEGORY,
        'FROM_AMOUNT': data.FROM_AMOUNT,
        'TO_AMOUNT': data.TO_AMOUNT,
        'INT_RATE': data.INT_RATE,
        'PENAL_INT_RATE': data.PENAL_INT_RATE
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.interestRateForLoanandCCService.updateData(data).subscribe(() => {
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
      text: "Do you want to delete Interest Rate for loan and CC data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.interestRateForLoanandCCService.deleteData(id).subscribe(data1 => {
          this.interestRateForLoanandCC = data1;
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
