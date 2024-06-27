import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  ngForm: FormGroup
  isShow:boolean=false
  radio: string;
  constructor(private fb: FormBuilder,private http: HttpClient,private sanitizer: DomSanitizer,) { 
  }
 

  createForm() {
    this.ngForm = this.fb.group({
      radio:[''],
      upload: [''],
      table_name:['',[Validators.required]],
      upload_d:[''],
      dtable_name:['',[Validators.required]],
      conversion:[''], 
    });
  }
  ngOnInit(): void {
    this.createForm()
  }
  oracle(event){
     let obj=this.ngForm.value
    this.radio=obj.radio
    if(this.radio=="ORACLE"){
      this.isShow=true
    }
    else{
      this.isShow=false
    }
   
  }

}
