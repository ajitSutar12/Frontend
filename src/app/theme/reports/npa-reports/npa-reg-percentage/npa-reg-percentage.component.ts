import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-npa-reg-percentage',
  templateUrl: './npa-reg-percentage.component.html',
  styleUrls: ['./npa-reg-percentage.component.scss']
})
export class NpaRegPercentageComponent implements OnInit {
  
  ngForm:FormGroup
  showRepo: boolean = false;
  clicked:boolean=false;


  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

view(event){

}

  close(){}
  
}
