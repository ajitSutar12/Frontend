import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-svnidhi',
  templateUrl: './svnidhi.component.html',
  styleUrls: ['./svnidhi.component.scss']
})
export class SvnidhiComponent implements OnInit {
  fromdate: any;
  todate: string;
  maxDate: Date;
  minDate: Date;

  constructor(private ownbranchMasterService: OwnbranchMasterService,
    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
  
  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
   }
  ngForm!: FormGroup;
  branch_code: any;
  ngbranch: any;
  branch;
  bsValue = new Date();
  branchName: any;
  showRepo: boolean = false;
  formSubmitted: boolean;
  clicked: boolean = false;

  ngOnInit(): void {
    // debugger
    this.createForm();
   
       this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      console.log(this.branch_code)
    });

 this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
  this.todate = data.CURRENT_DATE;
});
  }
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: [""],
    
      Suite_Date: [""], 
     
    })
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  getdata(event) {

    this.branch = event.value
  }
  
  view(event) {
    // debugger


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      this.showRepo = true;
      let Date = moment(obj.Suite_Date).format('DD/MM/YYYY');
      // let Scheme_code =   this.schcode
      let BRANCH_CODE = obj.BRANCH_CODE;}
    }
    close() {
      this.resetForm()
  
    }
    resetForm() {
      this.ngForm.controls.Suite_Date.reset();
      this.ngForm.controls.BRANCH_CODE.reset();
     
      this.showRepo = false;
      this.clicked = false;
    }
}
