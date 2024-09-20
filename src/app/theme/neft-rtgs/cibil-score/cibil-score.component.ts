import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cibil-score',
  templateUrl: './cibil-score.component.html',
  styleUrls: ['./cibil-score.component.scss']
})
export class CibilScoreComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  public startedPlay: boolean = false;
  public show: boolean = false;
  display: string;
  videoSource = "assets/Download Report.mp4";
  // angForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  checkCibilScore(): void {
    window.open('https://apps.goultimus.in', '_blank');
  }
   //modal part code
   openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none'; // Hide the modal
    this.videoSource = '';
  }
 

  pauseVideo(videoplayer) {
    videoplayer.nativeElement.play();
    // this.startedPlay = true;
    // if(this.startedPlay == true)
    // {
    setTimeout(() => {
      videoplayer.nativeElement.pause();
      if (videoplayer.nativeElement.paused) {
        this.show = !this.show;
      }
    }, 5000);
    // }
  }
}
