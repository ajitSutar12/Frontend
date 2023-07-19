import { AfterViewInit, Component, Input, ElementRef, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { ManagerViewGlpService } from './manager-view-glp.service';
// for dropdown
//import { StatementTypeService } from '../../../../shared/elements/statement-type.service';
import { SchemeTypeDropdownService } from '../../../../../shared/dropdownService/scheme-type-dropdown.service';
import { Int8Service } from '../../../../../shared/elements/int8.service';
import { IntrestCategoryMasterDropdownService } from '../../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { StatementCodeDropdownService } from '../../../../../shared/dropdownService/statement-code-dropdown.service';
import { DisplayToViewService } from '../../../../../shared/dropdownService/display-to-view.service';
import { PercentageToWCapitalService } from '../../../../../shared/dropdownService/percentage-to-W-Capital.service';

import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { id } from '@swimlane/ngx-datatable';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';

// Handling datatable data 
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface ManagerView {
  SR_NO: number;
  TYPE: string;
  STATEMENT_CODE: string;
  DESCRIPTION: string;
  IS_DISPLAY: string;
  PERCENTAGE_TO_WORKING_CAPITAL: string;
}
@Component({
  selector: 'app-manager-view-glp',
  templateUrl: './manager-view-glp.component.html',
  styleUrls: ['./manager-view-glp.component.scss']
})
export class ManagerViewGLPComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportOptions: any = {}


  //title select variables

  DisplayToView: Array<IOption> = this.displayToViewService.getCharacters();

  PercentageToWCapital: Array<IOption> = this.percentageToWCapitalService.getCharacters();
  //title select variables
  // schemetype: Array<IOption> = this.SchemeTypes.getCharacters();
  schemetype = [{ value: 'GL', label: 'GL' }]
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  managerView: ManagerView[];
  private dataSub: Subscription = null;

  // for dropdown ngmodule
  ngtype: any = null
  ngstatement: any = null
  ngdescription: any = null
  ngcapital: any = null
  ngdisplay: any = null
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  addShowButton: boolean = true;
  UpdateShowButton: boolean = false
  multiField = [];
  cScheme
  //variable to get ID to update
  updateID: number = 0;
  page: number = 1;
  //filter variable
  filterData = {};
  counter = 1;
  obj: any;
  rowData = [];
  showDialog = false;
  @Input() visible: boolean;
  //  public config: any;
  StatementCodeDropdown: any;
  intrestCategoryMaster: any;
  constructor(
    // for dropdown
    public SchemeTypes: SchemeTypeDropdownService,
    public displayToViewService: DisplayToViewService,

    public percentageToWCapitalService: PercentageToWCapitalService,
    public StatementCodeDropdownService: StatementCodeDropdownService,
    private http: HttpClient,
    private fb: FormBuilder,
    public ManagerViewGlpService: ManagerViewGlpService,
    private config: NgSelectConfig,) { this.createForm(); }

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
            this.url + '/manager-view-glp',
            dataTableParameters
          ).subscribe(resp => {
            this.managerView = resp.data;
            console.log(this.managerView)
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
        }, {
          title: 'Sr. No',
          data: 'SR_NO'
        }, {
          title: 'Type',
          data: 'TYPE'
        }, {
          title: 'Statement Code',
          data: 'STATEMENT_CODE'
        }, {
          title: 'Description',
          data: 'DESCRIPTION'
        }, {
          title: '% to W capital',
          data: 'PERCENTAGE_TO_WORKING_CAPITAL'
        }, {
          title: 'Display To View',
          data: 'IS_DISPLAY'
        },

      ],
      dom: 'lrtip'

    };


    this.StatementCodeDropdownService.getStatementCodeList().pipe(first()).subscribe(data => {

      this.StatementCodeDropdown = data;
      console.log(data);
    })
  }

  createForm() {
    this.angForm = this.fb.group({

      SR_NO: [''],
      TYPE: ['', [Validators.required]],
      STATEMENT_CODE: ['', [Validators.required]],
      DESCRIPTION: ['', [Validators.required]],
      IS_DISPLAY: [''],
      PERCENTAGE_TO_WORKING_CAPITAL: ['']
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {


      'SR_NO': formVal.SR_NO,
      'TYPE': formVal.TYPE,
      'STATEMENT_CODE': formVal.STATEMENT_CODE,
      'DESCRIPTION': this.cScheme,
      'IS_DISPLAY': formVal.IS_DISPLAY,
      'PERCENTAGE_TO_WORKING_CAPITAL': formVal.PERCENTAGE_TO_WORKING_CAPITAL,



    }
    this.ManagerViewGlpService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      //    to reload after insertion of data
      //    this.rerender();
      //     To clear form
      //  this.angForm.reset();
      //  }, (error) => {
      //  })
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
    })
    //To clear form
    this.resetForm();
  }


  // Reset Function
  resetForm() {
    this.createForm();
    this.ngtype = null
    this.ngstatement = null
    this.ngdescription = null
    this.ngcapital = null
    this.ngdisplay = null
  }
  ngAfterViewInit(): void {
    // this.myInputField.nativeElement.focus();
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

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  getStatement(event) {
    let value = this.managerView.filter(ele => ele.STATEMENT_CODE == this.ngstatement)
console.log(value) 
if(value.length != 0)
{
  this.ngstatement = null
  Swal.fire('Warning', 'Data is Already Submitted', 'warning');

}

}

  //Method for append data into fields
  editClickHandler(id) {

    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.addShowButton = true

    this.ManagerViewGlpService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngstatement = Number(data.STATEMENT_CODE)
      this.ngdescription = data.DESCRIPTION
      this.angForm.patchValue({

        'SR_NO': data.SR_NO,
        'TYPE': data.TYPE,
        // 'STATEMENT_CODE': data.STATEMENT_CODE,
        'DESCRIPTION': data.DESCRIPTION,
        'IS_DISPLAY': data.IS_DISPLAY,
        'PERCENTAGE_TO_WORKING_CAPITAL': data.PERCENTAGE_TO_WORKING_CAPITAL,

      })
    })
  }


  //Method for update data 
  updateData() {
    const formVal = this.angForm.value;
    const data = {


      'SR_NO': formVal.SR_NO,
      'TYPE': formVal.TYPE,
      'STATEMENT_CODE': formVal.STATEMENT_CODE,
      'DESCRIPTION': this.cScheme,
      'IS_DISPLAY': formVal.IS_DISPLAY,
      'PERCENTAGE_TO_WORKING_CAPITAL': formVal.PERCENTAGE_TO_WORKING_CAPITAL,



    }
    data['id'] = this.updateID;
    this.ManagerViewGlpService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiField = []
      this.resetForm();

      //  this.rerender();
      this.resetForm();
    })
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.addShowButton = true;
    this.multiField = [];
    this.resetForm();
  }


  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getSchemeCo(event) {

    this.cScheme = event.head_name
  }

}