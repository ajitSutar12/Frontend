import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { S7Service } from '../../../../shared/elements/s7.service';
import { Ac7Service } from '../../../../shared/elements/ac7.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{environment} from '../../../../../environments/environment'

@Component({
  selector: 'app-accountwise-document-acceptance',
  templateUrl: './accountwise-document-acceptance.component.html',
  styleUrls: ['./accountwise-document-acceptance.component.scss']
})

export class AccountwiseDocumentAcceptanceComponent implements OnInit {
 url = environment.base_url;
  angForm: FormGroup;

  //Datatable

  dtExportButtonOptions: any = {};

  simpleOption: Array<IOption> = this.S7Service.getCharacters();
  Ac: Array<IOption> = this.Ac7Service.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    scheme: "",
    accno: "",
    code: "",
    description: "",
    isaccepted: "",
  };

  constructor(private fb: FormBuilder, public S7Service: S7Service, public Ac7Service: Ac7Service) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/accountwise-document-accept.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Code',
          data: 'code'
        }, {
          title: 'Description',
          data: 'description'
        }, {
          title: 'Is Accepted',
          data: 'isaccepted'
        },
        {
          title: 'Scheme',
          data: 'scheme'
        },
        {
          title: 'Account No.',
          data: 'accno'
        },
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],  //row click handler code
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
    this.dataSub = this.S7Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Ac7Service.loadCharacters().subscribe((options) => {
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
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]]
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
    this.message.accno = info.accno;
    this.message.code = info.code;
    this.message.description = info.description;
    this.message.isaccepted = info.isaccepted;
    this.showButton = false;
    this.updateShow = true;
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

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
}




