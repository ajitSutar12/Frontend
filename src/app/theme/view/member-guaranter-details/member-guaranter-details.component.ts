import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-member-guaranter-details',
  templateUrl: './member-guaranter-details.component.html',
  styleUrls: ['./member-guaranter-details.component.scss']
})
export class MemberGuaranterDetailsComponent implements OnInit {

  angForm: FormGroup;
  obj: any;
  clicked = false;
  showRepo: boolean = false;
  pendingUpdates = [];
  dataSend: any[] = [];
  bsValue = new Date();
  branch_code: any[]=[];
  selectedBranch: any;
  url = environment.base_url;
  report_url = environment.report_url;
  setLang: any;
  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _schemeService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private http: HttpClient,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,


  ) {this.systemParameter.getFormData(1).subscribe(data => {
   
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
  }) }

  //ngfor variables
  sh_Scheme
  // introducerACNo
  sharescheme
  memberNo
  g1
  // g1: any[] = ['1', '3', '4'];
  // g2 = ['2', '1', '5']
  g2

  //ngmodel variables
  selectedshScheme
  selectedmemNo
  tableData
  expiryDate

  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      //debugger
      this.branch_code = data;
      console.log('Branch Data', this.branch_code);
      this.selectedBranch = user.branchId;
    })
   
    // this.http.get('http://192.168.137.1:3000/employee/GuarSchemcode').subscribe((data: any) => {
      this.http.get(this.url+'/employee/GuarSchemcode').subscribe((data: any) => {
      console.log(data);
    this. sharescheme = data;
    // this.showTable()


  })
}


membNo
memName
ac_type
getAcNo(event){
  this.membNo=event.SHMASTER_AC_NO,
  this.memName = event.SHMASTER_AC_NAME,
  this.showTable();
}
brachcode
  showTable() {
    let userData = JSON.parse(localStorage.getItem("user"));
    this.brachcode = userData.branch.CODE
    let obj = {
      // 'data': this.dataSend,
      'MEMBER_NO': this.membNo,
      'AC_NAME':this.memName,
      'CODE':this.brachcode
    };
    // this.http.post('http://192.168.137.1:3000/employee/getGuaranterDetail',obj).subscribe((data: any) => {
      this.http.post(this.url+'/employee/getGuaranterDetail',obj).subscribe((data: any) => {
     
    console.log(data);

      this.tableData = data
      // this.expiryDate = data[2].AC_EXPIRE_DATE
      console.log(this.tableData)


    });

    // this.http.get('http://192.168.137.1:3000/employee/GurDropdown').subscribe((data: any) => {
    this.http.get(this.url+'/employee/GurDropdown').subscribe((data: any) => {

      console.log(data);

      this.g1 = data
      this.g2=data
      
      // this.expiryDate = data[2].AC_EXPIRE_DATE
      console.log("g1",this.g1)
      console.log("g2",this.g2)


    });

  }

  updateTableDataForGuranter1(selectedValue: any, rowIndex: number) {
    // Update the AC_GURANTER1 property of the selected row
    this.tableData[rowIndex].AC_GURANTER1 = selectedValue;
    console.log('Updated tableData:', this.tableData);
  }

  // getIntro(event) {
  //   this.getschemename = event.name
  //   // this.getIntroducer()
  // }
  selectAllContent($event) {
    $event.target.select();
  }
  memNo;
  memType;
  getmemNo(event) {
    
    let obj ={
        'sAppl':event.S_APPL,
        'sNAME':event.S_NAME
    }
    

    // this.http.post('http://192.168.137.1:3000/employee/GurMemberCode',obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/GurMemberCode',obj).subscribe((data: any) => {

      this.memberNo = data;
      console.log(this.memberNo);
    });
    

  }

  getschemename: any
  // getIntroducer() {
  //   let data: any = localStorage.getItem('user');
  //   let result = JSON.parse(data);
  //   let branchCode = result.branch.id;
  //   this.obj = [this.selectedshScheme, branchCode]


  //   switch (this.getschemename) {

  //     case 'SH':
  //       this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
  //         this.introducerACNo = data;
  //         //console.log(data,"gj");        

  //       })
  //       break;

  //   }

  // }


  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      memNo: ['', [Validators.required]]
    });
  }
  // tableData = [
  //   { SchemeType: 'abc' , SchemeCode: 11, AccountNumber: 1200, AccountName: 'JD', SacationAmount: 2 ,OpenDate:50,AcClosed:34,Guranter1:12,Guranter2:56,ColseDate:78,Branch:'abc', },
  //   { SchemeType: 'xyz', SchemeCode: 12, AccountNumber: 1200, AccountName: 'SP', SacationAmount: 2, OpenDate:20,AcClosed:34,Guranter1:12,Guranter2:56,ColseDate:78,Branch:'abc', }
  //   // Add more rows as needed
  // ];
  reset() {
    this.angForm.controls['branch_code'].reset()
    this.angForm.controls['scheme'].reset()
    this.angForm.controls['memNo'].reset()

  }
  close() {
    this.resetForm()
  }

  resetForm() {
    // this.createForm()
    // this.ngForm.controls. Print_Code.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  selectedIds
  submit() {
    console.log('Updated tableData:', this.tableData);
    if (this.angForm.invalid) {
      return;
    }

    // let selected = this.shemeDetails[0];
    let formValues = this.angForm.value;
    console.log(formValues);
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    // this.salaryDiv=data;

    // console.log(selected);

    // let obj = {
    //   'MEMBER_TYPE': this.memType,
    //   'MEMBER_NO': this.memNo,
    //   'EXP_DATE':this.expiryDate

    // //   // 'date': moment(formValues.date, 'DD/MM/YYYY').format('DD/MM/YYYY'),

    // };

    // this.http.post('http://192.168.137.1:3000/employee/setGuaranterDetail', obj).subscribe(
    //   (response) => {
    //     console.log(response)
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Success',
    //       text: 'Data submitted successfully',
    //     });
    //     this.showTable()
    //   },

    // );
  }
 
  update() {

    let userData = JSON.parse(localStorage.getItem("user"));
    let brachCode = userData.branch.id

    this.pendingUpdates.forEach(update => {
      Object.entries(update.changes).forEach(([field, value]) => {
        update.data[field] = value;
      });
      this.dataSend.push(update.data);
    });


    let obj = {
      'data': this.dataSend,
      'MEMBER_NO': this.membNo,
      'AC_NAME':this.memName
    };

    // this.http.post('http://192.168.137.1:3000/employee/setGuaranterDetail', obj).subscribe(
    this.http.post(this.url+'/employee/setGuaranterDetail', obj).subscribe(

      (response) => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data submitted successfully',
        });
        this.showTable()
      },

    );

    console.log(this.dataSend);
    this.pendingUpdates = [];
  }
  onCellChange(event: any, data: any, field: string) {
    let update = this.pendingUpdates.find(update => update.data === data);
    if (!update) {
      update = { data, changes: {} };
      this.pendingUpdates.push(update);
    }


    if (field === 'GUR_NO1') {
      update.changes[field] = event;
    } else if (field === 'GUR_NO2') {
      update.changes[field] = event;
    } else if (field === 'EXP_DATE') {
      update.changes[field] = event;
    } else {
      update.changes[field] = event.target.textContent.trim();
    }

  }


  // Function to open datepicker
  // openDatepicker(inputId: string) {
  //   const inputElement = document.getElementById(inputId);
  //   if (inputElement) {
  //     inputElement.focus(); // Focus on the input field to open the datepicker
  //   }
  // }

}

