import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AnyCnameRecord } from 'dns';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import Swal from 'sweetalert2';
// import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-general-meeting-present-mem',
  templateUrl: './general-meeting-present-mem.component.html',
  styleUrls: ['./general-meeting-present-mem.component.scss']
})
export class GeneralMeetingPresentMemComponent implements OnInit {
  // @ViewChild('AC_NO') AC_NO!: ElementRef<HTMLInputElement>;
  // @ViewChild('AC_NAME') AC_NAME!: ElementRef<HTMLInputElement>;

  formSubmitted = false;
  angForm: FormGroup;
  // currentYear: number;
  //ngmodel variables
  selectedScheme
  selectedmfrom
  selectedmto
  selectedItems: AnyCnameRecord;
  showRepo: boolean = false;
  clicked: boolean;
  flag: any;

  //ngfor variables
  Scheme
  m_from
  m_to
  obj: any;
  selectedDate: any;
  userData: any;
  AC_ACNOTYPE: any;
  selected: any;
  salaryDiv: any;
  wdate: any;
  // AC_NO: any;
  // AC_NAME: any;
  // shemeDetails: any


  constructor(
    private fb: FormBuilder, private http: HttpClient,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService
  ) {

  }

  ngOnInit(): void {

    this.createForm();
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      // console.log(data)
      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Scheme = filtered;
      this.getIntroducer();

    })
    this.http.post('http://192.168.1.157:7276/share-master/getSalaryDivisionCode',{}).subscribe((data1: any) => {
      this.salaryDiv = data1
      console.log(data1);
      // this.salary=data;
     
    });
  }



  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }

  getschemename: any
  getIntroducer() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.selectedScheme, branchCode]


    switch (this.getschemename) {

      case 'SH':
        this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
          this.m_from = data;
          this.m_to = data;

        })
        break;

    }

  }
  createForm() {
    this.angForm = this.fb.group({
      scheme: ['', [Validators.required]],
      wdate: ['', [Validators.required]],
      year: ['', [Validators.required]],
      myear: ['', [Validators.required]],
      memfrom: ['', [Validators.required]],
      memto: ['', [Validators.required]]

    });
  }
  selectAll() {
    const areAllSelected = this.shemeDetails.every(item => item.isSelected);
    if (areAllSelected) {
      this.unselectAll();
    } else {
      this.shemeDetails.forEach(item => item.isSelected = true);
      this.updateSelectedSchemeIds();


    }
  }
  updateSelectedSchemeIds() {
    throw new Error('Method not implemented.');
  }
  unselectAll() {
    this.shemeDetails.forEach(item => item.isSelected = false);
    this.updateSelectedSchemeIds();
  }
  isShow: boolean = false


  getCheck() {
    if (this.angForm.controls.year.value && this.angForm.controls.myear.value) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }


  }

  shemeDetails: any[]
  getYear(event) {
    let userData = JSON.parse(localStorage.getItem('user'));
    let myear = event.target.value;

    const obj = {
      "year": myear

    }
    this.http.post('http://192.168.1.157:7276/share-master/getmeetinglist', obj).subscribe((data: any) => {
      // console.log(data);

      this.shemeDetails = data

      console.log(this.shemeDetails)
    })

  }


  getdate(event) {
    const selectedDate = event.target.value;
    // console.log('Selected date:', selectedDate);
  }



  selectedIds: any = [];
  toggleSelection(item: any) {
    item.isSelected = !item.isSelected;

    if (item.isSelected) {
      this.selectedIds.push(item);
    } else {
      const index = this.selectedIds.indexOf(item.id);
      if (index !== -1) {
        this.selectedIds.splice(index, 1);
      }

    }
    this.updateSelectedSchemeIds();
  }



  
   

  submit() {
    if (this.angForm.invalid) {
      return;
    }
    let demo = this.selectedIds;
    let formValues = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
  

    const obj = {
      ACTYPE: formValues.scheme,
      MEETING_DATE: moment(formValues.wdate, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      MEETING_FROM_YEAR: formValues.year,
      MEETING_TO_YEAR: formValues.myear,
      ACNOTYPE: this.getschemename,
      USER: result.id,
      arrdata: demo,
      OFFICER_CODE: result.id,
      AC_SALARYDIVISION_CODE: this.salaryDiv.AC_SALARYDIVISION_CODE,
      SUB_SALARYDIVISION_CODE:this.salaryDiv.SUB_SALARYDIVISION_CODE,

    };

    this.http.post('http://192.168.1.157:7276/share-master/insertmeeting', obj).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data submitted successfully',
        });
      },

    );
  }


  close() {
    this.resetForm()
    this.selectedItems = null;

  }
  resetForm() {
    this.angForm.controls.scheme.reset();
    // this.angForm.controls.BRANCH_CODE.reset();
    this.angForm.controls.wdate.reset();
    this.angForm.controls.year.reset();
    this.angForm.controls.myear.reset();
    this.angForm.controls.memfrom.reset();
    this.angForm.controls.memto.reset();
    this.angForm.controls.checked.reset();



    this.selectedItems = null;

    this.showRepo = false;
    this.clicked = false;
  }

}

