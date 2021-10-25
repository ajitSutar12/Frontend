import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {IOption} from 'ng-select';
import {Subscription} from 'rxjs/Subscription';
import {StatementTypeService} from '../../../shared/elements/statement-type.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';

import Swal from 'sweetalert2';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms'
import { isEnabled } from 'screenfull';
// import { info } from 'console';


@Component({
  selector: 'app-batch-voucher',
  templateUrl: './batch-voucher.component.html',
  styleUrls: ['./batch-voucher.component.scss']
})
export class BatchVoucherComponent implements OnInit {

 
  //myForm: FormGroup;

  //title select variables
  simpleOption: Array<IOption> = this.StatementTypeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  autocompleteItems = ['Income', 'Expenditure', 'Asset', 'Liability'];
  autocompleteItemsAsObjects = [
    { value: 'Income', id: 0 },
    { value: 'Expenditure', id: 1 },
    { value: 'Asset', id: 2 },
    { value: 'Liability', id: 3 },
    
  ];


  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

   //variable for checkbox and radio button 
   ischeckbox: boolean = false;

   isImportFile:boolean=false;

 //object created to get data when row is clicked - Credit Amt Details
  message = {
    Scheme: "",
    AccountNumber: "",
    ReferenceNumber: "",
    AccountName: "",
    Balance: "",
    Amount: "",

    VoucherNumber:"",
    checkbox:"",
    Importfile:"",
    VoucherDate:"",
    BranchCode:"",
    CompanyCode:"",
    DebitAccount1:"",
    DebitAccount2:"",
    LedgerBalance:"",
    ChequeNoT:"",
    ChequeNo: "",
    CheqDate:"",
    VoucherAmount:"",
    Narration:"",
    TotalAmount:"",
    Createdby:""
  };

//function for edit button clicked
  editClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    this.message.AccountNumber = info.AccountNumber;
    this.message.ReferenceNumber = info.ReferenceNumber;
    this.message.AccountName = info.AccountName;
    this.message.Balance = info.Balance;
    this.message.Amount = info.Amount;

    this.message.VoucherNumber = info.VoucherNumber;
    this.message.checkbox = info.checkbox;
    this.message.Importfile = info.Importfile;
    this.message.VoucherDate = info.VoucherDate;
    this.message.BranchCode = info.BranchCode;
    this.message.DebitAccount1 = info.DebitAccount1;
    this.message.DebitAccount2 = info.DebitAccount2;
    this.message.LedgerBalance = info.LedgerBalance;
    this.message.ChequeNoT = info.ChequeNoT;
    this.message.ChequeNo = info.ChequeNo;
    this.message.CheqDate = info.CheqDate;
    this.message.VoucherAmount = info.VoucherAmount;
    this.message.Narration = info.Narration;
    this.message.TotalAmount = info.TotalAmount;
    this.message.Createdby= info.Createdby;

//code for chekbox
if (this.message.Balance == "Yes") {
this.ischeckbox = true;   //return boolean value and display checked checkbox

}
else {
this.ischeckbox = false;   //return boolean value and display unchecked checkbox
}


    this.showButton = false;
    this.updateShow = true;
  }

//function for delete button clicked
  delClickHandler(info:any):void  {
    this.message.Scheme=info.Scheme;
        Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Statement Code." + this.message.Scheme + "  data", 
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

  handleSelected($event){
    this.isImportFile = $event.target.checked === true ? true : false;
    
  }
  
  constructor(public StatementTypeService: StatementTypeService ,private fb: FormBuilder) { 

    // this.myForm = this.fb.group({
    //   rows: this.fb.array([])
    // });
    // this.patchValues();
    
    
  }
  dtExportButtonOptions: any = {};
  dtExportButtonOptions1: any = {};


  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;


  ngOnInit(): void {

    //Credit Amount Details
    this.dtExportButtonOptions = {
      ajax: 'fake-data/batch-voucher.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: 'Scheme',
        data: 'Scheme'
      }, {
        title: 'Account Number',
        data: 'AccountNumber'
      }, {
        title: 'Reference Number',
        data: 'ReferenceNumber'
      }, {
        title: 'Account Name',
        data: 'AccountName'
      }, {
        title: 'Balance',
        data: 'Balance'
      }, {
        title: 'Amount',
        data: 'Amount'
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

    //Datatable
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/batch-voucher-db.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: 'Voucher Number',
        data: 'VoucherNumber'
      },
      {
        title: 'Import file-checkbox',
        data: 'checkbox'
      },
      {
        title: 'Voucher Date',
        data: 'VoucherDate'
      }, {
        title: 'Branch Code',
        data: 'BranchCode'
      }, {
        title: 'Importfile',
        data: 'Importfile'
      }, {
        title: 'Company Code',
        data: 'CompanyCode'
      }, {
        title: 'Debit Account',
        data: 'DebitAccount1'
      },
      {
        title: 'Debit Account',
        data: 'DebitAccount2'
      }, {
        title: 'Ledger Balance',
        data: 'LedgerBalance'
      }, {
        title: 'Cheque No text',
        data: 'ChequeNoT'
      },
      {
        title: 'ChequeNo',
        data: 'ChequeNo'
      }, {
        title: 'Cheq. Date',
        data: 'CheqDate'
      }, {
        title: 'Voucher Amount',
        data: 'VoucherAmount'
      },
      {
        title: 'Narration',
        data: 'Narration'
      }, {
        title: 'Total Amount',
        data: 'TotalAmount'
      }, {
        title: 'Created by',
        data: 'Createdby'
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
    this.dataSub = this.StatementTypeService.loadCharacters().subscribe((options) => {
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

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
   
  }


  // if (this.message.checkbox == "Yes") {
  //   this.isImportfile = isEnabled;   //return boolean value and display checked checkbox
  //   }
  //   else {
  //   this.isImportfile = disable;   //return boolean value and display unchecked checkbox
  //   }

  // order = 
  // [
  //   this.message.checkbox = info.checkbox,
    
  // ]

  // patchValues() {
  //   let rows = this.myForm.get('rows') as FormArray;
  //   this.order.forEach(material => {
  //     material.materials.forEach(x => {
  //       rows.push(this.fb.group({
  //         checkbox_value: [null],

  //         Importfile: [null, Validators.required]
  //       }));
  //     });
  //   });
  // }



};
  
