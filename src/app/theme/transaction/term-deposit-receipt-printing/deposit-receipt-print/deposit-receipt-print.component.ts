import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { StartingacnoService } from '../../../../shared/elements/startingacno.service';
import { EndingacnoService } from '../../../../shared/elements/endingacno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-deposit-receipt-print',
  templateUrl: './deposit-receipt-print.component.html',
  styleUrls: ['./deposit-receipt-print.component.scss'],
})
export class DepositReceiptPrintComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {}; //Datatable variable

  //Select option for title, account type
  simpleOption: Array<IOption> = this.SchemeCodeService.getCharacters();
  a: Array<IOption> = this.StartingacnoService.getCharacters();
  b: Array<IOption> = this.EndingacnoService.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  GuarantorTrue = false;
  ATrue = false;

  //object created to get data when row is clicked
  message = {
    SchemeCode: "",
    Startingac: "",
    Endingac: "",
    FromDate: "",
    ToDate: "",

  };

  constructor(public SchemeCodeService: SchemeCodeService, public StartingacnoService: StartingacnoService, public EndingacnoService: EndingacnoService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/deposit-receipt-print.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'SchemeCode'
        }, {
          title: 'Starting A/C No.',
          data: 'Startingac'
        }, {
          title: 'Ending A/C No.',
          data: 'Endingac'
        }, {
          title: 'From Date',
          data: 'FromDate'
        }, {
          title: 'To Date',
          data: 'ToDate'
        }],
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
    this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.StartingacnoService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.EndingacnoService.loadCharacters().subscribe((options) => {
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
      Startingac: ['', [Validators.required]],
      Endingac: ['', [Validators.required]],
      FromDate: [''],
      ToDate: [''],
      // title: ['',Validators.required],


    });
  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.SchemeCode = info.SchemeCode;
    this.message.Startingac = info.Startingac;
    this.message.Endingac = info.Endingac;
    this.message.FromDate = info.FromDate;
    this.message.ToDate = info.ToDate;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.SchemeCode = info.title;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete title." + this.message.SchemeCode + "  data",
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


  OpenLink(val) {
    if (val == 1) {
      this.GuarantorTrue = true;

    }
    if (val == 2) {
      this.ATrue = true;

    }
  }

  isShown: boolean = false; // hidden by default
  toggleShow() {
    this.isShown = !this.isShown;
  }

  //setup canvas
  canvas = <HTMLCanvasElement>document.getElementById('puppyCanvas');
  // ctx = this.canvas.getContext('2d');

  guessX = 0; //stores user's click on canvas
  guessY = 0; //stores user's click on canvas
  storeGuess(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    this.guessX = x;
    this.guessY = y;
    console.log("x coords: " + this.guessX + ", y coords: " + this.guessY);
  }

  // myCanvas = document.querySelector('#puppyCanvas');

  // storeGuess(event) {
  //   var rect = this.myCanvas.getBoundingClientRect();
  //   var x = event.clientX - rect.left;
  //   var y = event.clientY - rect.top;
  //   console.log("x: " + x + " y: " + y);
  // }
  
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


}
