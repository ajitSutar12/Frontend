import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loan-installment-edit-and-close-date-updation',
  templateUrl: './loan-installment-edit-and-close-date-updation.component.html',
  styleUrls: ['./loan-installment-edit-and-close-date-updation.component.scss'],
})

export class LoanInstallmentEditAndCloseDateUpdationComponent implements OnInit {
  angForm: FormGroup;

  simpleOption: Array<IOption> = this.schemeCodeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    scheme: "",
    membernofrom: "",
    tomemberno: "",
    memberno: "",
    accno: "",
    refaccno: "",
    accname: "",
    installment: "",
    newinstallment: "",
    closedate: "",
    SchemeCode: "",
    ToAcNo: "",
  };

  constructor(public schemeCodeService: SchemeCodeService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/loan-ieacdu.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme',
          data: 'scheme'
        },
        {
          title: 'Member No. From',
          data: 'membernofrom'
        },
        {
          title: 'To Member No.',
          data: 'tomemberno'
        },
        {
          title: 'Member No.',
          data: 'memberno'
        },
        {
          title: 'Account No.',
          data: 'accno'
        },
        {
          title: 'Ref A/c No.',
          data: 'refaccno'
        },
        {
          title: 'A/c Name',
          data: 'accname'
        },
        {
          title: 'Installment',
          data: 'installment'
        },
        {
          title: 'New Installment',
          data: 'newinstallment'
        },
        {
          title: 'Close Date',
          data: 'closedate'
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
          self.delClickHandler();
        });
        return row;
      }
    };
    this.runTimer();
    this.dataSub = this.schemeCodeService.loadCharacters().subscribe((options) => {
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
      Scheme: ['', [Validators.required]],
      MemNoFrom: ['', [Validators.pattern]],
      MemNoTo: ['', [Validators.pattern]],
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
    this.message.scheme = info.scheme;
    this.message.membernofrom = info.membernofrom;
    this.message.tomemberno = info.tomemberno;
    this.message.memberno = info.memberno;
    this.message.accno = info.accno;
    this.message.refaccno = info.refaccno;
    this.message.accname = info.accname;
    this.message.installment = info.installment;
    this.message.newinstallment = info.newinstallment;
    this.message.closedate = info.closedate;

    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe.',
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

