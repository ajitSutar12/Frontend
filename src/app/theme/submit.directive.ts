import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubmit]'
})
export class SubmitDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  // @HostListener('keydown.Tab')
  // @HostListener('keydown.shift.Tab')
  onFormSubmit() {

    //////OLD CODE
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
    if (invalidControl) {
      invalidControl.focus();
    }
    // if (invalidControl.tagName == 'INPUT') {
    //   if (invalidControl.value == '') {
    //     invalidControl.focus();
    //   }
    // } else if (invalidControl.tagName === 'NG-SELECT') {
    //   if (invalidControl.textContent == "") {
    //     invalidControl.focus();
    //     return;
    //   }
    // } else if (invalidControl.tagName == 'SPAN') {
    //   if (invalidControl.id == 'editbutton') {
    //     invalidControl.focusout();
    //   }
    // }
    // else if (invalidControl.tagName == 'TEXTAREA') {
    //   if (invalidControl.value == '') {
    //     invalidControl.focus();
    //   }
    // }

  }

}
