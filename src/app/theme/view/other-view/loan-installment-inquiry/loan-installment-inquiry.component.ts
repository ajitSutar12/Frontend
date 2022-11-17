import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {Subscription} from 'rxjs/Subscription';
import {SelectOptionService} from '../../../../shared/elements/select-option.service'
import {Observable} from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RepayModeService } from 'src/app/shared/dropdownService/repay-mode.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-loan-installment-inquiry',
  templateUrl: './loan-installment-inquiry.component.html',
  styleUrls: ['./loan-installment-inquiry.component.scss']
})
export class LoanInstallmentInquiryComponent implements OnInit {
  repaymode
  url = environment.base_url;
  repay: string
  TDS_RATE:number;

  angForm: FormGroup;
  values1 = [
    { id: 1, name: 'Monthly' },
    { id: 2, name: 'Yearly' },
  ];
  repayModeOption: Array<IOption> = this.repayModeService.getCharacters();
  private dataSub: Subscription = null;
  characters: Array<IOption>;

  

 

 

  constructor( private fb: FormBuilder,private repayModeService: RepayModeService,) { }


 

  ngOnInit(): void {
    this.createForm()



    this.dataSub = this.repayModeService.loadCharacters().subscribe((options) => {

      this.characters = options;
    });
   
    
  }

  createForm(){
    this.angForm = this.fb.group({
      LOANAMT: ['', [Validators.required]],
      NOOFINST: ['', [Validators.required]],
      REPAYMENT: ['', [Validators.required]],
      INTERESTR: ['', [Validators.required]],
      AC_REPAYMODE: ['', [Validators.required]],
      TDS_RATE: ["", [Validators.pattern]],
    })
  }


  decimalAllContent($event) {
    
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    this.angForm.patchValue({
      LOANAMT: $event.target.value
    })
  }

  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele <= 50) {
    } else {
      Swal.fire("Invalid Input", "Please insert values below 50", "error");
      this.angForm.patchValue({
        TDS_RATE: 0
      })
    }
  }

 
}
