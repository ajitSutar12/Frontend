import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { MultiVoucherService } from 'src/app/theme/transaction/multi-voucher/multi-voucher.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loancashcreditac-opensanctiondatewise',
  templateUrl: './loancashcreditac-opensanctiondatewise.component.html',
  styleUrls: ['./loancashcreditac-opensanctiondatewise.component.scss']
})
export class LoancashcreditacOpensanctiondatewiseComponent implements OnInit {

  angForm: FormGroup

  //ngModel
  schemeType
  schemeCode
  fromdate
  todate
  maxDate: any;
  showRepo: boolean = false;
  clicked:boolean=false;

  schemecode: any[];
  formSubmitted = false;
  iframeurl5: any = ' ';
  showLoading: boolean = false;
  report_url = environment.report_url;
  master: any;
  allSchemeCode: any;
  allScheme = new Array()//from schme master
  selectedCode: string;
  date: any;


  constructor(private fb: FormBuilder,  private SchemeCodeDropdownService: SchemeCodeDropdownService,
               private sanitizer: DomSanitizer,    private _service: MultiVoucherService, private translate:TranslateService



  ) { this.translate.setDefaultLang(environment.setLang) ;}

  ngOnInit(): void {

    this.createForm()

  //     //scheme code
  //  this.SchemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {       
  //   var filtered = data.filter(function (scheme) {
  //     return (  scheme.name == 'LN' || scheme.name == 'CC'  );
  //   });
  //   this.schemecode = filtered;
  // })
  

    //Scheme Code
    this._service.getSchemeCodeList().subscribe(data => {debugger
      this.master = data;
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]
      this.allSchemeCode = this.allSchemeCode.sort(this.dynamicSort("S_ACNOTYPE"));;

    })
  }

  createForm() {
    this.angForm = this.fb.group({
      SCHEME_TYPE: ['', [Validators.required]],
      SCHEME_CODE: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],

    });

  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }
  view(event) {
    this.showLoading = true;
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.angForm.valid) {
      let obj = this.angForm.value
      let startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let enddate: any;
      if (this.todate == obj.END_DATE) {
        enddate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        enddate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };


      this.showRepo = true;

      let scheme = obj.SCHEME_CODE

      let branch = obj.BRANCH_CODE


      this.iframeurl5 = this.report_url + "examples/BalanceBook.php?startdate='" + startdate + "'&enddate='" + enddate + "&scheme='" + scheme + "'&branch='" + branch + "&bankName=" + bankName + "";
      this.iframeurl5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl5);
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(() => { this.clicked = false });
    }
  }

  close(){
    this.resetForm()
      }
      resetForm() {
      
        this.angForm.controls.SCHEME_CODE.reset();
      
    
        this.showRepo = false;
        // this.clicked=false;
      }
      onFocus(ele: NgSelectComponent) {  
        ele.open()
      }

      IntersetHeadDate: any;
      selectedSchemeCode() {

        this.allScheme = [];
        this.master.forEach(element => {
          if (element.S_ACNOTYPE == this.selectedCode) {
            this.allScheme.push(element)
          }
        });
    
    
    
        //get Head details
        let obj = { 'code': this.selectedCode };
        let date = this.date;
        var rowData = date.split('/');
        let lastdate = Number(rowData[0]) - 1;
        // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
        this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
        // this._service.getHeadDetails(obj).subscribe(data => {
    
        //   if (data.length != 0) {
    
        //     if (!this.headflag) {
        //       this.headData = data;
        //       this.headShow = true;
        //       this.headData.forEach(element => {
        //         element['date'] = this.IntersetHeadDate;
        //         element['Amount'] = 0.00
        //       });
        //     }
        //   } else {
        //     this.headShow = false;
        //   }
        // }, err => {
        //   console.log(err);
        // })
      }
}
