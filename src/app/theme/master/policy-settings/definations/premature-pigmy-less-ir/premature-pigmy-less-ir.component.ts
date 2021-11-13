import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { PrematurePigmyService } from './premature-pigmy-less-ir.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service';
import { IOption } from 'ng-select';
import { environment } from '../../../../../../environments/environment'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface PrematurePigmy {
  AC_ACNOTYPE: string;
  EFFECT_DATE: Date;
  SERIAL_NO: number;
  FROM_MONTHS: string;
  TO_MONTHS: string;
  LESS_INT_RATE: string;
}

@Component({
  selector: 'app-premature-pigmy-less-ir',
  templateUrl: './premature-pigmy-less-ir.component.html',
  styleUrls: ['./premature-pigmy-less-ir.component.scss'],
})
export class PrematurePigmyLessIRComponent implements OnInit {
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  prematurePigmy: PrematurePigmy[];
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
  updateID: number = 0;
  schemeCode: any;
  //for search functionality
  filterData = {};

  //title select variables
  schemetype: Array<IOption> = this.SchemeTypes.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    // for dropdown
    public SchemeTypes: SchemeTypeDropdownService,
    private prematurePigmyService: PrematurePigmyService) {
  }

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
            'http://localhost:4000/premature-pigmy-less-int-rate',
            dataTableParameters
          ).subscribe(resp => {
            this.prematurePigmy = resp.data;

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
          title: 'Effective Date',
          data: 'EFFECT_DATE'
        },

        {
          title: 'Scheme Type',
          data: 'AC_ACNOTYPE'
        },
        {
          title: 'Sr No',
          data: 'SERIAL_NO'
        },
        {
          title: 'From Months',
          data: 'FROM_MONTHS'
        },
        {
          title: 'To Months',
          data: 'TO_MONTHS'
        },
        {
          title: 'Interest Rate',
          data: 'LESS_INT_RATE'
        },
      ],
      dom: 'Blrtip',
    };
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      AC_ACNOTYPE: ['', [Validators.required]],
      EFFECT_DATE: ['', [Validators.required]],
      SERIAL_NO: [''],
      FROM_MONTHS: [''],
      TO_MONTHS: [''],
      LESS_INT_RATE: ['']
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'EFFECT_DATE': formVal.EFFECT_DATE,
      'SERIAL_NO': formVal.SERIAL_NO,
      'FROM_MONTHS': formVal.FROM_MONTHS,
      'TO_MONTHS': formVal.TO_MONTHS,
      'LESS_INT_RATE': formVal.LESS_INT_RATE,
    }
    this.prematurePigmyService.postData(dataToSend).subscribe(data1 => {
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
    this.prematurePigmyService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'AC_ACNOTYPE': data.AC_ACNOTYPE,
        'EFFECT_DATE': data.EFFECT_DATE,
        'SERIAL_NO': data.SERIAL_NO,
        'FROM_MONTHS': data.FROM_MONTHS,
        'TO_MONTHS': data.TO_MONTHS,
        'LESS_INT_RATE': data.LESS_INT_RATE,
      })
    })
  }

  //Method for update data 
  updateData(id) {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.prematurePigmyService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
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
        this.prematurePigmyService.deleteData(id).subscribe(data1 => {
          this.prematurePigmy = data1;
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

    this.runTimer();
    this.dataSub = this.SchemeTypes.loadCharacters().subscribe((options) => {
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


}
