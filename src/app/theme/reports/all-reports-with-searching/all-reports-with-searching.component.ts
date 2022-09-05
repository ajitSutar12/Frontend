import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { first } from 'rxjs/operators';
import { Subject } from "rxjs";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
// import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';



@Component({
  selector: 'app-all-reports-with-searching',
  templateUrl: './all-reports-with-searching.component.html',
  styleUrls: ['./all-reports-with-searching.component.scss']
})
export class AllReportsWithSearchingComponent implements OnInit {
   // Created Form Group
   angForm: FormGroup;
  scheme: any[];
  formSubmitted:false;
  toduedate;
  fromduedate;
  ngscheme
  selectedValue
  fromAC
  ngfromac
  ToAC
  ngtoac
  maxDate: Date;
  minDate: Date;
  showButton :boolean =true;

  constructor(private fb: FormBuilder, 
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    // private ownbranchMasterService: OwnbranchMasterService,
    ) { 
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
    }

  ngOnInit(): void {
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = allscheme;
    })
    // this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
    //   this.branch_code = data;
    // })
  }
  createForm() {
    this.angForm = this.fb.group({
      FROM_DATE:[""],
      TO_DATE:[""],
      REPOTYPE:[""],
      BRANCH:[""],
      AC_TYPE:[""],
      FROM_AC:[""],
      TO_AC:[""],
     
    });
  }
}
