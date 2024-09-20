import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import Swal from "sweetalert2";
// Angular Datatable Directive 
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { NgSelectConfig } from '@ng-select/ng-select';
import { BudgetViewService } from "./budget-view.service"
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import * as moment from "moment";
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';


// For fetching values from backend
interface budget {
  budgetYear: number;
  radio: string;
}
@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.scss']
})
export class BudgetViewComponent implements OnInit {


  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  formSubmitted = false;
  //api 
  url = environment.base_url;
  report_url = environment.report_url;

  angForm: FormGroup;
  timeLeft: number;
  dtExportButtonOptions: any = {};

  updateID: number;
  ngbranch: any = null;
  branchOption: any;
  ngfinyear: any = null;
  defaultDate: any;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  iframe5url: any = '';
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  showButton: boolean = true;
  updateShow: boolean = false;



  message = {
    BudgetYear: "",
  };
  getdatatable: [];
  data: any;
  insert: any;
  yearDetails: Object;
  setLang: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, private _budget: BudgetViewService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private translate: TranslateService, 


  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
    this.defaultDate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
    this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    this.createForm();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {

      this.branchOption = data;
      let obj = { label: 'All', value: 0, name: 0 };
      this.branchOption.push(obj)

    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
    });

    this.http.get(this.url + '/ledger-view/getBudgetYear').subscribe((data) => {
      this.yearDetails = data;
      console.log(this.yearDetails)
    })

  }

  Budget(event) {
    this.http.get(this.url + '/ledger-view/budgetWiewExp').subscribe((expdata: any) => {
      this.getdatatable = expdata;
      console.log("expdata.....", expdata);
      console.log("Get Data Expendature Table.....", this.getdatatable);
  
      expdata.forEach((record: any) => {
        for (let key in record) {
          if (typeof record[key] === 'number' && record[key] < 0) {
            record[key] = Math.abs(record[key]);
          }
        }
      });
        this.sendDataToInsertAPI(expdata);
    });
  }
  
  
  BudgetIncome(event) {
    this.http.get(this.url + '/ledger-view/budgetWiewInc').subscribe((incdata: any) => {
      this.getdatatable = incdata;
      console.log("incdata.....", incdata);
      console.log("Get Data Income Table.....", this.getdatatable);
  
      for (let i = 0; i < incdata.length; i++) {
        for (let key in incdata[i]) {
          if (typeof incdata[i][key] === 'number' && incdata[i][key] < 0) {
            incdata[i][key] = Math.abs(incdata[i][key]);
          }
        }
      }
  
      this.sendDataToInsertAPI(incdata);
    });
  }
  

  sendDataToInsertAPI(data: any) {
    this.http.post(this.url + '/ledger-view/insertBudgetDetails', data).subscribe((response: any) => {
      this.insert=response;
        console.log("Insert Info.....", response);
    });
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
      FIN_YEAR: ["", [Validators.required]],
      BRANCH_CODE: ['', [Validators.required]],
      OPENINGDATE: ["", [Validators.pattern]],
      // Average_Check: [""],
      BUDGET_MASTER: new FormControl('expenditure'),




    });
  }
  //Method to insert data into database on submitting form
  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      // console.log(this.angForm.value);
    }
    const formVal = this.angForm.value;
    const dataToSend = {
      // budgetYear: formVal.BudgetYear,
      // radio: formVal.radio,
    };
    // console.log(this.angForm.value);
    this._budget.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        // this.rerender();
      },
      (error) => {
        console.log(error);
      }
    );
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

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.BudgetYear = info.BudgetYear;
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(data: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._budget.deleteData(data);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe.", "error");
      }
    });
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this._budget.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;

      this.resetForm();
    })
  }

  view(event) {
    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      // let stdate = moment(obj.OPENINGDATE).format('DD/MM/YYYY');
      // var edate = moment(obj.OPENINGDATE).subtract(1, "day").format('DD/MM/YYYY');

      let stdate: any;
      if (this.defaultDate == obj.OPENINGDATE) {
        stdate = moment(this.defaultDate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        stdate = moment(this.defaultDate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      // let pritns = obj.Average_Check;
      // if (pritns == null || pritns == false) {
      //   pritns = 0;
      // }else {
      //   pritns = 1;
      // }
      // let pnode = this.data[0].PARENT_NODE;
      let node = this.insert[0].PARENT_NODE;
      let flag
      if (obj.BUDGET_MASTER == 'expenditure') {
        flag = 0;
      }
      else if (obj.BUDGET_MASTER == 'income') {
        flag = 1;
      }


      this.iframe5url = this.report_url + "examples/BudgetView.php?stdate='" + stdate + "'&branchName='" + branchName + "'&bankName='" + bankName +"'&node='"+node+ "'&flag=" + flag + "";
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
      console.log(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  close() {
    this.resetForm();
    this.clearTableData();

  }
  clearTableData() {
    this.getdatatable = [];

  }
  // Reset Function
  resetForm() {
    this.createForm();
    this.ngbranch = null;
    this.showRepo = false;
    this.clicked = false;
  }
  onLoad() {
    this.showLoading = false;

  }
  year
  getYear(event) {
    this.year = event.FIN_YEAR;    
    
  }
 
}
