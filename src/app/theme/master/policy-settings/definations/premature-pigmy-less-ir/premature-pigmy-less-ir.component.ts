import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {Subscription} from 'rxjs/Subscription';
import {Scheme3Service} from '../../../../../shared/elements/scheme3.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-premature-pigmy-less-ir',
  templateUrl: './premature-pigmy-less-ir.component.html',
  styleUrls: ['./premature-pigmy-less-ir.component.scss'],
})
export class PrematurePigmyLessIRComponent implements OnInit {
  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      scheme: ['',[Validators.required]],
      EffectiveDate: ['', [Validators.required]],
    });
  }
  submit(){
    console.log(this.angForm.valid);
  
    if(this.angForm.valid){
      console.log(this.angForm.value);
    }
  }
  dtExportButtonOptions: any = {};

  simpleOption: Array<IOption> = this.Scheme3Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  
  private dataSub: Subscription = null;


  showButton: boolean = true;
  updateShow: boolean = false;


  message = {
    scheme: "",
    srno: "",
    EffectiveDate: "",
  };

//function for edit button clicked
  editClickHandler(info: any): void {
    this.message.scheme = info.scheme;
    this.message.srno=info.srno;

    this.showButton = false;
    this.updateShow = true;
  }

//function for delete button clicked
delClickHandler(info:any):void  {
  this.message.srno=info.srno;
      Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to delete srno." + this.message.srno + "  data", 
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#229954',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your data has been deleted.',
        'success'
      )
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire(
        'Cancelled',
        'Your data is safe.',
        'error'
      )
    }
  })
}
constructor(public Scheme3Service: Scheme3Service,private fb: FormBuilder) {  this.createForm(); } 


  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/term-deposit-ir-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr No',
          data: 'srno'
        }, {
          title: 'From Months',
          data: 'from_months'
        }, {
          title: 'To Months',
          data: 'to_months'
        }, {
          title: 'Interest Rate',
          data: 'penal_int_rate'
        },
    ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
     
  //row click handler code
  rowCallback: (row: Node, data: any[] | Object, index: number) => {
    const self = this;
    $('td', row).off('click');
    $('td', row).on('click', '#editbtn', () => {
      self.editClickHandler(data);
    });
    $('td', row).on('click', '#delbtn', () => {
      self.delClickHandler(data);
    });
    return row;
  }
  };
  this.runTimer();
  this.dataSub = this.Scheme3Service.loadCharacters().subscribe((options) => {
    this.characters = options;
  });
}
runTimer() {
  const timer = setInterval(() => {
    this.timeLeft -= 1;
    if (this.timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);

}

updateData() {
this.showButton = true;
this.updateShow = false;
}
}
