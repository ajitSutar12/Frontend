import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-backup-data',
  templateUrl: './backup-data.component.html',
  styleUrls: ['./backup-data.component.scss']
})
export class BackupDataComponent implements OnInit {
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  showButton = true
  showDButton = false
  ngOnInit(): void {
  }
  fileUrl = this.url + '/upload/backup.sql'

  download() { 
    this.http.post(this.url + '/voucher/backupdb', '').subscribe(data => {
      if (data == 0) {
        Swal.fire('Opps', 'Failed', 'error');
        this.showButton = false
      } else {
                this.showButton = false 
              
        Swal.fire('success', 'File is ready to download', 'success');
        this.showDButton= true 
      }
        });
   
  }
}
