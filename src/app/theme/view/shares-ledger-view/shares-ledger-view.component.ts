import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import {Scheme9Service} from '../../../shared/elements/scheme9.service';
import {AccountnoService} from '../../../shared/elements/Accountno.service';

import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shares-ledger-view',
  templateUrl: './shares-ledger-view.component.html',
  styleUrls: ['./shares-ledger-view.component.scss']
})
export class SharesLedgerViewComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions : any = {};
  
  //Select option for title, account type
  simpleOption: Array<IOption> = this.Scheme9Service.getCharacters();
  a : Array<IOption> = this.Scheme9Service.getCharacters();
  // b : Array<IOption> = this.Scheme9Service.getCharacters();

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
    Scheme: "",
    Accountno: "",
    FromDate: "",
    ToDate: "",
    AccountOpeningDate:"",
    Date:"",
    particulars:"",
    TranType:"",
    DrAmount:"",
    CrAmount:"",
    ClosingBalance:"",
    DrDividend:"",
    CrDividend:"",
    DividendBalance:"",
    BonusAmount:"",
    RebitInt:"",
    CertificateNo:"",
    NoOfShares:"",
    SharesFromTo:"",
    FaceValue:"",
    OfficerID:"",
    VoucherNo:"",
    FreezeAccountStatus:"",
    AccountClosedOn:"",

  };

  constructor(public Scheme9Service: Scheme9Service,public AccountnoService: AccountnoService,private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/shares-ledger-view.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: 'SCHEME',
        data: 'Scheme'
      }, {
        title: 'Account No.',
        data: 'Accountno'
      }, {
        title: 'From Date',
        data: 'FromDate'
      }, {
        title: 'To Date',
        data: 'ToDate'
      }, {
        title: 'DATE',
        data: 'Date'
      },{
        title: 'Account Opening Date',
        data: 'AccountOpeningDate'
      }, {
        title: 'Freeze Account Status',
        data: 'FreezeAccountStatus'
      },{
        title: 'A/c Closed On xx/xx/xxxx',
        data: 'AccountClosedOn'
      },{
        title: 'Particulars',
        data: 'particulars'
      },{
        title: 'Tran. Type',
        data: 'TranType'
      },{
        title: 'Dr. Amount',
        data: 'DrAmount'
      },{
        title: 'Cr. Amount',
        data: 'CrAmount'
      },{
        title: 'Closing Balance',
        data: 'ClosingBalance'
      },{
        title: 'Dr. Dividend',
        data: 'DrDividend'
      },{
        title: 'Cr. Dividend',
        data: 'CrDividend'
      },{
        title: 'Dividend Balance',
        data: 'DividendBalance'
      },{
        title: 'Bonus Amount',
        data: 'BonusAmount'
      },{
        title: 'Rebit Int.',
        data: 'RebitInt'
      },{
        title: 'Certificate No.',
        data: 'CertificateNo'
      },{
        title: 'No.Of Shares',
        data: 'NoOfShares'
      },{
        title: 'Shares From-To',
        data: 'SharesFromTo'
      },{
        title: 'Face Value',
        data: 'FaceValue'
      },{
        title: 'Officer ID',
        data: 'OfficerID'
      },{
        title: 'Voucher No.',
        data: 'VoucherNo'
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
    this.dataSub = this.Scheme9Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.runTimer();
    this.dataSub = this.AccountnoService.loadCharacters().subscribe((options) => {
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
      Accountno: ['', [Validators.required]],
      FromDate: ['',[Validators.required]],
      ToDate: ['',[Validators.required]],
      AccountOpeningDate: [''],
      FreezeAccountStatus: [''],
      AccountClosedOn: [''],
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
    this.message.Scheme = info.Scheme;
    this.message.Accountno = info.Accountno;
    this.message.FromDate = info.FromDate;
    this.message.ToDate = info.ToDate;
    this.message.AccountOpeningDate = info.AccountOpeningDate;
    this.message.Date = info.Date;
    this.message.particulars = info.particulars;
    this.message.TranType = info.TranType;
    this.message.DrAmount = info.DrAmount;
    this.message.CrAmount = info.CrAmount;
    this.message.ClosingBalance = info.ClosingBalance;
    this.message.DrDividend = info.DrDividend;
    this.message.CrDividend = info.CrDividend;
    this.message.DividendBalance = info.DividendBalance;
    this.message.BonusAmount = info.BonusAmount;
    this.message.RebitInt = info.RebitInt;
    this.message.CertificateNo = info.CertificateNo;
    this.message.NoOfShares = info.NoOfShares;
    this.message.SharesFromTo = info.SharesFromTo;
    this.message.FaceValue = info.FaceValue;
    this.message.OfficerID = info.OfficerID;
    this.message.VoucherNo = info.VoucherNo;
    this.message.FreezeAccountStatus = info.FreezeAccountStatus;
    this.message.AccountClosedOn = info.AccountClosedOn;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete title." + this.message.Scheme + "  data",
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


}
