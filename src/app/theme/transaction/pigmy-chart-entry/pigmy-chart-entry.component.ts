import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AgentCodeService } from '../../../shared/elements/agent-code.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-pigmy-chart-entry',
  templateUrl: './pigmy-chart-entry.component.html',
  styleUrls: ['./pigmy-chart-entry.component.scss']
})
export class PigmyChartEntryComponent implements OnInit {
  dtExportButtonOptions: any = {};

  dtExportButtonOptions1: any = {};

  simpleOption: Array<IOption> = this.SchemeCodeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  autocompleteItems = ['40100', '40200', '40300', '40400'];
  autocompleteItemsAsObjects = [
    { value: '40100', id: 0 },
    { value: '40200', id: 1 },
    { value: '40300', id: 2 },
    { value: '40400', id: 3 },
  ];
  
  simpleOption1: Array<IOption> = this.AgentCodeService.getCharacters();
  selectedOption1 = '3';
  isDisabled1 = true;
  characters1: Array<IOption>;
  selectedCharacter1 = '3';
  timeLeft1 = 5;

  private dataSub1: Subscription = null;

  autocompleteItems1 = ['1', '2', '3', '4'];
  autocompleteItemsAsObjects1 = [
    { value: '1', id: 0 },
    { value: '2', id: 1 },
    { value: '3', id: 2 },
    { value: '4', id: 3 },
  ];
  


  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    date: "",
    branchcode: "",
    vouchernumber:"",
    scheme:"",
    agent:"",
    accno:"",
    chartnumber:"",
    totalamount:""
  };
  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.date = info.date;
    this.message.branchcode = info.branchcode;
    this.message.vouchernumber = info.vouchernumber;
    this.message.scheme = info.scheme;
    this.message.agent = info.agent;
    this.message.accno = info.accno;
    this.message.chartnumber = info.chartnumber;
    this.message.totalamount = info.totalamount;
    this.message.scheme = info.scheme;
    this.message.agent = info.agent;
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.scheme = info.scheme;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Scheme." + this.message.scheme + "  data",
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

  constructor(public SchemeCodeService: SchemeCodeService, public AgentCodeService: AgentCodeService) { }
  
  ngOnInit(): void {

    
    ////////////////////////////////////////////
    this.dtExportButtonOptions = {
      ajax: 'fake-data/pigmy-chart.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Serial Number',
          data: 'serialno'
        }, {
          title: 'Scheme Code',
          data: 'schemecode'
        }, {
          title: 'Account Number',
          data: 'accno'
        }, {
          title: 'Ref.ACNO',
          data: 'refaccno'
        }, {
          title: 'Name',
          data: 'name'
        }, {
          title: 'Previous Amount',
          data: 'previousamount'
        },
        {
          title: 'Amount',
          data: 'amount'
        },
        // {
        //   title: 'Date',
        //   data: 'date'
        // },
        // {
        //   title: 'Branch Code',
        //   data: 'branchcode'
        // },
        // {
        //   title:'Voucher Number',
        //   data: 'vouhcerno'
        // },
        // {
        //   title: 'Scheme',
        //   data: 'scheme'
        // },
        // {
        //   title: 'Agent',
        //   data: 'agent'
        // },
        // {
        //   title: 'Chart No.',
        //   data: 'chartno'
        // },
        // {
        //   title: 'Total Amount',
        //   data: 'totalamount'
        // }
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
        ajax: 'fake-data/pigmy-chart.json',
        columns: [
          {
            title: 'Action',
            render: function (data: any, type: any, full: any) {
              return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
            }
          },
          {
            title: ' Date',
            data: 'date'
          }, {
            title: ' Branch Code',
            data: 'branchcode'
          }, {
            title: 'Vocuher  Number',
            data: 'vouchernumber'
          }, {
            title: 'Scheme',
            data: 'scheme'
          }, {
            title: 'Agent',
            data: 'agent'
          }, {
            title: 'Chart Number',
            data: 'chartnumber'
          },
          {
            title: 'Total Amount',
            data: 'totalamount'
          },
          // {
          //   title: 'Date',
          //   data: 'date'
          // },
          // {
          //   title: 'Branch Code',
          //   data: 'branchcode'
          // },
          // {
          //   title:'Voucher Number',
          //   data: 'vouhcerno'
          // },
          // {
          //   title: 'Scheme',
          //   data: 'scheme'
          // },
          // {
          //   title: 'Agent',
          //   data: 'agent'
          // },
          // {
          //   title: 'Chart No.',
          //   data: 'chartno'
          // },
          // {
          //   title: 'Total Amount',
          //   data: 'totalamount'
          // }
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
    this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub1 = this.AgentCodeService.loadCharacters().subscribe((options) => {
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

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

}