import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { GoldsilverService } from '../../../../../shared/elements/goldsilver.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gold-and-silver',
  templateUrl: './gold-and-silver.component.html',
  styleUrls: ['./gold-and-silver.component.scss']
})
export class GoldAndSilverComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  simpleOption: Array<IOption> = this.GoldsilverService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder, public GoldsilverService: GoldsilverService) { this.createForm(); }

  message = {
    subm_date: "",
    GoldBagReceiptNo: "",
    GoldBoxNo: "",
    margin: "",
    article_name: "",
    TotalWeightinGram: "",
    ClearWeightinGram: "",
    deposit_amount: "",
    relation: "",
    TotalAmount: "",
    article_make: "",
    Nominee: "",
    RatePerGram: ""
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/security-details.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Item Type',
          data: 'article_make'
        }, {
          title: 'Submission Date',
          data: 'subm_date'
        }, {
          title: 'Bag Receipt No.',
          data: 'receipt_no'
        }, {
          title: 'Gold Box No.',
          data: 'acc_no'
        }, {
          title: 'Article Name',
          data: 'article_name'
        }, {
          title: 'Total Weight',
          data: 'rm_margin'
        }, {
          title: 'Clear Weight',
          data: 'wp_margin'
        }, {
          title: 'Rate',
          data: 'deposit_amount'
        }, {
          title: 'Margin %',
          data: 'margin'
        }, {
          title: 'Total Value',
          data: 'premium_amount'
        }, {
          title: 'Details',
          data: 'article_make'
        }, {
          title: 'Nominee',
          data: 'name'
        }, {
          title: 'Nominee Relation',
          data: 'relation'
        }
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
    this.dataSub = this.GoldsilverService.loadCharacters().subscribe((options) => {
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
      Item: ['', [Validators.required]],
      subm_date: ['', [Validators.required]],
      GoldBagReceiptNo: ['', [Validators.pattern, Validators.required]],
      GoldBoxNo: ['', [Validators.pattern, Validators.required]],
      margin: ['', [Validators.pattern, Validators.required]],
      article_name: ['', [Validators.pattern]],
      TotalWeightinGram: ['', [Validators.pattern, Validators.required]],
      ClearWeightinGram: ['', [Validators.pattern, Validators.required]],
      TotalAmount: ['', [Validators.pattern]],
      article_make: ['', [Validators.pattern]],
      Nominee: ['', [Validators.pattern]],
      relation: ['', [Validators.pattern]],
      RatePerGram: ['', [Validators.pattern, Validators.required]]

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
    this.message.subm_date = info.subm_date;
    this.message.GoldBagReceiptNo = info.GoldBagReceiptNo;
    this.message.margin = info.margin;
    this.message.GoldBoxNo = info.GoldBoxNo;
    this.message.deposit_amount = info.deposit_amount;
    this.message.article_name = info.article_name;
    this.message.TotalWeightinGram = info.TotalWeightinGram;
    this.message.ClearWeightinGram = info.ClearWeightinGram;
    this.message.relation = info.relation;
    this.message.TotalAmount = info.TotalAmount;
    this.message.article_make = info.article_make;
    this.message.Nominee = info.Nominee;
    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.article_make = info.article_make;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Item Type." + this.message.article_make + "  data",
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