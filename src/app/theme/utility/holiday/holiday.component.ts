import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { interval, Subscription } from 'rxjs';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
import { HolidayService } from './holiday.service'
@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HolidayComponent implements OnInit, OnDestroy {
  //api 
  url = environment.base_url;
  mem
  datesArr
  calendarOptions: CalendarOptions;
  mySubscription: Subscription
  getDataSubscription: Subscription

  constructor(private http: HttpClient, private _holiday: HolidayService) { }

  onDateClick(res) {
    if (this.datesArr.find(ob => ob['start'] === res.dateStr)) {
      let date = moment(res.dateStr).format('DD/MM/YYYY')
      Swal.fire({
        title: "Are you sure?",
        text: "Do You Want To Delete Holiday Of " + date,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#229954",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this._holiday.deleteData(res.dateStr).subscribe((data) => {
            Swal.fire("Deleted!", "Holiday has been deleted.", "success");
          }),
            (error) => {
              console.log(error);
            };
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your data is safe.", "error");
        }
      });
    }
    else {
      Swal.fire({
        text: 'Write Holiday Description Here:',
        input: 'text',
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          const dataToSend = {
            T_DESC: result.value,
            T_DATE: res.dateStr
          }
          this._holiday.postData(dataToSend).subscribe(data => {
            Swal.fire({
              icon: 'success',
              title: 'Added Holiday successfully!',
            })
          }, (error) => {
            console.log(error)
          })
        }
      });
    }
  }

  ngOnInit() {
    this.getDataSubscription = interval(1000).subscribe((x => {
      let finYear
      var sysDate = new Date()
      var year = sysDate.getFullYear();
      var month = new Date().getMonth();
      month > 2 ? finYear = year : finYear = year - 1
      var full = []
      var fullDate = `01/04/${finYear}`;
      full = fullDate.split(' ');
      var date = full[0].split(/\//);
      var newDate = date[1] + '/' + date[0] + '/' + date[2]
      var formatDate = new Date(newDate);
      // starting and end date
      let start = moment(formatDate);
      let end = moment(start).add(12, 'M');
      let starting = moment(start).format('DD.MM.YYYY')
      let ending = moment(end).format('DD.MM.YYYY')
      this.mem = [starting, ending]
      this.http.get(this.url + '/holiday/check/' + this.mem)
        .subscribe(res => {
          this.datesArr = res
        });
    }));

    this.mySubscription = interval(1000).subscribe((x => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        eventSources: this.datesArr,
        events: this.datesArr
      };
    }));
  }

  ngOnDestroy() {
    this.getDataSubscription.unsubscribe();
    this.mySubscription.unsubscribe();
  }
}