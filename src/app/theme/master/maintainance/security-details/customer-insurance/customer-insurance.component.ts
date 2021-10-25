import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { InsuranceService } from '../../../../../shared/elements/insurance.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-insurance',
  templateUrl: './customer-insurance.component.html',
  styleUrls: ['./customer-insurance.component.scss']
})
export class CustomerInsuranceComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  simpleOption: Array<IOption> = this.InsuranceService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder, public InsuranceService: InsuranceService) { this.createForm(); }

  message = {
    InsuranceDate: "",
    PolicyNo: "",
    InsuranceCompany: "",
    InsuranceExpiryDate: "",
    InsuranceAmount: "",
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
          title: 'Insurance Date',
          data: 'subm_date'
        }, {
          title: 'Policy No.',
          data: 'policy_no'
        }, {
          title: 'Insurance Company',
          data: 'company_name'
        }, {
          title: 'Insurance Expiry Date',
          data: 'maturity_date'
        }, {
          title: 'Insurance Amount',
          data: 'deposit_amount'
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
    this.runTimer();
    this.dataSub = this.InsuranceService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  createForm() {
    this.angForm = this.fb.group({

      InsuranceDate: ['', [Validators.required]],
      PolicyNo: ['', [Validators.pattern, Validators.required]],
      InsuranceCompany: ['', [Validators.required]],
      InsuranceExpiryDate: ['', [Validators.required]],
      InsuranceAmount: ['', [Validators.pattern, Validators.required]]
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
    this.message.InsuranceDate = info.InsuranceDate;
    this.message.PolicyNo = info.PolicyNo;
    this.message.InsuranceCompany = info.InsuranceCompany;
    this.message.InsuranceExpiryDate = info.InsuranceExpiryDate;
    this.message.InsuranceAmount = info.InsuranceAmount;
    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.InsuranceDate = info.subm_date;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Insurance Date." + this.message.InsuranceDate + "  data",
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