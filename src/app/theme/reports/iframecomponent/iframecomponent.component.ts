import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-iframecomponent',
  templateUrl: './iframecomponent.component.html',
  styleUrls: ['./iframecomponent.component.scss']
})
export class IframecomponentComponent implements OnInit {
  routes: any;
  id: any;
  

  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  // ng model variable
  ageCaldate: any = null

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  comp: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.routes.params.subscribe(params => {
      this.comp = params['data'];
    });

    
   }

  ngOnInit(): void {
  }
  src:any;
  submit(event){}
  Back($event) {
    
    debugger
    this.showRepo = true;
    let obj = this.angForm.value

    this.comp.pdf
    this.comp.url
    
    const url="http://localhost:4200/reports";
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);


  }

   close(){
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.showRepo = false;
  }

}
