import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branch-and-salary-dc',
  templateUrl: './branch-and-salary-dc.component.html',
  styleUrls: ['./branch-and-salary-dc.component.scss']
})
export class BranchAndSalaryDCComponent implements OnInit {
  angForm: FormGroup;

  //Dropdown variables
  Branch: any
  Schemecode: any
  Membernumber: any
  Newbranch: any
  NewSdivision: any
  subSdivision: any
  NewsubSdivision

  branch_code: any;
  introducerACNo: any;
  obj: any;
  schemeType: string = 'SH'

  
  url = environment.base_url;
  selectedTransScheme
  selectedTransBranch
  selectedTransMemno
  selectedNewBranch
  selectedNewSDiv
  selectedSubSDiv
  selectedSDiv
  selectednewSubSDiv
  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient  ) { }

  ngOnInit(): void {
    this.createForm();

    //for Branch Dropdown
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.getIntroducer()
    })


    //Scheme Code Dropdown
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.Schemecode = data
      // this.Schemecode = data[0].value
      // this.getIntroducer();
    })

    // this.http.post('http://192.168.137.1:3000/employee/getNewSaldiv',{}).subscribe((data: any) => {
    this.http.post(this.url+'/employee/getNewSaldiv',{}).subscribe((data: any) => {

      // console.log(data);

      this.NewSdivision = data

      console.log(this.NewSdivision)
    })


    // this.http.post('http://192.168.137.1:3000/employee/getNewSubSaldiv',{}).subscribe((data: any) => {
    this.http.post(this.url+'/employee/getNewSubSaldiv',{}).subscribe((data: any) => {

      // console.log(data);

      this.NewsubSdivision = data

      console.log(this.NewsubSdivision)
    })



  }

  accountNumbers
  getIntroducer(event) {
    // debugger
    // this.obj = [this.selectedTransScheme, this.selectedTransBranch]

    let obj = {
      'sAppl': event.name
    }

    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      // console.log(data);

      this.introducerACNo = data;
    })

    // this.http.post('http://192.168.137.1:3000/employee/MemberCode', obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/MemberCode', obj).subscribe((data: any) => {

      // console.log(data);

      this.accountNumbers = data;

      console.log("mem",  this.introducerACNo)
    })
  }

  banckAcNo
  salDiv
  subsalDiv
  getBankNo(event) {
    this.banckAcNo = event.SHMASTER_BANKACNO
    this.salDiv = event.SHMASTER_AC_SALARYDIVISION_CODE
    this.subsalDiv = event.SHMASTER_SUB_SALARYDIVISION_CODE

    
  }
  createForm() {
    this.angForm = this.fb.group({
      branch: ['', [Validators.required]],
      scode: ['', [Validators.required]],
      memno: ['', [Validators.required]],
      // salaryDiv: ['', [Validators.required]],
      newbranch: ['', [Validators.required]],
      newsd: ['', [Validators.required]],
      fdate: ['', [Validators.required]],
      // subsd: ['', [Validators.required]],
      Nsubsd : ['', [Validators.required]],
    });
  }
  reset() {
    this.angForm.controls['branch'].reset()
    this.angForm.controls['scode'].reset()
    this.angForm.controls['memno'].reset()
    this.angForm.controls['newbranch'].reset()
    this.angForm.controls['newsd'].reset()
    this.angForm.controls['Nsubsd'].reset()
    this.angForm.controls['fdate'].reset()
  }


  submit() {
    if (this.angForm.invalid) {
      return;
    }

    // let selected = this.shemeDetails[0];
    let formValues = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    // this.salaryDiv=data;

    // console.log(selected);

    const obj = {
      BANKACNO: this.banckAcNo,
      AC_TYPE: formValues.scode,
      AC_BRANCH: formValues.branch,
      AC_NEWBRANCH: formValues.newbranch,
      AC_SALDIV: this.salDiv,
      AC_NEWSALDIV: formValues.newsd,
      AC_FROMDATE:moment(formValues.fdate, 'DD/MM/YYYY').format('DD/MM/YYYY'),


    };

    // this.http.post('http://192.168.137.1:3000/employee/MemberTransferHis', obj).subscribe(
    this.http.post(this.url+'/employee/MemberTransferHis', obj).subscribe(

      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data submitted successfully',
        });
      },

    );
  }


}
