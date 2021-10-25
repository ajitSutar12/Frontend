import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {  Scheme16Service} from '../../../shared/elements/scheme16.service';
import {  Scheme17Service} from '../../../shared/elements/scheme17.service';



@Component({
  selector: 'app-gold-silver-return-entry',
  templateUrl: './gold-silver-return-entry.component.html',
  styleUrls: ['./gold-silver-return-entry.component.scss']
})
export class GoldSilverReturnEntryComponent implements OnInit {

  angForm: FormGroup;

  dtExportButtonOptions: any = {};
  dtExportButtonOptions1: any = {};

  simpleOption: Array<IOption> = this.Scheme16Service.getCharacters();
  accountNo: Array<IOption> = this.Scheme17Service.getCharacters();

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
    BranchCode: "",
    schemeCode: "",
    Date: "",
    AccountNo: "",
    Voucher_Number: "",
    SerialNumber: "",
    ItemType: "",
    BagReceiptNumber: "",
    TotalWeight: "",
    ClearWeight: "",
    value: "",
    SubmissionDate: "",
    margin: "",
    IsReturn: "",
    ArticleName: "",
    ArticleDetails: "",
  };


  constructor(public Scheme16Service: Scheme16Service,public Scheme17Service: Scheme17Service,private fb: FormBuilder) {this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/gold-silver-return-entry.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Serial Number',
          data: 'SerialNumber'
        }, {
          title: 'Item Type',
          data: 'ItemType'
        }, {
          title: 'Bag / ReceiptNumber',
          data: 'BagReceiptNumber'
        }, {
          title: 'Total Weight',
          data: 'TotalWeight'
        }, {
          title: 'Clear Weight',
          data: 'ClearWeight'
        },{
          title: 'Value',
          data: 'value'
        },{
          title: 'Submission Date',
          data: 'SubmissionDate'
        },{
          title: 'Margin',
          data: 'margin'
        },{
          title: 'Is Return',
          data: 'IsReturn'
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
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/gold-silver-return-entry1.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Branch Code',
          data: 'BranchCode'
        }, {
          title: 'Scheme Code',
          data: 'schemeCode'
        }, {
          title: 'Return Date',
          data: 'Date'
        }, {
          title: 'Account No.',
          data: 'AccountNo'
        }, {
          title: 'Voucher Number',
          data: 'Voucher_Number'
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
    this.dataSub = this.Scheme16Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Scheme17Service.loadCharacters().subscribe((options) => {
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
      BranchCode: [''],
      schemeCode: ['', [Validators.required]],
      Date: [''],
      AccountNo: ['',[Validators.required]],
      Voucher_Number: [''],
      ArticleName: [''],
      ArticleDetails: [''],
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
    this.message.BranchCode = info.BranchCode;
    this.message.schemeCode = info.schemeCode;
    this.message.Date = info.Date;
    this.message.AccountNo = info.AccountNo;
    this.message.Voucher_Number = info.Voucher_Number;
    this.message.SerialNumber = info.SerialNumber;
    this.message.ItemType = info.ItemType;
    this.message.BagReceiptNumber = info.BagReceiptNumber;
    this.message.TotalWeight = info.TotalWeight;
    this.message.ClearWeight = info.ClearWeight;
    this.message.value = info.value;
    this.message.SubmissionDate = info.SubmissionDate;
    this.message.margin = info.margin;
    this.message.IsReturn = info.IsReturn;
    this.message.ArticleName = info.ArticleName;
    this.message.ArticleDetails = info.ArticleDetails;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.BranchCode = info.title;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete title." + this.message.BranchCode + "  data",
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
  
  
