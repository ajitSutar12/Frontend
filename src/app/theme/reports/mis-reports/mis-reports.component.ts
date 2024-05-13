import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-mis-reports',
  templateUrl: './mis-reports.component.html',
  styleUrls: ['./mis-reports.component.scss']
})
export class MisReportsComponent implements OnInit {
  setLang: any;

  constructor(     private translate:TranslateService,    private systemParameter: SystemMasterParametersService,

    ) {   
      this.systemParameter.getFormData(1).subscribe(data => {
        this.setLang = data.SET_LANGUAGE
        this.translate.setDefaultLang(this.setLang);
    })    
    }

  ngOnInit(): void {
  }

}
