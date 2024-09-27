import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ProcessAcmService } from '../process-acm.service';
import { TranslateService } from "@ngx-translate/core";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
@Component({
  selector: 'app-penal-interest-calculation',
  templateUrl: './penal-interest-calculation.component.html',
  styleUrls: ['./penal-interest-calculation.component.scss']
})
export class PenalInterestCalculationComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variaqbles
  branch_code: any;
  ngBranchCode: any = null
  ngscheme: any = null
  scheme: any[];
  modalClass: string = 'modalHide';
  setLang: any;
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private processacm: ProcessAcmService,
    private translate: TranslateService,
    private systemParameter: SystemMasterParametersService,
    private config: NgSelectConfig,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.createForm();
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = user.branchId

    })
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'CC' || scheme.name == 'LN');
      });
      this.scheme = allscheme;
    })


  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
    })
  }

  Process() {
    let obj = this.angForm.value;
    let user = localStorage.getItem('user');
    obj['user'] = JSON.parse(user);
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Sure')}`,
      text: `${this.translate.instant('Swal_Msg.Process')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Process Start It!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.modalClass = 'modalShow';
        this.processacm.penalInterestCalculation(obj).subscribe(data => {
          if (data.status == 'Ok') {
            this.processacm.penalInterestCalculationProcess(obj).subscribe(ele => {
              if (ele.status == 'done') {
                Swal.fire(`${this.translate.instant('Swal_Msg.Process')}`);
              }
              this.modalClass = 'modalHide';
            })
          } else {
            Swal.fire({
              title: 'Interest Calcluation',
              text: `${this.translate.instant('Swal_Msg.Process')}`,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes'
            }).then((result) => {
              this.modalClass = 'modalShow';
              this.processacm.penalInterestCalculationProcess(obj).subscribe(ele => {
                if (ele.status == 'done') {
                  Swal.fire(`${this.translate.instant('Swal_Msg.Process')}`);
                  this.modalClass = 'modalHide';
                }
              })
            })
          }
        })
      }
    })
  }
}
