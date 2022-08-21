import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe5',
  templateUrl: './iframe5.component.html',
  styleUrls: ['./iframe5.component.scss']
})
export class Iframe5Component implements OnInit {
  @Input() url: any;
  

  constructor(
    private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit(): void {
  }

}
