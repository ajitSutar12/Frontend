import { coreDirectives } from '@agm/core/core.module';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scheme-ate',
  templateUrl: './scheme-ate.component.html',
  styleUrls: ['./scheme-ate.component.scss']
})
export class SchemeATEComponent implements OnInit {
  angForm: FormGroup;
  obj: any[];
  transferSchemeDetails: any;
  tScheme: any;
  ngacno: null;
  selectedValue
  tableData
  tableData1
  secondtable
  url = environment.base_url;
  constructor(
    private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService, 
    private http: HttpClient) {
    // this.translate.setDefaultLang(environment.setLang);
    this.selectedValue = null
  }


  //ngmodel variables
  selectedTSfrom
  selectedTSto
  selectedAcfrom
  selectedActo
  schemeCode


  //ngfor variables
  ts_From = []
  ts_To
  ac_From
  ac_To
  Schemefrom
  Schemeto
  accnoTo
  clicked = false;
  showRepo: boolean = false;


  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.Schemefrom = allscheme;


    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.ts_To = allscheme.slice(0, 18);
    })
  }


  branchid
  schemeid
  sname
  getScheme(event) {
    this.schemeid = event.value
    this.sname = event.label
    // this.selectedValue = event.name
    let obj = {
      'SCHEMAST_ID': event.value,

      // 'BRANCH_CODE':this.branchid
    }
    // this.http.post('http://192.168.1.180:3000/employee/getAcno', obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/getAcno', obj).subscribe((data: any) => {

      // console.log(data);

      this.ac_From = data
      this.ac_To = data

      // console.log(this.ac_From)
      // console.log(this.ac_To)
    })

  }
  acNo
  getAcnofrom(event) {
    this.acNo = event.acno
  }

  custid
  legbal: any[] = [];
  custmerid1: any[] = []
  Gacno
  AcNoType
  Acno
  getAcno(event) {
    let userData = JSON.parse(localStorage.getItem("user"));
    this.branchid = userData.branchId;
    let obj = {
      'SCHEMAST_ID': this.schemeid,
      'BRANCH_CODE': this.branchid,
      'AC_NO1': this.acNo,
      'AC_NO2': event.acno
    }
    // this.http.post('http://192.168.1.180:3000/employee/SchemeTransf', obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/SchemeTransf', obj).subscribe((data: any) => {

      // console.log(data);

      this.tableData = data

      this.custid = data[2].ac_custid

      for (let i = 0; i < this.tableData.length; i++) {

        this.legbal.push(this.tableData[i].LEDGER_BAL);
        this.custmerid1.push(this.tableData[i].ac_custid);
        this.AcNoType = this.tableData[i].S_ACNOTYPE;;
        this.Acno = this.tableData[i].ac_no;
        this.Gacno = this.tableData[i].S_GLACNO;
      }
      console.log(this.legbal)
      console.log('customer1', this.custmerid1)
      console.log("first tabel", this.tableData)


    })

  }
  Gacno1
  AcNoType1
  Acno1
  custmerid2: any[] = []
  sname1
  getAccountNo(event) {
   
    let obj1 = {
      'SCHEMAST_ID': this.schemeid1,

      'AC_NO1': this.acNo,
      'AC_NO2': event.acno,
      // 'acCustIds': this.custid,
      'SCHEMAST_ID2': this.schemeid,
      'BRANCH_CODE': this.branchid,

    }
    // this.http.post('http://192.168.1.180:3000/employee/SchemeTransf2', obj1).subscribe((data: any) => {
    this.http.post(this.url+'/employee/SchemeTransf2', obj1).subscribe((data: any) => {

      this.secondtable = data
      console.log("response1", this.tableData)
      console.log("response2", this.secondtable)

      for (let i = 0; i < this.secondtable.length; i++) {

        this.custmerid2.push(this.secondtable[i].ac_custid);
        this.AcNoType1 = this.secondtable[i].S_ACNOTYPE;;
        this.Acno1 = this.secondtable[i].ac_no;
        this.Gacno1 = this.secondtable[i].S_GLACNO;
      }
      console.log('customer2', this.custmerid2)


      // this only for UI view 
      let newTableObj: any[] = [];
      this.tableData.forEach(element => {
        let temp = this.secondtable.filter(ele => ele.ac_custid == element.ac_custid);
        if (temp.length == 0) {
          newTableObj.push({
            // LEDGER_BAL: "", S_APPL: "", ac_custid: "", ac_name: "", ac_no: "", acno:  ""
            S_APPL: "", ac_no: 0, ac_name: "", ac_custid: ""
          }
          );
        } else {
          newTableObj.push(temp[0])
        }
      });
      this.secondtable = newTableObj;
      console.log("new Response : ", newTableObj)
      // this only for UI view  : this code end here

      console.log('new', this.secondtable);
    })
  }

  schemeid1
  getSchemeid(event) {
    this.sname1 = event.label
    this.schemeid1 = event.value

    let obj = {
      'SCHEMAST_ID': event.value,


    }
    // this.http.post('http://192.168.1.180:3000/employee/getAcno', obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/getAcno', obj).subscribe((data: any) => {



      this.ac_From = data
      this.ac_To = data

      // console.log(this.ac_From)
      // console.log(this.ac_To)
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      schemefrom: ['', [Validators.required]],
      schemeto: ['', [Validators.required]],
      acfrom: ['', [Validators.required]],
      acto: ['', [Validators.required]],
      tramt: ['', [Validators.required]],

    });
  }
  // selectLanguage(event: any) {
  //   this.translate.use(event.target.value);
  // }



  reset() {
    // this.angForm.controls['schemefrom'].reset()
    this.angForm.controls['acfrom'].reset()
    this.angForm.controls['acto'].reset()

  }
  // close() {
  //   this.resetForm()
  // }

  // resetForm() {
  //   // this.createForm()
  //   // this.ngForm.controls. Print_Code.reset();
  //   this.showRepo = false;
  //   this.clicked = false;
  // }




  newValue
  getvalue(event: any) {
    this.newValue = event.target.value;
    console.log(this.newValue);

  }
  commonValues: any[] = [];
  value
  balance = []

  updatedLegbal: any[] = [];

  amt
  calAmt() {

    this.value = parseFloat(this.newValue);
    this.custmerid1.forEach(id => {
      if (this.custmerid2.includes(id)) {
        const index = this.custmerid1.indexOf(id);
        if (index !== -1) {
          if (this.legbal[index] !== 0) {
            if (this.legbal[index] > 0) {
              this.updatedLegbal.push(0);
            } else {
              //  this.updatedLegbal.push(this.value);
              if (Math.abs(this.legbal[index]) < this.value) {
                this.updatedLegbal.push(this.legbal[index]);
              } else {
                this.updatedLegbal.push(this.value);
              }

            }
          } else {
            this.updatedLegbal.push(this.legbal[index]);
          }
        }
      }
      else {
        this.updatedLegbal.push(0);
      }
    })





    this.secondtable.forEach((row, index) => {
      row.amount = this.updatedLegbal[index];
    });

    console.log('Updated legbal:', this.updatedLegbal);

  }
  brachid
  date
  userid
  narr
  Submit() {
    if (this.angForm.invalid) {
      return;
    }
    let formValues = this.angForm.value;
    let userData = JSON.parse(localStorage.getItem("user"));
    this.date = userData.branch.syspara.CURRENT_DATE;
    this.brachid = userData.branch.id,
    // this.userid = userData.id
    this.narr = "From " + this.sname + " To " + this.sname1
    let obj = {
      "TRAN_DATE": this.date,
      'BRANCH_CODE': this.brachid,
      // 'TRAN_ACNOTYPE': this.AcNoType,
      // 'TRAN_ACNOTYPE1': this.AcNoType1,
      'TRAN_ACTYPE': this.schemeid,
      'TRAN_ACTYPE1': this.schemeid1,
      'NARRATION': this.narr,
      // 'USER_CODE': this.userid
      // 'TRAN_ACNO': this.Acno,
      // 'TRAN_ACNO1': this.Acno1,
      // 'TRAN_GLACNO': this.Gacno,
      // 'TRAN_GLACNO1': this.Gacno1,
      'data':this.tableData,
      'data1':this.secondtable,
    };

    // this.http.post('http://192.168.1.180:3000/employee/SchemeTransferinsert', obj).subscribe(
    this.http.post(this.url+'/employee/SchemeTransferinsert', obj).subscribe(

      (response) => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data submitted successfully',
        });
      },

    );
  }

}
//  customerId: number;







