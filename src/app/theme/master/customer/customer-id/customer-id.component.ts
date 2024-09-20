import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Renderer2,
} from "@angular/core";
import { Observable, Subject, Subscriber } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
// Service File For Handling CRUD Operation
import { CustomerIdService } from "./customer-id.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { first } from "rxjs/operators";
import { PrefixMasterDropdownService } from "../../../../shared/dropdownService/prefix-master-dropdown.service";
import { CastMasterService } from "../../../../shared/dropdownService/cast-master-dropdown.service";
import { OccupationMasterService } from "../../../../shared/dropdownService/occupation-master-dropdown.service";
import { SalaryDMasterdropdownService } from "../../../../shared/dropdownService/salary-division-master-dropdown.service";
import { cityMasterService } from "../../../../shared/dropdownService/city-master-dropdown.service";
import { RiskCategoryDropdownService } from "../../../../shared/dropdownService/risk-category-dropdown.service";
import { DocumentMasterDropdownService } from "../../../../shared/dropdownService/document-master-dropdown.service";
import { environment } from "../../../../../environments/environment";
import { Router } from "@angular/router";
import { NgSelectComponent } from "@ng-select/ng-select";
import * as moment from 'moment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { TranslateService } from "@ngx-translate/core";

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DocumentMaster {
  id: number;
  NAME: string;
}
interface CustomerMaster {
  AC_NO: number;
  AC_MEMBTYPE: string;
  AC_MEMBNO: string;
  AC_TITLE: string;
  F_NAME: string;
  L_NAME: string;
  M_NAME: string;
  AC_NAME: string;
  MF_NAME: string;
  ML_NAME: string;
  MM_NAME: string;
  AC_CAST: string;
  AC_OCODE: string;
  AC_ADHARNO: string;
  AC_RISKCATG: string;
  AC_BIRTH_DT: string;
  AC_HONO: string;
  AC_WARD: string;
  AC_ADDR: string;
  AC_GALLI: string;
  AC_AREA: string;
  AC_CTCODE: string;
  AC_PIN: number;
  AC_PANNO: number;
  AC_SALARYDIVISION_CODE: string;
  AC_MOBILENO: number;
  AC_PHONE_RES: number;
  AC_PHONE_OFFICE: number;
  AC_EMAILID: string;
  TDSDOCUMNET: boolean;
  AC_IS_RECOVERY: boolean;
  TDS_REQUIRED: boolean;
  SMS_REQUIRED: boolean;
  IS_KYC_RECEIVED: boolean;
  FIN_YEAR: number;
  SUBMIT_DATE: Date;
  FORM_TYPE: string;
  TDS_RATE: number;
  TDS_LIMIT: number;
  COP_NO: string;
  TAN_NO: number;
  GST_NO: number;
  REG_NO: number;
  REG_DATE: string;
  PROP_NAME: string;
}

@Component({
  selector: "app-customer-id",
  templateUrl: "./customer-id.component.html",
  styleUrls: ["./customer-id.component.scss"],
})
export class CustomerIdComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  @Output() newCustomerEvent = new EventEmitter<string>();
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  @ViewChild('ngSelect') ngSelect: NgSelectComponent;
  @ViewChild('modalLarge') modalLarge;

  public visible = false;
  public visibleAnimate = false;
  @ViewChild('triggerhide') triggerhide: ElementRef;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  custData;
  datemax: any;
  setLang: any;
  addNewCustomer(value) {
    this.newCustomerEvent.emit(value);
  }
  //api
  url = environment.base_url;
  imageObject = new Array();

  // status variables
  yes: boolean = false
  no: boolean = true

  fname = "";
  fname1 = "";
  mname = "";
  lname = "";
  fullname = "";
  lnamereg = "";
  fnamereg = "";
  mnamereg = "";
  fullnamereg = "";
  acTitle = "";
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  customerMaster: CustomerMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  dtExportOptions: DataTables.Settings = {};
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = "start";
  active = 1;
  activeKeep = 1;
  // Variables for search
  filterObject: { name: string; type: string }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable to get ID to update
  updateID: number = 0;
  // Filter Variable
  filterData = {};
  prifix: any[];
  regPrifix: any
  castMaster: any[];
  occupation: any[];
  riskCategory: any[];
  salaryDivision: any[];
  city: any[];
  risk: any[];
  documentMaster: DocumentMaster[];
  isDocument: boolean = false;
  isTdsForm: boolean = false;
  isTdsFormA: boolean = false;
  SUBMIT_DATE: boolean = false;
  enablefields: boolean = true;
  hasFocus: boolean = false;
  ngselectbool: boolean = true;
  today: Date;
  focus: boolean = true;
  ngfinyear: any
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  selectedImagePreview: any;
  selectedImgArrayDetails = [];
  isImgPreview: boolean = false
  imgBase64: any
  showImage: boolean = false;

  //dropdown ngModel variables
  ngCast: any = null
  ngoccupation: any = null
  ngRisk: any = null
  ngCity: any = null
  ngTitle: any = null
  ngTitlereg: any = null
  updatecheckdata: any
  ngSubmitDate: any
  bsValue
  maxDate: any;
  urlMap: SafeResourceUrl
  fileuploaded: boolean = false
  filenotuploaded: boolean = true
  FinYear = '';
  autofacus: boolean = false;

  constructor(
    private http: HttpClient,
    private customerIdService: CustomerIdService,
    private fb: FormBuilder,
    private prefixMaster: PrefixMasterDropdownService,
    private castService: CastMasterService,
    private occupationMaster: OccupationMasterService,
    private salaryDMaster: SalaryDMasterdropdownService,
    private cityMaster: cityMasterService,
    private riskCategoryDropdown: RiskCategoryDropdownService,
    private documentMasterService: DocumentMasterDropdownService,
    public router: Router,
    public sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,

    private translate: TranslateService

  ) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d

      //Translation 
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })

  }

  ngOnInit(): void {
    this.createForm();
    let finYear
    let dat: any = localStorage.getItem('user');
    let result1 = JSON.parse(dat);
    var sysDate
    let ssysDate = moment(result1.branch.syspara.CURRENT_DATE, 'DD-MM-YYYY')
    sysDate = (ssysDate['_d'])
    var year = sysDate.getFullYear();
    var month = sysDate.getMonth();
    month > 2 ? finYear = year : finYear = year - 1
    this.FinYear = finYear + '-' + Number(finYear + 1)

    // let use = JSON.parse(localStorage.getItem('use'));

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.CODE
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
        dataTableParameters['branchCode'] = result.branchId;
        dataTableParameters["filterData"] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + "/customer-id",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.customerMaster = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columns: [
        {
          title: this.translate.instant('master.Action.Action'),
        },
        {
          title: this.translate.instant('master.Customer_Id.Customer_id'),
          data: "AC_NO",
        },
        {
          title: this.translate.instant('master.Customer_Id.Member_Number'),
          data: "AC_MEMBNO",
        },
        {
          title: this.translate.instant('master.Customer_Id.Member_Scheme'),
          data: "AC_MEMBTYPE",
        },

        {
          title: this.translate.instant('master.Customer_Id.Full_Name'),
          data: "AC_NAME",
        },
        {
          title: this.translate.instant('master.Customer_Id.Mother_full_Name'),
          data: "MAC_NAME",
        },
        {
          title: this.translate.instant('master.Customer_Id.cast'),
          data: "AC_CAST",
        },
        {
          title: this.translate.instant('master.Customer_Id.Occupation'),
          data: "AC_OCODE",
        },
        {
          title: this.translate.instant('master.Customer_Id.Risk_Category'),
          data: "AC_RISKCATG",
        },
        {
          title: this.translate.instant('master.Customer_Id.Adhar_Number'),
          data: "AC_ADHARNO",
        },
        {
          title: this.translate.instant('master.Customer_Id.Pan_Number'),
          data: "AC_PANNO",
        },
        {
          title: this.translate.instant('master.Customer_Id.gst_no'),
          data: "GST_NO",
        },
        {
          title: this.translate.instant('master.Customer_Id.tan_no'),
          data: "TAN_NO",
        },
        {
          title: this.translate.instant('master.Customer_Id.reg_no'),
          data: "REG_NO",
        },
        {
          title: this.translate.instant('master.Customer_Id.reg_date'),
          data: "REG_DATE",
        },
        {
          title: this.translate.instant('master.Customer_Id.Proprietor'),
          data: "PROP_NAME",
        },
        {
          title: this.translate.instant('master.Customer_Id.Birth_Date'),
          data: "AC_BIRTH_DT",
        },
        {
          title: this.translate.instant('master.Customer_Id.Mobile_Number'),
          data: "AC_MOBILENO",
        },
        {
          title: this.translate.instant('master.Customer_Id.Email'),
          data: "AC_EMAILID",
        },
      ],
      dom: "Blrtip",
    };
    this.dtExportOptions = {
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
        this.http
          .post<DataTableResponse>(
            this.url + "/document-master",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.documentMaster = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: resp.data,
            });
          });
      },
      columnDefs: [
        {
          targets: "_all",
          defaultContent: "",
        },
      ],
      columns: [
        {
          title: "Action",
          data: "NAME",
        },
      ],
    };

    this.prefixMaster.getPrefixMasterList().pipe(first()).subscribe((data) => {
      this.prifix = data;
    });
    this.prefixMaster.getRegionalPrefixMasterList().pipe(first()).subscribe((data) => {
      this.regPrifix = data;
    });
    this.documentMasterService
      .getDocumentMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.documentMaster = data;
      });
    this.castService
      .getcastList()
      .pipe(first())
      .subscribe((data) => {
        this.castMaster = data;
      });
    this.occupationMaster
      .getoccupationList()
      .pipe(first())
      .subscribe((data) => {
        this.occupation = data;
      });
    if (result.RoleDefine[0].Role.id == 1) {
      this.salaryDMaster
        .getSalaryDMasterList(branchCode)
        .pipe(first())
        .subscribe((data) => {
          this.salaryDivision = data;
        });
    }
    else {
      this.salaryDMaster
        .getSalaryDMasterList(branchCode)
        .pipe(first())
        .subscribe((data) => {
          this.salaryDivision = data;
        });

    }

    this.cityMaster.getcityList().pipe(first()).subscribe((data) => {
      this.city = data;
    });
    this.riskCategoryDropdown
      .getRiskCategoryList()
      .pipe(first())
      .subscribe((data) => {
        this.risk = data;
      });
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_NO: [""],
      AC_MEMBTYPE: [""],
      AC_MEMBNO: [""],
      AC_TITLE: ["", [Validators.required]],
      F_NAME: [""],
      M_NAME: [""],
      L_NAME: [""],
      BENEF_NAME: [""],
      AC_TITLE_REG: [""],
      F_NAME_REG: [""],
      M_NAME_REG: [""],
      L_NAME_REG: [""],
      AC_ADD_REG: [''],
      AC_NAME_REG: [''],
      AC_NAME: ["", [Validators.pattern]],
      AC_CAST: [""],
      AC_OCODE: [""],
      AC_ADHARNO: ["", [Validators.pattern]],
      AC_RISKCATG: [""],
      AC_BIRTH_DT: ["", [Validators.required]],
      AC_HONO: ["", [Validators.pattern]],
      AC_WARD: ["", [Validators.pattern]],
      AC_ADDR: ["", [Validators.pattern]],
      AC_GALLI: ["", [Validators.pattern]],
      AC_AREA: ["", [Validators.pattern]],
      AC_CTCODE: ["", [Validators.required]],
      AC_PIN: ["", [Validators.pattern]],
      AC_SALARYDIVISION_CODE: [""],
      AC_PANNO: ["", [Validators.pattern]],
      AC_MOBILENO: ["", [Validators.pattern]],
      AC_PHONE_RES: ["", [Validators.pattern]],
      AC_PHONE_OFFICE: ["", [Validators.pattern]],
      AC_EMAILID: ["", [Validators.pattern]],
      TDSDOCUMNET: [""],
      AC_IS_RECOVERY: [],
      TDS_REQUIRED: [],
      SMS_REQUIRED: [],
      IS_KYC_RECEIVED: [],
      FIN_YEAR: [""],
      SUBMIT_DATE: [""],
      FORM_TYPE: [""],
      TDS_RATE: ["", [Validators.pattern]],
      TDS_LIMIT: ["", [Validators.pattern]],
      BRANCH_CODE: [],
      PROP_NAME: [""],
      REG_NO: [""],
      REG_DATE: [""],
      GST_NO: [""],
      TAN_NO: [""],
      COP_NO: [""],
      ML_NAME: [""],
      MF_NAME: [""],
      MAC_NAME: [""],
      MM_NAME: [""],
      MAC_TITLE: [""],
      Firm_NAME: [""]
    });
    this.documentUpload()
  }

  mTitle
  mlname
  mfname
  mmname
  mfullname

  // Method to insert data into database through NestJS
  submit(event) {
    // debugger
    let birthdate
    let submitdate
    let regdate

    event.preventDefault();
    this.formSubmitted = true;

    if (this.angForm.controls['TDSDOCUMNET'].value == true) {
      this.SUBMIT_DATE = true
    } else {
      this.SUBMIT_DATE = false
    }
    let formVal = this.angForm.value;

    let fullName = '';
    // if (this.showBeneficiaryName && formVal.BENEF_NAME) {
    //   fullName = formVal.BENEF_NAME?.toUpperCase();
    // } else {
    //   fullName = (formVal.L_NAME + ' ' + formVal.F_NAME + ' ' + formVal.M_NAME)?.toUpperCase();
    // }
    if (this.angForm.valid) {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branchId
      const formVal = this.angForm.value;
      let fullname = formVal.AC_NAME
      // let fullName = '';
      // if (this.showBeneficiaryName && formVal.BENEF_NAME) {
      //   fullName = formVal.BENEF_NAME?.toUpperCase();
      // } else {
      //   fullName = (formVal.L_NAME + ' ' + formVal.F_NAME + ' ' + formVal.M_NAME)?.toUpperCase();
      // }
      //mother full name
      let mfullname = '';
      mfullname = formVal.ML_NAME + ' ' + formVal.MF_NAME + ' ' + formVal.MM_NAME;
      const dataToSend = {
        'AC_NO': formVal.AC_NO,
        'AC_MEMBTYPE': formVal.AC_MEMBTYPE,
        'AC_MEMBNO': formVal.AC_MEMBNO,
        'AC_TITLE': formVal.AC_TITLE,
        'F_NAME': formVal.F_NAME?.toUpperCase(),
        'M_NAME': formVal.M_NAME?.toUpperCase(),
        'L_NAME': formVal.L_NAME?.toUpperCase(),
        'BENEF_NAME': formVal.BENEF_NAME?.toUpperCase(),
        'AC_NAME': (formVal.L_NAME + ' ' + formVal.F_NAME + ' ' + formVal.M_NAME)?.toUpperCase(),
        //  'AC_NAME':fullName,
        'MF_NAME': formVal.MF_NAME?.toUpperCase(),
        'MM_NAME': formVal.MM_NAME?.toUpperCase(),
        'ML_NAME': formVal.ML_NAME?.toUpperCase(),
        'MAC_TITLE': formVal.MAC_TITLE,
        'MAC_NAME': mfullname,

        'AC_TITLE_REG': formVal.AC_TITLE_REG.regValue,
        'F_NAME_REG': formVal.F_NAME_REG?.toUpperCase(),
        'M_NAME_REG': formVal.M_NAME_REG?.toUpperCase(),
        'L_NAME_REG': formVal.L_NAME_REG?.toUpperCase(),
        'AC_NAME_REG': (formVal.L_NAME_REG + ' ' + formVal.F_NAME_REG + ' ' + formVal.M_NAME_REG)?.toUpperCase(),
        'AC_ADD_REG': formVal.AC_ADD_REG,
        'AC_CAST': parseInt(formVal.AC_CAST),
        'AC_OCODE': parseInt(formVal.AC_OCODE),
        'AC_ADHARNO': formVal.AC_ADHARNO,
        'AC_RISKCATG': parseInt(formVal.AC_RISKCATG),
        'AC_BIRTH_DT': (formVal.AC_BIRTH_DT == '' || formVal.AC_BIRTH_DT == 'Invalid date') ? birthdate = '' : birthdate = moment(formVal.AC_BIRTH_DT).format('DD/MM/YYYY'),
        'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
        'AC_MOBILENO': formVal.AC_MOBILENO,
        'AC_PHONE_RES': formVal.AC_PHONE_RES,
        'AC_PANNO': formVal.AC_PANNO,
        'AC_PHONE_OFFICE': formVal.AC_PHONE_OFFICE,
        'AC_EMAILID': formVal.AC_EMAILID,
        'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
        'TDS_REQUIRED': (formVal.TDS_REQUIRED == true ? '1' : '0'),
        'SMS_REQUIRED': (formVal.SMS_REQUIRED == true ? '1' : '0'),
        'IS_KYC_RECEIVED': (formVal.IS_KYC_RECEIVED == true ? '1' : '0'),
        'TDSDOCUMNET': (formVal.TDSDOCUMNET == true ? '1' : '0'),
        'AC_HONO': formVal.AC_HONO,
        'AC_WARD': formVal.AC_WARD,
        'AC_ADDR': formVal.AC_ADDR,
        'AC_GALLI': formVal.AC_GALLI,
        'AC_AREA': formVal.AC_AREA,
        'AC_CTCODE': formVal.AC_CTCODE,
        'AC_PIN': formVal.AC_PIN,
        'FIN_YEAR': this.ngfinyear,
        'SUBMIT_DATE': (formVal.SUBMIT_DATE == '' || formVal.SUBMIT_DATE == 'Invalid date') ? submitdate = '' : submitdate = moment(formVal.SUBMIT_DATE).format('DD/MM/YYYY'),
        'FORM_TYPE': formVal.FORM_TYPE,
        'TDS_RATE': formVal.TDS_RATE,
        'TDS_LIMIT': formVal.TDS_LIMIT,
        'Document': this.imageObject,
        'GST_NO': formVal.GST_NO,
        'TAN_NO': formVal.TAN_NO,
        'REG_NO': formVal.REG_NO,
        'REG_DATE': (formVal.REG_DATE == '' || formVal.REG_DATE == 'Invalid date') ? regdate = '' : regdate = moment(formVal.REG_DATE).format('DD/MM/YYYY'),

        'PROP_NAME': formVal.PROP_NAME,
        'COP_NO': formVal.COP_NO,
        BRANCH_CODE: branchCode
      }

      this.customerIdService.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Account Created successfully!',
            html:
              '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
              '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>'
          })
          this.formSubmitted = false;
          this.customerDoc = []
          this.imageObject = []
          this.selectedImgArrayDetails = []
          this.selectedImagePreview = null
          this.addNewCustomer(data.id);
          // to reload after insertion of data
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });
        },
        (error) => {
          console.log(error);
        }
      );
      this.ngRisk = null
      this.ngCity = null
      this.ngTitle = null
      this.ngTitlereg = null

      //To clear form
      this.resetForm();
      this.imageObject = []

    } else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }

  //disabledate on keyup
  disabledate() {
    let data = (document.getElementById("AC_BIRTH_DT") as HTMLInputElement).value
    if (data != "") {

      let date = moment(this.datemax).format('DD/MM/YYYY');
      if (data < date) {
        Swal.fire("Invalid Input", "Please insert valid date ", "warning");
        (document.getElementById("AC_BIRTH_DT") as HTMLInputElement).value = "";
        this.myInputField.nativeElement.focus('AC_BIRTH_DT');
      }
    }
  }

  //disabledate on keyup
  disablesubdate(data: any) {
    if (data != "") {
      if (data > this.datemax) {
        Swal.fire("Invalid Input", "Please insert valid date ", "warning");
        (document.getElementById("SUBMIT_DATE") as HTMLInputElement).value = ""

      }
    }
  }

  //method for force only numbers input
  onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
      return true;
    }
    else {
      return false;
    }
  }

  // Reset Function
  resetForm() {
    this.isDocument = false;
    this.isTdsForm = false;
    this.isTdsFormA = false;
    this.ngCast = null
    this.ngoccupation = null
    this.ngRisk = null
    this.ngCity = null
    this.ngTitle = null
    this.ngTitlereg = null
    this.ngfinyear = null
    this.ngSubmitDate = null
    this.fullname = null
    this.lname = ''
    this.fname = ''
    this.mname = ''
    this.createForm();
    this.documentMasterService
      .getDocumentMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.documentMaster = data;
      });
    this.selectedImagePreview = null
    this.selectedImgArrayDetails = []
    this.imageObject = []
    this.isImgPreview = false
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.fullname = null
    this.lname = ''
    this.fname = ''
    this.mname = ''
    this.mfullname = null
    this.mlname = ''
    this.mfname = ''
    this.mmname = ''
    this.resetForm();
  }

  //enabling and disabling fields of photo and adhar card checkbox
  Enablefields(data, id, ele) {
    if (ele.target.checked) {
      (document.getElementById("file" + id) as HTMLInputElement).disabled =
        false;

    } else {
      (document.getElementById("file" + id) as HTMLInputElement).disabled = true;
      (document.getElementById("file" + id) as HTMLInputElement).value = "";

    }
  }

  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele <= 50) {
    } else {
      Swal.fire("Invalid Input", "Please insert values below 50", "error");
      this.angForm.patchValue({
        TDS_RATE: 0
      })
    }
  }

  //method to add space
  addSpace(data: any) {
    let result = data
      .replace(/\D/g, "")
      .split(/(?:([\d]{4}))/g)
      .filter((s) => s.length > 0)
      .join(" ");
    (document.getElementById("AC_ADHARNO") as HTMLInputElement).value = result;
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
  extractImageName(url: any): string {
    let parts = url.split('/');
    return parts[parts.length - 1];
  }
  customerDoc
  //Method for append data into fields

  motherFullName = true;
  file = null
  editClickHandler(id) {
    this.autofacus = false;
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    let birthdate
    let submitdate
    this.customerIdService.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      this.updateID = data.id;
      this.ngRisk = data.AC_RISKCATG
      this.ngoccupation = data.AC_OCODE
      this.ngCast = data.AC_CAST
      this.ngfinyear = data.tdsForm?.FIN_YEAR
      if (data.MAC_NAME === "null" || data.MAC_NAME === null || data.MAC_NAME === '') {
        this.motherFullName = false;
      } else {
        this.motherFullName = true;
        this.angForm.patchValue({
          MAC_NAME: data.MAC_NAME
        });
      }
      if (data.BENEF_NAME) {
        this.isapplicable = true;
        this.isable = false
        this.firmname = data.BENEF_NAME;
        this.angForm.patchValue({
          BENEF_NAME: data.BENEF_NAME
        });
      } else {
        this.isapplicable = false;

      }

      this.ngSubmitDate = (data.tdsForm?.SUBMIT_DATE == 'Invalid date' || data.tdsForm?.SUBMIT_DATE == '' || data.tdsForm?.SUBMIT_DATE == null) ? submitdate = '' : submitdate = data.tdsForm?.SUBMIT_DATE,
        this.angForm.patchValue({
          AC_NO: data.AC_NO,
          AC_MEMBTYPE: data.AC_MEMBTYPE,
          AC_MEMBNO: data.AC_MEMBNO,
          AC_TITLE: data.AC_TITLE,
          MAC_TITLE: data.MAC_TITLE,

          AC_TITLE_REG: data.AC_TITLE_REG,
          F_NAME: data.F_NAME,
          M_NAME: data.M_NAME,
          L_NAME: data.L_NAME,
          MF_NAME: data.MF_NAME,
          ML_NAME: data.ML_NAME,
          MM_NAME: data.MM_NAME,
          BENEF_NAME: data.BENEF_NAME,
          AC_NAME: data.AC_NAME,
          PROP_NAME: data.PROP_NAME,
          REG_NO: data.REG_NO,
          REG_DATE: data.REG_DATE,
          GST_NO: data.GST_NO,
          TAN_NO: data.TAN_NO,
          COP_NO: data.COP_NO,
          F_NAME_REG: data.F_NAME_REG,
          M_NAME_REG: data.M_NAME_REG,
          L_NAME_REG: data.L_NAME_REG,
          AC_NAME_REG: data.AC_NAME_REG,
          AC_ADD_REG: data.AC_ADD_REG,
          AC_ADHARNO: data.AC_ADHARNO,
          AC_BIRTH_DT: (data.AC_BIRTH_DT == 'Invalid date' || data.AC_BIRTH_DT == '' || data.AC_BIRTH_DT == null) ? birthdate = '' : birthdate = data.AC_BIRTH_DT,
          AC_HONO: data.custAddress[0]?.AC_HONO,
          AC_WARD: data.custAddress[0]?.AC_WARD,
          AC_ADDR: data.custAddress[0]?.AC_ADDR,
          AC_GALLI: data.custAddress[0]?.AC_GALLI,
          AC_AREA: data.custAddress[0]?.AC_AREA,
          AC_CTCODE: Number(data.custAddress[0]?.AC_CTCODE),
          AC_PIN: data.custAddress[0]?.AC_PIN,
          AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
          AC_PANNO: data.AC_PANNO,
          AC_IS_RECOVERY: data.AC_IS_RECOVERY,
          AC_MOBILENO: data.AC_MOBILENO,
          AC_PHONE_RES: data.AC_PHONE_RES,
          AC_PHONE_OFFICE: data.AC_PHONE_OFFICE,
          AC_EMAILID: data.AC_EMAILID,
          TDSDOCUMNET: (data.TDSDOCUMNET == '1' ? true : false),
          TDS_REQUIRED: (data.TDS_REQUIRED == '1' ? true : false),
          SMS_REQUIRED: (data.SMS_REQUIRED == '1' ? true : false),
          IS_KYC_RECEIVED: (data.IS_KYC_RECEIVED == '1' ? true : false),
          FORM_TYPE: data.tdsForm?.FORM_TYPE,
          TDS_RATE: data.tdsForm?.TDS_RATE,
          TDS_LIMIT: data.tdsForm?.TDS_LIMIT,

        });
      if (data.TDSDOCUMNET == true) {
        this.isTdsForm = true;
        this.isTdsFormA = false;
        this.SUBMIT_DATE = true;
      }
      else {
        this.isTdsForm = false;
        this.isTdsFormA = false;
        this.SUBMIT_DATE = false;
      }
      if (data.tdsForm?.FORM_TYPE == "Form15A") {
        this.isForm15A(1)
      }
      if (data.IS_KYC_RECEIVED == true) {
        this.isDocument = true;
        this.imageObject = []
        this.selectedImgArrayDetails = []
        let obj = {
          SCHEME_CODE: 'KYC'
        }
        this.http.post(this.url + '/scheme-linking-with-d/fetchLinkedDoc', obj).subscribe(resp => {
          let DocArr: any = resp
          for (const [key, value] of Object.entries(data.custdocument)) {
            DocArr.forEach(ele => {
              if (data.custdocument.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE'])) {
                let path = (data.custdocument.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE']))
                ele['status'] = true;
                ele['IS_ALLOWED'] = true;
                ele['PATH'] = path['PATH']
              } else {
                ele['status'] = false;
                ele['IS_ALLOWED'] = false;
              }
            })
            let selectedObj = {};
            let id = data.custdocument[key].DocumentMasterID;
            selectedObj[id] = environment.base_url + '/' + data.custdocument[key].PATH;
            this.selectedImagePreview = selectedObj[id];
            this.imageObject.push(selectedObj)
            this.selectedImgArrayDetails.push(selectedObj);
            let url = Object.values(selectedObj)[0];
            this.file = this.extractImageName(url);
            this.customerDoc.push({ 'name': this.file })
          }
          this.customerDoc = DocArr
          // this. viewImagePreview(id)
        })
      }
      else {
        this.isDocument = false;
        this.imageObject = []
        this.selectedImgArrayDetails = []
      }
    });
  }

  //Method for update data
  updateData() {
    let date
    let sudate
    let data = this.angForm.value;
    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    let branchCode = result.branchId
    data["id"] = this.updateID;
    data['TDS_REQUIRED'] = (data.TDS_REQUIRED == true ? '1' : '0')
    data['SMS_REQUIRED'] = (data.SMS_REQUIRED == true ? '1' : '0')
    data['IS_KYC_RECEIVED'] = (data.IS_KYC_RECEIVED == true ? '1' : '0')
    data['TDSDOCUMNET'] = (data.TDSDOCUMNET == true ? '1' : '0')
    data['Document'] = this.imageObject;
    data['F_NAME'] = this.fname?.toUpperCase()
    data['L_NAME'] = this.lname?.toUpperCase()
    data['M_NAME'] = this.mname?.toUpperCase()
    data['MF_NAME'] = this.mfname?.toUpperCase()
    data['ML_NAME'] = this.mlname?.toUpperCase()
    data['MM_NAME'] = this.mmname?.toUpperCase()
    data['BENEF_NAME'] = data.BENEF_NAME?.toUpperCase()
    data['AC_TITLE_REG'] = data.AC_TITLE_REG
    data['F_NAME_REG'] = data.F_NAME_REG?.toUpperCase()
    data['M_NAME_REG'] = data.M_NAME_REG?.toUpperCase()
    data['L_NAME_REG'] = data.L_NAME_REG?.toUpperCase()
    data['AC_NAME_REG'] = (data.L_NAME_REG + ' ' + data.F_NAME_REG + ' ' + data.M_NAME_REG)?.toUpperCase()
    data['AC_ADD_REG'] = data.AC_ADD_REG
    data['BRANCH_CODE'] = branchCode
    data['AC_PANNO'] = data.AC_PANNO
    data['COP_NO'] = data.COP_NO
    data['TAN_NO'] = data.TAN_NO
    data['GST_NO'] = data.GST_NO
    data['REG_NO'] = data.REG_NO
    data['REG_DATE'] = data.REG_DATE
    data['PROP_NAME'] = data.PROP_NAME

    if (this.updatecheckdata.AC_BIRTH_DT != data.AC_BIRTH_DT) {
      (data.AC_BIRTH_DT == 'Invalid date' || data.AC_BIRTH_DT == '' || data.AC_BIRTH_DT == null) ? (date = '', data['AC_BIRTH_DT'] = date) : (date = data.AC_BIRTH_DT, data['AC_BIRTH_DT'] = moment(date).format('DD/MM/YYYY'));
    }
    if (this.updatecheckdata.tdsForm?.SUBMIT_DATE != data.SUBMIT_DATE) {
      (data.SUBMIT_DATE == 'Invalid date' || data.SUBMIT_DATE == '' || data.SUBMIT_DATE == null) ? (sudate = '', data['SUBMIT_DATE'] = sudate) : (sudate = data.SUBMIT_DATE, data['SUBMIT_DATE'] = moment(sudate).format('DD/MM/YYYY'));
    }
    this.customerIdService.getData().subscribe(data => {
      if (data?.length != 0) {
        if (this.angForm.controls['AC_ADHARNO'].value != '' && this.angForm.controls['AC_ADHARNO'].value != null) {

          if (data.find(data => data['AC_ADHARNO'] != (this.angForm.controls['AC_ADHARNO'].value == ''))) {

            if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
              let id = data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)
              if (id.id != this.updateID) {
                Swal.fire({
                  icon: 'info',
                  title: 'This Aadhar Number is Already Extists Having Customer ID ' + id.AC_NO,
                })
                // this.angForm.controls['AC_ADHARNO'].reset();
              }
            }
          }
        }
        else {
          // if (data.find(data => data['L_NAME'] == this.angForm.controls['L_NAME'].value?.toUpperCase())) {
          //   if (data.find(data => data['F_NAME'] == this.angForm.controls['F_NAME'].value?.toUpperCase())) {
          if (data.find(data => data['AC_NAME'] == this.angForm.controls['AC_NAME'].value?.toUpperCase())) {
            if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
              let id = data.find(data => data['AC_NAME'] == this.angForm.controls['AC_NAME'].value?.toUpperCase())
              if (id.AC_NO != this.angForm.controls['AC_NO'].value) {
                Swal.fire({
                  icon: 'info',
                  title: 'This Customer is Already Exists Having Customer ID ' + id.AC_NO
                })
                this.resetForm();
              }
            }
            // }
            // }
          }
        }
      }
    })


    data['FIN_YEAR'] = this.ngfinyear
    this.customerIdService.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.customerDoc = []
      this.imageObject = []
      this.selectedImgArrayDetails = []
      this.selectedImagePreview = null
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    });
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete Authority master data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerIdService.deleteData(id).subscribe((data1) => {
          this.customerMaster = data1;
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          (error) => {
            console.log(error);
          };
        // to reload after delete of data
        this.rerender();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }

  // ngAfterViewChecked() {
  //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.ajax.reload()
  //   });
  // }

  ngAfterViewInit(): void {
    //  this.ngSelect.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('#customermastertable tfoot tr').appendTo('#customermastertable thead');
        $("input", this.footer()).on("keyup change", function () {
          if (this["value"] != "") {
            that.search(this["value"]).draw();
          } else {
            that.search(this["value"]).draw();
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

  ngfocus() {
    this.ngSelect.focus();
  }
  documentUpload() {
    let obj = {
      SCHEME_CODE: 'KYC'
    }
    this.imageObject = []
    this.selectedImgArrayDetails = []
    this.selectedImagePreview = null
    this.http.post(this.url + '/scheme-linking-with-d/fetchLinkedDoc', obj).subscribe(resp => {
      let DocArr: any = resp
      DocArr.forEach(ele => {
        ele['status'] = false;
        ele['IS_ALLOWED'] = false;
      })
      this.customerDoc = DocArr
    })
  }

  isKYC($event) {
    if ($event.target.checked) {
      this.isDocument = true;
      this.imageObject = []
      this.selectedImgArrayDetails = []
      this.selectedImagePreview = null
      this.documentUpload()
    } else {
      this.isDocument = false;
      this.imageObject = []
      this.selectedImgArrayDetails = []
      this.selectedImagePreview = null
    }
  }

  isChecked($event) {
    if ($event.target.checked) {
      document.getElementById("{{data.value}}").removeAttribute("disabled");
    } else {
      document
        .getElementById("{{data.value}}")
        .setAttribute("disabled", "true");
    }
  }

  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;
      this.isTdsFormA = false;
      this.SUBMIT_DATE = true;
    } else {
      this.isTdsForm = false;
      this.isTdsFormA = false;
      this.SUBMIT_DATE = false;
      this.angForm.controls['FIN_YEAR'].reset()
      this.angForm.controls['SUBMIT_DATE'].reset()
      this.angForm.controls['FORM_TYPE'].reset()
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
  }

  isForm15A(value) {
    if (value == 1) {
      this.isTdsFormA = true;
    }
    if (value == 2) {
      this.isTdsFormA = false;
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
    if (value == 3) {
      this.isTdsFormA = false;
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
    if (value == 4) {
      this.isTdsFormA = false;
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
  }

  fileChangeEvent(event, id, valueid) {
    let selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileSize = selectedFile.size; // in bytes
      const maxSize = 2 * 1024 * 1024; // 2MB (adjust as needed)
      if (fileSize > maxSize) {
        Swal.fire('Info', 'File size exceeds the maximum allowed size(2 MB).', 'info');
        // Clear the file input to prevent submission
        event.target.value = null;
      }
      else {
        if (this.customerDoc[id]['status'] == true) {
          Swal.fire({
            // title: 'Do You Want To Replace previous document?',
            html: '<span style="text-justify: inter-word; font-weight:600; font-size:20px;">Do You Want To Replace previous document?</span>',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              let result
              let obj = {};
              let selectedObj = {};
              let file = (event.target as HTMLInputElement).files[0];
              this.customerDoc[id]['status'] = true
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = async function (ele: any) {
                result = await reader.result;
                let selecetedImg = ele.target.result;
                selectedObj[valueid] = selecetedImg
                obj[valueid] = result;
              };
              reader.onerror = function (error) {
                console.log('Error: ', error);
              };
              let isExist: boolean = false
              for (let element of this.imageObject) {
                if (Number(Object.keys(element)[0]) == valueid) {
                  isExist = true
                  reader.onload = async function (ele: any) {
                    result = await reader.result;
                    let selecetedImg = ele.target.result;
                    selectedObj[valueid] = selecetedImg
                    obj[valueid] = result;
                    element[valueid] = selecetedImg
                  };
                  this.customerDoc[id]['status'] = true
                  break
                }
              }
              if (!isExist) {
                reader.onload = async function (ele: any) {
                  result = await reader.result;
                  let selecetedImg = ele.target.result;
                  selectedObj[valueid] = selecetedImg
                  obj[valueid] = result;
                };
                this.imageObject.push(obj);
                this.selectedImgArrayDetails.push(selectedObj);
                this.customerDoc[id]['status'] = true
              }
              else {
                for (let element of this.selectedImgArrayDetails) {
                  if (Number(Object.keys(element)) == valueid) {
                    reader.onload = async function (ele: any) {
                      result = await reader.result;
                      let selecetedImg = ele.target.result;
                      selectedObj[valueid] = selecetedImg
                      element[valueid] = selecetedImg
                      obj[valueid] = result;
                    };
                  }
                }
                this.customerDoc[id]['status'] = true
              }
            } else {
              event.target.value = null
            }
          })
        }
        else {
          let result
          let arr = [];
          let me = this;
          let obj = {};
          let selectedObj = {};

          let file = (event.target as HTMLInputElement).files[0];
          this.customerDoc[id]['status'] = true

          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = async function (ele: any) {
            result = await reader.result;
            let selecetedImg = ele.target.result;
            selectedObj[valueid] = selecetedImg
            obj[valueid] = result;
          };
          reader.onerror = function (error) {
            console.log('Error: ', error);
          };

          let isExist: boolean = false
          for (let element of this.imageObject) {
            if (Number(Object.keys(element)[0]) == valueid) {
              isExist = true
              reader.onload = async function (ele: any) {
                result = await reader.result;
                let selecetedImg = ele.target.result;
                selectedObj[valueid] = selecetedImg
                obj[valueid] = result;
                element[valueid] = result
              };
              this.customerDoc[id]['status'] = true
              break
            }
          }

          if (!isExist) {
            reader.onload = async function (ele: any) {
              result = await reader.result;
              let selecetedImg = ele.target.result;
              selectedObj[valueid] = selecetedImg
              obj[valueid] = result;
            };
            this.imageObject.push(obj);
            this.selectedImgArrayDetails.push(selectedObj);
            this.customerDoc[id]['status'] = true
          }
          else {
            for (let element of this.selectedImgArrayDetails) {
              if (Number(Object.keys(element)) == valueid) {
                reader.onload = async function (ele: any) {
                  result = await reader.result;
                  let selecetedImg = ele.target.result;
                  selectedObj[valueid] = selecetedImg
                  element[valueid] = selecetedImg
                  obj[valueid] = result;
                };
              }
            }
            this.customerDoc[id]['status'] = true
          }
        }
      }
    }
  }

  onCloseModal() {
    var closemodal = document.getElementById('triggerhide')
    closemodal.click();

  }
  // viewImagePreview(ele, id) {
  //   if (this.selectedImgArrayDetails.length != 0) {
  //     for (const [key, value] of Object.entries(this.selectedImgArrayDetails)) {
  //       let jsonObj = value;
  //       Object.keys(jsonObj).forEach(key => {
  //         if (id == key) {
  //           this.isImgPreview = true
  //           this.selectedImagePreview = jsonObj[key];
  //           this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedImagePreview);
  //           throw 'Break';
  //         }
  //         else {
  //           this.isImgPreview = false
  //           this.selectedImagePreview = ''
  //         }
  //       });
  //     }
  //   }
  //   else {
  //     this.isImgPreview = false
  //     this.selectedImagePreview = ''
  //   }

  // }


  //new CODE
  isPdf: boolean = false
  viewImagePreview(ele, id) {
    if (this.selectedImgArrayDetails.length !== 0) {
      for (const [key, value] of Object.entries(this.selectedImgArrayDetails)) {
        let jsonObj = value;
        Object.keys(jsonObj).forEach(key => {
          if (id == key) {
            let selectedImage = jsonObj[key];
            if (selectedImage.startsWith('data:image')) {
              this.isImgPreview = true;
              this.isPdf = false;
              this.selectedImagePreview = selectedImage;
              this.urlMap = '';
            } else if (selectedImage.startsWith('data:application/pdf')) {
              this.isImgPreview = false;
              this.isPdf = true;
              this.selectedImagePreview = '';
              this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(selectedImage);
            } else if (selectedImage.toLowerCase().endsWith('.jpg') || selectedImage.toLowerCase().endsWith('.png') || selectedImage.toLowerCase().endsWith('.jpeg')) {
              this.isImgPreview = true;
              this.isPdf = false;
              this.selectedImagePreview = selectedImage;
              this.urlMap = '';
            } else if (selectedImage.toLowerCase().endsWith('.pdf')) {
              this.isImgPreview = false;
              this.isPdf = true;
              this.selectedImagePreview = '';
              this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(selectedImage);
            } else {
              this.isImgPreview = false;
              this.isPdf = false;
              this.selectedImagePreview = '';
              this.urlMap = '';
            }
            throw 'Break';
          } else {
            this.isImgPreview = false;
            this.isPdf = false;
            this.selectedImagePreview = '';
            this.urlMap = '';
          }
        });
      }
    } else {
      this.isImgPreview = false;
      this.isPdf = false;
      this.selectedImagePreview = '';
      this.urlMap = '';
    }
  }

  checkCustomer() {
    this.customerIdService.getData().subscribe(data => {
      if (data?.length != 0) {
        let ac_name = this.lname + ' ' + this.fname + ' ' + this.mname
        // if (data.find(data => data['L_NAME'] == this.angForm.controls['L_NAME'].value?.toUpperCase())) {
        //   if (data.find(data => data['F_NAME'] == this.angForm.controls['F_NAME'].value?.toUpperCase())) {
        if (data.find(data => data['AC_NAME'] == ac_name?.toUpperCase())) {
          let id = data.find(data => data['AC_NAME'] == ac_name?.toUpperCase())
          Swal.fire({
            title: "Are you sure?",
            text: "This Customer is Already Exists Having Customer ID " + id.AC_NO,
            //   html:
            // '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
            // '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>',

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#229954",
            cancelButtonColor: "#d33",
            confirmButtonText: "Continue",
          }).then((result) => {
            if (result.isConfirmed) {
              // Swal.fire("Your data is safe.");
              // to reload after delete of data
              // this.rerender();
              this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.ajax.reload()
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              this.angForm.controls['F_NAME'].reset()
              this.angForm.controls['M_NAME'].reset()
              this.angForm.controls['L_NAME'].reset()
              this.angForm.controls['AC_NAME'].reset()
              this.angForm.controls['MF_NAME'].reset()
              this.angForm.controls['MM_NAME'].reset()
              this.angForm.controls['ML_NAME'].reset()
              this.angForm.controls['AC_NAME'].reset()
              this.angForm.controls['MAC_NAME'].reset()
              this.angForm.patchValue({
                L_NAME: '',
                F_NAME: '',
                M_NAME: '',
                ML_NAME: '',
                MF_NAME: '',
                MM_NAME: '',
              })

            }
          });
        }
        //   }
        // }
      }
    })
  }

  checkAdhar() {
    let adhar: any[];
    if (this.showButton) {
      this.customerIdService.getData().subscribe(data => {
        if (data?.length != 0) {
          if (this.angForm.controls['AC_ADHARNO'].value != '' && this.angForm.controls['AC_ADHARNO'].value != null) {

            if (data.find(data => data['AC_ADHARNO'] != (this.angForm.controls['AC_ADHARNO'].value == ''))) {

              if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
                let id = data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)
                Swal.fire({
                  icon: 'info',
                  title: 'This Aadhar Number is Already Extists Having Customer ID ' + id.AC_NO,
                })
                this.angForm.controls['AC_ADHARNO'].reset();
              }
            }
          }
          else {
            // if (data.find(data => data['L_NAME'] == this.angForm.controls['L_NAME'].value?.toUpperCase())) {
            //   if (data.find(data => data['F_NAME'] == this.angForm.controls['F_NAME'].value?.toUpperCase())) {
            if (data.find(data => data['AC_NAME'] == this.angForm.controls['AC_NAME'].value?.toUpperCase())) {
              if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
                let id = data.find(data => data['AC_NAME'] == this.angForm.controls['AC_NAME'].value?.toUpperCase())
                if (id.AC_NO != this.angForm.controls['AC_NO'].value) {
                  Swal.fire({
                    icon: 'info',
                    title: 'This Customer is Already Exists Having Customer ID ' + id.AC_NO
                  })
                  this.resetForm();
                }
              }
            }
            //   }
            // }
          }
        }
      })
    }
  }

  checkPancard() {
    this.customerIdService.getData().subscribe(data => {
      if (data?.length != 0) {
        if ((this.angForm.controls['AC_PANNO'].value != '')) {
          if (data.find(data => data['AC_PANNO'] == this.angForm.controls['AC_PANNO'].value)) {
            let id = data.find(data => data['AC_PANNO'] == this.angForm.controls['AC_PANNO'].value)
            Swal.fire({
              title: "Are you sure?",
              text: "This Pan Number is Already Exists Having Customer ID " + id.AC_NO,
              //   html:
              // '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
              // '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>',

              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#229954",
              cancelButtonColor: "#d33",
              confirmButtonText: "Continue",
            }).then((result) => {
              if (result.isConfirmed) {
                // Swal.fire("Your data is safe.");
                // to reload after delete of data
                // this.rerender();
                this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.ajax.reload()
                });
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                this.angForm.controls['AC_PANNO'].reset()
                this.angForm.patchValue({
                  AC_PANNO: ''
                })
              }
            });
          }
        }
      }
    })
  }

  validation(event) {
    if (event != (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)) {
      Swal.fire("Warning!", "Please Insert Alphabets Only", "warning");
    }
  }
  numvalidation(event) {
    if (event == (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)) {
      Swal.fire("Warning!", "Please Insert Numbers Only", "warning");
    }
  }
  panvalidation(event) {
    if (event == (event.charCode >= 97 && event.charCode <= 122)) {
      Swal.fire("Warning!", "Please Insert Numbers and Captital Alphabets Only", "warning");
    }
  }

  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  selectAllContent($event) {
    $event.target.select();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()

  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  isapplicable: boolean = false
  isable: boolean = true

  // notApplicable(event) {
  //   if (event.value == 'PROF.' || event.value == 'ADV.' || event.value == 'DR.' || event.value == 'MANDAL' || event.value == 'M/S' || event.value == 'SANSTHA') {
  //     this.isapplicable = true
  //     this.isable = false
  //   }
  //   else {
  //     this.isapplicable = false
  //     this.isable = true
  //     this.angForm.controls['AC_NAME'].reset()
  //   }
  // }
  showBeneficiaryName = false;


  // isTitleHidden(): boolean {
  //   let hiddenTitles = ['PROF.', 'ADV.', 'DR.', 'MANDAL', 'M/S', 'SAN.'];
  //   return hiddenTitles.includes(this.ngTitle);
  // }

  // notApplicable(event) {
  //   let titlesToShowBeneficiary = ['PROF.', 'ADV.', 'DR.', 'MANDAL', 'M/S', 'SANSTHA'];
  //   this.showBeneficiaryName = titlesToShowBeneficiary.includes(event.value);
  //   this.updateFullName();
  // }
  // beneficiaryName = '';
  // onBeneficiaryNameChange(event) {
  //   this.beneficiaryName = event?.toUpperCase();
  //   this.updateFullName();
  // }

  // updateFullName() {
  //   if (this.showBeneficiaryName && this.beneficiaryName) {
  //     this.fullname = this.beneficiaryName;
  //   } else {
  //     this.fullname = `${this.lname} ${this.fname} ${this.mname}`.trim().toUpperCase();
  //   }
  // }



  // isapplicable: boolean = false
  // isable: boolean = true
  // showBeneficiaryName:boolean=false
  firmname
  notApplicable(event) {
    if (event.value == 'PROF.' || event.value == 'ADV.' || event.value == 'DR.' || event.value == 'MANDAL' || event.value == 'M/S' || event.value == 'SANSTHA') {
      this.isapplicable = true
      this.isable = false
      this.showBeneficiaryName = true
      let formVal = this.angForm.value;
      this.firmname = formVal.BENEF_NAME;
    }
    else {
      this.isapplicable = false
      this.isable = true
      this.showBeneficiaryName = false
      this.angForm.controls['AC_NAME'].reset()
    }
  }
  motherData = [
    { label: 'Shrimati', value: 'Shrimati' },
    { label: 'Sou', value: 'Sou' },
    { label: 'Kai', value: 'Kai' }
  ];
}
