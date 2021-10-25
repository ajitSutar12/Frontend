import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-govt-security-and-lic',
  templateUrl: './govt-security-and-lic.component.html',
  styleUrls: ['./govt-security-and-lic.component.scss']
})
export class GovtSecurityAndLicComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    subm_date:"",
      policy_due: "",
      policy_no: "",
      margin: "",
      name: "",
      PaidUpAmount:"",
      SumAssured: "",
      premium_amount:"",
      SurrenderValue: "",
      premium_due_date: "",
      maturity_date: "",
      nominee: "",
      remarks: ""

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
          title: 'Cert/Policy Date',
          data: 'policy_due'
        }, {
          title: 'Cert/Policy No.',
          data: 'policy_no'
        }, {
          title: 'Margin %',
          data: 'margin'
        }, {
          title: 'Assured Name',
          data: 'name'
        }, {
          title: 'Paid Up Amount',
          data: 'deposit_bal'
        }, {
          title: 'Sum of Assured',
          data: 'deposit_amount'
        }, {
          title: 'Premium Amount',
          data: 'premium_amount'
        }, {
          title: 'Surrender Value',
          data: 'market_value'
        }, {
          title: 'Premium Due Date',
          data: 'premium_due_date'
        }, {
          title: 'Matured Due Date',
          data: 'maturity_date'
        }, {
          title: 'Nominee',
          data: 'nominee'
        }, {
          title: 'Remarks',
          data: 'remarks'
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
      subm_date: ['', [Validators.required]],
      policy_due: ['', [Validators.required]],
      policy_no: ['', [Validators.pattern, Validators.required]],
      margin: ['', [Validators.pattern, Validators.required]],
      name: ['', [Validators.pattern]],
      PaidUpAmount: ['', [Validators.pattern]],
      SumAssured: ['', [Validators.pattern, Validators.required]],
      premium_amount: ['', [Validators.pattern, Validators.required]],
      SurrenderValue: ['', Validators.pattern],
      premium_due_date: ['', Validators.required],
      maturity_date: ['', Validators.required],
      nominee: ['', Validators.pattern],
      remarks: ['', Validators.pattern]
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
    this.message.policy_no = info.policy_no;
    this.message.margin = info.margin;
    this.message.name = info.name;
    this.message.subm_date = info.subm_date;
    this.message.PaidUpAmount = info.PaidUpAmount;
    this.message.SumAssured = info.SumAssured;
    this.message.nominee = info.nominee;
    this.message.premium_amount = info.premium_amount;
    this.message.premium_due_date = info.premium_due_date;
    this.message.SurrenderValue = info.SurrenderValue;
    this.message.maturity_date = info.maturity_date;
    this.message.remarks = info.remarks;

    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.subm_date = info.subm_date;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Submission Date." + this.message.subm_date + "  data",
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
