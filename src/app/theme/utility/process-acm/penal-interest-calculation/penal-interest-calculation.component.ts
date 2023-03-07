import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ProcessAcmService } from '../process-acm.service';

@Component({
  selector: 'app-penal-interest-calculation',
  templateUrl: './penal-interest-calculation.component.html',
  styleUrls: ['./penal-interest-calculation.component.scss']
})
export class PenalInterestCalculationComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variaqbles
  branch_code: any;
  ngBranchCode:any=null
  ngscheme:any=null
  scheme: any[];

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private processacm: ProcessAcmService,
    
    private config: NgSelectConfig,
  ) { }

  ngOnInit(): void {

    this.createForm();
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value

    })
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'CC' || scheme.name == 'SB'|| scheme.name == 'TD'|| scheme.name == 'LN'|| scheme.name == 'CA');
      });
      this.scheme = allscheme;
    })
   

  }

  createForm(){

    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
    })
  }

  Process(){
    debugger
    let obj = this.angForm.value;
    let user = localStorage.getItem('user');
    obj['user'] = JSON.parse(user);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't process Penal Interest!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Process Start It!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.processacm.penalInterestCalculation(obj).subscribe(data=>{
          if(data.status == 'Ok'){
            this.processacm.penalInterestCalculationProcess(obj).subscribe(ele=>{
                if(ele.status == 'done'){
                  Swal.fire('Penal Insertest Process Done!');
                }
            })
          }else{
            Swal.fire({
              title: 'Interest Calcluation',
              text: "Processed For Some Of The Selected Accounts!<br>D o  Y o u  W a n t  T o   C o n t i n u e",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes'
            }).then((result) => {
              this.processacm.penalInterestCalculationProcess(obj).subscribe(ele=>{
                  if(ele.status == 'done'){
                    Swal.fire('Penal Insertest Process Done!');
                  }
              })
            })
          }
        })
      }
    })
  }
}
