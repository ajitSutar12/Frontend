import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit(): void {
  }

  
}
