import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Subject } from "rxjs";
import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { S2Service } from "../../../../../shared/elements/s2.service";
import { Ac2Service } from "../../../../../shared/elements/ac2.service";
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { OwnDepositsComponentService } from "./own-deposit.service"; //Injecting service into component.
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
//Dropdown service file
import { OwnbranchMasterService } from "../../../../../shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { schemedropdownService } from "../../../../../shared/dropdownService/scheme-dropdown.service";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";


import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { number } from "ngx-custom-validators/src/app/number/validator";
import { data } from "jquery";
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface DepositeMaster {
  id: number;
  AC_ACNOTYPE: string;
  AC_TYPE: number;
  AC_NO: number;

  BRANCH_CODE: string;
  DEPO_AC_TYPE: string;
  DEPO_AC_NO: number;
  SUBMISSION_DATE: Date;
  RECEIPT_NO: number;
  DEPOSIT_AMT: number;
  REMARK: string;
  MATURITY_DATE: Date;
  MARGIN: number;
  LEDGER_Bal: number;
  AC_INTRNAME: string
}
@Component({
  selector: "app-own-deposits",
  templateUrl: "./own-deposits.component.html",
  styleUrls: ["./own-deposits.component.scss"],
})
export class OwnDepositsComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //passing data form child to parent
  @Output() newOwnDepositEvent = new EventEmitter<any>();
  datemax: string;
  newbtnShow: boolean;

  newItemEvent(value) {
    this.newOwnDepositEvent.emit(value);
  }
  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
  @Input() AC_ACNOTYPE: any;
  //api
  url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number; //variable for updating
  // Store data from backend
  depositemasters: DepositeMaster[];
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  //filter variable
  filterData = {};
  ACNo: any;

  // schemeList:any
  //Dropdown option variable
  branchOption: any;
  ngbranch: any = null;
  ngscheme: any = null;
  ngacno: any = null;
  // for date
  submissiondate: any = null
  maxDate: Date;
  minDate: Date;
  obj: any = { type: "own deposite form" };
  page: number;
  //Scheme type variable
  schemeList
  schemeType: string = 'TD'

  constructor(
    private fb: FormBuilder,
    public S2Service: S2Service,
    public Ac2Service: Ac2Service,
    private _deposite: OwnDepositsComponentService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private _sheme: schemedropdownService,
    private http: HttpClient,
    public router: Router,

    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
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
            this.url + "/own-deposits",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.depositemasters = resp.data;
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
          title: "Branch",
          data: "BRANCH_CODE",
        },
        {
          title: "Scheme",
          data: "DEPO_AC_TYPE",
        },
        {
          title: "Account No",
          data: "DEPO_AC_NO",
        },
        {
          title: "Date of Submission",
          data: "SUBMISSION_DATE",
        },
        {
          title: "Receipt Number",
          data: "RECEIPT_NO",
        },
        {
          title: "Deposit Amount",
          data: "DEPOSIT_AMT",
        },
        {
          title: "Remarks",
          data: "REMARK",
        },
        {
          title: "Maturity Date",
          data: "MATURITY_DATE",
        },
        {
          title: "Margin %",
          data: "MARGIN",
        },
        {
          title: "Ledger Balance",
          data: "LEDGER_Bal",
        },
      ],
      dom: "Blrtip",
    };
    
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD' || scheme.name == 'PG');
      });
      this.schemeList = filtered;
      
    })
    
      this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
        this.branchOption = data;
      })
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: [""],
      AC_NO: [""],
      AC_ACNOTYPE: ['LN'],
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      DEPO_AC_TYPE: ["", [Validators.required]],
      DEPO_AC_NO: ["", [Validators.required]],
      SUBMISSION_DATE: ["", [Validators.required]],
      RECEIPT_NO: [""],
      DEPOSIT_AMT: ["", [Validators.pattern]],
      REMARK: ["", [Validators.pattern]],
      MATURITY_DATE: [""],
      MARGIN: ["", [Validators.pattern]],
      LEDGER_Bal: [""],
      AC_INTRNAME: [''],
    });
  }

  getBranch() {
   
    this.getIntroducer()
  }
  obj1: any
  getschemename: any

  getIntro(event) {
  
    this.getschemename = event.name
    this.getIntroducer()
  }

   //get account no according scheme for introducer
   getIntroducer() {
     
    this.obj1 = [this.ngscheme, this.ngbranch]
    switch (this.getschemename) {
      case 'TD':
        
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj1).pipe(first()).subscribe(data => {
          
          this.ACNo = data;
          console.log()
        })
        break;
      case 'PG':
        
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj1).pipe(first()).subscribe(data => {
         
          this.ACNo = data;
        })
        break;
      
    }
  }


  submit(event) {
    
    let submissiondate
    event.preventDefault();
    this.formSubmitted = true;

    if (this.angForm.valid) {
      
     
      const formVal = this.angForm.value;
    
      const dataToSend = {
      AC_TYPE: this.scheme,
      AC_NO: this.Accountno,
      AC_ACNOTYPE: this.AC_ACNOTYPE,
      BRANCH_CODE: formVal.BRANCH_CODE,
      DEPO_AC_TYPE: formVal.DEPO_AC_TYPE,
      DEPO_AC_NO: formVal.DEPO_AC_NO,
      'SUBMISSION_DATE': (formVal.SUBMISSION_DATE == '' || formVal.SUBMISSION_DATE == 'Invalid date') ? submissiondate = '' : submissiondate = moment(formVal.SUBMISSION_DATE).format('DD/MM/YYYY'),
     
      RECEIPT_NO: formVal.RECEIPT_NO,
      DEPOSIT_AMT: formVal.DEPOSIT_AMT,
      REMARK: formVal.REMARK,
      MATURITY_DATE: formVal.MATURITY_DATE,
      MARGIN: formVal.MARGIN,
      LEDGER_Bal: formVal.LEDGER_Bal,
      AC_INTRNAME: formVal.AC_INTRNAME,
    };
    
    this._deposite.postData(dataToSend).subscribe(
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
    let submissiondate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._deposite.getFormData(id).subscribe((data) => {
      this.updatecheckdata=data
     //sending values to parent
     let dropdown: any = {};
     dropdown.scheme = data.AC_TYPE;
    
     dropdown.account = data.AC_NO;
   
     let obj1 = {
       'AccountType' :data.AC_TYPE,
       'AccountNo': data.AC_NO,
       'SchemeType':data.AC_ACNOTYPE
     }
     this.newOwnDepositEvent.emit(obj1);
     this.updateID = data.id;
      

      this.scheme=data.AC_TYPE
      this.Accountno=data.AC_NO
      //after clicking edit to get value in dropdown
      this.ngbranch=Number(data.BRANCH_CODE)
      this.ngscheme=Number(data.DEPO_AC_TYPE)
      this.ngacno=Number(data.DEPO_AC_NO)
     console.log( this.ngacno)
      
        this.angForm.patchValue({
         
          AC_ACNOTYPE: data.AC_ACNOTYPE,
          'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,
         
          RECEIPT_NO: data.RECEIPT_NO,
          DEPOSIT_AMT: data.DEPOSIT_AMT,
          REMARK: data.REMARK,
          MATURITY_DATE: data.MATURITY_DATE,
          MARGIN: data.MARGIN,
          LEDGER_Bal: data.LEDGER_Bal,
          AC_INTRNAME: data.AC_INTRNAME,
        });
    });
  }

  updateData() {
    let submissiondate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data["AC_TYPE"]=this.scheme
    data["AC_NO"]=this.Accountno
    if (this.updatecheckdata.SUBMISSION_DATE != data.SUBMISSION_DATE) {
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
    }
    this._deposite.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      // this.rerender();
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
  delClickHandler(id: number): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete advocate Master data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._deposite.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your Data Has Been Deleted.", "success");
        }),
          (error) => {
            
          };
        // to reload after delete of data
        this.rerender();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data Is Safe.", "error");
      }
    });
  }
  //check  if margin values are below 100
checkmargin(ele:any){ 
  //check  if given value  is below 100
 
  if(ele <= 100){

  }
  else{
    Swal.fire("Invalid Input", "Please Insert Values Below 100", "error");
  }
}
  ngAfterViewInit(): void {
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
    this.ngbranch=null
    this.ngscheme=null
    this.ngacno=null
    
    let obj1 = {
      'AccountType' : null,
      'AccountNo': null,
      
    }
    this.newOwnDepositEvent.emit(obj1);
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
