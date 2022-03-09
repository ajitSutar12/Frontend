import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-dividend-transfer-posting',
  templateUrl: './dividend-transfer-posting.component.html',
  styleUrls: ['./dividend-transfer-posting.component.scss']
})

export class DividendTransferPostingComponent implements OnInit {
  formSubmitted:false;
  //api
  url = environment.base_url;
  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  a: Array<IOption> = this.SchemeCodeService.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;
  // dropdown variables
  ngscheme: any = null
  scheme;
  ngtoac:any=null
  schemeACNo

  //for date
  maxDate: Date;
  minDate: Date;
  warrentdate: any = null

  //Scheme type variable
  schemeType: string = 'GL'

  ngwarrentDate:any=null;
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isTransferToReserveFundOrOtherAccount: boolean = false;

  message = {
    WarrantDate: "",
    TransferToReserveFundOrOtherAccount: "",
    SchemeCode: " ",
    AccountNo: "",
  };
  warrentDate: any;

  constructor(private fb: FormBuilder, private http: HttpClient,private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,public SchemeCodeService: SchemeCodeService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/dividend-transfer-posting.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Warrant Date',
          data: 'WarrantDate'
        }, {
          title: 'Transfer To Reserve Fund Or Other Account',
          data: 'TransferToReserveFundOrOtherAccount'
        }, {
          title: 'Scheme Code',
          data: 'SchemeCode'
        }, {
          title: 'Account No',
          data: 'AccountNo'
        }],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
      //row click handler code

      /**
     * @rowCallback function for editClickHandler and delClickHandler to passes table data to there filds
     @return row 
     */
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
    this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.ngscheme = data[0].value
    })

    this.http.get(this.url + '/dividend-calculation').subscribe((data) => {
      this.warrentDate = data
    })
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
      AC_TYPE: ['',[Validators.required]],
      WARRENT_DATE: ['', [Validators.required]],
      AC_NO: ['', [Validators.pattern]]
    });
  }
  selectedWarrentDate
  selectedDivFromYear
  selectedDivToYear

  getWarrentDetails(event) {
    
    this.selectedWarrentDate = event.WARRENT_DATE
    this.selectedDivFromYear = event.DIV_FROM_YEAR
    this.selectedDivToYear = event.DIV_TO_YEAR
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  /**
* @editClickHandler function for edit button clicked
*/

  editClickHandler(info: any): void {
    this.message.WarrantDate = info.WarrantDate;
    this.message.TransferToReserveFundOrOtherAccount = info.TransferToReserveFundOrOtherAccount;
    this.message.SchemeCode = info.SchemeCode;
    this.message.AccountNo = info.AccountNo;


    //code for chekbox
    if (this.message.TransferToReserveFundOrOtherAccount == "Yes") {
      this.isTransferToReserveFundOrOtherAccount = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isTransferToReserveFundOrOtherAccount = false;   //return boolean value and display unchecked checkbox
    }
    this.showButton = false;
    this.updateShow = true;
  }

  /**
 * @updateData function for update data 
 */
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    // this.form.reset();
  }

  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.WarrantDate = info.WarrantDate;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Warrant Date." + this.message.WarrantDate + "  data",
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
