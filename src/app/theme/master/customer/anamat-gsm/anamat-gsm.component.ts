import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
//animation
import { animate, style, transition, trigger } from "@angular/animations";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Angular Datatable Directive 
import { DataTableDirective } from "angular-datatables";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { first } from "rxjs/operators";
import { environment } from "../../../../../environments/environment";
// Service File For Handling CRUD Operation
import { anamatGSMService } from "./anamat-gsm.service";
//service file for fetching records from customer ID
import { CustomerIdService } from "../customer-id/customer-id.service";
//Service file of dropdown
import { CustomerIDMasterDropdownService } from "../../../../shared/dropdownService/customer-id-master-dropdown.service";
import { cityMasterService } from "../../../../shared/dropdownService/city-master-dropdown.service";
import { SchemeCodeDropdownService } from "../../../../shared/dropdownService/scheme-code-dropdown.service";
import { PrefixMasterDropdownService } from "src/app/shared/dropdownService/prefix-master-dropdown.service";
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service"
import * as moment from 'moment';
import { NgSelectComponent } from "@ng-select/ng-select";
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface anamatinf {
  //id:number
  AC_ACNOTYPE: number;
  AC_TYPE: string;
  AC_NO: String;
  AC_CUSTID: string;
  AC_TITLE: string;
  AC_NAME: string;
  AC_MEMBTYPE: string;
  AC_MEMBNO: string;
  AC_HONO: string;
  AC_WARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_AREA: string;
  AC_CTCODE: string;
  AC_PIN: string;
  AC_OPDATE: Date;
  AC_IS_RECOVERY: boolean;
  DEBIT: string;
  AC_PARTICULAR: string;
  BANKACNO: number
}

@Component({
  selector: "app-anamat-gsm",
  templateUrl: "./anamat-gsm.component.html",
  styleUrls: ["./anamat-gsm.component.scss"],
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

export class AnamatGSMComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() reloadTablePassing = new EventEmitter<string>();
  @Input() childMessage: string;
  @Output() public getUserData = new EventEmitter<string>();
  formSubmitted = false;
  //api
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Store data from backend
  anamat: anamatinf[];
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
  unapproveShow: boolean = false;
  public visible = false;
  public visibleAnimate = false;
  //for search functionality
  filterData = {};

  // Dropdown Options
  scheme: any[];//scheme code from schemast(S_ACNOTYPE)
  Cust_ID: any[]; //customer id from idmaster
  city: any[];//city from customer id from idmaster

  prifix: any;
  AC_CUSTID: any;
  // for new customer
  newCustomerID;
  updateID: number = 0;
  //Scheme type variable
  schemeType: string = 'GS'
  schemeCode
  timeLeft = 5;

  // id: any = '';
  datemax: any;

  code: any = null
  id: any = null
  bsValue
  AC_TYPE: boolean = false
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  logDate
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private anamatGSMService: anamatGSMService,
    public customerIdService: CustomerIdService,
    private prefixMaster: PrefixMasterDropdownService,
    private cityMasterService: cityMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private customerID: CustomerIDMasterDropdownService,
    private systemParameter: SystemMasterParametersService
  ) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage, 1);
    }
    this.datemax = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
  }

  ngOnInit(): void {

    this.createForm();
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters["filterData"] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + "/anamat-gsm",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.anamat = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columnDefs: [
        {
          targets: "_all",
          defaultContent: '',
        },
      ],
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          data: "AC_TYPE",
          title: "Scheme",
        },
        {
          data: 'BANKACNO',
          title: "Account Number",
        },
        {
          data: "AC_CUSTID",
          title: "Customer ID",
        },
        {
          data: "AC_NAME",
          title: "Member Name",
        },
        // {
        //   data: "AC_MEMBTYPE",
        //   title: "Member Scheme",
        // },
        // {
        //   data: "AC_MEMBNO",
        //   title: "Member No",
        // },
        {
          data: "AC_AREA",
          title: "Detail Address",
        },
        {
          data: "AC_CTCODE",
          title: "City",
        },
        {
          data: "AC_OPDATE",
          title: "Opening date",
        },
        {
          data: "AC_PARTICULAR",
          title: "Reason",
        },
      ],
      dom: "Blrtip",
    };

    this.prefixMaster.getPrefixMasterList().pipe(first()).subscribe(data => {
      this.prifix = data;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.code = this.scheme[0].value
      this.schemeCode = this.scheme[0].name
    })

    this.cityMasterService
      .getcityList()
      .pipe(first())
      .subscribe((data) => {
        this.city = data;
      });

    this.customerID
      .getCustomerIDMasterList()
      .pipe(first())
      .subscribe((data1) => {
        debugger
        this.Cust_ID = data1;
      });
    this.getSystemParaDate()
  }


  //check  if require values
  checkRequire(ele: any) {
    if (ele <= 100) {
    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }


  checkCUST_No() {
    if (this.AC_CUSTID = '') {
    }
    else {
      Swal.fire("Invalid Input", "Please insert Customer ID", "error");
    }
  }

  addNewCustomer(newCustomer) {
    this.customerID
      .getCustomerIDMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.Cust_ID = data;
        this.id = newCustomer;
        this.getCustomer(newCustomer);
      });
  }

  getCustomer(id) {
    this.customerIdService.getFormData(id).subscribe(data => {
      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }
      this.id = data.id

      this.angForm.patchValue({
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        // AC_MEM_BIRTH_DT: moment(data.AC_BIRTH_DT).format('DD/MM/YYYY'),
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
      })
      let permadd
      let temp
      data.custAddress.forEach(async (element) => {
        if (element.AC_ADDTYPE == 'P') {
          permadd = element
        }
      })
      this.angForm.patchValue({
        AC_ADDFLAG: permadd?.AC_ADDFLAG,
        AC_HONO: permadd?.AC_HONO,
        AC_WARD: permadd?.AC_WARD,
        AC_ADDR: permadd?.AC_ADDR,
        AC_GALLI: permadd?.AC_GALLI,
        AC_AREA: permadd?.AC_AREA,
        AC_CTCODE: permadd?.city?.CITY_NAME,
        AC_PIN: permadd?.AC_PIN,
      })

    })
  }
  openingDate: any
  //set open date, appointed date and expiry date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.openingDate = data.CURRENT_DATE
      this.logDate = data.CURRENT_DATE
      this.angForm.patchValue({
        AC_OPDATE: data.CURRENT_DATE
      })

      if (data.ON_LINE === '1') {
        this.angForm.controls['AC_OPDATE'].disable()
      } else {
        this.angForm.controls['AC_OPDATE'].enable()
      }
    })
  }

  //disabledate on keyup
  disabledate(data: any) {
    if (data != "") { 
      if (data > this.datemax) {
        Swal.fire("Invalid Input", "Please insert valid date ", "warning");
        (document.getElementById("AC_CTCODE") as HTMLInputElement).value = ""
      }
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_ACNOTYPE: ['GS'],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: [''],
      AC_CUSTID: ['', [Validators.required]],
      AC_TITLE: [''],
      AC_NAME: ['',],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      AC_HONO: [''],
      AC_WARD: [''],
      AC_ADDR: [''],
      AC_GALLI: [''],
      AC_AREA: [''],
      AC_CTCODE: [''],
      AC_PIN: [''],
      BANKACNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      AC_IS_RECOVERY: [],
      DEBIT: new FormControl('DEBIT'),
      AC_PARTICULAR: ['', [Validators.required, Validators.pattern]],
    });
  }

  // getScheme(value) {
  //   debugger
  //   this.code = value.value
  //   // this.schemeCode = value.name
  // }
  getSchemeCode(value) {
    this.schemeCode = value.name
  }
  // Method to insert data into database through NestJS
  submit(event) {
    event.preventDefault();
    this.formSubmitted = true;
    if (this.angForm.valid) {
      //get bank code and branch code from session
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      let bankCode = Number(result.branch.syspara.BANK_CODE)
      let opdate = (document.getElementById("AC_OPDATE") as HTMLInputElement).value;
      const formVal = this.angForm.value;
      const dataToSend = {
        'branchCode': branchCode,
        'bankCode': bankCode,
        'schemeCode': this.schemeCode,
        AC_ACNOTYPE: formVal.AC_ACNOTYPE,
        AC_TYPE: formVal.AC_TYPE,
        AC_NO: formVal.AC_NO,
        AC_NAME: formVal.AC_NAME,
        AC_CUSTID: formVal.AC_CUSTID,
        // AC_OPDATE: formVal.AC_OPDATE,
        AC_OPDATE: opdate,
        // 'AC_OPDATE': (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment(formVal.AC_OPDATE).format('DD/MM/YYYY'),
        AC_IS_RECOVERY: (formVal.AC_IS_RECOVERY == true ? '1' : '0'),
        DEBIT: formVal.DEBIT,
        AC_PARTICULAR: formVal.AC_PARTICULAR,
      };
      this.anamatGSMService.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Account Created successfully!',
            html:
              '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
              '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
          })
          this.formSubmitted = false;
          // to reload after insertion of data
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload();
          });
        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }

  //Method for append data into fields
  editClickHandler(id, status) {
    this.angForm.controls['AC_TYPE'].disable()
    this.anamatGSMService.getFormData(id).subscribe((data) => {
      if (data.SYSCHNG_LOGIN != null && data.status == 0) {
        this.unapproveShow = true
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && status == 0) {
        this.unapproveShow = true
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && data.status == 1) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true;
      }
      else {
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.angForm.patchValue({
        AC_ACNOTYPE: data.AC_ACNOTYPE,
        AC_TYPE: data.AC_TYPE,
        AC_NO: data.AC_NO,
        BANKACNO: data.BANKACNO,
        // AC_CUSTID: data.AC_CUSTID.toString(),
        // AC_TITLE: data.AC_TITLE,
        // AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_OPDATE: data.AC_OPDATE,
        AC_IS_RECOVERY: (data.AC_IS_RECOVERY == '1' ? true : false),
        DEBIT: data.DEBIT,
        AC_PARTICULAR: data.AC_PARTICULAR,
      });
    });
  }

  //Method for update data
  updateData() {
    this.angForm.controls['AC_TYPE'].enable()
    let data = this.angForm.value;
    data["id"] = this.updateID;
    let opdate = (document.getElementById("AC_OPDATE") as HTMLInputElement).value;
    data["AC_OPDATE"] = opdate;
    data['AC_IS_RECOVERY'] = (data.AC_IS_RECOVERY == true ? '1' : '0'),
      this.anamatGSMService.updateData(data).subscribe(() => {
        Swal.fire("Success!", "Record Updated Successfully !", "success");
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload();
        });
        this.resetForm();
      });
  }

  addNewData() {
    this.angForm.controls['AC_TYPE'].enable()
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.getSystemParaDate()
    this.resetForm();

  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.code = null
    this.id = null
    this.getSystemParaDate()
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete narration data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.anamatGSMService.deleteData(id).subscribe((data1) => {
          this.anamat = data1;
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

  ngAfterViewInit(): void {
    this.angForm.controls['AC_TYPE'].enable()
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#mastertable tfoot tr').appendTo('#mastertable thead');
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

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  disableForm(id) {
    this.editClickHandler(id, 0)
  }


  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.anamatGSMService.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Anamat Account approved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
      this.getUserData.emit('welcome to stackoverflow!');
    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.anamatGSMService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Anamat Account rejected successfully',
        'success'
      );

      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
  closeModal() {
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
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

  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this.anamatGSMService.unapporve(obj).subscribe(data => {
      Swal.fire(
        'Unapproved',
        'Account unapproved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
}
