import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReportTMasterDropdownService } from 'src/app/shared/dropdownService/report-type-master-dropdown.service';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { GlAccountsMasterService } from '../gl-accounts-master/gl-accounts-master.service';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { Console } from 'console';
// import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
interface GlreportLink {

  SR_NO: number,
  AC_NO: number,
  // AC_NAME: string,
  EFFECT_DATE: number,
  EFFECT_TO_DATE: number,
  CODE: number,
  CODE_TYPE: string,
  // DEFAULT_BALTYPE: number,
  // REVERSE_CODE: number,
  // SUB_COLUMN_NO: number


}

@Component({
  selector: 'app-gl-report-linking',
  templateUrl: './gl-report-linking.component.html',
  styleUrls: ['./gl-report-linking.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class GlReportLinkingComponent implements OnInit {


  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  url = environment.base_url;
  effectdate
  schemeACNo: any;
  updateID: number = 0;
  dtExportButtonOptions: any = {};//Datatable variable
  //filter variable
  filterData = {};
  page: number = 1;
  angForm: FormGroup;
  glreportLink: GlreportLink[];
  //ddl
  drcr: any = [
    { id: 1, name: 'DEBIT' },
    { id: 2, name: 'CREDIT' },
    { id: 3, name: 'NA' }
  ];
  defaultValue: number = 3; // The ID for 'NA'


  headName: any = [];
  tabledata: any = [];
  codedata: any = [];

  //ngmodel
  ngName
  ngHeadname
  ngReverse
  ngSub
  ngType
  // addButton: boolean = true;
  updateButton: boolean = true;

  searchAC_NO = '';

  // bsValue
  maxDate: any;
  codeValues: any;
  constructor(private http: HttpClient, private fb: FormBuilder,
    private reportTypeDropdown: ReportTMasterDropdownService,
    // private schemeAccountNoService: SchemeAccountNoService,
    private glLinkingMasterService: GlAccountsMasterService,
    private systemParameter: SystemMasterParametersService,

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  selectedDate: string | null = null;

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
            this.url + "/gl-account-master/linking",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.glreportLink = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });

        // }));
      },
      columns: [
        // {
        //   title: 'Action',
        // },
        {
          title: 'Sr No',
          data: 'SR_NO'
        },
        {
          title: 'General Ledger Account No',
          data: 'acno'
        },
        {
          title: 'General Ledger  Account Name',
          data: 'acname'
        },
        {
          title: 'Effect From Date',
          data: 'EFFECT_DATE'
        },
        {
          title: 'Effect To Date',
          data: 'EFFECT_TO_DATE'
        },
        {
          title: 'Head Code / Name',
          data: 'CODE / NAME'
        },
        // {
        //   title: 'Head Name',
        //   data: 'NAME'
        // },
        // {
        //   title: 'Default Balance Type',
        //   data: 'DEFAULT_BALTYPE'
        // },
        // {
        //   title: 'Reverse Code',
        //   data: 'REVERSE_CODE'
        // },
        // {
        //   title: 'Name',
        //   data: 'NAME'
        // },
        {
          title: 'Sub Column',
          data: 'SUB_COLUMN'
        },
      ],
      dom: 'Blrtip',
    };
    this.http.get<any>(this.url + '/gl-account-master/').subscribe(data => {
      this.schemeACNo = data;
    })
    this.http.post(this.url + '/gl-account-master/reportMasterList', '').subscribe(data => {
      this.headName = data;
    })


  }

  report
  selectedCategory: string | null = null;

  REPORT_TYPE
  onExpensesClick(reportType: string): void {
    this.selectedCategory = reportType; 
    this.REPORT_TYPE = reportType;

    const obj = {
      REPORT_TYPE: this.REPORT_TYPE ? this.REPORT_TYPE : this.selectedCategory
    };

    this.http.post(this.url + '/gl-account-master/gllinkrecords', obj).subscribe(data => {
      this.tabledata = data;
      console.log("TABLE DATA......", this.tabledata);
    });



    this.http.post(this.url + '/gl-account-master/gllinkrecordsglreportmstrcode', obj).subscribe(data => {
      this.codedata = data;
      console.log("CODE DATA......", this.codedata);
    
      //code dropdown
      // this.codeValues = this.codedata
      //   .map(item => item.CODE)
      //   .filter(code => code !== null && code !== '');

      this.codeValues = this.codedata
  .filter(item => item.CODE !== null && item.CODE !== '')
  .map(item => ({ name: item.NAME, code: item.CODE }));

      console.log("Code Values for Dropdown:", this.codeValues);
    });
  }

  //data filter
  // get filteredTableData() {
  //   const searchTerm = this.searchAC_NO ? this.searchAC_NO.trim() : '';


  //   if (!searchTerm) {
  //     return this.tabledata;
  //   }

  //   const filtered = this.tabledata.filter(data =>
  //     data.AC_NO.includes(searchTerm)
  //   );

  //   console.log('AC_NO Filtered Data:', filtered);
  //   return filtered;
  // }

  // filteredData: any[] = [];
  // filterTableData() {
  //   let accountNumberFilter = this.angForm.get('accountNumber').value.trim().toLowerCase();
  //   let codeFilter = this.angForm.get('code').value.trim().toLowerCase();
  
  //   this.filteredData = this.tabledata.filter(data => {
  //     let accountNumber = data.acno ? data.acno.toString().toLowerCase() : '';
  //     let code = data.CODE ? data.CODE.toString().toLowerCase() : '';
      
  //     let matchesAccountNumber = accountNumber.includes(accountNumberFilter);
  //     let matchesCode = code.includes(codeFilter);
      
  //     return (accountNumberFilter ? matchesAccountNumber : true) && 
  //            (codeFilter ? matchesCode : true);
  //   });
  // }


  createForm() {
    this.angForm = this.fb.group({
      AC_NO: ["", [Validators.required]],
      EFFECT_DATE: ["", [Validators.required]],
      EFFECT_TO_DATE: ["", [Validators.required]],
      CODE_TYPE: ["", [Validators.required]],
      accountNumber: [''],
      code: ['']


      // DEFAULT_BALTYPE: ["", [Validators.required]],
      // REVERSE_CODE: ["", [Validators.required]],
      // SUB_COLUMN_NO: ["", [Validators.required]],
      // SR_NO: ["", [Validators.required]],
      // // AC_NAME: ["", [Validators.required]],
      // // CODE: ["", [Validators.required]],
    });
  }

  // addData() {
  //   const formVal = this.angForm.value;
  //   var dataToSend = {
  //     SR_NO: formVal.SR_NO,
  //     AC_NO: formVal.AC_NO,
  //     // AC_NAME:  formVal.AC_NAME,
  //     EFFECT_DATE: moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
  //     EFFECT_TO_DATE: moment(formVal.EFFECT_TO_DATE).format('DD/MM/YYYY'),
  //     CODE: formVal.CODE,
  //     CODE_TYPE: formVal.CODE_TYPE,
  //     // DEFAULT_BALTYPE: formVal.DEFAULT_BALTYPE,
  //     // REVERSE_CODE: formVal.REVERSE_CODE,
  //     // SUB_COLUMN_NO: formVal.SUB_COLUMN_NO,
  //   }
  //   this.resetForm();
  //   this.glLinkingMasterService.postLData(dataToSend).subscribe(data1 => {
  //     Swal.fire('Success!', 'Data Added Successfully !', 'success');
  //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //       dtInstance.ajax.reload()
  //     });
  //   }, (error) => {
  //     console.log(error)
  //   })
  // }

  //function for edit button clicked
  // editClickHandler(id) {
    // this.addButton = false;
    // this.updateButton = true;
    // this.glLinkingMasterService.getFromLData(id).subscribe(data => {
    //   this.updateID = data.id;
    //   this.effectdate = moment(data.EFFECT_DATE, 'DD/MM/YYYY')
    //   this.effectdate = this.effectdate._d
    //   this.angForm.patchValue({
    //     SR_NO: data.SR_NO,
    //     AC_NO: data.AC_NO,
    //     AC_NAME:  data.AC_NAME,
    //     EFFECT_DATE: data.EFFECT_DATE,
    //     EFFECT_TO_DATE: data.EFFECT_TO_DATE,
    //     CODE: data.CODE,
    //     CODE_TYPE: Number(data.CODE_TYPE),
        // DEFAULT_BALTYPE: data.DEFAULT_BALTYPE,
        // REVERSE_CODE: Number(data.REVERSE_CODE),
        // SUB_COLUMN_NO: data.SUB_COLUMN_NO,
  //     })
  //   })
  // }


  updateCell(data: any, field: string, event: any): void {
    if (data[field] !== event.target.innerText) {
        data[field] = event.target.innerText; // Update the value
        data.modified = true; // Mark as modified
    }
}

// updateDropdown(data: any, field: string, event: any): void {
//     if (data[field] !== event.target.value) {
//         data[field] = event.target.value; // Update the value
//         data.modified = true; // Mark as modified
//     }
// }

updateDropdown(data: any, event: any): void {
  const selectedCode = event.target.value;
  
  if (data.CODE !== selectedCode) {
      const selectedItem = this.codeValues.find(item => item.code === selectedCode);
      
      if (selectedItem) {
          data.CODE = selectedItem.code;
          data.NAME = selectedItem.name;
          data.modified = true; 
      } else {
          data.CODE = selectedCode;
          data.NAME = ''; 
          data.modified = true;
      }
  }
}

updateData(): void {
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to update the record(s)?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, update it!',
    cancelButtonText: 'No, cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedData = this.tabledata
        .filter(row => row.modified) 
        .map(row => {
          const updatedRow: any = {
            AC_NO: row.AC_NO, 
            acno: row.acno, 
            acname: row.acname, 
            id: row.id, 
            EFFECT_TO_DATE : row.EFFECT_TO_DATE,
            EFFECT_DATE : row.EFFECT_DATE,
            NAME : row.NAME,
            CODE : row.CODE,
            SUB_COLUMN : row.SUB_COLUMN,
            REPORT_TYPE: row.REPORT_TYPE != null ? row.REPORT_TYPE : this.selectedCategory

          };
          return updatedRow;
        });

      if (updatedData.length > 0) {
        this.glLinkingMasterService.updateLData({ updatedData }).subscribe(() => {
          Swal.fire('Success!', 'Record Updated Successfully!', 'success');
          
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload();
          });
          this.resetForm();
        });
      } else {
        Swal.fire('No Changes', 'There are no changes to update.', 'info');
      }
    } else {
      Swal.fire('Cancelled', 'No changes were made.', 'error');
    }
  });
}
  
  //reset form
  resetForm() {
    this.createForm()
  }
}
