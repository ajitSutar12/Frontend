import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme2Service } from '../../../../../shared/elements/scheme2.service';
import { Int2Service } from '../../../../../shared/elements/int2.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-interest-rate-for-sapd',
  templateUrl: './interest-rate-for-sapd.component.html',
  styleUrls: ['./interest-rate-for-sapd.component.scss'],
})
export class InterestRateForSAPDComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};

  //title select variables
  simpleOption: Array<IOption> = this.Scheme2Service.getCharacters();
  int: Array<IOption> = this.Int2Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public Scheme2Service: Scheme2Service, public Int2Service: Int2Service, private fb: FormBuilder) { this.createForm(); }
  message = {
    scheme_type: "",
    int_category: "",
    int_rate: "",
    date: "",
    scheme: "",
    LastIntDate: "",

  };
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/pigmy-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Scheme Type',
          data: 'scheme_type'
        }, {
          title: 'Interest Category',
          data: 'int_category'
        }, {
          title: 'Effective Date',
          data: 'date'
        },
        {
          title: 'Interest Rate',
          data: 'int_rate'
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
    this.dataSub = this.Scheme2Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.Int2Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      scheme: ['', [Validators.required]],
      category: ['', [Validators.required]],
      LastIntDate: ['', [Validators.pattern, Validators.required]],
      int_rate: ['', [Validators.required]],
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
    this.message.scheme_type = info.scheme_type;
    this.message.int_category = info.int_category;
    this.message.int_rate = info.int_rate;
    this.message.date = info.date;
    this.showButton = false;
    this.updateShow = true;
  }
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.scheme_type = info.scheme_type;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete scheme type." + this.message.scheme_type + "  data",
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
