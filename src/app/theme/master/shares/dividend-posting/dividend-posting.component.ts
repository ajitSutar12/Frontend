import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { DividendPostingService } from './dividend-posting.service'
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import * as moment from 'moment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DividendPosting {
  id: number;

  AC_TYPE: number;
  WARRENT_DATE: Date

}
@Component({
  selector: 'app-dividend-posting',
  templateUrl: './dividend-posting.component.html',
  styleUrls: ['./dividend-posting.component.scss']
})

export class DividendPostingComponent implements OnInit {

  //api
  url = environment.base_url;
  formSubmitted = false;
  angForm: FormGroup;

  httpData: any;
  dtExportButtonOptions: any = {};
  makeForm: any;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus



  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData = {};



  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  showButton: boolean = true;
  updateShow: boolean = false;

  dividendposting: DividendPosting[]
  //for date
  maxDate: Date ;
  minDate: Date;
  warrentdate: any = null

  // dropdown variables
  ngscheme: any = null
  scheme;
  //Scheme type variable
  schemeType: string = 'SH'
  warrentDate
  ngwarrentDate: any

  private dataSub: Subscription = null;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private config: NgSelectConfig,
     private systemParameter: SystemMasterParametersService,
    private _service: DividendPostingService,
    private schemeCodeDropdownService: SchemeCodeDropdownService, public SchemeCodeService: SchemeCodeService) {
    this.maxDate = new Date();
    this.ngwarrentDate = moment().format('DD/MM/YYYY');
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() );
    this.maxDate.setDate(this.maxDate.getDate() -1)
    console.log(this.maxDate);
    console.log(this.minDate);
    
    
  }

  ngOnInit(): void {
    this.createForm();
    this.dtExportButtonOptions = {
      pagingType: "full_numbers",
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

        dataTableParameters.columns.forEach((element) => {
          if (element.search.value != "") {
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
        dataTableParameters["filterData"] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + "/fire-policy",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.dividendposting = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      // ajax: 'fake-data/dividend-posting.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'AC_TYPE'
        },
        {
          title: 'Warrant Date',
          data: 'WARRENT_DATE'
        },],
      dom: 'Bfrtip',

    };


    // this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    //   var allscheme = data.filter(function (scheme) {
    //     return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'IV' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'CC' || scheme.name == 'SH')
    //   });
    //   this.scheme = allscheme;
    // })
    this.createForm()


    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.ngscheme = data[0].value
    })
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      
      this.ngwarrentDate = data.CURRENT_DATE;
    });

    this.http.get(this.url + '/dividend-calculation').subscribe((data) => {
    this.warrentDate = data
    })

  }



  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      WARRENT_DATE: ['', [Validators.required]]
    });
  }
  selectedWarrentDate
  selectedDivFromYear
  selectedDivToYear

  getWarrentDetails(event) {
    this.selectedWarrentDate = event.WARRENT_DATE
    this.selectedDivFromYear = event.DIV_FROM_YEAR
    this.selectedDivToYear = event.DIV_TO_YEAR
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      const dataToSend = {
        WARRENT_DATE: this.selectedWarrentDate,
        DIV_FROM_YEAR: this.selectedDivFromYear,
        DIV_TO_YEAR: this.selectedDivToYear
      }
      console.log(dataToSend);
      

      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to process data",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#229954',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Process it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this._service.postData(dataToSend).subscribe((data) => {
            Swal.fire('Success!', "Processed!", "success");
          }),
            (error) => {
              console.log(error);
            };
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Info!', "Processing Cancelled!", "info");
          this.createForm()
          this.ngscheme = null
          this.ngwarrentDate = null

        }
      });
      this.resetForm()
    }
  }
  /**
  * @editClickHandler function for edit button clicked
  */

  editClickHandler(info: any): void {
    this.showButton = false;
    this.updateShow = true;
  }

  /**
  * @updateData function for update data 
  */
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    // this.form.reset();
  }

  // reset form
  resetForm() {
    this.createForm();
    this.ngscheme = null
    this.ngwarrentDate = null
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;

    this.resetForm();
  }

  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
  delClickHandler(info: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Scheme Code. data",
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

  onFocus(ele: NgSelectComponent) {  
    ele.open()
  }

}
