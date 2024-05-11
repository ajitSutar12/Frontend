import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-interest-passing',
  templateUrl: './interest-passing.component.html',
  styleUrls: ['./interest-passing.component.scss']
})
export class InterestPassingComponent implements OnInit {
  EditInterestCalculationTrue = true;
  CalculateInterestPassingTrue = false;
  CalculateInterestUnpassingTrue = false;
  CalculateInterestDeletionTrue = false;
  EditOverdueInterestReceivableAmountTrue=false;
  setLang:any;
  constructor(    private systemParameter: SystemMasterParametersService,
    private translate:TranslateService) { this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })}
  OpenLink(val) {
    // 
    if (val == 1) {
      this.EditInterestCalculationTrue = true;
      this.CalculateInterestPassingTrue = false;
      this.CalculateInterestUnpassingTrue = false;
      this.CalculateInterestDeletionTrue = false;    
      this.EditOverdueInterestReceivableAmountTrue=false;
    }
    if (val == 2) {
      this.EditInterestCalculationTrue = false;
      this.CalculateInterestPassingTrue = false;
      this.CalculateInterestUnpassingTrue = false;
      this.CalculateInterestDeletionTrue = false;    
      this.EditOverdueInterestReceivableAmountTrue=true;  
    }
    if (val == 3) {
      this.EditInterestCalculationTrue = false;
      this.CalculateInterestPassingTrue = true;
      this.CalculateInterestUnpassingTrue = false;
       this.CalculateInterestDeletionTrue = false;     
      this.EditOverdueInterestReceivableAmountTrue=false;

    }
    if (val == 4) {
      this.EditInterestCalculationTrue = false;
      this.CalculateInterestPassingTrue = false;
      this.CalculateInterestUnpassingTrue = true;
      this.CalculateInterestDeletionTrue = false;    
      this.EditOverdueInterestReceivableAmountTrue=false;

    }
    if (val == 5) {
      this.EditInterestCalculationTrue = false;
      this.CalculateInterestPassingTrue = false;
      this.CalculateInterestUnpassingTrue = false;
      this.CalculateInterestDeletionTrue = true;    
      this.EditOverdueInterestReceivableAmountTrue=false;

    }
  }

  ngOnInit(): void {
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
