import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first, take } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from "sweetalert2";
import { environment } from "src/environments/environment"; import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { BalanceSheetService } from '../balance-sheet.service';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { data } from 'jquery';
import { NgSelectConfig } from "@ng-select/ng-select";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss'],
  providers: [OwnbranchMasterService]
})
export class BalanceSheetComponent implements OnInit {
  // Created Form Group
  angForm: FormGroup;
  todate: any = null;
  fromdate: any;
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  formSubmitted: any;

  showRepo: boolean = false;
  iframeurl: any = ' ';
  report_url = environment.report_url;
  clicked: boolean = false;
  getBalaceSData: any;

  //Dropdown option variable
  ngbranch: any;
  branchOption: any;
  BalanceSheetService: any;
  data: any;
  balSheetdataset: [];
  allFilters: any;
  branchName
  setLang:any;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private _service: BalanceSheetService,
    private translate:TranslateService

  ) {


    this.fromdate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      
      this.fromdate = data.CURRENT_DATE;
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME
    }



  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
    })
  }


  view(event) {
    // this.branchName = event.branchName
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;


    if (this.angForm.valid) {
      this.showRepo = true;

      let obj = this.angForm.value
      // check the conition of the default(syspara) date and date parameter and set the format
      let date: any;
      if (this.fromdate == obj.START_DATE) {
        date = moment(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        date = moment(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let branch_code = obj.BRANCH_CODE;



      getBalaceSData(event); {
        let Obj = {
          date: this.fromdate,
          branch_code: this.ngbranch,
        }
        this._service.getFormData(Obj).subscribe(data => {


          this.balSheetdataset = data;
          console.log(this.balSheetdataset);

          this.iframeurl = this.report_url + "examples/BalanceSheet.php?&date=" + date + "&branch_code=" + this.ngbranch + "&bankName=" + bankName + "&branchName=" + this.branchName;
          console.log(this.iframeurl);
          this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
        })

      }

    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(() => { this.clicked = false });
    }

  }
  close() {
    this.resetForm()
  }
  // Reset Function
  resetForm() {
    // this.createForm()
    this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }

}
function getBalaceSData(event: any) {
  // throw new Error('Function not implemented.');
}

