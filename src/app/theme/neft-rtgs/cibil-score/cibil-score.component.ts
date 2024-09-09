import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cibil-score',
  templateUrl: './cibil-score.component.html',
  styleUrls: ['./cibil-score.component.scss']
})
export class CibilScoreComponent implements OnInit {

  // angForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  checkCibilScore(): void {
    window.open('https://apps.goultimus.in', '_blank');
  }
}
