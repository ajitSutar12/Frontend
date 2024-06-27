import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nottice',
  templateUrl: './nottice.component.html',
  styleUrls: ['./nottice.component.scss']
})
export class NotticeComponent  {
  // isShow:boolean=false
  // Noticedate
  // RECOVERY_DAYS
  // NOTICE_FEE
  // isShow1: boolean=false
  // constructor(private fb: FormBuilder,) { }
  // ngForm: FormGroup
  // createForm() {
  //   this.ngForm = this.fb.group({
  //     Loan:["", [Validators.required]],
  //     Scheme_code: ["", [Validators.required]],
  //     NOTICE_DATE:['',[Validators.required]],
  //     Auction_Date:['',[Validators.required]],
  //     RECOVERY_DAYS:['',[Validators.required]],
  //     NOTICE_FEE:['',[Validators.required]],
  //     noticetype:['',[Validators.required]],
  //     // AUCTION_TIME:['',[Validators.required]],
  //     // BAL_INT_DATE :['',[Validators.required]],

  //     from: [''],
  //     to: [''],
  //     Loan_overdue: [false],
  //   });
  // }
  // ngOnInit(): void {
  //   this.createForm()
  // }
  // show(){
  //   this.isShow=!this.isShow;
  // }
  // show1(){
  //   this.isShow1=!this.isShow1;
  // }
  // view(event) {}
  // close() {
  //   this.resetForm()

  // }
  // resetForm() {
  //   this.ngForm.controls.Scheme_code.reset();

  //   // this.showRepo = false;
  //   // this.clicked = false;
  // }
}
