import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-iframe4',
  templateUrl: './iframe4.component.html',
  styleUrls: ['./iframe4.component.scss']
})
export class Iframe4Component implements OnInit {
  @Input() url: any;

  routes: any;
  id: any;
  

  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  // ng model variable
  ageCaldate: any = null

  showRepo: boolean = false;
  // Created Form Group
  
  //api
  url1 = environment.base_url;
  comp: any;
  dom: any;
  constructor( private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
     }

  ngOnInit(): void {
  }
  src:any;
  submit(event){}
  close($event) {
    this.resetForm()
    this.showRepo = true;
    

    this.comp.pdf
    this.comp.url
    
    // const url="http://localhost:4200/reports";
    // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);


  }

  // Reset Function
  resetForm() {
    this.showRepo = false;
  }
}
