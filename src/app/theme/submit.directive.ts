import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubmit]'
})
export class SubmitDirective {
  
  constructor(private el: ElementRef) { }

  @HostListener('click')
  onFormSubmit() {
    
    const invalidControl11 = this.el.nativeElement;
    if(invalidControl11.tagName == 'BUTTON'){
      const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
      if (invalidControl) {
        invalidControl.focus();
      }
    }
  }
}
