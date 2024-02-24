import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs-compat';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-npamarking',
  templateUrl: './npamarking.component.html',
  styleUrls: ['./npamarking.component.scss']
})
export class NPAMarkingComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

   @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject<any>();

  // dropdown variaqbles
  branch_code: any;
  ngBranchCode:any=null
  ngscheme:any=null
  scheme:any

  //for date
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  warrentDate: any 
  ngwarrentDate: any = null
  fromdate: any = null
  todate: any = null

  // Transaction type variable
  ngnpaclass: any = null
  npaClass = [
    { id: 'S', label: 'Standard' },
    { id: 'SS', label: 'Sub Standard' },
    { id: 'D1', label: 'Doubtfull Assets 1' },
    { id: 'D2', label: 'Doubtfull Assets 2' },
    { id: 'D3', label: 'Doubtfull Assets 3' },
    { id: 'L', label: 'Loss Assets' }
  ]

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,private translate:TranslateService
    
  ) { 
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value

    })

    this.http.get(this.url + '/npa-marking').subscribe((data) => {
      this.warrentDate = data
    })


    
  }
  createForm(){

    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      WARRENT_DATE: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      NPA_CLASS:['']
     

    })
  }
   // checking date 
   counter = 0;
   checkDate(event){
 
     this.counter = this.counter+1;
     if(this.counter>2 && event.length!=0){
       let value1
     let value2
     value1 = moment(this.fromdate).format('DD/MM/YYYY');
     // console.log(value1)
     value2 = moment(this.todate).format('DD/MM/YYYY');
     // console.log(value2)
     if(moment(value1).isSame(value2)){
       Swal.fire(`${this.translate.instant('Swal_Msg.same_date')}`)
       this.angForm.controls['TO_DATE'].reset()
     }
     }
     
   }

}
