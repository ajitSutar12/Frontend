import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-t-dreceipt-type-master',
  templateUrl: './t-dreceipt-type-master.component.html',
  styleUrls: ['./t-dreceipt-type-master.component.scss'],
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
export class TDReceiptTypeMasterComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //object created to get data when row is clicked
  message = {
    ReceiptType: "",
    LastReceiptNo: ""


  };

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/t_dreceipt_type.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Receipt Type',
          data: 'ReceiptType'
        },
        {
          title: 'Last Receipt No',
          data: 'LastReceiptNo'
        }
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

  }

  createForm() {
    this.angForm = this.fb.group({

      LastReceiptNo: ['', Validators.required, Validators.pattern],
      ReceiptType: ['', Validators.required, Validators.pattern]
    });
  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }
  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;

  }
  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.ReceiptType = info.ReceiptType;
    this.message.LastReceiptNo = info.LastReceiptNo;


    this.showButton = false;
    this.updateShow = true;
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
}
