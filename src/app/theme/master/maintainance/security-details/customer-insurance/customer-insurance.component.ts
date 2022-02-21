import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild, Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { customerinsuranceService } from "./customer-insurance.service";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { InsuranceMasterDropdownService } from '../../../../../shared/dropdownService/insurance-master-dropdown.service'
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { environment } from "src/environments/environment";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface CustomerMaster {
  id: number;
  AC_ACNOTYPE: string;
  AC_TYPE: number;
  INSURANCE_DATE: Date;
  POLICY_NO: number;
  INSU_COMPANY_CODE: number;
  INSU_EXP_DATE: Date;
  INSU_AMOUNT: number;
}

@Component({
  selector: "app-customer-insurance",
  templateUrl: "./customer-insurance.component.html",
  styleUrls: ["./customer-insurance.component.scss"],
})
export class CustomerInsuranceComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //passing data form child to parent
  @Output() newcustomerInsuranceEvent = new EventEmitter<any>();
  datemax: string;
  newbtnShow: boolean;
  newItemEvent(value) {
    this.newcustomerInsuranceEvent.emit(value);
  }
  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
  @Input() AC_ACNOTYPE: any;
  //api
  url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  // simpleOption: Array<IOption> = this.InsuranceService.getCharacters();
  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number; //variable for updating
  // Store data from backend
  nginsurancecom: any = null

  // for date 
  insurancedate: any = null
  insuranceexpirydate: any = null
  maxDate: Date;
  minDate: Date;

  customerMaster: CustomerMaster[];
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData = {};
  insuranceoption

  constructor(
    private fb: FormBuilder,
    private _customerservice: customerinsuranceService,
    private http: HttpClient,
    private _insurancedropdown: InsuranceMasterDropdownService,
    public router: Router,
    private config: NgSelectConfig,) {


    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

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
            this.url + "/customer-insurance",
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
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          title: "Insurance Date",
          data: "INSURANCE_DATE",
        },
        {
          title: "Policy No.",
          data: "POLICY_NO",
        },
        {
          title: "Insurance Company",
          data: "INSU_COMPANY_CODE",
        },
        {
          title: "Insurance Expiry Date",
          data: "INSU_EXP_DATE",
        },
        {
          title: "Insurance Amount",
          data: "INSU_AMOUNT",
        },
      ],
      dom: "Blrtip",
    };
    this.runTimer();
    this._insurancedropdown.getInsuranceMasterList().pipe(first()).subscribe(data => {
      this.insuranceoption = data;
    })

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
      INSURANCE_DATE: ["", [Validators.required]],
      POLICY_NO: ["", [Validators.pattern, Validators.required]],
      INSU_COMPANY_CODE: ["", [Validators.required]],
      INSU_EXP_DATE: ["", [Validators.required]],
      INSU_AMOUNT: ["", [Validators.pattern, Validators.required]],
    });
  }

  submit(event) {
    let insurancedate
    let insuranceexpirydate
    event.preventDefault();
    this.formSubmitted = true;




    if (this.angForm.valid) {

      const formVal = this.angForm.value;
      const dataToSend = {
        AC_TYPE: this.scheme,
        AC_NO: this.Accountno,
        AC_ACNOTYPE: this.AC_ACNOTYPE,
        'INSURANCE_DATE': (formVal.INSURANCE_DATE == '' || formVal.INSURANCE_DATE == 'Invalid date') ? insurancedate = '' : insurancedate = moment(formVal.INSURANCE_DATE).format('DD/MM/YYYY'),

        POLICY_NO: formVal.POLICY_NO,
        INSU_COMPANY_CODE: formVal.INSU_COMPANY_CODE,
        'INSU_EXP_DATE': (formVal.INSU_EXP_DATE == '' || formVal.INSU_EXP_DATE == 'Invalid date') ? insuranceexpirydate = '' : insuranceexpirydate = moment(formVal.INSU_EXP_DATE).format('DD/MM/YYYY'),

        INSU_AMOUNT: formVal.INSU_AMOUNT,
      };

      this._customerservice.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });

        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
    }


  }

  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let insurancedate
    let insuranceexpirydate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._customerservice.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data

      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;



      dropdown.account = data.AC_NO;


      let obj1 = {
        'AccountType': data.AC_TYPE,
        'AccountNo': data.AC_NO,
        'SchemeType': data.AC_ACNOTYPE
      }
      this.newcustomerInsuranceEvent.emit(obj1);

      this.scheme = data.AC_TYPE
      this.Accountno = data.AC_NO
      this.nginsurancecom = Number(data.INSU_COMPANY_CODE)
      this.updateID = data.id;
      this.angForm.patchValue({
        AC_ACNOTYPE: data.AC_ACNOTYPE,
        'INSURANCE_DATE': (data.INSURANCE_DATE == 'Invalid date' || data.INSURANCE_DATE == '' || data.INSURANCE_DATE == null) ? insurancedate = '' : insurancedate = data.INSURANCE_DATE,
        POLICY_NO: data.POLICY_NO,
        'INSU_EXP_DATE': (data.INSU_EXP_DATE == 'Invalid date' || data.INSU_EXP_DATE == '' || data.INSU_EXP_DATE == null) ? insuranceexpirydate = '' : insuranceexpirydate = data.INSU_EXP_DATE,
        INSU_AMOUNT: data.INSU_AMOUNT,
      });
    });
  }

  updateData() {
    let insurancedate
    let insuranceexpirydate
    this.showButton = true;
    this.updateShow = false;

    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data["AC_TYPE"] = this.scheme
    data["AC_NO"] = this.Accountno
    if (this.updatecheckdata.INSURANCE_DATE != data.INSURANCE_DATE) {
      (data.INSURANCE_DATE == 'Invalid date' || data.INSURANCE_DATE == '' || data.INSURANCE_DATE == null) ? (insurancedate = '', data['INSURANCE_DATE'] = insurancedate) : (insurancedate = data.INSURANCE_DATE, data['INSURANCE_DATE'] = moment(insurancedate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.INSU_EXP_DATE != data.INSU_EXP_DATE) {
      (data.INSU_EXP_DATE == 'Invalid date' || data.INSU_EXP_DATE == '' || data.INSU_EXP_DATE == null) ? (insuranceexpirydate = '', data['INSU_EXP_DATE'] = insuranceexpirydate) : (insuranceexpirydate = data.INSU_EXP_DATE, data['INSU_EXP_DATE'] = moment(insuranceexpirydate).format('DD/MM/YYYY'))
    }
    this._customerservice.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });

      this.resetForm();
    });
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //function for delete button clicked
  delClickHandler(id: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete Insurance Date  data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._customerservice.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }
  ngAfterViewInit(): void {

    // this.myInputField.nativeElement.focus();//for autofocus
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
  // Reset Function
  resetForm() {
    this.createForm();
    this.nginsurancecom = null
    let obj1 = {
      'AccountType': null,
      'AccountNo': null,
    }
    this.newcustomerInsuranceEvent.emit(obj1);
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
}
