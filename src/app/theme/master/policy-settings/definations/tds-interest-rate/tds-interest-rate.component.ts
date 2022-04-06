import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { TdsInterestRateService } from './tds-interest-rate.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment'
import * as moment from 'moment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface TdsInterest {
  FIN_YEAR: number;
  INTEREST_AMOUNT: number;
  TDS_RATE: number;
  SURCHARGE_RATE: number;
  EFFECT_DATE: Date;
}
@Component({
  selector: 'app-tds-interest-rate',
  templateUrl: './tds-interest-rate.component.html',
  styleUrls: ['./tds-interest-rate.component.scss']
})
export class TdsInterestRateComponent implements OnInit, AfterViewInit, OnDestroy {
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
  tdsInterests: TdsInterest[];
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

  ngfinyear:any=null
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
  schemeCode: any;
  //for search functionality
  filterData = {};
    //for date 
    datemax: any;
    effectdate:any=null
  maxDate: Date;
  minDate: Date;
    
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private tdsInterestRate: TdsInterestRateService) {
      // this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
      // console.log(this.datemax);
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
    
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
            this.url + '/tds-interest-rate',
            dataTableParameters
          ).subscribe(resp => {
            this.tdsInterests = resp.data;

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
          title: 'Action'
        }, {
          title: 'Financial Year',
          data: 'FIN_YEAR'
        }, {
          title: 'Effect Date',
          data: 'EFFECT_DATE'
        }, {
          title: 'Interest Amount',
          data: 'INTEREST_AMOUNT'
        }, {
          title: 'TDS Rate',
          data: 'TDS_RATE'
        }, {
          title: 'Surchrge Rate',
          data: 'SURCHARGE_RATE'
        },
      ],
      dom: 'Blrtip',
    };
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      FIN_YEAR: ['', [Validators.required, Validators.pattern]],
      EFFECT_DATE: ['', [Validators.required]],
      INTEREST_AMOUNT: ['', [Validators.required, Validators.pattern]],
      TDS_RATE: ['', [Validators.required, Validators.pattern]],
      SURCHARGE_RATE: ['', [Validators.pattern]]
    });
  }
      //disabledate on keyup
      disabledate(data:any){
    
        console.log(data);
        if(data != ""){
          if(data > this.datemax){
            Swal.fire("Invalid Input", "Please insert valid date ", "warning");
            (document.getElementById("EFFECT_DATE")as HTMLInputElement).value = ""
                
          }
        } 
      }
  // Method to insert data into database through NestJS
  submit() {
    let effectdate
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'FIN_YEAR': formVal.FIN_YEAR,
      'EFFECT_DATE': (formVal.EFFECT_DATE == '' || formVal.EFFECT_DATE == 'Invalid date') ? effectdate = '' : effectdate = moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
      // 'EFFECT_DATE': formVal.EFFECT_DATE,
      'INTEREST_AMOUNT': formVal.INTEREST_AMOUNT,
      'TDS_RATE': formVal.TDS_RATE,
      'SURCHARGE_RATE': formVal.SURCHARGE_RATE,
    }
    this.tdsInterestRate.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  updatecheckdata:any
  //Method for append data into fields
  editClickHandler(id) {
    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.tdsInterestRate.getFormData(id).subscribe(data => {
      this.updatecheckdata=data
      this.updateID = data.id;
      this.angForm.setValue({
        'FIN_YEAR': data.FIN_YEAR,
        'EFFECT_DATE': (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? effectdate = '' : effectdate = data.EFFECT_DATE,
        // 'EFFECT_DATE': data.EFFECT_DATE,
        'INTEREST_AMOUNT': data.INTEREST_AMOUNT,
        'TDS_RATE': data.TDS_RATE,
        'SURCHARGE_RATE': data.SURCHARGE_RATE,

      })
    })
  }

   //method for adding hyphen in date
  addhyphen(data: any) {
    let date = new Date().getFullYear() + 1;
    let result = Number((document.getElementById("FIN_YEAR") as HTMLInputElement).value);
    if (result > date) {
      Swal.fire("Warning!", "please enter valid Year ", "warning");
      (document.getElementById("FIN_YEAR") as HTMLInputElement).value = "";
    }
    else {
      if (data.length == 4) {
        result += 1;
        this.ngfinyear = data + "-" + result;
      }

    }
  }
  //Method for update data 
  updateData(id) {
    let effectdate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    if(this.updatecheckdata.EFFECT_DATE!=data.EFFECT_DATE){
      (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (effectdate = '', data['EFFECT_DATE'] = effectdate) : (effectdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment(effectdate).format('DD/MM/YYYY'))
      }
    this.tdsInterestRate.updateData(data).subscribe(() => {
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
        this.tdsInterestRate.deleteData(id).subscribe(data1 => {
          this.tdsInterests = data1;
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
    // this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#definationtable tfoot tr').appendTo('#definationtable thead');
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
