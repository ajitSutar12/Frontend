import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { first } from "rxjs/operators";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DomSanitizer } from "@angular/platform-browser";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import * as moment from "moment";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: "app-intratewise-maturity-list",
  templateUrl: "./intratewise-maturity-list.component.html",
  styleUrls: ["./intratewise-maturity-list.component.scss"],
})
export class IntratewiseMaturityListComponent implements OnInit {
  // Created Form Group
  ngForm: FormGroup;
  //dropdown
  branchOption: any[];
  schemeList: any[];
  // for dropdown ng module
  ngbranch: any = null;
  ngstart: any = null;
  ngend: any = null;
  ngIntroducer: any = null;
  // Date variables
  todate: any = null;
  fromdate: any = null;
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  equal: any;
  startfrom;
  startto;

  //iframe
  formSubmitted = false;
  clicked: boolean = false;
  showRepo: boolean = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = " ";
  setLang: string;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,

    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private translate:TranslateService
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
    this.todate = moment().format("DD/MM/YYYY");
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm();
    //branch List
    this._ownbranchmasterservice
      .getOwnbranchList()
      .pipe(first())
      .subscribe((data) => {
        this.branchOption = data;
      });

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe((data) => {
        var filtered = data.filter(function (scheme) {
          return scheme.name == "TD";
        });
        this.schemeList = filtered;
        this.ngIntroducer = null;
      });
      //for starting and ending date
    this.systemParameter
      .getFormData(1)
      .pipe(first())
      .subscribe((data) => {
        this.todate = data.CURRENT_DATE;
      });

    this.systemParameter.getFormData(1).subscribe((data) => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year();
      this.todate = data.CURRENT_DATE;

      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY");
      this.fromdate = this.fromdate._d;
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
  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      START_INT: ["", [Validators.pattern, Validators.required]],
      END_INT: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      SUBMISSION: new FormControl("SUBMISSION"),
    });
  }
  end() {}
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event) {
    debugger;
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem("user"));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {
      let obj = this.ngForm.value;
      this.showRepo = true;
      let date = moment(obj.FROM_DATE).format("DD/MM/YYYY");

      let schemecode = obj.Scheme_code;
      let startint = obj.START_INT;
      let endint = obj.END_INT;
      let branch = obj.BRANCH_CODE;

      this.iframe5url =
        this.report_url +
        "examples/AgentwisePigmyBalList.php?date='" +
        date +
        "'&schemecode=" +
        schemecode +
        "'&endint=" +
        endint +
        "'&startint=" +
        startint +
        "&branch=" +
        branch +
        "'&bankName=" +
        bankName +
        "";
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.iframe5url
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
    this.ngForm.controls.START_INT.reset();
    this.ngForm.controls.END_INT.reset();
    this.ngForm.controls.Scheme_code.reset();
    this.showRepo = false;
    this.clicked = false;
  }
}
