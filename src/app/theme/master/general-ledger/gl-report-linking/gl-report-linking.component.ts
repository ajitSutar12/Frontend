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
import { TranslateService } from '@ngx-translate/core';
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
  setLang:any;

  constructor(private http: HttpClient, private fb: FormBuilder,
    private reportTypeDropdown: ReportTMasterDropdownService,
    // private schemeAccountNoService: SchemeAccountNoService,
    private glLinkingMasterService: GlAccountsMasterService,
    private systemParameter: SystemMasterParametersService,private translate:TranslateService

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
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
          title: this.translate.instant('master.Action.Action'),
        },
        {
          title: this.translate.instant('master.GL_Report_Linking.sr_no'),
          data: 'SR_NO'
        },
        {
         title: this.translate.instant('master.GL_Report_Linking.GL_Account'),
          data: 'AC_NO'
        },
        // {
        //   title: 'General Ledger  Account Name',
        //   data: 'AC_NAME'
        // },
        {
          title: this.translate.instant('master.GL_Report_Linking.Effect_From_Date'),
          data: 'EFFECT_DATE'
        },
        {
          title: this.translate.instant('master.GL_Report_Linking.Effect_To_Date'),
          data: 'EFFECT_TO_DATE'
        },
        {
          title: this.translate.instant('master.GL_Report_Linking.Code_Type'),
          data: 'CODE_TYPE'
        },
        // {
        //   title: 'Head Name',
        //   data: 'CODE_TYPE'
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
        //   title: 'Sub Column',
        //   data: 'SUB_COLUMN_NO'
        // },
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
  createForm() {
    this.angForm = this.fb.group({
      AC_NO: ["", [Validators.required]],
      EFFECT_DATE: ["", [Validators.required]],
      EFFECT_TO_DATE: ["", [Validators.required]],
      CODE_TYPE: ["", [Validators.required]],
      // DEFAULT_BALTYPE: ["", [Validators.required]],
      // REVERSE_CODE: ["", [Validators.required]],
      // SUB_COLUMN_NO: ["", [Validators.required]],
      // SR_NO: ["", [Validators.required]],
      // // AC_NAME: ["", [Validators.required]],
      // // CODE: ["", [Validators.required]],
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
      CODE_TYPE: formVal.CODE_TYPE,
      // DEFAULT_BALTYPE: formVal.DEFAULT_BALTYPE,
      // REVERSE_CODE: formVal.REVERSE_CODE,
      // SUB_COLUMN_NO: formVal.SUB_COLUMN_NO,
    }
    this.resetForm();
    this.glLinkingMasterService.postLData(dataToSend).subscribe(data1 => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
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
      this.effectdate = moment(data.EFFECT_DATE, 'DD/MM/YYYY')
      this.effectdate = this.effectdate._d
      this.angForm.patchValue({
        SR_NO: data.SR_NO,
        AC_NO: data.AC_NO,
        // AC_NAME:  data.AC_NAME,
        EFFECT_DATE: data.EFFECT_DATE,
        EFFECT_TO_DATE: data.EFFECT_TO_DATE,
        CODE: data.CODE,
        CODE_TYPE: Number(data.CODE_TYPE),
        // DEFAULT_BALTYPE: data.DEFAULT_BALTYPE,
        // REVERSE_CODE: Number(data.REVERSE_CODE),
        // SUB_COLUMN_NO: data.SUB_COLUMN_NO,
      })
    })
  }

  //function toggle update to add button
  updateData() {
    //  this.addButton = true;
    // this.updateButton = false;
    let data = this.angForm.value;
    data['id'] = this.updateID;
    let EFFECT_DATE = moment(data.EFFECT_DATE, 'DD/MM/YYYY')
    data['EFFECT_DATE'] = moment(EFFECT_DATE).format('DD/MM/YYYY')
    let EFFECT_TODATE = moment(data.EFFECT_TO_DATE, 'DD/MM/YYYY')
    data['EFFECT_TO_DATE'] = moment(EFFECT_TODATE).format('DD/MM/YYYY')

    this.glLinkingMasterService.updateLData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg1')}`, 'success');
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
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
