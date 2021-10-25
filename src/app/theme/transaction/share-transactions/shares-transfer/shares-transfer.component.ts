import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { glMasterService } from '../../../../shared/elements/gl-master.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
@Component({
  selector: 'app-shares-transfer',
  templateUrl: './shares-transfer.component.html',
  styleUrls: ['./shares-transfer.component.scss']
})
export class SharesTransferComponent implements OnInit {


  //title select variables
  simpleOption: Array<IOption> = this.glMasterService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  autocompleteItems = ['a', 'b', 'c', 'd'];
  autocompleteItemsAsObjects = [
    { value: 'a', id: 0 },
    { value: 'b', id: 1 },
    { value: 'c', id: 2 },
    { value: 'd', id: 3 },
  ];



  dtExportButtonOptions: any = {};
  constructor(public glMasterService: glMasterService) { }
  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    Scheme: "",
    MemberNo: "",
    TransactionNo: "",
    MembershipDate: "",
    TotalNoOfShares: "",
    TotalSharesAmount: "",
    Scheme1: "",
    MemberNo1: "",
    ResolutionDate: "",
    ResolutionNo: "",

    TransferDate: "",
    ActualTransferAmount: "",
    Reason: "",


  };

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    this.message.MemberNo = info.MemberNo;
    this.message.TransactionNo = info.TransactionNo;
    this.message.MembershipDate = info.MembershipDate;
    this.message.TotalNoOfShares = info.TotalNoOfShares;
    this.message.TotalSharesAmount = info.TotalSharesAmount;
    this.message.Scheme1 = info.Scheme1;
    this.message.MemberNo1 = info.MemberNo1;
    this.message.ResolutionDate = info.ResolutionDate;
    this.message.ResolutionNo = info.ResolutionNo;
    this.message.TransferDate = info.TransferDate;
    this.message.ActualTransferAmount = info.ActualTransferAmount;
    this.message.Reason = info.Reason;

    this.showButton = false;
    this.updateShow = true;


  }
  //function execute when delete button clicked
  delClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Scheme." + this.message.Scheme + "  data",
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

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/shares-transfer.json',
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
          title: 'Member No',
          data: 'MemberNo'
        }, {
          title: 'Transaction No',
          data: 'TransactionNo'
        }, {
          title: 'Membership Date',
          data: 'MembershipDate'
        }, {
          title: 'Total No Of Shares',
          data: 'TotalNoOfShares'
        }, {
          title: 'Total Shares Amount',
          data: 'TotalSharesAmount'
        }, {
          title: 'Scheme',
          data: 'Scheme1'
        }, {
          title: 'Member No',
          data: 'MemberNo1'
        },
        {
          title: 'Resolution Date',
          data: 'ResolutionDate'
        }, {
          title: 'Resolution No',
          data: 'ResolutionNo'
        }, {
          title: 'Transfer Date',
          data: 'TransferDate'
        }, {
          title: 'Actual Transfer Amount',
          data: 'ActualTransferAmount'
        }, {
          title: 'Reason',
          data: 'Reason'
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
    this.dataSub = this.glMasterService.loadCharacters().subscribe((options) => {
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

  };

}






