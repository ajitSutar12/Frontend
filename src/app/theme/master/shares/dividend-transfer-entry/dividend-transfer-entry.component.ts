import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dividend-transfer-entry',
  templateUrl: './dividend-transfer-entry.component.html',
  styleUrls: ['./dividend-transfer-entry.component.scss']
})

export class DividendTransferEntryComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  a: Array<IOption> = this.Scheme1Service.getCharacters();
  b: Array<IOption> = this.MembernoService.getCharacters();
  d: Array<IOption> = this.AcountnoService.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    Scheme: " ",
    DividendAmount: " ",
    MemberNo: " ",
    OtherAmount: "",
    TransferScheme: "",
    TransferAcNo: "",
  };

  constructor(private fb: FormBuilder, public Scheme1Service: Scheme1Service, public MembernoService: MembernoService, public AcountnoService: AcountnoService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/dividend-transfer-entry.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme',
          data: 'Scheme'
        }, {
          title: 'Dividend Amount',
          data: 'DividendAmount'
        }, {
          title: 'Member No.',
          data: 'MemberNo'
        },
        {
          title: 'Other Amount',
          data: 'OtherAmount'
        }, {
          title: 'Warrant Date',
          data: 'WarrantDate'
        }, {
          title: 'From Year',
          data: 'FromYear'
        }, {
          title: 'To Year',
          data: 'ToYear'
        },
        {
          title: 'Transfer Scheme',
          data: 'TransferScheme'
        },
        {
          title: 'Transfer A/c No',
          data: 'TransferAcNo'
        },],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
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

    this.dataSub = this.Scheme1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.MembernoService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.AcountnoService.loadCharacters().subscribe((options) => {
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
      MemberNo: ['', [Validators.required]],
      TransferScheme: ['', [Validators.required]],
      TransferAcNo: ['', [Validators.required]],
      DividendAmount: ['',],
      OtherAmount: ['',]
    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }
  /**
* @editClickHandler function for edit button clicked
*/
  editClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    this.message.DividendAmount = info.DividendAmount;
    this.message.MemberNo = info.MemberNo;
    this.message.OtherAmount = info.OtherAmount;
    this.message.TransferScheme = info.TransferScheme;
    this.message.TransferAcNo = info.TransferAcNo;
    this.showButton = false;
    this.updateShow = true;
  }

  /**
 * @updateData function for update data 
 */
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    // this.form.reset();
  }

  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete scheme." + this.message.Scheme + "  data",
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



