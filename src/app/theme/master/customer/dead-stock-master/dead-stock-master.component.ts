import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dead-stock-master',
  templateUrl: './dead-stock-master.component.html',
  styleUrls: ['./dead-stock-master.component.scss']
})
export class DeadStockMasterComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    ItemType: " ",
    ItemCode: " ",
    ItemName: " ",
    PurchaseDate: "",
    DeprCategory: " ",
    OpBalanceDate: "",
    SupplierName: " ",
    PurchaseRate: " ",
    PurchaseQty: " ",
    PurchaseValue: " ",
    OpeningAmount: " ",
    Quantity: " ",
    LastDepreciationDate: "",
    GLACNo: " ",
    TotalRecords: " "
  };

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/dead-stock-master.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Item Type',
          data: 'ItemType'
        }, {
          title: 'Item Code',
          data: 'ItemCode'
        }, {
          title: 'Item Name',
          data: 'ItemName'
        },
        {
          title: 'Purchase Date',
          data: 'PurchaseDate'
        }, {
          title: 'Depr Category',
          data: 'DeprCategory'
        },
        {
          title: 'Op.Balance Date',
          data: 'OpBalanceDate'
        }, {
          title: 'SupplierName',
          data: 'SupplierName'
        }, {
          title: 'Purchase Rate',
          data: 'PurchaseRate'
        },
        {
          title: 'Purchase Qty',
          data: 'PurchaseQty'
        },
        {
          title: 'Purchase Value',
          data: 'PurchaseValue'
        },
        {
          title: 'Opening Amount',
          data: 'OpeningAmount'
        },
        {
          title: 'Quantity',
          data: 'Quantity'
        },
        {
          title: 'Last Depreciation Date',
          data: 'LastDepreciationDate'
        },
        {
          title: 'GL A/C No',
          data: 'GLACNo'
        },
        {
          title: 'Total Records',
          data: 'TotalRecords'
        },],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
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
      ItemType: ['', [Validators.required, Validators.pattern]],
      ItemCode: [''],
      ItemName: ['', [Validators.required, Validators.pattern]],
      DeprCategory: ['', [Validators.required, Validators.pattern]],
      PurchaseDate: ['', [Validators.required]],
      SupplierName: ['', [Validators.pattern]],
      PurchaseRate: ['', [Validators.pattern]],
      PurchaseQty: ['', [Validators.pattern]],
      PurchaseValue: ['', [Validators.pattern]],
      OpeningAmount: ['', [Validators.pattern]],
      Quantity: ['', [Validators.pattern]],
      LastDepreciationDate: ['', [Validators.required]],
      GLACNo: ['', [Validators.required]],
      TotalRecords: [''],
      OpBalanceDate: [''],
    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  /**
* @editClickHandler function for edit button clicked
*/
  editClickHandler(info: any): void {
    this.message.ItemType = info.ItemType;
    this.message.ItemCode = info.ItemCode;
    this.message.ItemName = info.ItemName;
    this.message.PurchaseDate = info.PurchaseDate;
    this.message.DeprCategory = info.DeprCategory;
    this.message.OpBalanceDate = info.OpBalanceDate;
    this.message.SupplierName = info.SupplierName;
    this.message.PurchaseRate = info.PurchaseRate;
    this.message.PurchaseQty = info.PurchaseQty;
    this.message.PurchaseValue = info.PurchaseValue;
    this.message.OpeningAmount = info.OpeningAmount;
    this.message.Quantity = info.Quantity;
    this.message.LastDepreciationDate = info.LastDepreciationDate;
    this.message.GLACNo = info.GLACNo;
    this.message.TotalRecords = info.TotalRecords;
    this.showButton = false;
    this.updateShow = true;
  }

  /**
  * @updateData function for update data 
  */
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    // this.form.reset();
  }

  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
  delClickHandler(info: any): void {
    this.message.ItemType = info.ItemType;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete ItemType." + this.message.ItemType + "  data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      /* run code if our result  isConfirmed function Swal.fire open a modal window to display message
      else if result is dismiss then it cancel and open a modal window to display cancel message
       */
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
