import { Component, OnInit } from '@angular/core';

import {NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ColorPickerService, Rgba} from 'ngx-color-picker';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

    const now = new Date();


@Component({
  selector: 'app-term-deposit-receipt-printing',
  templateUrl: './term-deposit-receipt-printing.component.html',
  styleUrls: ['./term-deposit-receipt-printing.component.scss']
})
export class TermDepositReceiptPrintingComponent implements OnInit {

  constructor() { }
  modelPopup: NgbDateStruct;
  ngOnInit(): void {
  }

}
