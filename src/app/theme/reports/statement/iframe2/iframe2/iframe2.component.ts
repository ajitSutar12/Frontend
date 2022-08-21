import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe2',
  templateUrl: './iframe2.component.html',
  styleUrls: ['./iframe2.component.scss']
})
export class Iframe2Component implements OnInit {

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
  angForm: FormGroup;
  //api
  url1 = environment.base_url;
  comp: any;
  dom: any;
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit(): void {
  }

}
