import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-day-end',
  templateUrl: './day-end.component.html',
  styleUrls: ['./day-end.component.scss']
})
export class DayEndComponent implements OnInit {
 

  constructor(private translate:TranslateService) {this.translate.setDefaultLang(environment.setLang);

   }

  ngOnInit(): void {
   
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }

}
