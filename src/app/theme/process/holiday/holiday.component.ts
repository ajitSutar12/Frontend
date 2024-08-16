

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { interval, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { HolidayService } from './holiday.service';

export interface HolidayEvent {
  title: string;
  start: string; 
  allDay: boolean;
}

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HolidayComponent implements OnInit, OnDestroy {

  daysOfWeek = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 0, name: 'Sunday' }
  ];

  url = environment.base_url;
  mem;
  datesArr: HolidayEvent[] = [];
  calendarOptions: CalendarOptions;
  mySubscription: Subscription;
  getDataSubscription: Subscription;

  constructor(private http: HttpClient, private _holiday: HolidayService) { }

  onDateClick(res) {
    if (this.datesArr.find(ob => ob['start'] === res.dateStr)) {
      let date = moment(res.dateStr).format('DD/MM/YYYY');
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
          let data: any = localStorage.getItem('user');
          let result1 = JSON.parse(data);
          let obj = {
            date: res.dateStr,
            BRANCH_CODE: result1.branchId
          };
          this._holiday.deleteData(obj).subscribe((data) => {
            Swal.fire("Deleted!", "Holiday has been deleted.", "success");
            this.refreshCalendar();
          }, (error) => {
            console.log(error);
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your data is safe.", "error");
        }
      });
    } else {
      Swal.fire({
        text: 'Write Holiday Description Here:',
        input: 'text',
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          let data: any = localStorage.getItem('user');
          let result1 = JSON.parse(data);
          const dataToSend = {
            T_DESC: result.value,
            T_DATE: res.dateStr,
            BRANCH_CODE: result1.branchId
          };
          this._holiday.postData(dataToSend).subscribe(data => {
            Swal.fire({
              icon: 'success',
              title: 'Added Holiday successfully!',
            });
            this.refreshCalendar();
          }, (error) => {
            console.log(error);
          });
        }
      });
    }
  }

  ngOnInit() {
    this.getDataSubscription = interval(1000).subscribe((x => {
      let finYear;
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      var sysDate;
      let ssysDate = moment(result.branch.syspara.CURRENT_DATE, 'DD-MM-YYYY');
      sysDate = (ssysDate['_d']);
      var year = sysDate.getFullYear();
      var month = sysDate.getMonth();
      month > 2 ? finYear = year : finYear = year - 1;
      var full = [];
      var fullDate = `01/04/${finYear}`;
      full = fullDate.split(' ');
      var date = full[0].split(/\//);
      var newDate = date[1] + '/' + date[0] + '/' + date[2];
      var formatDate = new Date(newDate);
      // starting and end date
      let start = moment(formatDate);
      let end = moment(start).add(12, 'M');
      let starting = moment(start).format('DD.MM.YYYY');
      let ending = moment(end).format('DD.MM.YYYY');
      this.mem = [starting, ending, result.branchId];
      this.http.get<HolidayEvent[]>(this.url + '/holiday/check/' + this.mem)
        .subscribe(res => {
          this.datesArr = res;
          this.refreshCalendar();
        }, error => {
          console.error('Error fetching holiday data', error);
        });
    }));

    this.mySubscription = interval(1000).subscribe((x => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.datesArr
      };
    }));
  }

  ngOnDestroy() {
    this.getDataSubscription.unsubscribe();
    this.mySubscription.unsubscribe();
  }

  // Holiday
  selectedDay: any;
  onDaySelected(event: any) {
    this.selectedDay = event;
    this.sendDayAndYear();
    this.showConfirmationModal();
    
  }
  sendDayAndYear() {
    let selectedDayName = this.selectedDay.name;
    
    let currentYear = moment().year();

    this.http.post<any>(this.url + '/holiday/dates-for-day', { dayOfWeek: selectedDayName, year: currentYear })
      .subscribe(response => {
        this.holiday=response
        this.handleHoliday(response);
      }, error => {
        this.handleError();
      });
  }
  handleHoliday(response: any) {
    let nextDay = response.date; 
    this.datesArr.push({
      title: 'Holiday',
      start: nextDay,
      allDay: true
    });
    this.refreshCalendar();
  }

 
  handleError() {
    Swal.fire('Error!', `There was an issue processing the holiday for ${this.selectedDay.name}.`, 'error');
  }
  showConfirmationModal() {
    Swal.fire({
      title: `Are you going to declare a holiday on the upcoming ${this.selectedDay.name} this year?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.confirmHoliday();
      }
    });
  }
  holiday
  
  // confirmHoliday() {
  //   let selectedDayName = this.selectedDay.name;
  //   let selectedDayId = this.selectedDay.id;
  //   let currentYear = moment().year();

  //   let data: any = localStorage.getItem('user');
  //   let result = JSON.parse(data);
  //   let branchCode = result.branch.CODE;

    
  //   this.http.post<any>('http://192.168.1.139:7277/holiday/postholiday', {
  //     dayOfWeek: selectedDayName,
  //     id:selectedDayId,
  //     year: currentYear,
  //     branchCode: branchCode,
  //     holidayDates: this.holiday 
  //   }).subscribe(response => {
  //     let nextDay = response.date; 
  //     Swal.fire('Holiday Declared!', `Holiday on ${selectedDayName} has been declared.`, 'success');
  //     this.datesArr.push({
  //       title: 'Holiday',
  //       start: nextDay,
  //       allDay: true
  //     });
  //     this.refreshCalendar();
      
  //   }, error => {
  //     Swal.fire('Error!', `There was an issue declaring the holiday on ${selectedDayName}.`, 'error');
  //   });
  // }
  confirmHoliday() {
    let selectedDayName = this.selectedDay.name;
    let selectedDayId = 1;
    let currentYear = moment().year();

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.CODE;

    
    if (this.datesArr.length > 0) {
        
        Swal.fire({
            title: "Do you want to reassign the holiday?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                this.reassignHoliday(selectedDayName, 1, currentYear, branchCode);
            }
        });
    } else {
       
        Swal.fire({
            title: `Are you going to declare a holiday on the upcoming ${this.selectedDay.name} this year?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                this.declareHoliday(selectedDayName, selectedDayId, currentYear, branchCode);
            }
        });
    }
}

declareHoliday(selectedDayName: string, selectedDayId: number, currentYear: number, branchCode: string) {
    // Declare the holiday
    this.http.post<any>(this.url + '/holiday/postholiday', {
      dayOfWeek: selectedDayName,
      id: 1,
      year: currentYear,
      branchCode: branchCode,
      holidayDates: this.holiday 
    }).subscribe(response => {
      let nextDay = response.date;
      Swal.fire('Holiday Declared!', `Holiday on ${selectedDayName} has been declared.`, 'success');
      
    
      this.datesArr.push({
        title: 'Holiday',
        start: nextDay,
        allDay: true
      });
       
      this.refreshCalendar();
      
    }, error => {
      Swal.fire('Error!', `There was an issue declaring the holiday on ${selectedDayName}.`, 'error');
    });
}

reassignHoliday(selectedDayName: string, selectedDayId: number, currentYear: number, branchCode: string) {
    
    this.datesArr = this.datesArr.filter(event => event.title !== 'Holiday');

    // Reassign the holiday
    this.http.post<any>(this.url + '/holiday/postholiday', {
      dayOfWeek: selectedDayName,
      id: 1,
      year: currentYear,
      branchCode: branchCode,
      holidayDates: this.holiday 
    }).subscribe(response => {
      let nextDay = response.date;
      Swal.fire('Holiday Declared!', `Holiday on ${selectedDayName} has been declared.`, 'success');
      
      // Add the new holiday to the dates array
      this.datesArr.push({
        title: 'Holiday',
        start: nextDay,
        allDay: true
      });
      
    
      this.refreshCalendar();
      
    }, error => {
      Swal.fire('Error!', `There was an issue declaring the holiday on ${selectedDayName}.`, 'error');
    });
}

  getNextOccurrenceOfDay(dayName: string): string {
    const dayIndexMap = {
      'Sunday': 0,
      'Monday': 1,
      'Tuesday': 2,
      'Wednesday': 3,
      'Thursday': 4,
      'Friday': 5,
      'Saturday': 6
    };

    let today = moment();
    let dayIndex = dayIndexMap[dayName];

   
    let nextDay = today.day(dayIndex);
    if (nextDay.isBefore(today, 'day')) {
      nextDay.add(1, 'week');
    }

    return nextDay.format('YYYY-MM-DD');
  }

  refreshCalendar() {
    this.calendarOptions = {
      ...this.calendarOptions,
      events: [...this.datesArr]
    };
  }

}
