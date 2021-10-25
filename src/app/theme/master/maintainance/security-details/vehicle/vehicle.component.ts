import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  new_article: boolean = false;
  constructor(private fb: FormBuilder) { this.createForm(); }

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
          title: 'RTO Registration Date',
          data: 'RTORegistrationDate'
        }, {
          title: 'Vehicle Make.',
          data: 'vehicle_make'
        }, {
          title: 'Year of Manufacture',
          data: 'policy_due'
        }, {
          title: 'Vehicle No.',
          data: 'acc_no'
        }, {
          title: 'Chassis No',
          data: 'deposit_amount'
        }, {
          title: 'Date of Acquisition',
          data: 'maturity_date'
        }, {
          title: 'New Vehicle',
          data: 'new_article'
        }, {
          title: 'Supplier Name',
          data: 'name'
        }, {
          title: 'Purchase Price',
          data: 'market_value'
        },
        {
          title: 'Margin %',
          data: 'margin'
        },
        {
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
      RTORegistrationDate: ['', [Validators.required]],
      vehicle_make: ['', [Validators.pattern, Validators.required]],
      YearofManufacture: ['', [Validators.pattern, Validators.required]],
      VehicleNumber: ['', [Validators.pattern, Validators.required]],
      ChasisNumber: ['', [Validators.pattern]],
      DateofAcquisition: [''],
      SupplierName: ['', [Validators.pattern]],
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

  message = {
    subm_date: "",
    RTORegistrationDate: "",
    vehicle_make: "",
    YearofManufacture: "",
    VehicleNumber: "",
    ChasisNumber: "",
    DateofAcquisition: "",
    SupplierName: "",
    PurchasePrice: "",
    margin: "",
    new_article: "",
    remarks: "",
  };

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.subm_date = info.subm_date;
    this.message.RTORegistrationDate = info.RTORegistrationDate;
    this.message.vehicle_make = info.vehicle_make;
    this.message.YearofManufacture = info.YearofManufacture;
    this.message.VehicleNumber = info.VehicleNumber;
    this.message.ChasisNumber = info.ChasisNumber;
    this.message.DateofAcquisition = info.DateofAcquisition;
    this.message.SupplierName = info.SupplierName;
    this.message.PurchasePrice = info.PurchasePrice;
    this.message.margin = info.margin;
    this.message.new_article = info.new_article;
    this.message.remarks = info.remarks;
    this.showButton = false;
    this.updateShow = true;

    if (this.message.new_article == "Yes") {
      this.new_article = true;   //return boolean value and display checked checkbox
    }
    else {
      this.new_article = false;   //return boolean value and display unchecked checkbox
    }
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
