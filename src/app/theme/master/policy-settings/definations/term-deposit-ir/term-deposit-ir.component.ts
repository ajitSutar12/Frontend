import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme6Service } from '../../../../../shared/elements/scheme6.service';
import { Int6Service } from '../../../../../shared/elements/int6.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-term-deposit-ir',
  templateUrl: './term-deposit-ir.component.html',
  styleUrls: ['./term-deposit-ir.component.scss'],
})
export class TermDepositIRComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  //title select variables
  simpleOption: Array<IOption> = this.Scheme6Service.getCharacters();
  int: Array<IOption> = this.Int6Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public Scheme6Service: Scheme6Service, public Int6Service: Int6Service, private fb: FormBuilder) { this.createForm(); }
  message = {
    scheme: "",
    int_category: "",
    EffectiveDate: "",
  };

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
          title: 'From Days',
          data: 'from_days'
        }, {
          title: 'From Months',
          data: 'from_months'
        }, {
          title: 'To Days',
          data: 'to_days'
        }, {
          title: 'To Months',
          data: 'to_months'
        }, {
          title: 'Interest Rate',
          data: 'int_rate'
        }, {
          title: 'Penal Interest Rate',
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
          self.delClickHandler();
        });
        return row;
      }
    };
    this.runTimer();
    this.dataSub = this.Scheme6Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.Int6Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }
  createForm() {
    this.angForm = this.fb.group({
      scheme: ['', [Validators.required]],
      category: ['', [Validators.required]],
      EffectiveDate: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
    });
  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.scheme = info.scheme;
    this.message.int_category = info.int_category;
    this.showButton = false;
    this.updateShow = true;
  }

  
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }


  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe.',
          'error'
        )
      }
    })
  }
  

 
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }

}