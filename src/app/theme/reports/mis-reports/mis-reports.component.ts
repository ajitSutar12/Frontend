import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mis-reports',
  templateUrl: './mis-reports.component.html',
  styleUrls: ['./mis-reports.component.scss']
})
export class MisReportsComponent implements OnInit {

  constructor(     private translate:TranslateService
    ) {     this.translate.setDefaultLang(environment.setLang) ;
    }

  ngOnInit(): void {
  }

}
