import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-calculate-interest-passing',
  templateUrl: './calculate-interest-passing.component.html',
  styleUrls: ['./calculate-interest-passing.component.scss']
})
export class CalculateInterestPassingComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // date variables
  ngintDate:any=null
  warrentDate
  dtExportButtonOptions : any = {};
  selectedWarrentDate: any;
  selectedDivFromYear: any;
  selectedDivToYear: any;

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
  ) { }

  ngOnInit(): void {

    this.createForm()
    this.http.get(this.url + '/interest-passing').subscribe((data) => {
      this.warrentDate = data
    })
  }

  createForm() {
   
    this.angForm = this.fb.group({
     
      INT_DATE:['',[Validators.required]],
      
    });
  }

  getIntDetails(event) {
    this.selectedWarrentDate = event.WARRENT_DATE
    this.selectedDivFromYear = event.DIV_FROM_YEAR
    this.selectedDivToYear = event.DIV_TO_YEAR
  }

  editClickHandler(): void {

  }
  delField() {
    
  }

}
