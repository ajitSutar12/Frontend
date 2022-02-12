import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { marketsharesomponentservice } from "./market-shares.component.service";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import * as moment from 'moment';



// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface MarketMaster {
  id:number;
  AC_ACNOTYPE:string;
  AC_TYPE:number;
  AC_NO:number;
  SECU_CODE:number;
  BRANCH_CODE:number;
  SUBMISSION_DATE: Date;
  CO_CODE: number;
  CO_NAME: string;
  MARKET_VALUE: number;
  MARGIN: number;
  SHARES: number;
  UPDATED_BY: string;
  RELEASE_DATE: Date;
  RELEASE_BY: string;
  SECURITY_TYPE:string;
}

@Component({
  selector: "app-market-shares",
  templateUrl: "./market-shares.component.html",
  styleUrls: ["./market-shares.component.scss"],
})
export class MarketSharesComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //passing data form child to parent
  @Output() newmarketShareEvent = new EventEmitter<string>();
  datemax: string;
  newbtnShow: boolean;
  newItemEvent(value) {
    this.newmarketShareEvent.emit(value);
  }
  //passing data from parent to child component
     @Input() scheme:any;
     @Input() Accountno:any;
  //api 
  url = environment.base_url;
  //autofocus
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
marketmaster: MarketMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

//  variables for date
submissiondate:any=null
releaseddate:any=null
maxDate: Date;
minDate: Date;


  constructor(
    private fb: FormBuilder,
    private _marketservice: marketsharesomponentservice,
    private http: HttpClient,
    public router: Router
  ) {
    // this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
    // console.log(this.datemax);
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
            this.marketmaster= resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
    
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        
        {
          title: "Co. Code",
          data: "CO_CODE",
        },
        {
          title: "Company Name ",
          data: "CO_NAME",
        },
        {
          title: "Market Value",
          data: "MARKET_VALUE",
        },
        {
          title: "Margin %",
          data: "MARGIN",
        },
        {
          title: "No. of Shares",
          data: "SHARES",
        },
        {
          title: "Subm. Date",
          data: "SUBMISSION_DATE",
        },
        {
          title: "Updated By",
          data: "UPDATED_BY",
        },
       
        
        {
          title: "Release Date",
          data: "RELEASE_DATE",
        },
        {
          title: "Release By",
          data: "RELEASE_BY",
        },
      ],
      dom: "Blrtip",
  
     
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      SUBMISSION_DATE: ["", [Validators.required]],
      CO_CODE: ["", [Validators.pattern, Validators.required]],
      CO_NAME: ["", [Validators.pattern, Validators.required]],
      MARKET_VALUE: ["", [Validators.pattern, Validators.required]],
      MARGIN: ["", [Validators.pattern, Validators.required]],
      SHARES: ["", [Validators.pattern]],
      UPDATED_BY: ["", [Validators.pattern, Validators.required]],
      RELEASE_DATE: ["", [Validators.required]],
      RELEASE_BY: ["", [Validators.pattern, Validators.required]],
    });
  }
  submit(event) {
   let submissiondate
   let releaseddate
    event.preventDefault();
    this.formSubmitted = true;

    if (this.angForm.valid) {
      console.log(this.angForm.value); // Process your form
      
    const formVal = this.angForm.value;
    const dataToSend = {
      // AC_TYPE:this.scheme._value[0],
      // AC_NO:this.Accountno,
      'SUBMISSION_DATE': (formVal.SUBMISSION_DATE == '' || formVal.SUBMISSION_DATE == 'Invalid date') ? submissiondate = '' : submissiondate = moment(formVal.SUBMISSION_DATE).format('DD/MM/YYYY'),
      // SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      CO_CODE: formVal.CO_CODE,
      CO_NAME: formVal.CO_NAME,
      MARKET_VALUE: formVal.MARKET_VALUE,
      MARGIN: formVal.MARGIN,
      SHARES: formVal.SHARES,
      UPDATED_BY: formVal.UPDATED_BY,
      'RELEASE_DATE': (formVal.RELEASE_DATE == '' || formVal.RELEASE_DATE == 'Invalid date') ? releaseddate = '' : releaseddate = moment(formVal.RELEASE_DATE).format('DD/MM/YYYY'),
      // RELEASE_DATE: formVal.RELEASE_DATE,
      RELEASE_BY: formVal.RELEASE_BY,
    };
    this._marketservice.postData(dataToSend).subscribe(
      (data) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        this.formSubmitted = false;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
        // let info = []
        // info.push(data.id)
        // info.push("marketShare")

        // this.newItemEvent(info);
        // to reload after insertion of data

        // this.rerender();
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.resetForm();

    }
  }


  updatecheckdata:any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let submissiondate
    let releaseddate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._marketservice.getFormData(id).subscribe((data) => {
      this.updatecheckdata=data
      
  //sending values to parent
  let dropdown: any = {};
  dropdown.scheme = data.AC_TYPE;
  dropdown.account = data.AC_NO.toString();
      this.updateID = data.id;
      this.angForm.patchValue({
        // AC_TYPE:this.scheme._value[0],
        // AC_NO:this.Accountno,
        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,
        // SUBMISSION_DATE: data.SUBMISSION_DATE,
        CO_CODE: data.CO_CODE,
        CO_NAME: data.CO_NAME,
        MARKET_VALUE: data.MARKET_VALUE,
        MARGIN: data.MARGIN,
        SHARES: data.SHARES,
        UPDATED_BY: data.UPDATED_BY,
        'RELEASE_DATE': (data.RELEASE_DATE == 'Invalid date' || data.RELEASE_DATE == '' || data.RELEASE_DATE == null) ? releaseddate = '' : releaseddate = data.RELEASE_DATE,
        // RELEASE_DATE: data.RELEASE_DATE,
        RELEASE_BY: data.RELEASE_BY,
      });
    });
  }
  //check  if margin values are below 100
checkmargin(ele:any){ 
  //check  if given value  is below 100
  console.log(ele);
  if(ele <= 100){
console.log(ele);
  }
  else{
    Swal.fire("Invalid Input", "Please Insert Values Below 100", "error");
  }
}

  updateData() {
    let submissiondate
    let releaseddate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    if(this.updatecheckdata.SUBMISSION_DATE!=data.SUBMISSION_DATE){
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
      }
      if(this.updatecheckdata.RELEASE_DATE!=data.RELEASE_DATE){
        (data.RELEASE_DATE == 'Invalid date' || data.RELEASE_DATE == '' || data.RELEASE_DATE == null) ? (releaseddate = '', data['RELEASE_DATE'] = releaseddate) : (releaseddate = data.RELEASE_DATE, data['RELEASE_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
        }
    this._marketservice.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      // this.rerender();
      this.resetForm();
    });
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //function for delete button clicked
  delClickHandler(id: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want To Delete Company Code Data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._marketservice.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your Data Has Been Deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your Data Has Been Deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data Is Safe.", "error");
      }
    });
  }
  ngAfterViewInit(): void {
    // this.myInputField.nativeElement.focus();//autofocus
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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
  // Reset Function
  resetForm() {
    this.createForm();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
