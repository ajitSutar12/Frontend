import { AfterViewInit, ContentChild, ContentChildren, Directive, ElementRef, HostListener, QueryList } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { NgSelectComponent } from "@ng-select/ng-select";
import { event } from 'jquery';
import { InvoiceListComponent } from './extension/invoice/invoice-list/invoice-list.component';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  @ContentChild(NgSelectComponent) select: NgSelectComponent;
  @ContentChildren(NgSelectComponent) ngselect: QueryList<NgSelectComponent>;

  constructor(private el: ElementRef) { }
  @HostListener("mousedown", ['$event'])
  @HostListener('keydown.tab', ['$event'])
  // @HostListener('keydown.shift.Tab', ['$event'])
  @HostListener("click", ['$event'])
  onFormSubmit(event) {
    // debugger
    const invalidControl = this.el.nativeElement;
    if (event.type != 'mousedown' || invalidControl.id != 'editbutton') {
      if (invalidControl.tagName == 'INPUT') {
        if (invalidControl.value == '') {
          invalidControl.focus();
        }
        //  else 
        //  if(invalidControl.value == '') {
        //     invalidControl.focus();
        //  }
      } else if (invalidControl.tagName === 'NG-SELECT') {
        if (invalidControl.textContent == "") {

          invalidControl.focus();

          // this.select.focus()
          // // this.tagName.focus()

          return;
        }
      } else if (invalidControl.tagName == 'SPAN') {

        if (invalidControl.id == 'editbutton') {
          invalidControl.focusout();
        }
      }
      else if (invalidControl.tagName == 'TEXTAREA') {
        if (invalidControl.value == '') {
          invalidControl.focus();
        }
      }
    }
    else {

    }
  }
}
