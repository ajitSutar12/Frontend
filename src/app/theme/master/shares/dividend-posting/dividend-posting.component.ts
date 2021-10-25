import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dividend-posting',
  templateUrl: './dividend-posting.component.html',
  styleUrls: ['./dividend-posting.component.scss']
})

export class DividendPostingComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {};
  a: Array<IOption> = this.SchemeCodeService.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    WarrantDate: "",
    SchemeCode: "",
  };

  private dataSub: Subscription = null;

  constructor(private fb: FormBuilder, public SchemeCodeService: SchemeCodeService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/dividend-posting.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'SchemeCode'
        },
        {
          title: 'Warrant Date',
          data: 'WarrantDate'
        },],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
      //row click handler code

      /**
     * @rowCallback function for editClickHandler and delClickHandler to passes table data to there filds
     @return row 
     */
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
    this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
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
      SchemeCode: ['', [Validators.required]],
      Date: ['', [Validators.required]]
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
    this.message.WarrantDate = info.WarrantDate;
    this.message.SchemeCode = info.SchemeCode;
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
  delClickHandler(info: any): void {
    this.message.SchemeCode = info.SchemeCode;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Scheme Code." + this.message.SchemeCode + "  data",
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
