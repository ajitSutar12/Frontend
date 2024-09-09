import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { CitytMasterService } from './city-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface CityMaster {
  CODE: number,
  AC_NO: number,
  NAME: string,
}
@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.scss']
})
export class CityMasterComponent implements OnInit, AfterViewInit, OnDestroy {
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
  cityMaster: CityMaster[];
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
  newbtnShow: boolean = false;
  updateID: number = 0;
  // column filter
  filterData = {};


  regions: string[] = [' ', 'North',
    'South',
    'West',
    'East',
    'Central',
    'Northeast',
    'Northwest',
    'Southeast',
    'Southwest'];
  selectedRegion: string;
  selectedState: any;

  constructor(
    private http: HttpClient,
    private citytMasterService: CitytMasterService,
    private fb: FormBuilder) {
    this.selectedRegion = this.regions[0];
  }
  districts
  talukas
  states

  ngOnInit(): void {

    this.http.post<any>(this.url + '/city-master/getstate', {})
      .subscribe(
        (data) => {
          this.states = data;
        },
      );
    this.http.post<any>(this.url + '/city-master/district', {})
      .subscribe(
        (data) => {
          this.districts = data;
        },

      );
    this.http.post<any>(this.url + 'city-master/getTaluka', {})
      .subscribe(
        (data) => {
          this.talukas = data;
        },

      );


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
            this.url + '/city-master',
            dataTableParameters
          ).subscribe(resp => {
            this.cityMaster = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          }
        },
        {
          title: 'City Code',
          data: 'CITY_CODE',
        },
        {
          title: 'City Name',
          data: 'CITY_NAME',
        },
        {
          title: 'Distance',
          data: 'DISTANCE',
        },
        // {
        //   title: 'Taluka Code',
        //   data: 'TALUKA_CODE',
        // },
        // {
        //   title: 'District Code',
        //   data: 'DISTRICT_CODE',
        // },
        // {
        //   title: 'State Code',
        //   data: 'STATE_CODE',
        // },
        {
          title: 'Region',
          data: 'REGION_CODE',
        },
        {
          title: 'State',
          data: 'STATE',
        },
        {
          title: 'District',
          data: 'DISTRICT',
        },
        {
          title: 'Taluka',
          data: 'TALUKA',
        },
        {
          title: 'City Type',
          data: 'CITY_TYPE',
        },
      ],
      dom: 'Blrtip',
    };
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({

      CITY_CODE: [''],
      DISTANCE: ['', [Validators.pattern]],
      CITY_NAME: ['', [Validators.required, Validators.pattern]],
      // TALUKA_CODE: ['', [Validators.required, Validators.pattern]],
      // STATE_CODE: ['', [Validators.required, Validators.pattern]],
      // DISTRICT_CODE: ['', [Validators.required, Validators.pattern]],
      REGION_CODE: ['', [Validators.required, Validators.pattern]],
      STATE: ['', [Validators.pattern]],
      DISTRICT: ['', [Validators.pattern]],
      TALUKA: ['', [Validators.pattern]],
      CITY_TYPE: ['', [Validators.pattern]],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {

      'CITY_CODE': formVal.CITY_CODE,
      'CITY_NAME': formVal.CITY_NAME,
      'DISTANCE': formVal.DISTANCE,
      'CITY_TYPE': this.cityTypeNumber,
      'REGION_CODE': formVal.REGION_CODE,
      'STATE': this.state,
      'DISTRICT': formVal.DISTRICT,
      'TALUKA': formVal.TALUKA,
      'STATE_CODE': this.selectedState,
      'DISTRICT_CODE': this.selectedDistrict,
      'TALUKA_CODE': this.selectedTaluka,
    }
    this.citytMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {

    })
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
    //To clear form
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.citytMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'CITY_CODE': data.CITY_CODE,
        'CITY_NAME': data.CITY_NAME,
        'DISTANCE': data.DISTANCE,
        'REGION_CODE': data.REGION_CODE,
        'STATE': data.STATE,
        'DISTRICT': data.DISTRICT,
        'TALUKA': data.TALUKA,
        'CITY_TYPE': data.CITY_TYPE,
      })
    })
  }

  //Method for update data 
  updateData(id) {

    let data = this.angForm.value;
    data['id'] = this.updateID;

    this.citytMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
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
      text: "Do you want to delete city master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.citytMasterService.deleteData(id).subscribe(data1 => {
          this.cityMaster = data1;
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
  }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  onStateChange(event) {
    this.state = event.CITY_NAME


    let obj = {
      STATE_CODE: event.STATE_CODE
    }
    this.http.post<any>(this.url + '/city-master/getDistStatewise', obj)
      .subscribe(
        (data) => {
          this.districts1 = data;
        },

      );

  }
  districts1: any
  gettalukas = []
  state
  onDistrictChange(event) {

    let obj = {
      STATE_CODE: event.STATE_CODE,
      DISTRICT_CODE: event.DISTRICT_CODE
    }

    this.http.post<any>(this.url + '/city-master/getTalStatewise', obj)
      .subscribe(
        (data) => {
          this.talukas = data;
          console.log(this.talukas)
        },

      );

  }
  selectedDistrict
  selectedTaluka
  onTalukaChange(event) {
    this.selectedState = event.STATE_CODE;
    this.selectedDistrict = event.DISTRICT_CODE;
    this.selectedTaluka = event.TALUKA_CODE;
  }
  onCityNameChange(cityName: string) {
    if (cityName) {
      this.cityTypeNumber = this.getCityType(cityName);
      this.CITY_TYPE = this.getCityTypeText(this.cityTypeNumber);
    } else {
      this.CITY_TYPE = '';
    }
  }

  CITY_TYPE: string = '';
  cityTypeNumber: number | null = null;

  getCityTypeText(cityTypeNumber: number): string {
    switch (cityTypeNumber) {
      case 1: return '1 - State';
      case 2: return '2 - District';
      case 3: return '3 - Taluka';
      case 4: return '4 - Other';
      default: return '';
    }
  }
  getCityType(cityName: string): number {
    const lowerCityName = cityName.toLowerCase();

    if (this.states.some(state => state.CITY_NAME.toLowerCase() === lowerCityName)) {
      return 1; // State
    } else if (this.districts.some(district => district.CITY_NAME.toLowerCase() === lowerCityName)) {
      return 2; // District
    } else if (this.talukas.some(taluka => taluka.CITY_NAME.toLowerCase() === lowerCityName)) {
      return 3; // Taluka
    } else {
      return 4; // Other
    }
  }


}
