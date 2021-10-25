import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-loan-size-wise-balance',
  templateUrl: './loan-size-wise-balance.component.html',
  styleUrls: ['./loan-size-wise-balance.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }), 
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class LoanSizeWiseBalanceComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions1: any = {};
  dtExportButtonOptions2: any = {};
  dtExportButtonOptions3: any = {};
  dtExportButtonOptions4: any = {};
  dtExportButtonOptions5: any = {};
  dtExportButtonOptions6: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    shortTermFromMon: "",
    shortTermToMon: "",
    MidTermFromMon: "",
    MidTermToMon: "",
    LongTermFromMon: "",
    LongTermToMon: ""
  };

  createForm() {
    this.angForm = this.fb.group({

      shortTermFromMon: ['', [Validators.pattern]],
      shortTermToMon:   ['', [Validators.pattern]],
      mediumTermFromMon:['', [Validators.pattern]],
      mediumTermToMon:  ['', [Validators.pattern]],
      longTermFromMon:  ['', [Validators.pattern]],
      longTermToMon:    ['', [Validators.pattern]],
    });
  }

  ngOnInit(): void {

    //AMOUNT
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/size-wise-balance.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr No.',
          data: 'srno'
        }, {
          title: 'From Amount',
          data: 'from_amount'
        }, {
          title: 'To Amount',
          data: 'to_amount'
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
        // $('td', row).on('click', '#editbtn', () => {
        //   self.editClickHandler(data);
        // });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler();
        });
        return row;
      }
    };
    //INTEREST RATE
    this.dtExportButtonOptions2 = {
      ajax: 'fake-data/sizewise-interest-rate.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr No.',
          data: 'srno'
        }, {
          title: 'From Interest rate',
          data: 'from_ir'
        }, {
          title: 'To Interest Rate',
          data: 'to_ir'
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
        // $('td', row).on('click', '#editbtn', () => {
        //   self.editClickHandler(data);
        // });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler();
        });
        return row;
      }
    };

    //PERIOD
    this.dtExportButtonOptions3 = {
      ajax: 'fake-data/size-wise-period.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr No.',
          data: 'srno'
        }, {
          title: 'From Period(in Months)',
          data: 'from_period'
        }, {
          title: 'To Period(in Months)',
          data: 'to_period'
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
        // $('td', row).on('click', '#editbtn', () => {
        //   self.editClickHandler(data);
        // });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler();
        });
        return row;
      }
    };

    //TERMS   
    this.dtExportButtonOptions4 = {
      ajax: 'fake-data/size-wise-terms.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Short Term From Months',
          data: 'shortTermFromMon'
        }, {
          title: 'Short Term To Months',
          data: 'shortTermToMon'
        }, {
          title: 'Medium Term From Months',
          data: 'MidTermFromMon'
        }, {
          title: 'Medium Term To Months',
          data: 'MidTermToMon'
        }, {
          title: 'Long Term From Months',
          data: 'LongTermFromMon'
        }, {
          title: 'Long Term To Months',
          data: 'LongTermToMon'
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
          self.delClickHandler();
        });
        return row;
      }
    };

    //INSURANCE AMOUNT
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/size-wise-balance.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr No.',
          data: 'srno'
        }, {
          title: 'From Amount',
          data: 'from_amount'
        }, {
          title: 'To Amount',
          data: 'to_amount'
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
        // $('td', row).on('click', '#editbtn', () => {
        //   self.editClickHandler(data);
        // });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler();
        });
        return row;
      }
    };
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/size-wise-balance.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr No.',
          data: 'srno'
        }, {
          title: 'From Amount',
          data: 'from_amount'
        }, {
          title: 'To Amount',
          data: 'to_amount'
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
        // $('td', row).on('click', '#editbtn', () => {
        //   self.editClickHandler(data);
        // });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler();
        });
        return row;
      }
    };
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/size-wise-balance.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr No.',
          data: 'srno'
        }, {
          title: 'From Amount',
          data: 'from_amount'
        }, {
          title: 'To Amount',
          data: 'to_amount'
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
        // $('td', row).on('click', '#editbtn', () => {
        //   self.editClickHandler(data);
        // });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler();
        });
        return row;
      }
    };
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/size-wise-balance.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Sr No.',
          data: 'srno'
        }, {
          title: 'From Amount',
          data: 'from_amount'
        }, {
          title: 'To Amount',
          data: 'to_amount'
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
        // $('td', row).on('click', '#editbtn', () => {
        //   self.editClickHandler(data);
        // });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler();
        });
        return row;
      }
    };

  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.shortTermFromMon = info.shortTermFromMon;
    this.message.shortTermToMon = info.shortTermToMon;
    this.message.MidTermFromMon = info.MidTermFromMon;
    this.message.MidTermToMon = info.MidTermToMon;
    this.message.MidTermFromMon = info.MidTermFromMon;
    this.message.LongTermFromMon = info.LongTermFromMon;
    this.message.LongTermToMon = info.LongTermToMon;
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe.',
          'error'
        )
      }
    })
  }


}
