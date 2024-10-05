import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DomSanitizer } from "@angular/platform-browser";
import * as moment from "moment";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
import { first } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: "app-intratewise-balancelist",
  templateUrl: "./intratewise-balancelist.component.html",
  styleUrls: ["./intratewise-balancelist.component.scss"],
})
export class IntratewiseBalancelistComponent implements OnInit {
  // Created Form Group
  ngForm: FormGroup;
  //for date
  maxDate: Date;
  minDate: Date;
  bsValue: any;
  fromdate: any;
  defaultDate: any;
  //dropdown
  branchOption: any[];
  // for dropdown ng module
  ngbranch: any = null;
  //iframe
  formSubmitted = false;
  clicked: boolean = false;
  showRepo: boolean = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = " ";
  setLang: any;
  constructor(
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private translate:TranslateService

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
    this.defaultDate = moment().format("DD/MM/YYYY");
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm();
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe((data) => {
        this.branchOption = data;
      });
      //for date
    this.systemParameter
      .getFormData(1)
      .pipe(first())
      .subscribe((data) => {
        this.defaultDate = data.CURRENT_DATE;
      });
  }
  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      FROM_DATE: ["", [Validators.required]],
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
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  src: any;
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

      let branch = obj.BRANCH_CODE;

      this.iframe5url =
        this.report_url +
        "examples/AgentwisePigmyBalList.php?date='" +
        date +
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
    this.showRepo = false;
    this.clicked = false;
  }
}
