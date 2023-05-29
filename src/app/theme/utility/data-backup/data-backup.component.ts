import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-backup',
  templateUrl: './data-backup.component.html',
  styleUrls: ['./data-backup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataBackupComponent implements OnInit {
  url = environment.base_url;

  showButton = true

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  fileUrl = this.url + '/backup/backup.sql'

  download() { 
    this.http.post(this.url + '/voucher/backupdb', '').subscribe(data => {
      if (data == 0) {
        Swal.fire('Opps', 'Failed', 'error');
        this.showButton = true
      } else {
        Swal.fire('success', 'File is ready to download', 'success');
        this.showButton = false 
      }
        });
   
  }

}
