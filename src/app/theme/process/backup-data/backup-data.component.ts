import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-backup-data',
  templateUrl: './backup-data.component.html',
  styleUrls: ['./backup-data.component.scss']
})
export class BackupDataComponent implements OnInit {
  url = environment.base_url;
  modalClass: string = 'modalHide';
  constructor(private http: HttpClient,private translate:TranslateService) { this.translate.setDefaultLang(environment.setLang);}

  showButton = true
  showDButton = false
  ngOnInit(): void {
  }
  fileUrl = this.url + '/upload/backup.sql'

  download() {
    this.modalClass = 'modalShow';
    this.http.post(this.url + '/voucher/backupdb', '').subscribe(data => {
      if (data == 0) {
        this.modalClass = 'modalHide';
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.Failed')}`, 'error');
        this.showButton = false
      } else {
        setTimeout(() => {
          this.showButton = false
          this.modalClass = 'modalHide';
          Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.ready_to_download')}`, 'success');
          this.showDButton = true
        }, 60000); // Hiding loader after 1 minute

      }
    });

  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
