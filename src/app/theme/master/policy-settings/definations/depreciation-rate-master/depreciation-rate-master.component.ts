import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { DepreciationService } from '../../../../../shared/elements/depreciation.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-depreciation-rate-master',
  templateUrl: './depreciation-rate-master.component.html',
  styleUrls: ['./depreciation-rate-master.component.scss'],
})
export class DepreciationRateMasterComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  //title select variables
  simpleOption: Array<IOption> = this.DepreciationService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public DepreciationService: DepreciationService, private fb: FormBuilder) { this.createForm(); }

  message = {
    CategoryCode: "",
    DepreciationRate: "",
    date: "",
    scheme: "",
    LastIntDate: "",
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/depreciation-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Category Code',
          data: 'CategoryCode'
        }, {
          title: 'Depreciation Rate',
          data: 'DepreciationRate'
        }, {
          title: 'Effected Date',
          data: 'date'
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
    this.dataSub = this.DepreciationService.loadCharacters().subscribe((options) => {
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


      date: ['', [Validators.required]],
      DepreciationRate: ['', [Validators.pattern, Validators.required]],
      category: ['', [Validators.required]],
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
    this.message.CategoryCode = info.CategoryCode;
    this.message.DepreciationRate = info.DepreciationRate;
    this.message.date = info.date;
    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.CategoryCode = info.CategoryCode;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Category Code ." + this.message.CategoryCode + "  data",
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