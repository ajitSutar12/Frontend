import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';

// Service File For Handling CRUD Operation
import { BankDetails } from './bank-other-details.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment'
import { cityMasterService } from "../../../../../shared/dropdownService/city-master-dropdown.service";

import { first } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { NgSelectComponent } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { TranslateService } from '@ngx-translate/core';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}



// For fetching values from backend
interface BankOtherDetails {
  BANK_CODE: number;
  BRANCH_CODE
  NAME: string;
  SHORT_NAME: string;
  TAN_NO: string
  PAN_NO: string;
  FLAT_PRM_NO: string;
  FLAT_PRM_NAME: string;
  RD_LANE_NAME: string;
  AREA_LOCATION: string;
  CITY_CODE: number;
  STATE: string;
  PIN_CODE: number;
  PHONE_OFFICE: string;
  MOB_NUM: string;
  EMAIL: string;
  SBI_BANKCODE: string;
  GST_NO: string;
  IFSC_CODE: string;
  IBT_TRAN: boolean;
  GMAIL_PASSWORD:any;
  GMAIL_USER:string;

}

@Component({
  selector: 'app-bank-other-details',
  templateUrl: './bank-other-details.component.html',
  styleUrls: ['./bank-other-details.component.scss']
})
export class BankOtherDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  //api 
  url = environment.base_url;
  // Created Form Group
  angForm: FormGroup;

  // dropdown variables
  ngCity: any = null
  city: any[];
  ngbranch
  branchOption: any;


  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  bankotherdetails: BankOtherDetails[];

  //Datatable variable
  dtExportButtonOptions: any = {};
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable to get Id to update
  updateID: number = 0;
  ATMGLACNO
  // Filter Variable
  filterData = {};
  GlACNo: any;
  headGl
  ngATM
  constructor(
    private http: HttpClient,
    private bankDetails: BankDetails,
    private cityMaster: cityMasterService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private fb: FormBuilder, private translate:TranslateService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.cityMaster.getcityList().pipe(first()).subscribe((data) => {
      this.city = data;
    });

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

    //HO GL
    this.schemeAccountNoService.getGeneralLedgerListForClosing().pipe(first()).subscribe(data => {
      this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data1 => {
        this.GlACNo = data.filter(ele => ele.label !== Number(data1['CASH_IN_HAND_ACNO']))
        this.ATMGLACNO = this.GlACNo
      })
    })

    // Fetching Server side data
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
            this.url + '/bank-other-details',
            dataTableParameters
          ).subscribe(resp => {
            this.bankotherdetails = resp.data;
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
          title: this.translate.instant('master.Action.Action'),
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.Name'),
          data: 'NAME'
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.Account_Number'),
          data: 'SBI_BANKCODE'
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.Pan_Number'),
          data: 'PAN_NO'
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.GST_Number'),
          data: 'GST_NO'
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.IFSC_Code'),
          data: 'IFSC_CODE'
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.Flat_permise_Number'),
          data: 'FLAT_PRM_NAME'
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.Town_City_District'),
          data: 'CITY_CODE'
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.State'),
          data: 'STATE'
        },
        {
          title: this.translate.instant('master.Bank_Other_Details.Pin_Code'),
          data: 'PIN_CODE'
        },

        {
          title: this.translate.instant('master.Bank_Other_Details.Mobile_Number'),
          data: 'MOB_NUM'
        },

        {
          title: this.translate.instant('master.Bank_Other_Details.Email'),
          data: 'EMAIL'
        },


      ],
      dom: 'Blrtip',
    }
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BANK_CODE: ['', [Validators.pattern]],
      BRANCH_CODE: ['', [Validators.required]],
      HO_GL: ['', [Validators.required]],
      NAME: ['', [Validators.pattern, Validators.required]],
      SHORT_NAME: ['', [Validators.pattern, Validators.required]],
      TAN_NO: ['', [Validators.pattern]],
      PAN_NO: ['', [Validators.pattern, Validators.required]],
      FLAT_PRM_NO: ['', [Validators.pattern]],
      FLAT_PRM_NAME: ['', []],
      RD_LANE_NAME: ['', [Validators.pattern]],
      AREA_LOCATION: ['', [Validators.pattern]],
      CITY_CODE: ['', [Validators.pattern]],
      STATE: ['', [Validators.pattern]],
      PIN_CODE: ['', [Validators.pattern, Validators.required]],
      PHONE_OFFICE: ['', [Validators.pattern]],
      MOB_NUM: ['', [Validators.pattern, Validators.required]],
      EMAIL: ['', [Validators.pattern, Validators.required]],
      GMAIL_USER: ['', [Validators.pattern, Validators.required]],
      GMAIL_PASSWORD: ['', [Validators.pattern, Validators.required]],
      SBI_BANKCODE: ['', [Validators.pattern, Validators.required]],
      GST_NO: ['', [Validators.pattern]],
      IFSC_CODE: ['', [Validators.pattern]],
      IBT_TRAN: [false],
      ATM_GLACNO: [null]
    });
  }


  // Method to insert data into database through NestJS
  submit() {
    this.http.get(this.url + '/bank-other-details/branch/' + this.ngbranch).subscribe(existData => {
      if (existData == '' || existData == null) {
        this.formSubmitted = true;
        const formVal = this.angForm.value;
        const dataToSend = {
          'BANK_CODE': formVal.BANK_CODE,
          'BRANCH_CODE': formVal.BRANCH_CODE,
          'HO_GL': formVal.HO_GL,
          'NAME': formVal.NAME,
          'SHORT_NAME': formVal.SHORT_NAME,
          'TAN_NO': formVal.TAN_NO,
          'PAN_NO': formVal.PAN_NO,
          'FLAT_PRM_NO': formVal.FLAT_PRM_NO,
          'FLAT_PRM_NAME': formVal.FLAT_PRM_NAME,
          'RD_LANE_NAME': formVal.RD_LANE_NAME,
          'AREA_LOCATION': formVal.AREA_LOCATION,
          'CITY_CODE': formVal.CITY_CODE,
          'STATE': formVal.STATE,
          'PIN_CODE': formVal.PIN_CODE,
          'PHONE_OFFICE': formVal.PHONE_OFFICE,
          'MOB_NUM': formVal.MOB_NUM,
          'EMAIL': formVal.EMAIL,
          'GMAIL_USER': formVal.GMAIL_USER,
          'GMAIL_PASSWORD': formVal.GMAIL_PASSWORD,
          'SBI_BANKCODE': formVal.SBI_BANKCODE,
          'GST_NO': formVal.GST_NO,
          'IFSC_CODE': formVal.IFSC_CODE,
          'IBT_TRAN': (formVal.IBT_TRAN == true ? '1' : '0'),
          ATM_GLACNO: formVal.ATM_GLACNO,
        }
        this.bankDetails.postData(dataToSend).subscribe(data1 => {
          Swal.fire('Success!', 'Data Added Successfully !', 'success');
          this.formSubmitted = false;
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });
        }, (error) => {
          console.log(error)
        })
        //To clear form
        this.resetForm();
      }
      else {
        Swal.fire('Info!', 'Data Already Exist!', 'info');
      }
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.ngCity = null
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.bankDetails.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.patchValue({
        'BANK_CODE': data.BANK_CODE,
        'BRANCH_CODE': data.BRANCH_CODE,
        'HO_GL': data.HO_GL,
        'NAME': data.NAME,
        'SHORT_NAME': data.SHORT_NAME,
        'TAN_NO': data.TAN_NO,
        'PAN_NO': data.PAN_NO,
        'FLAT_PRM_NO': data.FLAT_PRM_NO,
        'FLAT_PRM_NAME': data.FLAT_PRM_NAME,
        'RD_LANE_NAME': data.RD_LANE_NAME,
        'AREA_LOCATION': data.AREA_LOCATION,
        'CITY_CODE': data.CITY_CODE,
        'STATE': data.STATE,
        'PIN_CODE': data.PIN_CODE,
        'PHONE_OFFICE': data.PHONE_OFFICE,
        'MOB_NUM': data.MOB_NUM,
        'EMAIL': data.EMAIL,
        'GMAIL_USER': data.GMAIL_USER,
        'GMAIL_PASSWORD': data.GMAIL_PASSWORD,
        'SBI_BANKCODE': data.SBI_BANKCODE,
        'GST_NO': data.GST_NO,
        'IFSC_CODE': data.IFSC_CODE,
        'IBT_TRAN': (data.IBT_TRAN == '1' ? true : false),
        ATM_GLACNO: data.ATM_GLACNO,
      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['IBT_TRAN'] = (data.IBT_TRAN == true ? '1' : '0')

    this.bankDetails.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.ngCity = null
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
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
}
