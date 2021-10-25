import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pleadge-stock',
  templateUrl: './pleadge-stock.component.html',
  styleUrls: ['./pleadge-stock.component.scss']
})
export class PleadgeStockComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    subm_date: "",
    StorageMemoNo: "",
    GoodsQuantity: "",
    ManufacturerMill: "",
    Description: "",
    BalanceQuantity: "",
    Rate: "",
    Value: "",
    margin: "",
    remarks: "",
    DateofStorage: ""
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
          title: 'Storage Memo No.',
          data: 'receipt_no'
        }, {
          title: 'Storage Date.',
          data: 'stmt_date'
        }, {
          title: 'Goods Qty',
          data: 'no_of_shares'
        }, {
          title: 'Manufacturer/Mill',
          data: 'name'
        }, {
          title: 'Description',
          data: 'article_make'
        }, {
          title: 'Bal. Quantity',
          data: 'rm_margin'
        }, {
          title: 'Rate',
          data: 'raw_material'
        }, {
          title: 'Value',
          data: 'total_value'
        }, {
          title: 'Margin %',
          data: 'margin'
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
      StorageMemoNo: ['', [Validators.pattern, Validators.required]],
      DateofStorage: ['', [Validators.required]],
      GoodsQuantity: ['', [Validators.pattern, Validators.required]],
      ManufacturerMill: ['', [Validators.pattern]],
      Description: ['', [Validators.pattern]],
      BalanceQuantity: ['', [Validators.pattern, Validators.required]],
      Rate: ['', [Validators.pattern]],
      Value: ['', [Validators.pattern]],
      margin: ['', [Validators.pattern]],
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
    this.message.subm_date = info.subm_date;
    this.message.StorageMemoNo = info.StorageMemoNo;
    this.message.GoodsQuantity = info.GoodsQuantity;
    this.message.ManufacturerMill = info.ManufacturerMill;
    this.message.Description = info.Description;
    this.message.BalanceQuantity = info.BalanceQuantity;
    this.message.DateofStorage = info.DateofStorage;
    this.message.Rate = info.Rate;
    this.message.Value = info.Value;
    this.message.margin = info.margin;
    this.message.remarks = info.remarks;
    this.showButton = false;
    this.updateShow = true;
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





  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

}
