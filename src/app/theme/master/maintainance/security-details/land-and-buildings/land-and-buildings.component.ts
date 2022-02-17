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
import { Subject } from "rxjs";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { landandbuildingsService } from "./land-and-buildings.service";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
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
interface LandMaster {
  id:number;
    AC_ACNOTYPE:string;
    AC_TYPE:number;
  SUBMISSION_DATE: Date;
  VALUE: number;
  LOCATION: string;
  AREA: number;
  UNIT_AREA: string;
  MARGIN: number;
  REMARK: string;
  CITY_SURVEY_NO: string;
  CITY_SURVEY_DATE: Date;
  REG_NO: string;
}

@Component({
  selector: "app-land-and-buildings",
  templateUrl: "./land-and-buildings.component.html",
  styleUrls: ["./land-and-buildings.component.scss"],
})
export class LandAndBuildingsComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //passing data form child to parent
  @Output() newLandBuldingEvent = new EventEmitter<any>();
  datemax: string;
  newbtnShow: boolean;
  newItemEvent(value) {
    this.newLandBuldingEvent.emit(value);
  }
  //passing data from parent to child component
   @Input() scheme:any;
   @Input() Accountno:any;
   @Input() AC_ACNOTYPE: any;
  //api
  url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  isnew_equip: boolean = false;
  new_article: boolean;

  updateID: number; //variable for updating

  // for date 
  submissiondate:any=null
  citysurveydate:any=null
  maxDate: Date;
  minDate: Date;

  // Store data from backend
  landMasters: LandMaster[];
  
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData= {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _land: landandbuildingsService,
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
            this.url + "/land-and-buildings",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.landMasters = resp.data;
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
          title: "Submission Date",
          data: "SUBMISSION_DATE",
        },
        {
          title: "Valuation Amount",
          data: "VALUE",
        },
        {
          title: "Location.",
          data: "LOCATION",
        },
        {
          title: "Area",
          data: "AREA",
        },
        {
          title: "Unit Area",
          data: "UNIT_AREA",
        },
        {
          title: "Margin %",
          data: "MARGIN",
        },
        {
          title: "Remarks",
          data: "REMARK",
        },
          
        {
          title: "City Survey Number",
          data: "CITY_SURVEY_NO",
        },
        {
          title: "City Survey Date",
          data: "CITY_SURVEY_DATE",
        },
        {
          title: "Registration Number",
          data: "REG_NO",
        },
       
      
       
      ],
      dom: "Blrtip",
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      SUBMISSION_DATE: ["", [Validators.required]],
      VALUE: ["", [Validators.pattern, Validators.required]],
      LOCATION: ["", [Validators.pattern, Validators.required]],
      AREA: ["", [Validators.pattern, Validators.required]],
      UNIT_AREA: ["", [Validators.pattern, Validators.required]],
      MARGIN: ["", [Validators.pattern]],
      REMARK: ["", [Validators.pattern]],
      CITY_SURVEY_NO: ["", [Validators.pattern, Validators.required]],
      CITY_SURVEY_DATE: ["", [Validators.required]],
      REG_NO: ["", [Validators.pattern, Validators.required]],
    });
  }

  submit(event) {
    let submissiondate
    let citysurveydate
    event.preventDefault();
    this.formSubmitted = true;

    if (this.angForm.valid) {
      console.log(this.angForm.value); // Process your form
      
      const formVal = this.angForm.value;
      const dataToSend = {
        AC_TYPE: this.scheme,
        AC_NO: this.Accountno,
        AC_ACNOTYPE: this.AC_ACNOTYPE,
        'SUBMISSION_DATE': (formVal.SUBMISSION_DATE == '' || formVal.SUBMISSION_DATE == 'Invalid date') ? submissiondate = '' : submissiondate = moment(formVal.SUBMISSION_DATE).format('DD/MM/YYYY'),
        // SUBMISSION_DATE: formVal.SUBMISSION_DATE,
        VALUE: formVal.VALUE,
        LOCATION: formVal.LOCATION,
        AREA: formVal.AREA,
        UNIT_AREA: formVal.UNIT_AREA,
        MARGIN: formVal.MARGIN,
        REMARK: formVal.REMARK,
        CITY_SURVEY_NO: formVal.CITY_SURVEY_NO,
        'CITY_SURVEY_DATE': (formVal.CITY_SURVEY_DATE == '' || formVal.CITY_SURVEY_DATE == 'Invalid date') ? citysurveydate = '' : citysurveydate = moment(formVal.CITY_SURVEY_DATE).format('DD/MM/YYYY'),
        // CITY_SURVEY_DATE: formVal.CITY_SURVEY_DATE,
        REG_NO: formVal.REG_NO,
      };
      this._land.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });
          // to reload after insertion of data
          // let info = []
          // info.push(data.id)
          // info.push("landBuilding")

          // this.newItemEvent(info);
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

   //check  if margin values are below 100
checkmargin(ele:any){ 
  //check  if given value  is below 100
  console.log(ele);
  if(ele <= 100){
console.log(ele);
  }
  else{
    Swal.fire("Invalid Input", "Please insert values below 100", "error");
  }
}

  updatecheckdata:any
  //function for edit button clicked
  editClickHandler(id: any): void {
    let submissiondate
    let citysurveydate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._land.getFormData(id).subscribe((data) => {
      this.updatecheckdata=data
      this.updateID = data.id;
        //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;
      console.log('scheme',data.AC_TYPE)
      // this.newItemEvent(dropdown.scheme)
      
      dropdown.account = data.AC_NO;
      console.log('account',data.AC_NO)
      // this.newItemEvent(dropdown.account)
      let obj1 = {
        'AccountType' :data.AC_TYPE,
        'AccountNo': data.AC_NO,
        'SchemeType':data.AC_ACNOTYPE
      }
      this.newLandBuldingEvent.emit(obj1);
      this.scheme=data.AC_TYPE
      this.Accountno=data.AC_NO
      this.angForm.patchValue({
        // AC_TYPE:this.scheme._value[0],
        // AC_NO:this.Accountno,
        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,
        // SUBMISSION_DATE: data.SUBMISSION_DATE,
        VALUE: data.VALUE,
        LOCATION: data.LOCATION,
        AREA: data.AREA,
        UNIT_AREA: data.UNIT_AREA,
        MARGIN: data.MARGIN,
        REMARK: data.REMARK,
        CITY_SURVEY_NO: data.CITY_SURVEY_NO,
        'CITY_SURVEY_DATE': (data.CITY_SURVEY_DATE == 'Invalid date' || data.CITY_SURVEY_DATE == '' || data.CITY_SURVEY_DATE == null) ? citysurveydate = '' : citysurveydate = data.CITY_SURVEY_DATE,
        // CITY_SURVEY_DATE: data.CITY_SURVEY_DATE,
        REG_NO: data.REG_NO,
      });
    });
  }

  updateData() {
    let submissiondate
    let citysurveydate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data["AC_TYPE"]=this.scheme
    data["AC_NO"]=this.Accountno
    if(this.updatecheckdata.SUBMISSION_DATE!=data.SUBMISSION_DATE){
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
      }
      if(this.updatecheckdata.CITY_SURVEY_DATE!=data.CITY_SURVEY_DATE){
        (data.CITY_SURVEY_DATE == 'Invalid date' || data.CITY_SURVEY_DATE == '' || data.CITY_SURVEY_DATE == null) ? (citysurveydate = '', data['CITY_SURVEY_DATE'] = citysurveydate) : (citysurveydate = data.SUBMISSION_DATE, data['CITY_SURVEY_DATE'] = moment(citysurveydate).format('DD/MM/YYYY'))
        }
    this._land.updateData(data).subscribe(() => {
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
      text: "Do you want to delete Submission Date  data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._land.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }
  ngAfterViewInit(): void {
    // this.myInputField.nativeElement.focus();//for autofocus
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
    let obj1 = {
      'AccountType' : null,
      'AccountNo': null,
      // 'SchemeType':null
    }
    this.newLandBuldingEvent.emit(obj1);
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
