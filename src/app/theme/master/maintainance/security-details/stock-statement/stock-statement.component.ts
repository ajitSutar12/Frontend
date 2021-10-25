import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-statement',
  templateUrl: './stock-statement.component.html',
  styleUrls: ['./stock-statement.component.scss']
})
export class StockStatementComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }
  message = {
    subm_date: "",
    stmt_date: "",
    raw_material: "",
    rm_margin: "",
    wp_goods: "",
    wp_margin: "",
    fg_cost: "",
    fg_margin: "",
    remarks: "",
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
          title: 'Statement Date',
          data: 'stmt_date'
        }, {
          title: 'Raw Materials',
          data: 'raw_material'
        }, {
          title: 'R/M Margin %',
          data: 'rm_margin'
        }, {
          title: 'Work In Progress',
          data: 'wp_goods'
        }, {
          title: 'W/P Margin %',
          data: 'wp_margin'
        }, {
          title: 'Finished Goods',
          data: 'fg_cost'
        }, {
          title: 'F/G Margin %',
          data: 'fg_margin'
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
      stmt_date: ['', [Validators.required]],
      raw_material: ['', [Validators.pattern]],
      rm_margin: ['', [Validators.pattern]],
      wp_goods: ['', [Validators.pattern]],
      fg_cost: ['', [Validators.pattern, Validators.required]],
      wp_margin: ['', [Validators.pattern]],
      fg_margin: ['', [Validators.pattern, Validators.required]],
      remarks: ['', [Validators.pattern]]
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
    this.message.stmt_date = info.stmt_date;
    this.message.raw_material = info.raw_material;
    this.message.rm_margin = info.rm_margin;
    this.message.wp_goods = info.wp_goods;
    this.message.wp_margin = info.wp_margin;
    this.message.fg_cost = info.fg_cost;
    this.message.fg_margin = info.fg_margin;
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