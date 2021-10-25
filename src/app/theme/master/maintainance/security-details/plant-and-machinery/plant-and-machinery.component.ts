import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-plant-and-machinery',
  templateUrl: './plant-and-machinery.component.html',
  styleUrls: ['./plant-and-machinery.component.scss']
})

export class PlantAndMachineryComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  isnew_equip: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    subm_date: "",
    machinery_name: "",
    machinery_type: "",
    DistinctiveNumber: "",
    specification: "",
    DateofAcquisition: "",
    Suppliername: "",
    margin: "",
    remarks: "",
    new_equip: "",
    PurchasePrice: ""
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
          title: 'Machinery Name',
          data: 'machinery_name'
        }, {
          title: 'Machinery Type',
          data: 'machinery_type'
        }, {
          title: 'Distinctive Number',
          data: 'receipt_no'
        }, {
          title: 'Specification',
          data: 'specification'
        }, {
          title: 'Acquisition Date',
          data: 'premium_due_date'
        }, {
          title: 'New Equipment',
          data: 'new_equip'
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
      machinery_name: ['', [Validators.pattern, Validators.required]],
      machinery_type: ['', [Validators.pattern, Validators.required]],
      DistinctiveNumber: ['', [Validators.pattern, Validators.required]],
      Specification: ['', [Validators.pattern]],
      DateofAcquisition: [''],
      Suppliername: ['', [Validators.pattern, Validators.required]],
      PurchasePrice: ['', [Validators.pattern, Validators.required]],
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
    this.message.machinery_name = info.machinery_name;
    this.message.machinery_type = info.machinery_type;
    this.message.DistinctiveNumber = info.DistinctiveNumber;
    this.message.specification = info.specification;
    this.message.margin = info.margin;
    this.message.Suppliername = info.Suppliername;
    this.message.DateofAcquisition = info.DateofAcquisition;
    this.message.remarks = info.remarks;
    this.message.new_equip = info.new_equip;
    this.message.PurchasePrice = info.message.PurchasePrice;

    //code for chekbox
    if (this.message.new_equip == "Yes") {
      this.isnew_equip = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isnew_equip = false;   //return boolean value and display unchecked checkbox
    }

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
