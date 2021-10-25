import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-security-code',
  templateUrl: './security-code.component.html',
  styleUrls: ['./security-code.component.scss'],
})
export class SecurityCodeComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    security_code: "",
    description: "",
    margin: "",
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/security-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Security Code',
          data: 'security_code'
        }, {
          title: 'Description',
          data: 'description'
        }, {
          title: 'Margin',
          data: 'margin'
        }, {
          title: 'Fire Policy',
          data: 'FirePolicy'
        }, {
          title: 'Market Shares',
          data: 'MarketShares'
        }, {
          title: 'Bood Debts',
          data: 'BoodDebts'
        }, {
          title: 'Pledge Stock',
          data: 'PledgeStock'
        }, {
          title: 'Stock Statement',
          data: 'StockStatement'
        }, {
          title: 'LIC',
          data: 'LIC'
        }, {
          title: 'Customer Insurance',
          data: 'CustomerInsurance'
        }, {
          title: 'Plantand Machinery',
          data: 'PlantandMachinery'
        }, {
          title: 'Furniture & Fixture',
          data: 'Furniture&Fixture'
        }, {
          title: 'Vehicle',
          data: 'Vehicle'
        }, {
          title: 'OwnDeposit',
          data: 'OwnDeposit'
        }, {
          title: 'Land & Buildings',
          data: 'Land&Buildings'
        }, {
          title: 'Gold & Silver',
          data: 'Gold&Silver'
        }, {
          title: 'Other Securities',
          data: 'OtherSecurities'
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

      description: ['', [Validators.pattern, Validators.required]],
      security_code: ['',[ Validators.pattern, Validators.required]],
      margin: ['', [Validators.pattern]],

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
    this.message.security_code = info.security_code;
    this.message.description = info.description;
    this.message.margin = info.margin;
    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.security_code = info.security_code;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Security code." + this.message.security_code + "  data",
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
