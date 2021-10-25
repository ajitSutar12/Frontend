import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme1Service } from '../../../../../shared/elements/scheme1.service';
import { Int1Service } from '../../../../../shared/elements/int1.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-interest-rate-for-lacc',
  templateUrl: './interest-rate-for-lacc.component.html',
  styleUrls: ['./interest-rate-for-lacc.component.scss'],
})
export class InterestRateForLACCComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  //title select variables
  simpleOption: Array<IOption> = this.Scheme1Service.getCharacters();
  int: Array<IOption> = this.Int1Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public Scheme1Service: Scheme1Service, public Int1Service: Int1Service, private fb: FormBuilder) { this.createForm(); }
  
  message = {
    scheme: "",
    int_category: "",
    EffectiveDate: "",
  };
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/lacc-ir-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'From Amount',
          data: 'from_amount'
        }, {
          title: 'Upto Amount',
          data: 'to_amount'
        }, {
          title: 'Interest Rate',
          data: 'ir'
        }, {
          title: 'Penal Interest Rate',
          data: 'penal_ir_rate'
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
    this.dataSub = this.Scheme1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.Int1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      EffectiveDate: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      category: ['',[Validators.required]],
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
  delClickHandler(info: any): void {
    this.message.scheme = info.scheme_type;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete scheme type." + this.message.scheme + "  data",
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
  
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }
}
