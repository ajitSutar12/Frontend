import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-birthday-wish',
  templateUrl: './birthday-wish.component.html',
  styleUrls: ['./birthday-wish.component.scss']
})
export class BirthdayWishComponent implements OnInit {
  //fromgroup
  ngForm: FormGroup

  // for dropdown ng module
  fromdate: any = null
  ngbranch: any = null;
  scode: any = null;
  //ngfor
  scheme: any[];
  branchOption: any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  transferSchemeDetails: any;
  tScheme
  isTdsForm: boolean = false;
  ngCity: any = null
  city: any[];

  //date
  dates: any = null
  date: any = null
  bsValue = new Date();

  maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;
  branchName: any;
  FormGroup: any;
  formSubmitted = false;
  iframe5url: any = '';


  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,

    private sanitizer: DomSanitizer,) {
    this.dates = moment().format('DD/MM/YYYY');
    this.date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })



    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SH');
      });
      this.scheme = filtered;



    })
  }


  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name

  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["", [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      SUBMISSION: ['SUBMISSION'],


    });

  }

  view(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;
      let Date = moment(obj.START_DATE).format('DD/MM/YYYY');
      let Date1 = moment(obj.END_DATE).format('DD/MM/YYYY');

      // let branch = obj.BRANCH_CODE

      let Rdio = obj.SUBMISSION
      let scheme = this.tScheme


      this.iframe5url = this.report_url + "examples/Gretting.php?startDate='" + Date + "'&Rdio='" + Rdio+"'&branchname='" + branchName  + "'&branch='" + this.ngbranch + "&bankName=" + bankName + "" + "'&enddate='" + Date1 + "'&scheme'" + scheme;
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);



    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;

    } else {
      this.isTdsForm = false;

    }
  }

  close() {
    this.resetForm()

  }




  onLoad() {
    this.showLoading = false;

  }
  resetForm() {
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.START_DATE.reset();
    this.ngForm.controls.END_DATE.reset();



    this.showRepo = false;
    this.clicked = false;
  }

  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }




}


