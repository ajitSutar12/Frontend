import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dividend-calculation',
  templateUrl: './dividend-calculation.component.html',
  styleUrls: ['./dividend-calculation.component.scss']
})

export class DividendCalculationComponent implements OnInit {

  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  a: Array<IOption> = this.SchemeCodeService.getCharacters();
  WarrantDate: Array<IOption> = this.SchemeCodeService.getCharacters();
  BranchCode: Array<IOption> = this.BranchService.getCharacters();
  b: Array<IOption> = this.MembernoService.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    SchemeCode: "",
    DivDateFrom: "",
    To: "",
    WarrantDate: "",
    BranchCode: "",
    Dividend: "",
    Bonus: " ",
    MemberFrom: "",
    To2: ""
  };

  private dataSub: Subscription = null;

  constructor(private fb: FormBuilder, public SchemeCodeService: SchemeCodeService, public BranchService: BranchService, public MembernoService: MembernoService,) { this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/dividend-calculation.json',
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
        }, {
          title: 'Div.Date From',
          data: 'DivDateFrom'
        }, {
          title: 'To',
          data: 'To'
        }, {
          title: 'Warrant Date',
          data: 'WarrantDate'
        }, {
          title: 'Branch Code',
          data: 'BranchCode'
        },
        {
          title: 'Dividend',
          data: 'Dividend'
        }, {
          title: 'Bonus',
          data: 'Bonus'
        }
        , {
          title: 'Member From',
          data: 'MemberFrom'
        }
        , {
          title: 'To',
          data: 'To2'
        }],
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
    this.dataSub = this.BranchService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.MembernoService.loadCharacters().subscribe((options) => {
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
      SchemeCode: [''],
      WarrantDate: ['', [Validators.required]],
      BranchCode: ['', [Validators.pattern]],
      MemberFrom: ['', [Validators.pattern]],
      To2: ['', [Validators.pattern]],
      Dividend: ['', [Validators.pattern, Validators.required]],
      Bonus: ['', [Validators.pattern]],
      DivDateFrom: ['', [Validators.required]],
      ToDate: ['', [Validators.required]]
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
    this.message.SchemeCode = info.SchemeCode;
    this.message.DivDateFrom = info.DivDateFrom;
    this.message.To = info.To;
    this.message.WarrantDate = info.WarrantDate;
    this.message.BranchCode = info.BranchCode;
    this.message.Dividend = info.Dividend;
    this.message.Bonus = info.Bonus;
    this.message.MemberFrom = info.MemberFrom;
    this.message.To2 = info.To2;
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

