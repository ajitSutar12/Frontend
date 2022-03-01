import { Component, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
// import { MembernoService } from '../../../../shared/elements/memberno.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { data } from 'jquery';
import { Subject } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';


// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DividendCalculation {
  id: number;
  AC_TYPE:string
  FROM_AC:string
  TO_AC:string
  DIV_FROMDATE:Date
  DIV_TODATE:Date
  WARRENT_DATE:Date
  Dividend:number
  Bonus:number
}

@Component({
  selector: 'app-dividend-calculation',
  templateUrl: './dividend-calculation.component.html',
  styleUrls: ['./dividend-calculation.component.scss']
})

export class DividendCalculationComponent implements OnInit {
  //api
  url = environment.base_url;
  formSubmitted = false;
  angForm: FormGroup;

  dividendcalculation: DividendCalculation[];
  dtExportButtonOptions: any = {};

  // a: Array<IOption> = this.SchemeCodeService.getCharacters();
  WarrantDate: Array<IOption> = this.SchemeCodeService.getCharacters();
  BranchCode: Array<IOption> = this.BranchService.getCharacters();
  // b: Array<IOption> = this.MembernoService.getCharacters();

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  showButton: boolean = true;
  updateShow: boolean = false;


  // dropdown ngmodel names
  
  //Scheme type variable
  schemeType: string = 'SH'
  shareSchemeType
  scheme: any[];
  ngscheme:any=null
  ngfromac:any=null
  ngtoac:any=null

  // date variables
  divfromdate:any=null
  divtodate:any=null
  warrentdate:any=null
  maxDate: Date;
  minDate: Date;
  

  private dataSub: Subscription = null;
  fromAC: any[];
  ToAC: any[];
  getschemename: any;
  filterData: any;
  page: number;
  

  constructor(private fb: FormBuilder, public SchemeCodeService: SchemeCodeService, 
    public BranchService: BranchService, 
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    // public MembernoService: MembernoService,
    private config: NgSelectConfig,) { 
      
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
    }

  ngOnInit(): void {
    this.createForm(); 
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: "full_numbers",
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;

        dataTableParameters.columns.forEach((element) => {
          if (element.search.value != "") {
            let string = element.search.value;
            this.filterData[element.data] = string;
          } else {
            let getColumnName = element.data;
            let columnValue = element.value;
            if (this.filterData.hasOwnProperty(element.data)) {
              let value = this.filterData[getColumnName];
              if (columnValue != undefined || value != undefined) {
                delete this.filterData[element.data];
              }
            }
          }
        });
        dataTableParameters["filterData"] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + "/market-shares",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.dividendcalculation = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },

      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'AC_TYPE'
        }, 
        {
          title: 'Membership From',
          data: 'FROM_AC'
        },
        {
          title: 'Membership To',
          data: 'TO_AC'
        }, 
        {
          title: 'Div.Date From',
          data: 'DIV_FROMDATE'
        }, 
        {
          title: 'Div.Date To',
          data: 'DIV_TODATE'
        }, 
        {
          title: 'Warrent Date',
          data: 'WARRENT_DATE'
        },
        {
          title: 'Dividend %',
          data: 'Dividend'
        },  
        {
          title: 'Bonus %',
          data: 'Bonus'
        },  

      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],

    };

    this.dtExportButtonOptions = {
      ajax: 'fake-data/dividend-calculation.json',
      
      //row click handler code

      /**
     * @rowCallback function for editClickHandler and delClickHandler to passes table data to there filds
     @return row 
     */
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   const self = this;
      //   $('td', row).off('click');
      //   $('td', row).on('click', '#editbtn', () => {
      //     self.editClickHandler(data);
      //   });
      //   $('td', row).on('click', '#delbtn', () => {
      //     self.delClickHandler(data);
      //   });
      //   return row;
      // }
    };
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.ngscheme = data[0].value
    })
    // this.dataSub = this.BranchService.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    // });
    // this.dataSub = this.MembernoService.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    // });
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
      AC_TYPE: ['', [Validators.required, Validators.pattern]],
      FROM_AC: ['', [Validators.required, Validators.pattern]],
      TO_AC: ['', [Validators.required, Validators.pattern]],
      DIV_FROMDATE: ['', [Validators.required, Validators.pattern]],
      DIV_TODATE: ['', [Validators.required, Validators.pattern]],
      WARRENT_DATE: ['', [Validators.required, Validators.pattern]],
      Dividend: ['', [Validators.required, Validators.pattern]],
      Bonus: ['', [Validators.required, Validators.pattern]],
    });
  }

  //get account no according scheme
  getAccountList(event) {
    debugger
    this.ngfromac = null
    this.ngtoac = null
    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    let branchCode = result.branch.id;
    // this.arrTable = []
    // this.npaEntryArray = []
    let obj = [this.ngscheme,branchCode]
    console.log(obj)
    // this.schemeAccountNoService.getShareSchemeList1(obj).subscribe(data => {
    //         this.ToAC = data
    //         this.fromAC = data
    // }),
    switch (event.name) {
      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      
    }
    
    // this.getschemename = event.name
    console.log(data)
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
    
    this.updateShow = true;
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.ngscheme=null
    this.ngfromac=null
    this.ngtoac=null
  }

  /**
  * @updateData function for update data 
  */
  updateData() {
    // this.showButton = true;
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
    // this.message.SchemeCode = info.SchemeCode;
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "Do you want to delete Scheme Code." + this.message.SchemeCode + "  data",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#229954',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your data has been deleted.',
    //       'success'
    //     )
    //   } else if (
    //     result.dismiss === Swal.DismissReason.cancel
    //   ) {
    //     Swal.fire(
    //       'Cancelled',
    //       'Your data is safe.',
    //       'error'
    //     )
    //   }
    // })
  }
}

