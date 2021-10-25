import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-fire-policy',
  templateUrl: './fire-policy.component.html',
  styleUrls: ['./fire-policy.component.scss']
})

export class FirePolicyComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    date: "",
    policy_due: "",
    PolicyNumber: "",
    policy_amount: "",
    policy_nature: "",
    insurance_code: "",
    address: "",
    city: "",
    premium_amount: "",
    premium_due_date: "",

  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/security-details.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Submission Date',
          data: 'subm_date'
        }, {
          title: 'Policy Due Date',
          data: 'policy_due'
        }, {
          title: 'Policy No.',
          data: 'policy_no'
        }, {
          title: 'Policy Amount',
          data: 'policy_amount'
        }, {
          title: 'Policy Nature',
          data: 'policy_nature'
        }, {
          title: 'Insurance Code',
          data: 'insurance_code'
        }, {
          title: 'Address',
          data: 'address'
        }, {
          title: 'City',
          data: 'city'
        }, {
          title: 'Premium Amount',
          data: 'premium_amount'
        }, {
          title: 'Premium Due Date',
          data: 'premium_due_date'
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
      date: ['', [Validators.required]],
      policy_due: ['', [Validators.required]],
      PolicyNumber: ['', [Validators.pattern, Validators.required]],
      policy_amount: ['', [Validators.pattern, Validators.required]],
      policy_nature: ['', [Validators.pattern, Validators.required]],
      insurance_code: ['', [Validators.pattern, Validators.required]],
      city: ['', [Validators.pattern, Validators.required]],
      premium_amount: ['', [Validators.pattern, Validators.required]],
      premium_due_date: ['', [Validators.required]],
      address: ['', [Validators.pattern]]
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
    this.message.policy_due = info.policy_due;
    this.message.PolicyNumber = info.PolicyNumber;
    this.message.policy_amount = info.policy_amount;
    this.message.policy_nature = info.policy_nature;
    this.message.date = info.date;
    this.message.insurance_code = info.insurance_code;
    this.message.address = info.address;
    this.message.city = info.city;
    this.message.premium_amount = info.premium_amount;
    this.message.premium_due_date = info.premium_due_date;
    this.showButton = false;
    this.updateShow = true;
  }
  
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.date = info.date;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Submission Date." + this.message.date + "  data",
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
