import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubmit]'
})
export class SubmitDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  onFormSubmit() {  
    // debugger

    // const invalidControl11 = this.el.nativeElement;

    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');

//  if (invalidControl11.tagName == 'FORM') {

//     if (invalidControl) {
//       invalidControl.focus();
//     } 

//     }
//     else 
    // if (invalidControl11.tagName == 'BUTTON') {

      if (invalidControl) {
        invalidControl.focus();
      }
  
      // }
      // else if (invalidControl11.tagName == 'SPAN') {

      //   if (invalidControl) {
      //     invalidControl.focusout();
      //   }
    
      //   }


  }

}
