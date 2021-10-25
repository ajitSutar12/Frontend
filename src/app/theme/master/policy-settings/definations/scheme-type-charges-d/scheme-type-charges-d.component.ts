import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { ChargesTypeService } from '../../../../../shared/elements/charges-type.service';
import { Scheme5Service } from '../../../../../shared/elements/scheme5.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-scheme-type-charges-d',
  templateUrl: './scheme-type-charges-d.component.html',
  styleUrls: ['./scheme-type-charges-d.component.scss'],
})
export class SchemeTypeChargesDComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  simpleOption: Array<IOption> = this.ChargesTypeService.getCharacters();
  sch: Array<IOption> = this.Scheme5Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public ChargesTypeService: ChargesTypeService, public Scheme5Service: Scheme5Service, private fb: FormBuilder) { this.createForm(); }

  message = {
    srno: "",
    LastIntDate: "",
    scheme: "",
    Charges_GL_Account: "",
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/lacc-ir-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr. No',
          data: 'srno'
        }, {
          title: 'From',
          data: 'from_amount'
        }, {
          title: 'To',
          data: 'to_amount'
        }, {
          title: 'Charges Amount',
          data: 'charges_amount'
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
    this.dataSub = this.ChargesTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.runTimer();
    this.dataSub = this.Scheme5Service.loadCharacters().subscribe((options) => {
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

      // DocumentmasterCode: ['',Validators.pattern],
      scheme: ['',[ Validators.required]],
      charges: ['',[ Validators.required]],
      Charges_GL_Account: ['', [Validators.pattern, Validators.required]],
      LastIntDate: ['', [Validators.required]],
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
    this.message.srno = info.srno;

    this.showButton = false;
    this.updateShow = true;
  }
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.srno = info.srno;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete sr no." + this.message.srno + "  data",
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
