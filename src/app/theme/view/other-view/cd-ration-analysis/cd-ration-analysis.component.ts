import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { EditInterestCalculationService } from 'src/app/theme/utility/interest-posting/interest-passing/edit-interest-calculation/edit-interest-calculation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cd-ration-analysis',
  templateUrl: './cd-ration-analysis.component.html',
  styleUrls: ['./cd-ration-analysis.component.scss']
})
export class CdRationAnalysisComponent implements OnInit {

  url = environment.base_url;

  angForm: FormGroup;
  date
  branch_codeList
  branch_code: any[]//from ownbranchmaster
  tableData:any;
  showMsg:boolean = true;
  warrentDate
  totalAmt:any = 0.00;
  // dtExportButtonOptions: any = {};
  constructor(private fb: FormBuilder, private ownbranchMasterService: OwnbranchMasterService,
    private _service : EditInterestCalculationService,private http: HttpClient,

    ) { }

  ngOnInit(): void {

    this.http.get(this.url + '/interest-passing').subscribe((data) => {
      this.warrentDate = data
    })

    this._service.interestDate().subscribe((data) => {
      debugger
      this.warrentDate = data
      console.log(this.warrentDate)
    })  


    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    
    this.createForm();
  }
  getIntDetails(event) {

    this._service.getDataForPassing(event).subscribe(data=>{
      this.tableData = data;
      console.log(this.tableData)
      if(this.tableData.length == 0){
        this.showMsg = true;
      }else{
        this.showMsg = false;
      }
    },err=>{
      
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      DATE: ['', [Validators.required]],
      BRANCH: ['', [Validators.pattern]],
    
    });
  }
  
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
}
