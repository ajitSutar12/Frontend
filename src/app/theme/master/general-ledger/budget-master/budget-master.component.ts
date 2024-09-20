import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import Swal from "sweetalert2";
import { BudgetserviceService } from "./budget-master.component.service";
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { NgSelectConfig } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import * as moment from "moment";


// For fetching values from backend
interface budget {
  budgetYear: number;
  radio: string;
}

@Component({
  selector: "app-budget-master",
  templateUrl: "./budget-master.component.html",
  styleUrls: ["./budget-master.component.scss"],
})
export class BudgetMasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  formSubmitted = false;
  //api 
  url = environment.base_url;

  angForm: FormGroup;




  timeLeft: number;


  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number;
  ngbranch: any = null;
  branchOption: any;
  ngfinyear: any = null

  message = {
    BudgetYear: "",
  };
  data: any;
  expinfo: any[] = [];
  incomeinfo: any[] = [];
  mergedData: any[] = [];
  insertinfo: any[] = [];
  getdatatable: any;
  updateInfo: any;
  changedValue: any;
  tvalue: any;
  allocatedBudget: any;
  pendingUpdates: any;
  dataSend: any;
item: any;
  updatevalue: any;
  setLang: any;
  maxDate: any;



  constructor(
    private fb: FormBuilder,
    private http: HttpClient, private _budget: BudgetserviceService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private config: NgSelectConfig, private translate: TranslateService, 
    private systemParameter: SystemMasterParametersService

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

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {

      this.branchOption = data;
      let obj = { label: 'All', value: 0, name: 0 };
      this.branchOption.push(obj)
    })

    // this.http.get('http://192.168.1.195:4771/ledger-view/getExpenditureData').subscribe((expdata: any) => {
    //   this.getdatatable = expdata;
    //   console.log("expdata.....",expdata);
    //   console.log("Get Data Expendature Table.....", this.getdatatable);
    // });
    // this.http.get('http://192.168.1.195:4771/ledger-view/getIncomeData').subscribe((incdata: any) => {
    //   this.getdatatable = incdata;
    //   console.log("incdata.....",incdata);
    //   console.log("Get Data Income Table.....", this.getdatatable);
    // });
  }





  Budget(event) {
  //   this.http.get(this.url + '/ledger-view/getExpenditure').subscribe((data: any) => {
  //     this.incomeinfo = data;
  //     console.log("Expenditure Info.....", this.incomeinfo);
  //   });

  this.http.get(this.url + '/ledger-view/getExpenditureData').subscribe((expdata: any) => {
      this.getdatatable = expdata;
      console.log("expdata.....",expdata);
      console.log("Get Data Expendature Table.....", this.getdatatable);
    });

  }
  BudgetIncome(event) {
  //   this.http.get(this.url + '/ledger-view/getIncome').subscribe((data1: any) => {
  //     this.incomeinfo = data1;
  //     console.log("Income Info.......", this.incomeinfo);
  //   });

  this.http.get(this.url + '/ledger-view/getIncomeData').subscribe((incdata: any) => {
    this.getdatatable = incdata;
    console.log("incdata.....",incdata);
    console.log("Get Data Income Table.....", this.getdatatable);
  });
  }



  handleAmountChange(event: any, item: any) {
    let changedValue = event.target.value;

    let userData = JSON.parse(localStorage.getItem("user"));


    console.log("Changed value:", changedValue);
    console.log("Corresponding item:", item);

    let obj = {
      "BRANCH_CODE": this.angForm.value.BRANCH_CODE,
      "FIN_YEAR": this.angForm.value.FIN_YEAR,
      "AC_NO": item.AC_NO,
      "AC_NAME": item.AC_NAME,
      "BUDGET_AMOUNT": this.changedValue,
      "USER_CODE": userData.id,
      "PARENT_NODE" : item.PARENT_NODE,

    };
    console.log("obj Info....", obj);

    this.http.post(this.url + '/ledger-view/insert', obj).subscribe((data2: any) => {
      this.insertinfo = data2;
      console.log("Insert Info.....", this.insertinfo);
    });

  }

  onCellChange(event: any, item: any, field: string) {
    item[field] = event.target.textContent;
    this.updatevalue=item;
  }

  updateData(item: any) {

    // let updatedBudgetAmount = this.updatevalue;
    let obj = {
      'data': this.updatevalue,
      
    };
  
    
    this.http.post(this.url + '/ledger-view/update',obj).subscribe((updatedata: any) => {
  Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.updateInfo = updatedata;
      console.log("Update Data Table.....", this.updateInfo);

      this.showButton = true;
      this.updateShow = false;
      let data = this.angForm.value;
      data['id'] = this.updateID;
      // this._budget.updateData(data).subscribe(() => {
      //   Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      //   this.showButton = true;
      //   this.updateShow = false;
  
      //   this.resetForm();
      // })
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
      FIN_YEAR: ["", [Validators.required, Validators.pattern]],
      BRANCH_CODE: ['', [Validators.required]],
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
    this.ngbranch = null
  }

}
