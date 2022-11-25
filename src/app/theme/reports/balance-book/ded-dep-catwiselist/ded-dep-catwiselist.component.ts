import { Component, OnInit } from "@angular/core";
import { NgSelectConfig } from "@ng-select/ng-select";
import { FormGroup,FormBuilder, Validators, FormControl,} from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { DepriciationCatDropdownMasterService } from "../../../../shared/dropdownService/depriciation-category-master-dropdown.service";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import * as moment from "moment";
import Swal from "sweetalert2";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { DeadstockmasterService } from "../../../master/customer/dead-stock-master/dead-stock-master.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-ded-dep-catwiselist",
  templateUrl: "./ded-dep-catwiselist.component.html",
  styleUrls: ["./ded-dep-catwiselist.component.scss"],
  providers: [DeadstockmasterService],
})
export class DedDepCatwiselistComponent implements OnInit {
  // Created Form Group
  ngForm: FormGroup;
  // for dropdown ng module
  ngbranch: any = null;
  ngDepre: any = null;
  ngItem: any = null;
  EndingAccount: any = null;
  //for dropdown
  branchOption: any[];
  DeprCategoryoption: any[];
  startingacc;
  endingacc;
  //for date
  defaultDate: any;
  maxDate: Date;
  minDate: Date;
//iframe
  formSubmitted = false;
  showRepo: boolean = false;
  clicked: boolean = false;
  iframeurl: any = " ";
  url = environment.base_url;
  report_url = environment.report_url;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private config: NgSelectConfig,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private DepriciationCatDropdownMaster: DepriciationCatDropdownMasterService,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private deadstockmasterService: DeadstockmasterService
  ) {
    this.defaultDate = moment().format("DD/MM/YYYY");
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm();
    //branch List
    this._ownbranchmasterservice .getOwnbranchList() .pipe(first()) .subscribe((data) => {
        this.branchOption = data;
      });
      //depriciation category
    this.DepriciationCatDropdownMaster.getDepriciationMasterList() .pipe(first()) .subscribe((data) => {
        this.DeprCategoryoption = data;
      });
      //starting and ending code
    this.http.get(this.url + "/dead-stock-master").subscribe((data) => {
      this.startingacc = data;
      this.endingacc = data;
    });
  }
  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      DEPR_CATEGORY: ["", [Validators.pattern, Validators.required]],
      Ending_Account: ["", [Validators.pattern, Validators.required]],
      ITEM_TYPE: ["", [Validators.pattern, Validators.required]],
      FROM_DATE: ["", [Validators.pattern, Validators.required]],
      radio: new FormControl("none"),
    });
    let data: any = localStorage.getItem("user");
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id;
      this.ngForm.controls["BRANCH_CODE"].enable();
    } else {
      this.ngForm.controls["BRANCH_CODE"].disable();
      this.ngbranch = result.branch.id;
    }
  }
  src: any;
  view(event) {
    
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem("user"));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {
      let obj = this.ngForm.value;
      this.showRepo = true;
      let startDate = moment(obj.FROM_DATE).format("DD/MM/YYYY");
      var sdate = moment(obj.FROM_DATE).startOf("quarter").format("DD/MM/YYYY");
      let Rstartingacc = obj.FROM_AC_NO;
      let Rendingacc = obj.TO_AC_NO;
      let branch = obj.BRANCH_CODE;
      let Rdio = obj.radio;
      let Rdiosort = obj.radio_sort;
      let start = obj.ITEM_TYPE;
      let end = obj.Ending_Account;
      let depcat = obj.DEPR_CATEGORY;

      this.iframeurl =  this.report_url +  "examples/BalanceList.php?startDate='" +  startDate +  "'&Rdio='" +
        Rdio + "'&scheme='" + "'&sdate='" + sdate + "'&branch='" + branch +"'&Rstartingacc='" + Rstartingacc +
        "'&Rendingacc='" +Rendingacc +"'&Rdiosort='" +Rdiosort +"&bankName=" +bankName +"'start='" +  start +
        "end='" + end + "'depcat='" + depcat;
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.iframeurl
      );

    
    } else {
      Swal.fire("Warning!", "Please Fill All Mandatory Field!", "warning").then(
        () => {
          this.clicked = false;
        }
      );
    }
  }

  close() {
    this.resetForm();
  }

  // Reset Function
  resetForm() {
    // this.createForm()
    this.ngForm.controls.DEPR_CATEGORY.reset();
    this.ngForm.controls.ITEM_TYPE.reset();
    this.ngForm.controls.Ending_Account.reset();
    // this.ngForm.controls.TO_AC_NO.reset();
    this.showRepo = false;
    this.clicked = false;
  }
}
