import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SimService } from '../../../../shared/elements/sim.service'
import { S8Service } from '../../../../shared/elements/s8.service';
import { Ac8Service } from '../../../../shared/elements/ac8.service';
import { S18Service } from '../../../../shared/elements/s18.service'
import { S19Service } from '../../../../shared/elements/s19.service'
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-noting-charges',
  templateUrl: './noting-charges.component.html',
  styleUrls: ['./noting-charges.component.scss']
})

export class NotingChargesComponent implements OnInit {
  angForm: FormGroup;

  simpleOption: Array<IOption> = this.SimService.getCharacters();
  s: Array<IOption> = this.S8Service.getCharacters();
  Ac: Array<IOption> = this.Ac8Service.getCharacters();
  Ac2: Array<IOption> = this.S18Service.getCharacters();
  Ac3: Array<IOption> = this.S19Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  //Datatable

  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isAddinprinciple: boolean = false;
  isCreateglentry: boolean = false;
  isDebit: boolean = false;
  // isiscreateglentry: boolean = false;

  message = {
    schemecode: "",
    fromacc: "",
    toacc: "",
    addinprinciple: "",
    createglentry: "",
    debit: "",
    credit: "",
    notingdate: "",
    chargestype: "",
    chargesamount: "",
    transeferglaccno: "",



  };

  constructor(private fb: FormBuilder, public SimService: SimService, public S8Service: S8Service, public Ac8Service: Ac8Service, public S18Service: S18Service, public S19Service: S19Service) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/noting-changes.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'schemecode'
        }, {
          title: 'From A/c',
          data: 'fromacc'
        }, {
          title: 'To A/C',
          data: 'toacc'
        }, {
          title: 'Noting Date',
          data: 'notingdate'
        }, {
          title: 'Charges Type',
          data: 'chargestype'
        }, {
          title: 'Charges Ammount',
          data: 'chargesamount'
        },
        {
          title: 'Transefer GL A/C Account',
          data: 'transeferglaccno'
        },
        {
          title: 'Add in Principle',
          data: 'addinprinciple'
        },
        {
          title: 'Create GL Entry',
          data: 'createglentry'
        },
        {
          title: 'Debit',
          data: 'debit'
        },
        {
          title: 'Credit',
          data: 'credit'
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
    this.dataSub = this.SimService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.S8Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Ac8Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.S18Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.S19Service.loadCharacters().subscribe((options) => {
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
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      chargestype: ['', [Validators.required]],
      transeferglaccno: ['',],
      ChargesAmount: ['', [Validators.pattern]],
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
    this.message.schemecode = info.schemecode;
    this.message.fromacc = info.fromacc;
    this.message.toacc = info.toacc;
    this.message.addinprinciple = info.addinprinciple;
    this.message.createglentry = info.createglentry;
    this.message.debit = info.debit;
    this.message.credit = info.credit;
    this.message.notingdate = info.notingdate;
    this.message.chargestype = info.chargestype;
    this.message.chargesamount = info.chargesamount;
    this.message.transeferglaccno = info.transeferglaccno;
    this.showButton = false;
    this.updateShow = true;

    if (this.message.addinprinciple == "Yes") {
      this.isAddinprinciple = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isAddinprinciple = false;   //return boolean value and display unchecked checkbox
    }

    if (this.message.createglentry == "Yes") {
      this.isCreateglentry = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isCreateglentry = false;   //return boolean value and display unchecked checkbox
    }

    //code for radio button
    if (this.message.debit == "Yes") {
      this.isDebit = true;      //return boolean value and display checked radio button
    }
    else {
      this.isDebit = false;   //return boolean value and display unchecked radio button
    }
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.schemecode = info.schemecode;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete scheme Code." + this.message.schemecode + "  data",
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
