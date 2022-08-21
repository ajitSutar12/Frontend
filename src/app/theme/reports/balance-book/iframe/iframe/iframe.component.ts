import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  @Input() url: any;

  routes: any;
  id: any;
  
  // loaders: boolean = true;
  
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

}
