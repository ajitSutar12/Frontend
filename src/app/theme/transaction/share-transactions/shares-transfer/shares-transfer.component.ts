import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { glMasterService } from '../../../../shared/elements/gl-master.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shares-transfer',
  templateUrl: './shares-transfer.component.html',
  styleUrls: ['./shares-transfer.component.scss']
})
export class SharesTransferComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('narrationhide') narrationhide: ElementRef<HTMLElement>;


  //for fromgroup
  angForm: FormGroup

  url = environment.base_url;


  selectedBranch
  branchOption: any;
  scheme
  schemeCode
  schemeCode1
  schemeType: string = 'SH'


  multigrid1 = []


  maxDate: Date;
  minDate: Date;
  introducerACNo
  obj: any;
  ngIntroducer: any = null
  ngIntroducers: any = null
  code: any = null
  acno: any = null
  particulars: any;
  narrationList: any;
  
  particularss: any;
  ngFnarration: any = null






  //title select variables
  simpleOption: Array<IOption> = this.glMasterService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  autocompleteItems = ['a', 'b', 'c', 'd'];
  autocompleteItemsAsObjects = [
    { value: 'a', id: 0 },
    { value: 'b', id: 1 },
    { value: 'c', id: 2 },
    { value: 'd', id: 3 },
  ];



  dtExportButtonOptions: any = {};
 


  constructor( private http: HttpClient, public glMasterService: glMasterService, private fb: FormBuilder, private schemeAccountNoService: SchemeAccountNoService, private _ownbranchmasterservice: OwnbranchMasterService, private schemeCodeDropdownService: SchemeCodeDropdownService,) { }
  showButton: boolean = true;
  updateShow: boolean = false;





  ngOnInit(): void {
    this.createForm();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    debugger
    let user: any = localStorage.getItem('user');
    let result = JSON.parse(user);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['branch_code'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.angForm.controls['branch_code'].disable()
      this.selectedBranch = result.branch.id
    }

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
      this.getIntroducer()
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode1 = data[0].value
      this.getIntroducers() 
    })

    this.http.get(this.url + '/narration').subscribe(data => {
     
      this.narrationList = data
    });
   
   




  }

  // getNarration(ele) {
  //   this.particulars = ele;
  //   let el: HTMLElement = this.triggerhide.nativeElement;
  //   el.click();
  // }
  getFormNarration(ele) {
    this.ngFnarration = ele;
    let el: HTMLElement = this.narrationhide.nativeElement;
    el.click();
  }
  getBranch() {
    this.getIntroducer()
  }
  getIntroducer() {
    this.obj = [this.schemeCode, this.selectedBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  getIntroducers() {
    this.obj = [this.schemeCode1, this.selectedBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  decimalAllContent($event) {
    // let value = Number($event.target.value);
    //   let data = value.toFixed(2);
    //   $event.target.value = data;
      var t = $event.target.value;
      $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }


  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_TYPE1: ['', [Validators.required]],
      ChequeDate: ['', [Validators.required]],
      MEMBER_CODE: ['', [Validators.required]],
      MEMBER_CODE1: ['', [Validators.required]],
      TDATE: ['', [Validators.required]],
      RDATE: ['', [Validators.required]],
      MDATE: ['', [Validators.required]],
      amt: ['', [Validators.required]],
      ATA: ['', [Validators.required]],
      particulars: ['', [Validators.required]],
      particularss: ['', [Validators.required]],
      RESOLUTIONNO: ['', [Validators.required]],
      Fnarration: ['', [Validators.required]],
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['branch_code'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.angForm.controls['branch_code'].disable()
      this.angForm.patchValue({
        'branch_code': result.branch.id
      })
      this.selectedBranch = result.branch.id
    }
  }
  submit(){
    const formVal = this.angForm.value;
    var object =
    {
      branch_code:formVal.branch_code,
      AC_TYPE: formVal.AC_TYPE,
      AC_TYPE1:formVal.AC_TYPE1,
      ChequeDate:formVal.ChequeDate,
      MEMBER_CODE: formVal.MEMBER_CODE,
      MEMBER_CODE1:formVal.MEMBER_CODE1,
      TDATE: formVal.TDATE,
      RDATE: formVal.RDATE,
      MDATE: formVal.MDATE,
      amt:formVal.amt,
      ATA: formVal.ATA,
      particulars:formVal.particulars,
      RESOLUTIONNO:formVal.RESOLUTIONNO,

    }
    if (formVal.branch_code == "" || formVal.branch_code == null) {
      Swal.fire("Warning!", "Please Select Branch Code!", "error");
    }
     else if (formVal.AC_TYPE == "" || formVal.AC_TYPE == null) {
      Swal.fire(
        "Warning!",
        "Please Select Scheme Code!",
        "info"
      );
    }
   
   
    else if (formVal.AC_TYPE1 == "" || formVal.AC_TYPE1 == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Member No!",
        "info"
      );
    }
    else if (formVal.MEMBER_CODE== "" || formVal.MEMBER_CODE == null) {
      Swal.fire(
        "Warning!",
        "Please Select  Member No!",
        "info"
      );
    }
    else if (formVal.AC_TYPE1 == "" || formVal.AC_TYPE1 == null) {
      Swal.fire(
        "Warning!", "Please Select Scheme!", "error"
      );
    }
    else if (formVal.RDATE == "" || formVal.RDATE == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Resolution Date!",
        "info"
      );
    }
    else if (formVal.RESOLUTIONNO == "" || formVal.RESOLUTIONNO == null) {
        Swal.fire(
          "Warning!",
          "Please Insert RESOLUTIONNO!",
          "info"
        );
      }
      else if (formVal.ATA == "" || formVal.ATA == null) {
        Swal.fire(
          "Warning!", "Please Enter Actual Transfer Amount!", "error"
        );
      }

     else if (formVal.particulars == "" || formVal.particulars == null) {
        Swal.fire(
          "Warning!", "Please Enter Particulars!", "error"
        );
      }
   
   
   
    // else if (formVal.TDATE == "" || formVal.TDATE == null) {
    //   Swal.fire(
    //     "Warning!",
    //     "Please Insert Particulars!",
    //     "info"
    //   );
    // }
    // else if (formVal.RDATE == "" || formVal.RDATE == null) {
    //   Swal.fire(
    //     "Warning!", "Please Select Debit and Credit!", "error"
    //   );
    // }
    // else if (formVal.MDATE == "" || formVal.MDATE == null) {
    //   Swal.fire(
    //     "Warning!",
    //     "Please Insert Amount!",
    //     "info"
    //   );
    // }
    
    // else if (formVal.amt == "" || formVal.amt == null) {
    //   Swal.fire("Warning!", "Please Select Amount!", "error");
    // }
    //  else if (formVal.ATA == "" || formVal.ATA == null) {
    //   Swal.fire(
    //     "Warning!",
    //     "Please Select Account!",
    //     "info"
    //   );
    // }
   
   
    // else if (formVal.particulars == "" || formVal.particulars == null) {
    //   Swal.fire(
    //     "Warning!",
    //     "Please Insert Particulars!",
    //     "info"
    //   );
    // }
   
  
    // else if (formVal.Tscheme == "" || formVal.Tscheme == null) {
    //   Swal.fire("Warning!", "Please Select Scheme!", "error");
    // }
    //  else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
    //   Swal.fire(
    //     "Warning!",
    //     "Please Select Account!",
    //     "info"
    //   );
    // }
   
   
    // else if (formVal.particularss == "" || formVal.particularss == null) {
    //   Swal.fire(
    //     "Warning!",
    //     "Please Insert Particulars!",
    //     "info"
    //   );
    // }
    // else if (formVal.RESOLUTIONNO == "" || formVal.RESOLUTIONNO == null) {
    //   Swal.fire(
    //     "Warning!", "Please Select Debit and Credit!", "error"
    //   );
    // }
    
    else
    {
      this.multigrid1.push(object);
    Swal.fire(
      "Data Submitted Successfully!!"
    );
    console.log(object);
      
    }
    




  }

}






