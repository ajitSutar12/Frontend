import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import * as moment from 'moment';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-loancashcreditac-opensanctiondatewise',
  templateUrl: './loancashcreditac-opensanctiondatewise.component.html',
  styleUrls: ['./loancashcreditac-opensanctiondatewise.component.scss']
})
export class LoancashcreditacOpensanctiondatewiseComponent implements OnInit {
 // Created Form Group
  ngForm: FormGroup
// for dropdown ng module
  ngbranch: any = null;
//dropdown
  branchOption: any[];
 // Date variables
 todate: any = null;
 fromdate: any = null
 maxDate: Date;
 minDate: Date;
 bsValue = new Date();
 equal: any
 startfrom
 startto
 //iframe
 formSubmitted = false;
  clicked:boolean=false;
  showRepo: boolean = false;
   //api
   url = environment.base_url;
   report_url = environment.report_url;
   iframe5url: any = ' ';
  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService)
    {
     this.todate = moment().format('DD/MM/YYYY');
     this.maxDate = new Date();
     this.minDate = new Date();
     this.minDate.setDate(this.minDate.getDate() - 1);
     this.maxDate.setDate(this.maxDate.getDate())
    }

  ngOnInit(): void { 
    this.createForm();
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
     this.branchOption = data;
   });
      //display date
      this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
        this.todate = data.CURRENT_DATE;
      });
    //for starting and ending date
      this.systemParameter.getFormData(1).subscribe(data => {
        let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
        this.todate = data.CURRENT_DATE
        this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
        this.fromdate = this.fromdate._d
      })
      }
      end(){}
    createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      radio_sort:new FormControl('opening'),
      radio_sortt:new FormControl('opening date'),
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      NEWPAGE:[''],
      NEWPAGEE:['']

    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }
  src: any;
  view(event) {
    
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if(this.ngForm.valid){
    let obj = this.ngForm.value
    this.showRepo = true;
    let startdate =  moment(obj.FROM_DATE).format('DD/MM/YYYY');
    let enddate:any;
    if (this.todate == obj.END_DATE) {
      enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    }
    else
    { 
      enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    };
    
    let branch = obj.BRANCH_CODE
    let date =obj.radio_sort
    let sort =obj.radio_sortt
    this.iframe5url=this.report_url+"examples/AgentwisePigmyBalList.php?startdate='" + startdate + "'&enddate='" + enddate +  + "&branch="+ branch +"'&bankName=" + bankName + "" + "'&date=" + date +"'&sort=" +sort ;
    this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    
   
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
  
}

close(){
  this.resetForm()
}

// Reset Function
resetForm() {
  this.ngForm.controls.radio_sort.reset();
  this.ngForm.controls.radio_sortt.reset();
  this.showRepo = false;
  this.clicked=false;
}
}
