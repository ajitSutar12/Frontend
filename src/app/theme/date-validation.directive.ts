import {Directive, ElementRef, HostListener, Input, OnInit,Renderer2  } from '@angular/core';
import { FormControl, NgControl, NgModel } from '@angular/forms';
import * as moment from 'moment';

@Directive({
  selector: '[appDateValidation]'
})

export class  DateValidationDirective  {
  @Input() formControl: FormControl;
  invalidControl: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

   todate: any; 
  @HostListener('focusout')

  onfocusout() {
    // debugger
    let invalidControl = this.el.nativeElement;
    invalidControl.value=invalidControl.value
    // invalidControl.value.setValue(invalidControl.value);
    // invalidControl.markAsValid();
    // if (invalidControl.value) {
    //   invalidControl.add('ng-valid');
    // }
    // this.todate=invalidControl.value;
    if (invalidControl.classList.contains('ng-invalid')) {
      
      // this.invalidControl.setValue(this.todate.value);
      // let currentDate = new Date();
      // invalidControl.value = currentDate;
      // invalidControl.value = this.todate;
      invalidControl.classList.remove('ng-invalid');
      invalidControl.classList.add('ng-valid');
    } 
   
  }
  }







  // angForm: any;
  // private ngModel: NgModel;
  // private showErrorMessage: boolean = false;
  // private errorMessage: string = '';
  //  errorMessage: string;
  // // angForm: any;
  // showErrorMessage: boolean;
  // currentDate: any;
  // systemParameter: any;
  // @Input() currentDate!: Date;

  // constructor(private elementRef: ElementRef) {}

  // @HostListener('change', ['$event'])
  // onDateChange(event: any) {
  //   const enteredDate = new Date(event.target.value);
  //   if (enteredDate > this.currentDate) {
  //     event.target.value = this.currentDate.toLocaleDateString();
  //   }
  // }
  //

  // constructor(private el: ElementRef) {}

  // @HostListener('input', ['$event'])
  // onInputEvent(event: Event) {
  //   // const enteredDate = new Date(event.target.value);
  //   const enteredDate = new Date(this.el.nativeElement.value);
  //   const currentDate = new Date();
  //   const updatedDate = this.getValidDate(enteredDate, currentDate);

  //   this.ngModel.control.setValue(updatedDate);
  //   this.showErrorMessage = false;
  //   this.errorMessage = (enteredDate > currentDate) ? 'Only the current date is allowed.' : '';
  // }

  // setToCurrentDateIfFuture() {
  //   const currentDate = new Date();
  //   const startDateControl = this.angForm.controls['START_DATE'];
  
  //   if (startDateControl.value > currentDate) {
  //     startDateControl.setValue(currentDate);
  //   }
  // }

  // constructor(private el: ElementRef) {}

  // @HostListener('blur') onBlur() {
  //   const currentDate = new Date();
  //   const enteredDate = new Date(this.el.nativeElement.value);

  //   if (enteredDate > currentDate) {
  //     this.el.nativeElement.value = currentDate.toISOString().substring(0, 10);
  //   }
  // }

 

  

  // @Input('appDateValidation') validationType: string;
  // constructor(private ngControl: NgControl) {}
  // @HostListener('input')
  // onInput() {
  //   const currentDate = new Date();
  //   const enteredDate = new Date(this.ngControl.value);
    
  //   const updatedDate = this.getValidDate(enteredDate, currentDate);
    
  //   this.ngControl.control.setValue(updatedDate);
  //   // this.toggleErrorMessage(enteredDate > currentDate);
  // }

  // private getValidDate(enteredDate: Date, currentDate: Date): Date {
  //   return enteredDate > currentDate ? currentDate : enteredDate;
  // }

  // private toggleErrorMessage(show: boolean) {
  //   const control = this.ngControl.control;
  //   const errors = control.errors || {};

  //   if (show) {
  //     errors['dateError'] = true;
  //   } else {
  //     delete errors['dateError'];
  //   }

  //   control.setErrors(Object.keys(errors).length === 0 ? null : errors);
  // }



//  updateEndDate() {
//       const currentDate = new Date();
//       const enteredDate = new Date(this.angForm.controls['END_DATE'].value);
//       this.angForm.setDate(this.currentDate.getDate());
//       const updatedDate = this.getValidDate(enteredDate, currentDate);
    
//       this.angForm.controls['END_DATE'].setValue(updatedDate);
//       this.showErrorMessage = false;
//       this.errorMessage = (enteredDate > currentDate) ? 'Only the current date is allowed.' : '';
//     }
//     updateEndDate1() {
//       const currentDate = new Date();
//             const enteredDate1 = new Date(this.angForm.controls['START_DATE'].value);    
//       const updatedDate1 = this.getValidDate(enteredDate1, currentDate);
    
//       this.angForm.controls['START_DATE'].setValue(updatedDate1);
//       this.showErrorMessage = false;
//       this.errorMessage = (enteredDate1 > currentDate) ? 'Only the current date is allowed.' : '';
//     }
    
//     getValidDate(enteredDate: Date, currentDate: Date): Date {
//       return (enteredDate > currentDate) ? currentDate : enteredDate;
//     }

    // this.maxDate = new Date();
    // this.maxDate.setDate(this.maxDate.getDate());
    // this.systemParameter.getFormData(1).subscribe(data => {
    //   this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
    //   this.maxDate = this.maxDate._d
    //   // if (this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY'))
    //   // {
    //   //   this.el.nativeElement.className = "form-control ng-untouched ng-valid"
    //   // };

    // })


// @Input() appDateValidation: string;

// constructor(private ngControl: NgControl) { }

// @HostListener('input')
// onInput() {
//   const currentDate = new Date();
//   const enteredDate = new Date(this.ngControl.value);

//   if (this.appDateValidation === 'start') {
//     this.toggleErrorMessage(enteredDate > currentDate);
//   }
// }

// private toggleErrorMessage(show: boolean) {
//   const control = this.ngControl.control;
//   const errors = control.errors || {};

//   if (show) {
//     errors['dateError'] = false;
//   } else {
//     delete errors['dateError'];
//   }

//   control.setErrors(Object.keys(errors).length === 0 ? null : errors);
// }
// }
