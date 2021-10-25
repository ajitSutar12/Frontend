import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'app-data-backup',
  templateUrl: './data-backup.component.html',
  styleUrls: ['./data-backup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataBackupComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;


  constructor() { }

  ngOnInit(): void {
  }

}
