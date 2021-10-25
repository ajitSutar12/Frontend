import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-land-and-buildings',
  templateUrl: './land-and-buildings.component.html',
  styleUrls: ['./land-and-buildings.component.scss']
})

export class LandAndBuildingsComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    subm_date: "",
    ValuationAmount: "",
    Location: "",
    area: "",
    unit_area: "",
    CitySurveyNumber: "",
    margin: "",
    remarks: "",
    CitySurveyDate: "",
    receipt_no: "",
    RegistrationNumber:""
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
          title: 'Valuation Amount',
          data: 'market_value'
        }, {
          title: 'Location.',
          data: 'city'
        }, {
          title: 'Area',
          data: 'area'
        }, {
          title: 'Unit Area',
          data: 'unit_area'
        }, {
          title: 'Supplier Name',
          data: 'name'
        }, {
          title: 'Margin %',
          data: 'margin'
        }, {
          title: 'Margin %',
          data: 'margin'
        }, {
          title: 'Remarks',
          data: 'remarks'
        }, {
          title: 'City Survey Number',
          data: 'acc_no'
        }, {
          title: 'City Survey Date',
          data: 'maturity_date'
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
      ValuationAmount: ['', [Validators.pattern, Validators.required]],
      area: ['', [Validators.pattern, Validators.required]],
      Location: ['', [Validators.pattern, Validators.required]],
      unit_area: ['', [Validators.pattern, Validators.required]],
      margin: ['', [Validators.pattern]],
      remarks: ['', [Validators.pattern]],
      CitySurveyNumber: ['', [Validators.pattern, Validators.required]],
      CitySurveyDate: ['', [Validators.required]],
      // receipt_no: ['', [Validators.pattern, Validators.required]],
      RegistrationNumber: ['', [Validators.pattern, Validators.required]]
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
    this.message.Location = info.Location;
    this.message.area = info.area;
    this.message.unit_area = info.unit_area;
    this.message.CitySurveyNumber = info.CitySurveyNumber;
    this.message.ValuationAmount = info.ValuationAmount;
    this.message.margin = info.margin;
    this.message.remarks = info.remarks;
    this.message.receipt_no = info.receipt_no;
    this.message.CitySurveyDate = info.CitySurveyDate;
    this.message.RegistrationNumber = info.RegistrationNumber;
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
