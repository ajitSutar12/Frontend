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
  AC_ACNOTYPE: string,
  DEFAULT_BALTYPE: number,
  REVERSE_CODE: number,
  SUB_COLUMN_NO: number


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
    { id: 2, name: 'CREDIT' },];

  
  
  headName: any = [];
  //ngmodel
  ngName
  ngHeadname
  ngReverse
  ngSub
  ngType
  addButton: boolean = true;
  updateButton: boolean = false;

  // bsValue
  maxDate: any;
  constructor(private http: HttpClient, private fb: FormBuilder,
    private reportTypeDropdown: ReportTMasterDropdownService,
    // private schemeAccountNoService: SchemeAccountNoService,
    private glLinkingMasterService: GlAccountsMasterService,
    private systemParameter: SystemMasterParametersService,

  ) {
    // this.maxDate = new Date();
    // // this.maxDate.setDate(this.maxDate.getDate());

    // this.systemParameter.getFormData(1).subscribe(data => {
    //   this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
    //   this.maxDate = this.maxDate._d
    // })
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
        {
          title: 'Action',

        },
        {
          title: 'Sr No',
          data: 'SR_NO'
        },
        {
          title: 'General Ledger Account No',
          data: 'AC_NO'
        },
        // {
        //   title: 'General Ledger  Account Name',
        //   data: 'AC_NAME'
        // },
        {
          title: 'Effect From Date',
          data: 'EFFECT_DATE'
        },
        {
          title: 'Effect To Date',
          data: 'EFFECT_TO_DATE'
        },
        {
          title: 'Head Code',
          data: 'AC_ACNOTYPE'
        },
        // {
        //   title: 'Head Name',
        //   data: 'AC_ACNOTYPE'
        // },
        {
          title: 'Default Balance Type',
          data: 'DEFAULT_BALTYPE'
        },
        {
          title: 'Reverse Code',
          data: 'REVERSE_CODE'
        },
        {
          title: 'Sub Column',
          data: 'SUB_COLUMN_NO'
        },
      ],
      dom: 'Blrtip',

    };

    // this.reportTypeDropdown.getReportTMasterList().pipe(first())
    // .subscribe((data) => {
    //   this.headName = data;
    // });



    // this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
    //   this.schemeACNo = data;
    // })

    this.http.get<any>(this.url + '/gl-account-master/').subscribe(data => {
      this.schemeACNo = data;
    })

    this.http.get<any>(this.url + '/gl-account-master/reportMasterList/').subscribe(data => {
      this.headName = data;
    })

  }


  createForm() {
    this.angForm = this.fb.group({

      SR_NO: ["", [Validators.required]],
      AC_NO: ["", [Validators.required]],
      // AC_NAME: ["", [Validators.required]],
      EFFECT_DATE: ["", [Validators.required]],
      EFFECT_TO_DATE: ["", [Validators.required]],
      CODE: ["", [Validators.required]],
      AC_ACNOTYPE: ["", [Validators.required]],
      DEFAULT_BALTYPE: ["", [Validators.required]],
      REVERSE_CODE: ["", [Validators.required]],
      SUB_COLUMN_NO: ["", [Validators.required]],

    });
  }


  addData() {

    const formVal = this.angForm.value;
    var dataToSend = {

      SR_NO: formVal.SR_NO,
      AC_NO: formVal.AC_NO,
      // AC_NAME:  formVal.AC_NAME,
      EFFECT_DATE: moment(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
      EFFECT_TO_DATE: moment(formVal.EFFECT_TO_DATE).format('DD/MM/YYYY'),
      CODE: formVal.CODE,
      AC_ACNOTYPE: formVal.AC_ACNOTYPE,
      DEFAULT_BALTYPE: formVal.DEFAULT_BALTYPE,
      REVERSE_CODE: formVal.REVERSE_CODE,
      SUB_COLUMN_NO: formVal.SUB_COLUMN_NO,

    }

    // this.glreportLink.push(object);
    this.resetForm();

    // console.log(this.ngForm.value);
    this.glLinkingMasterService.postLData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });

    }, (error) => {
      console.log(error)
    })
  }

  //function for edit button clicked
  editClickHandler(id) {

    this.addButton = false;
    this.updateButton = true;
    this.glLinkingMasterService.getFromLData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.patchValue({

        SR_NO: data.SR_NO,
        AC_NO: data.AC_NO,
        // AC_NAME:  data.AC_NAME,
        EFFECT_DATE: moment(data.EFFECT_DATE).format('DD/MM/YYYY'),
        EFFECT_TO_DATE: moment(data.EFFECT_TO_DATE).format('DD/MM/YYYY'),
        CODE: data.CODE,
        AC_ACNOTYPE: Number(data.AC_ACNOTYPE),
        DEFAULT_BALTYPE: data.DEFAULT_BALTYPE,
        REVERSE_CODE: data.REVERSE_CODE,
        SUB_COLUMN_NO: data.SUB_COLUMN_NO,

      })

    })
  }

  //function toggle update to add button
  updateData() {

    //  this.addButton = true;
    // this.updateButton = false;
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.glLinkingMasterService.updateLData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.addButton = true;
      this.updateButton = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })

  }

  //reset form
  resetForm() {
    this.createForm()
  }

}
