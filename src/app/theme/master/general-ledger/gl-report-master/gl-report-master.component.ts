import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import Swal from "sweetalert2";
// Angular Datatable Directive 
import { environment } from '../../../../../environments/environment'
import { NgSelectComponent } from "@ng-select/ng-select";
import { HttpClient } from "@angular/common/http";
import { first } from "rxjs/operators";
import { ReportTMasterDropdownService } from "../../../../shared/dropdownService/report-type-master-dropdown.service";
import { DataTableDirective } from "angular-datatables";
import { GlAccountsMasterService } from "../gl-accounts-master/gl-accounts-master.service";
import { Console } from "console";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";

import { TranslateService } from "@ngx-translate/core";

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}



interface GlreportMaster {

  REPORT_TYPE: string,
  CODE: number,
  NAME: string,
  CODE_TYPE: string,
  ADD_PL_AMOUNT: number,
  SERIAL_NO: number,
  PERCENTAGE_OF_CODE: number,
  INPUT_ALLOWED: number,
  IS_PRINT_IN_REPORT: number,
  PERCENTAGE: number,
  PERCENTAGE_CONSIDARATION: number


}

@Component({
  selector: "app-gl-report-master",
  templateUrl: "./gl-report-master.component.html",
  styleUrls: ["./gl-report-master.component.scss"],
  animations: [
    trigger("fadeInOutTranslate", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in-out", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        style({ transform: "translate(0)" }),
        animate("400ms ease-in-out", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class GlReportMasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  url = environment.base_url;
  ngForm: FormGroup;
  // multigrid = [];
  glreport: any = [];
  glreportMaster = [];
  romanNo: { id: string, label: string }[] = [];
  alphabet: { id: string, label: string }[] = [];
  numbers: { id: number, label: number }[] = [];

  codetype: any = [
    { id: 'A', name: 'On Balance Sheet Item' },
    { id: 'B', name: 'Off Balance Sheet Item' },
    { id: 'C', name: 'Capital Funds and Risk Assets Ratio' },];

  //ngModel
  firstNo
  selectedType
  reportType

  //heads
  Btn1: boolean = true;
  Btn2: boolean = false;
  Btn3: boolean = false;
  Btn4: boolean = false;
  Btn5: boolean = false;
  Btn6: boolean = false;
  Btn7: boolean = false;
  Btn8: boolean = false;
  Btn9: boolean = false;
  Btn10: boolean = false;

  filterData: any[] = []; // This will hold the filtered data
  originalData: any[] = [];


  //button
  addButton: boolean = true
  updateButton: boolean = false
  updateID: number = 0;

  dtExportButtonOptions: any = {}; //Datatable variable
  //filter variable
  // filterData = {};
  page: number = 1;
  updateTableData: any;
  abrData = [];
  setLang: any;


  constructor(private http: HttpClient, private fb: FormBuilder,
    private reportTypeDropdown: ReportTMasterDropdownService,
    private glReportMasterService: GlAccountsMasterService,
    private changeDetectorRef: ChangeDetectorRef,
    private translate: TranslateService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {

      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    // Fetching Server side data
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
            this.url + "/gl-account-master/masterLoad",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.glreportMaster = resp.data;
            console.log("ANG_TABLE_DATA", this.glreportMaster)

            this.filterData1;


            // for (let i = 0; i < this.glreportMaster.length; i++) {
            //   if (this.glreportMaster[i].REPORT_TYPE == 'EXPENSES') {
            //     this.filterData1 = this.glreportMaster[i]
            //   }
            // }
            // console.log("Filter data1 EXPENSES",this.filterData1)

            // for (let i = 0; i < this.glreportMaster.length; i++) {
            //   if (this.glreportMaster[i].REPORT_TYPE == 'CRAR') {
            //     this.filterData1 = this.glreportMaster[i]
            //   }
            // }
            // console.log("Filter data1 CRAR",this.filterData1)

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });


        // this.fetchData(callback);

      },
      columnDefs: [
        {
          targets: "_all",
          defaultContent: '',
        },
      ],
      columns: [
        {
          title: this.translate.instant('master.Action.Action'),
        },
        {
          title: this.translate.instant('master.GL_Report_Master.Report_Type'),
          data: "REPORT_TYPE",
        },
        {
          title: this.translate.instant('master.GL_Report_Master.Code'),
          data: "CODE",
        },
        {
          title: this.translate.instant('master.GL_Report_Master.Name'),
          data: "NAME",
        },
        {
          title: this.translate.instant('master.GL_Report_Master.Code_Type'),
          data: "CODE_TYPE",
        },
        {
          title: this.translate.instant('master.GL_Report_Master.sr_no'),
          data: "SERIAL_NO",
        },
        {
          title: "FIRST_SRNO ",
          data: "FIRST_SRNO",
        }, {
          title: "Second_SRNO",
          data: "Second_SRNO",
        }, {
          title: "Third_SRNO",
          data: "Third_SRNO",
        }, {
          title: "HO_LIQ_CODE1",
          data: "HO_LIQ_CODE1",
        }, {
          title: "HO_LIQ_CODE2",
          data: "HO_LIQ_CODE2",
        }, {
          title: "ALTERNET_CODE",
          data: "ALTERNET_CODE",
        },
        {
          title: this.translate.instant('master.GL_Report_Master.Percentage'),
          data: "PERCENTAGE",
        },
        {
          title: this.translate.instant('master.GL_Report_Master.Percentage_of_Cosideration'),
          data: "PERCENTAGE_CONSIDARATION",
        },
        {
          title: this.translate.instant('master.GL_Report_Master.Percentage_of_Code'),
          data: "PERCENTAGE_OF_CODE",
        },
      ],

      dom: "Blrtip",

    };
    this.createForm();
    this.romanNo = this.generateRomanNumbers();
    this.alphabet = this.generateAlphabet();
    this.numbers = this.generateNumbers();

    this.reportTypeDropdown.getReportTMasterList().pipe(first())
      .subscribe((data) => {
        this.glreport = data;
        console.log("report type", this.glreport);
      });
  }

  generateRomanNumbers(): { id: string, label: string }[] {
    const romanNumerals = [
      'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
      'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
      'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX',
      'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL',
      'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L'
    ];

    return romanNumerals.map((num, index) => ({ id: num, label: num }));
  }
  generateAlphabet(): { id: string, label: string }[] {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const alphabetWithNull = [{ id: 'null', label: 'null' }, ...alphabet.map(letter => ({ id: letter, label: letter }))];

    return alphabetWithNull;
  }

  generateNumbers(): { id: number, label: number }[] {
    const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

    return numbers.map(num => ({ id: num, label: num }));
  }

  createForm() {
    this.ngForm = this.fb.group({
      fno: ['', Validators.required],
      sno: ['', Validators.required],
      tno: ['', Validators.required],
      CODE: ['',],
      CODE1: ['',],
      AltCode: ['',],
      HOcode1: ['',],
      HOcode2: ['',],
      FNAME: ["", [Validators.required]],
      NAME: ["", [Validators.required]],
      REPORT_TYPE: ["", [Validators.required]],
      CODE_TYPE: ["", [Validators.required]],
      ADD_PL_AMOUNT: [''],
      SERIAL_NO: ["", [Validators.required]],
      PERCENTAGE_OF_CODE: ['',],
      INPUT_ALLOWED: [''],
      IS_PRINT_IN_REPORT: [''],
      PERCENTAGE: ["", [Validators.required]],
      PERCENTAGE_CONSIDARATION: ["", [Validators.required]],

    });
  }


  //reset form
  resetForm() {
    this.createForm()
  }

  // fetchData(callback: any) {
  //   const dataTableParameters = {
  //     filterData: this.filterData
  //   };

  //   this.http.post<DataTableResponse>(this.url + "/gl-account-master/masterLoad", dataTableParameters)
  //     .subscribe((resp) => {
  //       this.glreportMaster = resp.data; 
  //       console.log("ANG_TABLE_DATA", this.glreportMaster);


  // for(let i =0;i<this.originalData.length;i++)
  // {
  //   if(this.originalData[i].REPORT_TYPE == 'ABR/ALR'){
  //     this.abrData.push(this.originalData[i])
  //   }
  // }
  // console.log(this.abrData,"from ts file")

  // this.glreportMaster = resp.data; // Update glreportMaster with the fetched data
  // console.log("ANG_TABLE_DATA", this.glreportMaster);

  // callback({
  //   recordsTotal: resp.recordsTotal,
  //   recordsFiltered: resp.recordsTotal,
  //   data: this.originalData // Use the fetched data to populate the table
  // });


  //     });
  // }

  // selectedCategory: string | null = null;

  // onExpensesClick(reportType: string): void {
  //   this.selectedCategory = reportType; 
  //   const obj = {
  //     REPORT_TYPE: [reportType]
  //   }
  // }

  filterData1 = []
  Btnn1() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = true;
    this.Btn2 = false;
    this.Btn3 = false;
    this.Btn4 = false;
    this.Btn5 = false;
    this.Btn6 = false;
    this.Btn7 = false;
    this.Btn8 = false;
    this.Btn9 = false;
    this.Btn10 = false;

    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'EXPENSES');
    console.log("EXPENSES", this.filterData1);

  }

  Btnn2() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = true;
    this.Btn3 = false;
    this.Btn4 = false;
    this.Btn5 = false;
    this.Btn6 = false;
    this.Btn7 = false;
    this.Btn8 = false;
    this.Btn9 = false;
    this.Btn10 = false;
    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'SUBSIDARY');
    console.log("filterData1_SUBSIDARY", this.filterData1);

  }

  Btnn3() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = false;
    this.Btn3 = true;
    this.Btn4 = false;
    this.Btn5 = false;
    this.Btn6 = false;
    this.Btn7 = false;
    this.Btn8 = false;
    this.Btn9 = false;
    this.Btn10 = false;
    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'CRAR');
    console.log("filterData1_CRAR", this.filterData1);

  }

  Btnn4() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = false;
    this.Btn3 = false;
    this.Btn4 = true;
    this.Btn5 = false;
    this.Btn6 = false;
    this.Btn7 = false;
    this.Btn8 = false;
    this.Btn9 = false;
    this.Btn10 = false;

    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'DAILY LIQUIDITY');
    console.log("filterData1_Liquidity", this.filterData1);

  }

  Btnn5() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = false;
    this.Btn3 = false;
    this.Btn4 = false;
    this.Btn5 = true;
    this.Btn6 = false;
    this.Btn7 = false;
    this.Btn8 = false;
    this.Btn9 = false;
    this.Btn10 = false;

    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'ABRALR');
    console.log("filterData1_ABR-ALR", this.filterData1);

  }
  Btnn6() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = false;
    this.Btn3 = false;
    this.Btn4 = false;
    this.Btn5 = false;
    this.Btn6 = true;
    this.Btn7 = false;
    this.Btn8 = false;
    this.Btn9 = false;
    this.Btn10 = false;

    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'CRR');
    console.log("filterData1_CRR", this.filterData1);

  }
  Btnn7() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = false;
    this.Btn3 = false;
    this.Btn4 = false;
    this.Btn5 = false;
    this.Btn6 = false;
    this.Btn7 = true;
    this.Btn8 = false;
    this.Btn9 = false;
    this.Btn10 = false;

    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'SLR');
    console.log("filterData1_SLR", this.filterData1);

  }
  Btnn8() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = false;
    this.Btn3 = false;
    this.Btn4 = false;
    this.Btn5 = false;
    this.Btn6 = false;
    this.Btn7 = false;
    this.Btn8 = true;
    this.Btn9 = false;
    this.Btn10 = false;

    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'NIDHI');
    console.log("filterData1_NIDHI", this.filterData1);

  }
  Btnn9() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = false;
    this.Btn3 = false;
    this.Btn4 = false;
    this.Btn5 = false;
    this.Btn6 = false;
    this.Btn7 = false;
    this.Btn8 = false;
    this.Btn9 = true;
    this.Btn10 = false;


    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'FRIDAY LIRUIDITY');
    console.log("filterData1_FRIDAY LIQUIDITY", this.filterData1);

  }
  Btnn10() {
    this.resetForm();

    this.filterData1 = []
    this.Btn1 = false;
    this.Btn2 = false;
    this.Btn3 = false;
    this.Btn4 = false;
    this.Btn5 = false;
    this.Btn6 = false;
    this.Btn7 = false;
    this.Btn8 = false;
    this.Btn9 = false;
    this.Btn10 = true;

    this.filterData1 = this.glreportMaster.filter(item => item.REPORT_TYPE === 'MISINFO');
    console.log("filterData1_MISINFO", this.filterData1);

  }

  dataToSend
  addData() {
    const formVal = this.ngForm.value;

    if (this.Btn1) {
      this.dataToSend = {
        REPORT_TYPE: 'EXPENSES',
        CODE: formVal.CODE,
        NAME: formVal.NAME,
        INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),
      }
    } else if (this.Btn2) {
      this.dataToSend = {
        REPORT_TYPE: 'SUBSIDARY',
        CODE: formVal.CODE,
        NAME: formVal.NAME,
        INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),
      }
    }
    else if (this.Btn3) {
      this.dataToSend = {
        REPORT_TYPE: 'CRAR',
        CODE: formVal.CODE1,
        NAME: formVal.NAME,
        FIRST_SRNO: formVal.fno,
        Second_NO: formVal.sno,
        Third_NO: formVal.tno,
        CODE_TYPE: formVal.CODE_TYPE,
        // SERIAL_NO: formVal.SERIAL_NO,
        PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
        ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
        INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),
        PERCENTAGE: formVal.PERCENTAGE,
        PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION,
      }
    }
    else if (this.Btn4) {
      this.dataToSend = {
        REPORT_TYPE: 'DAILY LIQUIDITY',
        CODE: formVal.CODE,
        NAME: formVal.NAME,
        // CODE_TYPE: formVal.CODE_TYPE,
        // SERIAL_NO: formVal.SERIAL_NO,
        HO_LIQ_CODE2: formVal.HOcode2,
        HO_LIQ_CODE1: formVal.HOcode1,
        ALTERNET_CODE: formVal.AltCode,
        FIRST_SRNO: formVal.fno,
        Second_SRNO: formVal.sno,
        Third_SRNO: formVal.tno,
        PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
        // ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
        // INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        // IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),
        PERCENTAGE: formVal.PERCENTAGE,
        PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION,
      }
    }
    else if (this.Btn5) {
      this.dataToSend = {
        REPORT_TYPE: 'ABRALR',
        CODE: formVal.CODE,
        NAME: formVal.NAME,
        // CODE_TYPE: formVal.CODE_TYPE,
        FIRST_SRNO: formVal.fno,
        Second_SRNO: formVal.sno,
        Third_SRNO: formVal.tno,
      }
    }
    else if (this.Btn6) {
      this.dataToSend = {
        REPORT_TYPE: 'CRR',
        CODE: formVal.CODE1,
        NAME: formVal.NAME,
        FIRST_SRNO: formVal.fno,
        Second_NO: formVal.sno,
        // SERIAL_NO: formVal.SERIAL_NO,
        // PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
        // ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
        INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),
        // PERCENTAGE: formVal.PERCENTAGE,
        // PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION,
      }
    }
    else if (this.Btn7) {
      this.dataToSend = {
        REPORT_TYPE: 'SLR',
        CODE: formVal.CODE1,
        NAME: formVal.NAME,
        FIRST_SRNO: formVal.fno,
        Second_NO: formVal.sno,
        // SERIAL_NO: formVal.SERIAL_NO,
        // PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
        // ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
        INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),
        // PERCENTAGE: formVal.PERCENTAGE,
        // PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION,
      }
    }
    else if (this.Btn8) {
      this.dataToSend = {
        REPORT_TYPE: 'NIDHI',
        CODE: formVal.CODE1,
        NAME: formVal.NAME,
        // FIRST_SRNO: formVal.fno,
        Second_NO: formVal.sno,
        // SERIAL_NO: formVal.SERIAL_NO,
        // PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
        // PERCENTAGE: formVal.PERCENTAGE,
        // PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION,
        ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
        INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),

      }
    }

    else if (this.Btn9) {
      this.dataToSend = {
        REPORT_TYPE: 'FRIDAY LIRUIDITY',
        CODE: formVal.CODE1,
        NAME: formVal.NAME,
        FNAME: formVal.FNAME,
        FIRST_SRNO: formVal.fno,
        // Second_NO: formVal.sno,
        // SERIAL_NO: formVal.SERIAL_NO,
        PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
        PERCENTAGE: formVal.PERCENTAGE,
        // PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION,
        // ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
        INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),

      }
    }
    else if (this.Btn10) {
      this.dataToSend = {
        REPORT_TYPE: 'MISINFO',
        CODE: formVal.CODE1,
        NAME: formVal.NAME,
        // FIRST_SRNO: formVal.fno,
        Second_NO: formVal.sno,
        // SERIAL_NO: formVal.SERIAL_NO,
        // PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
        // PERCENTAGE: formVal.PERCENTAGE,
        // PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION,
        ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
        INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
        IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),

      }
    }

    this.glReportMasterService.postToData(this.dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      //To clear form
      this.resetForm();
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
    this.glReportMasterService.getFromData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngForm.patchValue({
        REPORT_TYPE: data.REPORT_TYPE,
        CODE: data.CODE,
        NAME: data.NAME,
        CODE_TYPE: data.CODE_TYPE,
        SERIAL_NO: data.SERIAL_NO,
        PERCENTAGE: data.PERCENTAGE,
        PERCENTAGE_CONSIDARATION: data.PERCENTAGE_CONSIDARATION,
        PERCENTAGE_OF_CODE: data.PERCENTAGE_OF_CODE,
        ADD_PL_AMOUNT: (data.ADD_PL_AMOUNT == 1 ? true : false),
        INPUT_ALLOWED: (data.INPUT_ALLOWED == 1 ? true : false),
        IS_PRINT_IN_REPORT: (data.IS_PRINT_IN_REPORT == 1 ? true : false),
      })
    })
  }

  //function toggle update to add button
  updateData() {
    let data = this.ngForm.value;
    data['id'] = this.updateID;
    data['ADD_PL_AMOUNT'] = data['ADD_PL_AMOUNT'] == true ? 1 : 0
    data['INPUT_ALLOWED'] = data['INPUT_ALLOWED'] == true ? 1 : 0
    data['IS_PRINT_IN_REPORT'] = data['IS_PRINT_IN_REPORT'] == true ? 1 : 0
    this.glReportMasterService.updateToData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.addButton = true;
      this.updateButton = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }

  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele.target.value <= 100) {
    }
    else {
      Swal.fire("Invalid Input", "Please Insert Values Below 100", "error");
      ele.target.value = 0
    }
  }

  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
    console.log(ele);
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }

}

