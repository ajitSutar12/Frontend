import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-day-end',
  templateUrl: './day-end.component.html',
  styleUrls: ['./day-end.component.scss']
})
export class DayEndComponent implements OnInit {
  setLang: any;
 

  constructor(private translate:TranslateService,    private systemParameter: SystemMasterParametersService,
  ) {
    
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })

   }

  ngOnInit(): void {
  
   
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }

}
