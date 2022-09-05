import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe3',
  templateUrl: './iframe3.component.html',
  styleUrls: ['./iframe3.component.scss']
})
export class Iframe3Component implements OnInit {

  @Input() url: any;

  routes: any;
  id: any;
  loaders: boolean = true;
  

//   url1

//   ngOnChanges() {

//     debugger
//     if (this.url != "http://localhost/NewReport/phpjasperxml-master/examples/BnkODRegister.php?startingcode='100001'&endingcode='100005'&branch='1'&schemecode='17'&tem_perOD='PeriodicallyOverDraft'&bankName='Swami Vivekanand Pat Ajara'"
// ){
      
//       this.url1 = "assets\Loading.gif";
//       this.loaders = false;
  
//       this.url1 = this.url
//     }
//       // this.url = ' ';
    


//     // if(this.url1 == this.url){
//     //   this.loader = false;
//     // }
//     // if(this.url1 != this.url){
//     //   this.loader = true;
//     // }

//   }

  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  // ng model variable
  ageCaldate: any = null

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  // url1 = environment.base_url;
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
  src: any;
  view(event) { }
  close($event) {
    this.showRepo = true;
    let obj = this.angForm.value
    this.resetForm()
    this.comp.pdf
    this.comp.url

  }

  //  close(){
  //   this.resetForm()
  // }

  // Reset Function
  resetForm() {
    this.showRepo = false;
  }
}
function isloader() {
  throw new Error('Function not implemented.');
}

