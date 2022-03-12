import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
@Component({
  selector: 'app-transfer-to-glby-closing-ac',
  templateUrl: './transfer-to-glby-closing-ac.component.html',
  styleUrls: ['./transfer-to-glby-closing-ac.component.scss']
})
export class TransferToGLbyClosingACComponent implements OnInit {

  // variable for validation
  formSubmitted = false;
  // Created Form Group
  angForm: FormGroup;

  // dropdown variables
  scheme
  ngscheme: any = null
  ngBranchCode: any = null
  glaccount: any = null;
  schemeACNo: any[];
  branch_code: any[];
  schemeedit: any;
  ACMasterDropdown: any[];

  totalCharges: any = null
  // Date variables
  todate: any = null;
  fromdate:any=null
  maxDate: any;
  minDate: any;

  // variables for button
  showButton: boolean =true;
  updateShow: boolean;
  newbtnShow: boolean;
  constructor(
    private fb: FormBuilder,
    private config: NgSelectConfig,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    public ACMasterDropdownService: ACMasterDropdownService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value
    })
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'GS' || scheme.name == 'SH');
      });
      this.scheme = allscheme;
    })

  }
  getACmastercode(event){
    console.log(event)
   
    this.ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.ACMasterDropdown = data;
    })
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      GL_AC: [''],
      TOTAL_CHARGES:[''],
      PARTICULAR:[''],
      TRAN_PASSING:[''],
    })
  }
  getBranch() {

    this.getIntroducer()
  }
  schemechange(event) {
    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()
  }
  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.schemeedit, this.ngBranchCode]
    switch (this.getschemename) {
   
      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break
    }
  }
    

  checkdate(event){
    debugger
    let value1
    let value2
    value1= moment(this.fromdate).format('DD/MM/YYYY');
    value2= moment(this.todate).format('DD/MM/YYYY');
    if(moment(value2).isAfter(value1)){
     
    }
    else{
      Swal.fire("To date should be after from date");
    }
  }
    

}
