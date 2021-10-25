
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-market-shares',
  templateUrl: './market-shares.component.html',
  styleUrls: ['./market-shares.component.scss']
})
export class MarketSharesComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  constructor(private fb: FormBuilder) { this.createForm(); }
  message = {
    released_by: "",
    released_on: "",
    updated_by: "",
    no_of_shares: "",
    market_value: "",
    company_name: "",
    company_code: "",
    subm_date: "",
    margin: "",
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
          title: 'Co. Code',
          data: 'company_code'
        }, {
          title: 'Company Name ',
          data: 'company_name'
        }, {
          title: 'Market Value',
          data: 'market_value'
        }, {
          title: 'Margin %',
          data: 'margin'
        }, {
          title: 'No. of Shares',
          data: 'no_of_shares'
        }, {
          title: 'Subm. Date',
          data: 'subm_date'
        }, {
          title: 'Updated By',
          data: 'updated_by'
        }, {
          title: 'Release Date',
          data: 'released_on'
        }, {
          title: 'Release By',
          data: 'released_by'
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
      company_code: ['', [Validators.pattern, Validators.required]],
      company_name: ['', [Validators.pattern, Validators.required]],
      market_value: ['', [Validators.pattern, Validators.required]],
      margin: ['', [Validators.pattern, Validators.required]],
      no_of_shares: ['', [Validators.pattern]],
      updated_by: ['', [Validators.pattern, Validators.required]],
      released_on: ['', [Validators.required]],
      released_by: ['', [Validators.pattern, Validators.required]]
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
    this.message.released_by = info.released_by;
    this.message.released_on = info.released_on;
    this.message.updated_by = info.updated_by;
    this.message.no_of_shares = info.no_of_shares;
    this.message.market_value = info.market_value;
    this.message.company_name = info.company_name;
    this.message.subm_date = info.subm_date;
    this.message.company_code = info.company_code;
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
    this.message.company_code = info.company_code;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete company code." + this.message.company_code + "  data",
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