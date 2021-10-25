import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tds-interest-rate',
  templateUrl: './tds-interest-rate.component.html',
  styleUrls: ['./tds-interest-rate.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TdsInterestRateComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    date: "",
    financial_year: "",
    interest_amount: "",
    tds_rate: "",
    surcharge_rate: "",
    EffectiveDate: ""
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/depreciation-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Financial Year',
          data: 'financial_year'
        }, {
          title: 'Effect Date',
          data: 'date'
        }, {
          title: 'Interest Amount',
          data: 'interest_amount'
        }, {
          title: 'TDS Rate',
          data: 'tds_rate'
        }, {
          title: 'Surchrge Rate',
          data: 'surcharge_rate'
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
  }

  createForm() {
    this.angForm = this.fb.group({
      EffectiveDate: ['', [ Validators.required]],
      financial_year: ['', [Validators.pattern, Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      surcharge_rate: ['', [Validators.pattern]],
      tds_rate: ['', [Validators.pattern, Validators.required]],
      interest_amount: ['', [Validators.pattern, Validators.required]],
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
    this.message.date = info.date;
    this.message.financial_year = info.financial_year;
    this.message.interest_amount = info.interest_amount;
    this.message.tds_rate = info.tds_rate;
    this.message.surcharge_rate = info.surcharge_rate;
    this.message.EffectiveDate = info.EffectiveDate;
    this.showButton = false;
    this.updateShow = true;
  }
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.financial_year = info.financial_year;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete financial year." + this.message.financial_year + "  data",
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

}
