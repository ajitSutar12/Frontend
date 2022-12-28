import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-iframe1',
  templateUrl: './iframe1.component.html',
  styleUrls: ['./iframe1.component.scss']
})
export class Iframe1Component implements OnInit{
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
  constructor( private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer) {debugger
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
     }

  ngOnInit(): void {
  }
src:any;
  view(event){}
  close($event) {
    this.showRepo = true;
    let obj = this.angForm.value
    this.resetForm()
    this.comp.pdf
    this.comp.url
    
    // const url="http://localhost:4200/reports";
    // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);


  }

  //  close(){
  //   this.resetForm()
  // }

  // Reset Function
  resetForm() {
    this.showRepo = false;
  }
}
