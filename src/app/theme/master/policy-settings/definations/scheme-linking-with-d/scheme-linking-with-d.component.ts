import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme4Service } from '../../../../../shared/elements/scheme4.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-scheme-linking-with-d',
  templateUrl: './scheme-linking-with-d.component.html',
  styleUrls: ['./scheme-linking-with-d.component.scss'],
})

export class SchemeLinkingWithDComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  simpleOption: Array<IOption> = this.Scheme4Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public Scheme4Service: Scheme4Service, private fb: FormBuilder) { this.createForm(); }

  message = {
    scheme: "",
    code: ""
  };
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/scheme-linking-with-documents.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Code',
          data: 'code'
        }, {
          title: 'Description',
          data: 'desc'
        }, {
          title: 'Is Allowed',
          data: 'is_allowed'
        }, {
          title: 'Remark',
          data: 'remark'
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
    this.dataSub = this.Scheme4Service.loadCharacters().subscribe((options) => {
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

      scheme: ['', [Validators.required]],
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
    this.message.code = info.code;

    this.showButton = false;
    this.updateShow = true;
  }
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.code = info.code;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete code." + this.message.code + "  data",
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
