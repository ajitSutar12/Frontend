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
import { DividendTransferPostingService } from './dividend-transfer-posting.service'
@Component({
  selector: 'app-dividend-transfer-posting',
  templateUrl: './dividend-transfer-posting.component.html',
  styleUrls: ['./dividend-transfer-posting.component.scss']
})

export class DividendTransferPostingComponent implements OnInit {
  formSubmitted: false;
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
  ngtoac: any = null
  schemeACNo

  //for date
  maxDate: Date;
  minDate: Date;
  warrentdate: any = null

  //Scheme type variable
  schemeType: string = 'GL'

  ngwarrentDate: any = null;
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

  constructor(private fb: FormBuilder, private http: HttpClient, private config: NgSelectConfig, private _service: DividendTransferPostingService,
    private schemeCodeDropdownService: SchemeCodeDropdownService, public SchemeCodeService: SchemeCodeService) { }

  ngOnInit(): void {
    this.createForm();
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

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      // this.ngscheme = data[0].value
      this.getAccountList()
    })

    this.http.get(this.url + '/dividend-transfer-posting').subscribe((data) => {
      this.warrentDate = data
    })
  }



  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: [''],
      WARRENT_DATE: ['', [Validators.required]],
      AC_NO: ['']
    });
    this.angForm.controls['AC_TYPE'].disable()
    this.angForm.controls['AC_NO'].disable()
    this.ngscheme = null
    this.ngtoac = null
  }
  selectedWarrentDate
  selectedDivFromYear
  selectedDivToYear

  getWarrentDetails(event) {
    this.selectedWarrentDate = event.WARRENT_DATE
    this.selectedDivFromYear = event.DIV_FROM_YEAR
    this.selectedDivToYear = event.DIV_TO_YEAR
  }


  //get account no according scheme
  getAccountList() {
    this.ngtoac = null
    this.http.get(this.url + '/gl-account-master/divAccount/' + this.ngscheme).subscribe((data) => {
      console.log(data)
      this.schemeACNo = data
    })

  }
  isTransferReserve: boolean = false
  //update checkbox status in array
  checkTranserReserve(flag) {
    if (flag.target.checked) {
      this.angForm.controls['AC_TYPE'].enable()
      this.angForm.controls['AC_NO'].enable()
      this.isTransferReserve = true
    }
    else {
      this.angForm.controls['AC_TYPE'].disable()
      this.angForm.controls['AC_NO'].disable()
      this.ngscheme = null
      this.ngtoac = null
      this.isTransferReserve = true
    }
  }


  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const dataToSend = {
      DIV_TRANSFER_ACTYPE: this.ngscheme,
      DIV_TRANSFER_ACNO: this.ngtoac,
      WARRENT_DATE: this.selectedWarrentDate,
      DIV_FROM_YEAR: this.selectedDivFromYear,
      DIV_TO_YEAR: this.selectedDivToYear,
      USER: result.USER_NAME,
      isTransferReserve: this.isTransferReserve
    }
    this._service.postData(dataToSend).subscribe(data1 => {
      console.log(data1, 'posting data')
      data1.length != 0 ? Swal.fire('Success!', 'Data Added Successfully !', 'success') : Swal.fire('Info!', 'No Any Records Found!', 'info');
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();

  }

  resetForm() {
    this.createForm()
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
