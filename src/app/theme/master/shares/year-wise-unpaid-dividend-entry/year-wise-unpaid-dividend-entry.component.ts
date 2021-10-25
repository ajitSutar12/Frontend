import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-year-wise-unpaid-dividend-entry',
  templateUrl: './year-wise-unpaid-dividend-entry.component.html',
  styleUrls: ['./year-wise-unpaid-dividend-entry.component.scss']
})

export class YearWiseUnpaidDividendEntryComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  a: Array<IOption> = this.Scheme1Service.getCharacters();
  b: Array<IOption> = this.MembernoService.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    Scheme: "",
    SalaryDivision: "",
    WarrantDate: "",
    DividendYearFrom: "",
    To: "",
    MemberFrom: "",
    MemberTo: " ",
    TotalAmount: ""
  };

  constructor(private fb: FormBuilder, public Scheme1Service: Scheme1Service, public MembernoService: MembernoService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/year-wise-unpaid-dividend-entry.json',
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
          title: 'Salary Division',
          data: 'SalaryDivision'
        }, {
          title: 'Warrant Date',
          data: 'WarrantDate'
        }, {
          title: 'Dividend Year From',
          data: 'DividendYearFrom'
        }, {
          title: 'To',
          data: 'To'
        }, {
          title: 'Member From',
          data: 'MemberFrom'
        }, {
          title: 'Member To',
          data: 'MemberTo'
        }, {
          title: 'Total Amount',
          data: 'TotalAmount'
        }, {
          title: 'Member No',
          data: 'MemberNo'
        }, {
          title: 'Member Name',
          data: 'MemberName'
        }, {
          title: 'Dividend Amount',
          data: 'DividendAmount'
        }, {
          title: 'Close Date',
          data: 'CloseDate'
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
    this.dataSub = this.Scheme1Service.loadCharacters().subscribe((options) => {
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
      Scheme: ['', [Validators.required]],
      SalaryDivision: ['', [Validators.pattern]],
      WarrantDate: ['', [Validators.required]],
      DividendYearFrom: ['', [Validators.pattern, Validators.required]],
      To: ['', [Validators.pattern, Validators.required]],
      MemberFrom: ['',],
      MemberTo: ['',],
      TotalAmount: ['',]
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
    this.message.SalaryDivision = info.SalaryDivision;
    this.message.WarrantDate = info.WarrantDate;
    this.message.DividendYearFrom = info.DividendYearFrom;
    this.message.To = info.To;
    this.message.MemberFrom = info.MemberFrom;
    this.message.MemberTo = info.MemberTo;
    this.message.TotalAmount = info.TotalAmount;
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

