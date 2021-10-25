import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  dtExportButtonOptions : any = {};


  january = true;
  february = false;
  march = false;
  april = false;
  may = false;
  june = false;
  july = false;
  august = false;
  september = false;
  october = false;
  november = false;
  december = false;


  OpenLink(val) {
    // debugger
    if (val == 1) {
      this.january = true;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = false;
    }
    if (val == 2) {
      this.january = false;
      this.february = true;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = false;
    }
    if (val == 3) {
      this.january = false;
      this.february = false;
      this.march = true;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = false;

    }
    if (val == 4) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = true;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = false;

    }
    if (val == 5) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = true;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = false;

    }
    if (val == 6) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = true;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = false;

    }
    if (val == 7) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = true;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = false;

    }
    if (val == 8) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = true;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = false;

    }
    if (val == 9) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = true;
      this.october = false;
      this.november = false;
      this.december = false;

    }
    if (val == 10) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = true;
      this.november = false;
      this.december = false;

    }
    if (val == 11) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = true;
      this.december = false;

    }
    if (val == 12) {
      this.january = false;
      this.february = false;
      this.march = false;
      this.april = false;
      this.may = false;
      this.june = false;
      this.july = false;
      this.august = false;
      this.september = false;
      this.october = false;
      this.november = false;
      this.december = true;

    }

  }


  constructor() { }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Position',
        data: 'position'
      }, {
        title: 'Office',
        data: 'office'
      }, {
        title: 'Age',
        data: 'age'
      }, {
        title: 'Start Date',
        data: 'date'
      }, {
        title: 'Salary',
        data: 'salary'
      }],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };
  }

}
