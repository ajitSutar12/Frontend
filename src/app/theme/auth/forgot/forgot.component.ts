import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  email: any
  contactNo: any
  angForm: FormGroup;


  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
this.createForm()
    // this.angForm = this.fb.group({
    //   email: [''],
    //   contactNo: ['']
    // })
  }

  createForm(){
    this.angForm = this.fb.group({
      email: [''],
      contactNo: ['']
    })
  }
  resetPassWord() {
    let formVal = this.angForm.value
    let obj = {
      'EMAIL': formVal.email,
      'MOB_NO': formVal.contactNo
    }
    this.http.post('http://192.168.1.157:7276/user-defination/checkEmailMo', obj).subscribe((data) => {
      console.log(data)
    this.router.navigate(['/otpform']);
     
    })
    console.log(obj)
  }

}
