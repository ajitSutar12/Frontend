import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { glMasterService } from '../../../../shared/elements/gl-master.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-membership-cancellation',
  templateUrl: './membership-cancellation.component.html',
  styleUrls: ['./membership-cancellation.component.scss']
})
export class MembershipCancellationComponent implements OnInit {
  
 
  formSubmitted = false;
  //api 
  url = environment.base_url;

  // Created Form Group
  angForm: FormGroup;

  schemeCode:any=null
  //Scheme type variable
  schemeType: string = 'SH'
  shareSchemeType

  //Dropdown options
  scheme //scheme code from schemast(S_ACNOTYPE)
  memberNo
  TRANSACTIONNo



  dtExportButtonOptions: any = {};
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public glMasterService: glMasterService,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,) { }
  showButton: boolean = true;
  updateShow: boolean = false;

  isCash: boolean = true;

 



  ngOnInit(): void {
    this.createForm()

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
    })
   this.runTimer();
    
   }
   createForm(){
    this.angForm = this.fb.group({
      AC_TYPE:['',[Validators.required]],
      MEM_NO:['',[Validators.required]],
      TRAN_NUM:['',[Validators.required]],
    })

   }
   runTimer() {
   
  }
    
  

}
