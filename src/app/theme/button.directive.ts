import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2,
    private elementRef: ElementRef,) { }

  @HostListener('focusout')

  onFormSubmit() {

    debugger
    const invalidControl11 = this.el.nativeElement;
    // if(invalidControl11.tagName == 'BUTTON'){
    //   const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
    //   if (invalidControl) {
    //     invalidControl.focus();
    //   }

    // }
    if (invalidControl11.tagName == 'INPUT') {
      // if (invalidControl11.className == "ng-invalid") {
        debugger

        // this.renderer.addClass(this.elementRef.nativeElement, 'ng-valid');  
        this.renderer.removeClass(this.elementRef.nativeElement, 'ng-invalid');
      

        // invalidControl11.className == "form-control ng-valid ng-untouched "
      // }
    }

  }

}
