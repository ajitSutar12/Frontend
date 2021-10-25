import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { glTypeService } from '../../../../shared/elements/gl-type.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { IOption } from 'ng-select';

@Component({
  selector: 'app-gl-report-master',
  templateUrl: './gl-report-master.component.html',
  styleUrls: ['./gl-report-master.component.scss'],
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

export class GlReportMasterComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {}; //Datatable variable
  dtExportButtonOptions1: any = {};
  dtExportButtonOptions2: any = {};
  dtExportButtonOptions3: any = {};
  dtExportButtonOptions4: any = {};
  dtExportButtonOptions5: any = {};
  dtExportButtonOptions6: any = {};


  //title select variables
  simpleOption: Array<IOption> = this.glTypeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isLinkingInputAllowed: boolean = true;
  isIsPrintinGLReport: boolean = true;

  isAddProfitLossAmount: boolean = false;
  isLinkingInputAllowed1: boolean = true;
  isIsPrintinGLReport1: boolean = true;


  //object created to get data when row is clicked
  message = {
    Code: "",
    Name: "",
    Code7: "",
    Name7: "",
    Code8: "",
    Name8: "",
    AlternateCode: "",
    HOLiquidityCode1: "",
    HOLiquidityCode2: "",
    AlterBalanceCode: "",
    SerialNo8: "",
    LinkingInputAllowed: "",
    Percentage: "",
    IsPrintinGLReport: "",
    PercentageOfcode: "",
    Code9: "",
    Name9: "",
    SerialNo9: "",
    Type: "",
    Code10: "",
    Name10: "",
    Type10: "",
    Code1: "",
    Type3: "",
    Name1: "",
    AddProfitLossAmount: "",
    SerialNo1: "",
    PercentageOfcode1: "",
    LinkingInputAllowed1: "",
    IsPrintinGLReport1: "",
    Percentage1: "",
    PercentageConsideration: "",
    Code3: "",
    Name3: "",
    SerialNo3: "",
    SerialNo90: ""
  };

  constructor(public glTypeService: glTypeService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/gl_report_master.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Code',
          data: 'Code'
        }, {
          title: 'Name',
          data: 'Name'
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
          self.delClickHandler();
        });
        return row;
      }
    };

    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/gl_report1.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Code',
          data: 'Code7'
        }, {
          title: 'Name',
          data: 'Name7'
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
          self.delClickHandler();
        });
        return row;
      }
    };

    this.dtExportButtonOptions2 = {
      ajax: 'fake-data/gl_report2.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Code',
          data: 'Code8'
        },
        {
          title: 'Name',
          data: 'Name8'
        },
        {
          title: 'Alternate Code',
          data: 'AlternateCode'
        },
        {
          title: 'HO Liquidity Code1',
          data: 'HOLiquidityCode1'
        },
        {
          title: 'HO Liquidity Code2',
          data: 'HOLiquidityCode2'
        },
        {
          title: 'Alter Balance Code',
          data: 'AlterBalanceCode'
        },
        {
          title: 'Serial No.',
          data: 'SerialNo8'
        },
        {
          title: 'Linking Input Allowed?',
          data: 'LinkingInputAllowed'
        },
        {
          title: 'Percentage',
          data: 'Percentage'
        },
        {
          title: 'Is Print in GL Report?',
          data: 'IsPrintinGLReport'
        },
        {
          title: 'Percentage Of code',
          data: 'PercentageOfcode'
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
          self.delClickHandler();
        });
        return row;
      }
    };

    this.dtExportButtonOptions3 = {
      ajax: 'fake-data/gl_report3.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Code',
          data: 'Code9'
        },
        {
          title: 'Name',
          data: 'Name9'
        },
        {
          title: 'Type',
          data: 'Type'
        },
        {
          title: 'Serial No',
          data: 'SerialNo9'
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
          self.delClickHandler();
        });
        return row;
      }
    };

    this.dtExportButtonOptions4 = {
      ajax: 'fake-data/gl_report4.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Code',
          data: 'Code10'
        },
        {
          title: 'Name',
          data: 'Name10'
        },
        {
          title: 'Type',
          data: 'Type10'
        },
        {
          title: 'Serial No',
          data: 'SerialNo90'
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
          self.delClickHandler();
        });
        return row;
      }
    };

    this.dtExportButtonOptions5 = {
      ajax: 'fake-data/gl_report5.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Code',
          data: 'Code1'
        },
        {
          title: 'Name',
          data: 'Name1'
        },
        {
          title: 'Type',
          data: 'Type3'
        },
        {
          title: 'Add Profit Loss Amount',
          data: 'AddProfitLossAmount'
        },
        {
          title: 'Serial No1',
          data: 'SerialNo1'
        },
        {
          title: 'Percentage Of code',
          data: 'PercentageOfcode1'
        },
        {
          title: 'Linking Input Allowed.',
          data: 'LinkingInputAllowed1'
        },
        {
          title: 'Is Print in GLReport',
          data: 'IsPrintinGLReport1'
        },
        {
          title: 'Percentage',
          data: 'Percentage1'
        },
        {
          title: 'Percentage Consideration',
          data: 'PercentageConsideration'
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
          self.delClickHandler();
        });
        return row;
      }
    };

    this.dtExportButtonOptions6 = {
      ajax: 'fake-data/gl_report6.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Code',
          data: 'Code3'
        },
        {
          title: 'Name',
          data: 'Name3'
        },
        {
          title: 'Serial No3',
          data: 'SerialNo3'
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
          self.delClickHandler();
        });
        return row;
      }
    };

    this.runTimer();
    this.dataSub = this.glTypeService.loadCharacters().subscribe((options) => {
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
      Code: ['',],
      Name: ['', [Validators.required, , Validators.pattern]],
      Code7: ['', [Validators.pattern]],
      Name7: ['', [Validators.required, Validators.pattern]],
      Code8: ['', [Validators.pattern, Validators.required]],
      Name8: ['', [Validators.required, Validators.pattern]],
      AlternateCode: ['', [Validators.pattern]],
      HOLiquidityCode1: ['', [Validators.pattern]],
      AlterBalanceCode: ['', [Validators.pattern]],
      HOLiquidityCode2: ['', [Validators.pattern]],
      SerialNo8: ['',],
      Percentage: ['',],
      PercentageOfcode: ['', [Validators.pattern]],

      Code9: ['', [Validators.required, Validators.pattern]],
      Name9: ['', [Validators.required, Validators.pattern]],
      SerialNo9: ['', [Validators.pattern]],

      Code10: ['', [Validators.required, Validators.pattern]],
      Code12: ['', [Validators.required, Validators.pattern]],
      Name10: ['', [Validators.required, Validators.pattern]],
      SerialNo90: ['', [Validators.pattern]],

      Code1: ['', [Validators.required, Validators.pattern]],
      Name1: ['', [Validators.required, Validators.pattern]],
      SerialNo1: ['', [Validators.pattern]],
      PercentageOfcode1: ['', [Validators.pattern]],
      Percentage1: ['', [Validators.pattern]],
      PercentageConsideration: ['', [Validators.pattern]],

      Code3: ['', [Validators.required, Validators.pattern]],
      Name3: ['', [Validators.required, Validators.pattern]],
      SerialNo3: ['', [Validators.pattern]],
      Type: ['', [Validators.required]],
      Type1: ['', [Validators.required]],

      Type3: ['', [Validators.required]],
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
    this.message.Code = info.Code;
    this.message.Name = info.Name;
    this.message.Code7 = info.Code7;
    this.message.Name7 = info.Name7;
    this.message.Code8 = info.Code8;
    this.message.Name8 = info.Name8;
    this.message.AlternateCode = info.AlternateCode;
    this.message.HOLiquidityCode1 = info.HOLiquidityCode1;
    this.message.HOLiquidityCode2 = info.HOLiquidityCode2;
    this.message.AlterBalanceCode = info.AlterBalanceCode;
    this.message.SerialNo8 = info.SerialNo8;
    this.message.LinkingInputAllowed = info.LinkingInputAllowed;
    this.message.Percentage = info.Percentage;
    this.message.IsPrintinGLReport = info.IsPrintinGLReport;
    this.message.PercentageOfcode = info.PercentageOfcode;
    this.message.Code9 = info.Code9;
    this.message.Name9 = info.Name9;
    this.message.SerialNo9 = info.SerialNo9;
    this.message.Type = info.Type;
    this.message.Code10 = info.Code10;
    this.message.Name10 = info.Name10;
    this.message.Type10 = info.Type10;
    this.message.Code1 = info.Code1;
    this.message.Type3 = info.Type3;
    this.message.Name1 = info.Name1;
    this.message.AddProfitLossAmount = info.AddProfitLossAmount;
    this.message.SerialNo1 = info.SerialNo1;
    this.message.PercentageOfcode1 = info.PercentageOfcode1;
    this.message.LinkingInputAllowed1 = info.LinkingInputAllowed1;
    this.message.IsPrintinGLReport1 = info.IsPrintinGLReport1;
    this.message.Percentage1 = info.Percentage1;
    this.message.PercentageConsideration = info.PercentageConsideration;

    this.message.Code3 = info.Code3;
    this.message.Name3 = info.Name3;
    this.message.SerialNo3 = info.SerialNo3;
    this.message.SerialNo90 = info.SerialNo90;

    //code for chekbox
    if (this.message.AddProfitLossAmount == "Yes") {
      this.isAddProfitLossAmount = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isAddProfitLossAmount = false;   //return boolean value and display unchecked checkbox
    }

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
          'Your data been deleted.',
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

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

}







