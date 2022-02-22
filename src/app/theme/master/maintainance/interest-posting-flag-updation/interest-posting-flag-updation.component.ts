import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { S6Service } from '../../../../shared/elements/s6.service';
import { Ac6Service } from '../../../../shared/elements/ac6.service';
import { S17Service } from '../../../../shared/elements/s17.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { NgSelectConfig } from '@ng-select/ng-select';


@Component({
  selector: 'app-interest-posting-flag-updation',
  templateUrl: './interest-posting-flag-updation.component.html',
  styleUrls: ['./interest-posting-flag-updation.component.scss']
})

export class InterestPostingFlagUpdationComponent implements OnInit {
  formSubmitted = false;
  angForm: FormGroup;

  simpleOption: Array<IOption> = this.S6Service.getCharacters();
  Ac: Array<IOption> = this.Ac6Service.getCharacters();
  Ac2: Array<IOption> = this.S17Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  // dropdown ngmodel variables
  ngscheme1:any=null
  ngfromac:any=null
  ngtoac:any=null
  //Datatable

  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    schemecode: "",
    accnofrom: "",
    accnoto: "",
    acc_no: "",
    acc_name: "",
    isPostInterest: "",
  };
  dtTrigger: any;
  dtElement: any;

  constructor(
    private http: HttpClient,private fb: FormBuilder, public S6Service: S6Service, public Ac6Service: Ac6Service,
     public S17Service: S17Service,
     private config: NgSelectConfig,) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/interest-flag-posting.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'A/C No',
          data: 'acc_no'
        }, {
          title: 'A/C Name',
          data: 'acc_name'
        }, {
          title: 'Is Post Interest ?',
          data: 'isPostInterest'
        },
        {
          title: 'Scheme Code',
          data: 'schemecode'
        }, {
          title: 'A/C No. From',
          data: 'accnofrom'
        }, {
          title: 'A/C No. To',
          data: 'accnoto'
        },
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],  //row click handler code
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
    // this.runTimer();
    this.dataSub = this.S6Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Ac6Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.S17Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  // runTimer() {
  //   const timer = setInterval(() => {
  //     this.timeLeft -= 1;
  //     if (this.timeLeft === 0) {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  // }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]]
    });
  }

  submit() {
    this.formSubmitted = true;
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.schemecode = info.schemecode;
    this.message.accnofrom = info.accnofrom;
    this.message.accnoto = info.accnoto;
    this.message.acc_no = info.acc_no;
    this.message.acc_name = info.acc_name;
    this.message.isPostInterest = info.isPostInterest;


    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.acc_no = info.acc_no;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete acc no." + this.message.acc_no + "  data",
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
  ngAfterViewInit(): void {
    
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#interestpostingflagtable tfoot tr').appendTo('#interestpostingflagtable thead');
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (this['value'] != '') {
            that
              .search(this['value'])
              .draw();
          } else {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
  
}
