import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIssueNewShares]'
})
export class IssueNewSharesDirective {

  constructor(private el: ElementRef) { }

  @HostListener('submit')
  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');

    if (invalidControl) {
      invalidControl.focus();  
    }
  }
}
