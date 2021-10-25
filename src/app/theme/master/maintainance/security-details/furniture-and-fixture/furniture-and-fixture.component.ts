import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-furniture-and-fixture',
  templateUrl: './furniture-and-fixture.component.html',
  styleUrls: ['./furniture-and-fixture.component.scss']
})

export class FurnitureAndFixtureComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  new_article: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    subm_date: "",
    article_name: "",
    article_make: "",
    DateofAcquistition: "",
    SupplierName: "",
    PurchasePrice: "",
    margin: "",
    remarks: "",
    new_article: "",
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
          title: 'Article Name',
          data: 'article_name'
        }, {
          title: 'Article Make.',
          data: 'article_make'
        }, {
          title: 'Acquisition Date',
          data: 'policy_due'
        }, {
          title: 'New Article',
          data: 'new_article'
        }, {
          title: 'Supplier Name',
          data: 'name'
        }, {
          title: 'Purchase Price',
          data: 'market_value'
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
      article_name: ['', [Validators.pattern, Validators.required]],
      article_make: ['', [Validators.pattern, Validators.required]],
      DateofAcquistition: ['', [Validators.required]],
      SupplierName: ['', [Validators.pattern]],
      PurchasePrice: ['', [Validators.pattern]],
      margin: ['', [Validators.pattern]],
      Remarks: ['', [Validators.pattern]]
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
    this.message.article_name = info.article_name;
    this.message.article_make = info.article_make;
    this.message.DateofAcquistition = info.DateofAcquistition;
    this.message.SupplierName = info.SupplierName;
    this.message.PurchasePrice = info.PurchasePrice;
    this.message.margin = info.margin;
    this.message.remarks = info.remarks;
    this.message.new_article = info.new_article;
    this.showButton = false;
    this.updateShow = true;

    if (this.message.new_article == "Yes") {
      this.new_article = true;   //return boolean value and display checked checkbox
    }
    else {
      this.new_article = false;   //return boolean value and display unchecked checkbox
    }
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