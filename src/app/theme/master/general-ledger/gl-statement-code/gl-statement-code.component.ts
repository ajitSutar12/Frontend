
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef , } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { StatementTypeService } from '../../../../shared/dropdownService/statement-type.service';
import { AlternetCodeDropdownService } from '../../../../shared/dropdownService/alternet-code-dropdown.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { GlStatementCodeService } from './gl-statement-code.service';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { environment } from '../../../../../environments/environment'
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
interface GlStatementCodeMaster {
  A_BALCODE: string;
  A_ACHEAD: string;
  A_ACTYPE: string;
  ALTERNATE_CODE: string;
  IS_PRINT_HEAD_IN_ONESIDE: boolean;
}

@Component({
  selector: 'app-gl-statement-code',
  templateUrl: './gl-statement-code.component.html',
  styleUrls: ['./gl-statement-code.component.scss'],

})

export class GlStatementCodeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("statement_head") myInputField: ElementRef;//autofocus input field
  //api 
  url = environment.base_url;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  glStatementCodeMaster: GlStatementCodeMaster[];
  dtExportButtonOptions: DataTables.Settings = {}; //Datatable variable
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject()
  angForm: FormGroup;
  updateID: number = 0;
  StatementData = [];
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable for checkbox and radio button 
  isPrintHeadInOneSide: boolean = false;

  //title select variables
  statementType: Array<IOption> = this.StatementTypeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  alternate: any;
  // Filter Variable
  filterData = {};

  //constructor
  constructor(
    public StatementTypeService: StatementTypeService,
    public alternateCodeService: AlternetCodeDropdownService,
    private glStatementCodeService: GlStatementCodeService,
    private alternateCode: AlternetCodeDropdownService,
    private http: HttpClient,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();

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
            this.url + '/gl-statement-code',
            dataTableParameters
          ).subscribe(resp => {
            this.glStatementCodeMaster = resp.data;

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
        },
        {
          title: 'Statement Code',
          data: 'A_BALCODE'
        },
        {
          title: 'Statement Head',
          data: 'A_ACHEAD'
        },
        {
          title: 'Statement Type',
          data: 'A_ACTYPE'
        },
        {
          title: 'Alternate Code',
          data: 'ALTERNATE_CODE'
        },
        {
          title: 'Is Print Head In One Side',
          data: 'IS_PRINT_HEAD_IN_ONESIDE'
        }
      ],
      dom: 'Blrtip',
    };

    this.runTimer();
    this.dataSub = this.StatementTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

//     this.alternateCode.getAlternetCodeList().pipe(first()).subscribe(data => {
//       this.alternate = data;
//  })


  }
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }

  createForm() {
    this.angForm = this.fb.group({
      A_BALCODE: ['', [Validators.pattern]],
      A_ACHEAD: ['', [Validators.pattern, Validators.required]],
      ALTERNATE_CODE: ['', [Validators.pattern]],
      A_ACTYPE: ['', [Validators.required]],
      IS_PRINT_HEAD_IN_ONESIDE: [false]

    });
  }

  // Method to insert data into database through NestJS
  submit() {

    const formVal = this.angForm.value;
    const dataToSend = {
      "A_BALCODE": formVal.A_BALCODE,
      "A_ACHEAD": formVal.A_ACHEAD,
      "A_ACTYPE": formVal.A_ACTYPE,
      "ALTERNATE_CODE": formVal.ALTERNATE_CODE,
      "IS_PRINT_HEAD_IN_ONESIDE": formVal.IS_PRINT_HEAD_IN_ONESIDE,
    }

    this.glStatementCodeService.postData(dataToSend).subscribe(data => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
    })
 
    //To clear form
    this.resetForm();
    

  }
  addNewData(){
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.glStatementCodeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        "A_BALCODE": data.A_BALCODE,
        "A_ACHEAD": data.A_ACHEAD,
        "A_ACTYPE": data.A_ACTYPE,
        "ALTERNATE_CODE": data.ALTERNATE_CODE,
        "IS_PRINT_HEAD_IN_ONESIDE": data.IS_PRINT_HEAD_IN_ONESIDE

      })
    })
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
        this.glStatementCodeService.deleteData(id).subscribe(data1 => {
          this.glStatementCodeMaster = data1;
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
  //Method for update data 
  updateData(id) {

    let data = this.angForm.value;
    data['id'] = this.updateID;

    this.glStatementCodeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      //To clear form
      this.resetForm();
    })
  }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();

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
    this.alternateCode.getAlternetCodeList().pipe(first()).subscribe(data => {
      this.alternate = data;
 })
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
