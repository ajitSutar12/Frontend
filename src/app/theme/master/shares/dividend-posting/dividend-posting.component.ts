import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';

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
  WARRENT_DATE:Date
  
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

  dividendposting:DividendPosting[]

  // dropdown variables
  ngscheme:any=null
  scheme: any[];

  //for date
  maxDate: Date;
  minDate: Date;
  warrentdate:any=null

  message = {
    WarrantDate: "",
    SchemeCode: "",
  };

  private dataSub: Subscription = null;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService, public SchemeCodeService: SchemeCodeService) {
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
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
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
     
    };
    // this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    // });
    
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'IV'|| scheme.name == 'GS'|| scheme.name == 'AG'|| scheme.name == 'PG'|| scheme.name == 'CC'|| scheme.name == 'SH')
      });
      this.scheme = allscheme;
    })
    this.createForm()
  }

  

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      WARRENT_DATE: ['', [Validators.required]]
    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }
  /**
  * @editClickHandler function for edit button clicked
  */

  editClickHandler(info: any): void {
    this.message.WarrantDate = info.WarrantDate;
    this.message.SchemeCode = info.SchemeCode;
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
    this.message.SchemeCode = info.SchemeCode;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Scheme Code." + this.message.SchemeCode + "  data",
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
}
