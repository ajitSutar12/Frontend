import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { S5Service } from '../../../../shared/elements/s5.service';
import { Ac5Service } from '../../../../shared/elements/ac5.service';
import { S16Service } from '../../../../shared/elements/s16.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NpaOpeningDetailsEntryService } from './npa-opening-details-entry.service';
import { HttpClient } from '@angular/common/http'

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-npa-opening-details-entry',
  templateUrl: './npa-opening-details-entry.component.html',
  styleUrls: ['./npa-opening-details-entry.component.scss']
})

export class NpaOpeningDetailsEntryComponent implements OnInit {

  httpData: any;
  dtExportButtonOptions: any = {};
  makeForm: any;

  stringifiedData: any;
  parsedJson: any;
  data3: any;
  loading = true;

  npaOpeningForm: FormGroup;

  jsonData: any;

  simpleOption: Array<IOption> = this.S5Service.getCharacters();
  Ac: Array<IOption> = this.Ac5Service.getCharacters();
  Ac2: Array<IOption> = this.S16Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    schemecode: "",
    fromacc: "",
    toacc: "",
    accno: "",
    accname: "",
    lasttransdate: "",
    totpostedinterest: "",
    totdepositamt: "",
    isdisputeloan: "",
  };

  constructor(private fb: FormBuilder, public S5Service: S5Service, public Ac5Service: Ac5Service, public S16Service: S16Service, private http: HttpClient, private npaOpeningDetailsEntryService: NpaOpeningDetailsEntryService) {
    this.createForm();
  }

  ngOnInit(): void {
    // this.dtExportButtonOptions = {
    //   ajax: 'fake-data/npa_ode.json',
    //   columns: [
    //     {
    //       title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
    //       }
    //     },

    //     {
    //       title: 'A/c No.',
    //       data: 'accno'
    //     }, {
    //       title: 'A/c Name',
    //       data: 'accname'
    //     }, {
    //       title: 'Last Trans Date',
    //       data: 'lasttransdate'
    //     }, {
    //       title: 'Tot.Posted Interest',
    //       data: 'totpostedinterest'
    //     }, {
    //       title: 'Tot.Deposit Amt.',
    //       data: 'totdepositamt'
    //     },
    //     {
    //       title: 'Is Dispute Loan',
    //       data: 'isdisputeloan'
    //     },
    //     {
    //       title: 'Scheme Code',
    //       data: 'schemecode'
    //     },
    //     {
    //       title: 'From A/c',
    //       data: 'fromacc'
    //     },
    //     {
    //       title: 'To A/c',
    //       data: 'toacc'
    //     }

    //   ],
    //   dom: 'Bfrtip',
    //   buttons: [
    //     'copy',
    //     'print',
    //     'excel',
    //     'csv'
    //   ],
    //   //row click handler code
    //   rowCallback: (row: Node, data: any[] | Object, index: number) => {
    //     const self = this;
    //     $('td', row).off('click');
    //     $('td', row).on('click', '#editbtn', () => {
    //       self.editClickHandler(data);
    //     });
    //     $('td', row).on('click', '#delbtn', () => {
    //       self.delClickHandler(data);
    //     });
    //     return row;
    //   }
    // };

    this.runTimer();
    this.dataSub = this.S5Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Ac5Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.S16Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.npaOpeningForm = new FormGroup({
      'AC_TYPE': new FormControl(''),
      'FROM_AC': new FormControl(''),
      'TO_AC': new FormControl('')

    })

    this.test();

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
    this.npaOpeningForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]]
    });
  }

  submit() {
    console.log(this.npaOpeningForm.valid);
    if (this.npaOpeningForm.valid) {
      console.log(this.npaOpeningForm.value);
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.schemecode = info.schemecode;
    this.message.fromacc = info.fromacc;
    this.message.toacc = info.toacc;
    this.message.accno = info.accno;
    this.message.accname = info.accname;
    this.message.lasttransdate = info.lasttransdate;
    this.message.totpostedinterest = info.totpostedinterest;
    this.message.totdepositamt = info.totdepositamt;
    this.message.isdisputeloan = info.isdisputeloan;
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.accno = info.accno;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete A/c no." + this.message.accno + "  data",
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

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  test() {
    this.npaOpeningDetailsEntryService.loadData().subscribe(data1 => {
      console.log(data1);
      console.log("this is data");
      console.log(JSON.stringify(data1));
      console.log("this is stringify data");
      this.jsonData = data1;
    })

    const that = this;
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,


      // processing:true,
      ajax: (dataTableParameters: any, callback) => {
        that.http
          .post<DataTableResponse>(
            dataTableParameters, {}
          ).subscribe(resp => {
            that.jsonData = resp.data;
            console.log("this is table data");
            console.log(resp.data);

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },

      // ajax: 'fake-data/gl_statement_code.json',

      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE',

        },
        {
          title: 'Account No',
          data: 'AC_NO',

        },
      ],
      dom: 'Bfrtip',
      // buttons: [
      //   'copy',
      //   'print',
      //   'excel',
      //   'csv'
      // ],

      //row click handler code

      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // $('td', row).off('click');
        // $('td', row).on('click', '#editbtn', () => {
        //   self.editClickHandler(person,id);
        // });
        // $('td', row).on('click', '#delbtn', () => {
        //   self.delClickHandler(data);
        // });
        return row;
      }
    };

  }
}
