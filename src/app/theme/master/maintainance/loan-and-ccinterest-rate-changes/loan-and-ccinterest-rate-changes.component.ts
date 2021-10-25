import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { S3Service } from '../../../../shared/elements/s3.service';
import { Ac3Service } from '../../../../shared/elements/ac3.service';
import { HttpClient } from '@angular/common/http';
import { LoanAndCCInterestRateChangesService } from './loan-and-ccinterest-rate-changes.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-loan-and-ccinterest-rate-changes',
  templateUrl: './loan-and-ccinterest-rate-changes.component.html',
  styleUrls: ['./loan-and-ccinterest-rate-changes.component.scss']
})

export class LoanAndCCInterestRateChangesComponent implements OnInit {
  httpData: any;
  dtExportButtonOptions: any = {};
  makeForm: any;
  loanAndCCForm: FormGroup;

  stringifiedData: any;
  parsedJson: any;
  data3: any;
  loading = true;


  simpleOption: Array<IOption> = this.S3Service.getCharacters();
  Ac: Array<IOption> = this.Ac3Service.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    scheme: "",
    account: "",
  };

  jsonData: any;

  constructor(private fb: FormBuilder, public S3Service: S3Service, public Ac3Service: Ac3Service, private http: HttpClient, private loanAndCCInterestRateChangesService: LoanAndCCInterestRateChangesService) { this.createForm(); }

  ngOnInit(): void {
    //   this.dtExportButtonOptions = {
    //     ajax: 'fake-data/loan_cc.json',
    //     columns: [
    //       {
    //         title: 'Action',
    //         render: function (data: any, type: any, full: any) {
    //           return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
    //         }
    //       }, {
    //         title: 'Scheme',
    //         data: 'scheme'
    //       }, {
    //         title: 'Acccount No',
    //         data: 'account'
    //       }, {
    //         title: 'Effective Date',
    //         data: 'date'
    //       }, {
    //         title: 'Normal Interest',
    //         data: 'n_int'
    //       },
    //       {
    //         title: 'Penal Interest',
    //         data: 'p_int'
    //       },
    //   ],
    //     dom: 'Bfrtip',
    //     buttons: [
    //       'copy',
    //       'print',
    //       'excel',
    //       'csv'
    //     ],

    // //row click handler code
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
    this.dataSub = this.S3Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Ac3Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.loanAndCCForm = new FormGroup({
      'AC_TYPE': new FormControl(''),
      'AC_NO': new FormControl('')
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
    this.loanAndCCForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]]
    });
  }

  submit() {
    console.log(this.loanAndCCForm.valid);
    if (this.loanAndCCForm.valid) {
      console.log(this.loanAndCCForm.value);
    }

    console.log('Form Submitted with value: ', this.loanAndCCForm.value);
    const formVal = this.loanAndCCForm.value;
    const dataToSend = {
      "AC_TYPE": formVal.AC_TYPE,
      "AC_NO": formVal.AC_NO
    }
    this.loanAndCCInterestRateChangesService.postData(dataToSend).subscribe(data1 => {
      console.log(data1)
    }, (error) => {
      console.log(error)
    })

    Swal.fire({
      icon: 'success',
      title: 'Your data has been saved',
      showConfirmButton: false,
      timer: 3000,
    })
    this.test();
    this.loanAndCCForm.reset();
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.scheme = info.scheme;
    this.message.account = info.account;
    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Statement Code.",
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
        this.loanAndCCInterestRateChangesService.deleteData(id).subscribe(data1 => {
          this.test();
          this.jsonData = data1;
          console.log("data succesfully deleted")
        })

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

  test() {
    this.loanAndCCInterestRateChangesService.loadData().subscribe(data1 => {
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
