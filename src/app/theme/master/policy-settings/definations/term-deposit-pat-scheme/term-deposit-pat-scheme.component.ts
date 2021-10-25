import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme7Service } from '../../../../../shared/elements/scheme7.service';
import { Int7Service } from '../../../../../shared/elements/int7.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-term-deposit-pat-scheme',
  templateUrl: './term-deposit-pat-scheme.component.html',
  styleUrls: ['./term-deposit-pat-scheme.component.scss'],
})
export class TermDepositPatSchemeComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  //title select variables
  simpleOption: Array<IOption> = this.Scheme7Service.getCharacters();
  int: Array<IOption> = this.Int7Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public Scheme7Service: Scheme7Service, public Int7Service: Int7Service, private fb: FormBuilder) { this.createForm(); }

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
          title: 'Months',
          data: 'months'
        }, {
          title: 'Days',
          data: 'days'
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
          self.delClickHandler();
        });
        return row;
      }
    };
    this.runTimer();
    this.dataSub = this.Scheme7Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.Int7Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      scheme: ['', [Validators.required]],
      category: ['', [Validators.required]],
      EffectiveDate: ['', [Validators.required]]
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
